import { Card, CardContent } from "@/components/ui/card";
import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Alex has over 15 years of experience in AI and machine learning. Previously led AI initiatives at major tech companies.",
      image: "/images/team/placeholder.png",
      social: {
        twitter: "https://twitter.com/alexjohnson",
        linkedin: "https://linkedin.com/in/alexjohnson",
        github: "https://github.com/alexjohnson"
      }
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Sarah is an expert in distributed systems and API design. She previously built scalable infrastructure at leading cloud providers.",
      image: "/images/team/placeholder.png",
      social: {
        twitter: "https://twitter.com/sarahchen",
        linkedin: "https://linkedin.com/in/sarahchen",
        github: "https://github.com/sarahchen"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Product",
      bio: "Michael brings product expertise from his time at top AI companies. Passionate about creating intuitive developer experiences.",
      image: "/images/team/placeholder.png",
      social: {
        twitter: "https://twitter.com/michaelrodriguez",
        linkedin: "https://linkedin.com/in/michaelrodriguez",
        github: "https://github.com/michaelrodriguez"
      }
    },
    {
      name: "Emma Wilson",
      role: "Lead Engineer",
      bio: "Emma is a full-stack engineer with a focus on performance and security. She's contributed to several open-source AI projects.",
      image: "/images/team/placeholder.png",
      social: {
        twitter: "https://twitter.com/emmawilson",
        linkedin: "https://linkedin.com/in/emmawilson",
        github: "https://github.com/emmawilson"
      }
    }
  ];

  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          About MCP Marketplace
        </h1>
        
        <div className="bg-gray-900 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 mb-6">
            At MCP Marketplace, we're on a mission to standardize and simplify how AI models connect to external tools and services. We believe that by creating a unified standard for AI integrations, we can accelerate innovation and make powerful AI capabilities accessible to developers everywhere.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-gray-300 mb-6">
            MCP Marketplace was founded in 2023 by a team of AI engineers who were frustrated with the fragmented landscape of AI integrations. We saw that developers were spending too much time building custom connectors instead of focusing on their core AI applications.
          </p>
          <p className="text-gray-300 mb-6">
            We created the Model Control Protocol (MCP) as an open standard for AI integrations, and built the MCP Marketplace to make these integrations easily accessible through one-click deployments. Today, we're proud to support thousands of developers and organizations in building more powerful and connected AI applications.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><span className="font-semibold text-white">Open Standards:</span> We believe in the power of open standards to drive innovation and interoperability.</li>
            <li><span className="font-semibold text-white">Developer Experience:</span> We're obsessed with creating intuitive, delightful experiences for developers.</li>
            <li><span className="font-semibold text-white">Community:</span> We value our community of contributors and users who help shape our platform.</li>
            <li><span className="font-semibold text-white">Quality:</span> We're committed to building reliable, secure, and performant integrations.</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-blue-400">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  <a 
                    href={member.social.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 