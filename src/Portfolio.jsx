import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUp,
  Code2,
  Database,
  Cloud,
  Wrench,
  Award,
  BookOpen,
  Briefcase,
  Terminal,
  Globe,
  ChevronRight,
  Cpu,
  Star,
} from "lucide-react";

import GlassCard from './components/GlassCard';
import GradientBorder from './components/GradientBorder';
import SectionLabel from './components/SectionLabel';
import ProjectCard from './components/ProjectCard';
import SkillGroup from './components/SkillGroup';
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

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "AI & DevOps Engineer",
  "Oracle Certified GenAI Pro",
];

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certs" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SKILL_GROUPS = [
  {
    label: "Languages",
    Icon: Code2,
    from: "#7C3AED",
    to: "#A855F7",
    items: ["Python", "Java", "C++", "C"],
  },
  {
    label: "Web Technologies",
    Icon: Globe,
    from: "#0891B2",
    to: "#06B6D4",
    items: ["React", "Node.js", "Express", "JavaScript", "HTML/CSS", "TailwindCSS", "REST APIs", "Socket.IO"],
  },
  {
    label: "Databases",
    Icon: Database,
    from: "#059669",
    to: "#10B981",
    items: ["MySQL", "MongoDB", "PostgreSQL", "SQL"],
  },
  {
    label: "DevOps & Cloud",
    Icon: Cloud,
    from: "#D97706",
    to: "#F59E0B",
    items: ["Docker", "Git", "CI/CD", "Oracle OCI", "AWS", "Azure"],
  },
  {
    label: "AI & Tools",
    Icon: Cpu,
    from: "#DB2777",
    to: "#EC4899",
    items: ["TensorFlow", "Flask", "OpenAI API", "spaCy", "JWT", "bcrypt", "Figma"],
  },
];

const PROJECTS = [
  {
    title: "Imagify",
    sub: "Text-to-Image SaaS",
    desc: "AI-powered SaaS platform converting text prompts to images via OpenAI DALL·E API, with secure auth, Stripe payments, and a public gallery.",
    tech: ["MERN", "OpenAI API", "JWT", "Cloudinary"],
    g1: "#7C3AED",
    g2: "#EC4899",
    emoji: "🎨",
  },
  {
    title: "LiveLingo",
    sub: "Real-time Chat App",
    desc: "Bi-directional messaging app with JWT authentication, WebSockets via Socket.IO, Zustand state management, and support for concurrent sessions.",
    tech: ["MERN", "Socket.IO", "Zustand", "JWT"],
    g1: "#0891B2",
    g2: "#06B6D4",
    emoji: "💬",
  },
  {
    title: "Online Voting System",
    sub: "Secure Web Platform",
    desc: "Tamper-proof voting platform with encrypted authentication, real-time vote tallying, and role-based admin controls.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JS"],
    g1: "#059669",
    g2: "#0D9488",
    emoji: "🗳️",
  },
  {
    title: "College Chatbot",
    sub: "ML-Powered Assistant",
    desc: "AI chatbot with Flask, spaCy & MySQL automating 85% of admission queries with 87% accuracy and 92% user satisfaction, cutting admin workload 60%.",
    tech: ["Python", "Flask", "spaCy", "MySQL", "ML"],
    g1: "#EA580C",
    g2: "#DC2626",
    emoji: "🤖",
  },
];

const INTERNSHIPS = [
  {
    role: "Web Development Intern",
    company: "Zidio Development",
    period: "Apr 2025 – Jul 2025",
    g1: "#7C3AED",
    g2: "#EC4899",
    points: [
      "Built a MERN blog platform with secure login, Cloudinary image uploads, and admin dashboard",
      "Developed an Excel analytics app for uploading files and generating 2D/3D charts with AI-powered insights",
    ],
  },
  {
    role: "AI-DevOps Engineer Intern",
    company: "Rooman Technologies",
    period: "Oct 2024 – Mar 2025",
    g1: "#0891B2",
    g2: "#06B6D4",
    points: [
      "Designed and deployed CI/CD pipelines using Git, Docker, Flask, and TensorFlow",
      "Built a capstone project integrating AI-driven automation in DevOps workflows to improve team efficiency",
    ],
  },
  {
    role: "Front-end Developer Intern",
    company: "Bharat Intern",
    period: "Aug 2023 – Nov 2023",
    g1: "#059669",
    g2: "#0D9488",
    points: [
      "Created responsive landing pages using HTML, CSS, and JavaScript",
      "Collaborated with designers to improve UI/UX and mentored new interns",
    ],
  },
];

const CERTS = [
  { title: "Generative AI Professional", issuer: "Oracle Cloud", year: "2025", featured: true },
  { title: "Data Analytics Simulation", issuer: "Deloitte", year: "2025", featured: false },
  { title: "Solutions Architecture", issuer: "AWS", year: "2025", featured: false },
  { title: "Data Visualisation", issuer: "Tata", year: "2025", featured: false },
  { title: "SQL Micro Course", issuer: "Cuvette", year: "2024", featured: false },
  { title: "Python Developer CPDA-24", issuer: "Techcert Labs", year: "2024", featured: false },
  { title: "AI-DevOps Engineer", issuer: "Rooman Technologies", year: "2025", featured: false },
  { title: "Web Development", issuer: "Zidio Development", year: "2025", featured: false },
];

const EDUCATION = [
  {
    degree: "B.E. — Information Science & Engineering",
    institution: "Sir M. Visvesvaraya Institute of Technology, Bangalore",
    period: "Dec 2021 – June 2025",
    score: "CGPA: 7.3 / 10",
    g1: "#7C3AED",
    g2: "#A855F7",
  },
  {
    degree: "PUC — PCMB",
    institution: "Gurukul Independent PU College, Kalaburgi",
    period: "2019 – 2021",
    score: "81.33%",
    g1: "#0891B2",
    g2: "#06B6D4",
  },
  {
    degree: "SSLC",
    institution: "Mount Carmel Convent School, Shahabad, Karnataka",
    period: "2019",
    score: "86.08%",
    g1: "#059669",
    g2: "#10B981",
  },
];

// ─────────────────────────────────────────────
// TINY HELPERS
// ─────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true },
});

// Small style helpers to avoid repeating gradient/text style objects
const gradient = (g1, g2, deg = '135deg') => `linear-gradient(${deg}, ${g1}, ${g2})`;
const textGradient = (g1, g2, deg = '90deg') => ({
  background: gradient(g1, g2, deg),
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

// Reusable lists moved out of JSX for clarity
const FLOAT_TAGS = ["<React />", "Node.js", "MongoDB", "Python", "Docker", "AI/ML"];
const SOCIAL_LINKS = [
  { I: Github, href: "https://github.com/Suguresh7128", label: "GitHub" },
  { I: Linkedin, href: "https://linkedin.com/in/suguresh-a-y-57675b22b", label: "LinkedIn" },
  { I: Mail, href: "mailto:sugureshay8@gmail.com", label: "Email" },
  { I: Phone, href: "tel:+919480639134", label: "Phone" },
];
const ABOUT_STATS = [
  { label: "Projects Built", val: "8+", I: Code2, g: gradient('#7C3AED', '#A855F7') },
  { label: "Certifications", val: "8", I: Award, g: gradient('#DB2777', '#EC4899') },
  { label: "Internships", val: "3", I: Briefcase, g: gradient('#0891B2', '#06B6D4') },
  { label: "CGPA", val: "7.3", I: BookOpen, g: gradient('#059669', '#10B981') },
];
const CONTACT_ITEMS = [
  { I: Mail, label: "sugureshay8@gmail.com", href: "mailto:sugureshay8@gmail.com", c: "#a78bfa" },
  { I: Phone, label: "+91-9480639134", href: "tel:+919480639134", c: "#a78bfa" },
  { I: Github, label: "github.com/Suguresh7128", href: "https://github.com/Suguresh7128", c: "#a78bfa" },
  { I: Linkedin, label: "LinkedIn Profile", href: "https://linkedin.com/in/suguresh-a-y-57675b22b", c: "#a78bfa" },
  ];

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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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

      {/* ── FOOTER ──────────────────────────── */}
      <footer
        className="py-6 text-center text-[11px]"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          color: "rgba(255,255,255,0.2)",
        }}
      >
        © 2025 Suguresh A Y · Crafted with React &amp; Framer Motion
      </footer>

      {/* ── SCROLL TO TOP ───────────────────── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 w-11 h-11 rounded-xl flex items-center justify-center z-50"
            style={{
              background: "linear-gradient(135deg,#7C3AED,#EC4899)",
              boxShadow: "0 6px 24px rgba(124,58,237,0.4)",
            }}
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}