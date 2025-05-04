import React, { useState } from 'react';

const TABS = [
  { id: 'clients', label: 'Clients' },
  { id: 'estimates', label: 'Estimates' },
  { id: 'jobs', label: 'Jobs' },
  { id: 'materials', label: 'Materials' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'portal', label: 'Portal' },
  { id: 'reports', label: 'Reports' },
  { id: 'payments', label: 'Payments' },
  { id: 'smart', label: 'Smart Scheduler' },
  { id: 'gps', label: 'GPS Tracking' }
];

export default function Dashboard() {
  const [tab, setTab] = useState('clients');

  return (
    <div style={{ padding: '2rem' }}>
      <header style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: 'var(--accent)',
          borderRadius: '8px',
          marginRight: '0.75rem'
        }} />
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700 }}>HiveLogic</h1>
      </header>

      <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
        {TABS.map(t => (
          <button
            key={t.id}
            className={`tab${tab === t.id ? ' active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <main className="card">
        {tab === 'clients' && <p>Clients UI loading…</p>}
        {tab === 'estimates' && <p>Estimates UI loading…</p>}
        {tab === 'jobs' && <p>Jobs UI loading…</p>}
        {tab === 'materials' && <p>Materials UI loading…</p>}
        {tab === 'schedule' && <p>Schedule UI loading…</p>}
        {tab === 'portal' && <p>Client Portal UI loading…</p>}
        {tab === 'reports' && <p>Reports UI loading…</p>}
        {tab === 'payments' && <p>Payments UI loading…</p>}
        {tab === 'smart' && <p>Smart Scheduler UI loading…</p>}
        {tab === 'gps' && <p>GPS Tracking UI loading…</p>}
      </main>
    </div>
  );
}
