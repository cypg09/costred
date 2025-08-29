"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddLever() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    Nature: "",
    Workstream: "",
    Substream: "",
    Titre: "",
    Description: "",
    "FTE impact": "false",
    Owner: "",
    Complexity: "",
    "Impacted BU": "",
    "Savings (Low, m€)": "",
    "Savings (High, m€)": "",
    "FTE impact (Low, m€)": "",
    "FTE impact (High, m€)": "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save this to a database or state management
    console.log("New lever:", formData);
    // For now, just redirect back to the main page
    router.push("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Link>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Cost Saving Lever</h1>
            <p className="text-gray-600">Fill in the details below to add a new cost-saving initiative to your portfolio</p>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-100">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="Nature" className="block text-sm font-medium text-gray-700 mb-2">
                  Nature *
                </label>
                <select
                  id="Nature"
                  name="Nature"
                  value={formData.Nature}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="" disabled>Select Nature</option>
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                  <option value="Operations">Operations</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>

              <div>
                <label htmlFor="Workstream" className="block text-sm font-medium text-gray-700 mb-2">
                  Workstream *
                </label>
                <input
                  type="text"
                  id="Workstream"
                  name="Workstream"
                  value={formData.Workstream}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter workstream"
                />
              </div>

              <div>
                <label htmlFor="Substream" className="block text-sm font-medium text-gray-700 mb-2">
                  Substream *
                </label>
                <input
                  type="text"
                  id="Substream"
                  name="Substream"
                  value={formData.Substream}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter substream"
                />
              </div>

              <div>
                <label htmlFor="Titre" className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  id="Titre"
                  name="Titre"
                  value={formData.Titre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter title"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="Description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  id="Description"
                  name="Description"
                  value={formData.Description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Describe the cost-saving initiative"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-100">Impact & Ownership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="FTE impact" className="block text-sm font-medium text-gray-700 mb-2">
                  FTE Impact *
                </label>
                <select
                  id="FTE impact"
                  name="FTE impact"
                  value={formData["FTE impact"]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>

              <div>
                <label htmlFor="Owner" className="block text-sm font-medium text-gray-700 mb-2">
                  Owner *
                </label>
                <input
                  type="text"
                  id="Owner"
                  name="Owner"
                  value={formData.Owner}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter owner"
                />
              </div>

              <div>
                <label htmlFor="Complexity" className="block text-sm font-medium text-gray-700 mb-2">
                  Complexity *
                </label>
                <select
                  id="Complexity"
                  name="Complexity"
                  value={formData.Complexity}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="" disabled>Select Complexity</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div>
                <label htmlFor="Impacted BU" className="block text-sm font-medium text-gray-700 mb-2">
                  Impacted BU *
                </label>
                <input
                  type="text"
                  id="Impacted BU"
                  name="Impacted BU"
                  value={formData["Impacted BU"]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter impacted business unit"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-100">Financial Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="Savings (Low, m€)" className="block text-sm font-medium text-gray-700 mb-2">
                  Savings (Low, m€) *
                </label>
                <input
                  type="number"
                  id="Savings (Low, m€)"
                  name="Savings (Low, m€)"
                  value={formData["Savings (Low, m€)"]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="2.5"
                  step="0.1"
                  min="0"
                />
              </div>

              <div>
                <label htmlFor="Savings (High, m€)" className="block text-sm font-medium text-gray-700 mb-2">
                  Savings (High, m€) *
                </label>
                <input
                  type="number"
                  id="Savings (High, m€)"
                  name="Savings (High, m€)"
                  value={formData["Savings (High, m€)"]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="3.0"
                  step="0.1"
                  min="0"
                />
              </div>

              <div>
                <label htmlFor="FTE impact (Low, m€)" className="block text-sm font-medium text-gray-700 mb-2">
                  FTE Impact (Low, m€) *
                </label>
                <input
                  type="number"
                  id="FTE impact (Low, m€)"
                  name="FTE impact (Low, m€)"
                  value={formData["FTE impact (Low, m€)"]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="0.1"
                  step="0.1"
                  min="0"
                />
              </div>

              <div>
                <label htmlFor="FTE impact (High, m€)" className="block text-sm font-medium text-gray-700 mb-2">
                  FTE Impact (High, m€) *
                </label>
                <input
                  type="number"
                  id="FTE impact (High, m€)"
                  name="FTE impact (High, m€)"
                  value={formData["FTE impact (High, m€)"]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="0.2"
                  step="0.1"
                  min="0"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Link
              href="/"
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
            >
              Add Lever
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
