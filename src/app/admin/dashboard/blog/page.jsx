"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { createBlog, updateBlog, deleteBlog, getBlogs } from "./actions";
import { getBlogCategories } from "../blog-category/actions";
// ✅ Dynamically import JoditEditor (Next.js SSR-safe)
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isCodeView, setIsCodeView] = useState(false); // ✅ Code view toggle

  useEffect(() => {
    const fetchData = async () => {
      const [blogsData, categoriesData] = await Promise.all([
        getBlogs(),
        getBlogCategories(),
      ]);
      setBlogs(blogsData);
      setCategories(categoriesData);
    };
    fetchData();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // ✅ Slug generator helper
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  const handleCreate = async () => {
    if (!title || !slug || !content || !categoryId || !image)
      return alert("All fields including image are required!");

    const existing = blogs.map((b) => b.slug);
    let newSlug = slug;
    let counter = 1;
    while (existing.includes(newSlug)) {
      newSlug = `${slug}-${counter++}`;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", newSlug);
    formData.append("content", content);
    formData.append("categoryId", categoryId);
    formData.append("image", image);

    await createBlog(formData);
    const data = await getBlogs();
    setBlogs(data);
    resetForm();
  };

  const handleUpdate = async () => {
    if (!selectedId) return alert("No blog selected!");

    const existing = blogs
      .filter((b) => b.id !== selectedId)
      .map((b) => b.slug);
    let newSlug = slug;
    let counter = 1;
    while (existing.includes(newSlug)) {
      newSlug = `${slug}-${counter++}`;
    }

    const formData = new FormData();
    formData.append("id", selectedId);
    formData.append("title", title);
    formData.append("slug", newSlug);
    formData.append("content", content);
    formData.append("categoryId", categoryId);
    if (image) formData.append("image", image);

    await updateBlog(formData);
    const data = await getBlogs();
    setBlogs(data);
    resetForm();
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      await deleteBlog(id);
      const data = await getBlogs();
      setBlogs(data);
    }
  };

  const resetForm = () => {
    setTitle("");
    setSlug("");
    setContent("");
    setCategoryId("");
    setImage(null);
    setPreview(null);
    setSelectedId(null);
    setShowForm(false);
    setIsCodeView(false);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold text-gray-800">Manage Blogs</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          {showForm ? "Hide Form" : "Create Blog"}
        </button>
      </div>

      {/* Blog Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                const val = e.target.value;
                setTitle(val);
                if (!selectedId) {
                  setSlug(generateSlug(val));
                }
              }}
              className="border border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Slug"
              value={slug}
              onChange={(e) => setSlug(generateSlug(e.target.value))}
              readOnly={!selectedId}
              className={`border border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                !selectedId ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border border-gray-300 rounded px-4 py-2 w-full bg-gray-50"
            />
          </div>

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-4 w-40 h-40 object-cover rounded-lg border"
            />
          )}

          {/* ✅ WYSIWYG / Code View Toggle */}
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={() => setIsCodeView((prev) => !prev)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded text-sm"
            >
              {isCodeView ? "WYSIWYG Mode" : "Code View"}
            </button>
          </div>

          {/* Editor */}
          <div className="mt-2">
            {!isCodeView ? (
              <JoditEditor
                value={content}
                onChange={(newContent) => setContent(newContent)}
                className="mb-10"
              />
            ) : (
              <textarea
                className="w-full h-48 border rounded p-2 font-mono text-sm"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            )}
          </div>

          <div className="mt-4 flex gap-3">
            {selectedId ? (
              <>
                <button
                  onClick={handleUpdate}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition"
                >
                  Update
                </button>
                <button
                  onClick={resetForm}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded transition"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={handleCreate}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
              >
                Create
              </button>
            )}
          </div>
        </div>
      )}

      {/* Blog Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-3 border-b">#</th>
              <th className="p-3 border-b">Image</th>
              <th className="p-3 border-b">Title</th>
              <th className="p-3 border-b">Slug</th>
              <th className="p-3 border-b">Category</th>
              <th className="p-3 border-b text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <tr key={blog.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-14 h-14 rounded object-cover"
                      />
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="p-3 font-medium">{blog.title}</td>
                  <td className="p-3 text-gray-600">{blog.slug}</td>
                  <td className="p-3 text-gray-600">
                    {blog.category?.name || "—"}
                  </td>
                  <td className="p-3 text-right space-x-2">
                    <button
                      onClick={() => {
                        setSelectedId(blog.id);
                        setTitle(blog.title);
                        setSlug(blog.slug);
                        setContent(blog.content);
                        setCategoryId(blog.categoryId);
                        setPreview(blog.image);
                        setShowForm(true);
                      }}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition"
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
                  className="p-5 text-center text-gray-500 italic"
                >
                  No blogs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
