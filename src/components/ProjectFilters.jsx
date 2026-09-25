import React from 'react';
import { motion } from 'framer-motion';

const FILTERS = ['All', 'Full Stack', 'AI / ML', 'Backend', 'Frontend', 'DevOps'];

export default function ProjectFilters({ activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {FILTERS.map((filter) => {
        const active = activeFilter === filter;
        return (
          <motion.button
            key={filter}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => onFilterChange(filter)}
            className="px-3.5 py-2 rounded-full text-xs font-semibold transition-colors duration-200"
            style={{
              background: active ? 'linear-gradient(135deg,#7C3AED,#EC4899)' : 'rgba(255,255,255,0.04)',
              border: active ? '1px solid rgba(168,85,247,0.55)' : '1px solid rgba(255,255,255,0.08)',
              color: active ? '#fff' : 'rgba(255,255,255,0.72)',
              boxShadow: active ? '0 8px 28px rgba(124,58,237,0.2)' : 'none',
            }}
          >
            {filter}
          </motion.button>
        );
      })}
    </div>
  );
}
