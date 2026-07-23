"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { FunButton } from "@/components/FunButton";

export function FinalCta() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-line">
      <div className="absolute inset-0">
        <Image
          src="/vibe/texture.jpg"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-bg/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-32">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            Next step
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,6vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-ink">
            Got a project in mind?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-ink-soft">
            Tell me what you&apos;re building. I&apos;ll reply within a day with
            whether it&apos;s a fit — and how we&apos;d approach it.
          </p>
          <div className="mt-10 flex justify-center">
            <motion.div
              whileHover={reduce ? undefined : { scale: 1.03 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
            >
              <FunButton
                href="/apply"
                variant="lime"
                className="px-10 py-4 text-base"
              >
                Start a project
              </FunButton>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
