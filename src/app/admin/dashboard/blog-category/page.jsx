"use client";

import { useState, useEffect } from "react";
import {
  createBlogCategory,
  updateBlogCategory,
  deleteBlogCategory,
  getBlogCategories,
} from "./actions";

export default function BlogCategoryPage() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await getBlogCategories();
    setCategories(data);
  };

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // remove special chars
      .replace(/\s+/g, "-"); // spaces -> hyphen
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (!selectedId) {
      setSlug(generateSlug(value));
    }
  };

  const handleCreate = async () => {
    if (!name || !slug || !description) return alert("All fields are required!");

    // Ensure slug uniqueness
    let finalSlug = slug;
    let count = 1;
    while (categories.some((c) => c.slug === finalSlug)) {
      finalSlug = `${slug}-${count}`;
      count++;
    }

    await createBlogCategory(name, finalSlug, description);
    await fetchCategories();
    setName("");
    setSlug("");
    setDescription("");
    setShowForm(false);
  };

  const handleUpdate = async () => {
    if (!selectedId) return;

    // Ensure slug uniqueness on edit
    let finalSlug = slug;
    let count = 1;
    while (categories.some((c) => c.slug === finalSlug && c.id !== selectedId)) {
      finalSlug = `${slug}-${count}`;
      count++;
    }

    await updateBlogCategory(selectedId, name, finalSlug, description);
    await fetchCategories();
    setName("");
    setSlug("");
    setDescription("");
    setSelectedId(null);
    setShowForm(false);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this category?")) {
      await deleteBlogCategory(id);
      await fetchCategories();
    }
  };

  const handleEditClick = (category) => {
    setSelectedId(category.id);
    setName(category.name);
    setSlug(category.slug);
    setDescription(category.description);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Blog Categories</h1>
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition"
            >
              Create Category
            </button>
          )}
        </div>

        {/* Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow p-5 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Category Name"
                value={name}
                onChange={handleNameChange}
                className="border border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Slug"
                value={slug}
                onChange={(e) => setSlug(generateSlug(e.target.value))}
                className={`border border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  !selectedId ? "bg-gray-100 cursor-not-allowed" : ""
                }`}
                readOnly={!selectedId} // readonly when creating
              />
            </div>

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-4 border border-gray-300 rounded px-4 py-2 w-full h-28 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>

            <div className="mt-4 flex gap-3">
              {selectedId ? (
                <>
                  <button
                    onClick={handleUpdate}
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      setSelectedId(null);
                      setName("");
                      setSlug("");
                      setDescription("");
                      setShowForm(false);
                    }}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded transition"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={handleCreate}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition"
                >
                  Create
                </button>
              )}
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-lg shadow">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 border-b">#</th>
                <th className="p-3 border-b">Name</th>
                <th className="p-3 border-b">Slug</th>
                <th className="p-3 border-b">Description</th>
                <th className="p-3 border-b text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.length > 0 ? (
                categories.map((category, index) => (
                  <tr key={category.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3 font-medium">{category.name}</td>
                    <td className="p-3 text-gray-600">{category.slug}</td>
                    <td className="p-3 text-gray-600 max-w-sm truncate">{category.description}</td>
                    <td className="p-3 text-right space-x-2">
                      <button
                        onClick={() => handleEditClick(category)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(category.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-5 text-center text-gray-500 italic">
                    No categories found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
