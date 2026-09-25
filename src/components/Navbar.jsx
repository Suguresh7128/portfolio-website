import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ NAV, active, scrollTo }) {
  return (
    <nav className="fixed top-3 left-0 right-0 z-50 px-4">
      <div
        className="max-w-5xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl"
        style={{
          background: 'rgba(5,5,16,0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <button
          onClick={() => scrollTo('home')}
          className="text-sm font-black tracking-wider"
          style={{
            background: 'linear-gradient(135deg,#7C3AED,#EC4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          SAY↗
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {NAV.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className="relative px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors duration-200"
                style={{ color: active === s.id ? '#fff' : 'rgba(255,255,255,0.45)' }}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="navPill"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.6),rgba(236,72,153,0.4))' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{s.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="md:hidden text-xs text-gray-400 capitalize">{active}</div>
      </div>
    </nav>
  );
}
