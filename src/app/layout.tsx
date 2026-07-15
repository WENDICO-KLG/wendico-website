import "./globals.css";

export const metadata = {
  title: "Wendico | Schweizer Web & Software Agentur",
  description: "Wendico baut schnelle, individuelle Websites mit klarem Design, starken Projekten und betreuter Technik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <body>{children}</body>
    </html>
  );
}
