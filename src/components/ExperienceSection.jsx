import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import GlassCard from './GlassCard';
import SectionLabel from './SectionLabel';

export default function ExperienceSection({ INTERNSHIPS, fadeUp }) {
  return (
    <section id="experience" className="py-28 px-4 max-w-5xl mx-auto">
      <SectionLabel gradient="linear-gradient(90deg,#0891B2,#7C3AED)">Experience</SectionLabel>
      <div className="relative pl-6 md:pl-10">
        <div
          className="absolute left-1.5 md:left-3.5 top-0 bottom-0 w-px"
          style={{
            background: 'linear-gradient(to bottom, #7C3AED, #06B6D4, #10B981)',
            opacity: 0.3,
          }}
        />
        <div className="space-y-8">
          {INTERNSHIPS.map((job, i) => (
            <motion.div key={job.company} {...fadeUp(i * 0.12)} className="relative">
              <div
                className="absolute -left-[22px] md:-left-[30px] top-6 w-4 h-4 rounded-full"
                style={{
                  background: `linear-gradient(135deg,${job.g1},${job.g2})`,
                  boxShadow: `0 0 12px ${job.g1}80`,
                  border: '2px solid #07071a',
                }}
              />

              <GlassCard className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-white">{job.role}</h3>
                    <span
                      className="text-sm font-semibold"
                      style={{
                        background: `linear-gradient(90deg,${job.g1},${job.g2})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {job.company}
                    </span>
                  </div>
                  <span
                    className="text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.45)',
                    }}
                  >
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {job.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-gray-400 text-sm">
                      <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: job.g2 }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
