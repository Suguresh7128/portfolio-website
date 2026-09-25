import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectCaseStudy from './ProjectCaseStudy';
import ProjectFilters from './ProjectFilters';
import SectionLabel from './SectionLabel';

export default function ProjectsSection({ PROJECTS, fadeUp }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter, PROJECTS]);

  return (
    <section id="projects" className="py-28 px-4 max-w-5xl mx-auto">
      <SectionLabel gradient="linear-gradient(90deg,#DB2777,#EC4899)">Featured Projects</SectionLabel>
      <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-gray-400">
        A selection of product, AI, and backend projects highlighting my engineering approach across web, data, and platform work.
      </p>

      <ProjectFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 bg-white/5 p-10 text-center text-sm text-gray-400">
          No projects match this filter yet.
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.div key={p.title} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}>
                <ProjectCard p={p} index={i} fadeUp={fadeUp} onViewCaseStudy={setSelectedProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      <ProjectCaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
