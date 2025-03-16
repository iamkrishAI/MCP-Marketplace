import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "How TechCorp Improved AI Response Time by 75%",
      company: "TechCorp Inc.",
      industry: "Technology",
      challenge: "Slow AI response times due to inefficient integrations",
      solution: "Implemented MCP servers for PostgreSQL and Elasticsearch",
      results: "75% faster response times, 40% reduction in infrastructure costs",
      slug: "techcorp-case-study"
    },
    {
      title: "FinanceAI's Journey to Seamless Data Integration",
      company: "FinanceAI",
      industry: "Finance",
      challenge: "Complex data pipelines causing reliability issues",
      solution: "Centralized data access through MCP marketplace integrations",
      results: "99.9% uptime, 60% reduction in maintenance overhead",
      slug: "financeai-case-study"
    },
    {
      title: "HealthTech Innovations: Scaling AI for Medical Research",
      company: "HealthTech Innovations",
      industry: "Healthcare",
      challenge: "Difficulty scaling AI models for large medical datasets",
      solution: "Deployed custom MCP servers with specialized data processing",
      results: "3x increase in data processing capacity, enabled real-time analysis",
      slug: "healthtech-case-study"
    },
    {
      title: "EduLearn's AI Tutoring Platform Transformation",
      company: "EduLearn",
      industry: "Education",
      challenge: "Limited AI capabilities for personalized learning",
      solution: "Integrated multiple MCP servers for specialized educational tools",
      results: "200% increase in student engagement, 45% improvement in learning outcomes",
      slug: "edulearn-case-study"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Customer Success Stories
        </h1>
        <p className="text-gray-300 mb-12 max-w-3xl">
          Discover how organizations across industries are leveraging MCP Marketplace to transform their AI capabilities and achieve remarkable results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start gap-4 mb-2">
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <Building className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">{study.title}</CardTitle>
                    <CardDescription className="text-gray-400 mt-1">
                      {study.company} | {study.industry}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="mb-6 flex-grow">
                  <div className="mb-4">
                    <h3 className="text-blue-400 font-medium mb-1">Challenge</h3>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-purple-400 font-medium mb-1">Solution</h3>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-green-400 font-medium mb-1">Results</h3>
                    <p className="text-gray-300">{study.results}</p>
                  </div>
                </div>
                <Link 
                  href={`/case-studies/${study.slug}`} 
                  className="text-blue-400 hover:text-blue-300 flex items-center"
                >
                  Read Full Case Study
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