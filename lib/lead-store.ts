import { access, appendFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import type { LeadSubmission } from "@/lib/validation";

type DeliveryResult = {
  ok: boolean;
  provider: "local_csv";
  reason?: string;
};

function resolveStorageDirectory() {
  if (process.env.LEAD_CSV_DIR?.trim()) {
    return process.env.LEAD_CSV_DIR.trim();
  }

  const cwd = process.cwd();

  if (path.basename(cwd) === "company-site") {
    return path.join(cwd, "data");
  }

  return path.join(cwd, "company-site", "data");
}

function csvValue(value: string) {
  return `"${value.replace(/"/g, '""')}"`;
}

export async function persistLeadToCsv(lead: LeadSubmission): Promise<DeliveryResult> {
  try {
    const dataDir = resolveStorageDirectory();
    const filePath = path.join(dataDir, "contact-submissions.csv");

    await mkdir(dataDir, { recursive: true });

    try {
      await access(filePath);
    } catch {
      const header = [
        "submitted_at",
        "full_name",
        "work_email",
        "company_name",
        "job_title",
        "company_size",
        "phone",
        "industry",
        "interested_in",
        "message",
        "locale",
        "source",
        "page_url",
        "product_interest",
        "lead_source",
        "partner_related",
        "registration_required",
      ].join(",");
      await writeFile(filePath, `${header}\n`, "utf8");
    }

    const row = [
      new Date().toISOString(),
      lead.fullName,
      lead.workEmail,
      lead.companyName,
      lead.jobTitle,
      lead.companySize,
      lead.phone,
      lead.industry,
      lead.interestedIn,
      lead.message,
      lead.locale,
      lead.source,
      lead.pageUrl,
      lead.product_interest,
      lead.lead_source,
      lead.partner_related ? "true" : "false",
      lead.registration_required ? "true" : "false",
    ]
      .map((value) => csvValue(String(value ?? "")))
      .join(",");

    await appendFile(filePath, `${row}\n`, "utf8");

    return {
      ok: true,
      provider: "local_csv",
    };
  } catch (error) {
    return {
      ok: false,
      provider: "local_csv",
      reason: error instanceof Error ? error.message : "unknown_error",
    };
  }
}
