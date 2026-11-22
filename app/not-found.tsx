import Link from "next/link";

export default function NotFound() {
  return <main className="not-found-page">
    <div className="eyebrow">HERO OF KNOWLEDGE SCHOOL</div>
    <p className="not-found-code">404</p>
    <h1>This page could not be found.</h1>
    <p>The page may have moved, or the address may be incorrect.</p>
    <Link className="button button-primary" href="/">RETURN TO HOME ↗</Link>
  </main>;
}
