import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import GlassCard from './GlassCard';
import SectionLabel from './SectionLabel';

export default function ContactSection({ CONTACT_ITEMS, fadeUp }) {
  return (
    <section id="contact" className="py-28 px-4 max-w-5xl mx-auto">
      <SectionLabel gradient="linear-gradient(90deg,#7C3AED,#EC4899)">Let's Connect</SectionLabel>
      <motion.div {...fadeUp(0.05)} className="max-w-lg mx-auto">
        <GlassCard className="p-8 text-center">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black"
            style={{ background: 'linear-gradient(135deg,#7C3AED,#EC4899)' }}
          >
            S
          </div>
          <h2 className="text-xl font-bold text-white mb-1">SUGURESH A Y</h2>
          <p className="text-gray-500 text-sm mb-7">Software Engineer · Open to full-time roles</p>

          <div className="grid sm:grid-cols-2 gap-3 mb-7">
            {CONTACT_ITEMS.map(({ I, label, href, c }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                className="flex items-center gap-3 p-3 rounded-xl text-xs text-left transition-colors duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                <I className="w-4 h-4 shrink-0" style={{ color: c }} />
                <span className="truncate">{label}</span>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="https://helpful-pithivier-0787ec.netlify.app/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
            style={{
              background: 'linear-gradient(135deg,#7C3AED,#EC4899)',
              boxShadow: '0 8px 28px rgba(124,58,237,0.35)',
            }}
          >
            <Globe className="w-4 h-4" />
            Visit Portfolio Site
          </motion.a>
        </GlassCard>
      </motion.div>
    </section>
  );
}
