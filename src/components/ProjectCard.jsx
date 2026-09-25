import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import GradientBorder from './GradientBorder';

export default function ProjectCard({ p, index, fadeUp, onViewCaseStudy }) {
  return (
    <motion.div
      {...(fadeUp ? fadeUp(index * 0.09) : {})}
      whileHover={{ y: -8, scale: 1.01 }}
      className="h-full"
    >
      <GradientBorder g1={p.g1} g2={p.g2} className="h-full">
        <div className="flex h-full flex-col p-6">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <div className="mb-2 text-3xl">{p.emoji}</div>
              <h3
                className="text-lg font-bold"
                style={{
                  background: `linear-gradient(135deg,${p.g1},${p.g2})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {p.title}
              </h3>
              <p className="mt-1 text-xs text-gray-500">{p.sub}</p>
            </div>
            {p.repo && (
              <motion.a
                href={p.repo}
                target={p.repo.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                whileHover={{ rotate: 12, scale: 1.2 }}
                className="inline-flex text-gray-500 hover:text-white transition-colors"
                aria-label={`View ${p.title} repository`}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            )}
          </div>

          <div className="mb-4 inline-flex self-start rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-300">
            {p.category}
          </div>

          <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400">{p.desc}</p>

          <div className="mb-5 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                style={{
                  background: `linear-gradient(135deg,${p.g1}22,${p.g2}22)`,
                  border: `1px solid ${p.g1}44`,
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-2">
            {p.repo && (
              <a
                href={p.repo}
                target={p.repo.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-200"
              >
                GitHub <ExternalLink className="h-3 w-3" />
              </a>
            )}
            <button
              type="button"
              onClick={() => onViewCaseStudy(p)}
              className="inline-flex items-center gap-1 rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 px-3 py-2 text-xs font-medium text-white"
            >
              View Case Study <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </GradientBorder>
    </motion.div>
  );
}
