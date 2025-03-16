"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Tag, Server, Copy, Check, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";

type Server = {
  id: string;
  name: string;
  category: string;
  downloads: number;
  tags: string[];
  connect_url: string;
  image: string;
  description: string;
  hosted: boolean;
  documentation_url: string;
};

type ConnectionInfo = {
  apiEndpoint: string;
  apiKey: string;
  serverId: string;
  serverName: string;
  status: 'provisioning' | 'ready';
};

export function MarketplaceSection() {
  const [servers, setServers] = useState<Server[]>([]);
  const [filteredServers, setFilteredServers] = useState<Server[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isConnectDialogOpen, setIsConnectDialogOpen] = useState(false);
  const [connectionInfo, setConnectionInfo] = useState<ConnectionInfo | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedIntegration, setSelectedIntegration] = useState<'json' | 'python' | 'javascript'>('json');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Get unique categories from servers
  const categories = servers.length > 0 
    ? ["All", ...new Set(servers.map(server => server.category))]
    : ["All"];

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const response = await fetch('/api/servers');
        const data = await response.json();
        setServers(data);
        setFilteredServers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching servers:", error);
        setIsLoading(false);
      }
    };

    fetchServers();
  }, []);

  useEffect(() => {
    // Filter servers based on search term and category
    let result = servers;
    
    if (searchTerm) {
      result = result.filter(server => 
        server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        server.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        server.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (selectedCategory && selectedCategory !== "All") {
      result = result.filter(server => server.category === selectedCategory);
    }
    
    setFilteredServers(result);
  }, [searchTerm, selectedCategory, servers]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === "All" ? null : category);
  };

  const handleConnectClick = async (server: Server) => {
    // Set initial provisioning state
    setConnectionInfo({
      apiEndpoint: '',
      apiKey: '',
      serverId: server.id,
      serverName: server.name,
      status: 'provisioning'
    });
    
    // Open the dialog immediately to show provisioning state
    setIsConnectDialogOpen(true);
    
    try {
      // Call the provision API
      const response = await fetch('/api/provision', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serverId: server.id }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to provision server');
      }
      
      const data = await response.json();
      
      // Update connection info with the response data
      setConnectionInfo({
        apiEndpoint: data.apiEndpoint,
        apiKey: data.apiKey,
        serverId: server.id,
        serverName: server.name,
        status: 'ready'
      });
    } catch (error) {
      console.error('Error provisioning server:', error);
      // Handle error state if needed
      // For now, we'll just set the status to ready with mock data
      setConnectionInfo(prev => prev ? { 
        ...prev, 
        apiEndpoint: `https://mcp-marketplace.com/${server.id.toLowerCase()}-mcp`,
        apiKey: generateApiKey(),
        status: 'ready' 
      } : null);
    }
  };

  const generateApiKey = () => {
    // Simple function to generate a random API key
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 16; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleCopyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    
    // Show success message if copying the entire snippet
    if (field === 'snippet') {
      setShowSuccessMessage(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    }
    
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const getCodeSnippet = () => {
    if (!connectionInfo) return '';
    
    if (selectedIntegration === 'json') {
      return `{
  "mcp": {
    "name": "${connectionInfo.serverName}",
    "url": "${connectionInfo.apiEndpoint}",
    "api_key": "${connectionInfo.apiKey}"
  }
}`;
    } else if (selectedIntegration === 'python') {
      return `from mcp_marketplace import MCPClient

client = MCPClient(api_key="${connectionInfo.apiKey}")
${connectionInfo.serverName.toLowerCase().replace(/\s+/g, '_')} = client.connect("${connectionInfo.serverName.toLowerCase().replace(/\s+/g, '_')}")
response = ${connectionInfo.serverName.toLowerCase().replace(/\s+/g, '_')}.call("query", {"your_parameter": "value"})
print(response)`;
    } else {
      return `import { MCPClient } from 'mcp-marketplace';

const client = new MCPClient({ apiKey: "${connectionInfo.apiKey}" });
const ${connectionInfo.serverName.toLowerCase().replace(/\s+/g, '_')} = client.connect("${connectionInfo.serverName.toLowerCase().replace(/\s+/g, '_')}");
const response = await ${connectionInfo.serverName.toLowerCase().replace(/\s+/g, '_')}.call("query", { yourParameter: "value" });
console.log(response);`;
    }
  };

  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            MCP Server Marketplace
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse and connect to MCP servers for your AI applications with a single click.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="w-full md:w-1/3">
            <Input
              type="text"
              placeholder="Search servers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-900 border-gray-700 text-white"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category || (category === "All" && !selectedCategory) ? "default" : "outline"}
                onClick={() => handleCategoryChange(category)}
                className={selectedCategory === category || (category === "All" && !selectedCategory) 
                  ? "bg-blue-600 hover:bg-blue-700" 
                  : "border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Server Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServers.length > 0 ? (
              filteredServers.map((server) => (
                <Card key={server.id} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white text-xl mb-1">{server.name}</CardTitle>
                        <CardDescription className="text-blue-400">{server.category}</CardDescription>
                      </div>
                      <div className="bg-gray-800 p-2 rounded-full">
                        <Server className="h-6 w-6 text-blue-500" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-400 mb-4">{server.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {server.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full flex items-center">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Download className="h-4 w-4 mr-1" />
                      <span>{server.downloads.toLocaleString()} downloads</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                      onClick={() => handleConnectClick(server)}
                    >
                      Connect to MCP
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl text-gray-400">No servers found matching your criteria</h3>
                <Button 
                  variant="link" 
                  className="text-blue-500 mt-2"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Connection Dialog */}
      <Dialog open={isConnectDialogOpen} onOpenChange={setIsConnectDialogOpen}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-2">
              {connectionInfo?.status === 'provisioning' ? 
                `Setting up ${connectionInfo?.serverName} MCP...` : 
                `${connectionInfo?.serverName} MCP is Ready!`}
            </DialogTitle>
            <DialogDescription className="text-gray-400 text-center">
              {connectionInfo?.status === 'provisioning' ? 
                'We are provisioning your MCP server. This will only take a moment...' : 
                'Your MCP is now ready to use. Copy the details below to integrate with your application.'}
            </DialogDescription>
          </DialogHeader>
          
          {connectionInfo?.status === 'provisioning' ? (
            <div className="flex flex-col justify-center items-center py-12 space-y-4">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
              <p className="text-gray-400 text-center">Setting up your hosted MCP server...</p>
            </div>
          ) : (
            <>
              {showSuccessMessage && (
                <div className="bg-green-900/30 border border-green-700 rounded-md p-4 mb-4 flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <p className="text-green-400 text-sm">
                    Integration code copied! You can now paste this into your application or LLM tool.
                  </p>
                </div>
              )}
              
              <div className="space-y-6 my-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Integration Steps</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-blue-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-300 text-sm">Your MCP server has been provisioned on our platform</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-300 text-sm">Copy your API endpoint and key (or the integration code)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-300 text-sm">Paste into your application or LLM tool</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* API Endpoint */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">API Endpoint</label>
                  <div className="flex items-center">
                    <div className="bg-gray-800 p-3 rounded-l-md border-r border-gray-700 flex-grow overflow-x-auto whitespace-nowrap text-blue-400">
                      {connectionInfo?.apiEndpoint}
                    </div>
                    <button 
                      className="bg-gray-800 p-3 rounded-r-md hover:bg-gray-700 transition-colors"
                      onClick={() => connectionInfo && handleCopyToClipboard(connectionInfo.apiEndpoint, 'endpoint')}
                    >
                      {copiedField === 'endpoint' ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5 text-gray-400" />}
                    </button>
                  </div>
                </div>
                
                {/* API Key */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">API Key</label>
                  <div className="flex items-center">
                    <div className="bg-gray-800 p-3 rounded-l-md border-r border-gray-700 flex-grow font-mono text-green-400">
                      {connectionInfo?.apiKey}
                    </div>
                    <button 
                      className="bg-gray-800 p-3 rounded-r-md hover:bg-gray-700 transition-colors"
                      onClick={() => connectionInfo && handleCopyToClipboard(connectionInfo.apiKey, 'key')}
                    >
                      {copiedField === 'key' ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5 text-gray-400" />}
                    </button>
                  </div>
                </div>
                
                {/* Integration Options */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Integration Method</label>
                  <div className="flex space-x-2">
                    <Button 
                      variant={selectedIntegration === 'json' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedIntegration('json')}
                      className={selectedIntegration === 'json' 
                        ? "bg-blue-600 hover:bg-blue-700 flex-1" 
                        : "border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 flex-1"
                      }
                    >
                      JSON
                    </Button>
                    <Button 
                      variant={selectedIntegration === 'python' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedIntegration('python')}
                      className={selectedIntegration === 'python' 
                        ? "bg-blue-600 hover:bg-blue-700 flex-1" 
                        : "border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 flex-1"
                      }
                    >
                      Python
                    </Button>
                    <Button 
                      variant={selectedIntegration === 'javascript' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedIntegration('javascript')}
                      className={selectedIntegration === 'javascript' 
                        ? "bg-blue-600 hover:bg-blue-700 flex-1" 
                        : "border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 flex-1"
                      }
                    >
                      JavaScript
                    </Button>
                  </div>
                </div>
                
                {/* Code Snippet */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-gray-400">Integration Code</label>
                    <button 
                      className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                      onClick={() => connectionInfo && handleCopyToClipboard(getCodeSnippet(), 'snippet')}
                    >
                      <span>Copy all</span>
                      <Copy className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="relative">
                    <pre className="bg-gray-800 p-3 rounded-md overflow-x-auto text-sm text-purple-300 font-mono">
                      {getCodeSnippet()}
                    </pre>
                    <button 
                      className="absolute top-2 right-2 p-1.5 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
                      onClick={() => connectionInfo && handleCopyToClipboard(getCodeSnippet(), 'snippet')}
                    >
                      {copiedField === 'snippet' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-gray-400" />}
                    </button>
                  </div>
                </div>
              </div>
              
              <DialogFooter className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3 w-full">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => setIsConnectDialogOpen(false)}
                  >
                    Done
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                    onClick={() => connectionInfo && window.open(servers.find(s => s.id === connectionInfo.serverId)?.documentation_url || 'https://docs.mcp-marketplace.com/integration', '_blank')}
                  >
                    View Docs
                  </Button>
                </div>
                <div className="flex justify-center gap-4 mt-2">
                  <button 
                    className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    onClick={() => window.open('https://claude.ai/integrations', '_blank')}
                  >
                    <span>Add to Claude</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                  <button 
                    className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    onClick={() => window.open('https://platform.openai.com/integrations', '_blank')}
                  >
                    <span>Add to OpenAI</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
} 