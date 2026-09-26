import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar({ NAV, active, scrollTo }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const handleClickOutside = (event) => {
      if (!event.target.closest('[data-nav-panel]')) {
        setMobileOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const handleNavClick = (item) => {
    if (item.id === 'resume') {
      window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
      setMobileOpen(false);
      return;
    }

    scrollTo(item.id);
    setMobileOpen(false);
  };

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
          {NAV.map((s) => {
            const isResume = s.id === 'resume';
            return (
              <li key={s.id}>
                {isResume ? (
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    download="resume.pdf"
                    className="relative inline-flex px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.88)' }}
                  >
                    {s.label}
                  </a>
                ) : (
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
                )}
              </li>
            );
          })}
        </ul>

        <div className="md:hidden flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            download="resume.pdf"
            className="inline-flex items-center px-3 py-1.5 rounded-xl text-[10px] font-semibold border border-white/10 bg-white/5 text-white"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            data-nav-panel
            className="max-w-5xl mx-auto mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020]/95 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col p-2">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-gray-200 transition hover:bg-white/5"
                  style={{
                    color: active === item.id ? '#fff' : 'rgba(255,255,255,0.8)',
                    background: active === item.id ? 'rgba(124,58,237,0.14)' : 'transparent',
                  }}
                >
                  <span>{item.label}</span>
                  {item.id !== 'resume' && <span className="text-xs text-gray-500">→</span>}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
