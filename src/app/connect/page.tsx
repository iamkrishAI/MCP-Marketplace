import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Server } from "lucide-react";

export default function ConnectPage() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-3xl mx-auto">
        <h1  className="text-3xl md:text-4xl font-bold text-white mb-4">
          Connect to MCP
        </h1>
        <p className="text-gray-300 mb-8">
          Configure and connect to your MCP server in minutes. Get started with our simple connection process.
        </p>
        
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Server className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-white text-xl">MCP Server Connection</CardTitle>
                <CardDescription className="text-gray-400">
                  Quick and easy setup process
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-6">
              The connection page is coming soon. You'll be able to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
              <li>Choose from various MCP server templates</li>
              <li>Configure server settings</li>
              <li>Set up authentication</li>
              <li>Connect with a single click</li>
              <li>Monitor server performance</li>
            </ul>
            
            <button 
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg tracking-wide shadow-md rounded-md cursor-not-allowed disabled:opacity-100"
              disabled
            >
              Coming Soon
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 