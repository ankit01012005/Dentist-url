import { site } from "@/content/site";
import { sized } from "@/lib/unsplash";

/** Dentist / LocalBusiness structured data generated entirely from site.ts. */
export default function JsonLd() {
  const b = site.business;
  const data = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness"],
    "@id": `${site.seo.siteUrl}/#clinic`,
    name: b.fullName,
    description: site.seo.description,
    url: site.seo.siteUrl,
    telephone: b.phoneRaw,
    email: b.email || undefined,
    image: site.seo.ogImage,
    logo: `${site.seo.siteUrl}/icon.svg`,
    priceRange: b.priceRange,
    foundingDate: String(b.established),
    address: {
      "@type": "PostalAddress",
      streetAddress: b.address.line1,
      addressLocality: b.address.city,
      addressRegion: b.address.state,
      postalCode: b.address.pin,
      addressCountry: b.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: b.geo.lat, longitude: b.geo.lng },
    hasMap: b.mapLinkUrl,
    openingHoursSpecification: b.hoursSchema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    aggregateRating: { "@type": "AggregateRating", ratingValue: b.rating, reviewCount: b.reviewCount, bestRating: 5 },
    review: site.reviews.slice(0, 5).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
    employee: {
      "@type": "Person",
      name: site.doctor.name,
      jobTitle: site.doctor.title,
      image: sized(site.doctor.image, 600),
      hasCredential: site.doctor.degrees,
    },
    availableService: site.treatments.map((t) => ({
      "@type": "MedicalProcedure",
      name: t.name,
      url: `${site.seo.siteUrl}/treatments/${t.slug}/`,
    })),
    sameAs: Object.values(b.social),
    areaServed: { "@type": "City", name: b.city },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
