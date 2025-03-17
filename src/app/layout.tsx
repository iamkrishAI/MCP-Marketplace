import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// Get the base path from environment or use default for GitHub Pages
const basePath = process.env.NODE_ENV === 'production' ? '/MCP-Marketplace' : '';

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
    <html lang="en">
      <head>
        <link rel="icon" href={`${basePath}/favicon.ico`} type="image/x-icon" sizes="16x16" />
        {/* Force no-cache for development */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
