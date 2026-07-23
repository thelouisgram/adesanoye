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
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
