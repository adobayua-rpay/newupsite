import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://panaptico.com"

  const problemPages = [
    "adoption-tracking",
    "audit-trail",
    "drift-detection",
    "evidence-collection",
    "governed-execution",
    "it-project-planning",
    "post-go-live-continuity",
    "system-discovery",
    "task-generation",
    "vendor-change-management",
  ]

  return [
    {
      url: baseUrl,
      lastModified: "2026-04-15",
      changeFrequency: "weekly",
      priority: 1,
    },
    ...problemPages.map((slug) => ({
      url: `${baseUrl}/problems/${slug}`,
      lastModified: "2026-04-15" as string,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/privacy`,
      lastModified: "2026-03-12",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: "2026-03-12",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
