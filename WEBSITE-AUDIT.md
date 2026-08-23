# Website-Audit - 23. August 2026

## Geprueft

- Startseite, Ueber Uns, Preise, Projekte, Kontakt, Impressum und Datenschutz auf Desktop und bei 390 px Breite
- Navigation, interne Routen, Meta-Titel, Canonicals, `robots.txt` und `sitemap.xml`
- Produktionsbuild und ESLint

## Direkt verbessert

- Kontaktformular: Pflichtfelder, passende Autocomplete-Werte und Datenschutzbestaetigung ergaenzt.
- Calendly: Kein automatisches Laden mehr. Der Dienst wird erst nach bewusstem Klick in einem neuen Tab geoeffnet.
- SEO: Strukturierte Daten fuer WENDICO KLG, stabile Canonicals, priorisierte Sitemap und passende Robots-Angabe.
- Datenschutz: Cookie- und Google-Abschnitt an den aktuellen technischen Stand angepasst.

## Kleine offene Punkte

- Das Kontaktformular verwendet weiterhin `mailto:`. Ohne konfigurierte E-Mail-App kann eine Anfrage nicht versendet werden. Fuer verlaessliche Leads sollte ein serverseitiges Formular mit Spam-Schutz (z. B. Resend/Postmark plus Turnstile) folgen.
- Die Datenschutzerklaerung nennt den Hosting-Anbieter nicht. Vor dem Livegang den Hoster, Speicherort, Auftragsbearbeitung und die tatsaechlichen Aufbewahrungsfristen konkret ergaenzen.
- Die Angaben zu Google Search Console, Calendly und allen kuenftig eingebundenen Tracking- oder Marketing-Diensten vor jeder Aenderung erneut abgleichen. Bei Analytics/Meta Pixel ist in der Regel ein Consent-Banner erforderlich.
- Rechtliche Aussagen, insbesondere Datenbearbeitung, US-Transfer und Aufbewahrung, sollten vor dem Livegang durch eine fachkundige Schweizer Datenschutzberatung geprueft werden. Dieses Audit ist keine Rechtsberatung.
- Einige Projektbilder loesen im Entwicklungsmodus Bildgroessen-Warnungen aus. Die Darstellung funktioniert, aber die CSS-Masse der Projektvorschauen sollten bei einer Performance-Runde auf das Bildseitenverhaeltnis abgestimmt werden.
- Projekt- und Preisversprechen wie "20-30 zusaetzliche Reservationen" sollten belegbar sein oder als unverbindliches Ziel deutlich gekennzeichnet werden.
