import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';

export default function ProjectCaseStudy({ project, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-case-study-title"
          tabIndex={-1}
          className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-[#0b1020]/95 p-5 shadow-2xl md:p-7"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <div className="mb-2 text-3xl">{project.emoji}</div>
              <h3 id="project-case-study-title" className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-1 text-sm text-gray-400">{project.sub}</p>
            </div>
            <div
              className="rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{
                background: 'rgba(255,255,255,0.04)',
                borderColor: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              {project.category}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Overview</h4>
              <p className="text-sm leading-7 text-gray-300">{project.caseStudy.overview}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Problem</h4>
              <p className="text-sm leading-7 text-gray-300">{project.caseStudy.problem}</p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Solution</h4>
            <p className="text-sm leading-7 text-gray-300">{project.caseStudy.solution}</p>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Architecture</h4>
              <p className="text-sm leading-7 text-gray-300">{project.caseStudy.architecture}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Key Features</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {project.caseStudy.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-violet-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.caseStudy.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border px-2.5 py-1 text-[11px] font-medium text-gray-200"
                  style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.repo && (
              <a
                href={project.repo}
                target={project.repo.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white"
              >
                GitHub <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 px-4 py-2 text-sm font-medium text-white"
              >
                Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
