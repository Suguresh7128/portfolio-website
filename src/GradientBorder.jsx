import React from 'react';

export default function GradientBorder({ g1, g2, children, className = '' }) {
  return (
    <div
      className={`rounded-2xl p-px ${className}`}
      style={{ background: `linear-gradient(135deg, ${g1}, ${g2})` }}
    >
      <div className="rounded-2xl h-full" style={{ background: '#07071a' }}>
        {children}
      </div>
    </div>
  );
}
