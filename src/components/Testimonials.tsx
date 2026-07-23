"use client";

import { testimonials } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section
      id="love"
      className="scroll-mt-20 border-t border-line bg-bg px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            Kind words
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-5xl">
            What people say about their sites
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={0.08 * i}>
              <figure className="flex h-full flex-col border-t border-line pt-8">
                <blockquote className="flex-1 font-serif text-xl leading-relaxed text-ink md:text-[1.35rem]">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-8">
                  <p className="font-display text-base font-bold tracking-tight text-ink">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
