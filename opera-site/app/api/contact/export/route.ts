import { NextResponse } from "next/server";

import { buildLeadCsv, listLeadRecords } from "@/lib/lead-store";

function isAuthorized(request: Request) {
  const token = process.env.LEAD_EXPORT_TOKEN?.trim();
  if (!token) {
    return false;
  }

  const { searchParams } = new URL(request.url);
  const queryToken = searchParams.get("token")?.trim();
  const headerToken = request.headers.get("x-export-token")?.trim();

  return queryToken === token || headerToken === token;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      { status: 401 },
    );
  }

  const records = await listLeadRecords();
  const csv = buildLeadCsv(records);

  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="contact-submissions.csv"',
      "Cache-Control": "no-store",
    },
  });
}
