import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundDecorations() {
  return (
    <>
      <div className="fixed inset-0 -z-20" style={{ background: '#050510' }} />
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <motion.div
        className="fixed -z-10 rounded-full pointer-events-none"
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: 500,
          height: 500,
          top: '10%',
          left: '15%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <motion.div
        className="fixed -z-10 rounded-full pointer-events-none"
        animate={{ x: [0, -60, 40, 0], y: [0, 80, -30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: 400,
          height: 400,
          top: '50%',
          right: '10%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.13) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <motion.div
        className="fixed -z-10 rounded-full pointer-events-none"
        animate={{ x: [0, 50, -80, 0], y: [0, 50, -60, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: 350,
          height: 350,
          bottom: '15%',
          left: '35%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </>
  );
}
