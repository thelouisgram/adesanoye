import Link from "next/link";
import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-cream-panel">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            {site.brand}
          </p>
          <p className="mt-3 max-w-sm text-cream-panel/70">
            Conversion-focused websites &amp; product UI for founders who want
            dream clients — not another forgettable template.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-block text-lime transition-opacity hover:opacity-80"
          >
            {site.email}
          </a>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
          <Link href="/#work" className="hover:text-lime">
            Work
          </Link>
          <Link href="/#services" className="hover:text-lime">
            Services
          </Link>
          <Link href="/#about" className="hover:text-lime">
            About
          </Link>
          <Link href="/#faq" className="hover:text-lime">
            FAQ
          </Link>
          <Link href="/apply" className="hover:text-lime">
            Apply
          </Link>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="border-t border-cream-panel/10 px-5 py-5 text-center text-xs text-cream-panel/50 md:px-8 md:text-left">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {site.brand}. All rights reserved.</p>
          <p>Designed with personality — not just templates.</p>
        </div>
      </div>
    </footer>
  );
}
