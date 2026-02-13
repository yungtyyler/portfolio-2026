export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tyler Varzeas",
    url: "https://tylervarzeas.com",
    jobTitle: "Full-Stack Software Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Spokane",
      addressRegion: "WA",
      addressCountry: "US",
    },
    sameAs: ["https://github.com/yungtyyler", "https://linkedin.com/in/tyler-varzeas"],
    knowsAbout: ["Next.js", "React", "TypeScript", "System Architecture", "PostgreSQL"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
