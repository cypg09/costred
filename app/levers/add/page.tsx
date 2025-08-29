"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddLever() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    function: "",
    description: "",
    impact: "",
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

      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="function" className="block mb-2 font-medium">
            Function
          </label>
          <select
            id="function"
            name="function"
            value={formData.function}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select a function</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Operations">Operations</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={3}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Describe the cost-saving initiative..."
          />
        </div>

        <div className="mb-4">
          <label htmlFor="impact" className="block mb-2 font-medium">
            Impact (€)
          </label>
          <input
            type="number"
            id="impact"
            name="impact"
            value={formData.impact}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="3000000"
            min="0"
            step="1000"
          />
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
