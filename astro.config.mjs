// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Outfit",
        cssVariable: "--font-outfit",
        weights: [300, 400, 600],
        styles: ["normal"],
        subsets: ["latin"],
      },
    ],
  },
});
