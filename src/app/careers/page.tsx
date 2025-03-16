import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, Clock, Code, Server, Users } from "lucide-react";

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "San Francisco, CA (Remote Available)",
      type: "Full-time",
      description: "We're looking for a senior full-stack engineer to help build and scale our MCP Marketplace platform. You'll work on both frontend and backend systems, designing and implementing features that help developers connect their AI models to external tools.",
      requirements: [
        "5+ years of experience in full-stack development",
        "Proficiency in TypeScript, React, and Node.js",
        "Experience with cloud infrastructure (AWS, GCP, or Azure)",
        "Strong understanding of API design and implementation",
        "Experience with database design and optimization"
      ],
      icon: <Code className="h-6 w-6 text-blue-500" />
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      description: "Join our infrastructure team to build and maintain the systems that power MCP Marketplace. You'll be responsible for designing, implementing, and maintaining our cloud infrastructure, CI/CD pipelines, and deployment processes.",
      requirements: [
        "3+ years of experience in DevOps or SRE roles",
        "Strong knowledge of cloud platforms (AWS, GCP, or Azure)",
        "Experience with containerization and orchestration (Docker, Kubernetes)",
        "Familiarity with infrastructure as code (Terraform, CloudFormation)",
        "Understanding of monitoring, logging, and alerting systems"
      ],
      icon: <Server className="h-6 w-6 text-purple-500" />
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "We're seeking a product manager to help shape the future of MCP Marketplace. You'll work closely with engineering, design, and business teams to define product strategy, prioritize features, and deliver a world-class developer experience.",
      requirements: [
        "3+ years of experience in product management for developer tools or platforms",
        "Strong understanding of AI/ML ecosystem and developer workflows",
        "Experience with agile development methodologies",
        "Excellent communication and stakeholder management skills",
        "Data-driven approach to product decisions"
      ],
      icon: <Users className="h-6 w-6 text-green-500" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Join Our Team
        </h1>
        <p className="text-gray-300 mb-12 max-w-3xl">
          We're building the future of AI integrations at MCP Marketplace. Join us on our mission to standardize and simplify how AI models connect to external tools and services.
        </p>

        <div className="bg-gray-900 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <Briefcase className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Impactful Work</h3>
                <p className="text-gray-400">
                  Build products that are shaping the future of AI and helping developers around the world.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <Users className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Collaborative Culture</h3>
                <p className="text-gray-400">
                  Work with a diverse team of talented individuals who are passionate about what they do.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Work-Life Balance</h3>
                <p className="text-gray-400">
                  Flexible work arrangements, generous PTO, and a focus on sustainable pace.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-8">Open Positions</h2>
        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  {job.icon}
                </div>
                <div className="flex-grow">
                  <CardTitle className="text-white text-xl">{job.title}</CardTitle>
                  <CardDescription className="text-gray-400 mt-1">
                    {job.department}
                  </CardDescription>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.type}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <h4 className="text-white font-medium mb-2">Requirements:</h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
                  {job.requirements.map((req, reqIndex) => (
                    <li key={reqIndex}>{req}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">
            Don't see a position that matches your skills? We're always looking for talented individuals to join our team.
          </p>
          <Button 
            className="bg-gray-800 hover:bg-gray-700 text-white"
            size="lg"
          >
            Send General Application
          </Button>
        </div>
      </div>
    </div>
  );
} 