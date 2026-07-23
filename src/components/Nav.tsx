"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/data/content";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
];

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="relative z-50 font-display text-[15px] font-extrabold tracking-tight text-ink md:text-base"
    >
      A
      <sup className="ml-px text-[0.68em] font-extrabold text-teal">2</sup>{" "}
      Studio
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex flex-col border-b transition-[background-color,border-color] duration-300 ${
        open
          ? "bottom-0 h-dvh border-line/70 bg-[#E8EBE6]"
          : scrolled
            ? "border-line/70 bg-[#E8EBE6]/95 backdrop-blur-md"
            : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl shrink-0 items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <Brand onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-lime transition-colors hover:bg-teal"
          >
            Work with me
          </Link>
        </nav>

        <button
          type="button"
          className="relative z-50 -mr-1 flex size-11 shrink-0 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span
            aria-hidden
            className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 bg-ink transition-all duration-200 ${
              open ? "translate-y-0 rotate-45" : "-translate-y-[5px]"
            }`}
          />
          <span
            aria-hidden
            className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            aria-hidden
            className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 bg-ink transition-all duration-200 ${
              open ? "translate-y-0 -rotate-45" : "translate-y-[5px]"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="flex min-h-0 flex-1 flex-col bg-[#E8EBE6] md:hidden"
          >
            <nav
              className="flex flex-1 flex-col overflow-y-auto px-5 pt-2"
              aria-label="Mobile"
            >
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.22 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center border-b border-line/70 py-4 font-display text-2xl font-bold tracking-tight text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.22 }}
              className="shrink-0 space-y-4 border-t border-line/70 bg-[#E8EBE6] px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5"
            >
              <Link
                href="/apply"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-lime"
              >
                Work with me
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="block text-center text-sm text-muted"
              >
                {site.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
