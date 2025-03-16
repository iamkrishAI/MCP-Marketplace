"use client";

import { Search, Server, Link as LinkIcon, Code } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      title: "Browse MCP Servers",
      description: "Explore our marketplace of pre-configured MCP servers for various integrations and tools.",
      icon: <Search className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Click 'Connect' to Set Up",
      description: "Connect to your selected MCP server with a single click. No complex configuration required.",
      icon: <Server className="h-10 w-10 text-purple-500" />
    },
    {
      title: "Get a Unique API URL",
      description: "Receive your dedicated API endpoint for the MCP server integration.",
      icon: <LinkIcon className="h-10 w-10 text-green-500" />
    },
    {
      title: "Integrate with LLM",
      description: "Connect your LLM to the MCP server using our simple API and SDK.",
      icon: <Code className="h-10 w-10 text-orange-500" />
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get up and running with MCP integrations in just a few simple steps.
          </p>
        </div>

        {/* Desktop Steps (Horizontal) */}
        <div className="hidden lg:block">
          <div className="flex justify-between items-start relative">
            {/* Connection Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 z-0"></div>
            
            {/* Steps */}
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center w-64">
                <div className="bg-gray-800 p-4 rounded-full mb-6 border-4 border-gray-900">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Steps (Vertical) */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Connection Line */}
            <div className="absolute top-0 bottom-0 left-12 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 z-0"></div>
            
            {/* Steps */}
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex items-start mb-12">
                <div className="bg-gray-800 p-3 rounded-full mr-6 border-4 border-gray-900 flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 