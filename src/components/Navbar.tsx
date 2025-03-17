"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// Get the base path from environment or use default for GitHub Pages
const basePath = process.env.NODE_ENV === 'production' ? '/MCP-Marketplace' : '';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black/90 backdrop-blur-sm fixed w-full z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={`${basePath}/`} className="text-white font-bold text-xl">
          MCP Marketplace
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href={`${basePath}/marketplace`} className="text-gray-300 hover:text-white transition-colors">
            Marketplace
          </Link>
          <Link href={`${basePath}/documentation`} className="text-gray-300 hover:text-white transition-colors">
            Documentation
          </Link>
          <Link href={`${basePath}/community`} className="text-gray-300 hover:text-white transition-colors">
            Community
          </Link>
          <Button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            asChild
          >
            <Link href={`${basePath}/connect`}>Connect to MCP</Link>
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
            <Link 
              href={`${basePath}/marketplace`}
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link 
              href={`${basePath}/documentation`}
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link 
              href={`${basePath}/community`}
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full"
              onClick={() => setIsMenuOpen(false)}
              asChild
            >
              <Link href={`${basePath}/connect`}>Connect to MCP</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
} 