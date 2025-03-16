"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, MessageSquare, BookOpen, Code } from "lucide-react";
import Link from "next/link";

export function CommunitySection() {
  const communityResources = [
    {
      title: "GitHub Repository",
      description: "Contribute to the MCP Marketplace codebase, report issues, and submit pull requests.",
      icon: <Github className="h-10 w-10 text-white" />,
      link: "https://github.com/mcp-marketplace",
      buttonText: "View on GitHub"
    },
    {
      title: "Discord Community",
      description: "Join our active Discord community to discuss MCP integrations and get help.",
      icon: <MessageSquare className="h-10 w-10 text-white" />,
      link: "https://discord.gg/mcp-marketplace",
      buttonText: "Join Discord"
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and API references for building with MCP.",
      icon: <BookOpen className="h-10 w-10 text-white" />,
      link: "/documentation",
      buttonText: "Read Docs"
    },
    {
      title: "Developer API",
      description: "Build your own MCP servers and integrations with our developer API.",
      icon: <Code className="h-10 w-10 text-white" />,
      link: "/api-reference",
      buttonText: "API Reference"
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Developer Community
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            MCP Marketplace is built by developers, for developers. Join our open-source community and help shape the future of AI integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityResources.map((resource, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="mb-4">{resource.icon}</div>
                <CardTitle className="text-white text-xl">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-gray-400 text-base mb-6">
                  {resource.description}
                </CardDescription>
                <Button 
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white"
                  asChild
                >
                  <Link href={resource.link}>{resource.buttonText}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800 p-8 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Open Source & Community Driven</h3>
            <p className="text-gray-400 mb-6">
              MCP Marketplace is proudly open source and built with contributions from developers around the world. 
              We believe in the power of community-driven development to create better tools for AI integration.
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              size="lg"
              asChild
            >
              <Link href="https://github.com/mcp-marketplace/contribute">Start Contributing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 