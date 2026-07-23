"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { MouseEvent, ReactNode, useRef } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "lime" | "ghost";
  className?: string;
  onClick?: () => void;
};

const variants = {
  solid:
    "bg-ink text-lime border border-ink hover:bg-teal hover:border-teal",
  outline:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-lime",
  lime: "bg-lime text-ink border border-lime hover:bg-lime-hot",
  ghost:
    "bg-transparent text-cream-panel border border-cream-panel/40 hover:border-lime hover:text-lime",
};

export function FunButton({
  href,
  children,
  variant = "solid",
  className = "",
  onClick,
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 18 });
  const springY = useSpring(y, { stiffness: 280, damping: 18 });

  function onMove(e: MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.22);
    y.set(dy * 0.22);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={{ x: springX, y: springY }} className="inline-flex">
      <Link
        ref={ref}
        href={href}
        onClick={onClick}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-center text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
      >
        <motion.span
          className="relative z-10 inline-flex items-center gap-2"
          whileHover={reduce ? undefined : { scale: 1.02 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
        >
          {children}
        </motion.span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
      </Link>
    </motion.div>
  );
}
