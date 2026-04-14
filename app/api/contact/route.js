import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";
import { getDomain } from "@/lib/data";

export async function POST(request) {
  try {
    const { inquiryType, name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const pool = getPool();
    const domain = getDomain();

    const [customRows] = await pool.query(
      "SELECT member_id FROM profile_custom_domains WHERE domain = ?",
      [domain],
    );

    let memberId = customRows.length > 0 ? customRows[0].member_id : null;

    if (!memberId) {
      const parts = domain.split(".");
      const subdomain = parts[0];
      const baseDomain = parts.length >= 3 ? parts.slice(1).join(".") : null;

      const query = baseDomain
        ? "SELECT member_id FROM profile_domains WHERE subdomain = ? AND domain = ?"
        : "SELECT member_id FROM profile_domains WHERE subdomain = ?";
      const params = baseDomain ? [subdomain, baseDomain] : [subdomain];

      const [rows] = await pool.query(query, params);
      if (rows.length > 0) memberId = rows[0].member_id;
    }

    if (!memberId) {
      return NextResponse.json({ error: "Domain not found." }, { status: 404 });
    }

    await pool.query(
      "INSERT INTO profile_contact (member_id, inquiry_type, name, email, text) VALUES (?, ?, ?, ?, ?)",
      [memberId, inquiryType, name, email, message],
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
