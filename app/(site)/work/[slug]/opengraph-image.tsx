import { ImageResponse } from "next/og";
import { PROJECTS } from "@/lib/projects";

export const runtime = "edge";

export const alt = "Project Detail";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "#0a0a0a",
        color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #262626",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Project Title */}
        <div style={{ fontSize: 80, fontWeight: "bold", letterSpacing: "-0.05em" }}>
          {project?.title || "Project"}
        </div>

        {/* Subtitle/Description */}
        <div style={{ fontSize: 30, color: "#a1a1aa", maxWidth: "800px", textAlign: "center" }}>
          {project?.shortDescription}
        </div>

        {/* Tech Stack Pills (Visual approximation) */}
        <div style={{ display: "flex", gap: "10px", marginTop: "40px" }}>
          {project?.tech.slice(0, 3).map((t) => (
            <div
              key={t}
              style={{
                fontSize: 20,
                padding: "10px 20px",
                background: "#171717",
                borderRadius: "50px",
                border: "1px solid #404040",
                color: "#ededed",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Brand */}
      <div style={{ position: "absolute", bottom: 40, fontSize: 24, color: "#6366f1" }}>
        tylervarzeas.com
      </div>
    </div>,
    {
      ...size,
    }
  );
}
