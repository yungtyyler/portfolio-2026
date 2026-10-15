import { SITE_URL, absoluteUrl } from "@/lib/seo";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Tyler Varzeas",
        url: SITE_URL,
        jobTitle: "Digital Marketing Specialist - Web & Search",
        worksFor: {
          "@type": "Organization",
          name: "Horizon Credit Union",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Spokane",
          addressRegion: "WA",
          addressCountry: "US",
        },
        sameAs: ["https://github.com/yungtyyler", "https://linkedin.com/in/tyler-varzeas"],
        knowsAbout: [
          "Website Design",
          "Web Development",
          "Technical SEO",
          "Local SEO",
          "Conversion Tracking",
          "Google Analytics 4",
          "Google Search Console",
          "Next.js",
          "React",
          "TypeScript",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#business`,
        name: "Tyler Varzeas Web + SEO",
        url: SITE_URL,
        founder: { "@id": `${SITE_URL}/#person` },
        description:
          "Website design, web development, technical SEO, local SEO, website optimization, analytics, and conversion tracking for local service businesses.",
        areaServed: [
          {
            "@type": "City",
            name: "Spokane",
            address: {
              "@type": "PostalAddress",
              addressRegion: "WA",
              addressCountry: "US",
            },
          },
          {
            "@type": "City",
            name: "Coeur d'Alene",
            address: {
              "@type": "PostalAddress",
              addressRegion: "ID",
              addressCountry: "US",
            },
          },
        ],
        serviceType: [
          "Website Design",
          "Web Development",
          "Technical SEO",
          "Local SEO",
          "Website Optimization",
          "Analytics and Conversion Tracking",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web and SEO services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website Design & Development",
                description:
                  "Fast, mobile-first websites with clear service pages and conversion-focused contact paths.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Technical & Local SEO",
                description:
                  "Technical cleanup, local search foundations, service-area messaging, and search-friendly page structure.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website Optimization",
                description:
                  "Performance, UX, messaging, and conversion improvements for existing websites.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Analytics & Conversion Tracking",
                description:
                  "GA4, Search Console, Tag Manager, form tracking, and conversion measurement setup.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Tyler Varzeas Web + SEO",
        description:
          "Spokane website design, SEO, optimization, analytics, and conversion tracking for service businesses.",
        publisher: { "@id": `${SITE_URL}/#business` },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "Tyler Varzeas Web + SEO",
        description:
          "Spokane website design, technical SEO, local SEO, optimization, and conversion tracking for service businesses.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/opengraph-image"),
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
