import { Helmet } from "react-helmet-async";
import { COMPANY, CONTACT, ADDRESS, SOCIALS } from "@/lib/constants";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    description: COMPANY.tagline,
    url: "https://themontroseteam.com",
    telephone: CONTACT.phoneHref.replace("tel:", ""),
    email: CONTACT.email,
    foundingDate: String(COMPANY.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.4107,
      longitude: -80.8429,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Charlotte",
        containedInPlace: { "@type": "State", name: "North Carolina" },
      },
      {
        "@type": "City",
        name: "Huntersville",
        containedInPlace: { "@type": "State", name: "North Carolina" },
      },
    ],
    openingHours: "Mo-Fr 08:00-18:00",
    sameAs: [SOCIALS.linkedin],
    serviceType: [
      "Land Development",
      "Real Estate Development",
      "Site Development",
      "Land Acquisition",
      "Rezoning",
      "Construction Management",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
