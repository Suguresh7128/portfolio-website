import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import SectionLabel from './SectionLabel';

export default function AboutSection({ ABOUT_STATS, fadeUp }) {
  return (
    <section id="about" className="py-28 px-4 max-w-5xl mx-auto">
      <SectionLabel gradient="linear-gradient(90deg,#7C3AED,#06B6D4)">About Me</SectionLabel>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div {...fadeUp(0.05)}>
          <GlassCard className="p-7 h-full">
            <h2 className="text-2xl font-bold text-white mb-4">
              Building{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg,#a78bfa,#ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                impactful products
              </span>{' '}
              with software and AI
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              I’m a B.E. graduate in Information Science and Engineering with hands-on experience building
              full-stack web applications, AI-powered solutions, and backend systems. I work with Python,
              React.js, Node.js, FastAPI, SQL, REST APIs, and modern cloud and DevOps tooling.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm mt-3">
              Through internships and projects, I have worked with authentication, real-time communication,
              databases, Docker, CI/CD, and cloud deployment workflows. I’m currently looking for an
              entry-level software engineering opportunity where I can contribute to real-world products and
              continue growing as an engineer.
            </p>
          </GlassCard>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {ABOUT_STATS.map(({ label, val, I, g }, i) => (
            <motion.div key={label} {...fadeUp(0.1 + i * 0.08)} whileHover={{ scale: 1.04, y: -3 }}>
              <GlassCard className="p-5 flex flex-col items-center justify-center text-center min-h-[110px]">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: g }}
                >
                  <I className="w-4 h-4 text-white" />
                </div>
                <div
                  className="text-3xl font-black mb-1"
                  style={{ background: g, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {val}
                </div>
                <div className="text-gray-500 text-xs">{label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
