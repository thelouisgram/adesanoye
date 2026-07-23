import { site } from "@/data/content";

type JsonLdProps = {
  url: string;
};

export function JsonLd({ url }: JsonLdProps) {
  const description = site.description;

  const person = {
    "@type": "Person",
    name: site.name,
    alternateName: "Louis",
    email: site.email,
    url: site.techPortfolio,
    sameAs: [site.github, site.techPortfolio],
    jobTitle: "Web Designer & Frontend Engineer",
    worksFor: {
      "@type": "Organization",
      name: site.brand,
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${url}/#organization`,
    name: site.brand,
    alternateName: ["Adesanoye Studio"],
    url,
    logo: `${url}/brand/mark.svg`,
    image: `${url}/og.png`,
    description,
    email: site.email,
    founder: person,
    employee: person,
    areaServed: "Worldwide",
    priceRange: "$$",
    serviceType: [
      "Website design",
      "Website development",
      "Landing page design",
      "Product UI design",
    ],
    knowsAbout: [
      "Conversion-focused web design",
      "Next.js",
      "React",
      "Frontend engineering",
      "Brand websites",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: site.email,
      contactType: "sales",
      availableLanguage: ["English"],
    },
    sameAs: [site.github, site.techPortfolio],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name: site.brand,
    description,
    publisher: { "@id": `${url}/#organization` },
    inLanguage: "en",
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
