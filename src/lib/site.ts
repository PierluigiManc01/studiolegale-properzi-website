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

export const absoluteUrl = (path: string) =>
  path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
