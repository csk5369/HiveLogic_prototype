import React, { useState } from 'react';

import Clients from './components/Clients';
import Estimates from './components/Estimates';
import Jobs from './components/Jobs';
import Materials from './components/Materials';
import Schedule from './components/Schedule';
import Portal from './components/Portal';
import Reports from './components/Reports';
import Payments from './components/Payments';
import Smart from './components/Smart';
import Gps from './components/Gps';

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
      {/* Header */}
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

      {/* Tabs */}
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

      {/* Content */}
      <main className="card">
        {tab === 'clients' && <Clients />}
        {tab === 'estimates' && <Estimates />}
        {tab === 'jobs' && <Jobs />}
        {tab === 'materials' && <Materials />}
        {tab === 'schedule' && <Schedule />}
        {tab === 'portal' && <Portal />}
        {tab === 'reports' && <Reports />}
        {tab === 'payments' && <Payments />}
        {tab === 'smart' && <Smart />}
        {tab === 'gps' && <Gps />}
      </main>
    </div>
  );
}
