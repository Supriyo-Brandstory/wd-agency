"use client";

import { useState, useEffect } from "react";
import { getSitemap, updateSitemap } from "./actions";

export default function SitemapPage() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    loadSitemap();
  }, []);

  async function loadSitemap() {
    try {
      setLoading(true);
      setError("");
      const data = await getSitemap();
      if (data) {
        setContent(data.content);
      }
    } catch (err) {
      setError("Failed to load sitemap data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdate() {
    try {
      setLoading(true);
      setError("");
      setSuccess("");
      await updateSitemap(content);
      setSuccess("Sitemap updated successfully!");
    } catch (err) {
      setError("Failed to update sitemap");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Sitemap Management
          </h1>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-700">{success}</p>
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sitemap Content (XML)
            </label>
            <textarea
              placeholder="Paste your sitemap.xml content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="20"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleUpdate}
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition"
            >
              {loading ? "Saving..." : "Save Sitemap"}
            </button>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-md">
            <p className="text-sm text-blue-800">
              <strong>Tip:</strong> You can paste the full contents of a
              sitemap.xml file here. The sitemap will be served at{" "}
              <code>/sitemap.xml</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
