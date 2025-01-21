import react from "@vitejs/plugin-react"
import autoprefixer from "autoprefixer"
import path from "path"
import tailwindcss from "tailwindcss"
import { defineConfig } from "vite"

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@ui": path.resolve(__dirname, "src/ui"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [react()],
  base: "/cv/",
}))
