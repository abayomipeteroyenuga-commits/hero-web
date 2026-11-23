import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: "Hero of Knowledge School | Creche, Nursery & Primary", template: "%s | Hero of Knowledge School" },
  description: "Discover Hero of Knowledge Nursery and Primary School, offering Creche, Nursery and Primary education with a commitment to learning, character and strong foundations for life.",
  applicationName: "Hero of Knowledge School",
  keywords: ["Hero of Knowledge School", "Creche", "Nursery school", "Primary school", "early years education", "primary education"],
  icons: { icon: "/assets/hero-of-knowledge-school-logo.jpg", apple: "/assets/hero-of-knowledge-school-logo.jpg" },
  openGraph: { type: "website", siteName: "Hero of Knowledge School", title: "Hero of Knowledge School", description: "Creche, Nursery & Primary. Knowledge Enlightens The Mind.", images: [{ url: "/assets/hero-of-knowledge-school-logo.jpg", alt: "Hero of Knowledge School official crest" }] },
  twitter: { card: "summary_large_image", title: "Hero of Knowledge School", description: "Creche, Nursery & Primary. Knowledge Enlightens The Mind.", images: ["/assets/hero-of-knowledge-school-logo.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
