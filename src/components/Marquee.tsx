"use client";

import { marqueeItems } from "@/data/content";

function Row({
  reverse = false,
  className = "",
}: {
  reverse?: boolean;
  className?: string;
}) {
  const row = [...marqueeItems, ...marqueeItems, ...marqueeItems];
  return (
    <div className={`overflow-hidden py-3 ${className}`}>
      <div
        className={`flex w-max gap-8 whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-8 font-display text-sm font-bold uppercase tracking-[0.2em] md:text-base"
          >
            {item}
            <span aria-hidden className="opacity-50">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <div className="border-y border-ink">
      <Row className="bg-ink text-lime" />
      <Row reverse className="bg-lime text-ink" />
    </div>
  );
}
