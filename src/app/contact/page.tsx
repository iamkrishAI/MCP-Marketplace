import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-gray-300 mb-12 max-w-2xl">
          Have questions about MCP Marketplace? We're here to help. Reach out to our team using the form below or through our other contact channels.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white text-xl">Send Us a Message</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What is your message about?"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Your message..."
                      className="w-full rounded-md bg-gray-800 border border-gray-700 text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email Us</h3>
                    <p className="text-gray-400">
                      <a href="mailto:info@mcpmarketplace.com" className="hover:text-blue-400 transition-colors">
                        info@mcpmarketplace.com
                      </a>
                    </p>
                    <p className="text-gray-400">
                      <a href="mailto:support@mcpmarketplace.com" className="hover:text-blue-400 transition-colors">
                        support@mcpmarketplace.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Live Chat</h3>
                    <p className="text-gray-400 mb-2">
                      Chat with our support team in real-time.
                    </p>
                    <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                      Start Chat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Call Us</h3>
                    <p className="text-gray-400">
                      <a href="tel:+1-555-123-4567" className="hover:text-blue-400 transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </p>
                    <p className="text-gray-400 text-sm">
                      Monday-Friday, 9am-5pm PT
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Visit Us</h3>
                    <p className="text-gray-400">
                      123 Tech Street<br />
                      San Francisco, CA 94107<br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 