"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  deleteCustomPage,
  getCustomPages,
  getCssFiles,
  getCssContent,
  saveCssFile,
  deleteCssFile,
  bulkUploadPages,
} from "./actions";
import Pagination from "@/app/admin/components/Pagination";
import Editor from "@monaco-editor/react";

export default function CustomPageAdmin() {
  const [pages, setPages] = useState([]);
  const [cssFiles, setCssFiles] = useState([]);
  const [currentCssName, setCurrentCssName] = useState("");
  const [cssContent, setCssContent] = useState("");
  const [showCssForm, setShowCssForm] = useState(false);
  const [view, setView] = useState("pages");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;
  const [loading, setLoading] = useState(true);

  // Bulk Upload state
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [bulkFiles, setBulkFiles] = useState([]);
  const [bulkUploading, setBulkUploading] = useState(false);
  const [bulkError, setBulkError] = useState("");
  const [bulkResult, setBulkResult] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const fetchData = async (targetPage = page) => {
    setLoading(true);
    try {
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
      setCssFiles(cData || []);
    } catch (err) {
      console.error("Failed to load custom pages data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

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
              setShowCssForm(false);
            }}
            className="bg-white text-gray-700 border border-gray-200 hover:border-gray-300 px-3.5 py-2 rounded-xl transition hover:bg-gray-50 font-semibold text-xs shadow-sm flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <span>{view === "pages" ? "🎨" : "📄"}</span>
            <span>{view === "pages" ? "CSS Manager" : "Page Manager"}</span>
          </button>

          {view === "pages" ? (
            <>
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

              <Link
                href="/admin/dashboard/custom-page/create"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-3.5 py-2 rounded-xl transition shadow-sm hover:shadow font-semibold text-xs flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <span>➕</span>
                <span>Create Page</span>
              </Link>
            </>
          ) : (
            <button
              onClick={() => setShowCssForm(!showCssForm)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-3.5 py-2 rounded-xl transition shadow-sm hover:shadow font-semibold text-xs flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span>{showCssForm ? "✖" : "➕"}</span>
              <span>{showCssForm ? "Close" : "Create CSS"}</span>
            </button>
          )}
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
                        <span>⚡</span> Auto Title &amp; Slug Extraction
                      </div>
                      <p className="text-xs text-blue-900/80 leading-relaxed">
                        Detects <code className="font-mono">&lt;title&gt;</code> tags and converts filenames like <code className="font-mono">web-design.html</code> into clean, URL-friendly routes like <code className="font-mono">/web-design</code> with duplicate collision handling.
                      </p>
                    </div>

                    <div className="p-4 bg-purple-50/60 border border-purple-100 rounded-2xl">
                      <div className="flex items-center gap-2 text-purple-800 font-bold text-sm mb-1">
                        <span>🔍</span> SEO &amp; Sitemap Registration
                      </div>
                      <p className="text-xs text-purple-900/80 leading-relaxed">
                        Extracts meta descriptions, keywords, OpenGraph tags, and canonical tags into the centralized SEO manager, and updates <code className="font-mono">/sitemap.xml</code> with zero manual steps.
                      </p>
                    </div>

                    <div className="p-4 bg-amber-50/60 border border-amber-100 rounded-2xl">
                      <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-1">
                        <span>🎨</span> CSS &amp; Inline Script Retention
                      </div>
                      <p className="text-xs text-amber-900/80 leading-relaxed">
                        Preserves <code className="font-mono">&lt;style&gt;</code> blocks, custom classes, animations, and scripts so your uploaded HTML renders faithfully.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                /* Results screen */
                <div className="space-y-4">
                  <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-2xl shrink-0">
                      ✅
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-900 text-base">
                        Bulk Processing Complete!
                      </h4>
                      <p className="text-xs text-emerald-700 mt-0.5">
                        Processed {bulkResult.summary?.totalFiles || 0} file(s) &bull;{" "}
                        {bulkResult.summary?.createdCount || 0} created &bull;{" "}
                        {bulkResult.summary?.updatedCount || 0} updated &bull;{" "}
                        {bulkResult.summary?.imagesCount || 0} images mapped
                      </p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-100 max-h-80 overflow-y-auto">
                    {bulkResult.results?.map((res, i) => (
                      <div
                        key={i}
                        className={`p-3.5 flex items-center justify-between text-xs ${
                          res.status === "created"
                            ? "bg-white"
                            : res.status === "updated"
                              ? "bg-blue-50/30"
                              : "bg-red-50/30"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate max-w-[70%]">
                          <span>
                            {res.status === "created"
                              ? "🟢"
                              : res.status === "updated"
                                ? "🔵"
                                : "🔴"}
                          </span>
                          <span className="font-bold text-gray-800 truncate">
                            {res.title || res.fileName}
                          </span>
                          {res.slug && (
                            <span className="font-mono text-gray-400 text-[11px]">
                              /{res.slug}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {res.imagesCount !== undefined && (
                            <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-mono">
                              {res.imagesCount} imgs
                            </span>
                          )}
                          {res.status === "failed" ? (
                            <span className="text-red-600 font-medium">
                              {res.error || "Failed"}
                            </span>
                          ) : (
                            <a
                              href={`/${res.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-600 hover:underline font-bold"
                            >
                              Open Page ↗
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/50">
              <button
                type="button"
                onClick={() => setShowBulkModal(false)}
                className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-100 transition text-xs"
              >
                {bulkResult ? "Done" : "Cancel"}
              </button>
              {!bulkResult && (
                <button
                  type="button"
                  onClick={handleBulkSubmit}
                  disabled={bulkUploading || bulkFiles.length === 0}
                  className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition shadow-md shadow-emerald-100 flex items-center gap-2"
                >
                  {bulkUploading ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Extracting &amp; Syncing...</span>
                    </>
                  ) : (
                    <>
                      <span>🚀</span>
                      <span>
                        Upload &amp; Process {bulkFiles.length > 0 ? `(${bulkFiles.length})` : ""}
                      </span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Pages / CSS Table */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-600 font-bold text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="p-4 px-6">{view === "pages" ? "#" : "Type"}</th>
                <th className="p-4">{view === "pages" ? "Page Title" : "File Name"}</th>
                <th className="p-4">{view === "pages" ? "Slug / URL" : "Path"}</th>
                <th className="p-4">{view === "pages" ? "Styles & SEO" : "Status"}</th>
                <th className="p-4 text-right pr-6">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-gray-400">
                    Loading {view === "pages" ? "pages" : "CSS files"}...
                  </td>
                </tr>
              ) : view === "pages" ? (
                pages.length > 0 ? (
                  pages.map((p, index) => (
                    <tr
                      key={p.id}
                      className="hover:bg-indigo-50/20 transition-all group"
                    >
                      <td className="p-4 px-6 font-mono text-xs text-gray-400">
                        {(page - 1) * limit + index + 1}
                      </td>
                      <td className="p-4 font-bold text-gray-800">
                        <Link
                          href={`/admin/dashboard/custom-page/edit/${p.id}`}
                          className="hover:text-indigo-600 transition"
                        >
                          {p.title}
                        </Link>
                      </td>
                      <td className="p-4 text-xs font-mono text-gray-500">
                        <a
                          href={`/${p.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:underline"
                        >
                          /{p.slug}
                        </a>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${
                              p.cssFile
                                ? "bg-blue-50 text-blue-600 border border-blue-100"
                                : "bg-gray-100 text-gray-400"
                            }`}
                          >
                            {p.cssFile ? `🎨 ${p.cssFile}` : "Inline CSS"}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-purple-50 text-purple-600 border border-purple-100">
                            🔍 SEO Synced
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-right space-x-1.5 pr-6 whitespace-nowrap">
                        <a
                          href={`/${p.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-indigo-600 font-semibold text-xs bg-gray-100 hover:bg-gray-200 px-2.5 py-1 rounded-lg inline-block transition"
                        >
                          View ↗
                        </a>
                        <Link
                          href={`/admin/dashboard/custom-page/edit/${p.id}`}
                          className="text-indigo-600 hover:text-indigo-800 font-semibold text-xs bg-indigo-50 hover:bg-indigo-100 px-2.5 py-1 rounded-lg transition inline-block cursor-pointer"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={async () => {
                            if (
                              confirm(
                                `Delete page "/${p.slug}"?\n\nThis will automatically remove this page from /sitemap.xml and delete its SEO metadata.`
                              )
                            ) {
                              await deleteCustomPage(p.id);
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
                ) : (
                  <tr>
                    <td colSpan="5" className="p-12 text-center text-gray-400 font-medium">
                      <span className="text-3xl block mb-2">📄</span>
                      No custom pages found. Click "Bulk Upload" or "Create Page" to get started!
                    </td>
                  </tr>
                )
              ) : cssFiles.length > 0 ? (
                cssFiles.map((file) => (
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
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-12 text-center text-gray-400 font-medium">
                    <span className="text-3xl block mb-2">🎨</span>
                    No CSS files found. Click "Create CSS" to add one!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {view === "pages" && (
          <Pagination
            currentPage={page}
            totalPages={Math.ceil(total / limit)}
            totalItems={total}
            pageSize={limit}
            onPageChange={setPage}
          />
        )}
      </div>
    </div>
  );
}
