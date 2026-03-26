import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kowhai-and-clay.vercel.app";

  return [
    "",
    "/about/",
    "/collections/",
    "/workshops/",
    "/journal/",
    "/contact/",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-03-26"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
