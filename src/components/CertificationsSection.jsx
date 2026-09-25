import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import GlassCard from './GlassCard';
import SectionLabel from './SectionLabel';

export default function CertificationsSection({ CERTS, fadeUp }) {
  return (
    <section id="certifications" className="py-28 px-4 max-w-5xl mx-auto">
      <SectionLabel gradient="linear-gradient(90deg,#D97706,#F59E0B)">Certifications</SectionLabel>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {CERTS.map((c, i) => (
          <motion.div key={c.title} {...fadeUp(i * 0.06)} whileHover={{ scale: 1.04, y: -4 }}>
            <GlassCard
              className="p-4 h-full flex flex-col gap-2"
              style={
                c.featured
                  ? {
                      border: '1px solid rgba(245,158,11,0.35)',
                      background: 'rgba(245,158,11,0.05)',
                    }
                  : {}
              }
            >
              {c.featured && (
                <div className="flex items-center gap-1 text-[10px] font-bold" style={{ color: '#F59E0B' }}>
                  <Star className="w-3 h-3 fill-current" />
                  FEATURED
                </div>
              )}
              <Award className="w-5 h-5" style={{ color: c.featured ? '#F59E0B' : '#a78bfa' }} />
              <h3 className="text-xs font-bold text-white leading-tight">{c.title}</h3>
              <p className="text-[11px] text-gray-500">{c.issuer}</p>
              <span className="text-[11px] text-gray-600 mt-auto">{c.year}</span>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
