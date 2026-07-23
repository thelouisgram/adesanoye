"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FunButton } from "@/components/FunButton";
import { site } from "@/data/content";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/apply", label: "Apply" },
];

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
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line/60 bg-bg/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href="/"
          className="font-display text-base font-extrabold tracking-tight text-ink transition-transform hover:rotate-[-1.5deg] md:text-lg"
          onClick={() => setOpen(false)}
        >
          {site.brand}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <FunButton href="/apply" variant="solid" className="!px-5 !py-2.5">
            Work with me
          </FunButton>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 top-16 z-40 bg-bg px-5 py-10 md:hidden"
        >
          <nav className="flex flex-col gap-6">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  href={link.href}
                  className="font-display text-3xl font-bold tracking-tight text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <FunButton href="/apply" onClick={() => setOpen(false)}>
              Work with me
            </FunButton>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
