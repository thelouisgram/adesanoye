import type { Metadata } from "next";
import { Figtree, Newsreader, Syne } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/content";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://adesanoye.vercel.app";

const title = {
  default: `${site.brand} — ${site.tagline.replace(/\.$/, "")}`,
  template: `%s · ${site.brand}`,
};

const description = site.description;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: site.brand,
  authors: [{ name: site.name, url: site.techPortfolio }],
  creator: site.name,
  publisher: site.brand,
  keywords: [
    "A² Studio",
    "Adeyeye Adesanoye",
    "Louis",
    "web design",
    "website design",
    "website development",
    "freelance web designer",
    "conversion-focused websites",
    "landing page design",
    "Next.js developer",
    "product UI",
    "book clients website",
  ],
  category: "design",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: site.brand,
    title: title.default,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: title.default,
    description,
    creator: "@thelouisgram",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "ai-content-declaration": "human-created",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${figtree.variable} ${newsreader.variable} h-full antialiased`}
    >
      <head>
        <link rel="llms-txt" href="/llms.txt" />
        <meta name="theme-color" content="#0A0D0B" />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <JsonLd url={siteUrl} />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
