import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

export default function SkillGroup({ group, index, fadeUp }) {
  const { label, Icon, from, to, items } = group;
  return (
    <motion.div {...(fadeUp ? fadeUp(index * 0.07) : {})}>
      <GlassCard className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: `linear-gradient(135deg,${from},${to})` }}
          >
            <Icon className="w-4 h-4 text-white" />
          </div>
          <span
            className="text-sm font-bold"
            style={{
              background: `linear-gradient(90deg,${from},${to})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {label}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map((skill, si) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 + si * 0.03 }}
              whileHover={{ y: -2, scale: 1.06 }}
              className="px-3 py-1 text-xs rounded-full cursor-default transition-colors duration-200"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
