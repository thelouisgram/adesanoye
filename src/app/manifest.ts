import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "A² Studio",
    short_name: "A² Studio",
    description:
      "Conversion-focused websites for founders and freelancers who want dream clients.",
    start_url: "/",
    display: "standalone",
    background_color: "#E8EBE6",
    theme_color: "#0A0D0B",
    icons: [
      {
        src: "/brand/mark.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/brand/mark-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
