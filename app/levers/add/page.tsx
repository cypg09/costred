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
    <div className="min-h-screen p-8">
      <header className="mb-8">
        <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
          &larr; Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold">Add New Cost Saving Lever</h1>
      </header>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="Nature" className="block mb-2 font-medium">
              Nature
            </label>
            <select
              id="Nature"
              name="Nature"
              value={formData.Nature}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Nature</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Operations">Operations</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="Workstream" className="block mb-2 font-medium">
              Workstream
            </label>
            <input
              type="text"
              id="Workstream"
              name="Workstream"
              value={formData.Workstream}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Workstream"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Substream" className="block mb-2 font-medium">
              Substream
            </label>
            <input
              type="text"
              id="Substream"
              name="Substream"
              value={formData.Substream}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Substream"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Titre" className="block mb-2 font-medium">
              Titre
            </label>
            <input
              type="text"
              id="Titre"
              name="Titre"
              value={formData.Titre}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Titre"
            />
          </div>

          <div className="mb-4 md:col-span-2">
            <label htmlFor="Description" className="block mb-2 font-medium">
              Description
            </label>
            <textarea
              id="Description"
              name="Description"
              value={formData.Description}
              onChange={handleChange}
              required
              rows={3}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Describe the cost-saving initiative..."
            />
          </div>

          <div className="mb-4">
            <label htmlFor="FTE impact" className="block mb-2 font-medium">
              FTE Impact
            </label>
            <select
              id="FTE impact"
              name="FTE impact"
              value={formData["FTE impact"]}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="Owner" className="block mb-2 font-medium">
              Owner
            </label>
            <input
              type="text"
              id="Owner"
              name="Owner"
              value={formData.Owner}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Owner"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Complexity" className="block mb-2 font-medium">
              Complexity
            </label>
            <select
              id="Complexity"
              name="Complexity"
              value={formData.Complexity}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Complexity</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="Impacted BU" className="block mb-2 font-medium">
              Impacted BU
            </label>
            <input
              type="text"
              id="Impacted BU"
              name="Impacted BU"
              value={formData["Impacted BU"]}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Impacted Business Unit"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Savings (Low, m€)" className="block mb-2 font-medium">
              Savings (Low, m€)
            </label>
            <input
              type="number"
              id="Savings (Low, m€)"
              name="Savings (Low, m€)"
              value={formData["Savings (Low, m€)"]}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="2.5"
              step="0.1"
              min="0"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Savings (High, m€)" className="block mb-2 font-medium">
              Savings (High, m€)
            </label>
            <input
              type="number"
              id="Savings (High, m€)"
              name="Savings (High, m€)"
              value={formData["Savings (High, m€)"]}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="3.0"
              step="0.1"
              min="0"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="FTE impact (Low, m€)" className="block mb-2 font-medium">
              FTE Impact (Low, m€)
            </label>
            <input
              type="number"
              id="FTE impact (Low, m€)"
              name="FTE impact (Low, m€)"
              value={formData["FTE impact (Low, m€)"]}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="0.1"
              step="0.1"
              min="0"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="FTE impact (High, m€)" className="block mb-2 font-medium">
              FTE Impact (High, m€)
            </label>
            <input
              type="number"
              id="FTE impact (High, m€)"
              name="FTE impact (High, m€)"
              value={formData["FTE impact (High, m€)"]}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="0.2"
              step="0.1"
              min="0"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Lever
        </button>
      </form>
    </div>
  );
}
