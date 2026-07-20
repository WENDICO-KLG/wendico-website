import Link from "next/link";

export default function AppFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>WENDICO</strong>
        <p>Mehr als nur Web - deine digitale Visitenkarte</p>
      </div>
      <nav aria-label="Footer Navigation">
        <Link href="/preise">Preise</Link>
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
        <Link href="/kontakt">Kontakt</Link>
        <a href="https://www.instagram.com/wendico.ch/" target="_blank" rel="noreferrer">Instagram</a>
      </nav>
    </footer>
  );
}