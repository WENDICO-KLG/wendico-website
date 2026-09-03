import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, color: "white", background: "linear-gradient(135deg,#050806 0%,#102117 58%,#d8ff71 160%)", fontFamily: "sans-serif" }}>
        <div style={{ fontSize: 34, letterSpacing: 5, textTransform: "uppercase", opacity: 0.76 }}>Wendico</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ maxWidth: 850, fontSize: 92, lineHeight: 0.95, fontWeight: 600 }}>Websites mit Wirkung.</div>
          <div style={{ marginTop: 28, maxWidth: 760, color: "rgba(255,255,255,.72)", fontSize: 34, lineHeight: 1.25 }}>Webdesign, Strategie und digitale Systeme aus dem Zürcher Weinland.</div>
        </div>
        <div style={{ display: "flex", gap: 18, color: "#14231d", fontSize: 24, fontWeight: 700 }}>
          <span style={{ padding: "14px 20px", borderRadius: 999, background: "#d8ff71" }}>Strategie</span>
          <span style={{ padding: "14px 20px", borderRadius: 999, background: "#d8ff71" }}>Webdesign</span>
          <span style={{ padding: "14px 20px", borderRadius: 999, background: "#d8ff71" }}>Umsatzsysteme</span>
        </div>
      </div>
    ),
    size,
  );
}