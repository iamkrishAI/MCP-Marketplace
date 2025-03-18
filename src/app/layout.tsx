import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GitHubPagesRouter } from "@/components/GitHubPagesRouter";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// Get the base path from environment or use default for GitHub Pages
// Using a hardcoded value for production to ensure it works in the browser
const basePath = process.env.NODE_ENV === 'production' ? '/MCP-Marketplace' : '';

// Make basePath available globally through a data attribute
export const metadata: Metadata = {
  title: "MCP Marketplace - One-Click Connection for AI Integrations",
  description: "Effortlessly connect your LLMs to powerful external tools with a unified standard.",
  icons: {
    icon: `${basePath}/favicon.ico`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-basepath={basePath}>
      <head>
        <link rel="icon" href={`${basePath}/favicon.ico`} type="image/x-icon" sizes="16x16" />
        {/* Force no-cache for development */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <GitHubPagesRouter />
        <Script src={`${basePath}/github-pages-fix.js`} strategy="beforeInteractive" />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
