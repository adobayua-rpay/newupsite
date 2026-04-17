import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/v3", "/v4"],
      },
    ],
    sitemap: "https://panaptico.com/sitemap.xml",
  }
}
