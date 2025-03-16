export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Privacy Policy
        </h1>
        
        <div className="bg-gray-900 p-8 rounded-lg space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 mb-4">
              At MCP Marketplace, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p className="text-gray-300">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              We collect information that you provide directly to us when you register for an account, create or modify your profile, set preferences, sign-up for or make purchases through the Services.
            </p>
            <p className="text-gray-300 mb-4">
              The types of information we may collect include:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Your name, email address, phone number, and other contact information</li>
              <li>Login credentials</li>
              <li>Payment information</li>
              <li>Profile information</li>
              <li>Preferences and settings</li>
              <li>Usage data and analytics</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates, security alerts, and support messages</li>
              <li>Respond to comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, and events</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize and improve your experience</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Sharing Your Information</h2>
            <p className="text-gray-300 mb-4">
              We may share the information we collect in various ways, including:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
              <li>In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law or legal process</li>
              <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of MCP Marketplace or others</li>
              <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company</li>
              <li>With your consent or at your direction</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="text-gray-300">
              We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no Internet or email transmission is ever fully secure or error-free.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-300">
              We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about this privacy policy, please contact us at: <a href="mailto:privacy@mcpmarketplace.com" className="text-blue-400 hover:underline">privacy@mcpmarketplace.com</a>
            </p>
          </div>
          
          <div className="pt-4 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              Last updated: June 1, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 