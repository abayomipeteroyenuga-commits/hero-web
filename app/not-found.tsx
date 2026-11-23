import Link from "next/link";

export default function NotFound() {
  return <main className="not-found-page">
    <div className="eyebrow">HERO OF KNOWLEDGE SCHOOL</div>
    <p className="not-found-code">404</p>
    <h1>We could not find the page you requested.</h1>
    <p>The address may have changed or may have been entered incorrectly. Please return to the homepage to continue.</p>
    <Link className="button button-primary" href="/">RETURN TO HOME ↗</Link>
  </main>;
}
