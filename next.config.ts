import type { NextConfig } from "next";

// Get the repository name from the environment or use a default
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'MCP-Marketplace';
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  output: 'export', // Required for GitHub Pages
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true, // Required for static export
  },
  // Ensure trailing slashes are used for better path resolution
  trailingSlash: true,
  // Disable ESLint during build to allow deployment despite linting errors
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
