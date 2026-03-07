import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"

const media = window.matchMedia("(prefers-color-scheme: dark)")
function applyDark() {
  document.documentElement.classList.toggle("dark", media.matches)
}
applyDark()
media.addEventListener("change", applyDark)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
