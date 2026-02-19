"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/brijesh2301",
    icon: <FaGithub className="text-lg" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/brijesh-kushwaha",
    icon: <FaLinkedin className="text-lg" />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/brijesh2301",
    icon: <FaTwitter className="text-lg" />,
  },
  {
    label: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&to=brijeshkushwah386@gmail.com",
    icon: <MdEmail className="text-lg" />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080b10] border-t border-white/[0.06] text-white ">
      {/* ── Main content ── */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Brijesh<span className="text-sky-400">.</span>
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              Full Stack Developer crafting high-performance web apps with clean
              code and intuitive design.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 rounded-xl bg-neutral-900 border border-white/[0.06] flex items-center justify-center text-base hover:border-sky-500/40 hover:bg-sky-500/10 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-neutral-400 hover:text-sky-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-sky-400 transition-all duration-200 inline-block" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">
              Get In Touch
            </h4>
            <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
              Open to freelance projects and full-time opportunities.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&to=brijeshkushwah386@gmail.com&su=Hire Me&body=Hi Brijesh,"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-black text-sm font-semibold transition-all duration-200 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
            >
              Hire Me →
            </a>
          </div>
        </div>
      </div>

      {/* ── Copyright strip ── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-neutral-600 text-xs font-mono">
            © {year} Brijesh Kushwah. All rights reserved.
          </p>
          <p className="text-neutral-700 text-xs font-mono">
            Built with <span className="text-sky-500">Next.js</span> ·{" "}
            <span className="text-sky-500">Tailwind CSS</span> ·{" "}
            <span className="text-sky-500">Aceternity UI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
