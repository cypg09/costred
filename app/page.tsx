"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface Lever {
  id: string;
  function: string;
  description: string;
  impact: number;
}

export default function Home() {
  const [levers, setLevers] = useState<Lever[]>([]);

  // For now, we'll use mock data. In a real app, this would come from a database or API
  useEffect(() => {
    // This is just sample data
    const sampleData: Lever[] = [
      {
        id: "1",
        function: "IT",
        description: "Reduce cloud costs",
        impact: 3000000,
      },
      {
        id: "2",
        function: "HR",
        description: "Optimize recruitment process",
        impact: 500000,
      },
    ];
    setLevers(sampleData);
  }, []);

  // Calculate total impact
  const totalImpact = levers.reduce((sum, lever) => sum + lever.impact, 0);

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Cost Reduction Reconciliation Tool</h1>
        <Link 
          href="/levers/add" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Lever
        </Link>
      </header>
      
      <main>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Total Impact: {formatCurrency(totalImpact)}</h2>
        </div>
        
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                      Function
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                      Description
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                      Impact
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {levers.map((lever) => (
                    <tr key={lever.id} className="transition-colors hover:bg-gray-50/50">
                      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
                        {lever.function}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">
                        {lever.description}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
                        {formatCurrency(lever.impact)}
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
