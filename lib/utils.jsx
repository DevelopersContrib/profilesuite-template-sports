export function removeSpecialCharacters(text) {
  // Regular expression to match any character that is not a letter, number, or whitespace
  const regex = /[^a-zA-Z0-9\s]/g;
  return text.replace(regex, "");
}

const S3_BASE = "https://profilesuite-assets.s3.us-west-2.amazonaws.com";

function buildUrl(folder, filename) {
  if (!filename) return "";
  const path = filename.startsWith(`${folder}/`) ? filename : `${folder}/${filename}`;
  return `${S3_BASE}/${path}`;
}

export function getGalleryUrl(filename) {
  return buildUrl("gallery", filename);
}

export function getProfileUrl(filename) {
  return buildUrl("profile", filename);
}
