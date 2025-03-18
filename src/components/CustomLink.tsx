"use client";

import { ReactNode, useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";

// Get the base path from environment or use default for GitHub Pages
const getBasePath = () => {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    // Try to get the base path from the HTML data attribute
    const dataBasePath = document.documentElement.getAttribute('data-basepath');
    if (dataBasePath) return dataBasePath;
    
    // Fallback: check if we're on GitHub Pages by looking at the hostname
    if (window.location.hostname.includes('github.io')) {
      return '/MCP-Marketplace';
    }
  }
  
  // Server-side or fallback
  return process.env.NODE_ENV === 'production' ? '/MCP-Marketplace' : '';
};

interface CustomLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function CustomLink({ href, children, className, onClick }: CustomLinkProps) {
  const [basePath, setBasePath] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    setBasePath(getBasePath());
  }, []);

  // Handle navigation with correct base path
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick();
    
    // If it's an external link (starts with http), don't do anything special
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
      return;
    }
    
    e.preventDefault();
    
    // Ensure the path is relative to the base
    let fullPath = href;
    
    // If we're on GitHub Pages and the href doesn't already include the base path
    if (basePath && !href.startsWith(basePath)) {
      // Add the base path, but avoid double slashes
      const cleanHref = href.startsWith('/') ? href.substring(1) : href;
      fullPath = `${basePath}/${cleanHref}`;
    }
    
    // Use router.push for client-side navigation
    router.push(fullPath);
  };

  // Only use client-side navigation when the component has mounted and we have the base path
  const isExternalLink = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#');
  
  // Create the full href that includes the base path for rendering
  let fullHref = href;
  
  // Only add base path if it's a relative link and doesn't already have the base path
  if (basePath && !isExternalLink && !href.startsWith(basePath)) {
    const cleanHref = href.startsWith('/') ? href.substring(1) : href;
    fullHref = `${basePath}/${cleanHref}`;
  }
  
  return (
    <NextLink
      href={fullHref}
      className={className}
      onClick={handleClick}
    >
      {children}
    </NextLink>
  );
} 