"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CustomLink } from "@/components/CustomLink";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Only run on the client side
    if (typeof window === 'undefined') return;

    // Check if we're on GitHub Pages
    if (window.location.hostname.includes('github.io')) {
      // Get the current path without base path
      const path = window.location.pathname;
      const basePath = '/MCP-Marketplace';
      
      // If the path doesn't include the base path, try to redirect to the correct URL
      if (!path.includes(basePath)) {
        // Extract the path after github.io/
        const pathParts = path.split('/');
        // Remove any empty parts and the first part (which would be empty or the repo name)
        const routePath = pathParts.filter((part, index) => part && index > 0).join('/');
        
        if (routePath) {
          // Redirect to the correct path with base path
          router.replace(`${basePath}/${routePath}`);
          return;
        }
      }
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="mb-8">
        <CustomLink
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-md transition-colors"
        >
          Return to Homepage
        </CustomLink>
      </div>
      <div className="max-w-lg">
        <p className="text-gray-400">
          If you were trying to access a specific page on our site, please navigate using the menu above.
        </p>
      </div>
    </div>
  );
} 