import React, { useState, useEffect } from 'react';

export default function Estimates() {
  const [estimates, setEstimates] = useState([]);

  useEffect(() => {
    setEstimates([
      { id: 1, ref: 'EST-1001', client: 'John Doe', date: '2025-04-01', total: 4500, status: 'Draft' },
      { id: 2, ref: 'EST-1002', client: 'Jane Smith', date: '2025-04-02', total: 7800, status: 'Sent' }
    ]);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Estimates</h2>
        <button className="px-4 py-2 rounded bg-var(--accent) hover:bg-orange-600 text-var(--fg)">
          New Estimate
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-var(--surface)">
              <th className="p-2 text-left">Ref</th>
              <th className="p-2 text-left">Client</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-right">Total</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {estimates.map(e => (
              <tr key={e.id} className="border-b border-gray-600 hover:bg-var(--bg)">
                <td className="p-2">{e.ref}</td>
                <td className="p-2">{e.client}</td>
                <td className="p-2">{e.date}</td>
                <td className="p-2 text-right">${e.total}</td>
                <td className="p-2">{e.status}</td>
                <td className="p-2 text-center space-x-1">
                  <button className="px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 text-sm">View</button>
                  <button className="px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 text-sm">Edit</button>
                  <button className="px-2 py-1 rounded bg-var(--accent) hover:bg-orange-600 text-sm">Send</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
