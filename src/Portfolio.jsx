import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "technical", label: "Technical Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScrollTop(true);
      else setShowScrollTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative text-white font-sans scroll-smooth">
      {/* Tech Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md z-50 border-b border-gray-700">
        <ul className="flex justify-center space-x-6 p-4">
          {sections.map((sec) => (
            <li key={sec.id}>
              <button
                onClick={() => {
                  document.getElementById(sec.id)?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setActiveSection(sec.id);
                }}
                className={`px-3 py-1 rounded-lg transition-all duration-500 ${
                  activeSection === sec.id ? "bg-purple-600 scale-110" : "hover:bg-purple-500 hover:scale-105"
                }`}
              >
                {sec.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
          className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          SUGURESH A Y
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-gray-200">Aspiring Information Science Engineer | Full Stack Developer</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="flex space-x-6 mt-6">
          <a href="https://github.com/Suguresh7128" target="_blank" rel="noreferrer"><Github className="w-8 h-8 hover:text-purple-400 transition-transform transform hover:scale-125" /></a>
          <a href="https://linkedin.com/in/suguresh-a-y-57675b22b" target="_blank" rel="noreferrer"><Linkedin className="w-8 h-8 hover:text-purple-400 transition-transform transform hover:scale-125" /></a>
          <a href="mailto:sugureshay8@gmail.com"><Mail className="w-8 h-8 hover:text-purple-400 transition-transform transform hover:scale-125" /></a>
          <a href="tel:+919480639134"><Phone className="w-8 h-8 hover:text-purple-400 transition-transform transform hover:scale-125" /></a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center px-8 md:px-32">
        <motion.h2 initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-4xl font-bold mb-4">About Me</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="text-gray-300 text-lg leading-relaxed">
          Aspiring Information Science Engineer with a solid foundation in programming, web development, and data structures. Eager to contribute to a growth-oriented organization where I can apply my technical skills, collaborate with experienced professionals, and work on innovative, real-world solutions.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex flex-col justify-center px-8 md:px-32">
        <motion.h2 initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-4xl font-bold mb-6">Technical Skills</motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["Python", "Java", "C++", "C", "HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "TailwindCSS", "SQL", "MySQL", "PostgreSQL", "MongoDB", "Git", "Docker", "VS Code", "JWT", "bcrypt", "Apache"].map((skill, idx) => (
            <motion.div key={skill} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} viewport={{ once: true }} whileHover={{ scale: 1.15, rotate: 2 }} className="p-4 rounded-2xl bg-gray-800 shadow-lg">
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col justify-center px-8 md:px-32">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-4xl font-bold mb-6">Projects</motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[{
            title: "Online Voting System",
            desc: "Secure web-based voting platform with real-time processing, authentication, and encrypted storage.",
          }, {
            title: "Imagify",
            desc: "Full-stack SaaS that converts prompts into AI-generated images using OpenAI’s DALL·E API.",
          }, {
            title: "LiveLingo",
            desc: "Real-time chat app built with MERN, Socket.IO, JWT, and Zustand for state management.",
          }, {
            title: "College Chatbot",
            desc: "AI-powered chatbot handling 85% of queries autonomously with 87% accuracy.",
          }].map((proj, idx) => (
            <motion.div key={proj.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2 }} viewport={{ once: true }} whileHover={{ scale: 1.05, rotate: -1 }} className="p-6 bg-gray-800 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-300">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex flex-col justify-center px-8 md:px-32">
        <motion.h2 initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-4xl font-bold mb-6">Internships</motion.h2>
        <ul className="space-y-4">
          {["Front-end Web Dev Intern – Bharat Intern (Aug 2023 – Nov 2023)", "AI-DevOps Engineer – Rooman Technologies (Oct 2024 – Mar 2025)", "Web Development Intern – Zidio Development (Apr 2025 – Jul 2025)"].map((exp, idx) => (
            <motion.li key={exp} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.2 }} viewport={{ once: true }} className="bg-gray-800 p-4 rounded-xl shadow-lg">{exp}</motion.li>
          ))}
        </ul>
      </section>

      {/* Technical Experience Section */}
      <section id="technical" className="min-h-screen flex flex-col justify-center px-8 md:px-32">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-4xl font-bold mb-6">Technical Experience</motion.h2>
        <ul className="space-y-4">
          {["Shopping Cart Web App – Built full-stack shopping cart app with wallet integration and OTP resolution.", "NextWave E-Commerce Platform – Full-featured e-commerce app with payments, JWT security, and responsive UI.", "Blog Platform – MERN stack blog platform with secure login, post management, and cloud image uploads.", "Excel Analytics Platform – Web app for Excel upload, 2D/3D chart visualization, and AI insights.", "Task Planner – A month view task planner with smooth UI/UX. Live Demo: https://radiant-travesseiro-e26d20.netlify.app/"].map((exp, idx) => (
            <motion.li key={exp} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2 }} viewport={{ once: true }} className="bg-gray-800 p-4 rounded-xl shadow-lg">{exp}</motion.li>
          ))}
        </ul>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen flex flex-col justify-center px-8 md:px-32">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-4xl font-bold mb-6">Certifications</motion.h2>
        <div className="grid md:grid-cols-2 gap-4">
          {["Data Analytics Job Simulation – Deloitte 2025", "Solutions Architecture Job Simulation – AWS 2025", "Data Visualisation – Tata 2025", "SQL Micro Course – Cuvette 2024", "Certified Python Developer Associate CPDA-24 – Techcert Labs 2024", "AI-DevOps Engineer – Rooman Technologies 2025", "Web Development – Zidio Development 2025"].map((cert, idx) => (
            <motion.div key={cert} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} className="p-4 bg-gray-800 rounded-xl shadow-lg">{cert}</motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex flex-col justify-center px-8 md:px-32">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-4xl font-bold mb-6">Education</motion.h2>
        <ul className="space-y-4">
          {["B.E in Information Science – Sir MVIT, Bangalore (Dec 2021 – May 2025) | CGPA: 7.2/10", "PUC (PCMB) – Gurukul Independent PU College, Kalaburgi (2019 – 2021) | 81.33%", "SSLC – Mount Carmel Convent School, Shahabad, Karnataka (2019) | 86.08%"].map((edu, idx) => (
            <motion.li key={edu} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.2 }} viewport={{ once: true }} className="bg-gray-800 p-4 rounded-xl shadow-lg">{edu}</motion.li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-8 md:px-32">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-4xl font-bold mb-6">Contact</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="text-gray-300 mb-2">Email: sugureshay8@gmail.com</motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }} viewport={{ once: true }} className="text-gray-300 mb-6">Mobile: +91-9480639134</motion.p>
        <div className="flex space-x-6">
          <a href="https://github.com/Suguresh7128" target="_blank" rel="noreferrer"><Github className="w-8 h-8 hover:text-purple-400 transition-transform transform hover:scale-125" /></a>
          <a href="https://linkedin.com/in/suguresh-a-y-57675b22b" target="_blank" rel="noreferrer"><Linkedin className="w-8 h-8 hover:text-purple-400 transition-transform transform hover:scale-125" /></a>
          <a href="mailto:sugureshay8@gmail.com"><Mail className="w-8 h-8 hover:text-purple-400 transition-transform transform hover:scale-125" /></a>
          <a href="tel:+919480639134"><Phone className="w-8 h-8 hover:text-purple-400 transition-transform transform hover:scale-125" /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-4 text-center">© 2025 Suguresh A Y</footer>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-purple-600 p-3 rounded-full shadow-lg hover:bg-purple-500 transition-all"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  );
}
