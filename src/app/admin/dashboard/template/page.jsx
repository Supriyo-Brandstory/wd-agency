"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  createTemplate,
  updateTemplate,
  deleteTemplate,
  getTemplates,
} from "./actions";
import { getTemplateCategories } from "../template-category/actions";

const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });
import "suneditor/dist/css/suneditor.min.css";

export default function TemplatePage() {
  const [templates, setTemplates] = useState([]);
  const [categories, setCategories] = useState([]);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState(null);
  const [demoZip, setDemoZip] = useState(null);
  const [preview, setPreview] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const [tData, cData] = await Promise.all([
        getTemplates(),
        getTemplateCategories(),
      ]);
      setTemplates(tData);
      setCategories(cData);
    };
    fetchData();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  const handleCreate = async () => {
    if (!title || !slug || !price || !categoryId || !image)
      return alert("Title, Slug, Price, Category and Image are required!");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("features", features);
    formData.append("categoryId", categoryId);
    formData.append("image", image);
    if (demoZip) formData.append("demoZip", demoZip);

    await createTemplate(formData);
    const data = await getTemplates();
    setTemplates(data);
    resetForm();
  };

  const handleUpdate = async () => {
    if (!selectedId) return alert("No template selected!");

    const formData = new FormData();
    formData.append("id", selectedId);
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("features", features);
    formData.append("categoryId", categoryId);
    if (image) formData.append("image", image);
    if (demoZip) formData.append("demoZip", demoZip);

    await updateTemplate(formData);
    const data = await getTemplates();
    setTemplates(data);
    resetForm();
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this template?")) {
      await deleteTemplate(id);
      const data = await getTemplates();
      setTemplates(data);
    }
  };

  const resetForm = () => {
    setTitle("");
    setSlug("");
    setPrice("");
    setDescription("");
    setFeatures("");
    setCategoryId("");
    setImage(null);
    setPreview(null);
    setDemoZip(null);
    setSelectedId(null);
    setShowForm(false);
  };

  const handleEdit = (template) => {
    setSelectedId(template.id);
    setTitle(template.title);
    setSlug(template.slug);
    setPrice(template.price);
    setDescription(template.description);
    setFeatures(template.features || "");
    setCategoryId(template.categoryId);
    setPreview(template.image);
    setShowForm(true);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Templates</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all"
        >
          {showForm ? "Hide Form" : "Add New Template"}
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Title
              </label>
              <input
                type="text"
                placeholder="Template Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (!selectedId) setSlug(generateSlug(e.target.value));
                }}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Slug
              </label>
              <input
                type="text"
                placeholder="slug-url"
                value={slug}
                onChange={(e) => setSlug(generateSlug(e.target.value))}
                readOnly={!selectedId}
                className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${!selectedId ? "bg-gray-50" : ""}`}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Price (AED)
              </label>
              <input
                type="text"
                placeholder="e.g. 3,500"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Category
              </label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <label className="text-sm font-semibold text-gray-600">
              Features (One per line)
            </label>
            <textarea
              placeholder="List the key features..."
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="mt-6 space-y-2">
            <label className="text-sm font-semibold text-gray-600">
              Main Description
            </label>
            <SunEditor
              setContents={description}
              onChange={setDescription}
              setOptions={{
                buttonList: [
                  ["undo", "redo"],
                  ["font", "fontSize", "formatBlock"],
                  ["bold", "underline", "italic", "strike"],
                  ["fontColor", "hiliteColor"],
                  ["align", "list", "table"],
                  ["link", "image"],
                  ["fullScreen", "codeView"],
                ],
                minHeight: "250px",
              }}
            />
          </div>

          <div className="mt-6 border-2 border-dashed border-blue-100 rounded-xl p-6 bg-blue-50/30">
            <label className="block text-sm font-semibold text-blue-700 mb-2">
              OR Upload Demo ZIP (Contains index.html, css, js etc.)
            </label>
            <input
              type="file"
              accept=".zip"
              onChange={(e) => setDemoZip(e.target.files[0])}
              className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor:pointer"
            />
            <p className="mt-2 text-xs text-blue-500">
              Uploading a ZIP will overwrite the "Demo Content" text field
              above.
            </p>
          </div>

          <div className="mt-6 space-y-2">
            <label className="text-sm font-semibold text-gray-600">
              Template Preview Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-4 w-64 h-auto rounded-lg border shadow-sm"
              />
            )}
          </div>

          <div className="mt-8 flex gap-4">
            {selectedId ? (
              <>
                <button
                  onClick={handleUpdate}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-lg font-semibold transition-all"
                >
                  Update Template
                </button>
                <button
                  onClick={resetForm}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-8 py-2 rounded-lg font-semibold transition-all"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={handleCreate}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg font-semibold transition-all"
              >
                Create Template
              </button>
            )}
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50 text-gray-600 font-semibold text-sm uppercase tracking-wider">
              <th className="p-4">#</th>
              <th className="p-4">Image</th>
              <th className="p-4">Title</th>
              <th className="p-4">Price</th>
              <th className="p-4">Category</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {templates.length > 0 ? (
              templates.map((template, index) => (
                <tr
                  key={template.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4 text-gray-500">{index + 1}</td>
                  <td className="p-4">
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-16 h-12 object-cover rounded-md shadow-sm"
                    />
                  </td>
                  <td className="p-4 font-medium text-gray-800">
                    {template.title}
                  </td>
                  <td className="p-4 text-gray-600">{template.price} AED</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase">
                      {template.category?.name}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => handleEdit(template)}
                      className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(template.id)}
                      className="text-red-600 hover:text-red-700 font-semibold text-sm"
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
                  className="p-8 text-center text-gray-400 italic"
                >
                  No templates found. Start by adding one!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
