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
          <h2 className="text-2xl font-semibold mb-2">Total Impact: {formatCurrency(totalImpact)}</h2>
        </div>
        
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Function</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Impact (€)</th>
            </tr>
          </thead>
          <tbody>
            {levers.map((lever) => (
              <tr key={lever.id}>
                <td className="border border-gray-300 px-4 py-2">{lever.function}</td>
                <td className="border border-gray-300 px-4 py-2">{lever.description}</td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  {formatCurrency(lever.impact)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {levers.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No cost-saving levers added yet. <Link href="/levers/add" className="text-blue-500 hover:underline">Add the first one</Link>.
          </div>
        )}
      </main>
    </div>
  );
}
