import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0D0B",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 800,
            color: "#F3F5F1",
            letterSpacing: "-0.06em",
            lineHeight: 1,
          }}
        >
          A
        </div>
        <div
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            width: 52,
            height: 52,
            background: "#C6FF3D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
            fontWeight: 800,
            color: "#0A0D0B",
          }}
        >
          2
        </div>
      </div>
    ),
    { ...size },
  );
}
