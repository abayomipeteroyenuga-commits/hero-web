"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const groups = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", children: [{ label: "Our Story", href: "/about" }, { label: "Founders Corner", href: "/founders-corner" }, { label: "Our Values", href: "/values" }] },
  { label: "Admissions", href: "/admissions", children: [{ label: "Why Choose Us", href: "/why-choose-us" }, { label: "Admission Process", href: "/admissions" }, { label: "FAQs", href: "/faqs" }] },
  { label: "Gallery", href: "/gallery" },
  { label: "News & Events", href: "/news-events" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState("");
  const close = () => { setOpen(false); setExpanded(""); };
  return <>
    <div className="topbar"><span>CRECHE | NURSERY | PRIMARY</span><span>KNOWLEDGE ENLIGHTENS THE MIND</span><Link href="/contact">SCHOOL ENQUIRIES ↗</Link></div>
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Hero of Knowledge School home"><Image src="/assets/hero-of-knowledge-school-logo.jpg" alt="Official Hero of Knowledge School crest" width={68} height={68} priority /><span><b>HERO OF KNOWLEDGE</b><small>SCHOOL</small></span></Link>
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation">{open ? "CLOSE" : "MENU"}</button>
      <nav id="primary-navigation" className={open ? "nav nav-open" : "nav"} aria-label="Main navigation">
        {groups.map((item) => <div className="nav-item" key={item.label}>
          {item.children ? <>
            <button type="button" onClick={() => setExpanded(expanded === item.label ? "" : item.label)} aria-expanded={expanded === item.label}>{item.label} <span>⌄</span></button>
            {expanded === item.label && <div className="dropdown">{item.children.map((child) => <Link key={child.href + child.label} href={child.href} onClick={close}>{child.label}</Link>)}</div>}
          </> : <Link href={item.href} onClick={close}>{item.label}</Link>}
        </div>)}
      </nav>
      <Link className="header-cta" href="/admissions" onClick={close}>ENQUIRE NOW <span>↗</span></Link>
    </header>
  </>;
}
