"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
} as any;

const projects = [
  {
    id: 1,
    title: "DevTinder WebApp",
    description:
      "A full-stack e-commerce platform with product management, cart, payment integration via Razorpay, and admin dashboard. Built with MERN stack.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Razorpay"],
    github: "https://github.com/brijesh2301/devtinder",
    live: "http://13.201.171.81/",
    category: "Full Stack",
    status: "Live",
    featured: true,
    gradient: "from-sky-500/10 to-blue-600/10",
    border: "hover:border-sky-500/40",
    accent: "text-sky-400",
    badge: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  },
  {
    id: 2,
    title: "AI Chat Application",
    description:
      "Real-time AI chat app using OpenAI API with conversation history, markdown rendering, and code highlighting support.",
    tags: ["Next.js", "TypeScript", "OpenAI", "Tailwind", "Prisma"],
    github: "https://github.com/yourusername/project",
    live: "https://yourproject.vercel.app",
    category: "AI / ML",
    status: "Live",
    featured: true,
    gradient: "from-violet-500/10 to-purple-600/10",
    border: "hover:border-violet-500/40",
    accent: "text-violet-400",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A Trello-inspired kanban board with drag-and-drop, real-time updates via WebSockets, and team collaboration features.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/yourusername/project",
    live: null,
    category: "Full Stack",
    status: "In Progress",
    featured: true,
    gradient: "from-green-500/10 to-emerald-600/10",
    border: "hover:border-green-500/40",
    accent: "text-green-400",
    badge: "bg-green-500/10 text-green-400 border-green-500/20",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "This portfolio — built with Next.js 14, Tailwind CSS, Aceternity UI, and Framer Motion animations.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.vercel.app",
    category: "Frontend",
    status: "Live",
    featured: false,
    gradient: "from-orange-500/10 to-amber-600/10",
    border: "hover:border-orange-500/40",
    accent: "text-orange-400",
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
  {
    id: 5,
    title: "REST API Boilerplate",
    description:
      "Production-ready Express.js REST API with JWT auth, rate limiting, input validation, and Docker support.",
    tags: ["Node.js", "Express", "MongoDB", "Docker", "JWT"],
    github: "https://github.com/yourusername/project",
    live: null,
    category: "Backend",
    status: "Live",
    featured: false,
    gradient: "from-rose-500/10 to-pink-600/10",
    border: "hover:border-rose-500/40",
    accent: "text-rose-400",
    badge: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description:
      "Beautiful weather dashboard with 7-day forecast, location search, and animated weather icons using OpenWeatherMap API.",
    tags: ["React", "TypeScript", "OpenWeatherMap", "Tailwind"],
    github: "https://github.com/yourusername/project",
    live: "https://yourproject.vercel.app",
    category: "Frontend",
    status: "Live",
    featured: false,
    gradient: "from-cyan-500/10 to-teal-600/10",
    border: "hover:border-cyan-500/40",
    accent: "text-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend", "AI / ML"];

// GitHub contribution graph component
function GitHubGraph() {
  // Generate mock contribution data (replace with real GitHub API)
  const weeks = 52;
  const days = 7;
  const levels = [0, 1, 2, 3, 4];
  
  const data = Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: days }, (_, d) => {
      // Simulate realistic contribution pattern
      const rand = Math.random();
      if (rand < 0.35) return 0;
      if (rand < 0.55) return 1;
      if (rand < 0.75) return 2;
      if (rand < 0.90) return 3;
      return 4;
    })
  );

  const colors = [
    "bg-neutral-800",
    "bg-sky-900",
    "bg-sky-700",
    "bg-sky-500",
    "bg-sky-400",
  ];

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mb-24"
    >
      <motion.div custom={0} variants={fadeUp} className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          GitHub{" "}
          <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
            Activity
          </span>
        </h2>
        <p className="text-neutral-500 mt-3 text-sm">My open source contributions</p>
      </motion.div>

      <motion.div
        custom={1} variants={fadeUp}
        className="bg-neutral-900/80 border border-white/[0.06] rounded-2xl p-6 md:p-8 hover:border-sky-500/20 transition-all duration-300"
      >
        {/* GitHub profile link */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-lg">
              🐙
            </div>
            <div>
              <p className="font-semibold text-white text-sm">brijesh2301</p>
              <p className="text-neutral-500 text-xs font-mono">GitHub Profile</p>
            </div>
          </div>
          <a
            href="https://github.com/brijesh2301"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-neutral-300 hover:text-white hover:border-white/20 text-sm transition-all duration-200"
          >
            View Profile ↗
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Contributions", value: "847" },
            { label: "Repositories", value: "34" },
            { label: "Pull Requests", value: "120" },
          ].map((s) => (
            <div key={s.label} className="text-center bg-neutral-800/50 rounded-xl py-3 px-2">
              <p className="text-xl font-bold text-sky-400">{s.value}</p>
              <p className="text-neutral-500 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Contribution grid */}
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            {/* Month labels */}
            <div className="flex gap-[3px] mb-1 pl-0">
              {months.map((m, i) => (
                <div
                  key={m}
                  className="text-neutral-600 text-[10px] font-mono"
                  style={{ width: `${(weeks / 12) * 13}px` }}
                >
                  {m}
                </div>
              ))}
            </div>

            {/* Grid */}
            <div className="flex gap-[3px]">
              {data.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((level, di) => (
                    <div
                      key={di}
                      title={`${level} contributions`}
                      className={`w-[10px] h-[10px] rounded-sm ${colors[level]} transition-all duration-200 hover:scale-125 cursor-pointer`}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 mt-3 justify-end">
              <span className="text-neutral-600 text-[10px] font-mono">Less</span>
              {colors.map((c, i) => (
                <div key={i} className={`w-[10px] h-[10px] rounded-sm ${c}`} />
              ))}
              <span className="text-neutral-600 text-[10px] font-mono">More</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const featured = filtered.filter((p) => p.featured);
  const others = filtered.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-[#080b10] text-white overflow-x-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">

        {/* ── Hero ── */}
        <motion.div initial="hidden" animate="show" className="mb-16 text-center">
          <motion.div custom={0} variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="font-mono text-violet-400 text-xs tracking-widest uppercase">My Work</span>
          </motion.div>
          <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>
          <motion.p custom={2} variants={fadeUp} className="max-w-xl mx-auto text-neutral-400 text-lg leading-relaxed">
            Things I've built — from full-stack apps to open source tools. Each project is a story of problem-solving and learning.
          </motion.p>
        </motion.div>

        {/* ── Filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-mono text-sm transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-sky-500 text-black border-sky-500 font-semibold"
                  : "bg-white/[0.03] text-neutral-400 border-white/[0.08] hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── Featured Projects ── */}
        {featured.length > 0 && (
          <div className="space-y-6 mb-8">
            {featured.map((project, i) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className={`relative group bg-neutral-900/80 border border-white/[0.06] rounded-2xl p-6 md:p-8 transition-all duration-300 overflow-hidden ${project.border}`}
              >
                {/* Gradient bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative grid md:grid-cols-3 gap-6 items-center">
                  {/* Info */}
                  <div className="md:col-span-2">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`font-mono text-xs px-3 py-1 rounded-full border ${project.badge}`}>
                        {project.category}
                      </span>
                      <span className={`font-mono text-xs px-3 py-1 rounded-full border ${
                        project.status === "Live"
                          ? "bg-green-500/10 text-green-400 border-green-500/20"
                          : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                      }`}>
                        {project.status === "Live" ? "🟢 Live" : "🟡 In Progress"}
                      </span>
                      <span className="font-mono text-xs px-3 py-1 rounded-full border bg-white/[0.04] text-neutral-500 border-white/[0.06]">
                        ⭐ Featured
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-neutral-400 text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-neutral-300 hover:text-white hover:border-white/20 text-sm font-mono transition-all duration-200"
                      >
                        🐙 GitHub
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-mono transition-all duration-200 ${project.accent} border-current bg-current/10 hover:bg-current/20`}
                        >
                          🔗 Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Visual placeholder */}
                  <div className={`h-40 md:h-48 rounded-xl bg-gradient-to-br ${project.gradient} border border-white/[0.06] flex items-center justify-center`}>
                    <span className={`text-6xl font-bold opacity-20 ${project.accent}`}>
                      {project.title[0]}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* ── Other Projects Grid ── */}
        {others.length > 0 && (
          <div className="mb-24">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-neutral-500 font-mono text-sm uppercase tracking-widest text-center mb-6"
            >
              Other Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-5">
              {others.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className={`relative group bg-neutral-900/80 border border-white/[0.06] rounded-2xl p-6 transition-all duration-300 overflow-hidden ${project.border}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <span className={`font-mono text-xs px-3 py-1 rounded-full border ${project.badge}`}>
                        {project.category}
                      </span>
                      <span className={`font-mono text-xs px-2 py-1 rounded-full border ${
                        project.status === "Live"
                          ? "bg-green-500/10 text-green-400 border-green-500/20"
                          : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                      }`}>
                        {project.status === "Live" ? "🟢" : "🟡"}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-neutral-500 text-xs font-mono">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-neutral-600 text-xs font-mono">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-mono text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
                        🐙 GitHub ↗
                      </a>
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                          className={`text-xs font-mono hover:opacity-80 transition-opacity flex items-center gap-1 ${project.accent}`}>
                          🔗 Live ↗
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* ── GitHub Contribution Graph ── */}
        <GitHubGraph />

        {/* ── Bottom CTA ── */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            custom={0} variants={fadeUp}
            className="inline-flex flex-col items-center gap-4 bg-neutral-900/80 border border-white/[0.06] rounded-3xl px-10 py-8"
          >
            <p className="text-neutral-400 text-sm">Want to see more of my work?</p>
            <h3 className="text-2xl font-bold">Check out my GitHub</h3>
            <a
              href="https://github.com/brijesh2301"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-8 py-3 rounded-xl bg-white text-black font-semibold text-sm transition-all duration-200 hover:bg-neutral-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            >
              🐙 Visit GitHub →
            </a>
          </motion.div>
        </motion.div>

      </div>
    </main>
  );
}