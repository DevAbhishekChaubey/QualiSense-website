'use client';

import { motion } from 'framer-motion';

export default function AnimatedTabs({
  tabs,
  activeTab,
  onTabChange,
}: {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (id: string) => void;
}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 24, position: 'relative' }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          style={{
            padding: '10px 14px',
            borderRadius: 999,
            border: activeTab === tab.id ? '1px solid transparent' : '1px solid var(--line)',
            background: activeTab === tab.id ? '#1a7a6e' : '#fff',
            color: activeTab === tab.id ? '#fff' : '#506976',
            cursor: 'pointer',
            fontWeight: activeTab === tab.id ? 800 : 400,
            position: 'relative',
            transition: 'background 0.3s ease, color 0.3s ease, border-color 0.3s ease',
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
