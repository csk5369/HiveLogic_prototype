import React, { useState, useEffect } from 'react';

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setClients([
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-1234', jobs: 3, spend: 14200 },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '555-5678', jobs: 5, spend: 27800 }
    ]);
  }, []);

  const filtered = clients.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        className="p-2 mb-4 w-full rounded bg-var(--surface) text-var(--fg)"
        placeholder="Search clients..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(c => (
          <div key={c.id} className="card">
            <h3 className="font-semibold text-lg">{c.name}</h3>
            <p className="text-sm text-gray-300">{c.email}</p>
            <p className="text-sm text-gray-300">{c.phone}</p>
            <p className="mt-2">Jobs: {c.jobs} | Spend: ${c.spend}</p>
            <button className="mt-3 px-3 py-1 rounded bg-gray-700 hover:bg-gray-600">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
}
