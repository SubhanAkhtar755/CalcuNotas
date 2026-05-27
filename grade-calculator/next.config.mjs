/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // development-time checks enabled
  output: "export",       // automatic static HTML export
    images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default nextConfig;
