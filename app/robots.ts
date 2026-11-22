import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://hero-web-pastor-abayomi-bible-stories.vercel.app");
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${baseUrl}/sitemap.xml`, host: baseUrl };
}
