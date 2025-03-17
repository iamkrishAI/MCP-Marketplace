"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, MessageSquare } from "lucide-react";

// Get the base path from environment or use default for GitHub Pages
const basePath = process.env.NODE_ENV === 'production' ? '/MCP-Marketplace' : '';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Marketplace", href: `${basePath}/marketplace` },
        { name: "Pricing", href: `${basePath}/pricing` },
        { name: "Connect", href: `${basePath}/connect` },
        { name: "Documentation", href: `${basePath}/documentation` }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: `${basePath}/blog` },
        { name: "Tutorials", href: `${basePath}/tutorials` },
        { name: "Case Studies", href: `${basePath}/case-studies` },
        { name: "API Reference", href: `${basePath}/api-reference` }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: `${basePath}/about` },
        { name: "Careers", href: `${basePath}/careers` },
        { name: "Contact", href: `${basePath}/contact` },
        { name: "Privacy Policy", href: `${basePath}/privacy` }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/mcp-marketplace", label: "GitHub" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/mcpmarketplace", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/company/mcp-marketplace", label: "LinkedIn" },
    { icon: <MessageSquare className="h-5 w-5" />, href: "https://discord.gg/mcp-marketplace", label: "Discord" }
  ];

  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href={`${basePath}/`} className="text-white font-bold text-xl mb-4 inline-block">
              MCP Marketplace
            </Link>
            <p className="mt-4 max-w-md">
              The one-stop marketplace for MCP integrations. Connect your LLMs to powerful external tools with a unified standard.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} MCP Marketplace. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href={`${basePath}/terms`} className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href={`${basePath}/privacy`} className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 