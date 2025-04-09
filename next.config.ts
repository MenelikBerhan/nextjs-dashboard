import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  // log cached or uncached routes for 'fetch' requests
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // // for partial prerendering
  // experimental: {
  //   ppr: 'incremental'
  // }
};

export default nextConfig;
