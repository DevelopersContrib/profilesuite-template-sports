import { headers } from "next/headers";
import { getPool } from "./db";

let DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;

export function getDomain() {
  const headersList = headers();
  const referrer = headersList.get("host");
  const domainName = referrer.includes("localhost")
    ? DOMAIN
    : referrer.replace("www.", "");
  return domainName;
}

async function getMemberIdByDomain(domain) {
  const pool = getPool();

  // First check profile_custom_domains for exact match
  const [customRows] = await pool.query(
    "SELECT member_id FROM profile_custom_domains WHERE domain = ?",
    [domain]
  );
  if (customRows.length > 0) {
    return customRows[0].member_id;
  }

  // Split domain into subdomain.domain parts (e.g. "juls.professionalsuite.com")
  const parts = domain.split(".");
  if (parts.length >= 3) {
    const subdomain = parts[0];
    const baseDomain = parts.slice(1).join(".");

    const [rows] = await pool.query(
      "SELECT member_id FROM profile_domains WHERE subdomain = ? AND domain = ?",
      [subdomain, baseDomain]
    );
    if (rows.length > 0) {
      return rows[0].member_id;
    }
  }

  // Fallback: try matching subdomain only
  const subdomain = domain.split(".")[0];
  const [rows] = await pool.query(
    "SELECT member_id FROM profile_domains WHERE subdomain = ?",
    [subdomain]
  );
  if (rows.length > 0) {
    return rows[0].member_id;
  }

  throw new Error("Domain not found: " + domain);
}

export async function getProfile() {
  const domain = getDomain();
  const pool = getPool();
  const memberId = await getMemberIdByDomain(domain);

  const [
    [profileRows],
    [educationRows],
    [experienceRows],
    [skillRows],
    [galleryRows],
    [linkRows],
    [socialRows],
    [timelineRows],
    [eventRows],
  ] = await Promise.all([
    pool.query("SELECT * FROM member_profile WHERE member_id = ?", [memberId]),
    pool.query("SELECT * FROM profile_education WHERE member_id = ? ORDER BY from_date DESC", [memberId]),
    pool.query("SELECT * FROM profile_experience WHERE member_id = ? ORDER BY from_date DESC", [memberId]),
    pool.query("SELECT * FROM profile_skills WHERE member_id = ?", [memberId]),
    pool.query("SELECT * FROM profile_gallery WHERE member_id = ?", [memberId]),
    pool.query("SELECT * FROM profile_links WHERE member_id = ?", [memberId]),
    pool.query("SELECT * FROM profile_social WHERE member_id = ?", [memberId]),
    pool.query("SELECT * FROM profile_timeline WHERE member_id = ? ORDER BY date_from DESC", [memberId]),
    pool.query("SELECT * FROM profile_events WHERE member_id = ? ORDER BY date DESC", [memberId]),
  ]);

  return {
    data: {
      profile: profileRows[0] || {},
      education: educationRows,
      experience: experienceRows,
      skills: skillRows,
      gallery: galleryRows,
      links: linkRows,
      socials: socialRows[0] || {},
      timeline: timelineRows,
      events: eventRows,
    },
  };
}

export async function updateProfile() {
  const domain = getDomain();
  const pool = getPool();

  // Get profile_domain id for view tracking
  const parts = domain.split(".");
  let domainId = null;

  // Check custom domains first
  const [customRows] = await pool.query(
    "SELECT pd.id FROM profile_custom_domains pcd JOIN profile_domains pd ON pd.member_id = pcd.member_id WHERE pcd.domain = ? LIMIT 1",
    [domain]
  );
  if (customRows.length > 0) {
    domainId = customRows[0].id;
  } else {
    const subdomain = parts[0];
    const baseDomain = parts.length >= 3 ? parts.slice(1).join(".") : null;

    const query = baseDomain
      ? "SELECT id FROM profile_domains WHERE subdomain = ? AND domain = ?"
      : "SELECT id FROM profile_domains WHERE subdomain = ?";
    const params = baseDomain ? [subdomain, baseDomain] : [subdomain];

    const [rows] = await pool.query(query, params);
    if (rows.length > 0) {
      domainId = rows[0].id;
    }
  }

  if (!domainId) {
    return { success: false, message: "Domain not found" };
  }

  const today = new Date().toISOString().split("T")[0];

  // Try to update existing view record for today, or insert new one
  const [existing] = await pool.query(
    "SELECT id, views FROM website_views WHERE profile_domain_id = ? AND date = ?",
    [domainId, today]
  );

  if (existing.length > 0) {
    await pool.query(
      "UPDATE website_views SET views = views + 1 WHERE id = ?",
      [existing[0].id]
    );
  } else {
    await pool.query(
      "INSERT INTO website_views (profile_domain_id, date, views) VALUES (?, ?, 1)",
      [domainId, today]
    );
  }

  return { success: true };
}