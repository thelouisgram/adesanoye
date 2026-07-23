import type { Metadata } from "next";
import Link from "next/link";
import { ApplyForm } from "@/components/ApplyForm";

export const metadata: Metadata = {
  title: "Apply to work together",
  description:
    "Apply to work with A² Studio. Tell Adeyeye Adesanoye about your project — landing pages, custom websites, and product UI built to book dream clients.",
  alternates: {
    canonical: "/apply",
  },
  openGraph: {
    title: "Apply to work together · A² Studio",
    description:
      "Tell me about your project. Landing pages, custom websites, and product UI built to convert.",
    url: "/apply",
  },
};

export default function ApplyPage() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-28 md:px-8 md:pb-32 md:pt-36">
      <div className="pointer-events-none absolute -right-20 top-24 h-64 w-64 rounded-full bg-lime/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-20 h-52 w-52 rounded-full bg-teal/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            Work with me · no awkward pitch decks
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
            Apply to work together
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Spill the tea about your brand and what you need. I review every
            application personally and usually reply within 24 hours.
          </p>
          <p className="mt-3 text-sm text-muted">
            Prefer email?{" "}
            <Link
              href="mailto:hadesanoye01@gmail.com"
              className="font-medium text-teal underline decoration-lime decoration-2 underline-offset-4"
            >
              hadesanoye01@gmail.com
            </Link>
          </p>
        </div>

        <ApplyForm />
      </div>
    </section>
  );
}
