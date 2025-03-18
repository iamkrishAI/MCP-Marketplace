"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

// This component handles special routing for GitHub Pages
export function GitHubPagesRouter() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Only run on the client side
    if (typeof window === 'undefined') return;

    // Don't do anything if not on GitHub Pages
    if (!window.location.hostname.includes('github.io')) return;

    // Handle the case where pathname could be null
    if (pathname === null) return;

    const basePath = '/MCP-Marketplace';
    
    // Check if we're accessing the site via GitHub Pages but the URL doesn't have the base path
    // For example, if someone tries to access https://username.github.io/documentation
    // Instead of the correct https://username.github.io/MCP-Marketplace/documentation
    if (!pathname.startsWith(basePath) && pathname !== '/') {
      // Redirect to the correct path
      const correctPath = `${basePath}${pathname}`;
      router.replace(correctPath);
    }
    
    // Also handle direct navigation to GitHub Pages without a path
    // For example, if someone goes directly to https://username.github.io/
    if (pathname === '/') {
      router.replace(basePath);
    }
  }, [pathname, router]);

  // This component doesn't render anything visible
  return null;
} 