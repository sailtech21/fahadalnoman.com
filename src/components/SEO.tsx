import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: string;
  keywords?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  children?: ReactNode;
}

const SITE_URL = "https://fahadalnoman.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`; // FIX: use self-hosted image, not external Google Storage URL
const TWITTER_HANDLE = "@fahadalnoman"; // FIX: add Twitter handle

const SEO = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  keywords,
  noindex,
  jsonLd,
  children,
}: SEOProps) => {
  const url = `${SITE_URL}${path}`;
  const absImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const ldArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="author" content="Fahad Al Noman" />
      <link rel="canonical" href={url} />

      {/* FIX: Added theme-color for browser UI */}
      <meta name="theme-color" content="#00f5ff" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Fahad Al Noman" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter / X — FIX: added twitter:site and twitter:creator */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absImage} />

      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
      {children}
    </Helmet>
  );
};

export default SEO;
