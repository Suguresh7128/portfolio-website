import React from 'react';
import ProjectCard from './ProjectCard';
import SectionLabel from './SectionLabel';

export default function ProjectsSection({ PROJECTS, fadeUp }) {
  return (
    <section id="projects" className="py-28 px-4 max-w-5xl mx-auto">
      <SectionLabel gradient="linear-gradient(90deg,#DB2777,#EC4899)">Projects</SectionLabel>
      <div className="grid md:grid-cols-2 gap-5">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} fadeUp={fadeUp} />
        ))}
      </div>
    </section>
  );
}
