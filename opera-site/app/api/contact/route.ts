import { NextResponse } from "next/server";
import { z } from "zod";

import { persistLead } from "@/lib/lead-store";

const locales = ["en", "zh"] as const;

const leadSchema = z.object({
  fullName: z.string().trim().min(2).max(200),
  workEmail: z.string().trim().email().max(320),
  companyName: z.string().trim().max(200).optional().default(""),
  jobTitle: z.string().trim().max(200).optional().default(""),
  companySize: z.string().trim().max(120).optional().default(""),
  phone: z.string().trim().max(80).optional().default(""),
  industry: z.string().trim().max(120).optional().default(""),
  interestedIn: z.string().trim().min(2).max(120),
  message: z.string().trim().min(10).max(4000),
  consent: z.literal(true),
  pageUrl: z.string().trim().url().optional().or(z.literal("")).default(""),
  website: z.string().trim().max(0).optional().default(""),
  locale: z.enum(locales).default("en"),
  source: z.string().trim().min(2).max(120).default("enterprise-opera-os"),
  product_interest: z.string().trim().max(120).optional().default("enterprise_opera_os"),
  lead_source: z.string().trim().max(120).optional().default("opera_site"),
  partner_related: z.boolean().optional().default(false),
  registration_required: z.boolean().optional().default(true),
});

type LeadSubmission = z.infer<typeof leadSchema>;

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

  const lead = parsed.data;

  if (lead.website) {
    return NextResponse.json({ success: true, message: "Inquiry submitted successfully." });
  }

  try {
    const persistResult = await persistLead(lead);

    if (!persistResult.ok) {
      throw new Error(persistResult.reason ?? "lead_persistence_failed");
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully.",
      routed: {
        localCsv: persistResult.provider === "local_csv",
        netlifyBlobs: persistResult.provider === "netlify_blobs",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit inquiry. Please try again later.",
        reason: error instanceof Error ? error.message : "csv_failed",
      },
      { status: 500 },
    );
  }
}
