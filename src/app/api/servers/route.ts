import { NextResponse } from 'next/server';

// Mock data for MCP servers
const servers = [
  {
    id: 'postgresql',
    name: 'PostgreSQL Connector',
    category: 'Database',
    downloads: 12453,
    tags: ['SQL', 'Database', 'Relational'],
    connect_url: '/connect/postgresql',
    image: '/images/servers/postgresql.png',
    description: 'Connect your LLM to PostgreSQL databases for data retrieval and manipulation.',
    hosted: true,
    documentation_url: 'https://docs.mcp-marketplace.com/integration/postgresql'
  },
  {
    id: 'elasticsearch',
    name: 'Elasticsearch Integration',
    category: 'Search',
    downloads: 8721,
    tags: ['Search', 'Indexing', 'Analytics'],
    connect_url: '/connect/elasticsearch',
    image: '/images/servers/elasticsearch.png',
    description: 'Powerful search capabilities for your AI applications with Elasticsearch.',
    hosted: true,
    documentation_url: 'https://docs.mcp-marketplace.com/integration/elasticsearch'
  },
  {
    id: 'sendgrid',
    name: 'SendGrid Email Service',
    category: 'Email',
    downloads: 6543,
    tags: ['Email', 'Notifications', 'Marketing'],
    connect_url: '/connect/sendgrid',
    image: '/images/servers/sendgrid.png',
    description: 'Send emails and notifications directly from your LLM applications.',
    hosted: true,
    documentation_url: 'https://docs.mcp-marketplace.com/integration/sendgrid'
  },
  {
    id: 'mongodb',
    name: 'MongoDB Connector',
    category: 'Database',
    downloads: 9876,
    tags: ['NoSQL', 'Database', 'Document'],
    connect_url: '/connect/mongodb',
    image: '/images/servers/mongodb.png',
    description: 'Integrate with MongoDB for flexible document-based data storage.',
    hosted: true,
    documentation_url: 'https://docs.mcp-marketplace.com/integration/mongodb'
  },
  {
    id: 'stripe',
    name: 'Stripe Payment Processing',
    category: 'Payment',
    downloads: 7654,
    tags: ['Payments', 'E-commerce', 'Billing'],
    connect_url: '/connect/stripe',
    image: '/images/servers/stripe.png',
    description: 'Process payments and manage subscriptions in your AI applications.',
    hosted: true,
    documentation_url: 'https://docs.mcp-marketplace.com/integration/stripe'
  },
  {
    id: 'openai',
    name: 'OpenAI API Connector',
    category: 'AI',
    downloads: 15432,
    tags: ['AI', 'GPT', 'Machine Learning'],
    connect_url: '/connect/openai',
    image: '/images/servers/openai.png',
    description: 'Connect to OpenAI APIs for enhanced AI capabilities and model access.',
    hosted: true,
    documentation_url: 'https://docs.mcp-marketplace.com/integration/openai'
  },
  {
    id: 'aws-s3',
    name: 'AWS S3 Storage',
    category: 'Storage',
    downloads: 8765,
    tags: ['Cloud', 'Storage', 'AWS'],
    connect_url: '/connect/aws-s3',
    image: '/images/servers/aws-s3.png',
    description: 'Store and retrieve files and data using Amazon S3 cloud storage.',
    hosted: true,
    documentation_url: 'https://docs.mcp-marketplace.com/integration/aws-s3'
  },
  {
    id: 'twilio',
    name: 'Twilio SMS Integration',
    category: 'Communication',
    downloads: 5432,
    tags: ['SMS', 'Messaging', 'Notifications'],
    connect_url: '/connect/twilio',
    image: '/images/servers/twilio.png',
    description: 'Send and receive SMS messages through your AI applications.',
    hosted: true,
    documentation_url: 'https://docs.mcp-marketplace.com/integration/twilio'
  },
  {
    id: 'github',
    name: 'GitHub MCP',
    category: 'Development',
    downloads: 14321,
    tags: ['Git', 'Code', 'Version Control'],
    connect_url: '/connect/github',
    image: '/images/servers/github.png',
    description: 'Access GitHub repositories, issues, and pull requests from your AI applications.',
    hosted: true,
    documentation_url: 'https://docs.mcp-marketplace.com/integration/github'
  }
];

export async function GET() {
  // Simulate a slight delay as would happen in a real API
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json(servers);
} 