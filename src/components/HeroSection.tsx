"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-950 to-black z-0"></div>
      
      {/* Animated background particles/grid (optional) */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              One-Click Connection for MCP Integrations
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl">
              Effortlessly connect your LLMs to powerful external tools with a unified standard.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                asChild
              >
                <Link href="/marketplace">Browse Integrations</Link>
              </Button>
              
              <Button 
                size="lg"
                variant="outline" 
                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                asChild
              >
                <Link href="/connect">Connect to MCP</Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            {/* Network visualization graphic */}
            <div className="relative w-full max-w-lg aspect-square">
              {/* Placeholder for the network visualization - replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full animate-pulse animation-delay-1000"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-blue-700/40 to-purple-700/40 rounded-full animate-pulse animation-delay-2000"></div>
              
              {/* This would be replaced with an actual network visualization or image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-sm opacity-70">MCP Integration Hub</p>
                  <p className="text-xs opacity-50">(Network Visualization)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 