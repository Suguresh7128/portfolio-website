import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-6 text-center text-[11px]"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        color: 'rgba(255,255,255,0.2)',
      }}
    >
      © {year} Suguresh A Y · Crafted with React &amp; Framer Motion
    </footer>
  );
}
