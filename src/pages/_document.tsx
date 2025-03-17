import { Html, Head, Main, NextScript } from 'next/document';

// Get the base path from environment or use default for GitHub Pages
const basePath = process.env.NODE_ENV === 'production' ? '/MCP-Marketplace' : '';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Force no-cache for development */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <link rel="icon" href={`${basePath}/favicon.ico`} type="image/x-icon" sizes="16x16" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 