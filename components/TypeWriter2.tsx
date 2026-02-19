"use client";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function ContainerTextFlipDemo() {
  const words = ["better", "modern", "beautiful", "awesome"];
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative mb-6 w-full text-center text-3xl md:text-5xl lg:text-6xl",
        "font-bold tracking-tight leading-tight",
        "text-zinc-700 dark:text-zinc-100",
        "flex flex-col items-center justify-center gap-3"
      )}
    >
      {/* Line 1 */}
      <span>Make your websites look 10x</span>

      {/* Line 2 — ContainerTextFlip on its own line so it's always centered */}
      <ContainerTextFlip words={words} />
    </motion.h1>
  );
}

export default ContainerTextFlipDemo;
