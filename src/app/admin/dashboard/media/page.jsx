"use client";

import { useState, useEffect, useCallback } from "react";
import { getMedia, createFolder, deleteMedia, uploadFiles } from "./actions";

export default function MediaPage() {
    const [path, setPath] = useState("");
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newFolderName, setNewFolderName] = useState("");
    const [showFolderForm, setShowFolderForm] = useState(false);
    const [uploading, setUploading] = useState(false);

    const fetchMedia = useCallback(async (currentPath) => {
        setLoading(true);
        try {
            const data = await getMedia(currentPath);
            setItems(data);
        } catch (error) {
            console.error("Failed to fetch media:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchMedia(path);
    }, [path, fetchMedia]);

    const handleNavigate = (subPath) => {
        setPath(subPath);
    };

    const handleCreateFolder = async (e) => {
        e.preventDefault();
        if (!newFolderName.trim()) return;

        try {
            await createFolder(path, newFolderName);
            setNewFolderName("");
            setShowFolderForm(false);
            fetchMedia(path);
        } catch (error) {
            alert("Error creating folder");
        }
    };

    const handleDelete = async (itemPath) => {
        if (!confirm("Are you sure you want to delete this?")) return;

        try {
            await deleteMedia(itemPath);
            fetchMedia(path);
        } catch (error) {
            alert("Error deleting item");
        }
    };

    const handleUpload = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        setUploading(true);
        const formData = new FormData();
        formData.append("path", path);
        files.forEach((file) => formData.append("files", file));

        try {
            await uploadFiles(formData);
            fetchMedia(path);
            e.target.value = ""; // clear input
        } catch (error) {
            alert("Upload failed");
        } finally {
            setUploading(false);
        }
    };

    const copyLink = (url) => {
        const fullUrl = window.location.origin + url;
        navigator.clipboard.writeText(fullUrl);
        alert("Link copied to clipboard: " + fullUrl);
    };

    const renderBreadcrumbs = () => {
        const parts = path.split("/").filter(Boolean);
        return (
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6 bg-white p-3 rounded shadow-sm border border-gray-100">
                <button
                    onClick={() => handleNavigate("")}
                    className="hover:text-blue-600 font-medium"
                >
                    uploads
                </button>
                {parts.map((part, index) => {
                    const currentParts = parts.slice(0, index + 1);
                    const subPath = currentParts.join("/");
                    return (
                        <div key={index} className="flex items-center space-x-2">
                            <span className="text-gray-400">/</span>
                            <button
                                onClick={() => handleNavigate(subPath)}
                                className="hover:text-blue-600 font-medium"
                            >
                                {part}
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    };

    const isImage = (name) => {
        const ext = name.split(".").pop().toLowerCase();
        return ["jpg", "jpeg", "png", "gif", "svg", "webp"].includes(ext);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Media Manager</h1>
                    <div className="flex space-x-3">
                        <button
                            onClick={() => setShowFolderForm(!showFolderForm)}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-all flex items-center shadow-md"
                        >
                            <span className="mr-2">📁</span> New Folder
                        </button>
                        <label className={`cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all flex items-center shadow-md ${uploading ? 'opacity-50 pointer-events-none' : ''}`}>
                            <span className="mr-2">📤</span> {uploading ? "Uploading..." : "Upload Files"}
                            <input
                                type="file"
                                multiple
                                onChange={handleUpload}
                                className="hidden"
                                disabled={uploading}
                            />
                        </label>
                    </div>
                </div>

                {showFolderForm && (
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 mb-8 max-w-md animate-slideDown">
                        <form onSubmit={handleCreateFolder} className="flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Folder Name</label>
                                <input
                                    type="text"
                                    value={newFolderName}
                                    onChange={(e) => setNewFolderName(e.target.value)}
                                    placeholder="Enter folder name..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                                    autoFocus
                                />
                            </div>
                            <div className="flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={() => setShowFolderForm(false)}
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-all shadow-sm"
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {renderBreadcrumbs()}

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {items.length === 0 ? (
                            <div className="col-span-full py-20 text-center bg-white rounded-2xl border-2 border-dashed border-gray-200">
                                <div className="text-gray-400 text-5xl mb-4">📭</div>
                                <p className="text-gray-500 font-medium">This folder is empty</p>
                            </div>
                        ) : (
                            items.sort((a, b) => (b.isDirectory === a.isDirectory ? 0 : b.isDirectory ? 1 : -1)).map((item) => (
                                <div key={item.path} className="bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-200 overflow-hidden group transition-all duration-300 transform hover:-translate-y-1 relative">
                                    <div className="aspect-square flex items-center justify-center bg-gray-50 group-hover:bg-indigo-50 transition-colors">
                                        {item.isDirectory ? (
                                            <button 
                                                onClick={() => handleNavigate(item.path)}
                                                className="w-full h-full flex flex-col items-center justify-center p-4"
                                            >
                                                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">📁</span>
                                            </button>
                                        ) : (
                                            <div className="w-full h-full relative overflow-hidden flex items-center justify-center p-2">
                                                {isImage(item.name) ? (
                                                    <img 
                                                        src={item.url} 
                                                        alt={item.name} 
                                                        className="w-full h-full object-cover rounded shadow-inner cursor-zoom-in"
                                                        onClick={() => window.open(item.url, '_blank')}
                                                    />
                                                ) : (
                                                    <span className="text-5xl">📄</span>
                                                )}
                                                
                                                <div className="absolute inset-x-0 bottom-0 p-2 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center gap-2">
                                                    <button 
                                                        onClick={() => copyLink(item.url)}
                                                        className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-lg backdrop-blur-md transition-all text-xs border border-white/20"
                                                        title="Copy Link"
                                                    >
                                                        🔗 Link
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-3 border-t border-gray-100">
                                        <p className="text-sm font-semibold text-gray-800 truncate" title={item.name}>
                                            {item.name}
                                        </p>
                                        <div className="flex justify-between items-center mt-2">
                                            <p className="text-xs text-gray-400">
                                                {item.isDirectory ? 'Folder' : `${(item.size / 1024).toFixed(1)} KB`}
                                            </p>
                                            <button 
                                                onClick={() => handleDelete(item.path)}
                                                className="text-gray-400 hover:text-red-600 transition-colors focus:ring-2 focus:ring-red-100 rounded-full h-7 w-7 flex items-center justify-center"
                                                title="Delete"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
            
            <style jsx>{`
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-slideDown {
                    animation: slideDown 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}
