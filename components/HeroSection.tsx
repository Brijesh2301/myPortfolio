"use client";

import Image from "next/image";

import { BookType, Type } from "lucide-react";
import { motion } from "motion/react";
import { TypewriterEffectSmoothDemo } from "./TypeWriter";
// import { ContainerTextFlipDemo } from "./TypeWriter2";

export function HeroSectionOne() {
  return (
    <div className="relative mx-auto  flex max-w-7xl flex-col items-center justify-center">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h4 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-3xl lg:text-5xl dark:text-slate-300">
          {/* First Line */}
          <div>
            {"Hi There! 👋".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 text-align-left inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Second Line */}
          <div>
            {"I'M Brijesh Kushwaha".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block    bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 bg-clip-text text-transparent "
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h4>
      
            
         
        <TypewriterEffectSmoothDemo />

        <div className="container mx-auto p-8 pt-6">
          <h1 className="mb-4 text-center text-3xl font-bold">
            LET ME INTRODUCE MYSELF
          </h1>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Left box — Bio text */}
            <div className="md:col-span-3 h-80 overflow-y-auto  bg-neutral-100 dark:bg-neutral-800 flex rounded-lg p-6 shadow-sm items-start">
              <p className="text-lg font-medium text-left leading-relaxed text-neutral-700 dark:text-neutral-200">
                I'm a Software Engineer who loves transforming ideas into
                reliable, scalable products. Over time, I've explored several
                technologies and found my passion in building high-performance
                systems and intuitive user experiences. I'm always eager to
                learn new tools and techniques to stay at the forefront of the
                industry. Proficient in JavaScript, TypeScript, React, Node.js,
                and MongoDB, I enjoy working on projects that challenge me to
                grow and innovate. Whenever possible, I love building projects
                with Node.js and modern frameworks like React.js and Next.js.
              </p>
            </div>

            {/* Right box — Profile image */}
            <div className="md:col-span-1 h-80 bg-neutral-100 dark:bg-neutral-800 flex rounded-lg shadow-sm overflow-hidden relative">
              <Image
                src="/image.png"
                alt="Profile Photo"
                fill
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        ></motion.div>
      </div>
    </div>
  );
}
