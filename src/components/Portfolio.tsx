"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { FunButton } from "@/components/FunButton";

export function Portfolio() {
  const reduce = useReducedMotion();

  return (
    <section
      id="work"
      className="scroll-mt-20 border-t border-line bg-cream-panel px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Work
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
              Selected projects
            </h2>
            <p className="mt-3 max-w-md text-ink-soft">
              Health, hospitality, creative, architecture, retail — different
              industries, same standard.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <FunButton href="/apply" variant="solid">
              Commission something →
            </FunButton>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const featured = index === 0;
            return (
              <Reveal
                key={project.id}
                delay={index * 0.05}
                className={featured ? "sm:col-span-2 lg:col-span-1 lg:row-span-1" : ""}
              >
                <motion.a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-bg"
                  whileHover={reduce ? undefined : { y: -4 }}
                  transition={{ type: "spring", stiffness: 340, damping: 24 }}
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#061018]">
                    <Image
                      src={project.cover}
                      alt=""
                      fill
                      className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] ${
                        project.darkOverlay
                          ? "[filter:hue-rotate(195deg)_saturate(0.85)_brightness(0.72)_contrast(1.1)]"
                          : ""
                      }`}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      className={`absolute inset-0 transition-opacity ${
                        project.darkOverlay
                          ? "bg-gradient-to-t from-[#02080f]/85 via-[#0a2a3d]/55 to-[#0c5548]/25 group-hover:opacity-90"
                          : "bg-ink/10 group-hover:bg-ink/0"
                      }`}
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-cream-panel px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-teal">{project.role}</p>
                      </div>
                      <span className="font-display text-sm font-bold text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                      {project.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-all group-hover:gap-3">
                      View live
                      <span
                        aria-hidden
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-lime text-ink transition-transform group-hover:translate-x-0.5"
                      >
                        ↗
                      </span>
                    </span>
                  </div>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
