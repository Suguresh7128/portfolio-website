import React from 'react';
import SkillGroup from './SkillGroup';
import SectionLabel from './SectionLabel';

export default function SkillsSection({ SKILL_GROUPS, fadeUp }) {
  return (
    <section id="skills" className="py-28 px-4 max-w-5xl mx-auto">
      <SectionLabel gradient="linear-gradient(90deg,#0891B2,#06B6D4)">Technical Skills</SectionLabel>
      <div className="space-y-4">
        {SKILL_GROUPS.map((group, gi) => (
          <SkillGroup key={group.label} group={group} index={gi} fadeUp={fadeUp} />
        ))}
      </div>
    </section>
  );
}
