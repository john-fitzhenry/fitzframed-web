/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes a plain HTML/CSS/JS site to ./out
  // that can be uploaded to any static host (Hostinger, Netlify, Vercel).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
