import { CONTENT_UPDATED, LAWYER, PROFILES, SITE_URL, STUDIO, absoluteUrl } from "@/lib/site";
import { practiceAreas, practiceAreaPath, type Faq, type PracticeArea } from "@/content/practice-areas";

type JsonLd = Record<string, unknown>;

const STUDIO_ID = `${SITE_URL}/#studio`;
const LAWYER_ID = `${SITE_URL}/#vanessa-properzi`;

const address = {
  "@type": "PostalAddress",
  streetAddress: STUDIO.street,
  addressLocality: STUDIO.city,
  postalCode: STUDIO.postalCode,
  addressRegion: STUDIO.region,
  addressCountry: STUDIO.country,
};

export const legalServiceSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": STUDIO_ID,
  name: STUDIO.name,
  description:
    "Studio Legale a Roma EUR dell'Avvocato Vanessa Properzi, cassazionista: diritto civile, famiglia, immobiliare, lavoro e successioni.",
  url: `${SITE_URL}/`,
  telephone: STUDIO.phone,
  email: STUDIO.email,
  image: `${SITE_URL}/photos/og-image.jpg`,
  logo: `${SITE_URL}/photos/logo.png`,
  address,
  geo: {
    "@type": "GeoCoordinates",
    latitude: STUDIO.geo.latitude,
    longitude: STUDIO.geo.longitude,
  },
  hasMap: STUDIO.mapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: { "@type": "City", name: "Roma" },
  knowsLanguage: "it",
  ...(PROFILES.length > 0 && { sameAs: PROFILES }),
  founder: { "@id": LAWYER_ID },
  employee: { "@id": LAWYER_ID },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Aree di pratica",
    itemListElement: practiceAreas.map((area) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: area.name,
        url: absoluteUrl(practiceAreaPath(area.slug)),
      },
    })),
  },
});

export const lawyerSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": LAWYER_ID,
  name: STUDIO.lawyerName,
  honorificPrefix: "Avv.",
  jobTitle: "Avvocato cassazionista",
  url: `${SITE_URL}/`,
  alumniOf: { "@type": "CollegeOrUniversity", name: LAWYER.university },
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Numero di iscrizione all'Albo degli Avvocati di Roma",
    value: LAWYER.albo,
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: `Abilitazione al patrocinio davanti alla Corte di Cassazione (dal ${LAWYER.cassazioneSince})`,
    credentialCategory: "Abilitazione professionale",
  },
  ...(PROFILES.length > 0 && { sameAs: PROFILES }),
  image: `${SITE_URL}/photos/vanessa.webp`,
  worksFor: { "@id": STUDIO_ID },
  workLocation: { "@id": STUDIO_ID },
  knowsAbout: practiceAreas.filter((a) => a.slug !== "diritto-penale").map((a) => a.name),
});

export const serviceSchema = (area: PracticeArea): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absoluteUrl(practiceAreaPath(area.slug))}#service`,
  name: area.name,
  serviceType: area.name,
  description: area.metaDescription,
  url: absoluteUrl(practiceAreaPath(area.slug)),
  provider: { "@id": STUDIO_ID },
  areaServed: { "@type": "City", name: "Roma" },
});

export const webPageSchema = (name: string, path: string, serviceId?: string): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": absoluteUrl(path),
  url: absoluteUrl(path),
  name,
  inLanguage: "it-IT",
  ...(CONTENT_UPDATED && { dateModified: CONTENT_UPDATED }),
  about: { "@id": serviceId ?? STUDIO_ID },
});

export const faqSchema = (faqs: Faq[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});

export const breadcrumbSchema = (trail: { name: string; path: string }[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: absoluteUrl(crumb.path),
  })),
});
