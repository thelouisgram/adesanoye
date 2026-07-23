"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FunButton } from "@/components/FunButton";
import { site } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

const stickers = [
  {
    label: "No boring sites",
    className:
      "left-[-4%] top-[12%] -rotate-6 bg-lime text-ink sm:left-[-8%] sm:top-[10%]",
  },
  {
    label: "Feels like you ✓",
    className:
      "right-[-2%] top-[28%] rotate-[7deg] bg-ink text-lime sm:right-[-6%]",
  },
  {
    label: "Ship it",
    className:
      "bottom-[18%] left-[-2%] -rotate-[4deg] bg-teal text-lime sm:bottom-[22%] sm:left-[-8%]",
  },
  {
    label: "Booked clients",
    className:
      "bottom-[8%] right-[-4%] rotate-[-8deg] bg-cream-panel text-ink ring-1 ring-ink/10 sm:right-[-6%]",
  },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      <Image
        src="/vibe/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_32%]"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-cream-panel/95 via-cream-panel/55 to-bg/88"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-cream-panel/80 via-cream-panel/35 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:flex-row lg:items-center lg:gap-14 lg:px-10 lg:pb-20 lg:pt-32">
        <div className="flex max-w-xl flex-col lg:max-w-[48%]">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-teal"
          >
            {site.brand}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.06, ease }}
            className="mt-4 font-display text-[clamp(2.1rem,5vw,3.35rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-ink sm:mt-5"
          >
            {site.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease }}
            className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-ink-soft sm:text-lg"
          >
            Most sites explain what you do. The good ones make people want to
            work with you. I design and build those — custom, intentional, and
            built around your brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <FunButton href="/apply" variant="lime">
              Apply to work together
            </FunButton>
            <Link
              href="#work"
              className="inline-flex h-12 items-center justify-center rounded-full border border-ink/15 bg-cream-panel/70 px-6 text-sm font-semibold text-ink backdrop-blur-sm transition hover:border-ink/30 hover:bg-cream-panel"
            >
              See recent work
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.18, ease }}
          className="relative mx-auto w-full max-w-md flex-1 lg:mx-0 lg:max-w-[46%]"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_30px_70px_-20px_rgba(10,13,11,0.35)] sm:aspect-[5/6]">
            <Image
              src="/vibe/founder-lead.jpg"
              alt="Professional founder portrait"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 46vw"
              className="object-cover object-[50%_15%]"
            />
          </div>

          {stickers.map((sticker, i) => (
            <motion.span
              key={sticker.label}
              initial={reduce ? false : { opacity: 0, scale: 0.7, rotate: -12 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.45 + i * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 16,
              }}
              whileHover={reduce ? undefined : { scale: 1.06, rotate: 0 }}
              className={`absolute z-20 rounded-full px-3.5 py-2 text-[0.7rem] font-bold tracking-wide shadow-[0_10px_24px_-10px_rgba(10,13,11,0.45)] sm:px-4 sm:text-xs ${sticker.className}`}
            >
              {sticker.label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative z-10 mx-auto mb-8 flex w-full max-w-6xl items-center gap-3 px-5 sm:px-8 lg:px-10"
      >
        <span className="h-px w-10 bg-ink/20" aria-hidden />
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
          Scroll
        </p>
      </motion.div>
    </section>
  );
}
