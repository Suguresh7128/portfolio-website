import React from 'react';

export default function GlassCard({ children, className = '', style = {} }) {
  return (
    <div
      className={`bg-white/[0.04] border border-white/[0.08] rounded-2xl ${className}`}
      style={{ backdropFilter: 'blur(16px)', ...style }}
    >
      {children}
    </div>
  );
}
