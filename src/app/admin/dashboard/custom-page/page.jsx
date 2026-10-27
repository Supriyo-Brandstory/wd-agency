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
  bulkUploadPages,
} from "./actions";
import { getMedia, uploadFiles } from "../media/actions";
import Pagination from "@/app/admin/components/Pagination";
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
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;

  // Bulk Upload state
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [bulkFiles, setBulkFiles] = useState([]);
  const [bulkUploading, setBulkUploading] = useState(false);
  const [bulkError, setBulkError] = useState("");
  const [bulkResult, setBulkResult] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

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
    fetchData(page);
  }, [page]);

  // ── Live Preview DOM side-effects ──
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

  const fetchData = async (targetPage = page) => {
    const [pData, cData] = await Promise.all([
      getCustomPages(targetPage, limit),
      getCssFiles(),
    ]);
    if (pData && pData.pages) {
      setPages(pData.pages);
      setTotal(pData.total);
    } else {
      setPages(Array.isArray(pData) ? pData : []);
      setTotal(Array.isArray(pData) ? pData.length : 0);
    }
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
    setPage(1);
    await fetchData(1);
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
    await fetchData(page);
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
    setIsFullscreen(false);
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

  // Handle Bulk Upload submission
  const handleBulkSubmit = async () => {
    if (bulkFiles.length === 0) {
      setBulkError("Please choose a .ZIP archive or .HTML file to upload.");
      return;
    }

    setBulkUploading(true);
    setBulkError("");
    setBulkResult(null);

    try {
      const formData = new FormData();
      bulkFiles.forEach((file) => {
        formData.append("files", file);
      });

      const result = await bulkUploadPages(formData);
      setBulkResult(result);
      setPage(1);
      await fetchData(1);
    } catch (err) {
      console.error(err);
      setBulkError(err.message || "Failed to complete bulk upload");
    } finally {
      setBulkUploading(false);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen bg-gray-50/50">
      {isFullscreen && (
        <div className="fixed inset-0 z-[400] flex flex-col bg-black animate-fadeIn">
          <button
            onClick={closePreview}
            className="absolute top-4 right-5 z-[410] bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full font-bold shadow-2xl transition-all backdrop-blur-xl border border-white/20 flex items-center gap-2 text-sm"
          >
            x Close Preview
          </button>
          <iframe
            ref={iframeRef}
            src="/admin/dashboard/custom-page/preview"
            className="w-full flex-1 border-0"
            title="Live Preview"
          />
        </div>
      )}

      {/* Top Header & View Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            {view === "pages" ? "Custom Pages" : "CSS Files"}
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage your website's landing pages, styles, SEO &amp; XML sitemap synchronization.
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap sm:flex-nowrap shrink-0">
          <button
            onClick={() => {
              setView(view === "pages" ? "css" : "pages");
              setShowPageForm(false);
              setShowCssForm(false);
            }}
            className="bg-white text-gray-700 border border-gray-200 hover:border-gray-300 px-3.5 py-2 rounded-xl transition hover:bg-gray-50 font-semibold text-xs shadow-sm flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <span>{view === "pages" ? "💼" : "📄"}</span>
            <span>{view === "pages" ? "CSS Manager" : "Page Manager"}</span>
          </button>

          {view === "pages" && (
            <button
              onClick={() => {
                setShowBulkModal(true);
                setBulkResult(null);
                setBulkError("");
                setBulkFiles([]);
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-xl transition shadow-sm hover:shadow font-semibold text-xs flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span>📦</span>
              <span>Bulk Upload</span>
            </button>
          )}

          <button
            onClick={() =>
              view === "pages"
                ? setShowPageForm(!showPageForm)
                : setShowCssForm(!showCssForm)
            }
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-3.5 py-2 rounded-xl transition shadow-sm hover:shadow font-semibold text-xs flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <span>{showPageForm || showCssForm ? "✖" : "➕"}</span>
            <span>
              {showPageForm || showCssForm
                ? "Close"
                : view === "pages"
                  ? "Create Page"
                  : "Create CSS"}
            </span>
          </button>
        </div>
      </div>

      {/* CSS Manager Form */}
      {view === "css" && showCssForm && (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 border border-gray-100 animate-fadeIn">
          <input
            type="text"
            placeholder="style.css"
            value={currentCssName}
            onChange={(e) => setCurrentCssName(e.target.value)}
            className="w-full mb-5 border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none rounded-xl py-3 px-5 font-mono transition-all shadow-sm bg-white"
          />
          <div className="border border-gray-200 rounded-xl overflow-hidden mb-6 focus-within:border-indigo-500 transition-shadow">
            <Editor
              height="500px"
              defaultLanguage="css"
              value={cssContent}
              theme="vs-dark"
              onChange={(value) => setCssContent(value || "")}
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
              }}
            />
          </div>
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

      {/* Create / Edit Page Form */}
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
                className="border-slate-300 rounded-xl px-4 py-3 w-full focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none font-medium transition-all shadow-sm bg-white"
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
                className="border-slate-300 rounded-xl px-4 py-3 w-full focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none font-mono text-sm transition-all shadow-sm bg-gray-50/30"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                Link CSS File
              </label>
              <select
                value={cssFile}
                onChange={(e) => setCssFile(e.target.value)}
                className="border-slate-300 rounded-xl px-4 py-3 w-full focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none font-medium transition-all shadow-sm bg-white"
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
              onClick={() => setActiveTab("edit")}
              className={`py-4 px-6 font-bold text-sm border-b-2 transition-all flex items-center gap-2 ${
                activeTab === "edit"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              <span>✏️</span> Code Editor
            </button>
            <button
              onClick={() => setActiveTab("preview")}
              className={`py-4 px-6 font-bold text-sm border-b-2 transition-all flex items-center gap-2 ${
                activeTab === "preview"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              <span>👁️</span> Visual Editor
            </button>
            <button
              onClick={openPreview}
              className="py-4 px-6 font-bold text-sm border-b-2 border-transparent text-gray-400 hover:text-indigo-600 transition-all flex items-center gap-2 ml-auto"
            >
              <span>🚀</span> Fullscreen Preview
            </button>
          </div>

          <div className="p-8">
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
              💡 Tip: Saving automatically registers the page in Sitemap and SEO metadata.
            </span>
            <div className="flex gap-3">
              <button
                onClick={resetPageForm}
                className="px-6 py-2.5 rounded-xl text-gray-500 font-bold hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={selectedId ? handlePageUpdate : handlePageCreate}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2.5 rounded-xl font-bold transition shadow-lg shadow-indigo-100"
              >
                {selectedId ? "Update Page" : "Publish Page"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Bulk Upload Modal ── */}
      {showBulkModal && (
        <div className="fixed inset-0 z-[500] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-gray-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-emerald-50 via-teal-50 to-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl shadow-md shadow-emerald-200">
                  📦
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-gray-900">
                    Bulk Page Upload System
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Upload ZIP archives with HTML templates and images folder. Auto-binds SEO &amp; Sitemap.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowBulkModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-light w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              {bulkError && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-sm flex items-start gap-3">
                  <span className="text-lg">⚠️</span>
                  <div className="flex-1">
                    <p className="font-bold">Upload Failed</p>
                    <p className="text-xs text-red-600 mt-0.5">{bulkError}</p>
                  </div>
                </div>
              )}

              {!bulkResult ? (
                <>
                  {/* Dropzone */}
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragOver(true);
                    }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setIsDragOver(false);
                      const dropped = Array.from(e.dataTransfer.files);
                      setBulkFiles(dropped);
                    }}
                    className={`border-2 border-dashed rounded-3xl p-8 text-center transition-all ${
                      isDragOver
                        ? "border-emerald-500 bg-emerald-50/50 scale-[1.01]"
                        : "border-gray-200 hover:border-emerald-400 bg-gray-50/40"
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-3xl mb-4">
                      📁
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Drag &amp; drop your ZIP file or HTML pages here
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">
                      Supports <code className="text-emerald-700 font-mono bg-emerald-50 px-1.5 py-0.5 rounded">.zip</code> archives containing HTML file(s) and an <code className="text-emerald-700 font-mono bg-emerald-50 px-1.5 py-0.5 rounded">images/</code> folder, or standalone <code className="text-emerald-700 font-mono bg-emerald-50 px-1.5 py-0.5 rounded">.html</code> files.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
                      <label className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-2xl cursor-pointer transition shadow-md shadow-emerald-100">
                        <span>📂 Browse Files</span>
                        <input
                          type="file"
                          accept=".zip,.html,.htm"
                          multiple
                          className="hidden"
                          onChange={(e) => {
                            setBulkFiles(Array.from(e.target.files));
                          }}
                        />
                      </label>
                      <a
                        href="/api/admin/download-sample-template"
                        download="sample-custom-page-template.zip"
                        className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-emerald-700 border-2 border-emerald-500 hover:border-emerald-600 font-bold text-sm px-6 py-3 rounded-2xl transition shadow-sm"
                        title="Download a working sample ZIP package with HTML template, images folder & documentation"
                      >
                        <span>📥</span> Download Sample ZIP
                      </a>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-3">
                      💡 Need a reference? Download the sample ZIP to see how to structure your HTML and <code className="bg-emerald-50 text-emerald-800 px-1 py-0.5 rounded font-mono">images/</code> folder.
                    </p>

                    {bulkFiles.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap gap-2 justify-center">
                        {bulkFiles.map((f, i) => (
                          <div
                            key={i}
                            className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs font-medium text-gray-700 flex items-center gap-2 shadow-sm"
                          >
                            <span className="text-emerald-600">
                              {f.name.endsWith(".zip") ? "📦" : "📄"}
                            </span>
                            <span className="font-bold">{f.name}</span>
                            <span className="text-gray-400">
                              ({(f.size / 1024).toFixed(1)} KB)
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                setBulkFiles(bulkFiles.filter((_, idx) => idx !== i))
                              }
                              className="text-gray-400 hover:text-red-500 ml-1 font-bold"
                            >
                              &times;
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-emerald-50/60 border border-emerald-100 rounded-2xl">
                      <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-1">
                        <span>🖼️</span> Images Folder Binding
                      </div>
                      <p className="text-xs text-emerald-900/80 leading-relaxed">
                        Extracts the <code className="font-mono">images/</code> directory to media storage and rewrites relative <code className="font-mono">src="images/..."</code>, <code className="font-mono">./images/...</code>, and CSS <code className="font-mono">url(...)</code> paths seamlessly.
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-2xl">
                      <div className="flex items-center gap-2 text-blue-800 font-bold text-sm mb-1">
                        <span>🔍</span> SEO &amp; Schema Extraction
                      </div>
                      <p className="text-xs text-blue-900/80 leading-relaxed">
                        Extracts <code className="font-mono">&lt;title&gt;</code>, <code className="font-mono">&lt;meta description&gt;</code>, and <code className="font-mono">&lt;script type="application/ld+json"&gt;</code> schema into the database.
                      </p>
                    </div>

                    <div className="p-4 bg-purple-50/60 border border-purple-100 rounded-2xl">
                      <div className="flex items-center gap-2 text-purple-800 font-bold text-sm mb-1">
                        <span>🌐</span> XML Sitemap Auto-Sync
                      </div>
                      <p className="text-xs text-purple-900/80 leading-relaxed">
                        Instantly registers the page in <code className="font-mono">/sitemap.xml</code> with accurate URL, priority, and lastmod timestamp. Updates or removes when edited or deleted.
                      </p>
                    </div>

                    <div className="p-4 bg-amber-50/60 border border-amber-100 rounded-2xl">
                      <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-1">
                        <span>🎨</span> CSS &amp; Font Extraction
                      </div>
                      <p className="text-xs text-amber-900/80 leading-relaxed">
                        Extracts <code className="font-mono">&lt;style&gt;</code> blocks into CSS Manager stylesheets and preserves external Google Fonts links so styles render 100% true to design.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                /* Result View */
                <div className="space-y-6">
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-3xl text-center">
                    <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-3 shadow-md shadow-emerald-200">
                      ✓
                    </div>
                    <h3 className="text-xl font-extrabold text-emerald-900">
                      Bulk Upload Successful!
                    </h3>
                    <p className="text-sm text-emerald-700 mt-1">
                      Processed <strong>{bulkResult.totalPages}</strong> custom page(s) and extracted{" "}
                      <strong>{bulkResult.imagesExtracted}</strong> image asset(s).
                    </p>
                  </div>

                  <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white">
                    <div className="p-4 bg-gray-50/60 border-b border-gray-100 font-bold text-xs text-gray-500 uppercase tracking-wider">
                      Processed Pages
                    </div>
                    <div className="divide-y divide-gray-100 max-h-72 overflow-y-auto">
                      {bulkResult.pages?.map((p, idx) => (
                        <div key={idx} className="p-4 flex items-center justify-between gap-4">
                          <div className="min-w-0">
                            <h4 className="font-bold text-sm text-gray-800 truncate">
                              {p.title}
                            </h4>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className="font-mono text-xs text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                                /{p.slug}
                              </span>
                              <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold">
                                🌐 Sitemap Synced
                              </span>
                              {p.hasSeo && (
                                <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-bold">
                                  🔍 SEO Ready
                                </span>
                              )}
                              {p.hasScript && (
                                <span className="text-[10px] bg-purple-50 text-purple-700 px-2 py-0.5 rounded font-bold">
                                  📜 Schema Synced
                                </span>
                              )}
                              {p.hasCss && (
                                <span className="text-[10px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-bold">
                                  🎨 CSS Linked
                                </span>
                              )}
                            </div>
                          </div>
                          <a
                            href={`/${p.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 shrink-0"
                          >
                            View Live ↗
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50/60 flex justify-end gap-3">
              {!bulkResult ? (
                <>
                  <button
                    onClick={() => setShowBulkModal(false)}
                    disabled={bulkUploading}
                    className="px-6 py-2.5 rounded-xl text-gray-500 font-bold hover:bg-gray-200 transition text-sm disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleBulkSubmit}
                    disabled={bulkUploading || bulkFiles.length === 0}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2.5 rounded-xl font-bold transition shadow-lg shadow-emerald-100 text-sm flex items-center gap-2 disabled:opacity-50"
                  >
                    {bulkUploading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                        Processing ZIP &amp; Syncing...
                      </>
                    ) : (
                      <>
                        <span>🚀</span> Upload &amp; Sync Pages
                      </>
                    )}
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setBulkResult(null);
                      setBulkFiles([]);
                      setBulkError("");
                    }}
                    className="px-6 py-2.5 rounded-xl text-gray-600 font-bold hover:bg-gray-200 transition text-sm"
                  >
                    Upload Another Batch
                  </button>
                  <button
                    onClick={() => {
                      setShowBulkModal(false);
                      setBulkResult(null);
                      setBulkFiles([]);
                    }}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2.5 rounded-xl font-bold transition text-sm shadow-md shadow-emerald-100"
                  >
                    Done &amp; Close
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Custom Pages & CSS Files Table */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/80 border-b border-gray-100 text-xs font-bold text-gray-500 uppercase tracking-wider">
              <th className="p-4 px-6">ID</th>
              <th className="p-4">Title &amp; Created</th>
              <th className="p-4">Slug &amp; Sitemap URL</th>
              <th className="p-4">SEO &amp; Styles</th>
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
                    <td className="p-4 whitespace-nowrap min-w-[180px]">
                      <div className="flex items-center gap-2">
                        <a
                          href={`/${page.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-indigo-600 font-semibold hover:underline"
                        >
                          /{page.slug} ↗
                        </a>
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-[10px] text-emerald-600 font-medium">
                        <span>🌐</span> In XML Sitemap
                      </div>
                    </td>
                    <td className="p-4 whitespace-nowrap min-w-[200px]">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${
                            page.cssFile
                              ? "bg-blue-50 text-blue-600 border border-blue-100"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {page.cssFile ? `🎨 ${page.cssFile}` : "Inline CSS"}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-purple-50 text-purple-600 border border-purple-100">
                          🔍 SEO Synced
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-right space-x-1.5 pr-6 whitespace-nowrap">
                      <a
                        href={`/${page.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-indigo-600 font-semibold text-xs bg-gray-100 hover:bg-gray-200 px-2.5 py-1 rounded-lg inline-block transition"
                      >
                        View
                      </a>
                      <button
                        onClick={() => {
                          setSelectedId(page.id);
                          setTitle(page.title);
                          setSlug(page.slug);
                          setContent(page.content);
                          setCssFile(page.cssFile || "");
                          setShowPageForm(true);
                        }}
                        className="text-indigo-600 hover:text-indigo-800 font-semibold text-xs bg-indigo-50 hover:bg-indigo-100 px-2.5 py-1 rounded-lg transition cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={async () => {
                          if (
                            confirm(
                              `Delete page "/${page.slug}"?\n\nThis will automatically remove this page from /sitemap.xml and delete its SEO metadata.`
                            )
                          ) {
                            await deleteCustomPage(page.id);
                            if (pages.length === 1 && page > 1) {
                              setPage(page - 1);
                            } else {
                              fetchData(page);
                            }
                          }
                        }}
                        className="text-red-500 hover:text-red-700 font-semibold text-xs bg-red-50 hover:bg-red-100 px-2.5 py-1 rounded-lg transition cursor-pointer"
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
        {view === "pages" && (
          <Pagination
            currentPage={page}
            totalPages={Math.ceil(total / limit)}
            totalItems={total}
            pageSize={limit}
            onPageChange={setPage}
          />
        )}
        {(view === "pages" ? pages : cssFiles).length === 0 && (
          <div className="p-12 text-center text-gray-400 font-medium">
            <span className="text-3xl block mb-2">📄</span>
            No {view === "pages" ? "custom pages" : "CSS files"} found. Click "Bulk Page Upload" or "Create Page" to get started!
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
