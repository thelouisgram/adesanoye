"use client";

import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { FunButton } from "@/components/FunButton";

const accents = ["bg-lime", "bg-teal text-lime", "bg-ink text-lime"];

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      className="scroll-mt-20 border-t border-line bg-bg px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            Take a peek
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
            Ways to work together
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Landing pages, full websites, or product UI — scoped clearly, built
            carefully, shipped with taste.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <motion.article
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-cream-panel p-8 md:p-10"
                whileHover={
                  reduce
                    ? undefined
                    : { y: -8, rotate: i === 1 ? 0 : i === 0 ? -1 : 1 }
                }
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              >
                <span
                  className={`mb-5 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${accents[i]}`}
                >
                  {service.timing}
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-ink-soft">
                  {service.description}
                </p>
                <div className="mt-8">
                  <FunButton href="/apply" variant="outline">
                    Gimme the details →
                  </FunButton>
                </div>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-4 -right-2 font-display text-[6rem] font-extrabold leading-none text-ink/[0.04] transition-colors group-hover:text-teal/10"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
