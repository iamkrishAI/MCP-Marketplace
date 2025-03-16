import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TutorialsPage() {
  const tutorials = [
    {
      title: "Getting Started with MCP Marketplace",
      description: "Learn the basics of MCP Marketplace and how to deploy your first server.",
      duration: "15 min",
      level: "Beginner",
      slug: "getting-started"
    },
    {
      title: "Building a Custom MCP Integration",
      description: "Create your own MCP integration from scratch and publish it to the marketplace.",
      duration: "45 min",
      level: "Intermediate",
      slug: "custom-integration"
    },
    {
      title: "Connecting MCP to OpenAI's GPT Models",
      description: "Learn how to connect your MCP server to OpenAI's GPT models for enhanced AI capabilities.",
      duration: "30 min",
      level: "Intermediate",
      slug: "openai-connection"
    },
    {
      title: "Advanced MCP Server Configuration",
      description: "Dive deep into MCP server configuration options for optimal performance and security.",
      duration: "60 min",
      level: "Advanced",
      slug: "advanced-configuration"
    },
    {
      title: "Building a Real-time Dashboard with MCP",
      description: "Create a real-time dashboard to monitor your MCP server performance and usage.",
      duration: "90 min",
      level: "Advanced",
      slug: "realtime-dashboard"
    },
    {
      title: "MCP Authentication and Security Best Practices",
      description: "Learn how to secure your MCP servers and implement proper authentication.",
      duration: "45 min",
      level: "Intermediate",
      slug: "security-best-practices"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-900/30 text-green-400";
      case "Intermediate":
        return "bg-blue-900/30 text-blue-400";
      case "Advanced":
        return "bg-purple-900/30 text-purple-400";
      default:
        return "bg-gray-900/30 text-gray-400";
    }
  };

  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          MCP Marketplace Tutorials
        </h1>
        <p className="text-gray-300 mb-12 max-w-3xl">
          Learn how to use MCP Marketplace with our comprehensive tutorials. From getting started to advanced topics, we've got you covered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <BookOpen className="h-5 w-5 text-blue-500" />
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(tutorial.level)}`}>
                    {tutorial.level}
                  </span>
                </div>
                <CardTitle className="text-white text-xl">{tutorial.title}</CardTitle>
                <CardDescription className="flex items-center text-gray-400 mt-1">
                  <Clock className="h-4 w-4 mr-1" />
                  {tutorial.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-gray-300 mb-6 flex-grow">{tutorial.description}</p>
                <Link 
                  href={`/tutorials/${tutorial.slug}`} 
                  className="text-blue-400 hover:text-blue-300 flex items-center"
                >
                  Start Tutorial
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 