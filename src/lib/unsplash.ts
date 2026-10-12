/** Build a sized Unsplash URL. Non-Unsplash URLs are returned untouched. */
export function sized(url: string, w: number, h?: number, q = 72) {
  if (!url.includes("images.unsplash.com")) return url;
  const u = new URL(url);
  u.searchParams.set("w", String(w));
  if (h) u.searchParams.set("h", String(h));
  u.searchParams.set("q", String(q));
  u.searchParams.set("auto", "format");
  u.searchParams.set("fit", "crop");
  return u.toString();
}

export function srcSet(url: string, widths: number[], ratio?: number) {
  if (!url.includes("images.unsplash.com")) return undefined;
  return widths.map((w) => `${sized(url, w, ratio ? Math.round(w * ratio) : undefined)} ${w}w`).join(", ");
}
