import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      description: "For individuals and small projects",
      features: [
        "1 MCP server connection",
        "Basic integrations",
        "Community support",
        "1,000 API calls per month",
        "Standard security"
      ],
      buttonText: "Get Started",
      highlighted: false
    },
    {
      name: "Pro",
      price: "$49",
      period: "per month",
      description: "For professional developers and teams",
      features: [
        "10 MCP server connections",
        "All integrations",
        "Priority support",
        "100,000 API calls per month",
        "Advanced security",
        "Custom domains",
        "Team collaboration"
      ],
      buttonText: "Coming Soon",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited MCP server connections",
        "Custom integrations",
        "Dedicated support",
        "Unlimited API calls",
        "Enterprise-grade security",
        "SLA guarantees",
        "On-premise options",
        "Custom training"
      ],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-32">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Choose the plan that's right for you. All plans include access to our marketplace of MCP integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <Card 
            key={index} 
            className={`bg-gray-900 border-gray-800 flex flex-col h-full ${
              plan.highlighted ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <CardHeader>
              <CardTitle className="text-white text-xl">{plan.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                {plan.period && <span className="text-gray-400 ml-1">{plan.period}</span>}
              </div>
              <CardDescription className="text-gray-400 mt-2">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className={`w-full ${
                  plan.highlighted 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
                    : "bg-gray-800 hover:bg-gray-700"
                } text-white`}
                disabled={plan.buttonText === "Coming Soon"}
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
} 