// Single source of truth for the studio's NAP (name, address, phone) data.
// Google ranks local results partly on NAP consistency across the site,
// Google Business Profile and directories: change it here, nowhere else.

export const SITE_URL = "https://www.studiolegale-properzi.com";

export const STUDIO = {
  name: "Studio Legale Properzi",
  lawyer: "Avv. Vanessa Properzi",
  lawyerName: "Vanessa Properzi",
  phone: "+390645435416",
  phoneDisplay: "06 4543 5416",
  email: "vanessa.properzi@libero.it",
  street: "Piazzale Benito Juarez 10/11",
  postalCode: "00144",
  city: "Roma",
  district: "EUR",
  region: "RM",
  country: "IT",
  mapsUrl: "https://maps.app.goo.gl/uLw9hFkohpKQF1CY7",
  geo: { latitude: 41.8296, longitude: 12.4662 },
  hours: "Lunedì - Venerdì: 9:00 - 18:00",
} as const;

// Facts about the lawyer, shown on the FAQ and in the Person schema.
// `albo` is the registration number at the Ordine degli Avvocati di Roma.
export const LAWYER = {
  university: "Sapienza Università di Roma",
  universityShort: "Sapienza di Roma",
  degreeYear: 2001,
  cassazioneSince: 2016,
  albo: "A39992",
} as const;

// Public profiles of the studio (Google Business Profile, Ordine degli
// Avvocati di Roma listing, LinkedIn...). They go in `sameAs` so search and AI
// engines can tie them to the same entity. Add each URL only once it is live.
export const PROFILES: string[] = [];

// When the practice-area and FAQ content was last reviewed. Shown on the
// pages, and used as dateModified in the JSON-LD and lastmod in the sitemap.
// Update it whenever the legal content is revised, not on every deploy.
export const CONTENT_UPDATED = "2026-11-02";

export const absoluteUrl = (path: string) =>
  path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
