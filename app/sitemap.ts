import type { MetadataRoute } from "next";

const routes = ["", "/about", "/founders-corner", "/values", "/admissions", "/why-choose-us", "/gallery", "/news-events", "/parents", "/school-calendar", "/faqs", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://hero-web-pastor-abayomi-bible-stories.vercel.app");
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/admissions" || route === "/contact" ? 0.9 : 0.7,
  }));
}
