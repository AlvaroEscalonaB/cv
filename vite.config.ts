import react from "@vitejs/plugin-react"
import autoprefixer from "autoprefixer"
import path from "path"
import tailwindcss from "tailwindcss"
import { defineConfig } from "vite"

export default defineConfig(({ command }) => {
  const config = {
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
    base: "/",
  }

  if (command !== "serve") {
    config.base = "/cv/"
  }

  return config
})
