import React, { Suspense} from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router/index";
import { Helmet } from "react-helmet"; // Import Helmet for SEO

import ErrorBoundary from "./Error/ErrorBoundary";
import ReactGA from "react-ga4";
import Loader from "./components/Loading";

function App() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aspire Bridge Rwanda",
    url: "https://aspirebridgerwanda.org",  // Replace with actual domain
    sameAs: [
      "https://www.instagram.com/aspirebridgerwanda/",
      "https://github.com/aspire-bridge-rwanda",
      "https://twitter.com/aspirebridge_rw",
      "https://www.linkedin.com/company/aspire-bridge-rwanda/",
    ],
    image: "./aspire-bridge-logo.jpg",  // Replace with your organization's logo
    description:
      "Aspire Bridge Rwanda empowers women and youth through skill development, mentorship, and support, enabling them to take charge of their futures.",
  };

  return (
    <ErrorBoundary>
      {/* Adding Helmet for SEO optimization */}
      <Helmet>
        <title>Aspire Bridge Rwanda</title> {/* Title for SEO */}
        <meta
          name="description"
          content="Aspire Bridge Rwanda is dedicated to empowering women and youth by providing resources, mentorship, and skill-building opportunities."
        />
        <meta
          name="keywords"
          content="Aspire Bridge Rwanda, women empowerment, youth empowerment, skill development, mentorship, community support"
        />
        <meta
          name="author"
          content="Aspire Bridge Rwanda"
        />
        {/* Open Graph metadata for social media sharing */}
        <meta
          property="og:title"
          content="Aspire Bridge Rwanda"
        />
        <meta
          property="og:description"
          content="Aspire Bridge Rwanda is on a mission to empower women and youth in Rwanda by providing them with the skills, knowledge, and support needed to thrive."
        />
        <meta property="og:image" content="./aspire-bridge-logo.jpg" /> {/* Image for sharing */}
        <meta property="og:url" content="https://aspirebridgerwanda.org" />
        <meta property="og:type" content="website" />
        {/* Twitter Card metadata */}
        <meta
          name="twitter:title"
          content="Aspire Bridge Rwanda"
        />
        <meta
          name="twitter:description"
          content="Aspire Bridge Rwanda empowers women and youth to create a better future through education, mentorship, and community initiatives."
        />
        <meta name="twitter:image" content="./aspire-bridge-logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Structured Data - JSON-LD Schema Markup for enhanced SEO */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F57Y947PR2"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </script>
        {/* Favicon */}
        <link rel="icon" href="./aspire-bridge-logo.jpg" />
        {/* Additional meta tags for mobile optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Apple touch icon for iPhone */}
        <link rel="apple-touch-icon" href="./aspire-bridge-logo.jpg" />
        {/* Theme Color */}
        <meta name="theme-color" content="#00aaff" />
      </Helmet>

      {/* Suspense and ErrorBoundary setup */}
      {/* Auth context for users */}

      <Suspense fallback={<Loader />} >
        <RouterProvider router={router} />
   
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
