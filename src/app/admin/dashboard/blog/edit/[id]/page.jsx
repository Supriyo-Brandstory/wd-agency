"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { getBlogById, updateBlog } from "../../actions";
import { getBlogCategories } from "../../../blog-category/actions";

const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });
import "suneditor/dist/css/suneditor.min.css";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [checklistTitle, setChecklistTitle] = useState("");
  const [checklistItems, setChecklistItems] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isCodeView, setIsCodeView] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  useEffect(() => {
    async function init() {
      if (!id) return;
      try {
        setLoading(true);
        setError("");
        const [blogData, catsData] = await Promise.all([
          getBlogById(id),
          getBlogCategories(),
        ]);

        setCategories(Array.isArray(catsData) ? catsData : catsData.categories || []);

        if (blogData) {
          setTitle(blogData.title || "");
          setSlug(blogData.slug || "");
          setContent(blogData.content || "");
          setChecklistTitle(blogData.checklistTitle || "");
          setChecklistItems(blogData.checklistItems || "");
          setCategoryId(blogData.categoryId ? String(blogData.categoryId) : "");
          setPreview(blogData.image || null);
        } else {
          setError("Blog post not found");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load blog data");
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !slug || !content || !categoryId) {
      setError("Title, Slug, Category, and Content are required!");
      return;
    }

    try {
      setSaving(true);
      setError("");

      const formData = new FormData();
      formData.append("id", id);
      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("content", content);
      formData.append("checklistTitle", checklistTitle);
      formData.append("checklistItems", checklistItems);
      formData.append("categoryId", categoryId);
      if (image) formData.append("image", image);

      await updateBlog(formData);
      router.push("/admin/dashboard/blog");
      router.refresh();
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to update blog");
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Edit Blog Post</h1>
              <p className="text-sm text-gray-500 mt-1">
                Update article content and details
              </p>
            </div>
            <Link
              href="/admin/dashboard/blog"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
            >
              ← Back to Blogs
            </Link>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Blog Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Slug
                </label>
                <input
                  type="text"
                  placeholder="blog-slug"
                  value={slug}
                  onChange={(e) => setSlug(generateSlug(e.target.value))}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition font-mono text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-white"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Change Image (Optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-600 bg-gray-50 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
              </div>
            </div>

            {preview && (
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">
                  Current Image Preview
                </label>
                <img
                  src={preview}
                  alt="Preview"
                  className="w-48 h-32 object-cover rounded-lg border shadow-sm"
                />
              </div>
            )}

            {/* Checklist Section */}
            <div className="border border-gray-200 rounded-xl p-5 bg-gray-50/50 space-y-4">
              <h3 className="text-base font-semibold text-gray-800">
                Checklist Section (Optional)
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Checklist Title (e.g. Website design cost checklist - Dubai)"
                  value={checklistTitle}
                  onChange={(e) => setChecklistTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <textarea
                  placeholder="Checklist Items (One item per line)"
                  value={checklistItems}
                  onChange={(e) => setChecklistItems(e.target.value)}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-semibold text-gray-700">
                  Article Content <span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  onClick={() => setIsCodeView((prev) => !prev)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-xs font-medium transition"
                >
                  {isCodeView ? "WYSIWYG Mode" : "Code View (HTML)"}
                </button>
              </div>

              {!isCodeView ? (
                <SunEditor
                  setContents={content}
                  onChange={setContent}
                  setOptions={{
                    buttonList: [
                      ["undo", "redo"],
                      ["font", "fontSize", "formatBlock"],
                      [
                        "bold",
                        "underline",
                        "italic",
                        "strike",
                        "subscript",
                        "superscript",
                      ],
                      ["removeFormat"],
                      ["fontColor", "hiliteColor"],
                      ["outdent", "indent"],
                      ["align", "horizontalRule", "list", "table"],
                      ["link", "image", "video"],
                      ["fullScreen", "showBlocks", "codeView"],
                      ["preview", "print"],
                    ],
                    minHeight: "450px",
                    height: "auto",
                    width: "100%",
                  }}
                />
              ) : (
                <textarea
                  className="w-full h-80 border rounded-lg p-3 font-mono text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-100">
              <Link
                href="/admin/dashboard/blog"
                className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 transition"
              >
                {saving ? "Updating..." : "Update Blog Post"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
