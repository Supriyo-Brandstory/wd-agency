"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { deleteBlog, getBlogs } from "./actions";
import Pagination from "@/app/admin/components/Pagination";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;

  const fetchBlogs = async (targetPage = page) => {
    try {
      setLoading(true);
      const data = await getBlogs(targetPage, limit);
      if (data && data.blogs) {
        setBlogs(data.blogs);
        setTotal(data.total);
      } else {
        setBlogs(Array.isArray(data) ? data : []);
        setTotal(Array.isArray(data) ? data.length : 0);
      }
    } catch (err) {
      console.error("Failed to load blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(page);
  }, [page]);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      await deleteBlog(id);
      if (blogs.length === 1 && page > 1) {
        setPage(page - 1);
      } else {
        await fetchBlogs(page);
      }
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Manage Blogs</h1>
          <p className="text-sm text-gray-500 mt-1">
            Create, edit, and organize articles published on your site
          </p>
        </div>
        <Link
          href="/admin/dashboard/blog/create"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium shadow-sm transition flex items-center gap-2"
        >
          <span>+</span> Create Blog
        </Link>
      </div>

      {/* Blog Table */}
      <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-xs font-semibold uppercase tracking-wider">
              <th className="p-4 border-b">#</th>
              <th className="p-4 border-b">Image</th>
              <th className="p-4 border-b">Title</th>
              <th className="p-4 border-b">Slug</th>
              <th className="p-4 border-b">Category</th>
              <th className="p-4 border-b text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading && blogs.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-8 text-center text-gray-500">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-2"></div>
                  Loading blogs...
                </td>
              </tr>
            ) : blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <tr key={blog.id} className="hover:bg-gray-50/80 transition">
                  <td className="p-4 text-gray-500 text-sm">{(page - 1) * limit + index + 1}</td>
                  <td className="p-4">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-14 h-14 rounded-lg object-cover border"
                      />
                    ) : (
                      <span className="text-gray-400 text-xs">No image</span>
                    )}
                  </td>
                  <td className="p-4 font-semibold text-gray-900 text-sm max-w-xs">{blog.title}</td>
                  <td className="p-4 text-indigo-600 font-mono text-xs">{blog.slug}</td>
                  <td className="p-4 text-gray-600 text-sm">
                    <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-medium border border-blue-100">
                      {blog.category?.name || "Uncategorized"}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2 whitespace-nowrap">
                    <Link
                      href={`/blog/${blog.slug}`}
                      target="_blank"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-xs font-semibold transition inline-block"
                    >
                      View
                    </Link>
                    <Link
                      href={`/admin/dashboard/blog/edit/${blog.id}`}
                      className="bg-yellow-50 hover:bg-yellow-100 text-yellow-700 border border-yellow-200 px-3 py-1 rounded-md text-xs font-semibold transition inline-block"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-3 py-1 rounded-md text-xs font-semibold transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="p-12 text-center text-gray-500 italic"
                >
                  No blogs found. Start by writing your first article!
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
  );
}
