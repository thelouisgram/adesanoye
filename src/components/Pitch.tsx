"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { pains } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Pitch() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-line bg-bg px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            The point
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
            Your site should feel as good as the work behind it.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            I design and build websites with personality — for founders and
            teams who are done settling for “good enough.”
          </p>

        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Sound familiar?
          </p>
          <ul className="space-y-0">
            {pains.map((pain, i) => (
              <motion.li
                key={pain}
                className="border-t border-line py-5 text-lg leading-snug text-ink md:text-xl"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i, duration: 0.45 }}
              >
                <span className="mr-3 font-display text-sm font-bold text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {pain}
              </motion.li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-6 text-base font-medium text-teal">
            If any of that hit — you&apos;re in the right place.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
