"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getSeoData, deleteSeoData } from "./actions";
import Pagination from "@/app/admin/components/Pagination";

export default function SeoPage() {
  const [seoData, setSeoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;

  useEffect(() => {
    loadSeoData(page);
  }, [page]);

  async function loadSeoData(targetPage = page) {
    try {
      setLoading(true);
      setError("");
      const result = await getSeoData(targetPage, limit);
      setSeoData(result.seoData || []);
      setTotal(result.total || 0);
    } catch (err) {
      setError("Failed to load SEO data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this SEO entry?")) return;

    try {
      setLoading(true);
      setError("");
      await deleteSeoData(id);
      if (seoData.length === 1 && page > 1) {
        setPage(page - 1);
      } else {
        await loadSeoData(page);
      }
    } catch (err) {
      setError("Failed to delete SEO data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                SEO Management
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Manage page URLs, meta titles, descriptions, and schema scripts
              </p>
            </div>

            <Link
              href="/admin/dashboard/seo/create"
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition flex items-center gap-2"
            >
              <span>+</span> Create SEO Entry
            </Link>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {/* Table Section */}
          <div>
            {loading && seoData.length === 0 ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-3"></div>
                <p className="text-gray-500 text-sm">Loading SEO data...</p>
              </div>
            ) : seoData.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <p className="text-gray-500 mb-3">No SEO entries found.</p>
                <Link
                  href="/admin/dashboard/seo/create"
                  className="text-indigo-600 hover:underline font-medium text-sm"
                >
                  Create your first SEO entry →
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto border border-gray-200 rounded-xl">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Page URL
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Script
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {seoData.map((seo) => (
                      <tr key={seo.id} className="hover:bg-gray-50/80 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-indigo-600 font-mono">
                          {seo.pageurl}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                          {seo.title}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 max-w-md truncate">
                          {seo.description || "—"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate font-mono text-xs">
                          {seo.script ? (
                            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded border">
                              Schema JSON
                            </span>
                          ) : (
                            "—"
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            <Link
                              href={`/admin/dashboard/seo/edit/${seo.id}`}
                              className="px-3 py-1 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 rounded-md transition text-xs font-semibold border border-yellow-200"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(seo.id)}
                              disabled={loading}
                              className="px-3 py-1 bg-red-50 hover:bg-red-100 text-red-600 rounded-md transition text-xs font-semibold border border-red-200 disabled:opacity-50"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination
                  currentPage={page}
                  totalPages={Math.ceil(total / limit)}
                  totalItems={total}
                  pageSize={limit}
                  onPageChange={setPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
