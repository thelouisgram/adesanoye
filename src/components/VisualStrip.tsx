"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const frames = [
  { src: "/vibe/design01.jpg", label: "Design" }, 
  { src: "/vibe/laptop.jpg", label: "Build" },
  { src: "/vibe/web.jpg", label: "Launch" },
];

export function VisualStrip() {
  const reduce = useReducedMotion();

  return (
    <section className="overflow-hidden border-y border-line bg-ink px-5 py-16 text-cream-panel md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              From first sketch to live site — without the chaos.
            </h2>
            <p className="max-w-sm text-cream-panel/65">
              Strategy, design, and engineering in one seat. Fewer handoffs.
              Cleaner results.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {frames.map((frame, i) => (
            <Reveal key={frame.src} delay={i * 0.08}>
              <motion.figure
                className="group relative aspect-4/3 overflow-hidden rounded-2xl"
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src={frame.src}
                  alt={frame.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/10 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 font-display text-lg font-bold text-lime">
                  {String(i + 1).padStart(2, "0")} · {frame.label}
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
