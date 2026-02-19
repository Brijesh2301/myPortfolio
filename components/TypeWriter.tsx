"use client";

import { useState, useEffect } from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const roles = [
  {
    label: "Frontend Developer",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    label: "MERN Stack Developer",
    className: "text-green-500 dark:text-green-500",
  },
  {
    label: "Full Stack Developer",
    className: "text-purple-500 dark:text-purple-500",
  },
];

export function TypewriterEffectSmoothDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0); // forces TypewriterEffectSmooth to remount & replay

  // How long to show each role before switching (ms)
  // Tune this to match how long the typewriter animation takes
  const DISPLAY_DURATION = 3500;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
      setKey((prev) => prev + 1); // remount the component so animation replays
    }, DISPLAY_DURATION);

    return () => clearTimeout(timer);
  }, [key]); // re-run every time key changes (i.e. after each cycle)

  const currentRole = roles[currentIndex];

  const words = [
    { text: "I" },
    { text: "am" },
    { text: "a" },
    {
      text: currentRole.label,
      className: currentRole.className,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <TypewriterEffectSmooth
        key={key}  // key change = full remount = animation restarts
        words={words}
      />
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
    </div>
  );
}

export default TypewriterEffectSmoothDemo;