"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { FunButton } from "@/components/FunButton";

export function About() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-line bg-teal text-cream-panel"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:px-8 md:py-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">
            Oh hey — I’m Louis
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Physician mind. Builder hands.{" "}
            <span className="text-lime">Your new website ally.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-panel/85">
            I’m {site.name} — MD turned frontend engineer. I obsess over sites
            that don’t just look pretty; they actually work for your business.
            After years shipping production products for health and e-commerce
            clients, I help founders ditch the “good enough” vibe and get a
            presence that finally feels like them.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-cream-panel/85">
            Strategy, design, and clean engineering — so your site finally
            feels like your brand, not a placeholder.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <FunButton href="/apply" variant="lime">
              Let’s work together
            </FunButton>
            <FunButton href={site.techPortfolio} variant="ghost">
              Dev portfolio ↗
            </FunButton>
          </div>
        </Reveal>

        <aside className="flex flex-col justify-end gap-6">
          <Reveal delay={0.08}>
            <motion.div
              className="relative aspect-[5/3] overflow-hidden rounded-2xl border border-cream-panel/20"
              whileHover={reduce ? undefined : { scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
            >
              <Image
                src="/vibe/team.jpg"
                alt="Collaborative creative work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 font-display text-sm font-bold uppercase tracking-wider text-lime">
                In the build
              </p>
            </motion.div>
          </Reveal>
          <Reveal delay={0.12}>
            <motion.div
              className="rounded-2xl border border-cream-panel/20 bg-teal-deep/50 p-6 md:p-8"
              whileHover={reduce ? undefined : { rotate: -1.5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">
                Fun fact
              </p>
              <p className="mt-3 font-serif text-2xl italic leading-snug text-cream-panel md:text-3xl">
                I hold an MBBS / MD — so clarity, systems thinking, and zero
                fluff come standard.
              </p>
            </motion.div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "4+", l: "Years building" },
              { n: "10+", l: "Projects live" },
            ].map((stat, i) => (
              <Reveal key={stat.l} delay={0.15 + i * 0.08}>
                <motion.div
                  className="rounded-2xl border border-cream-panel/15 p-5"
                  whileHover={reduce ? undefined : { y: -6, rotate: i ? 2 : -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 16 }}
                >
                  <motion.p
                    className="font-display text-3xl font-extrabold text-lime"
                    initial={reduce ? false : { scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 14 }}
                  >
                    {stat.n}
                  </motion.p>
                  <p className="mt-1 text-sm text-cream-panel/75">{stat.l}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
