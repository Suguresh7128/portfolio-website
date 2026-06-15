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

const GlassCard = ({ children, className = "", style = {} }) => (
  <div
    className={`bg-white/[0.04] border border-white/[0.08] rounded-2xl ${className}`}
    style={{ backdropFilter: "blur(16px)", ...style }}
  >
    {children}
  </div>
);

// Gradient-border wrapper
const GradientBorder = ({ g1, g2, children, className = "" }) => (
  <div
    className={`rounded-2xl p-px ${className}`}
    style={{ background: `linear-gradient(135deg, ${g1}, ${g2})` }}
  >
    <div className="rounded-2xl h-full" style={{ background: "#07071a" }}>
      {children}
    </div>
  </div>
);

const SectionLabel = ({ children, gradient }) => (
  <motion.div {...fadeUp()} className="mb-12">
    <p
      className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
      style={{ background: gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
    >
      ✦ {children}
    </p>
    <div className="h-px w-16 rounded-full opacity-50" style={{ background: gradient }} />
  </motion.div>
);

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

      {/* ── BACKGROUND ──────────────────────── */}
      <div className="fixed inset-0 -z-20" style={{ background: "#050510" }} />
      {/* Dot-grid */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Glow orbs */}
      <motion.div
        className="fixed -z-10 rounded-full pointer-events-none"
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: 500,
          height: 500,
          top: "10%",
          left: "15%",
          background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        className="fixed -z-10 rounded-full pointer-events-none"
        animate={{ x: [0, -60, 40, 0], y: [0, 80, -30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: 400,
          height: 400,
          top: "50%",
          right: "10%",
          background: "radial-gradient(circle, rgba(6,182,212,0.13) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        className="fixed -z-10 rounded-full pointer-events-none"
        animate={{ x: [0, 50, -80, 0], y: [0, 50, -60, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: 350,
          height: 350,
          bottom: "15%",
          left: "35%",
          background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── NAVBAR ──────────────────────────── */}
      <nav className="fixed top-3 left-0 right-0 z-50 px-4">
        <div
          className="max-w-5xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl"
          style={{
            background: "rgba(5,5,16,0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Logo mark */}
          <button
            onClick={() => scrollTo("home")}
            className="text-sm font-black tracking-wider"
            style={{
              background: "linear-gradient(135deg,#7C3AED,#EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SAY↗
          </button>

          {/* Links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollTo(s.id)}
                  className="relative px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors duration-200"
                  style={{ color: active === s.id ? "#fff" : "rgba(255,255,255,0.45)" }}
                >
                  {active === s.id && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.6),rgba(236,72,153,0.4))" }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{s.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile pill */}
          <div className="md:hidden text-xs text-gray-400 capitalize">{active}</div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section
        id="home"
        className="min-h-screen relative flex flex-col items-center justify-center text-center px-4 pt-24 overflow-hidden"
      >
        {/* Floating tech tags */}
        {["<React />", "Node.js", "MongoDB", "Python", "Docker", "AI/ML"].map(
          (tag, i) => (
            <motion.div
              key={tag}
              className="absolute hidden lg:block text-[11px] font-mono text-purple-400/50 border border-purple-500/20 px-2.5 py-1 rounded-lg"
              style={{
                left: `${8 + (i % 3) * 30}%`,
                top: `${18 + Math.floor(i / 3) * 55}%`,
              }}
              animate={{ y: [0, -14, 0], opacity: [0.3, 0.65, 0.3] }}
              transition={{
                duration: 3.5 + i * 0.6,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            >
              {tag}
            </motion.div>
          )
        )}

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-semibold"
          style={{
            background: "rgba(5,150,105,0.12)",
            border: "1px solid rgba(5,150,105,0.3)",
            color: "#34D399",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
            style={{ boxShadow: "0 0 6px #34d399", animation: "pulse 2s infinite" }}
          />
          Open to full-time opportunities
        </motion.div>

        {/* Terminal-style name block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-3"
        >
          <div
            className="inline-block text-left mb-4 px-4 py-3 rounded-xl text-[11px] font-mono"
            style={{
              background: "rgba(124,58,237,0.08)",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            <span className="text-purple-400">$ </span>
            <span className="text-gray-300">whoami</span>
          </div>
          <h1 className="text-[clamp(3rem,10vw,7rem)] font-black leading-[0.9] tracking-tight">
            <span
              style={{
                background: "linear-gradient(135deg,#a78bfa,#ec4899,#67e8f9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SUGURESH
            </span>
            <br />
            <span style={{ color: "rgba(255,255,255,0.88)" }}>A Y</span>
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-2 mb-10 min-h-8"
        >
          <Terminal className="w-4 h-4 text-purple-400 shrink-0" />
          <span
            className="text-base md:text-lg font-mono font-medium"
            style={{ color: "#a78bfa" }}
          >
            {typed}
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="w-0.5 h-5 inline-block bg-purple-400"
          />
        </motion.div>

        {/* Social chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            { I: Github, href: "https://github.com/Suguresh7128", label: "GitHub" },
            { I: Linkedin, href: "https://linkedin.com/in/suguresh-a-y-57675b22b", label: "LinkedIn" },
            { I: Mail, href: "mailto:sugureshay8@gmail.com", label: "Email" },
            { I: Phone, href: "tel:+919480639134", label: "Phone" },
          ].map(({ I, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              <I className="w-4 h-4" style={{ color: "#a78bfa" }} />
              {label}
            </motion.a>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 rounded-xl font-semibold text-sm text-white"
            style={{
              background: "linear-gradient(135deg,#7C3AED,#EC4899)",
              boxShadow: "0 8px 32px rgba(124,58,237,0.35)",
            }}
          >
            View Projects →
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 rounded-xl font-semibold text-sm"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div
            className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
            style={{ border: "1px solid rgba(255,255,255,0.18)" }}
          >
            <div
              className="w-1 h-2 rounded-full"
              style={{ background: "rgba(255,255,255,0.4)" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════ */}
      <section id="about" className="py-28 px-4 max-w-5xl mx-auto">
        <SectionLabel gradient="linear-gradient(90deg,#7C3AED,#06B6D4)">
          About Me
        </SectionLabel>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Bio card */}
          <motion.div {...fadeUp(0.05)}>
            <GlassCard className="p-7 h-full">
              <h2 className="text-2xl font-bold text-white mb-4">
                Building at the intersection of{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg,#a78bfa,#ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  software & intelligence
                </span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                Innovative Software Engineer with hands-on experience in Full Stack Development
                (MERN), Cloud Technologies, and AI-driven solutions. Skilled in React, Node.js,
                SQL, and API integration — with a strong Python and data analytics foundation.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm mt-3">
                Oracle Certified Generative AI Professional, aiming to join dynamic engineering
                teams and build scalable, intelligent, high-performance applications that bridge
                software and data.
              </p>
            </GlassCard>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Projects Built", val: "8+", I: Code2, g: "linear-gradient(135deg,#7C3AED,#A855F7)" },
              { label: "Certifications", val: "8", I: Award, g: "linear-gradient(135deg,#DB2777,#EC4899)" },
              { label: "Internships", val: "3", I: Briefcase, g: "linear-gradient(135deg,#0891B2,#06B6D4)" },
              { label: "CGPA", val: "7.3", I: BookOpen, g: "linear-gradient(135deg,#059669,#10B981)" },
            ].map(({ label, val, I, g }, i) => (
              <motion.div
                key={label}
                {...fadeUp(0.1 + i * 0.08)}
                whileHover={{ scale: 1.04, y: -3 }}
              >
                <GlassCard className="p-5 flex flex-col items-center justify-center text-center min-h-[110px]">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: g }}
                  >
                    <I className="w-4 h-4 text-white" />
                  </div>
                  <div
                    className="text-3xl font-black mb-1"
                    style={{ background: g, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    {val}
                  </div>
                  <div className="text-gray-500 text-xs">{label}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SKILLS
      ═══════════════════════════════════════ */}
      <section id="skills" className="py-28 px-4 max-w-5xl mx-auto">
        <SectionLabel gradient="linear-gradient(90deg,#0891B2,#06B6D4)">
          Technical Skills
        </SectionLabel>
        <div className="space-y-4">
          {SKILL_GROUPS.map(({ label, Icon, from, to, items }, gi) => (
            <motion.div key={label} {...fadeUp(gi * 0.07)}>
              <GlassCard className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `linear-gradient(135deg,${from},${to})` }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span
                    className="text-sm font-bold"
                    style={{
                      background: `linear-gradient(90deg,${from},${to})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.04 + si * 0.03 }}
                      whileHover={{ y: -2, scale: 1.06 }}
                      className="px-3 py-1 text-xs rounded-full cursor-default transition-colors duration-200"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROJECTS
      ═══════════════════════════════════════ */}
      <section id="projects" className="py-28 px-4 max-w-5xl mx-auto">
        <SectionLabel gradient="linear-gradient(90deg,#DB2777,#EC4899)">
          Projects
        </SectionLabel>
        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp(i * 0.09)}
              whileHover={{ y: -6, scale: 1.015 }}
              className="h-full"
            >
              <GradientBorder g1={p.g1} g2={p.g2} className="h-full">
                <div className="p-6 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-3xl mb-2">{p.emoji}</div>
                      <h3
                        className="text-lg font-bold"
                        style={{
                          background: `linear-gradient(135deg,${p.g1},${p.g2})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {p.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">{p.sub}</p>
                    </div>
                    <motion.a
                      href="https://github.com/Suguresh7128"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ rotate: 12, scale: 1.2 }}
                      className="text-gray-600 hover:text-gray-300 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>
                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full"
                        style={{
                          background: `linear-gradient(135deg,${p.g1}22,${p.g2}22)`,
                          border: `1px solid ${p.g1}44`,
                          color: "rgba(255,255,255,0.65)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </GradientBorder>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EXPERIENCE
      ═══════════════════════════════════════ */}
      <section id="experience" className="py-28 px-4 max-w-5xl mx-auto">
        <SectionLabel gradient="linear-gradient(90deg,#0891B2,#7C3AED)">
          Experience
        </SectionLabel>
        <div className="relative pl-6 md:pl-10">
          {/* Vertical line */}
          <div
            className="absolute left-1.5 md:left-3.5 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, #7C3AED, #06B6D4, #10B981)",
              opacity: 0.3,
            }}
          />
          <div className="space-y-8">
            {INTERNSHIPS.map((job, i) => (
              <motion.div
                key={job.company}
                {...fadeUp(i * 0.12)}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[22px] md:-left-[30px] top-6 w-4 h-4 rounded-full"
                  style={{
                    background: `linear-gradient(135deg,${job.g1},${job.g2})`,
                    boxShadow: `0 0 12px ${job.g1}80`,
                    border: "2px solid #07071a",
                  }}
                />

                <GlassCard className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-base font-bold text-white">{job.role}</h3>
                      <span
                        className="text-sm font-semibold"
                        style={{
                          background: `linear-gradient(90deg,${job.g1},${job.g2})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {job.company}
                      </span>
                    </div>
                    <span
                      className="text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-gray-400 text-sm"
                      >
                        <ChevronRight
                          className="w-3.5 h-3.5 mt-0.5 shrink-0"
                          style={{ color: job.g2 }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CERTIFICATIONS
      ═══════════════════════════════════════ */}
      <section id="certifications" className="py-28 px-4 max-w-5xl mx-auto">
        <SectionLabel gradient="linear-gradient(90deg,#D97706,#F59E0B)">
          Certifications
        </SectionLabel>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp(i * 0.06)}
              whileHover={{ scale: 1.04, y: -4 }}
            >
              <GlassCard
                className="p-4 h-full flex flex-col gap-2"
                style={
                  c.featured
                    ? {
                        border: "1px solid rgba(245,158,11,0.35)",
                        background: "rgba(245,158,11,0.05)",
                      }
                    : {}
                }
              >
                {c.featured && (
                  <div className="flex items-center gap-1 text-[10px] font-bold" style={{ color: "#F59E0B" }}>
                    <Star className="w-3 h-3 fill-current" />
                    FEATURED
                  </div>
                )}
                <Award
                  className="w-5 h-5"
                  style={{ color: c.featured ? "#F59E0B" : "#a78bfa" }}
                />
                <h3 className="text-xs font-bold text-white leading-tight">{c.title}</h3>
                <p className="text-[11px] text-gray-500">{c.issuer}</p>
                <span className="text-[11px] text-gray-600 mt-auto">{c.year}</span>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EDUCATION
      ═══════════════════════════════════════ */}
      <section id="education" className="py-28 px-4 max-w-5xl mx-auto">
        <SectionLabel gradient="linear-gradient(90deg,#059669,#06B6D4)">
          Education
        </SectionLabel>
        <div className="space-y-5">
          {EDUCATION.map((e, i) => (
            <motion.div
              key={e.degree}
              {...fadeUp(i * 0.1)}
              whileHover={{ scale: 1.01 }}
            >
              <GradientBorder g1={e.g1} g2={e.g2}>
                <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h3
                      className="text-sm font-bold"
                      style={{
                        background: `linear-gradient(90deg,${e.g1},${e.g2})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {e.degree}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1">{e.institution}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-white text-sm font-bold">{e.score}</div>
                    <div className="text-gray-500 text-[11px] mt-0.5">{e.period}</div>
                  </div>
                </div>
              </GradientBorder>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════ */}
      <section id="contact" className="py-28 px-4 max-w-5xl mx-auto">
        <SectionLabel gradient="linear-gradient(90deg,#7C3AED,#EC4899)">
          Let's Connect
        </SectionLabel>
        <motion.div {...fadeUp(0.05)} className="max-w-lg mx-auto">
          <GlassCard className="p-8 text-center">
            {/* Avatar */}
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black"
              style={{ background: "linear-gradient(135deg,#7C3AED,#EC4899)" }}
            >
              S
            </div>
            <h2 className="text-xl font-bold text-white mb-1">SUGURESH A Y</h2>
            <p className="text-gray-500 text-sm mb-7">
              Software Engineer · Open to full-time roles
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-7">
              {[
                { I: Mail, label: "sugureshay8@gmail.com", href: "mailto:sugureshay8@gmail.com", c: "#a78bfa" },
                { I: Phone, label: "+91-9480639134", href: "tel:+919480639134", c: "#a78bfa" },
                { I: Github, label: "github.com/Suguresh7128", href: "https://github.com/Suguresh7128", c: "#a78bfa" },
                { I: Linkedin, label: "LinkedIn Profile", href: "https://linkedin.com/in/suguresh-a-y-57675b22b", c: "#a78bfa" },
              ].map(({ I, label, href, c }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="flex items-center gap-3 p-3 rounded-xl text-xs text-left transition-colors duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  <I className="w-4 h-4 shrink-0" style={{ color: c }} />
                  <span className="truncate">{label}</span>
                </motion.a>
              ))}
            </div>

            <motion.a
              href="https://helpful-pithivier-0787ec.netlify.app/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(135deg,#7C3AED,#EC4899)",
                boxShadow: "0 8px 28px rgba(124,58,237,0.35)",
              }}
            >
              <Globe className="w-4 h-4" />
              Visit Portfolio Site
            </motion.a>
          </GlassCard>
        </motion.div>
      </section>

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