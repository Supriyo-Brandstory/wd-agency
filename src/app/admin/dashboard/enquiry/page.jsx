"use client";

import { useState, useEffect } from "react";
import { getEnquiries, deleteEnquiry } from "./action";

export default function EnquiryPage() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;

  useEffect(() => {
    async function loadEnquiries() {
      setLoading(true);
      const { enquiries, total } = await getEnquiries(page, limit);
      setEnquiries(enquiries);
      setTotal(total);
      setLoading(false);
    }
    loadEnquiries();
  }, [page]);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this enquiry?")) {
      await deleteEnquiry(id);
      setEnquiries(enquiries.filter((enq) => enq.id !== id));
    }
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Enquiries</h1>

      {loading ? (
        <p className="text-gray-600">Loading enquiries...</p>
      ) : enquiries.length > 0 ? (
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  "Full Name",
                  "Email Address",
                  "Phone Number",
                  "Submit By",
                  "Actions",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {enquiries.map((enquiry) => (
                <tr
                  key={enquiry.id}
                  className="hover:bg-gray-50 transition duration-150"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {enquiry.fullName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {enquiry.emailAddress}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {enquiry.phoneNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <span
                        className="max-w-[150px] truncate block"
                        title={enquiry.submitted_page_url}
                      >
                        {enquiry.submitted_page_url}
                      </span>
                      {enquiry.submitted_page_url && (
                        <a
                          href={enquiry.submitted_page_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedEnquiry(enquiry)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDelete(enquiry.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center p-4">
            <p className="text-sm text-gray-600">
              Page {page} of {totalPages}
            </p>
            <div className="flex gap-2">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
              >
                Prev
              </button>
              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">No enquiries found.</p>
      )}

      {/* View Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <h2 className="text-2xl font-semibold mb-4">Full Quote Details</h2>
            <p className="text-gray-700">
              <strong>Full Name:</strong> {selectedEnquiry.fullName}
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> {selectedEnquiry.emailAddress}
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> {selectedEnquiry.phoneNumber}
            </p>
            <p className="text-gray-700">
              <strong>Submit By:</strong>{" "}
              {selectedEnquiry.submitted_page_url || "N/A"}
            </p>
            <hr className="my-4" />
            <p className="text-gray-700 whitespace-pre-line">
              <strong>Service Interested In:</strong>{" "}
              {selectedEnquiry.serviceInterestedIn}
            </p>
            <p className="text-gray-700 whitespace-pre-line">
              <strong>Project Budget:</strong> {selectedEnquiry.projectBudget}
            </p>
            <p className="text-gray-700 whitespace-pre-line">
              <strong>Project Details:</strong> {selectedEnquiry.projectDetails}
            </p>
            <button
              onClick={() => setSelectedEnquiry(null)}
              className="absolute top-3 right-3 bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 py-1 rounded"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
