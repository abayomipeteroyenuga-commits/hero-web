import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hero of Knowledge School | Creche, Nursery & Primary",
  description: "Hero of Knowledge School — Creche, Nursery and Primary education. Knowledge Enlightens The Mind.",
  applicationName: "Hero of Knowledge School",
  icons: { icon: "/assets/hero-of-knowledge-school-logo.jpg", apple: "/assets/hero-of-knowledge-school-logo.jpg" },
  openGraph: {
    title: "Hero of Knowledge School",
    description: "Creche, Nursery & Primary. Knowledge Enlightens The Mind.",
    images: ["/assets/hero-of-knowledge-school-logo.jpg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
