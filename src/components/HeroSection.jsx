import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function HeroSection({ FLOAT_TAGS, SOCIAL_LINKS, typed, scrollTo }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col items-center justify-center text-center px-4 pt-24 overflow-hidden"
    >
      {FLOAT_TAGS.map((tag, i) => (
        <motion.div
          key={tag}
          className="absolute hidden lg:block text-[11px] font-mono text-purple-400/50 border border-purple-500/20 px-2.5 py-1 rounded-lg"
          style={{
            left: `${8 + (i % 3) * 30}%`,
            top: `${18 + Math.floor(i / 3) * 55}%`,
          }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.45 }
              : { y: [0, -14, 0], opacity: [0.3, 0.65, 0.3] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0.01 }
              : {
                  duration: 3.5 + i * 0.6,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'easeInOut',
                }
          }
        >
          {tag}
        </motion.div>
      ))}

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.8 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
        className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-semibold"
        style={{
          background: 'rgba(5,150,105,0.12)',
          border: '1px solid rgba(5,150,105,0.3)',
          color: '#34D399',
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full bg-emerald-400"
          style={{ boxShadow: '0 0 6px #34d399', animation: 'pulse 2s infinite' }}
        />
        Open to full-time Software Engineering opportunities
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0.01 : 0.8, delay: prefersReducedMotion ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mb-3"
      >
        <div
          className="inline-block text-left mb-4 px-4 py-3 rounded-xl text-[11px] font-mono"
          style={{
            background: 'rgba(124,58,237,0.08)',
            border: '1px solid rgba(124,58,237,0.2)',
          }}
        >
          <span className="text-purple-400">$ </span>
          <span className="text-gray-300">whoami</span>
        </div>
        <h1 className="text-[clamp(3rem,10vw,7rem)] font-black leading-[0.9] tracking-tight">
          <span
            style={{
              background: 'linear-gradient(135deg,#a78bfa,#ec4899,#67e8f9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            SUGURESH
          </span>
          <br />
          <span style={{ color: 'rgba(255,255,255,0.88)' }}>A Y</span>
        </h1>
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ delay: prefersReducedMotion ? 0 : 0.4 }}
        className="mb-6"
      >
        <p className="text-xl md:text-3xl font-semibold tracking-tight text-white/90">
          Full-Stack &amp; AI Software Engineer
        </p>
        <p className="mt-3 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I build modern web applications, backend systems, and AI-powered products using Python,
          React, Node.js, FastAPI, SQL, and cloud-ready engineering practices.
        </p>
        <div className="mt-4 text-sm text-gray-400">Bengaluru, Karnataka, India</div>
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReducedMotion ? 0 : 0.6 }}
        className="flex items-center justify-center gap-2 mb-10 min-h-8"
      >
        <Terminal className="w-4 h-4 text-purple-400 shrink-0" />
        <span className="text-base md:text-lg font-mono font-medium" style={{ color: '#a78bfa' }}>
          {typed}
        </span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="w-0.5 h-5 inline-block bg-purple-400"
        />
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ delay: prefersReducedMotion ? 0 : 0.9 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {SOCIAL_LINKS.map(({ I, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            <I className="w-4 h-4" style={{ color: '#a78bfa' }} />
            {label}
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReducedMotion ? 0 : 1.1 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollTo('projects')}
          className="px-6 py-3 rounded-xl font-semibold text-sm text-white"
          style={{
            background: 'linear-gradient(135deg,#7C3AED,#EC4899)',
            boxShadow: '0 8px 32px rgba(124,58,237,0.35)',
          }}
        >
          View Projects →
        </motion.button>
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center justify-center"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.8)',
          }}
        >
          View Resume
        </motion.a>
        <motion.a
          href="/resume.pdf"
          download="resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center justify-center"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.8)',
          }}
        >
          Download Resume
        </motion.a>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: '1px solid rgba(255,255,255,0.18)' }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.4)' }} />
        </div>
      </motion.div>
    </section>
  );
}
