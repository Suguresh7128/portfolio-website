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
              Building at the intersection of{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg,#a78bfa,#ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                software & intelligence
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Innovative Software Engineer with hands-on experience in Full Stack Development (MERN),
              Cloud Technologies, and AI-driven solutions. Skilled in React, Node.js, SQL, and API
              integration — with a strong Python and data analytics foundation.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm mt-3">
              Oracle Certified Generative AI Professional, aiming to join dynamic engineering teams and
              build scalable, intelligent, high-performance applications that bridge software and data.
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
