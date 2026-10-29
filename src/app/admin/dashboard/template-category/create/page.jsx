"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createTemplateCategory } from "../actions";

export default function CreateTemplateCategoryPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setSlug(generateSlug(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !slug) {
      setError("Category Name and Slug are required");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await createTemplateCategory(name, slug);
      router.push("/admin/dashboard/template-category");
      router.refresh();
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to create template category");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Create Template Category</h1>
              <p className="text-sm text-gray-500 mt-1">
                Add a category to organize demo templates and showcase designs
              </p>
            </div>
            <Link
              href="/admin/dashboard/template-category"
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
                  placeholder="e.g. Real Estate"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Slug (Auto-generated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. real-estate"
                  value={slug}
                  onChange={(e) => setSlug(generateSlug(e.target.value))}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-gray-50 font-mono text-sm"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <Link
                href="/admin/dashboard/template-category"
                className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 transition"
              >
                {loading ? "Creating..." : "Save Template Category"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
