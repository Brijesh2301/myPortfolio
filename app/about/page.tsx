"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiVscodium,
  SiVercel,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
} as any;

const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Built", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Open Source PRs", value: "0" },
];

const skills = {
  Frontend: [
    { name: "React", icon: <SiReact className="text-sky-400 text-xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-xl" /> },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-400 text-xl" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400 text-xl" />,
    },
    {
      name: "Framer Motion",
      icon: <SiFramer className="text-pink-400 text-xl" />,
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-400 text-xl" />,
    },
    { name: "Express", icon: <SiExpress className="text-white text-xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-xl" /> },
    { name: "REST APIs", icon: <TbApi className="text-orange-400 text-xl" /> },
    {
      name: "JWT Auth",
      icon: <SiJsonwebtokens className="text-rose-400 text-xl" />,
    },
  ],
  Tools: [
    { name: "Git", icon: <SiGit className="text-orange-500 text-xl" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-400 text-xl" /> },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="text-blue-500 text-xl" />,
    },
    { name: "VS Code", icon: <SiVscodium className="text-blue-400 text-xl" /> },
    { name: "Vercel", icon: <SiVercel className="text-white text-xl" /> },
  ],
};
const timeline = [
  {
    year: "2025",
    title: "Junior Frontend Developer",
    place: "Noida",
    desc: "Crating the Website Using Modern Technologies and FrameWorks",
  },
  {
    year: "2024-2025",
    title: "Software Engineer",
    place: "Noida",
    desc: "Built MERN stack apps from scratch, owned backend and frontend.",
  },
  {
    year: "2022",
    title: "Started Freelancing",
    place: "Self-employed",
    desc: "Delivered 15+ client projects in React, Node.js and MongoDB.",
  },
  {
    year: "2023",
    title: "B.Tech Infromation Technology",
    place: "VBSPU, Jaunpur, U.P",
    desc: "Graduated with B.Tech (I.T).  Web Dev, and OS, DBMS, COMPUTER NETWORKs",
  },
];

const categoryColor: Record<string, string> = {
  Frontend: "from-sky-500 to-blue-600",
  Backend: "from-green-500 to-emerald-600",
  Tools: "from-violet-500 to-purple-600",
};

const categoryBorder: Record<string, string> = {
  Frontend: "hover:border-sky-500/40",
  Backend: "hover:border-green-500/40",
  Tools: "hover:border-violet-500/40",
};

const categoryText: Record<string, string> = {
  Frontend: "text-sky-400",
  Backend: "text-green-400",
  Tools: "text-violet-400",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080b10] text-white overflow-x-hidden">
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* ── Hero ── */}
        <motion.div
          initial="hidden"
          animate="show"
          className="mb-24 text-center"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="font-mono text-sky-400 text-xs tracking-widest uppercase">
              About Me
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Crafting digital
            <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              experiences
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="max-w-2xl mx-auto text-neutral-400 text-lg leading-relaxed"
          >
            I'm a Software Engineer who loves transforming ideas into reliable,
            scalable products. Proficient in JavaScript, TypeScript, React,
            Node.js, and MongoDB — I enjoy working on projects that challenge me
            to grow and innovate.
          </motion.p>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={fadeUp}
              className="relative group bg-neutral-900/80 border border-white/[0.06] rounded-2xl p-6 text-center overflow-hidden hover:border-sky-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-sky-500/0 group-hover:from-sky-500/5 group-hover:to-violet-500/5 transition-all duration-500" />
              <p className="text-4xl font-bold text-sky-400 mb-1">
                {stat.value}
              </p>
              <p className="text-neutral-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bio + Photo ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-10 mb-24 items-center"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="md:col-span-3 space-y-5"
          >
            <h2 className="text-3xl font-bold">
              Who I{" "}
              <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                am
              </span>
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              I'm a passionate Full-Stack Developer based in{" "}
              <span className="text-white font-medium">Your India</span>. I love
              building products that live at the intersection of design and
              engineering.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              When I'm not coding, I'm exploring new frameworks, contributing to
              open source, or deep-diving into system design. I believe great
              software is both technically sound and a joy to use.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              I'm currently{" "}
              <span className="text-sky-400 font-medium">
                open to new opportunities
              </span>{" "}
              — let's build something remarkable together.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://mail.google.com/mail/?view=cm&to=brijeshkushwah386@gmail.com&su=Hire Me&body=Hi Brijesh,"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]"
              >
                Hire Me →
              </a>
              <a
                href="/Brijesh.pdf"
                target="_blank"
                className="px-6 py-3 rounded-xl border border-white/10 hover:border-sky-500/40 text-neutral-300 hover:text-white font-semibold text-sm transition-all duration-200"
              >
                Download CV ↓
              </a>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUp}
            className="md:col-span-2 relative"
          >
            <div className="relative h-70 md:h-96 rounded-2xl overflow-hidden border border-white/[0.06]">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-violet-500/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-sky-500/20 to-violet-500/20 border border-sky-500/30 flex items-center justify-center text-5xl font-bold text-sky-400 mx-auto mb-3">
                    YN
                  </div>
                  <p className="text-neutral-500 text-sm font-mono">
                    <img
                      className="object-fit"
                      src="image.png"
                      alt="my profile pic"
                    />
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b10]/70 to-transparent pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-4 bg-neutral-900 border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-xs text-neutral-500 font-mono mb-1">
                Current Status
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-sm font-semibold text-green-400">
                  Open to work
                </p>
              </div>
            </div>

            {/* Second floating badge */}
            <div className="absolute -top-4 -right-4 bg-neutral-900 border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-xs text-neutral-500 font-mono mb-1">
                Based in
              </p>
              <p className="text-sm font-semibold text-white">🇮🇳 India</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Skills with Icons ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Skills &{" "}
              <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="text-neutral-500 mt-3 text-sm">
              Tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                custom={i}
                variants={fadeUp}
                className={`bg-neutral-900/80 border border-white/[0.06] rounded-2xl p-6 transition-all duration-300 ${categoryBorder[category]}`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${categoryColor[category]} flex items-center justify-center`}
                  >
                    <span className="text-white text-xs font-bold">
                      {category[0]}
                    </span>
                  </div>
                  <h3
                    className={`font-mono text-sm font-semibold uppercase tracking-widest ${categoryText[category]}`}
                  >
                    {category}
                  </h3>
                </div>

                {/* Skills with icons */}
                <div className="space-y-2">
                  {items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.04] hover:bg-white/[0.06] hover:border-white/[0.08] transition-all duration-200 group cursor-default"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-neutral-300 text-sm group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Timeline ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              My{" "}
              <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-neutral-500 mt-3 text-sm">How I got here</p>
          </motion.div>

          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-sky-500 via-violet-500/50 to-transparent" />

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  custom={i}
                  variants={fadeUp}
                  className="flex gap-6"
                >
                  {/* Dot */}
                  <div className="mt-5 flex-shrink-0">
                    <div className="w-[38px] h-[38px] rounded-full border-2 border-sky-400 bg-[#080b10] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-sky-400" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-neutral-900/80 border border-white/[0.06] rounded-2xl p-5 hover:border-sky-500/20 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-sky-100 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sky-400 text-sm font-mono">
                          {item.place}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-neutral-500 bg-neutral-800 border border-white/[0.06] px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── CTA bottom ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="inline-flex flex-col items-center gap-4 bg-neutral-900/80 border border-white/[0.06] rounded-3xl px-10 py-8"
          >
            <p className="text-neutral-400 text-sm">
              Interested in working together?
            </p>
            <h3 className="text-2xl font-bold">Let's build something great</h3>
            <a
              href="mailto:brijeshkushwaha386@gmail.com"
              className="mt-2 px-8 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]"
              target="blank"
            >
              Get In Touch →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
