import crypto from "node:crypto";

import { NextResponse } from "next/server";

import { persistLead } from "@/lib/lead-store";
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

  const persistResult = await persistLead(lead);
  const emailResult = await sendLeadEmails(lead).catch((error) => ({
    ok: false,
    provider: "gmail" as const,
    reason: error instanceof Error ? error.message : "gmail_send_failed",
  }));

  if (!persistResult.ok && !emailResult.ok) {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit inquiry. Please try again later.",
        reason: persistResult.reason ?? emailResult.reason ?? "lead_delivery_failed",
        routed: {
          localCsv: false,
          gmail: false,
        },
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Inquiry submitted successfully.",
    routed: {
      localCsv: persistResult.ok && persistResult.provider === "local_csv",
      gmail: emailResult.ok,
    },
    warnings: [persistResult, emailResult]
      .filter((result) => !result.ok)
      .map((result) => ({
        provider: result.provider,
        reason: result.reason,
      })),
  });
}
