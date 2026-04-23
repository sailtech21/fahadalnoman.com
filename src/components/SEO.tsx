import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: string;
  children?: ReactNode;
}

const SITE_URL = "https://fahadalnoman.com";
const DEFAULT_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/BDoFLJchT3MPC3tcVfJ6JX21buU2/social-images/social-1776893545621-Gemini_Generated_Image_5a6bdi5a6bdi5a6b_(1).webp";

const SEO = ({ title, description, path = "/", image = DEFAULT_IMAGE, type = "website", children }: SEOProps) => {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {children}
    </Helmet>
  );
};

export default SEO;
