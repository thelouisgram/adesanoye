"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { faqs } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { FunButton } from "@/components/FunButton";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t border-line bg-cream-panel px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              FAQ — the fun kind
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
              Questions you were{" "}
              <span className="relative inline-block">
                <span className="relative z-10">gonna ask</span>
                <motion.span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-3 w-full bg-lime/80"
                  initial={reduce ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                />
              </span>{" "}
              anyway
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
              Straight answers, zero corporate fog. Still stuck? Hit apply —
              I’ll clarify anything over email.
            </p>
            <div className="mt-8">
              <FunButton href="/apply" variant="solid">
                Still curious? Apply →
              </FunButton>
            </div>
          </Reveal>

          <div className="space-y-3">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 0.04}>
                  <motion.div
                    layout
                    className={`overflow-hidden rounded-2xl border transition-colors ${
                      isOpen
                        ? "border-ink bg-ink text-cream-panel"
                        : "border-line bg-bg text-ink hover:border-teal/40"
                    }`}
                  >
                    <button
                      type="button"
                      className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left md:px-6 md:py-6"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span className="font-display text-lg font-bold leading-snug tracking-tight md:text-xl">
                        {item.q}
                      </span>
                      <motion.span
                        aria-hidden
                        className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg font-bold ${
                          isOpen ? "bg-lime text-ink" : "bg-lime/60 text-ink"
                        }`}
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ type: "spring", stiffness: 320, damping: 18 }}
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={reduce ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p
                            className={`px-5 pb-6 text-base leading-relaxed md:px-6 ${
                              isOpen ? "text-cream-panel/80" : "text-ink-soft"
                            }`}
                          >
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
