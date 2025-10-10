"use client";

import { useState, useEffect } from 'react';
import { getSeoData, createSeoData, updateSeoData, deleteSeoData } from './actions';

export default function SeoPage() {
  const [seoData, setSeoData] = useState([]);
  const [pageurl, setPageurl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [script, setScript] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadSeoData();
  }, []);

  async function loadSeoData() {
    try {
      setLoading(true);
      setError('');
      const data = await getSeoData();
      setSeoData(data);
    } catch (err) {
      setError('Failed to load SEO data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleCreate() {
    if (!pageurl || !title) {
      setError('Page URL and Title are required');
      return;
    }

    try {
      setLoading(true);
      setError('');
      await createSeoData({ pageurl, title, description, script });
      await loadSeoData();
      resetForm();
    } catch (err) {
      setError('Failed to create SEO data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdate(id) {
    if (!pageurl || !title) {
      setError('Page URL and Title are required');
      return;
    }

    try {
      setLoading(true);
      setError('');
      await updateSeoData(id, { pageurl, title, description, script });
      await loadSeoData();
      resetForm();
      setEditingId(null);
    } catch (err) {
      setError('Failed to update SEO data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm('Are you sure you want to delete this SEO entry?')) {
      return;
    }

    try {
      setLoading(true);
      setError('');
      await deleteSeoData(id);
      await loadSeoData();
    } catch (err) {
      setError('Failed to delete SEO data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function resetForm() {
    setPageurl('');
    setTitle('');
    setDescription('');
    setScript('');
    setError('');
  }

  function startEdit(seo) {
    setEditingId(seo.id);
    setPageurl(seo.pageurl);
    setTitle(seo.title);
    setDescription(seo.description);
    setScript(seo.script);
  }

  function cancelEdit() {
    setEditingId(null);
    resetForm();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">SEO Management</h1>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {/* Form Section */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {editingId ? 'Edit SEO Entry' : 'Create New SEO Entry'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Page URL *
                </label>
                <input
                  type="text"
                  placeholder="e.g., /about, /contact"
                  value={pageurl}
                  onChange={(e) => setPageurl(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  placeholder="Page title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                placeholder="Meta description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Script (JSON or JavaScript)
              </label>
              <textarea
                placeholder='e.g., {"@context": "https://schema.org", ...}'
                value={script}
                onChange={(e) => setScript(e.target.value)}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
              />
            </div>

            <div className="flex gap-3">
              {editingId ? (
                <>
                  <button 
                    onClick={() => handleUpdate(editingId)}
                    disabled={loading}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
                  >
                    {loading ? 'Updating...' : 'Update'}
                  </button>
                  <button 
                    onClick={cancelEdit}
                    disabled={loading}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button 
                  onClick={handleCreate}
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  {loading ? 'Creating...' : 'Create SEO Entry'}
                </button>
              )}
            </div>
          </div>

          {/* Table Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">SEO Entries</h2>
            
            {loading && seoData.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Loading SEO data...</p>
              </div>
            ) : seoData.length === 0 ? (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <p className="text-gray-500">No SEO entries found. Create your first one above.</p>
              </div>
            ) : (
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Page URL
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Script
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {seoData.map((seo) => (
                      <tr key={seo.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {seo.pageurl}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                          {seo.title}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 max-w-md truncate">
                          {seo.description}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 max-w-md truncate font-mono">
                          {seo.script}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex gap-2">
                            <button
                              onClick={() => startEdit(seo)}
                              disabled={loading}
                              className="text-indigo-600 hover:text-indigo-900 disabled:opacity-50"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(seo.id)}
                              disabled={loading}
                              className="text-red-600 hover:text-red-900 disabled:opacity-50"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}