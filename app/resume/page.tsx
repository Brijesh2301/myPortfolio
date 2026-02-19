"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// ─── Edit karo apna data yahan ───────────────────────────
const resumeData = {
  name: "Brijesh Kushwaha",
  title: "Software Developer",
  email: "brijeshkushwaha@email.com",
  phone: "+91 7860032690",
  location: "India",
  github: "github.com/brijesh2301",
  linkedin: "linkedin.com/in/brijesh-kushwaha",
  summary:
    "Passionate Full Stack Developer with 1+ year of experience building scalable web applications. Proficient in React, Next.js, Node.js, and MongoDB. Love crafting elegant solutions to complex problems.",

  experience: [
    {
      id: 1,
      role: "Junior Frontend Developer",
      company: "Alobha technologies Pvt Ltd",
      duration: "March 2025 – May 2025",
      location: "Remote",
      points: [
        "Led UI architecture for a SaaS dashboard serving 10k+ users",
        "Reduced bundle size by 40% through code splitting and lazy loading",
        "Mentored 3 junior developers and conducted code reviews",
      ],
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "X-strategy LLP",
      duration: "Sep 2025 – Feb 2026",
      location: "India",
      points: [
        "Built MERN stack apps from scratch, owned backend and frontend",
        "Implemented JWT authentication and role-based access control",
        "Integrated Razorpay payment gateway for e-commerce platform",
      ],
    },
    {
      id: 3,
      role: "Freelance Developer",
      company: "Self-employed",
      duration: "Jan 2021 – May 2022",
      location: "Remote",
      points: [
        "Delivered 15+ client projects in React, Node.js and MongoDB",
        "Built REST APIs consumed by mobile and web clients",
        "Maintained 100% client satisfaction rate",
      ],
    },
  ],

  education: [
    {
      id: 1,
      degree: "B.Tech Information Tecchnology",
      institution: "University Name",
      duration: "2019 – 2023",
      grade: "74%",
    },
    {
      id: 2,
      degree: "12th Science (PCM)",
      institution: "School Name",
      duration: "2015 – 2017",
      grade: "81%",
    },
  ],

  skills: {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    Backend: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    Tools: ["Git", "Docker", "Figma", "VS Code", "Vercel", "Postman"],
  },

  certifications: [
    { name: "React Developer Certification", issuer: "Meta", year: "2023" },
    { name: "Node.js Developer", issuer: "OpenJS Foundation", year: "2022" },
    { name: "MongoDB Associate Developer", issuer: "MongoDB", year: "2022" },
  ],
};

// ─── Editable field component ────────────────────────────
function EditableField({
  value,
  onSave,
  className = "",
  multiline = false,
}: {
  value: string;
  onSave: (val: string) => void;
  className?: string;
  multiline?: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [temp, setTemp] = useState(value);

  const handleSave = () => {
    onSave(temp);
    setEditing(false);
  };

  if (editing) {
    return (
      <span className="inline-flex flex-col gap-1 w-full">
        {multiline ? (
          <textarea
            autoFocus
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            className={`bg-neutral-800 border border-sky-500/50 rounded-lg px-2 py-1 text-white resize-none outline-none w-full ${className}`}
            rows={3}
          />
        ) : (
          <input
            autoFocus
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            className={`bg-neutral-800 border border-sky-500/50 rounded-lg px-2 py-1 text-white outline-none w-full ${className}`}
          />
        )}
        <span className="flex gap-2">
          <button
            onClick={handleSave}
            className="text-xs px-3 py-1 bg-sky-500 text-black rounded-lg font-semibold hover:bg-sky-400 transition-colors"
          >
            Save
          </button>
          <button
            onClick={() => { setTemp(value); setEditing(false); }}
            className="text-xs px-3 py-1 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors"
          >
            Cancel
          </button>
        </span>
      </span>
    );
  }

  return (
    <span
      className={`group relative cursor-pointer ${className}`}
      onClick={() => setEditing(true)}
      title="Click to edit"
    >
      {value}
      <span className="ml-1 opacity-0 group-hover:opacity-100 text-sky-400 text-xs transition-opacity">
        ✏️
      </span>
    </span>
  );
}

export default function ResumePage() {
  const [data, setData] = useState(resumeData);
  const [editMode, setEditMode] = useState(false);

  const update = (path: string, value: string) => {
    setData((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      const keys = path.split(".");
      let obj = next;
      for (let i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = value;
      return next;
    });
  };

  const handlePrint = () => window.print();

  return (
    <main className="min-h-screen bg-[#080b10] text-white overflow-x-hidden">
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20 print:hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-sky-500/5 blur-[80px] rounded-full pointer-events-none print:hidden" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-28 pb-16">

        {/* ── Top action bar ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8 print:hidden"
        >
          <div>
            <h1 className="text-2xl font-bold">My Resume</h1>
            <p className="text-neutral-500 text-sm mt-1">
              {editMode ? "✏️ Click any field to edit" : "View & download your resume"}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setEditMode(!editMode)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                editMode
                  ? "bg-sky-500 text-black border-sky-500"
                  : "bg-white/[0.04] border-white/10 text-neutral-300 hover:border-white/20 hover:text-white"
              }`}
            >
              {editMode ? "✅ Done Editing" : "✏️ Edit Resume"}
            </button>
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-white text-black hover:bg-neutral-200 transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              🖨️ Download / Print
            </button>
          </div>
        </motion.div>

        {/* Edit mode banner */}
        {editMode && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 px-4 py-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-mono text-center print:hidden"
          >
            ✏️ Edit Mode ON — Click any text to edit it
          </motion.div>
        )}

        {/* ══════════════════════════════════════════════
            RESUME CARD — This is what gets printed
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-900 border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl print:rounded-none print:border-none print:shadow-none print:bg-white print:text-black"
        >

          {/* ── Header ── */}
          <div className="relative bg-gradient-to-br from-sky-500/10 via-neutral-900 to-violet-500/10 p-8 md:p-10 border-b border-white/[0.06]">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              {/* Name & title */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {editMode ? (
                    <EditableField
                      value={data.name}
                      onSave={(v) => update("name", v)}
                      className="text-4xl font-bold"
                    />
                  ) : data.name}
                </h2>
                <p className="text-sky-400 text-xl font-semibold mb-4">
                  {editMode ? (
                    <EditableField
                      value={data.title}
                      onSave={(v) => update("title", v)}
                    />
                  ) : data.title}
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-xl">
                  {editMode ? (
                    <EditableField
                      value={data.summary}
                      onSave={(v) => update("summary", v)}
                      multiline
                    />
                  ) : data.summary}
                </p>
              </div>

              {/* Contact info */}
              <div className="flex flex-col gap-2 text-sm min-w-[200px]">
                {[
                  { icon: "📧", key: "email" },
                  { icon: "📱", key: "phone" },
                  { icon: "📍", key: "location" },
                  { icon: "🐙", key: "github" },
                  { icon: "💼", key: "linkedin" },
                ].map(({ icon, key }) => (
                  <div key={key} className="flex items-center gap-2 text-neutral-300">
                    <span>{icon}</span>
                    {editMode ? (
                      <EditableField
                        value={(data as any)[key]}
                        onSave={(v) => update(key, v)}
                        className="text-sm"
                      />
                    ) : (
                      <span className="font-mono text-xs">{(data as any)[key]}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-10">

            {/* ── Experience ── */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sm">
                  💼
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-widest font-mono">
                  Experience
                </h3>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>

              <div className="space-y-6">
                {data.experience.map((exp, i) => (
                  <div key={exp.id} className="relative pl-5 border-l border-white/[0.06] hover:border-sky-500/30 transition-colors duration-300">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-sky-500/40 border border-sky-500" />
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                      <div>
                        <h4 className="font-bold text-white">
                          {editMode ? (
                            <EditableField
                              value={exp.role}
                              onSave={(v) => update(`experience.${i}.role`, v)}
                            />
                          ) : exp.role}
                        </h4>
                        <p className="text-sky-400 text-sm font-mono">
                          {editMode ? (
                            <EditableField
                              value={exp.company}
                              onSave={(v) => update(`experience.${i}.company`, v)}
                            />
                          ) : exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono text-neutral-500 bg-neutral-800 px-3 py-1 rounded-full border border-white/[0.06]">
                          {editMode ? (
                            <EditableField
                              value={exp.duration}
                              onSave={(v) => update(`experience.${i}.duration`, v)}
                            />
                          ) : exp.duration}
                        </span>
                        <p className="text-neutral-600 text-xs mt-1">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-1 mt-2">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex gap-2 text-sm text-neutral-400">
                          <span className="text-sky-500 mt-0.5 flex-shrink-0">▸</span>
                          {editMode ? (
                            <EditableField
                              value={point}
                              onSave={(v) => update(`experience.${i}.points.${j}`, v)}
                              className="text-sm"
                            />
                          ) : point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Education ── */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-sm">
                  🎓
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-widest font-mono">
                  Education
                </h3>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>

              <div className="space-y-4">
                {data.education.map((edu, i) => (
                  <div key={edu.id} className="flex flex-col md:flex-row md:items-center md:justify-between bg-neutral-800/40 rounded-xl p-4 border border-white/[0.04] hover:border-violet-500/20 transition-colors duration-300">
                    <div>
                      <h4 className="font-bold text-white">
                        {editMode ? (
                          <EditableField
                            value={edu.degree}
                            onSave={(v) => update(`education.${i}.degree`, v)}
                          />
                        ) : edu.degree}
                      </h4>
                      <p className="text-violet-400 text-sm font-mono">
                        {editMode ? (
                          <EditableField
                            value={edu.institution}
                            onSave={(v) => update(`education.${i}.institution`, v)}
                          />
                        ) : edu.institution}
                      </p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <span className="text-xs font-mono text-neutral-500 bg-neutral-800 px-3 py-1 rounded-full border border-white/[0.06]">
                        {editMode ? (
                          <EditableField
                            value={edu.duration}
                            onSave={(v) => update(`education.${i}.duration`, v)}
                          />
                        ) : edu.duration}
                      </span>
                      <p className="text-green-400 text-xs font-mono mt-1">{edu.grade}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Skills ── */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-sm">
                  ⚡
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-widest font-mono">
                  Skills
                </h3>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {Object.entries(data.skills).map(([cat, items]) => (
                  <div key={cat} className="bg-neutral-800/40 rounded-xl p-4 border border-white/[0.04]">
                    <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">{cat}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, i) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-neutral-300 text-xs font-mono hover:text-sky-400 hover:border-sky-500/30 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Certifications ── */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-sm">
                  🏆
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-widest font-mono">
                  Certifications
                </h3>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {data.certifications.map((cert, i) => (
                  <div key={i} className="bg-neutral-800/40 rounded-xl p-4 border border-white/[0.04] hover:border-orange-500/20 transition-colors duration-300">
                    <p className="font-semibold text-white text-sm mb-1">
                      {editMode ? (
                        <EditableField
                          value={cert.name}
                          onSave={(v) => update(`certifications.${i}.name`, v)}
                        />
                      ) : cert.name}
                    </p>
                    <p className="text-orange-400 text-xs font-mono">{cert.issuer}</p>
                    <p className="text-neutral-600 text-xs mt-1">{cert.year}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </motion.div>

        {/* ── Bottom note ── */}
        <p className="text-center text-neutral-600 text-xs font-mono mt-6 print:hidden">
          💡 Click "Edit Resume" to modify any field • Click "Download / Print" to save as PDF
        </p>
      </div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body { background: white !important; color: black !important; }
          .print\\:hidden { display: none !important; }
          nav { display: none !important; }
        }
      `}</style>
    </main>
  );
}