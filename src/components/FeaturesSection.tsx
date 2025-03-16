"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Link as LinkIcon, Scale, Users } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "One-Click Connection",
      description: "Connect to MCP servers instantly with a single click. No complex setup or configuration required.",
      icon: <Zap className="h-12 w-12 text-blue-500" />
    },
    {
      title: "Seamless Integration",
      description: "Connect your LLMs to external tools with standardized APIs and simple implementation.",
      icon: <LinkIcon className="h-12 w-12 text-purple-500" />
    },
    {
      title: "Scalable & Open-Source",
      description: "Built on open standards with scalability in mind. Handle any workload with confidence.",
      icon: <Scale className="h-12 w-12 text-green-500" />
    },
    {
      title: "Community & Extensibility",
      description: "Join a thriving developer community. Extend functionality with custom integrations.",
      icon: <Users className="h-12 w-12 text-orange-500" />
    }
  ];

  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features for AI Developers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to connect your AI models to the world of external tools and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 