import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.flyuft.com/",
  integrations: [mdx(), sitemap(), tailwind(), react()],
  redirects: {
    "/flighttrainingcourse": "/programs",
    "/airworthiness": "/services/maintenance", // revisit
    "/fleet": "/about/our-fleet",
    "/crew": "/about/our-crew",
    "/about-form": "/discovery-flight",
    "/ground-training": "/pilot-training-guide", // revisit
    "/book-online": "/contact",
    "/private-pilot-qualifications": "/private-pilot-course", // revisit
    "/copy-of-sport-pilot": "/private-pilot-course",
    "/copy-of-event-venue": "/cats",
    "/copy-of-services-maintenance": "/",
    "/copy-of-introductory-flight-1": "/", // revisit
    "/copy-of-instrument-rating-training": "/certified-flight-instructor-cfi",
    "/copy-of-multi-engine-rating": "/commercial-pilot-training",
    "/copy-of-commercial-pilot-training": "/instrument-rating",
    "/copy-of-event-venue-1": "/sport-pilot",
    "/copy-of-private-pilot-training": "/multi-engine-rating",
    "/copy-of-introductory-flight-2": "/services/maintenance",
  },
});
