export const SITE_URL = process.env.BASE_ADDRESS ?? "https://tylervarzeas.com";

export const SITE_NAME = "Tyler Varzeas Web + SEO";

export const DEFAULT_TITLE = "Tyler Varzeas Web + SEO | Spokane Website Design & Local SEO";

export const DEFAULT_DESCRIPTION =
  "Spokane website design, technical SEO, local SEO, website optimization, analytics, and conversion tracking for service businesses that want more leads from Google.";

export const SEO_KEYWORDS = [
  "Spokane website design",
  "Spokane SEO",
  "local SEO Spokane",
  "technical SEO",
  "website optimization",
  "conversion tracking",
  "GA4 setup",
  "Search Console",
  "Next.js developer Spokane",
  "Tyler Varzeas",
];

export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Tyler Varzeas Web + SEO - Spokane website design and search optimization",
};

export function absoluteUrl(path = "") {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
