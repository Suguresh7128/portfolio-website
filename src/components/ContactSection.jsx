import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import GlassCard from './GlassCard';
import SectionLabel from './SectionLabel';

export default function ContactSection({ CONTACT_ITEMS, fadeUp }) {
  return (
    <section id="contact" className="py-28 px-4 max-w-5xl mx-auto">
      <SectionLabel gradient="linear-gradient(90deg,#7C3AED,#EC4899)">Let's build something useful</SectionLabel>
      <motion.div {...fadeUp(0.05)} className="max-w-2xl mx-auto">
        <GlassCard className="p-8 text-center">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black"
            style={{ background: 'linear-gradient(135deg,#7C3AED,#EC4899)' }}
          >
            S
          </div>
          <h2 className="text-xl font-bold text-white mb-2">SUGURESH A Y</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-7">
            I’m currently open to entry-level software engineering opportunities, full-stack development roles,
            backend engineering roles, and AI-focused engineering opportunities.
          </p>

          <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <MapPin className="h-3.5 w-3.5 text-violet-300" /> Bengaluru, Karnataka, India
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <Mail className="h-3.5 w-3.5 text-violet-300" /> sugureshay8@gmail.com
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <Phone className="h-3.5 w-3.5 text-violet-300" /> +91-9480639134
            </span>
          </div>

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

          <div className="flex flex-wrap justify-center gap-3">
            <motion.a
              href="mailto:sugureshay8@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white"
            >
              <Mail className="h-4 w-4" /> Email Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
            >
              <Download className="h-4 w-4" /> View Resume
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
            >
              <Download className="h-4 w-4" /> Download Resume
            </motion.a>
            <motion.a
              href="https://github.com/Suguresh7128"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
            >
              <Github className="h-4 w-4" /> GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/suguresh-a-y-57675b22b"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </motion.a>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
