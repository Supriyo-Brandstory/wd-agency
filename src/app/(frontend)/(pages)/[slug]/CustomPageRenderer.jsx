"use client";

import { useEffect, useRef } from "react";

export default function CustomPageRenderer({ content }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // React's dangerouslySetInnerHTML disables <script> execution by design.
    // To allow interactive features in uploaded templates (like accordions, tabs, sliders),
    // we re-create and execute any inline or external scripts within this container.
    const scripts = containerRef.current.querySelectorAll("script");
    scripts.forEach((oldScript) => {
      // Ignore JSON-LD schemas as they are handled in head/layout
      if (oldScript.type === "application/ld+json") return;

      const newScript = document.createElement("script");
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });

      // Wrap inline code with a safety helper to ensure DOMContentLoaded handlers run immediately
      let code = oldScript.textContent || "";
      if (code) {
        // If code awaits DOMContentLoaded but the document is already ready, run callback directly
        code = `
          (function() {
            try {
              ${code}
            } catch (err) {
              console.warn("Custom page script error:", err);
            }
          })();
        `;
        newScript.textContent = code;
      }

      oldScript.parentNode.replaceChild(newScript, oldScript);
    });

    // Dispatch DOMContentLoaded in case any attached event listeners are waiting for it
    try {
      window.dispatchEvent(new Event("DOMContentLoaded"));
    } catch (e) {
      // ignore
    }
  }, [content]);

  return (
    <div
      ref={containerRef}
      className="custom-page-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
