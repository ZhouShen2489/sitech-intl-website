import { OAuth2Client } from "google-auth-library";

import type { LeadSubmission } from "@/lib/validation";

type DeliveryResult = {
  ok: boolean;
  provider: "gmail";
  reason?: string;
};

function env(name: string) {
  return process.env[name]?.trim() ?? "";
}

function recipients(value: string) {
  return value
    .split(/[;,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function isChineseLead(lead: LeadSubmission) {
  return lead.locale === "zh";
}

async function createTransport() {
  // Source guidance:
  // GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET come from Google Cloud Console.
  // GOOGLE_REFRESH_TOKEN should be generated for the Gmail-sending account.
  // GMAIL_SENDER is the mailbox identity used to send both internal notifications
  // and the visitor confirmation email.
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

function encodeEmailHeader(value: string) {
  return /[^\x20-\x7E]/.test(value)
    ? `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`
    : value;
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
  const boundary = `codex-${Date.now().toString(16)}`;
  return [
    `From: ${from}`,
    `To: ${to}`,
    ...(replyTo ? [`Reply-To: ${replyTo}`] : []),
    `Subject: ${encodeEmailHeader(subject)}`,
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

async function sendViaGmailApi({
  accessToken,
  raw,
}: {
  accessToken: string;
  raw: string;
}) {
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

function internalHtml(lead: LeadSubmission, submittedAt: string) {
  return `
    <h2>New website lead</h2>
    <p><strong>Submission time:</strong> ${submittedAt}</p>
    <p><strong>Lead source:</strong> ${lead.source}</p>
    <p><strong>Locale:</strong> ${lead.locale}</p>
    <p><strong>Full name:</strong> ${lead.fullName}</p>
    <p><strong>Work email:</strong> ${lead.workEmail}</p>
    <p><strong>Company:</strong> ${lead.companyName || "-"}</p>
    <p><strong>Job title:</strong> ${lead.jobTitle || "-"}</p>
    <p><strong>Company size:</strong> ${lead.companySize || "-"}</p>
    <p><strong>Phone:</strong> ${lead.phone || "-"}</p>
    <p><strong>Industry:</strong> ${lead.industry || "-"}</p>
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

function internalText(lead: LeadSubmission, submittedAt: string) {
  return [
    `Submission time: ${submittedAt}`,
    `Lead source: ${lead.source}`,
    `Locale: ${lead.locale}`,
    `Full name: ${lead.fullName}`,
    `Work email: ${lead.workEmail}`,
    `Company: ${lead.companyName || "-"}`,
    `Job title: ${lead.jobTitle || "-"}`,
    `Company size: ${lead.companySize || "-"}`,
    `Phone: ${lead.phone || "-"}`,
    `Industry: ${lead.industry || "-"}`,
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

function confirmationHtml(lead: LeadSubmission) {
  if (isChineseLead(lead)) {
    return `
      <p>${lead.fullName}，你好：</p>
      <p>我们已经收到你的请求，团队会尽快查看并与你取得联系。</p>
      <p>如果你还有补充信息，可以直接回复这封邮件，或发送邮件到 info@sitech-intl.com。</p>
      <p>此致<br />Si-Tech Intl</p>
    `;
  }

  return `
    <p>Hi ${lead.fullName},</p>
    <p>We have received your inquiry and our team will contact you as soon as possible.</p>
    <p>If you would like to add anything else, you can reply directly to this email or contact us at info@sitech-intl.com.</p>
    <p>Best regards,<br />Si-Tech Intl</p>
  `;
}

function confirmationText(lead: LeadSubmission) {
  if (isChineseLead(lead)) {
    return [
      `${lead.fullName}，你好：`,
      "",
      "我们已经收到你的请求。",
      "团队会尽快查看并与你取得联系。",
      "",
      "如果你还有补充信息，可以直接回复这封邮件，或发送邮件到 info@sitech-intl.com。",
      "",
      "此致",
      "Si-Tech Intl",
    ].join("\n");
  }

  return [
    `Hi ${lead.fullName},`,
    "",
    "We have received your inquiry.",
    "Our team will contact you as soon as possible.",
    "",
    "If you would like to add anything else, you can reply directly to this email or contact us at info@sitech-intl.com.",
    "",
    "Best regards,",
    "Si-Tech Intl",
  ].join("\n");
}

export async function sendLeadEmails(lead: LeadSubmission): Promise<DeliveryResult> {
  const recipient = recipients(env("CONTACT_RECIPIENT") || "info@sitech-intl.com");
  const transport = await createTransport();

  if (recipient.length === 0 || !transport) {
    return {
      ok: false,
      provider: "gmail",
      reason: "missing_mail_config",
    };
  }

  const submittedAt = new Date().toISOString();

  await sendViaGmailApi({
    accessToken: transport.accessToken,
    raw: buildMimeMessage({
      from: transport.sender,
      to: recipient.join(", "),
      replyTo: lead.workEmail,
      subject: `[Website Lead] ${lead.interestedIn} - ${lead.companyName || lead.fullName}`,
      text: internalText(lead, submittedAt),
      html: internalHtml(lead, submittedAt),
    }),
  });

  await sendViaGmailApi({
    accessToken: transport.accessToken,
    raw: buildMimeMessage({
      from: transport.sender,
      to: lead.workEmail,
      replyTo: recipient[0],
      subject: isChineseLead(lead)
        ? "我们已经收到你的请求 | Si-Tech Intl"
        : "We received your inquiry | Si-Tech Intl",
      text: confirmationText(lead),
      html: confirmationHtml(lead),
    }),
  });

  return {
    ok: true,
    provider: "gmail",
  };
}
