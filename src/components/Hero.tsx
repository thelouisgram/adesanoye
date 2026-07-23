"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FunButton } from "@/components/FunButton";
import { site } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="font-display text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.045em] text-ink"
          >
            {site.brand}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="mt-5 font-display text-[clamp(1.75rem,3.8vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink sm:mt-6"
          >
            {site.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mt-4 max-w-md text-[1.02rem] leading-relaxed text-ink-soft sm:text-lg"
          >
            Forget DIY templates and “meh, it’s fine” designs. I build sites
            that make the right people stop scrolling, trust you fast, and
            reach out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.26, ease }}
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
          className="relative w-full flex-1 lg:max-w-[54%]"
        >
          <div className="relative mx-auto aspect-[5/4] w-full max-w-xl lg:max-w-none">
            {/* Long page — behind */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease }}
              className="absolute right-0 top-0 z-0 h-[92%] w-[40%] sm:w-[36%]"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-ink/10 bg-white shadow-[0_20px_50px_-18px_rgba(10,13,11,0.45)]">
                <div className="flex items-center justify-center border-b border-ink/8 bg-[#f4f5f3] px-2 py-2">
                  <div className="h-1.5 w-10 rounded-full bg-ink/15" />
                </div>
                <div className="relative min-h-0 flex-1">
                  <Image
                    src="/vibe/mac-long.jpg"
                    alt="MAC agency full-page website layout"
                    fill
                    sizes="(max-width: 1024px) 40vw, 22vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>

            {/* Desktop browser — front */}
            <div className="absolute bottom-0 left-0 z-10 w-[78%] sm:w-[76%]">
              <div className="overflow-hidden rounded-2xl border border-ink/12 bg-white shadow-[0_30px_70px_-20px_rgba(10,13,11,0.4)]">
                {/* Safari-style chrome */}
                <div className="flex items-center gap-3 border-b border-ink/8 bg-[#eceeea] px-3 py-2.5 sm:px-3.5">
                  <div className="flex shrink-0 items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-[#ff5f57] ring-1 ring-black/10" />
                    <span className="size-2.5 rounded-full bg-[#febc2e] ring-1 ring-black/10" />
                    <span className="size-2.5 rounded-full bg-[#28c840] ring-1 ring-black/10" />
                  </div>
                  <div className="flex min-w-0 flex-1 items-center justify-center rounded-lg bg-white px-3 py-1.5 shadow-sm ring-1 ring-ink/8">
                    <span className="truncate text-center text-[0.7rem] font-medium text-ink-soft">
                      mac.agency
                    </span>
                  </div>
                  <div className="hidden w-8 shrink-0 sm:block" aria-hidden />
                </div>

                <div className="relative aspect-[16/10] bg-white">
                  <Image
                    src="/vibe/mac-desktop.jpg"
                    alt="MAC Digital Agency desktop website template"
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 45vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
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
