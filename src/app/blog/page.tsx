import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, User } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Introducing MCP Marketplace: A New Standard for AI Integrations",
      excerpt: "Today, we're excited to announce the launch of MCP Marketplace, a revolutionary platform for connecting LLMs to external tools with a unified standard.",
      date: "June 15, 2023",
      author: "Sarah Johnson",
      slug: "introducing-mcp-marketplace"
    },
    {
      title: "How to Build Your First MCP Integration",
      excerpt: "In this tutorial, we'll walk through the process of creating your first MCP integration from scratch, step by step.",
      date: "June 22, 2023",
      author: "Michael Chen",
      slug: "build-first-mcp-integration"
    },
    {
      title: "The Future of AI Integrations: Why Standards Matter",
      excerpt: "As AI becomes more integrated into our tools and workflows, the need for standardized integration patterns becomes increasingly important.",
      date: "July 5, 2023",
      author: "Alex Rodriguez",
      slug: "future-of-ai-integrations"
    },
    {
      title: "Case Study: How Company X Improved Efficiency by 300% with MCP",
      excerpt: "Learn how Company X implemented MCP integrations to streamline their AI workflows and achieved remarkable efficiency improvements.",
      date: "July 18, 2023",
      author: "Emma Wilson",
      slug: "case-study-company-x"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          MCP Marketplace Blog
        </h1>
        <p className="text-gray-300 mb-12">
          Insights, tutorials, and updates from the MCP Marketplace team.
        </p>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300">
              <CardHeader>
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  <CardTitle className="text-white text-xl">{post.title}</CardTitle>
                </Link>
                <CardDescription className="flex items-center gap-4 text-gray-400 mt-2">
                  <span className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-blue-400 hover:text-blue-300 inline-block mt-4"
                >
                  Read more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 