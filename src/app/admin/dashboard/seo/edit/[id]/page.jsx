"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { getSeoById, updateSeoData } from "../../actions";

export default function EditSeoPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const [pageurl, setPageurl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchSeo() {
      if (!id) return;
      try {
        setLoading(true);
        setError("");
        const data = await getSeoById(id);
        if (data) {
          setPageurl(data.pageurl || "");
          setTitle(data.title || "");
          setDescription(data.description || "");
          setScript(data.script || "");
        } else {
          setError("SEO entry not found");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load SEO entry");
      } finally {
        setLoading(false);
      }
    }
    fetchSeo();
  }, [id]);

  async function handleUpdate(e) {
    e.preventDefault();
    if (!pageurl || !title) {
      setError("Page URL and Title are required");
      return;
    }

    try {
      setSaving(true);
      setError("");
      await updateSeoData(id, { pageurl, title, description, script });
      router.push("/admin/dashboard/seo");
      router.refresh();
    } catch (err) {
      setError("Failed to update SEO data");
      console.error(err);
      setSaving(false);
    }
  }

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
              <h1 className="text-2xl font-bold text-gray-900">Edit SEO Entry</h1>
              <p className="text-sm text-gray-500 mt-1">
                Update meta tags and schema configuration for {pageurl}
              </p>
            </div>
            <Link
              href="/admin/dashboard/seo"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
            >
              ← Back to List
            </Link>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Page URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., /about, /contact"
                  value={pageurl}
                  onChange={(e) => setPageurl(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Page title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                placeholder="Meta description for search engines..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Script (JSON-LD or Schema tags)
              </label>
              <textarea
                placeholder='e.g., {"@context": "https://schema.org", ...}'
                value={script}
                onChange={(e) => setScript(e.target.value)}
                rows="6"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-mono text-sm transition"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <Link
                href="/admin/dashboard/seo"
                className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 transition"
              >
                {saving ? "Updating..." : "Update SEO Entry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
