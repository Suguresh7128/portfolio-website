import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Code2,
  Database,
  Cloud,
  Wrench,
  Award,
  BookOpen,
  Briefcase,
  Terminal,
  Globe,
  Cpu,
} from 'lucide-react';

export const ROLES = [
  'Full-Stack Developer',
  'MERN Stack Developer',
  'AI Application Developer',
  'Software Engineer',
];

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
  { id: 'resume', label: 'Resume' },
];

export const SKILL_GROUPS = [
  {
    label: 'Languages',
    Icon: Code2,
    from: '#7C3AED',
    to: '#A855F7',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C', 'SQL'],
  },
  {
    label: 'Frontend',
    Icon: Globe,
    from: '#0891B2',
    to: '#06B6D4',
    items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Zustand'],
  },
  {
    label: 'Backend',
    Icon: Database,
    from: '#059669',
    to: '#10B981',
    items: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST APIs', 'JWT', 'Authentication', 'Async programming'],
  },
  {
    label: 'Databases',
    Icon: Database,
    from: '#F59E0B',
    to: '#F97316',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL'],
  },
  {
    label: 'AI / ML',
    Icon: Cpu,
    from: '#DB2777',
    to: '#EC4899',
    items: ['OpenAI API', 'LLM APIs', 'Prompt Engineering', 'NLP', 'TensorFlow', 'spaCy', 'AI Application Development'],
  },
  {
    label: 'DevOps / Cloud',
    Icon: Cloud,
    from: '#D97706',
    to: '#F59E0B',
    items: ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'Linux', 'Oracle Cloud Infrastructure', 'AWS', 'Azure'],
  },
  {
    label: 'Engineering',
    Icon: Wrench,
    from: '#64748B',
    to: '#94A3B8',
    items: ['API Design', 'Database Design', 'OOP', 'Data Structures', 'Testing fundamentals', 'Agile fundamentals'],
  },
];

export const PROJECTS = [
  {
    title: 'SmartBasket',
    sub: 'Grocery price comparison platform',
    desc: 'A full-stack product focused on grocery price comparison and optimization with store comparison, pincode-based pricing, bill OCR, purchase history, alerts, and analytics.',
    tech: ['Next.js', 'React Native', 'Node.js', 'Express', 'MongoDB', 'Docker'],
    g1: '#22c55e',
    g2: '#0ea5e9',
    emoji: '🛒',
    category: 'Full Stack',
    repo: '',
    demo: '',
    featured: true,
    aspects: ['9+ store comparison', 'pincode-based pricing', 'bill OCR', 'purchase history', 'analytics'],
    caseStudy: {
      overview: 'SmartBasket is a grocery-focused product designed to compare prices across stores and help users optimize purchases.',
      problem: 'Shoppers often need to compare repetitive grocery pricing and understand whether alternatives offer better value.',
      solution: 'The platform brings together store comparison, local pricing logic, historical purchase data, and optimization insights in one workflow.',
      architecture: 'Next.js frontend, Express API layer, MongoDB storage, and mobile app support through React Native / Expo.',
      highlights: ['Multi-store comparison', 'Pincode-based pricing', 'Purchase analytics', 'Alerts and optimization ideas'],
      stack: ['Next.js', 'React Native / Expo', 'Node.js', 'Express', 'MongoDB', 'Docker']
    }
  },
  {
    title: 'AI Brand Intelligence Agent',
    sub: 'AI agent backend for brand intelligence workflows',
    desc: 'AI-agent powered backend application for brand intelligence workflows using FastAPI, PostgreSQL, and OpenAI Agent APIs to support structured interactions and database-backed actions.',
    tech: ['FastAPI', 'PostgreSQL', 'OpenAI Agent API', 'REST APIs'],
    g1: '#8b5cf6',
    g2: '#ec4899',
    emoji: '🧠',
    category: 'AI / ML',
    repo: '',
    demo: '',
    featured: true,
    aspects: ['FastAPI backend', 'PostgreSQL integration', 'AI agent workflows', 'REST architecture'],
    caseStudy: {
      overview: 'The project focuses on AI-driven brand intelligence workflows using agent-style interactions and structured data access.',
      problem: 'Brand intelligence work often requires combining external AI reasoning with local structured data.',
      solution: 'The application exposes API-driven workflows that can connect AI reasoning with database-backed brand intelligence tasks.',
      architecture: 'FastAPI service + PostgreSQL persistence + OpenAI Agent API integration + REST endpoints.',
      highlights: ['Agent-style API workflows', 'Structured database integration', 'AI-assisted reasoning', 'REST-first design'],
      stack: ['FastAPI', 'PostgreSQL', 'OpenAI Agent API', 'REST APIs']
    }
  },
  {
    title: 'AI College Admission Enquiry Chatbot',
    sub: 'ML/NLP-powered admission support assistant',
    desc: 'A Python and Flask-based chatbot using spaCy and NLP techniques to answer admission-related enquiries with machine learning support and MySQL-backed data.',
    tech: ['Python', 'Flask', 'spaCy', 'NLP', 'MySQL', 'Machine Learning'],
    g1: '#f59e0b',
    g2: '#ef4444',
    emoji: '🤖',
    category: 'AI / ML',
    repo: '',
    demo: '',
    featured: true,
    aspects: ['NLP-based answering', 'admission query support', 'MySQL data model', 'ML workflow'],
    caseStudy: {
      overview: 'This project explores how an NLP chatbot can address common admission queries in a university support workflow.',
      problem: 'Manual admission enquiry handling can be repetitive and time-consuming.',
      solution: 'The chatbot uses ML/NLP and a structured data layer to answer frequently asked questions and reduce repetitive enquiry handling.',
      architecture: 'Flask backend with spaCy/NLP processing and MySQL-backed data access.',
      highlights: ['Query classification', 'NLP responses', 'Admission workflow support', 'MySQL-backed information'],
      stack: ['Python', 'Flask', 'spaCy', 'NLP', 'MySQL', 'Machine Learning']
    }
  },
  {
    title: 'Imagify',
    sub: 'AI text-to-image SaaS',
    desc: 'An AI-powered SaaS project for generating images from text prompts using the OpenAI API, with authentication and gallery support.',
    tech: ['MERN', 'OpenAI API', 'Authentication', 'Image generation'],
    g1: '#7C3AED',
    g2: '#EC4899',
    emoji: '🎨',
    category: 'AI / ML',
    repo: '',
    demo: '',
    featured: true,
    aspects: ['text-to-image workflow', 'auth flow', 'gallery support', 'AI API integration'],
    caseStudy: {
      overview: 'Imagify is an AI-powered image generation project designed around prompt-based generation and a simple product workflow.',
      problem: 'AI image generation products need a usable pipeline for prompt handling, storage, and user access.',
      solution: 'The app presents a straightforward text-to-image experience supported by a backend API and storage layer.',
      architecture: 'MERN application with OpenAI integration and user-facing gallery functionality.',
      highlights: ['Prompt-to-image generation', 'Authentication', 'Gallery management', 'AI API integration'],
      stack: ['MERN', 'OpenAI API', 'Authentication', 'Image generation']
    }
  },
  {
    title: 'LiveLingo',
    sub: 'Real-time chat application',
    desc: 'A real-time messaging application built with MERN and Socket.IO, focused on live communication, authentication, and concurrent sessions.',
    tech: ['MERN', 'Socket.IO', 'JWT', 'WebSockets'],
    g1: '#0891B2',
    g2: '#06B6D4',
    emoji: '💬',
    category: 'Full Stack',
    repo: '',
    demo: '',
    featured: false,
    aspects: ['real-time communication', 'authentication', 'concurrent sessions', 'event-driven communication'],
    caseStudy: {
      overview: 'LiveLingo focuses on building a real-time communication app with authenticated user sessions and event-driven messaging.',
      problem: 'Real-time chat requires reliable state management and session awareness.',
      solution: 'The project uses Socket.IO and JWT-backed flows to support live message exchange in a simple application architecture.',
      architecture: 'MERN stack with Socket.IO for real-time communication and JWT-based authentication.',
      highlights: ['Real-time messaging', 'JWT auth', 'Concurrent sessions', 'WebSocket events'],
      stack: ['MERN', 'Socket.IO', 'JWT', 'WebSockets']
    }
  },
  {
    title: 'Resume Screening Agent',
    sub: 'AI-assisted resume matching application',
    desc: 'An NLP-driven resume screening and matching application using Streamlit, TF-IDF, cosine similarity, and Groq LLM capabilities.',
    tech: ['Streamlit', 'TF-IDF', 'Cosine Similarity', 'Groq LLM', 'NLP'],
    g1: '#3b82f6',
    g2: '#14b8a6',
    emoji: '📄',
    category: 'AI / ML',
    repo: '',
    demo: '',
    featured: false,
    aspects: ['resume matching', 'similarity scoring', 'LLM assistance', 'NLP workflow'],
    caseStudy: {
      overview: 'The project demonstrates AI-assisted resume matching using NLP techniques and similarity scoring.',
      problem: 'Screening resumes manually is time-intensive and inconsistent.',
      solution: 'The application combines text similarity methods with LLM-assisted reasoning to support screening workflows.',
      architecture: 'Streamlit frontend with NLP preprocessing and similarity matching logic.',
      highlights: ['TF-IDF matching', 'Cosine similarity', 'LLM integration', 'Screening workflow'],
      stack: ['Streamlit', 'TF-IDF', 'Cosine Similarity', 'Groq LLM', 'NLP']
    }
  },
  {
    title: 'Smart Expense Tracker',
    sub: 'Backend/API and testing project',
    desc: 'A backend-focused expense tracking project with Swagger/OpenAPI documentation and Jest testing, designed around API-driven financial operations.',
    tech: ['Backend', 'Swagger', 'Jest', 'API Design'],
    g1: '#0f766e',
    g2: '#10b981',
    emoji: '💸',
    category: 'Backend',
    repo: '',
    demo: '',
    featured: false,
    aspects: ['API development', 'Swagger docs', 'Jest testing', 'backend workflow'],
    caseStudy: {
      overview: 'Smart Expense Tracker is a backend-heavy project that emphasizes API structure and testability.',
      problem: 'Expense workflows need a consistent API and clear documentation.',
      solution: 'The project prioritizes clean API contracts and automated validation through Jest-based tests.',
      architecture: 'Service-oriented backend with API layers and documentation for easier maintenance.',
      highlights: ['Swagger/OpenAPI', 'Jest testing', 'API design', 'Clear backend structure'],
      stack: ['Backend', 'Swagger', 'Jest', 'API Design']
    }
  },
  {
    title: 'PartsLedger Take-Home',
    sub: 'Availability API and allocation project',
    desc: 'A technical take-home project focused on inventory availability, allocation logic, concurrency handling, debugging, and testing.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQL'],
    g1: '#eab308',
    g2: '#f97316',
    emoji: '📦',
    category: 'Backend',
    repo: '',
    demo: '',
    featured: false,
    aspects: ['availability API', 'allocation logic', 'concurrency handling', 'testing'],
    caseStudy: {
      overview: 'This project demonstrates engineering discipline around inventory logic and API behavior.',
      problem: 'Reliable allocation and inventory state handling require careful correctness and concurrency awareness.',
      solution: 'The app focuses on a clean backend design with functional allocation logic and validation-oriented testing.',
      architecture: 'FastAPI service with PostgreSQL-backed data models and business logic for availability and allocation.',
      highlights: ['Availability API', 'Allocation workflow', 'Concurrency thinking', 'Debugging and testing'],
      stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQL']
    }
  },
  {
    title: 'NestJS Role-Based Authentication',
    sub: 'Doctor / Patient authorization example',
    desc: 'A TypeScript-based NestJS project demonstrating role-based access control between doctor and patient roles with authentication and authorization flows.',
    tech: ['TypeScript', 'NestJS', 'PostgreSQL', 'RBAC'],
    g1: '#c084fc',
    g2: '#6366f1',
    emoji: '🔐',
    category: 'Backend',
    repo: '',
    demo: '',
    featured: false,
    aspects: ['authentication', 'authorization', 'role-based access control', 'doctor / patient roles'],
    caseStudy: {
      overview: 'This project illustrates health-application style authentication and authorization with distinct roles.',
      problem: 'Different user roles need different access levels and protected endpoints.',
      solution: 'The application is structured around role-based access control and clear service boundaries.',
      architecture: 'NestJS backend with PostgreSQL persistence and role-aware auth flows.',
      highlights: ['Doctor / Patient roles', 'Auth and authorization', 'RBAC design', 'TypeScript backend'],
      stack: ['TypeScript', 'NestJS', 'PostgreSQL', 'RBAC']
    }
  },
  {
    title: 'Online Voting System',
    sub: 'Role-based online voting web application',
    desc: 'A role-based online voting web application built with PHP and MySQL, focused on user roles and voting workflow structure.',
    tech: ['PHP', 'MySQL', 'Web App'],
    g1: '#059669',
    g2: '#0D9488',
    emoji: '🗳️',
    category: 'Full Stack',
    repo: '',
    demo: '',
    featured: false,
    aspects: ['role-based access', 'voting workflow', 'database-driven app'],
    caseStudy: {
      overview: 'This project demonstrates a role-oriented web app build using PHP and MySQL for a voting workflow.',
      problem: 'Voting workflows need clear roles and system organization.',
      solution: 'The app organizes access through role-based management and a simple, database-backed flow.',
      architecture: 'PHP backend with MySQL persistence for user and voting logic.',
      highlights: ['Role-based structure', 'Voting workflow', 'Database-driven app', 'Web application foundation'],
      stack: ['PHP', 'MySQL', 'Web App']
    }
  }
];

export const INTERNSHIPS = [
  {
    role: 'Web Development Intern',
    company: 'Zidio Development',
    period: 'Apr 2025 – Jul 2025',
    g1: '#7C3AED',
    g2: '#EC4899',
    points: [
      'Built a MERN blog platform with secure login, Cloudinary image uploads, and admin dashboard',
      'Developed an Excel analytics app for uploading files and generating 2D/3D charts with AI-powered insights',
    ],
  },
  {
    role: 'AI-DevOps Engineer Intern',
    company: 'Rooman Technologies',
    period: 'Oct 2024 – Mar 2025',
    g1: '#0891B2',
    g2: '#06B6D4',
    points: [
      'Designed and deployed CI/CD pipelines using Git, Docker, Flask, and TensorFlow',
      'Built a capstone project integrating AI-driven automation in DevOps workflows to improve team efficiency',
    ],
  },
  {
    role: 'Front-end Developer Intern',
    company: 'Bharat Intern',
    period: 'Aug 2023 – Nov 2023',
    g1: '#059669',
    g2: '#0D9488',
    points: [
      'Created responsive landing pages using HTML, CSS, and JavaScript',
      'Collaborated with designers to improve UI/UX and mentored new interns',
    ],
  },
];

export const CERTS = [
  { title: 'Generative AI Professional', issuer: 'Oracle Cloud', year: '2025', featured: true },
  { title: 'Data Analytics Simulation', issuer: 'Deloitte', year: '2025', featured: false },
  { title: 'Solutions Architecture', issuer: 'AWS', year: '2025', featured: false },
  { title: 'Data Visualisation', issuer: 'Tata', year: '2025', featured: false },
  { title: 'SQL Micro Course', issuer: 'Cuvette', year: '2024', featured: false },
  { title: 'Python Developer CPDA-24', issuer: 'Techcert Labs', year: '2024', featured: false },
  { title: 'AI-DevOps Engineer', issuer: 'Rooman Technologies', year: '2025', featured: false },
  { title: 'Web Development', issuer: 'Zidio Development', year: '2025', featured: false },
];

export const EDUCATION = [
  {
    degree: 'B.E. — Information Science & Engineering',
    institution: 'Sir M. Visvesvaraya Institute of Technology, Bangalore',
    period: 'Dec 2021 – June 2025',
    score: 'CGPA: 7.3 / 10',
    g1: '#7C3AED',
    g2: '#A855F7',
  },
  {
    degree: 'PUC — PCMB',
    institution: 'Gurukul Independent PU College, Kalaburgi',
    period: '2019 – 2021',
    score: '81.33%',
    g1: '#0891B2',
    g2: '#06B6D4',
  },
  {
    degree: 'SSLC',
    institution: 'Mount Carmel Convent School, Shahabad, Karnataka',
    period: '2019',
    score: '86.08%',
    g1: '#059669',
    g2: '#10B981',
  },
];

export const gradient = (g1, g2, deg = '135deg') => `linear-gradient(${deg}, ${g1}, ${g2})`;

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true },
});

export const FLOAT_TAGS = ['<React />', 'Node.js', 'MongoDB', 'Python', 'Docker', 'AI/ML'];

export const SOCIAL_LINKS = [
  { I: Github, href: 'https://github.com/Suguresh7128', label: 'GitHub' },
  { I: Linkedin, href: 'https://www.linkedin.com/in/suguresh-a-y-57675b22b', label: 'LinkedIn' },
  { I: Mail, href: 'mailto:sugureshay8@gmail.com', label: 'Email' },
  { I: Phone, href: 'tel:+919480639134', label: 'Phone' },
];

export const ABOUT_STATS = [
  { label: 'Featured Projects', val: '4+', I: Code2, g: gradient('#7C3AED', '#A855F7') },
  { label: 'Certifications', val: '8', I: Award, g: gradient('#DB2777', '#EC4899') },
  { label: 'Internships', val: '3', I: Briefcase, g: gradient('#0891B2', '#06B6D4') },
  { label: 'CGPA', val: '7.3', I: BookOpen, g: gradient('#059669', '#10B981') },
];

export const CONTACT_ITEMS = [
  { I: Mail, label: 'sugureshay8@gmail.com', href: 'mailto:sugureshay8@gmail.com', c: '#a78bfa' },
  { I: Phone, label: '+91-9480639134', href: 'tel:+919480639134', c: '#a78bfa' },
  { I: Github, label: 'github.com/Suguresh7128', href: 'https://github.com/Suguresh7128', c: '#a78bfa' },
  { I: Linkedin, label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/suguresh-a-y-57675b22b', c: '#a78bfa' },
];

export const TOOL_ICONS = { Code2, Database, Cloud, Wrench, Award, BookOpen, Briefcase, Terminal, Globe, Cpu };

