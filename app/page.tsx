"use client";
import Image from "next/image";
import { useState } from "react";

const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", children: [{ label: "Our Story", href: "/about" }, { label: "Founders Corner", href: "/founders-corner" }, { label: "Our Values", href: "/values" }] },
  { label: "Admissions", href: "/admissions", children: [{ label: "Why Choose Us", href: "/why-choose-us" }, { label: "Admission Process", href: "/admissions" }, { label: "FAQs", href: "/faqs" }] },
  { label: "Gallery", href: "/gallery" },
  { label: "News & Events", href: "/news-events" },
  { label: "Contact", href: "/contact" }
];

const destinations = [
  { number: "01", title: "Discover our school", description: "Learn about our story, values and approach to helping children flourish.", href: "/about", link: "ABOUT OUR SCHOOL" },
  { number: "02", title: "Admissions", description: "Explore Creche, Nursery and Primary admission guidance and next steps.", href: "/admissions", link: "ADMISSION INFORMATION" },
  { number: "03", title: "Founders Corner", description: "Discover the vision and aspirations behind Hero of Knowledge School.", href: "/founders-corner", link: "VISIT FOUNDERS CORNER" },
  { number: "04", title: "School Gallery", description: "A dedicated space for approved school photographs and special moments.", href: "/gallery", link: "VIEW THE GALLERY" },
  { number: "05", title: "News & Events", description: "Find school announcements, important dates and community updates.", href: "/news-events", link: "SCHOOL UPDATES" },
  { number: "06", title: "Contact us", description: "Get in touch with the school for enquiries and further information.", href: "/contact", link: "CONTACT THE SCHOOL" }
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState("");
  const closeMenu = () => { setMobileOpen(false); setExpanded(""); };

  return <main>
    <div className="topbar"><span>CRECHE&nbsp; | &nbsp;NURSERY&nbsp; | &nbsp;PRIMARY</span><span>KNOWLEDGE ENLIGHTENS THE MIND</span><a href="/contact">SCHOOL ENQUIRIES ↗</a></div>
    <header className="site-header">
      <a className="brand" href="/" aria-label="Hero of Knowledge School home"><Image src="/assets/hero-of-knowledge-school-logo.jpg" alt="Official Hero of Knowledge School crest" width={76} height={76} priority /><span><b>HERO OF KNOWLEDGE</b><small>SCHOOL</small></span></a>
      <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen}>{mobileOpen ? "CLOSE" : "MENU"}</button>
      <nav className={mobileOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">{nav.map(item => <div className="nav-item" key={item.label}>{item.children ? <><button onClick={() => setExpanded(expanded === item.label ? "" : item.label)} aria-expanded={expanded === item.label}>{item.label} <span>⌄</span></button>{expanded === item.label && <div className="dropdown">{item.children.map(child => <a key={child.label} href={child.href} onClick={closeMenu}>{child.label}</a>)}</div>}</> : <a href={item.href} onClick={closeMenu}>{item.label}</a>}</div>)}</nav>
      <a className="header-cta" href="/admissions">ENQUIRE NOW <span>↗</span></a>
    </header>

    <section className="hero" id="home">
      <div className="hero-copy">
        <label className="eyebrow">WELCOME TO HERO OF KNOWLEDGE SCHOOL</label>
        <h1>Where bright beginnings become <em>bold futures.</em></h1>
        <p>Welcome to Hero of Knowledge Nursery and Primary School. We are committed to providing a supportive learning environment where every child is encouraged to develop knowledge, confidence, strong character and a lifelong love of learning.</p>
        <div className="hero-actions"><a className="button button-primary" href="/about">DISCOVER OUR SCHOOL <span>↗</span></a><a className="button button-light" href="/admissions">ADMISSIONS INFORMATION</a></div>
        <small className="hero-note">CRECHE · NURSERY · PRIMARY EDUCATION</small>
      </div>
      <div className="hero-image"><div className="logo-frame"><Image src="/assets/hero-of-knowledge-school-logo.jpg" alt="Official Hero of Knowledge School crest and motto" width={620} height={620} priority /></div><div className="image-caption">A PLACE TO LEARN, GROW AND BELONG</div></div>
      <div className="hero-foot"><span>01 / WELCOME</span><span>EXPLORE OUR SCHOOL ↓</span></div>
    </section>

    <section className="section home-welcome">
      <label className="eyebrow">A WARM WELCOME</label>
      <div className="split"><h2>Every child's journey<br/>deserves a <em>great beginning.</em></h2><div><p className="lead">At Hero of Knowledge Nursery and Primary School, we believe every child has the ability to learn, grow and make a meaningful contribution to society.</p><p>We invite families to discover our history, values, educational stages and the community that makes our school special.</p></div></div>
    </section>

    <section className="section home-discover">
      <label className="eyebrow">EXPLORE HERO OF KNOWLEDGE SCHOOL</label>
      <div className="split"><h2>Find your way<br/><em>around our school.</em></h2><p>Explore the sections below to learn more about our school, our educational approach and the information available to families.</p></div>
      <div className="feature-grid home-page-links">{destinations.map(item => <article key={item.number}><b>{item.number}</b><h3>{item.title}</h3><p>{item.description}</p><a className="text-link" href={item.href}>{item.link} ↗</a></article>)}</div>
    </section>

    <section className="admissions home-admissions"><div><label className="eyebrow">TAKE THE NEXT STEP</label><h2>We look forward<br/>to welcoming <em>you.</em></h2><p>Considering Hero of Knowledge School for your child? Explore our admissions information and contact the school team for guidance on the next steps.</p><a className="button button-gold" href="/admissions">GO TO ADMISSIONS ↗</a></div><div className="steps"><article><b>01</b><span><strong>Explore the school</strong><small>Discover our school, its values and the educational stages we offer.</small></span></article><article><b>02</b><span><strong>Read admissions information</strong><small>Review the information available to families considering admission.</small></span></article><article><b>03</b><span><strong>Get in touch</strong><small>Speak with our team and receive guidance on your questions.</small></span></article></div></section>

    <footer><div className="footer-main"><div className="footer-brand"><Image src="/assets/hero-of-knowledge-school-logo.jpg" alt="Hero of Knowledge School logo" width={100} height={100}/><div><b>HERO OF KNOWLEDGE SCHOOL</b><span>CRECHE | NURSERY | PRIMARY</span><p>KNOWLEDGE ENLIGHTENS THE MIND</p></div></div><div className="footer-column"><b>EXPLORE</b><a href="/about">About Us</a><a href="/founders-corner">Founders Corner</a><a href="/gallery">Gallery</a><a href="/news-events">News and Events</a></div><div className="footer-column"><b>INFORMATION</b><a href="/admissions">Admissions</a><a href="/faqs">FAQs</a><a href="/contact">Contact</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Hero of Knowledge School. All rights reserved.</span><span>Website by ETHAN DIGITALS</span><a href="#home">BACK TO TOP ↑</a></div></footer>
  </main>;
}
