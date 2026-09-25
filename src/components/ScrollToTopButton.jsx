import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton({ showTop }) {
  return (
    <AnimatePresence>
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-11 h-11 rounded-xl flex items-center justify-center z-50"
          style={{
            background: 'linear-gradient(135deg,#7C3AED,#EC4899)',
            boxShadow: '0 6px 24px rgba(124,58,237,0.4)',
          }}
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
