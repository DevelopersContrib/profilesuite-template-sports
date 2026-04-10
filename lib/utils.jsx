export function removeSpecialCharacters(text) {
  // Regular expression to match any character that is not a letter, number, or whitespace
  const regex = /[^a-zA-Z0-9\s]/g;
  return text.replace(regex, "");
}

const S3_BASE = "https://profilesuite-assets.s3.us-west-2.amazonaws.com";
const isDev = process.env.NODE_ENV === "development";

export function getGalleryUrl(filename) {
  const prefix = isDev ? "uploads/gallery/" : "";
  return `${S3_BASE}/${prefix}${filename}`;
}

export function getProfileUrl(filename) {
  const prefix = isDev ? "uploads/profile/" : "";
  return `${S3_BASE}/${prefix}${filename}`;
}
