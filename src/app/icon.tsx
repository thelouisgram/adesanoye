import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
            fontSize: 16,
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
            top: 2,
            right: 2,
            width: 12,
            height: 12,
            background: "#C6FF3D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 8,
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
