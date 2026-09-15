import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mitarbeiter-M",
    short_name: "Team",
    description: "Übersicht über Mitarbeiter, Projekte und Sprachen",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAFA",
    theme_color: "#2E9E7A",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
