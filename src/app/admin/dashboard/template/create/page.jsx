"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { createTemplate } from "../actions";
import { getTemplateCategories } from "../../template-category/actions";

const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });
import "suneditor/dist/css/suneditor.min.css";

export default function CreateTemplatePage() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [showInAllTemplates, setShowInAllTemplates] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [demoZip, setDemoZip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCategories() {
      try {
        const cats = await getTemplateCategories();
        setCategories(Array.isArray(cats) ? cats : cats.categories || []);
      } catch (err) {
        console.error("Failed to load categories:", err);
      }
    }
    loadCategories();
  }, []);

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  const handleTitleChange = (e) => {
    const val = e.target.value;
    setTitle(val);
    setSlug(generateSlug(val));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !slug || !price || !categoryId || !image) {
      setError("Title, Slug, Price, Category and Preview Image are required!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("features", features);
      formData.append("categoryId", categoryId);
      formData.append("isVisible", isVisible);
      formData.append("showInAllTemplates", showInAllTemplates);
      formData.append("image", image);
      if (demoZip) formData.append("demoZip", demoZip);

      await createTemplate(formData);
      router.push("/admin/dashboard/template");
    } catch (err) {
      console.error("Error creating template:", err);
      setError(err.message || "Failed to create template. The file might be too large or there was a server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <Link href="/admin/dashboard/template" className="hover:text-blue-600">
              Templates
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Create</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Add New Template</h1>
        </div>
        <Link
          href="/admin/dashboard/template"
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

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Modern Agency Portfolio"
              value={title}
              onChange={handleTitleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Slug <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="modern-agency-portfolio"
              value={slug}
              onChange={(e) => setSlug(generateSlug(e.target.value))}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Price (AED) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. 3,500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isVisible}
              onChange={(e) => setIsVisible(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm font-semibold text-gray-700">
              Visible on Website
            </span>
          </label>
          <p className="text-xs text-gray-500 ml-6">
            Uncheck to hide this template from the public website
          </p>

          <label className="flex items-center gap-2 cursor-pointer pt-2">
            <input
              type="checkbox"
              checked={showInAllTemplates}
              onChange={(e) => setShowInAllTemplates(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm font-semibold text-gray-700">
              Show in "All Templates" Section
            </span>
          </label>
          <p className="text-xs text-gray-500 ml-6">
            Check to display this template in the homepage "All Templates" section
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Features (One per line)
          </label>
          <textarea
            placeholder="Responsive Design&#10;Dark Mode Included&#10;Fast Load Speed"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none font-mono text-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Main Description
          </label>
          <SunEditor
            setContents={description}
            onChange={setDescription}
            setOptions={{
              buttonList: [
                ["undo", "redo"],
                ["font", "fontSize", "formatBlock"],
                ["bold", "underline", "italic", "strike"],
                ["fontColor", "hiliteColor"],
                ["align", "list", "table"],
                ["link", "image"],
                ["fullScreen", "codeView"],
              ],
              minHeight: "250px",
            }}
          />
        </div>

        <div className="border-2 border-dashed border-blue-200 rounded-xl p-6 bg-blue-50/30">
          <label className="block text-sm font-semibold text-blue-800 mb-1">
            Upload Demo ZIP (Contains index.html, css, js etc.)
          </label>
          <p className="text-xs text-blue-600 mb-3">
            Uploading a ZIP creates an interactive live preview folder for this template.
          </p>
          <input
            type="file"
            accept=".zip"
            onChange={(e) => setDemoZip(e.target.files[0])}
            className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Template Preview Image <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 text-sm"
          />
          {preview && (
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2">Image Preview:</p>
              <img
                src={preview}
                alt="Preview"
                className="w-64 h-auto rounded-lg border shadow-sm object-cover"
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-100">
          <Link
            href="/admin/dashboard/template"
            className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-all"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg font-medium text-sm transition-all shadow-sm"
          >
            {loading ? "Creating Template..." : "Create Template"}
          </button>
        </div>
      </form>
    </div>
  );
}
