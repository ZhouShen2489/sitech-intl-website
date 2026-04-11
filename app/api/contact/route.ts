import crypto from "node:crypto";

import { NextResponse } from "next/server";

import { submitLeadToHubSpot } from "@/lib/hubspot";
import { sendLeadEmails } from "@/lib/mailer";
import { leadSchema, normalizeLead } from "@/lib/validation";

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for") ?? "unknown";
  return crypto.createHash("sha256").update(forwardedFor).digest("hex").slice(0, 24);
}

function isRateLimited(key: string) {
  const now = Date.now();
  const record = rateLimitStore.get(key);

  if (!record || record.resetAt < now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return false;
  }

  if (record.count >= 8) {
    return true;
  }

  rateLimitStore.set(key, { ...record, count: record.count + 1 });
  return false;
}

export async function POST(request: Request) {
  const clientKey = getClientKey(request);

  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      {
        success: false,
        message: "Too many submissions. Please try again later.",
      },
      { status: 429 },
    );
  }

  const payload = await request.json();
  const parsed = leadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please complete all required fields before submitting.",
      },
      { status: 400 },
    );
  }

  const lead = normalizeLead(parsed.data);

  if (lead.website) {
    return NextResponse.json({ success: true, message: "Inquiry submitted successfully." });
  }

  const [hubspotResult, mailResult] = await Promise.allSettled([
    submitLeadToHubSpot(lead),
    sendLeadEmails(lead),
  ]);

  const hubspotOk = hubspotResult.status === "fulfilled" && hubspotResult.value.ok;
  const mailOk = mailResult.status === "fulfilled" && mailResult.value.ok;

  if (!hubspotOk && !mailOk) {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit inquiry. Please try again later.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Inquiry submitted successfully.",
    routed: {
      hubspot: hubspotOk,
      gmail: mailOk,
    },
  });
}
