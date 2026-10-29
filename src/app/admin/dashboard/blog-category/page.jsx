"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { deleteBlogCategory, getBlogCategories } from "./actions";
import Pagination from "@/app/admin/components/Pagination";

export default function BlogCategoryPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;

  const fetchCategories = async (targetPage = page) => {
    try {
      setLoading(true);
      const result = await getBlogCategories(targetPage, limit);
      if (result && result.categories) {
        setCategories(result.categories);
        setTotal(result.total);
      } else {
        setCategories(Array.isArray(result) ? result : []);
        setTotal(Array.isArray(result) ? result.length : 0);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories(page);
  }, [page]);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this category?")) {
      await deleteBlogCategory(id);
      if (categories.length === 1 && page > 1) {
        setPage(page - 1);
      } else {
        await fetchCategories(page);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Blog Categories</h1>
              <p className="text-sm text-gray-500 mt-1">
                Manage categories used to organize articles and guides
              </p>
            </div>
            <Link
              href="/admin/dashboard/blog-category/create"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium shadow-sm transition flex items-center gap-2"
            >
              <span>+</span> Create Category
            </Link>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-gray-200 rounded-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-600 text-xs font-semibold uppercase tracking-wider">
                  <th className="p-4 border-b">#</th>
                  <th className="p-4 border-b">Name</th>
                  <th className="p-4 border-b">Slug</th>
                  <th className="p-4 border-b">Description</th>
                  <th className="p-4 border-b text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading && categories.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-gray-500">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-2"></div>
                      Loading categories...
                    </td>
                  </tr>
                ) : categories.length > 0 ? (
                  categories.map((category, index) => (
                    <tr key={category.id} className="hover:bg-gray-50/80 transition">
                      <td className="p-4 text-gray-500 text-sm">{(page - 1) * limit + index + 1}</td>
                      <td className="p-4 font-semibold text-gray-800 text-sm">{category.name}</td>
                      <td className="p-4 text-indigo-600 font-mono text-xs">{category.slug}</td>
                      <td className="p-4 text-gray-600 max-w-sm truncate text-sm">{category.description}</td>
                      <td className="p-4 text-right space-x-2">
                        <Link
                          href={`/admin/dashboard/blog-category/edit/${category.id}`}
                          className="bg-yellow-50 hover:bg-yellow-100 text-yellow-700 border border-yellow-200 px-3 py-1 rounded-md text-xs font-semibold transition inline-block"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(category.id)}
                          className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-3 py-1 rounded-md text-xs font-semibold transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="p-12 text-center text-gray-500 italic">
                      No categories found. Start by creating one!
                    </td>
                  </tr>
                )}
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
        </div>
      </div>
    </div>
  );
}
