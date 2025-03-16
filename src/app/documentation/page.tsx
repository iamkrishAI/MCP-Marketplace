export default function DocumentationPage() {
  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
        MCP Documentation
      </h1>
      <div className="bg-gray-900 p-8 rounded-lg">
        <p className="text-gray-300 mb-4">
          Comprehensive documentation for MCP Marketplace is coming soon. This page will include:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Getting started guides</li>
          <li>API references</li>
          <li>Integration tutorials</li>
          <li>Best practices</li>
          <li>Troubleshooting</li>
        </ul>
      </div>
    </div>
  );
} 