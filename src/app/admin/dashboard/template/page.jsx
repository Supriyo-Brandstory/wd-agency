"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  deleteTemplate,
  getAllTemplatesAdmin,
} from "./actions";
import Pagination from "@/app/admin/components/Pagination";

export default function TemplatePage() {
  const [templates, setTemplates] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const limit = 10;

  const fetchTemplates = async (targetPage = page) => {
    setLoading(true);
    try {
      const data = await getAllTemplatesAdmin(targetPage, limit);
      if (data && data.templates) {
        setTemplates(data.templates);
        setTotal(data.total);
      } else {
        setTemplates(Array.isArray(data) ? data : []);
        setTotal(Array.isArray(data) ? data.length : 0);
      }
    } catch (err) {
      console.error("Error fetching templates:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTemplates(page);
  }, [page]);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this template?")) {
      try {
        await deleteTemplate(id);
        if (templates.length === 1 && page > 1) {
          setPage(page - 1);
        } else {
          await fetchTemplates(page);
        }
      } catch (err) {
        console.error("Failed to delete template:", err);
        alert("Failed to delete template");
      }
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Manage Templates</h1>
          <p className="text-sm text-gray-500 mt-1">
            Create and manage website templates, preview links, and categories
          </p>
        </div>
        <Link
          href="/admin/dashboard/template/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all font-medium text-sm shadow-sm"
        >
          + Add New Template
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-600 font-semibold text-sm uppercase tracking-wider border-b border-gray-100">
                <th className="p-4">#</th>
                <th className="p-4">Image</th>
                <th className="p-4">Title</th>
                <th className="p-4">Price</th>
                <th className="p-4">Category</th>
                <th className="p-4">Visible</th>
                <th className="p-4">Show in All</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan="8" className="p-8 text-center text-gray-400">
                    Loading templates...
                  </td>
                </tr>
              ) : templates.length > 0 ? (
                templates.map((template, index) => (
                  <tr
                    key={template.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 text-gray-500">{(page - 1) * limit + index + 1}</td>
                    <td className="p-4">
                      {template.image ? (
                        <img
                          src={template.image}
                          alt={template.title}
                          className="w-16 h-12 object-cover rounded-md shadow-sm border border-gray-100"
                        />
                      ) : (
                        <div className="w-16 h-12 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 text-xs">
                          No Image
                        </div>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="font-medium text-gray-800">{template.title}</div>
                      <div className="text-xs text-gray-400 font-mono">{template.slug}</div>
                    </td>
                    <td className="p-4 text-gray-600 font-medium">{template.price} AED</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                        {template.category?.name || "Uncategorized"}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2.5 py-1 text-xs font-bold rounded-full uppercase ${
                          template.isVisible
                            ? "bg-green-50 text-green-600"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        {template.isVisible ? "✓ Yes" : "✗ No"}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2.5 py-1 text-xs font-bold rounded-full uppercase ${
                          template.showInAllTemplates
                            ? "bg-purple-50 text-purple-600"
                            : "bg-gray-50 text-gray-400"
                        }`}
                      >
                        {template.showInAllTemplates ? "✓ Yes" : "✗ No"}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end items-center gap-2">
                        {template.demoFolder && template.livePreviewUrl && (
                          <a
                            href={template.livePreviewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-semibold transition-all"
                          >
                            Preview ↗
                          </a>
                        )}
                        <Link
                          href={`/admin/dashboard/template/edit/${template.id}`}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1.5 rounded text-xs font-semibold transition-all"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(template.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded text-xs font-semibold transition-all"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="p-8 text-center text-gray-400 italic"
                  >
                    No templates found. Start by adding one!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(total / limit)}
          totalItems={total}
          pageSize={limit}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
