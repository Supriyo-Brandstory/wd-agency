"use client";

import { useState, useEffect, useCallback, useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Editor from "@monaco-editor/react";
import { createCustomPage, getCssFiles } from "../actions";
import { getMedia, uploadFiles } from "../../media/actions";

// --- Media Picker Component ---
const MediaPicker = ({ isOpen, onClose, onSelect }) => {
  const [path, setPath] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const fetchItems = useCallback(async (currentPath) => {
    setLoading(true);
    const data = await getMedia(currentPath);
    setItems(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (isOpen) fetchItems(path);
  }, [isOpen, path, fetchItems]);

  const handleUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("path", path);
    files.forEach((f) => formData.append("files", f));
    await uploadFiles(formData);
    fetchItems(path);
    setUploading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[500] bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl h-[80vh] flex flex-col shadow-2xl overflow-hidden border border-gray-200">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-gray-800">Choose Media</h2>
            <div className="flex gap-1 text-sm text-gray-500">
              <button
                onClick={() => setPath("")}
                className="hover:text-blue-600"
              >
                uploads
              </button>
              {path
                .split("/")
                .filter(Boolean)
                .map((p, i) => (
                  <span key={p}>
                    {" "}
                    /{" "}
                    <button
                      onClick={() =>
                        setPath(
                          path
                            .split("/")
                            .slice(0, i + 1)
                            .join("/")
                        )
                      }
                      className="hover:text-blue-600"
                    >
                      {p}
                    </button>
                  </span>
                ))}
            </div>
          </div>
          <div className="flex gap-2">
            <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm transition-all shadow-sm">
              {uploading ? "..." : "Upload"}
              <input
                type="file"
                multiple
                className="hidden"
                onChange={handleUpload}
                disabled={uploading}
              />
            </label>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-light"
            >
              &times;
            </button>
          </div>
        </div>
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {items.map((item) => (
                <div
                  key={item.path}
                  className="bg-white rounded-xl border border-gray-200 p-2 hover:border-blue-400 cursor-pointer transition-all hover:shadow-md group"
                  onClick={() =>
                    item.isDirectory ? setPath(item.path) : onSelect(item.url)
                  }
                >
                  <div className="aspect-square flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden mb-2">
                    {item.isDirectory ? (
                      <span className="text-4xl text-yellow-500">📁</span>
                    ) : (
                      <img
                        src={item.url}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    )}
                  </div>
                  <p
                    className="text-xs font-medium truncate text-center text-gray-700"
                    title={item.name}
                  >
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function CreateCustomPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [cssFile, setCssFile] = useState("");
  const [cssFiles, setCssFiles] = useState([]);
  const [activeTab, setActiveTab] = useState("edit");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickerMode, setPickerMode] = useState("insert");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef(null);
  const inlinePreviewRef = useRef(null);
  const inlineTargetRef = useRef(null);
  const [inlineIcons, setInlineIcons] = useState([]);

  useEffect(() => {
    async function loadCss() {
      try {
        const files = await getCssFiles();
        setCssFiles(files || []);
      } catch (err) {
        console.error("Failed to load CSS files:", err);
      }
    }
    loadCss();
  }, []);

  const refreshInlineIcons = useCallback(() => {
    if (!inlinePreviewRef.current || activeTab !== "preview" || isFullscreen) {
      setInlineIcons([]);
      return;
    }
    const containerRect = inlinePreviewRef.current.getBoundingClientRect();
    const items = [];
    const elements = inlinePreviewRef.current.querySelectorAll(
      "img, [style*='background-image'], [style*='background:']"
    );

    elements.forEach((el, idx) => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 10 && rect.height > 10) {
        items.push({
          id: `inline-${idx}`,
          el: el,
          type: el.tagName === "IMG" ? "IMAGE" : "BG",
          top: rect.top - containerRect.top,
          left: rect.left - containerRect.left,
        });
      }
    });
    setInlineIcons(items);
  }, [activeTab, isFullscreen]);

  useEffect(() => {
    if (activeTab === "preview") {
      refreshInlineIcons();

      const handleInlineClick = (e) => {
        const targetImg = e.target.closest("img");
        if (targetImg && !e.target.closest(".inline-edit-btn")) {
          e.preventDefault();
          e.stopPropagation();
          openInlinePicker(targetImg);
        }
      };

      const el = inlinePreviewRef.current;
      if (el) el.addEventListener("click", handleInlineClick, true);

      window.addEventListener("scroll", refreshInlineIcons, true);
      window.addEventListener("resize", refreshInlineIcons);

      return () => {
        if (el) el.removeEventListener("click", handleInlineClick, true);
        window.removeEventListener("scroll", refreshInlineIcons, true);
        window.removeEventListener("resize", refreshInlineIcons);
      };
    }
  }, [activeTab, content, refreshInlineIcons]);

  useEffect(() => {
    if (isFullscreen) {
      document.body.classList.add("preview-active");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("preview-active");
      document.body.style.overflow = "";
    }

    return () => {
      document.body.classList.remove("preview-active");
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  const handleMessage = useCallback((e) => {
    if (e.data?.type === "UPDATE_CONTENT") {
      setContent(e.data.content || "");
      localStorage.setItem("customPagePreviewContent", e.data.content || "");
    }
    if (e.data?.type === "OPEN_MEDIA_PICKER") {
      setPickerMode("update");
      setIsPickerOpen(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleMessage]);

  const openPreview = () => {
    localStorage.setItem("customPagePreviewContent", content);
    localStorage.setItem("customPagePreviewCss", cssFile);
    setActiveTab("preview");
    setIsFullscreen(true);
  };

  const closePreview = () => {
    setIsFullscreen(false);
    setActiveTab("edit");
  };

  const generateSlug = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  const handleImageSelect = (url) => {
    if (!url) return;
    if (inlineTargetRef.current) {
      const el = inlineTargetRef.current;
      if (el.tagName === "IMG") {
        el.src = url;
        el.setAttribute("src", url);
      } else {
        el.style.backgroundImage = `url("${url}")`;
      }
      const updatedHtml = inlinePreviewRef.current.innerHTML;
      if (updatedHtml !== content) {
        setContent(updatedHtml);
        localStorage.setItem("customPagePreviewContent", updatedHtml);
      }
      inlineTargetRef.current = null;
      setTimeout(refreshInlineIcons, 100);
    } else if (pickerMode === "update" && iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(
        { type: "IMAGE_SELECTED", url },
        "*"
      );
    } else {
      setContent((prev) => {
        const newC = prev + `\n<img src="${url}" alt="" />`;
        localStorage.setItem("customPagePreviewContent", newC);
        return newC;
      });
    }
    setIsPickerOpen(false);
  };

  const openInlinePicker = (el) => {
    inlineTargetRef.current = el;
    setPickerMode("update");
    setIsPickerOpen(true);
  };

  const handleInlineInput = useCallback(() => {
    if (!inlinePreviewRef.current) return;
    const currentHtml = inlinePreviewRef.current.innerHTML;
    if (currentHtml !== content) {
      setContent(currentHtml);
      localStorage.setItem("customPagePreviewContent", currentHtml);
    }
    refreshInlineIcons();
  }, [content, refreshInlineIcons]);

  useLayoutEffect(() => {
    if (inlinePreviewRef.current && content !== inlinePreviewRef.current.innerHTML) {
      inlinePreviewRef.current.innerHTML = content;
      refreshInlineIcons();
    }
  }, [content, refreshInlineIcons]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !slug || !content) {
      setError("Title, Slug, and HTML Content are required!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("content", content);
      formData.append("cssFile", cssFile);

      await createCustomPage(formData);
      router.push("/admin/dashboard/custom-page");
    } catch (err) {
      console.error("Error creating custom page:", err);
      setError(err.message || "Failed to create custom page");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen">
      {isFullscreen && (
        <div className="fixed inset-0 z-[400] flex flex-col bg-black">
          <button
            onClick={closePreview}
            className="absolute top-4 right-5 z-[410] bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full font-bold shadow-2xl transition-all backdrop-blur-xl border border-white/20 flex items-center gap-2 text-sm"
          >
            ✕ Close Preview
          </button>
          <iframe
            ref={iframeRef}
            src="/admin/dashboard/custom-page/preview"
            className="w-full flex-1 border-0"
            title="Live Preview"
          />
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <Link href="/admin/dashboard/custom-page" className="hover:text-indigo-600">
              Custom Pages
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Create</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Create Custom Page</h1>
        </div>
        <Link
          href="/admin/dashboard/custom-page"
          className="text-gray-600 hover:text-gray-900 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-all"
        >
          Back to List
        </Link>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 p-6 border-b border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
              Page Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Landing Page Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setSlug(generateSlug(e.target.value));
              }}
              required
              className="border border-gray-300 rounded-xl px-4 py-2.5 w-full focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none font-medium transition-all bg-white text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
              Slug (URL) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="page-url"
              value={slug}
              onChange={(e) => setSlug(generateSlug(e.target.value))}
              required
              className="border border-gray-300 rounded-xl px-4 py-2.5 w-full focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none font-mono text-sm transition-all bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
              Link CSS File
            </label>
            <select
              value={cssFile}
              onChange={(e) => setCssFile(e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-2.5 w-full focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none font-medium transition-all bg-white text-sm"
            >
              <option value="">None (Inline Styles Only)</option>
              {cssFiles.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex border-b border-gray-100 bg-white px-6">
          <button
            type="button"
            onClick={() => setActiveTab("edit")}
            className={`py-3.5 px-6 font-bold text-sm border-b-2 transition-all flex items-center gap-2 ${
              activeTab === "edit"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            <span>✏️</span> Code Editor
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={`py-3.5 px-6 font-bold text-sm border-b-2 transition-all flex items-center gap-2 ${
              activeTab === "preview"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            <span>👁️</span> Visual Editor
          </button>
          <button
            type="button"
            onClick={openPreview}
            className="py-3.5 px-6 font-bold text-sm border-b-2 border-transparent text-gray-400 hover:text-indigo-600 transition-all flex items-center gap-2 ml-auto"
          >
            <span>🚀</span> Fullscreen Preview
          </button>
        </div>

        <div className="p-6">
          {activeTab === "edit" ? (
            <div className="border border-gray-200 rounded-2xl overflow-hidden focus-within:border-indigo-500 transition-all shadow-inner">
              <Editor
                height="600px"
                defaultLanguage="html"
                value={content}
                theme="vs-dark"
                onChange={(val) => setContent(val || "")}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: "on",
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  wordWrap: "on",
                  padding: { top: 20 },
                }}
              />
            </div>
          ) : (
            <div className="relative border border-gray-200 rounded-2xl p-6 bg-white min-h-[500px]">
              {cssFile && (
                <link
                  rel="stylesheet"
                  href={`/uploads/css/${cssFile}`}
                />
              )}
              <div
                ref={inlinePreviewRef}
                contentEditable
                suppressContentEditableWarning
                onInput={handleInlineInput}
                className="p-8 max-w-none cursor-text min-h-[600px] custom-page-content outline-none focus:ring-1 focus:ring-indigo-500/30"
              />
              {inlineIcons.map((icon) => (
                <button
                  key={icon.id}
                  type="button"
                  onClick={() => openInlinePicker(icon.el)}
                  style={{
                    top: `${icon.top + 10}px`,
                    left: `${icon.left + 10}px`,
                  }}
                  className="absolute z-20 bg-indigo-600 text-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
                  title="Change Media"
                >
                  🖼️
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="bg-gray-50 p-6 border-t border-gray-100 flex justify-between items-center">
          <span className="text-xs text-gray-400">
            💡 Tip: Publishing automatically registers the page in Sitemap and SEO metadata.
          </span>
          <div className="flex gap-3">
            <Link
              href="/admin/dashboard/custom-page"
              className="px-6 py-2.5 rounded-xl text-gray-500 font-bold hover:bg-gray-200 transition text-sm"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-8 py-2.5 rounded-xl font-bold transition shadow-lg shadow-indigo-100 text-sm"
            >
              {loading ? "Publishing..." : "Publish Page"}
            </button>
          </div>
        </div>
      </form>

      <MediaPicker
        isOpen={isPickerOpen}
        onClose={() => setIsPickerOpen(false)}
        onSelect={handleImageSelect}
      />
    </div>
  );
}
