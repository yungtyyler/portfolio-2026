export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tyler Varzeas",
    url: "https://tylervarzeas.com",
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
      "Next.js",
      "React",
      "TypeScript",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
