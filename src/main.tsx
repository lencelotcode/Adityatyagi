import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Global error catcher for immediate visual debugging
window.addEventListener("error", (e) => {
  console.error("Global runtime error:", e.error || e.message);
  const root = document.getElementById("root");
  if (root && (!root.innerHTML || root.innerHTML.trim() === "")) {
    root.innerHTML = `<div style="padding: 40px; font-family: system-ui, sans-serif; color: #111; background: #fff; min-height: 100vh;">
      <div style="border: 3px solid black; padding: 24px; box-shadow: 6px 6px 0px 0px black; border-radius: 8px; max-width: 700px; margin: 0 auto;">
        <h2 style="color: #FF6B00; font-size: 24px; margin-bottom: 12px; font-weight: 800;">Rendering Error Detected</h2>
        <p style="margin-bottom: 16px; font-weight: 500;">${e.message || "An unexpected error occurred while rendering the page."}</p>
        <pre style="background: #f4f2ec; border: 1px solid #d5d1c3; padding: 14px; border-radius: 4px; overflow: auto; font-size: 13px;">${e.error?.stack || e.message}</pre>
      </div>
    </div>`;
  }
});

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
