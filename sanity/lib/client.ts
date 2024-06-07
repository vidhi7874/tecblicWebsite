import { createClient } from 'next-sanity';

// import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: Boolean(process.env.NEXT_PUBLIC_SANITY_USE_CDN) || false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
