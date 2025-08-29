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
  "FTE impact (Low, m€)": number;
  "FTE impact (High, m€)": number;
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
        {lever["FTE impact (Low, m€)"]}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
        {lever["FTE impact (High, m€)"]}
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

  // For now, we'll use mock data. In a real app, this would come from a database or API
  useEffect(() => {
    // This is just sample data
    const sampleData: Lever[] = [
      {
        id: "1",
        Nature: "IT",
        Workstream: "Cloud Optimization",
        Substream: "Infrastructure",
        Titre: "Reduce cloud costs",
        Description: "Optimize cloud resource allocation and reduce unused instances",
        "FTE impact": false,
        Owner: "IT Department",
        Complexity: "Medium",
        "Impacted BU": "All",
        "Savings (Low, m€)": 2.5,
        "Savings (High, m€)": 3.0,
        "FTE impact (Low, m€)": 0,
        "FTE impact (High, m€)": 0,
      },
      {
        id: "2",
        Nature: "HR",
        Workstream: "Process Optimization",
        Substream: "Recruitment",
        Titre: "Optimize recruitment process",
        Description: "Streamline hiring process and reduce agency fees",
        "FTE impact": true,
        Owner: "HR Department",
        Complexity: "Low",
        "Impacted BU": "HR",
        "Savings (Low, m€)": 0.4,
        "Savings (High, m€)": 0.5,
        "FTE impact (Low, m€)": 0.1,
        "FTE impact (High, m€)": 0.2,
      },
    ];
    setLevers(sampleData);
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
      "FTE impact (Low, m€)",
      "FTE impact (High, m€)",
      "Actions",
    ]
    setColumns(sampleColumns)
  }, []);

  // Calculate totals for numeric columns
  const totals = {
    "Savings (Low, m€)": levers.reduce((sum, lever) => sum + lever["Savings (Low, m€)"], 0),
    "Savings (High, m€)": levers.reduce((sum, lever) => sum + lever["Savings (High, m€)"], 0),
    "FTE impact (Low, m€)": levers.reduce((sum, lever) => sum + lever["FTE impact (Low, m€)"], 0),
    "FTE impact (High, m€)": levers.reduce((sum, lever) => sum + lever["FTE impact (High, m€)"], 0),
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
                    <td className="px-4 py-3 font-medium">{totals["FTE impact (Low, m€)"].toFixed(1)}</td>
                    <td className="px-4 py-3 font-medium">{totals["FTE impact (High, m€)"].toFixed(1)}</td>
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
