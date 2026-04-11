import { OAuth2Client } from "google-auth-library";
import nodemailer from "nodemailer";

import type { LeadSubmission } from "@/lib/validation";

type DeliveryResult = {
  ok: boolean;
  provider: "gmail";
  reason?: string;
};

function env(name: string) {
  return process.env[name]?.trim() ?? "";
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

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: sender,
      clientId,
      clientSecret,
      refreshToken,
      accessToken: accessToken.token,
    },
  });
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
    <p><strong>Phone:</strong> ${lead.phone || "-"}</p>
    <p><strong>Industry:</strong> ${lead.industry || "-"}</p>
    <p><strong>Interested in:</strong> ${lead.interestedIn}</p>
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
    `Phone: ${lead.phone || "-"}`,
    `Industry: ${lead.industry || "-"}`,
    `Interested in: ${lead.interestedIn}`,
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
  const sender = env("GMAIL_SENDER");
  const recipient = env("CONTACT_RECIPIENT") || "info@sitech-intl.com";
  const transport = await createTransport();

  if (!sender || !transport) {
    return {
      ok: false,
      provider: "gmail",
      reason: "missing_mail_config",
    };
  }

  const submittedAt = new Date().toISOString();

  await transport.sendMail({
    from: sender,
    to: recipient,
    replyTo: lead.workEmail,
    subject: `[Website Lead] ${lead.interestedIn} - ${lead.companyName || lead.fullName}`,
    text: internalText(lead, submittedAt),
    html: internalHtml(lead, submittedAt),
  });

  await transport.sendMail({
    from: sender,
    to: lead.workEmail,
    replyTo: recipient,
    subject: isChineseLead(lead)
      ? "我们已经收到你的请求 | Si-Tech Intl"
      : "We received your inquiry | Si-Tech Intl",
    text: confirmationText(lead),
    html: confirmationHtml(lead),
  });

  return {
    ok: true,
    provider: "gmail",
  };
}
