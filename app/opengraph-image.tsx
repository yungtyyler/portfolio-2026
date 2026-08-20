import { ImageResponse } from "next/og";

export const alt = "Tyler Varzeas Web + SEO - Spokane website design and local SEO";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0a",
        color: "#ededed",
        padding: "72px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
        <div
          style={{
            color: "#818cf8",
            fontSize: 30,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 0,
          }}
        >
          Tyler Varzeas Web + SEO
        </div>
        <div
          style={{
            maxWidth: 920,
            fontSize: 82,
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: 0,
          }}
        >
          Helping Spokane businesses get more leads from Google.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "18px",
          color: "#d4d4d8",
          fontSize: 30,
          fontWeight: 600,
        }}
      >
        <span>Website Design</span>
        <span style={{ color: "#6366f1" }}>+</span>
        <span>Local SEO</span>
        <span style={{ color: "#6366f1" }}>+</span>
        <span>Conversion Tracking</span>
      </div>
    </div>,
    size
  );
}
