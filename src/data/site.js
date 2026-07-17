export const site = {
  brand: "Cincinnati Rat Control",
  domain: "cincinnatiratcontrol.com",
  url: "https://cincinnatiratcontrol.com",
  phone: "513-286-5607",
  phoneE164: "+1-513-286-5607",
  phoneHref: "tel:+15132865607",
  hoursShort: "Answered day or night",
  centroid: { lat: 39.1031, lng: -84.512 },
  description:
    "Rat control in Cincinnati, OH. A local exterminator handles Norway rats and mice with inspection, trapping, and metal entry-point sealing. Answered day or night. Call 513-286-5607.",
};

// Answered around the clock (used in schema hours).
export const hours = [
  {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
];

// Cities named in copy, mirrored in areaServed schema.
export const areaCities = [
  { name: "Cincinnati", region: "OH" },
  { name: "Norwood", region: "OH" },
  { name: "Blue Ash", region: "OH" },
  { name: "Mason", region: "OH" },
  { name: "West Chester", region: "OH" },
  { name: "Fairfield", region: "OH" },
  { name: "Hamilton", region: "OH" },
  { name: "Loveland", region: "OH" },
  { name: "Anderson Township", region: "OH" },
  { name: "Delhi Township", region: "OH" },
  { name: "Covington", region: "KY" },
  { name: "Newport", region: "KY" },
  { name: "Florence", region: "KY" },
];

export const serviceNav = [
  { label: "Rat Control", slug: "rat-control-in-cincinnati", glyph: "i-rat", img: "/images/rat-control.jpg" },
  { label: "Rat Exterminator", slug: "rat-exterminator-in-cincinnati", glyph: "i-target", img: "/images/rat-exterminator.jpg" },
  { label: "Rat Removal", slug: "rat-removal-in-cincinnati", glyph: "i-trap", img: "/images/rat-removal.jpg" },
  { label: "Rat Inspection", slug: "rat-inspection-in-cincinnati", glyph: "i-search", img: "/images/rat-inspection.jpg" },
  { label: "Rodent Exclusion & Sealing", slug: "rodent-exclusion-in-cincinnati", glyph: "i-seal", img: "/images/rodent-exclusion.jpg" },
  { label: "Attic Rat Cleanup", slug: "attic-rat-cleanup-in-cincinnati", glyph: "i-home", img: "/images/attic-cleanup.jpg" },
  { label: "Dead Rat Removal", slug: "dead-rat-removal-in-cincinnati", glyph: "i-alert", img: "/images/dead-rat-removal.jpg" },
  { label: "Commercial Rat Control", slug: "commercial-rat-control-in-cincinnati", glyph: "i-building", img: "/images/commercial.jpg" },
  { label: "Mouse Control", slug: "mouse-control-in-cincinnati", glyph: "i-mouse", img: "/images/mouse-control.jpg" },
];

export const areaNav = [
  { label: "Norwood, OH", slug: "rat-control-services-in-norwood" },
  { label: "Blue Ash, OH", slug: "rat-control-services-in-blue-ash" },
  { label: "Mason, OH", slug: "rat-control-services-in-mason" },
  { label: "West Chester, OH", slug: "rat-control-services-in-west-chester" },
  { label: "Fairfield, OH", slug: "rat-control-services-in-fairfield" },
  { label: "Hamilton, OH", slug: "rat-control-services-in-hamilton" },
  { label: "Loveland, OH", slug: "rat-control-services-in-loveland" },
  { label: "Anderson Township, OH", slug: "rat-control-services-in-anderson-township" },
  { label: "Delhi Township, OH", slug: "rat-control-services-in-delhi-township" },
  { label: "Covington, KY", slug: "rat-control-services-in-covington" },
  { label: "Newport, KY", slug: "rat-control-services-in-newport" },
  { label: "Florence, KY", slug: "rat-control-services-in-florence" },
];

// Service-area accordion by county (metro spans OH + Northern Kentucky).
export const counties = [
  { name: "Hamilton County, OH", places: ["Cincinnati", "Norwood", "Blue Ash", "Anderson Township", "Delhi Township", "Sharonville", "Montgomery"] },
  { name: "Butler County, OH", places: ["Hamilton", "Fairfield", "West Chester", "Middletown", "Oxford"] },
  { name: "Warren County, OH", places: ["Mason", "Lebanon", "Springboro", "Loveland"] },
  { name: "Clermont County, OH", places: ["Milford", "Batavia", "Amelia", "Loveland"] },
  { name: "Kenton County, KY", places: ["Covington", "Independence", "Erlanger", "Fort Mitchell"] },
  { name: "Campbell County, KY", places: ["Newport", "Fort Thomas", "Bellevue", "Alexandria"] },
  { name: "Boone County, KY", places: ["Florence", "Burlington", "Union", "Hebron"] },
];

// Full URL list for sitemap (trailing slashes preserved).
export const allPaths = [
  "/",
  "/services/",
  "/service-areas/",
  "/how-it-works/",
  "/about-us/",
  "/contact/",
  "/blog/",
  "/blog/how-to-get-rid-of-rats-cincinnati/",
  "/blog/rat-exterminator-cost-cincinnati/",
  "/blog/signs-of-rats-in-your-house/",
  "/privacy-policy/",
  "/terms/",
  "/disclaimer/",
  ...serviceNav.map((s) => `/${s.slug}/`),
  ...areaNav.map((a) => `/${a.slug}/`),
];
