import React from 'react';
import { motion } from 'framer-motion';
import GradientBorder from './GradientBorder';
import SectionLabel from './SectionLabel';

export default function EducationSection({ EDUCATION, fadeUp }) {
  return (
    <section id="education" className="py-28 px-4 max-w-5xl mx-auto">
      <SectionLabel gradient="linear-gradient(90deg,#059669,#06B6D4)">Education</SectionLabel>
      <div className="space-y-5">
        {EDUCATION.map((e, i) => (
          <motion.div key={e.degree} {...fadeUp(i * 0.1)} whileHover={{ scale: 1.01 }}>
            <GradientBorder g1={e.g1} g2={e.g2}>
              <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3
                    className="text-sm font-bold"
                    style={{
                      background: `linear-gradient(90deg,${e.g1},${e.g2})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {e.degree}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">{e.institution}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-white text-sm font-bold">{e.score}</div>
                  <div className="text-gray-500 text-[11px] mt-0.5">{e.period}</div>
                </div>
              </div>
            </GradientBorder>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
