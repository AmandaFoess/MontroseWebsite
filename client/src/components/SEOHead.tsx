import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
}

const SITE_URL = "https://www.themontroseteam.com";

export default function SEOHead({ title, description, canonicalPath }: SEOHeadProps) {
  const fullTitle =
    canonicalPath === "/"
      ? "Montrose | Land Development Solutions | Charlotte, NC"
      : `${title} | Montrose`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const ogImage = `${SITE_URL}/og-image.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Montrose" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
