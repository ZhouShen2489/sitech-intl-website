import crypto from "node:crypto";
import { appendFile, mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

import { OAuth2Client } from "google-auth-library";
import { NextResponse } from "next/server";
import { z } from "zod";

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

function env(name: string) {
  return process.env[name]?.trim() ?? "";
}

function recipients(value: string) {
  return value
    .split(/[;,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

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

function csvCell(value: string) {
  return `"${value.replace(/"/g, "\"\"")}"`;
}

async function ensureCsvFile(csvPath: string) {
  try {
    await stat(csvPath);
  } catch {
    await mkdir(path.dirname(csvPath), { recursive: true });
    await writeFile(
      csvPath,
      [
        "submission_id",
        "submitted_at",
        "source",
        "locale",
        "full_name",
        "work_email",
        "company_name",
        "job_title",
        "company_size",
        "phone",
        "industry",
        "interested_in",
        "product_interest",
        "lead_source",
        "partner_related",
        "registration_required",
        "page_url",
        "message",
      ].join(",") + "\n",
      "utf8",
    );
  }
}

async function appendSubmissionToCsv(lead: LeadSubmission, submissionId: string, submittedAt: string) {
  const csvPath = path.join(process.cwd(), "data", "contact-submissions.csv");
  await ensureCsvFile(csvPath);

  const line = [
    submissionId,
    submittedAt,
    lead.source,
    lead.locale,
    lead.fullName,
    lead.workEmail,
    lead.companyName,
    lead.jobTitle,
    lead.companySize,
    lead.phone,
    lead.industry,
    lead.interestedIn,
    lead.product_interest,
    lead.lead_source,
    lead.partner_related ? "true" : "false",
    lead.registration_required ? "true" : "false",
    lead.pageUrl,
    lead.message,
  ]
    .map((item) => csvCell(item))
    .join(",");

  await appendFile(csvPath, `${line}\n`, "utf8");
}

async function createTransport() {
  const clientId = env("GOOGLE_CLIENT_ID");
  const clientSecret = env("GOOGLE_CLIENT_SECRET");
  const refreshToken = env("GOOGLE_REFRESH_TOKEN");
  const sender = env("GMAIL_SENDER");

  if (!clientId || !clientSecret || !refreshToken || !sender) {
    return null;
  }

  const oauthClient = new OAuth2Client(clientId, clientSecret);
  oauthClient.setCredentials({ refresh_token: refreshToken });
  const accessToken = await oauthClient.getAccessToken();

  if (!accessToken.token) {
    return null;
  }

  return {
    sender,
    accessToken: accessToken.token,
  };
}

function toBase64Url(value: string) {
  return Buffer.from(value, "utf8").toString("base64url");
}

function buildMimeMessage({
  from,
  to,
  replyTo,
  subject,
  text,
  html,
}: {
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
}) {
  const boundary = `opera-${Date.now().toString(16)}`;
  return [
    `From: ${from}`,
    `To: ${to}`,
    ...(replyTo ? [`Reply-To: ${replyTo}`] : []),
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary=\"${boundary}\"`,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 7bit",
    "",
    text,
    "",
    `--${boundary}`,
    "Content-Type: text/html; charset=UTF-8",
    "Content-Transfer-Encoding: 7bit",
    "",
    html,
    "",
    `--${boundary}--`,
    "",
  ].join("\r\n");
}

async function sendViaGmailApi({ accessToken, raw }: { accessToken: string; raw: string }) {
  const response = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      raw: toBase64Url(raw),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`gmail_api_send_failed: ${response.status} ${errorText}`);
  }
}

function internalText(lead: LeadSubmission, submissionId: string, submittedAt: string) {
  return [
    `Submission ID: ${submissionId}`,
    `Submission time: ${submittedAt}`,
    `Lead source: ${lead.source}`,
    `Locale: ${lead.locale}`,
    `Full name: ${lead.fullName}`,
    `Work email: ${lead.workEmail}`,
    `Company: ${lead.companyName || "-"}`,
    `Interested in: ${lead.interestedIn}`,
    `Product interest: ${lead.product_interest || "-"}`,
    `Lead source tag: ${lead.lead_source || "-"}`,
    `Partner related: ${lead.partner_related ? "true" : "false"}`,
    `Registration required: ${lead.registration_required ? "true" : "false"}`,
    `Page URL: ${lead.pageUrl || "-"}`,
    "",
    "Inquiry details:",
    lead.message,
  ].join("\n");
}

function internalHtml(lead: LeadSubmission, submissionId: string, submittedAt: string) {
  return `
    <h2>New Enterprise Opera OS inquiry</h2>
    <p><strong>Submission ID:</strong> ${submissionId}</p>
    <p><strong>Submission time:</strong> ${submittedAt}</p>
    <p><strong>Lead source:</strong> ${lead.source}</p>
    <p><strong>Locale:</strong> ${lead.locale}</p>
    <p><strong>Full name:</strong> ${lead.fullName}</p>
    <p><strong>Work email:</strong> ${lead.workEmail}</p>
    <p><strong>Company:</strong> ${lead.companyName || "-"}</p>
    <p><strong>Interested in:</strong> ${lead.interestedIn}</p>
    <p><strong>Product interest:</strong> ${lead.product_interest || "-"}</p>
    <p><strong>Lead source tag:</strong> ${lead.lead_source || "-"}</p>
    <p><strong>Partner related:</strong> ${lead.partner_related ? "true" : "false"}</p>
    <p><strong>Registration required:</strong> ${lead.registration_required ? "true" : "false"}</p>
    <p><strong>Page URL:</strong> ${lead.pageUrl || "-"}</p>
    <p><strong>Inquiry details:</strong></p>
    <p>${lead.message.replace(/\n/g, "<br />")}</p>
  `;
}

function confirmationText(lead: LeadSubmission) {
  if (lead.locale === "zh") {
    return [
      `${lead.fullName}，你好：`,
      "",
      "我们已经收到你的咨询。",
      "团队会尽快与你联系，继续讨论企业本体、数字孪生和业务协同行动的下一步。",
      "",
      "Si-Tech Intl",
    ].join("\n");
  }

  return [
    `Hi ${lead.fullName},`,
    "",
    "We received your inquiry.",
    "Our team will follow up soon to continue the conversation around enterprise ontology, digital twins, and coordinated action.",
    "",
    "Si-Tech Intl",
  ].join("\n");
}

function confirmationHtml(lead: LeadSubmission) {
  if (lead.locale === "zh") {
    return `
      <p>${lead.fullName}，你好：</p>
      <p>我们已经收到你的咨询。</p>
      <p>团队会尽快与你联系，继续讨论企业本体、数字孪生和业务协同行动的下一步。</p>
      <p>Si-Tech Intl</p>
    `;
  }

  return `
    <p>Hi ${lead.fullName},</p>
    <p>We received your inquiry.</p>
    <p>Our team will follow up soon to continue the conversation around enterprise ontology, digital twins, and coordinated action.</p>
    <p>Si-Tech Intl</p>
  `;
}

async function sendLeadEmails(lead: LeadSubmission, submissionId: string, submittedAt: string) {
  const recipient = recipients(env("CONTACT_RECIPIENT") || "info@sitech-intl.com");
  const transport = await createTransport();

  if (recipient.length === 0 || !transport) {
    throw new Error("missing_mail_config");
  }

  await sendViaGmailApi({
    accessToken: transport.accessToken,
    raw: buildMimeMessage({
      from: transport.sender,
      to: recipient.join(", "),
      replyTo: lead.workEmail,
      subject: `[Opera Inquiry] ${lead.companyName || lead.fullName}`,
      text: internalText(lead, submissionId, submittedAt),
      html: internalHtml(lead, submissionId, submittedAt),
    }),
  });

  await sendViaGmailApi({
    accessToken: transport.accessToken,
    raw: buildMimeMessage({
      from: transport.sender,
      to: lead.workEmail,
      replyTo: recipient[0],
      subject: lead.locale === "zh" ? "我们已经收到你的咨询 | Si-Tech Intl" : "We received your inquiry | Si-Tech Intl",
      text: confirmationText(lead),
      html: confirmationHtml(lead),
    }),
  });
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

  const submittedAt = new Date().toISOString();
  const submissionId = crypto.randomUUID();

  const [csvResult, mailResult] = await Promise.allSettled([
    appendSubmissionToCsv(lead, submissionId, submittedAt),
    sendLeadEmails(lead, submissionId, submittedAt),
  ]);

  if (csvResult.status === "fulfilled" || mailResult.status === "fulfilled") {
    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully.",
      submissionId,
      routed: {
        localCsv: csvResult.status === "fulfilled",
        gmail: mailResult.status === "fulfilled",
      },
    });
  }

  const csvReason =
    csvResult.status === "rejected" && csvResult.reason instanceof Error
      ? csvResult.reason.message
      : "csv_failed";
  const mailReason =
    mailResult.status === "rejected" && mailResult.reason instanceof Error
      ? mailResult.reason.message
      : "gmail_failed";

  return NextResponse.json(
    {
      success: false,
      message: "Unable to submit inquiry. Please try again later.",
      reason: `${csvReason}; ${mailReason}`,
    },
    { status: 500 },
  );
}
