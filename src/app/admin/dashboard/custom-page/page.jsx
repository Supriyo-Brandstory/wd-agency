"use client";

import { useState, useEffect } from "react";
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

export default function CustomPageAdmin() {
  // Page States
  const [pages, setPages] = useState([]);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [cssFile, setCssFile] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [showPageForm, setShowPageForm] = useState(false);

  // CSS Management States
  const [cssFiles, setCssFiles] = useState([]);
  const [currentCssName, setCurrentCssName] = useState("");
  const [cssContent, setCssContent] = useState("");
  const [showCssForm, setShowCssForm] = useState(false);
  const [view, setView] = useState("pages"); // "pages" or "css"

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [pData, cData] = await Promise.all([getCustomPages(), getCssFiles()]);
    setPages(pData);
    setCssFiles(cData);
  };

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  // Page Handlers
  const handlePageCreate = async () => {
    if (!title || !slug || !content)
      return alert("Title, Slug and Content are required!");

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
    if (!selectedId) return alert("No page selected!");

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

  const handlePageDelete = async (id) => {
    if (confirm("Are you sure you want to delete this page?")) {
      await deleteCustomPage(id);
      fetchData();
    }
  };

  const resetPageForm = () => {
    setTitle("");
    setSlug("");
    setContent("");
    setCssFile("");
    setSelectedId(null);
    setShowPageForm(false);
  };

  // CSS Handlers
  const handleCssEdit = async (name) => {
    const content = await getCssContent(name);
    setCurrentCssName(name);
    setCssContent(content);
    setShowCssForm(true);
  };

  const handleCssSave = async () => {
    if (!currentCssName || !currentCssName.endsWith(".css")) {
      return alert("Please enter a valid filename ending in .css");
    }
    await saveCssFile(currentCssName, cssContent);
    alert("CSS file saved!");
    fetchData();
    setShowCssForm(false);
    setCurrentCssName("");
    setCssContent("");
  };

  const handleCssDelete = async (name) => {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      await deleteCssFile(name);
      fetchData();
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-semibold text-gray-800">
          {view === "pages" ? "Manage Custom Pages" : "Manage CSS Files"}
        </h1>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setView(view === "pages" ? "css" : "pages");
              setShowPageForm(false);
              setShowCssForm(false);
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition"
          >
            {view === "pages" ? "Manage CSS Files" : "Manage Pages"}
          </button>
          {view === "pages" ? (
            <button
              onClick={() => setShowPageForm(!showPageForm)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
            >
              {showPageForm ? "Hide Form" : "Create Page"}
            </button>
          ) : (
            <button
              onClick={() => {
                setShowCssForm(!showCssForm);
                setCurrentCssName("");
                setCssContent("");
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
            >
              {showCssForm ? "Hide Form" : "Create CSS File"}
            </button>
          )}
        </div>
      </div>

      {/* CSS FORM */}
      {view === "css" && showCssForm && (
        <div className="bg-white rounded-lg shadow p-6 mb-10 border-t-4 border-green-500">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CSS Filename
            </label>
            <input
              type="text"
              placeholder="e.g. style.css"
              value={currentCssName}
              onChange={(e) => setCurrentCssName(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CSS Content
            </label>
            <textarea
              className="w-full h-96 border border-gray-300 rounded p-4 font-mono text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="/* Enter your CSS here... */"
              value={cssContent}
              onChange={(e) => setCssContent(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleCssSave}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition"
            >
              Save CSS File
            </button>
            <button
              onClick={() => {
                setShowCssForm(false);
                setCurrentCssName("");
                setCssContent("");
              }}
              className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* PAGE FORM */}
      {view === "pages" && showPageForm && (
        <div className="bg-white rounded-lg shadow p-6 mb-10 border-t-4 border-blue-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                placeholder="Page Title"
                value={title}
                onChange={(e) => {
                  const val = e.target.value;
                  setTitle(val);
                  if (!selectedId) {
                    setSlug(generateSlug(val));
                  }
                }}
                className="border border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Slug (URL)
              </label>
              <input
                type="text"
                placeholder="page-url"
                value={slug}
                onChange={(e) => setSlug(generateSlug(e.target.value))}
                className="border border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Choose CSS File
              </label>
              <select
                value={cssFile}
                onChange={(e) => setCssFile(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">No Custom CSS</option>
                {cssFiles.map((file) => (
                  <option key={file} value={file}>
                    {file}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              HTML Body Code Only
            </label>
            <textarea
              className="w-full h-64 border border-gray-300 rounded p-4 font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="<div>Enter your HTML here...</div>"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className="flex gap-3">
            {selectedId ? (
              <>
                <button
                  onClick={handlePageUpdate}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition"
                >
                  Update
                </button>
                <button
                  onClick={resetPageForm}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded transition"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={handlePageCreate}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
              >
                Create
              </button>
            )}
          </div>
        </div>
      )}

      {/* LIST VIEW */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        {view === "pages" ? (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 border-b">#</th>
                <th className="p-3 border-b">Title</th>
                <th className="p-3 border-b">Slug</th>
                <th className="p-3 border-b">CSS File</th>
                <th className="p-3 border-b text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pages.length > 0 ? (
                pages.map((page, index) => (
                  <tr key={page.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3 font-medium">{page.title}</td>
                    <td className="p-3 text-blue-600">
                      <a
                        href={`/${page.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        /{page.slug}
                      </a>
                    </td>
                    <td className="p-3 text-gray-600">{page.cssFile || "—"}</td>
                    <td className="p-3 text-right space-x-2">
                      <button
                        onClick={() => {
                          setSelectedId(page.id);
                          setTitle(page.title);
                          setSlug(page.slug);
                          setContent(page.content);
                          setCssFile(page.cssFile || "");
                          setShowPageForm(true);
                        }}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handlePageDelete(page.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="p-5 text-center text-gray-500 italic"
                  >
                    No custom pages found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 border-b">#</th>
                <th className="p-3 border-b">Filename</th>
                <th className="p-3 border-b">Path</th>
                <th className="p-3 border-b text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cssFiles.length > 0 ? (
                cssFiles.map((file, index) => (
                  <tr key={file} className="border-b hover:bg-gray-50">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3 font-medium">{file}</td>
                    <td className="p-3 text-gray-500">public/css/{file}</td>
                    <td className="p-3 text-right space-x-2">
                      <button
                        onClick={() => handleCssEdit(file)}
                        className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded text-sm transition"
                      >
                        Edit CSS
                      </button>
                      <button
                        onClick={() => handleCssDelete(file)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="p-5 text-center text-gray-500 italic"
                  >
                    No CSS files found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
