import Image from "next/image";
import Link from "next/link";

export default function AppFooter() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <Link className="brand footer-brand" href="/"><Image className="brand-logo" src="/wendico_logo.png" alt="" width={180} height={52} /><strong>wendico</strong></Link>
          <p>Digitale Auftritte mit Klarheit,<br />Charakter und Substanz.</p>
        </div>
        <div>
          <span>Navigation</span>
          <Link href="/ueber-uns">Über uns</Link>
          <Link href="/preise">Preise</Link>
          <Link href="/projekte">Projekte</Link>
        </div>
        <div>
          <span>Standorte</span>
          <Link href="/webdesign-zuerich">Webdesign Zürich</Link>
          <Link href="/webdesign-winterthur">Webdesign Winterthur</Link>
          <Link href="/webdesign-thalheim-an-der-thur">Webdesign Thalheim</Link>
        </div>
        <div>
          <span>Kontakt</span>
          <a href="mailto:info@wendico.ch">info@wendico.ch</a>
          <a href="tel:+41795041005">+41 79 504 10 05</a>
          <a href="https://instagram.com/wendico.ch" target="_blank" rel="noreferrer">Instagram ↗︎</a>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Wendico KLG</span><div><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link><Link href="/agb">AGB</Link></div></div>
    </footer>
  );
}