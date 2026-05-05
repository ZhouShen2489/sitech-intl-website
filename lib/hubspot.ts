import type { LeadSubmission } from "@/lib/validation";
import { splitName } from "@/lib/validation";

type DeliveryResult = {
  ok: boolean;
  provider: "hubspot";
  mode?: "form" | "contact";
  reason?: string;
};

function env(name: string) {
  return process.env[name]?.trim() ?? "";
}

function withDefaultValue(value: string | undefined, fallback: string) {
  return value?.trim() || fallback;
}

export async function submitLeadToHubSpot(lead: LeadSubmission): Promise<DeliveryResult> {
  // Source guidance:
  // HUBSPOT_ACCESS_TOKEN comes from HubSpot Private Apps.
  // HUBSPOT_FORM_PORTAL_ID and HUBSPOT_FORM_ID come from the target HubSpot form.
  const accessToken = env("HUBSPOT_ACCESS_TOKEN");
  const portalId = env("HUBSPOT_FORM_PORTAL_ID");
  const formId = env("HUBSPOT_FORM_ID");
  const interestedField = withDefaultValue(env("HUBSPOT_FIELD_INTERESTED_IN"), "website_interested_in");
  const messageField = withDefaultValue(env("HUBSPOT_FIELD_MESSAGE"), "website_inquiry_details");
  const sourceField = withDefaultValue(env("HUBSPOT_FIELD_SOURCE"), "website_lead_source");
  const localeField = withDefaultValue(env("HUBSPOT_FIELD_LOCALE"), "website_inquiry_locale");
  const companySizeField = env("HUBSPOT_FIELD_COMPANY_SIZE");

  if (!accessToken) {
    return {
      ok: false,
      provider: "hubspot",
      reason: "missing_access_token",
    };
  }

  const { firstName, lastName } = splitName(lead.fullName);

  if (portalId && formId) {
    const formResponse = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/secure/submit/${portalId}/${formId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: [
            { name: "firstname", value: firstName },
            { name: "lastname", value: lastName },
            { name: "email", value: lead.workEmail },
            { name: "company", value: lead.companyName },
            { name: "jobtitle", value: lead.jobTitle },
            { name: companySizeField, value: lead.companySize },
            { name: "phone", value: lead.phone },
            { name: "industry", value: lead.industry },
            { name: interestedField, value: lead.interestedIn },
            { name: messageField, value: lead.message },
            { name: sourceField, value: lead.source },
            { name: localeField, value: lead.locale },
          ].filter((field) => field.name && field.value),
          context: {
            pageUri: lead.pageUrl || undefined,
            pageName: "Si-Tech Intl Website Lead Form",
          },
          legalConsentOptions: {
            consent: {
              consentToProcess: true,
              text: "User submitted the website lead form and agreed to be contacted regarding the inquiry.",
            },
          },
        }),
      },
    );

    if (formResponse.ok) {
      return {
        ok: true,
        provider: "hubspot",
        mode: "form",
      };
    }
  }

  const contactResponse = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      properties: {
        email: lead.workEmail,
        firstname: firstName,
        lastname: lastName,
        company: lead.companyName,
        jobtitle: lead.jobTitle,
        phone: lead.phone,
        industry: lead.industry,
        ...(companySizeField ? { [companySizeField]: lead.companySize } : {}),
        [interestedField]: lead.interestedIn,
        [messageField]: lead.message,
        [sourceField]: lead.source,
        [localeField]: lead.locale,
      },
    }),
  });

  if (contactResponse.ok || contactResponse.status === 409) {
    return {
      ok: true,
      provider: "hubspot",
      mode: "contact",
    };
  }

  return {
    ok: false,
    provider: "hubspot",
    reason: "request_failed",
  };
}
