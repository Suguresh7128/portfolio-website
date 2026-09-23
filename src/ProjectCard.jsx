import React from 'react';
import { motion } from 'framer-motion';
import GradientBorder from './GradientBorder';
import GlassCard from './GlassCard';
import { Github } from 'lucide-react';

export default function ProjectCard({ p, index, fadeUp }) {
  return (
    <motion.div {...(fadeUp ? fadeUp(index * 0.09) : {})} whileHover={{ y: -6, scale: 1.015 }} className="h-full">
      <GradientBorder g1={p.g1} g2={p.g2} className="h-full">
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-3xl mb-2">{p.emoji}</div>
              <h3
                className="text-lg font-bold"
                style={{
                  background: `linear-gradient(135deg,${p.g1},${p.g2})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {p.title}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">{p.sub}</p>
            </div>
            <motion.a
              href="https://github.com/Suguresh7128"
              target="_blank"
              rel="noreferrer"
              whileHover={{ rotate: 12, scale: 1.2 }}
              className="text-gray-600 hover:text-gray-300 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>
          <div className="flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full"
                style={{
                  background: `linear-gradient(135deg,${p.g1}22,${p.g2}22)`,
                  border: `1px solid ${p.g1}44`,
                  color: 'rgba(255,255,255,0.65)',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </GradientBorder>
    </motion.div>
  );
}
