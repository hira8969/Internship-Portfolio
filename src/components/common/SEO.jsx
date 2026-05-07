import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../config/site.js';

export default function SEO({ title, description = siteConfig.description, image = '/og.png' }) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const url = import.meta.env.VITE_SITE_URL || 'http://localhost:5173';

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
