import { z } from "zod";

import { locales } from "@/lib/site";

const textField = z.string().trim().max(1000);

export const leadSchema = z.object({
  fullName: textField.min(2),
  workEmail: z.string().trim().email().max(320),
  companyName: textField.max(200).optional().default(""),
  jobTitle: textField.max(200).optional().default(""),
  companySize: textField.max(120).optional().default(""),
  phone: textField.max(80).optional().default(""),
  industry: textField.max(120).optional().default(""),
  interestedIn: textField.min(2).max(120),
  message: textField.min(10).max(4000),
  consent: z.literal(true),
  pageUrl: z.string().trim().url().optional().or(z.literal("")).default(""),
  website: z.string().trim().max(0).optional().default(""),
  locale: z.enum(locales).default("en"),
  source: z.string().trim().min(2).max(120).default("website"),
  product_interest: z.string().trim().max(120).optional().default(""),
  lead_source: z.string().trim().max(120).optional().default(""),
  partner_related: z.boolean().optional().default(false),
  registration_required: z.boolean().optional().default(false),
});

export type LeadSubmission = z.infer<typeof leadSchema>;

export function normalizeLead(input: LeadSubmission) {
  return {
    ...input,
    companyName: input.companyName.trim(),
    jobTitle: input.jobTitle.trim(),
    companySize: input.companySize.trim(),
    phone: input.phone.trim(),
    industry: input.industry.trim(),
    pageUrl: input.pageUrl.trim(),
    source: input.source.trim(),
    product_interest: input.product_interest.trim(),
    lead_source: input.lead_source.trim(),
  };
}

export function splitName(fullName: string) {
  const parts = fullName.trim().split(/\s+/);

  if (parts.length <= 1) {
    return {
      firstName: fullName.trim(),
      lastName: "",
    };
  }

  return {
    firstName: parts.slice(0, -1).join(" "),
    lastName: parts.at(-1) ?? "",
  };
}
