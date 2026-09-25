  import React, { useState, useEffect } from 'react';

  import Navbar from './components/Navbar';
  import HeroSection from './components/HeroSection';
  import AboutSection from './components/AboutSection';
  import ContactSection from './components/ContactSection';
  import SkillsSection from './components/SkillsSection';
  import ProjectsSection from './components/ProjectsSection';
  import ExperienceSection from './components/ExperienceSection';
  import CertificationsSection from './components/CertificationsSection';
  import EducationSection from './components/EducationSection';
  import BackgroundDecorations from './components/BackgroundDecorations';
  import Footer from './components/Footer';
  import ScrollToTopButton from './components/ScrollToTopButton';
  import {
    ROLES,
    NAV,
    SKILL_GROUPS,
    PROJECTS,
    INTERNSHIPS,
    CERTS,
    EDUCATION,
    FLOAT_TAGS,
    SOCIAL_LINKS,
    ABOUT_STATS,
    CONTACT_ITEMS,
    fadeUp,
  } from './data/portfolioData';

  // ─────────────────────────────────────────────
  // MAIN
  // ─────────────────────────────────────────────

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  // ── TYPEWRITER ──────────────────────────────
  useEffect(() => {
    const current = ROLES[roleIdx];
    let t;
    if (!deleting && typed === current) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && typed === "") {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    } else {
      t = setTimeout(
        () =>
          setTyped((prev) =>
            deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
          ),
        deleting ? 35 : 75
      );
    }
    return () => clearTimeout(t);
  }, [typed, deleting, roleIdx]);

  // ── SCROLL ──────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(total > 0 ? (window.scrollY / total) * 100 : 0);
      setShowTop(window.scrollY > 400);

      for (let i = NAV.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV[i].id);
        if (el && window.scrollY >= el.offsetTop - 220) {
          setActive(NAV[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    if (id === 'resume') {
      window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  // ─────────────────────────────────────────────
  return (
    <div className="relative min-h-screen text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ── SCROLL PROGRESS ─────────────────── */}
      <div
        className="fixed top-0 left-0 h-[3px] z-[200] transition-all duration-100"
        style={{
          width: `${scrollPct}%`,
          background: "linear-gradient(90deg, #7C3AED, #EC4899, #06B6D4)",
          boxShadow: "0 0 8px rgba(124,58,237,0.6)",
        }}
      />

      <BackgroundDecorations />

      <Navbar NAV={NAV} active={active} scrollTo={scrollTo} />
      <HeroSection FLOAT_TAGS={FLOAT_TAGS} SOCIAL_LINKS={SOCIAL_LINKS} typed={typed} scrollTo={scrollTo} />

      {/* ═══════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════ */}
      <AboutSection ABOUT_STATS={ABOUT_STATS} fadeUp={fadeUp} />

      <SkillsSection SKILL_GROUPS={SKILL_GROUPS} fadeUp={fadeUp} />
      <ProjectsSection PROJECTS={PROJECTS} fadeUp={fadeUp} />
      <ExperienceSection INTERNSHIPS={INTERNSHIPS} fadeUp={fadeUp} />
      <CertificationsSection CERTS={CERTS} fadeUp={fadeUp} />
      <EducationSection EDUCATION={EDUCATION} fadeUp={fadeUp} />

      {/* ═══════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════ */}
      <ContactSection CONTACT_ITEMS={CONTACT_ITEMS} fadeUp={fadeUp} />

      <Footer />
      <ScrollToTopButton showTop={showTop} />
    </div>
  );
}