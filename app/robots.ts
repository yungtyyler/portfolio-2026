import { MetadataRoute } from "next";

const BASE_ADDRESS = process.env.BASE_ADDRESS;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${BASE_ADDRESS}/sitemap.xml`,
  };
}
