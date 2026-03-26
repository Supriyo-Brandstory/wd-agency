"use client";

import { useState, useEffect, useCallback, useRef, useLayoutEffect } from "react";
import {
  createCustomPage,
  updateCustomPage,
  deleteCustomPage,
  getCustomPages,
  getCssFiles,
  getCssContent,
  saveCssFile,
  deleteCssFile,
} from "./actions";
import { getMedia, uploadFiles } from "../media/actions";
import Editor from "@monaco-editor/react";

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
                            .join("/"),
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
                      <span className="text-4xl">📁</span>
                    ) : item.url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i) ? (
                      <img
                        src={item.url}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-4xl">📄</span>
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

export default function CustomPageAdmin() {
  const [pages, setPages] = useState([]);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [cssFile, setCssFile] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [showPageForm, setShowPageForm] = useState(false);
  const [activeTab, setActiveTab] = useState("edit");

  const [cssFiles, setCssFiles] = useState([]);
  const [currentCssName, setCurrentCssName] = useState("");
  const [cssContent, setCssContent] = useState("");
  const [showCssForm, setShowCssForm] = useState(false);
  const [view, setView] = useState("pages");

  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickerMode, setPickerMode] = useState("insert"); // "insert" or "update"
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef(null);
  const inlinePreviewRef = useRef(null);
  const inlineTargetRef = useRef(null);
  const [inlineIcons, setInlineIcons] = useState([]);

  // Refresh positions for inline preview icons
  const refreshInlineIcons = useCallback(() => {
    if (!inlinePreviewRef.current || activeTab !== "preview" || isFullscreen) {
      setInlineIcons([]);
      return;
    }
    const containerRect = inlinePreviewRef.current.getBoundingClientRect();
    const items = [];
    const elements = inlinePreviewRef.current.querySelectorAll("img, [style*='background-image'], [style*='background:']");
    
    elements.forEach((el, idx) => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 10 && rect.height > 10) {
        items.push({
          id: `inline-${idx}`,
          el: el,
          type: el.tagName === 'IMG' ? 'IMAGE' : 'BG',
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
    fetchData();
  }, []);

  // ── Live Preview DOM side-effects (no CSS injection — iframe handles styles) ──
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
    // Persist current content so the preview iframe can read it
    localStorage.setItem("customPagePreviewContent", content);
    localStorage.setItem("customPagePreviewCss", cssFile);
    setActiveTab("preview");
    setIsFullscreen(true);
  };

  const closePreview = () => {
    setIsFullscreen(false);
    setActiveTab("edit");
  };

  const fetchData = async () => {
    const [pData, cData] = await Promise.all([getCustomPages(), getCssFiles()]);
    setPages(pData);
    setCssFiles(cData);
  };

  const generateSlug = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  const handlePageCreate = async () => {
    if (!title || !slug || !content) return alert("All fields are required!");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("content", content);
    formData.append("cssFile", cssFile);
    await createCustomPage(formData);
    fetchData();
    resetPageForm();
  };

  const handlePageUpdate = async () => {
    if (!selectedId) return;
    const formData = new FormData();
    formData.append("id", selectedId);
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("content", content);
    formData.append("cssFile", cssFile);
    await updateCustomPage(formData);
    fetchData();
    resetPageForm();
  };

  const resetPageForm = () => {
    setTitle("");
    setSlug("");
    setContent("");
    setCssFile("");
    setSelectedId(null);
    setShowPageForm(false);
    setActiveTab("edit");
    setIsFullscreen(false); // triggers useEffect cleanup
  };

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

  // Sync content from state to DOM only when externally changed
  useLayoutEffect(() => {
    if (inlinePreviewRef.current && content !== inlinePreviewRef.current.innerHTML) {
      inlinePreviewRef.current.innerHTML = content;
      refreshInlineIcons();
    }
  }, [content, refreshInlineIcons]);

  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen bg-gray-50/50">
      {isFullscreen && (
        <div className="fixed inset-0 z-[400] flex flex-col bg-black animate-fadeIn">
          {/* Close button floats above the iframe */}
          <button
            onClick={closePreview}
            className="absolute top-4 right-5 z-[410] bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full font-bold shadow-2xl transition-all backdrop-blur-xl border border-white/20 flex items-center gap-2 text-sm"
          >
            x Close Preview
          </button>
          {/*
            The preview route (/admin/dashboard/custom-page/preview) already:
            - imports globals.scss via Next.js bundling
            - reads content from localStorage
            - listens for storage events to hot-reload on image swap
            - postMessages PICK_IMAGE events back to this parent window
          */}
          <iframe
            ref={iframeRef}
            src="/admin/dashboard/custom-page/preview"
            className="w-full flex-1 border-0"
            title="Live Preview"
          />
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            {view === "pages" ? "Custom Pages" : "CSS Files"}
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage your website's landing pages and styles.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => {
              setView(view === "pages" ? "css" : "pages");
              setShowPageForm(false);
              setShowCssForm(false);
            }}
            className="bg-white text-gray-700 border border-gray-200 px-5 py-2.5 rounded-xl transition hover:bg-gray-50 font-semibold shadow-sm"
          >
            {view === "pages" ? "💼 CSS Manager" : "📄 Page Manager"}
          </button>
          <button
            onClick={() =>
              view === "pages"
                ? setShowPageForm(!showPageForm)
                : setShowCssForm(!showCssForm)
            }
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl transition shadow-lg shadow-indigo-100 font-semibold"
          >
            {showPageForm || showCssForm
              ? "✖ Close"
              : view === "pages"
                ? "➕ Create Page"
                : "➕ Create CSS"}
          </button>
        </div>
      </div>

      {view === "css" && showCssForm && (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 border border-gray-100 animate-fadeIn">
          <input
            type="text"
            placeholder="style.css"
            value={currentCssName}
            onChange={(e) => setCurrentCssName(e.target.value)}
            className="w-full mb-4 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 py-3 px-4 font-mono"
          />
          <textarea
            className="w-full h-[500px] border-gray-200 rounded-xl p-4 font-mono text-sm mb-6 focus:ring-2 focus:ring-indigo-500"
            value={cssContent}
            onChange={(e) => setCssContent(e.target.value)}
          />
          <div className="flex gap-3">
            <button
              onClick={async () => {
                await saveCssFile(currentCssName, cssContent);
                fetchData();
                setShowCssForm(false);
              }}
              className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition font-bold shadow-md shadow-green-100"
            >
              Save File
            </button>
            <button
              onClick={() => setShowCssForm(false)}
              className="bg-gray-100 text-gray-600 px-8 py-3 rounded-xl hover:bg-gray-200 transition font-bold"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {view === "pages" && showPageForm && (
        <div className="bg-white rounded-2xl shadow-2xl mb-12 border border-gray-100 overflow-hidden animate-slideUp">
          <div className="bg-gray-50 p-6 border-b border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                Page Title
              </label>
              <input
                type="text"
                placeholder="Landing Page 1"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (!selectedId) setSlug(generateSlug(e.target.value));
                }}
                className="border-gray-200 rounded-xl px-4 py-2.5 w-full focus:ring-2 focus:ring-indigo-500 font-medium transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                Slug (URL)
              </label>
              <input
                type="text"
                placeholder="page-url"
                value={slug}
                onChange={(e) => setSlug(generateSlug(e.target.value))}
                className="border-gray-200 rounded-xl px-4 py-2.5 w-full focus:ring-2 focus:ring-indigo-500 font-mono text-sm transition-all bg-gray-50/50"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                CSS Theme
              </label>
              <select
                value={cssFile}
                onChange={(e) => setCssFile(e.target.value)}
                className="border-gray-200 rounded-xl px-4 py-2.5 w-full focus:ring-2 focus:ring-indigo-500 font-medium transition-all cursor-pointer"
              >
                <option value="">Default styling</option>
                {cssFiles.map((file) => (
                  <option key={file} value={file}>
                    {file}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="p-0 border-b border-gray-100 flex items-center justify-between px-6 bg-white">
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setActiveTab("edit");
                  setIsFullscreen(false);
                }}
                className={`py-4 px-4 font-bold text-sm transition-all border-b-2 ${
                  activeTab === "edit"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                🖋 Code Editor
              </button>
              {/* Live Preview: clicking opens fullscreen directly */}
              <button
                onClick={openPreview}
                className={`py-4 px-4 font-bold text-sm transition-all border-b-2 ${
                  activeTab === "preview" && isFullscreen
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                👀 Live Preview
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setPickerMode("insert");
                  setIsPickerOpen(true);
                }}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-lg font-bold transition-all"
              >
                🖼 Insert Image
              </button>
            </div>
          </div>

          <div className="min-h-[600px] border-b border-gray-100">
            {activeTab === "edit" ? (
              <div className="h-[600px] overflow-hidden">
                <Editor
                  height="600px"
                  defaultLanguage="html"
                  value={content}
                  theme="vs-dark"
                  onChange={(value) => setContent(value || "")}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineNumbers: "on",
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    suggest: true,
                    formatOnPaste: true,
                    formatOnType: true,
                    wordWrap: "on",
                    padding: { top: 20 },
                    cursorBlinking: "smooth",
                    smoothScrolling: true,
                    cursorSmoothCaretAnimation: "on",
                  }}
                />
              </div>
            ) : (
              <div className="relative bg-white min-h-[600px]">
                {cssFile && (
                  <link
                    rel="stylesheet"
                    href={`/uploads/css/${cssFile}`}
                    key={cssFile}
                  />
                )}
                <div
                  ref={inlinePreviewRef}
                  className="p-8 max-w-none cursor-text min-h-[600px] custom-page-content outline-none focus:ring-1 focus:ring-indigo-500/30"
                  title="Edit Text Directly"
                  contentEditable={true}
                  onInput={handleInlineInput}
                  suppressContentEditableWarning={true}
                  spellCheck={false}
                />

                {/* Inline Edit Icons (Only for internal preview tab) */}
                {inlineIcons.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => openInlinePicker(item.el)}
                    className="inline-edit-btn absolute z-[300] bg-indigo-600/90 hover:bg-indigo-600 text-white w-7 h-7 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center border border-white/20 backdrop-blur-sm group hover:scale-110 active:scale-95"
                    style={{ top: item.top + 8, left: item.left + 8 }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    <span className="absolute left-full ml-2 bg-indigo-600 text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg z-[310]">
                      Edit
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="p-6 bg-gray-50 flex justify-between items-center">
            <p className="text-xs text-gray-400 italic">
              💡 Tip: Use descriptive classes for better styling.
            </p>
            <div className="flex gap-3">
              <button
                onClick={selectedId ? handlePageUpdate : handlePageCreate}
                className="bg-indigo-600 text-white px-10 py-3 rounded-xl hover:bg-indigo-700 transition font-extrabold shadow-lg shadow-indigo-100"
              >
                {selectedId ? "Update Changes" : "Publish Page"}
              </button>
              <button
                onClick={resetPageForm}
                className="bg-white text-gray-500 border border-gray-200 px-8 py-3 rounded-xl hover:bg-gray-50 transition font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TABLE VIEW */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.2em]">
              <th className="p-4 px-6">ID</th>
              <th className="p-4">Page Identity</th>
              <th className="p-4">Dynamic Link</th>
              <th className="p-4">Style Sheet</th>
              <th className="p-4 text-right pr-8">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {view === "pages"
              ? pages.map((page) => (
                  <tr
                    key={page.id}
                    className="hover:bg-gray-50/50 transition-all group"
                  >
                    <td className="p-4 px-6 text-gray-400 font-mono text-xs">
                      #{page.id}
                    </td>
                    <td className="p-4">
                      <div className="font-bold text-gray-800">
                        {page.title}
                      </div>
                      <div className="text-[10px] text-gray-400 mt-0.5">
                        {new Date(page.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="p-4 font-mono text-xs text-indigo-500 font-semibold group-hover:underline">
                      <a href={`/${page.slug}`} target="_blank">
                        /{page.slug} ↗
                      </a>
                    </td>
                    <td className="p-4">
                      <span
                        className={`text-[10px] px-2 py-1 rounded-md font-bold ${page.cssFile ? "bg-blue-50 text-blue-600" : "bg-gray-100 text-gray-400"}`}
                      >
                        {page.cssFile || "NONE"}
                      </span>
                    </td>
                    <td className="p-4 text-right space-x-2 pr-8">
                      <button
                        onClick={() => {
                          setSelectedId(page.id);
                          setTitle(page.title);
                          setSlug(page.slug);
                          setContent(page.content);
                          setCssFile(page.cssFile || "");
                          setShowPageForm(true);
                        }}
                        className="text-indigo-600 hover:text-indigo-800 font-bold text-sm bg-indigo-50 px-3 py-1 rounded-lg"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          if (confirm("Delete?")) {
                            deleteCustomPage(page.id);
                            fetchData();
                          }
                        }}
                        className="text-red-500 hover:text-red-700 font-bold text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              : cssFiles.map((file) => (
                  <tr key={file} className="hover:bg-gray-50 transition-all">
                    <td className="p-4 px-6 text-gray-400 font-mono text-xs">
                      CSS
                    </td>
                    <td className="p-4 font-bold text-gray-800">{file}</td>
                    <td className="p-4 text-[10px] text-gray-400">{file}</td>
                    <td className="p-4 text-gray-400">—</td>
                    <td className="p-4 text-right space-x-3 pr-8">
                      <button
                        onClick={async () => {
                          const c = await getCssContent(file);
                          setCurrentCssName(file);
                          setCssContent(c);
                          setShowCssForm(true);
                        }}
                        className="text-blue-600 hover:underline font-bold text-sm"
                      >
                        Modify
                      </button>
                      <button
                        onClick={async () => {
                          if (confirm("Delete CSS?")) {
                            await deleteCssFile(file);
                            fetchData();
                          }
                        }}
                        className="text-red-500 font-bold text-sm hover:underline"
                      >
                        Trash
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        {(view === "pages" ? pages : cssFiles).length === 0 && (
          <div className="p-10 text-center text-gray-400 font-medium italic">
            Nothing found in this section.
          </div>
        )}
      </div>

      <MediaPicker
        isOpen={isPickerOpen}
        onClose={() => setIsPickerOpen(false)}
        onSelect={handleImageSelect}
      />

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
