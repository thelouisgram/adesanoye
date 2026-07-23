import { ImageResponse } from "next/og";

export const alt = "A² Studio — websites that book dream clients";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "64px 72px",
          background: "#E8EBE6",
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 90% 10%, rgba(198,255,61,0.35), transparent 55%), radial-gradient(ellipse 50% 50% at 0% 100%, rgba(12,85,72,0.18), transparent 50%)",
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            background: "#0A0D0B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              color: "#F3F5F1",
              letterSpacing: "-0.06em",
            }}
          >
            A
          </div>
          <div
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              width: 38,
              height: 38,
              background: "#C6FF3D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 800,
              color: "#0A0D0B",
            }}
          >
            2
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 48,
            maxWidth: 820,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#0A0D0B",
              lineHeight: 1,
            }}
          >
            A² Studio
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 28,
              fontWeight: 500,
              color: "#2F3A34",
              lineHeight: 1.35,
            }}
          >
            Build a website that feels like you.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              background: "#C6FF3D",
              color: "#0A0D0B",
              fontWeight: 700,
              fontSize: 18,
              padding: "10px 18px",
              borderRadius: 999,
            }}
          >
            Web design & development
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
