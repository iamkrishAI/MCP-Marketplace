"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { CustomLink } from "@/components/CustomLink";

// Get the base path from environment or use default for GitHub Pages
// For client components, we need to ensure this works in the browser
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

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black/90 backdrop-blur-sm fixed w-full z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <CustomLink href="/" className="text-white font-bold text-xl">
          MCP Marketplace
        </CustomLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <CustomLink href="/marketplace" className="text-gray-300 hover:text-white transition-colors">
            Marketplace
          </CustomLink>
          <CustomLink href="/documentation" className="text-gray-300 hover:text-white transition-colors">
            Documentation
          </CustomLink>
          <CustomLink href="/community" className="text-gray-300 hover:text-white transition-colors">
            Community
          </CustomLink>
          <Button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            asChild
          >
            <CustomLink href="/connect">Connect to MCP</CustomLink>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <CustomLink 
              href="/marketplace"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketplace
            </CustomLink>
            <CustomLink 
              href="/documentation"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </CustomLink>
            <CustomLink 
              href="/community"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </CustomLink>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full"
              onClick={() => setIsMenuOpen(false)}
              asChild
            >
              <CustomLink href="/connect">Connect to MCP</CustomLink>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
} 