"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { getBlogCategoryById, updateBlogCategory } from "../../actions";

export default function EditBlogCategoryPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  useEffect(() => {
    async function fetchCategory() {
      if (!id) return;
      try {
        setLoading(true);
        setError("");
        const data = await getBlogCategoryById(id);
        if (data) {
          setName(data.name || "");
          setSlug(data.slug || "");
          setDescription(data.description || "");
        } else {
          setError("Blog category not found");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load blog category");
      } finally {
        setLoading(false);
      }
    }
    fetchCategory();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !slug || !description) {
      setError("All fields are required");
      return;
    }

    try {
      setSaving(true);
      setError("");
      await updateBlogCategory(id, name, slug, description);
      router.push("/admin/dashboard/blog-category");
      router.refresh();
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to update category");
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Edit Blog Category</h1>
              <p className="text-sm text-gray-500 mt-1">
                Update category details and slug
              </p>
            </div>
            <Link
              href="/admin/dashboard/blog-category"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
            >
              ← Back to Categories
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
                  Category Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Web Development"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  placeholder="e.g. web-development"
                  value={slug}
                  onChange={(e) => setSlug(generateSlug(e.target.value))}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition font-mono text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Write a brief overview of this blog category..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="5"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                required
              ></textarea>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <Link
                href="/admin/dashboard/blog-category"
                className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 transition"
              >
                {saving ? "Updating..." : "Update Category"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
