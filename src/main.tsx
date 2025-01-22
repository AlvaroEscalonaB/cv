import "@/app.css"
import App from "@/root.tsx"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"

const root = document.getElementById("root")
createRoot(root!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)

export default function Router() {
  const currentEnv = import.meta.env.DEV ? "/" : "/ss_frontend/"
  return (
    <BrowserRouter basename={currentEnv}>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}
