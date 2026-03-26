"use client";

import { useEffect, useState, useRef, useCallback, useLayoutEffect } from "react";
import "@/app/(frontend)/globals.scss";

export default function PreviewPage() {
  const [content, setContent] = useState("");
  const [cssFile, setCssFile] = useState("");
  const contentRef = useRef(null);
  const targetIdRef = useRef(null);
  const [editableElements, setEditableElements] = useState([]);

  // Refresh positions of all edit icons
  const refreshIcons = useCallback(() => {
    if (!contentRef.current) return;
    const items = [];
    
    // 1. Find all images
    const imgs = contentRef.current.querySelectorAll("img");
    imgs.forEach((img, idx) => {
      const rect = img.getBoundingClientRect();
      if (rect.width > 10 && rect.height > 10) {
        items.push({
          id: `img-${idx}`,
          el: img,
          type: "IMAGE",
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
    });

    // 2. Find all background elements
    const bgs = contentRef.current.querySelectorAll('[style*="background-image"], [style*="background:"]');
    bgs.forEach((bg, idx) => {
      const rect = bg.getBoundingClientRect();
      if (rect.width > 10 && rect.height > 10) {
        items.push({
          id: `bg-${idx}`,
          el: bg,
          type: "BG",
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
    });

    setEditableElements(items);
  }, []);

  useEffect(() => {
    const savedContent = localStorage.getItem("customPagePreviewContent") || "";
    const savedCss = localStorage.getItem("customPagePreviewCss") || "";
    setContent(savedContent);
    setCssFile(savedCss);

    const handleStorage = (e) => {
      if (e.key === "customPagePreviewContent" && contentRef.current) {
        if (e.newValue !== contentRef.current.innerHTML) {
          setContent(e.newValue || "");
        }
      }
      if (e.key === "customPagePreviewCss") setCssFile(e.newValue || "");
    };

    const handleMessage = (e) => {
      if (e.data?.type === "UPDATE_CONTENT") {
        if (e.data.content && e.data.content !== contentRef.current?.innerHTML) {
          setContent(e.data.content.replace(/ data-editing="true"/g, "") || "");
        }
      }

      if (e.data?.type === "IMAGE_SELECTED") {
        const url = e.data.url;
        const el = (targetIdRef.current ? document.getElementById(targetIdRef.current) : null) || 
                   document.querySelector('[data-editing="true"]');

        if (el) {
          if (el.tagName === "IMG") {
            el.src = url;
            el.setAttribute("src", url);
          } else {
            el.style.backgroundImage = `url("${url}")`;
          }
          el.removeAttribute("data-editing");
          targetIdRef.current = null;

          const updatedHtml = contentRef.current.innerHTML;
          setContent(updatedHtml);
          window.parent.postMessage({ type: "UPDATE_CONTENT", content: updatedHtml }, "*");
          setTimeout(refreshIcons, 100);
        }
      }
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("message", handleMessage);
    
    // Also handle global clicks for fallback and link disabling
    const handleGlobalClick = (e) => {
      if (e.target.closest("a")) {
        e.preventDefault();
        e.stopPropagation();
      }
      const targetImg = e.target.closest("img");
      if (targetImg && !e.target.closest(".edit-icon-box")) {
        e.preventDefault();
        e.stopPropagation();
        openPicker(targetImg);
      }
    };
    document.addEventListener("click", handleGlobalClick, true);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("message", handleMessage);
      document.removeEventListener("click", handleGlobalClick, true);
    };
  }, [refreshIcons]);

  // Handle responsiveness and content changes
  useLayoutEffect(() => {
    refreshIcons();
    
    const observer = new MutationObserver(refreshIcons);
    if (contentRef.current) {
      observer.observe(contentRef.current, { 
        childList: true, 
        subtree: true, 
        attributes: true, 
        characterData: true 
      });
    }

    const resizeObserver = new ResizeObserver(refreshIcons);
    if (contentRef.current) resizeObserver.observe(contentRef.current);

    window.addEventListener("scroll", refreshIcons, true);
    window.addEventListener("resize", refreshIcons);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", refreshIcons, true);
      window.removeEventListener("resize", refreshIcons);
    };
  }, [content, refreshIcons]);

  const openPicker = (el) => {
    document.querySelectorAll('[data-editing="true"]').forEach((n) => n.removeAttribute("data-editing"));
    targetIdRef.current = el.id || null;
    if (!targetIdRef.current) el.setAttribute("data-editing", "true");
    window.parent.postMessage({ type: "OPEN_MEDIA_PICKER" }, "*");
  };

  // Robust input handling that avoids caret jumping
  const handleInput = useCallback((e) => {
    if (!contentRef.current) return;
    const currentHtml = contentRef.current.innerHTML;
    
    // Clean before sending to parent
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = currentHtml;
    tempDiv.querySelectorAll('[data-editing="true"]').forEach((el) => el.removeAttribute("data-editing"));
    const cleanHtml = tempDiv.innerHTML;
    
    window.parent.postMessage({ type: "UPDATE_CONTENT", content: cleanHtml }, "*");
    
    // Refresh icons because text changes can move elements
    refreshIcons();
  }, [refreshIcons]);

  // Sync content from state to DOM only when externally changed
  useLayoutEffect(() => {
    if (contentRef.current && content !== contentRef.current.innerHTML) {
      contentRef.current.innerHTML = content;
      refreshIcons();
    }
  }, [content, refreshIcons]);

  return (
    <div className="custom-page-content antialiased relative">
      {cssFile && (
        <link
          rel="stylesheet"
          href={cssFile.startsWith("/") ? cssFile : `/uploads/css/${cssFile}`}
          key={cssFile}
        />
      )}

      <div
        ref={contentRef}
        className="cursor-text outline-none focus:ring-1 focus:ring-blue-500/50 min-h-[100px] relative z-10"
        contentEditable={true}
        onInput={handleInput}
        suppressContentEditableWarning={true}
        spellCheck={false}
      />

      {/* Persistent Edit Icons */}
      {editableElements.map((item) => (
        <button
          key={item.id}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            openPicker(item.el);
          }}
          contentEditable={false}
          className="edit-icon-box fixed z-[1000] bg-indigo-600/90 hover:bg-indigo-600 text-white w-8 h-8 rounded-full shadow-[0_4px_12px_rgba(79,70,229,0.4)] transition-all duration-300 flex items-center justify-center border border-white/20 backdrop-blur-md hover:scale-110 active:scale-95 group"
          style={{ 
            top: item.top + 10, 
            left: item.left + 10, 
            pointerEvents: "auto" 
          }}
          title={`Edit ${item.type}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          <span className="absolute left-full ml-2 bg-indigo-600 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
            Change {item.type === 'IMAGE' ? 'Image' : 'BG'}
          </span>
        </button>
      ))}

      <style jsx global>{`
        html, body {
          background-color: #0a0b0f !important;
          color: #ffffff !important;
          margin: 0; padding: 0;
          overflow-x: hidden;
        }
        #admin-sidebar, #admin-header { display: none !important; }
        .custom-page-content input, .custom-page-content button, 
        .custom-page-content textarea, .custom-page-content select {
          pointer-events: none;
        }
        .edit-icon-box {
          pointer-events: auto !important;
          cursor: pointer !important;
          animation: iconPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes iconPop {
          from { opacity: 0; transform: scale(0.5) rotate(-20deg); }
          to { opacity: 1; transform: scale(1) rotate(0); }
        }
        img {
          cursor: pointer !important;
          transition: all 0.3s ease;
        }
        img:hover {
          outline: 4px solid #6366f1 !important;
          outline-offset: 2px;
          filter: brightness(0.9);
        }
        [style*="background"] {
          position: relative;
          transition: all 0.3s ease;
        }
        [style*="background"]:hover {
          outline: 3px dashed #6366f1 !important;
          outline-offset: -3px;
        }
      `}</style>
    </div>
  );
}
