import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {(phase: string) => import('next').NextConfig} */
const nextConfig = (phase) => ({
  // Files named *.dev.tsx (e.g. the /lab prototypes) are only treated as
  // pages by `next dev`, so they never exist in a production build.
  pageExtensions:
    phase === PHASE_DEVELOPMENT_SERVER
      ? ["dev.tsx", "tsx", "ts", "jsx", "js"]
      : ["tsx", "ts", "jsx", "js"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
});

export default nextConfig;
