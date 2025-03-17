import { NextResponse } from 'next/server';

// For static export compatibility
export const dynamic = 'force-static';

// This API endpoint simulates the provisioning of an MCP server
export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { serverId } = body;
    
    if (!serverId) {
      return NextResponse.json({ error: 'Server ID is required' }, { status: 400 });
    }
    
    // Simulate a delay for server provisioning
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate a random API key
    const apiKey = generateApiKey();
    
    // Return the connection details
    return NextResponse.json({
      success: true,
      apiEndpoint: `https://mcp-marketplace.com/${serverId.toLowerCase()}-mcp`,
      apiKey,
      status: 'ready'
    });
  } catch (error) {
    console.error('Error provisioning server:', error);
    return NextResponse.json({ error: 'Failed to provision server' }, { status: 500 });
  }
}

// Helper function to generate a random API key
function generateApiKey() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 16; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
} 