import { JWT } from "google-auth-library";

import type { LeadSubmission } from "@/lib/validation";

type DeliveryResult = {
  ok: boolean;
  provider: "google_sheets";
  reason?: string;
};

function env(name: string) {
  return process.env[name]?.trim() ?? "";
}

function sheetTabName() {
  return env("GOOGLE_SHEETS_LEAD_TAB") || "Website Leads";
}

function toA1Range(tabName: string) {
  const quotedTabName = `'${tabName.replace(/'/g, "''")}'`;
  return `${quotedTabName}!A:S`;
}

export async function persistLeadToGoogleSheets(lead: LeadSubmission): Promise<DeliveryResult> {
  const spreadsheetId = env("GOOGLE_SHEETS_LEAD_SHEET_ID");
  const serviceAccountEmail = env("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  const serviceAccountPrivateKey = env("GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY").replace(/\\n/g, "\n");

  if (!spreadsheetId || !serviceAccountEmail || !serviceAccountPrivateKey) {
    return { ok: false, provider: "google_sheets", reason: "missing_google_sheets_config" };
  }

  try {
    const auth = new JWT({
      email: serviceAccountEmail,
      key: serviceAccountPrivateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const accessToken = await auth.getAccessToken();

    if (!accessToken.token) {
      return { ok: false, provider: "google_sheets", reason: "google_sheets_token_failed" };
    }

    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}/values/${encodeURIComponent(toA1Range(sheetTabName()))}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values: [
            [
              new Date().toISOString(),
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
              lead.message,
              lead.product_interest,
              lead.lead_source,
              lead.partner_related ? "true" : "false",
              lead.registration_required ? "true" : "false",
              lead.pageUrl,
              "website",
              process.env.NETLIFY_SITE_NAME || "local",
            ],
          ],
        }),
      },
    );

    if (!response.ok) {
      return { ok: false, provider: "google_sheets", reason: `google_sheets_append_failed_${response.status}` };
    }

    return { ok: true, provider: "google_sheets" };
  } catch (error) {
    return {
      ok: false,
      provider: "google_sheets",
      reason: error instanceof Error ? error.message : "google_sheets_append_failed",
    };
  }
}
