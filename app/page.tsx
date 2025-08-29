"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface Lever {
  id: string;
  Nature: string;
  Workstream: string;
  Substream: string;
  Titre: string;
  Description: string;
  "FTE impact": boolean;
  Owner: string;
  Complexity: string;
  "Impacted BU": string;
  "Savings (Low, m€)": number;
  "Savings (High, m€)": number;
  "FTE Count Low": number;
  "FTE Count High": number;
}

interface LeverRowProps {
  lever: Lever;
}

function LeverRow({ lever }: LeverRowProps) {
  return (
    <tr className="transition-colors hover:bg-gray-50/50">
      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
        {lever.Nature}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">
        {lever.Workstream}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">
        {lever.Substream}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
        {lever.Titre}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">
        {lever.Description}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">
        {lever["FTE impact"] ? "Yes" : "No"}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">
        {lever.Owner}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">
        {lever.Complexity}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">
        {lever["Impacted BU"]}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
        {lever["Savings (Low, m€)"]}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
        {lever["Savings (High, m€)"]}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
        {lever["FTE Count Low"]}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
        {lever["FTE Count High"]}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm">
        <div className="flex space-x-2">
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            Edit
          </button>
          <button className="text-gray-500 hover:text-red-600 transition-colors">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function Home() {
  const [levers, setLevers] = useState<Lever[]>([]);
  const [columns, setColumns] = useState<string[]>([]);

  useEffect(() => {
    const fetchLevers = async () => {
      const response = await fetch('/api/levers');
      if (response.ok) {
        const data = await response.json();
        setLevers(data);
      } else {
        console.error('Failed to fetch levers');
      }
    };
    fetchLevers();
    
    const sampleColumns: string[] = [
      "Nature",
      "Workstream",
      "Substream",
      "Titre",
      "Description",
      "FTE impact",
      "Owner",
      "Complexity",
      "Impacted BU",
      "Savings (Low, m€)",
      "Savings (High, m€)",
      "FTE Count Low",
      "FTE Count High",
      "Actions",
    ];
    setColumns(sampleColumns);
  }, []);

  // Calculate totals for numeric columns
  const totals = {
    "Savings (Low, m€)": levers.reduce((sum, lever) => sum + lever["Savings (Low, m€)"], 0),
    "Savings (High, m€)": levers.reduce((sum, lever) => sum + lever["Savings (High, m€)"], 0),
    "FTE Count Low": levers.reduce((sum, lever) => sum + lever["FTE Count Low"], 0),
    "FTE Count High": levers.reduce((sum, lever) => sum + lever["FTE Count High"], 0),
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-center mb-4">Cost Reduction Reconciliation Tool</h1>
        <Link 
          href="/levers/add" 
          className="bg-blue-500 text-white px-4 py-2 align-center rounded hover:bg-blue-600"
        >
          Add New Lever
        </Link>
      </header>
      
      <main>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                {/* Totals Row */}
                <thead>
                  <tr className="bg-gray-100 text-gray-900 font-bold">
                    <td className="px-4 py-3">Totals</td>
                    {/* Add empty cells for columns 2-9 (8 cells) */}
                    {Array.from({ length: 8 }).map((_, index) => (
                      <td key={index} className="px-4 py-3"></td>
                    ))}
                    <td className="px-4 py-3 font-medium">{totals["Savings (Low, m€)"].toFixed(1)}</td>
                    <td className="px-4 py-3 font-medium">{totals["Savings (High, m€)"].toFixed(1)}</td>
                    <td className="px-4 py-3 font-medium">{totals["FTE Count Low"]}</td>
                    <td className="px-4 py-3 font-medium">{totals["FTE Count High"]}</td>
                    <td className="px-4 py-3"></td>
                  </tr>
                </thead>
                {/* Header Row */}
                <thead>
                  <tr className="text-white text-left bg-blue-950">
                    {columns.map((column, index) => (
                      <th key={index} className="px-4 py-3">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y bg-white divide-gray-200">
                  {levers.map((lever) => (
                    <LeverRow key={lever.id} lever={lever} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {levers.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No cost-saving levers added yet. <Link href="/levers/add" className="text-blue-500 hover:underline">Add the first one</Link>.
          </div>
        )}
      </main>
    </div>
  );
}
