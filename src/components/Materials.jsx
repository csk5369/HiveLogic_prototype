import React, { useState, useEffect } from 'react';

export default function Materials() {
  const [materials, setMaterials] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    setMaterials([
      { id: 1, item: '2×4 Lumber', sku: 'LBR-24', price: 5.25, inStock: true },
      { id: 2, item: 'Drywall Sheet', sku: 'DW-4×8', price: 12.75, inStock: false },
    ]);
  }, []);

  const handleUpload = () => {
    console.log('Uploading CSV:', file);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="file"
          accept=".csv"
          onChange={e => setFile(e.target.files[0])}
          className="p-2 rounded bg-var(--bg) text-var(--fg)"
        />
        <button
          onClick={handleUpload}
          className="px-4 py-2 rounded bg-var(--accent) hover:bg-orange-600 text-var(--fg)"
        >
          Upload & Sync
        </button>
      </div>

      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-var(--surface)">
            <th className="p-2 text-left">Item</th>
            <th className="p-2 text-left">SKU</th>
            <th className="p-2 text-right">Price</th>
            <th className="p-2 text-center">In Stock</th>
          </tr>
        </thead>
        <tbody>
          {materials.map(m => (
            <tr key={m.id} className="border-b border-gray-600 hover:bg-var(--bg)">
              <td className="p-2">{m.item}</td>
              <td className="p-2">{m.sku}</td>
              <td className="p-2 text-right">${m.price.toFixed(2)}</td>
              <td className="p-2 text-center">{m.inStock ? '✔️' : '❌'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
