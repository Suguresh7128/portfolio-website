import React from 'react';
import { motion } from 'framer-motion';

export default function SectionLabel({ children, gradient }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <p
        className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
        style={{ background: gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
      >
        ✦ {children}
      </p>
      <div className="h-px w-16 rounded-full opacity-50" style={{ background: gradient }} />
    </motion.div>
  );
}
