import { access, appendFile, mkdir, readFile, writeFile } from "node:fs/promises";
import crypto from "node:crypto";
import path from "node:path";

import type { LeadSubmission } from "@/lib/validation";

export type LeadRecord = {
  submissionId: string;
  submittedAt: string;
  site: string;
  fullName: string;
  workEmail: string;
  companyName: string;
  jobTitle: string;
  companySize: string;
  phone: string;
  industry: string;
  interestedIn: string;
  message: string;
  locale: string;
  source: string;
  pageUrl: string;
  product_interest: string;
  lead_source: string;
  partner_related: boolean;
  registration_required: boolean;
};

type DeliveryResult = {
  ok: boolean;
  provider: "local_csv" | "netlify_blobs";
  reason?: string;
};

const CSV_HEADERS = [
  "submission_id",
  "submitted_at",
  "site",
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
] as const;

function currentSiteName() {
  const base = path.basename(process.cwd());
  return base.endsWith("-site") ? base : "company-site";
}

function resolveStorageDirectory() {
  if (process.env.LEAD_CSV_DIR?.trim()) {
    return process.env.LEAD_CSV_DIR.trim();
  }

  return path.join(process.cwd(), "data");
}

function csvValue(value: string) {
  return `"${value.replace(/"/g, '""')}"`;
}

function toRecord(lead: LeadSubmission, overrides?: Partial<LeadRecord>): LeadRecord {
  return {
    submissionId: overrides?.submissionId ?? crypto.randomUUID(),
    submittedAt: overrides?.submittedAt ?? new Date().toISOString(),
    site: overrides?.site ?? currentSiteName(),
    fullName: lead.fullName,
    workEmail: lead.workEmail,
    companyName: lead.companyName,
    jobTitle: lead.jobTitle,
    companySize: lead.companySize,
    phone: lead.phone,
    industry: lead.industry,
    interestedIn: lead.interestedIn,
    message: lead.message,
    locale: lead.locale,
    source: lead.source,
    pageUrl: lead.pageUrl,
    product_interest: lead.product_interest,
    lead_source: lead.lead_source,
    partner_related: lead.partner_related,
    registration_required: lead.registration_required,
  };
}

function recordToCsvRow(record: LeadRecord) {
  return [
    record.submissionId,
    record.submittedAt,
    record.site,
    record.fullName,
    record.workEmail,
    record.companyName,
    record.jobTitle,
    record.companySize,
    record.phone,
    record.industry,
    record.interestedIn,
    record.message,
    record.locale,
    record.source,
    record.pageUrl,
    record.product_interest,
    record.lead_source,
    record.partner_related ? "true" : "false",
    record.registration_required ? "true" : "false",
  ]
    .map((value) => csvValue(String(value ?? "")))
    .join(",");
}

async function persistLeadToLocalCsv(record: LeadRecord): Promise<DeliveryResult> {
  try {
    const dataDir = resolveStorageDirectory();
    const filePath = path.join(dataDir, "contact-submissions.csv");

    await mkdir(dataDir, { recursive: true });

    try {
      await access(filePath);
    } catch {
      await writeFile(filePath, `${CSV_HEADERS.join(",")}\n`, "utf8");
    }

    await appendFile(filePath, `${recordToCsvRow(record)}\n`, "utf8");

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

async function persistLeadToNetlifyBlobs(record: LeadRecord): Promise<DeliveryResult> {
  try {
    const { getStore } = await import("@netlify/blobs");
    const store = getStore({ name: "sitech-leads", consistency: "strong" });
    await store.setJSON(`leads/${record.site}/${record.submissionId}.json`, record);

    return {
      ok: true,
      provider: "netlify_blobs",
    };
  } catch (error) {
    return {
      ok: false,
      provider: "netlify_blobs",
      reason: error instanceof Error ? error.message : "unknown_error",
    };
  }
}

function shouldUseNetlifyBlobs() {
  return process.env.NETLIFY === "true" || Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

export async function persistLead(lead: LeadSubmission): Promise<DeliveryResult> {
  const record = toRecord(lead);

  if (shouldUseNetlifyBlobs()) {
    const blobResult = await persistLeadToNetlifyBlobs(record);
    if (blobResult.ok) {
      return blobResult;
    }
  }

  return persistLeadToLocalCsv(record);
}

function parseCsvLine(line: string) {
  const cells: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      current += '"';
      i += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      cells.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  cells.push(current);
  return cells;
}

async function listLocalCsvRecords(): Promise<LeadRecord[]> {
  const filePath = path.join(resolveStorageDirectory(), "contact-submissions.csv");
  const csv = await readFile(filePath, "utf8");
  const lines = csv.split("\n").filter(Boolean);

  if (lines.length <= 1) {
    return [];
  }

  const headers = parseCsvLine(lines[0]);

  return lines.slice(1).map((line) => {
    const cells = parseCsvLine(line);
    const entry = Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""]));

    return {
      submissionId: entry.submission_id || crypto.randomUUID(),
      submittedAt: entry.submitted_at || "",
      site: entry.site || currentSiteName(),
      fullName: entry.full_name || "",
      workEmail: entry.work_email || "",
      companyName: entry.company_name || "",
      jobTitle: entry.job_title || "",
      companySize: entry.company_size || "",
      phone: entry.phone || "",
      industry: entry.industry || "",
      interestedIn: entry.interested_in || "",
      message: entry.message || "",
      locale: entry.locale || "",
      source: entry.source || "",
      pageUrl: entry.page_url || "",
      product_interest: entry.product_interest || "",
      lead_source: entry.lead_source || "",
      partner_related: entry.partner_related === "true",
      registration_required: entry.registration_required === "true",
    } satisfies LeadRecord;
  });
}

async function listNetlifyBlobRecords(): Promise<LeadRecord[]> {
  const { getStore } = await import("@netlify/blobs");
  const store = getStore({ name: "sitech-leads", consistency: "strong" });
  const site = currentSiteName();
  const { blobs } = await store.list({ prefix: `leads/${site}/` });
  const records = await Promise.all(
    blobs.map(async (blob) => store.get(blob.key, { type: "json" }) as Promise<LeadRecord | null>),
  );

  return records.filter((item): item is LeadRecord => Boolean(item));
}

export async function listLeadRecords(): Promise<LeadRecord[]> {
  if (shouldUseNetlifyBlobs()) {
    try {
      return (await listNetlifyBlobRecords()).sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));
    } catch {
      // fall through to local csv
    }
  }

  try {
    return (await listLocalCsvRecords()).sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));
  } catch {
    return [];
  }
}

export function buildLeadCsv(records: LeadRecord[]) {
  return [CSV_HEADERS.join(","), ...records.map((record) => recordToCsvRow(record))].join("\n");
}
