import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, FileJson, Server, Database } from "lucide-react";

export default function ApiReferencePage() {
  const apiEndpoints = [
    {
      name: "Authentication",
      description: "Endpoints for user authentication and token management.",
      icon: <Code className="h-6 w-6 text-blue-500" />,
      endpoints: [
        { method: "POST", path: "/api/auth/login", description: "Authenticate a user and get a token" },
        { method: "POST", path: "/api/auth/refresh", description: "Refresh an authentication token" },
        { method: "POST", path: "/api/auth/logout", description: "Invalidate a token" }
      ]
    },
    {
      name: "Servers",
      description: "Endpoints for managing MCP servers.",
      icon: <Server className="h-6 w-6 text-purple-500" />,
      endpoints: [
        { method: "GET", path: "/api/servers", description: "List all available MCP servers" },
        { method: "GET", path: "/api/servers/{id}", description: "Get details for a specific server" },
        { method: "POST", path: "/api/servers/connect", description: "Connect to an MCP server instance" }
      ]
    },
    {
      name: "Integrations",
      description: "Endpoints for working with MCP integrations.",
      icon: <FileJson className="h-6 w-6 text-green-500" />,
      endpoints: [
        { method: "GET", path: "/api/integrations", description: "List all available integrations" },
        { method: "GET", path: "/api/integrations/{id}", description: "Get details for a specific integration" },
        { method: "POST", path: "/api/integrations/install", description: "Install an integration to a server" }
      ]
    },
    {
      name: "Data",
      description: "Endpoints for data management and querying.",
      icon: <Database className="h-6 w-6 text-orange-500" />,
      endpoints: [
        { method: "GET", path: "/api/data/{server_id}", description: "Query data from a server" },
        { method: "POST", path: "/api/data/{server_id}", description: "Send data to a server" },
        { method: "DELETE", path: "/api/data/{server_id}", description: "Clear data from a server" }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          API Reference
        </h1>
        <p className="text-gray-300 mb-12">
          Comprehensive documentation for the MCP Marketplace API. Use these endpoints to interact with MCP servers and integrations programmatically.
        </p>

        <div className="space-y-8">
          {apiEndpoints.map((section, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  {section.icon}
                </div>
                <div>
                  <CardTitle className="text-white text-xl">{section.name}</CardTitle>
                  <p className="text-gray-400 mt-1">{section.description}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="border border-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="px-4 py-3 text-gray-300 font-medium">Method</th>
                        <th className="px-4 py-3 text-gray-300 font-medium">Endpoint</th>
                        <th className="px-4 py-3 text-gray-300 font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {section.endpoints.map((endpoint, endpointIndex) => (
                        <tr key={endpointIndex}>
                          <td className="px-4 py-3">
                            <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                              endpoint.method === "GET" 
                                ? "bg-green-900/50 text-green-400" 
                                : endpoint.method === "POST"
                                ? "bg-blue-900/50 text-blue-400"
                                : "bg-red-900/50 text-red-400"
                            }`}>
                              {endpoint.method}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-gray-300 font-mono text-sm">{endpoint.path}</td>
                          <td className="px-4 py-3 text-gray-400">{endpoint.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 