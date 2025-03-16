export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Terms of Service
        </h1>
        
        <div className="bg-gray-900 p-8 rounded-lg space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing or using the MCP Marketplace website, services, or any applications made available by MCP Marketplace (collectively, the "Service"), you agree to be bound by these terms of service ("Terms"). If you do not agree to these Terms, you may not access or use the Service.
            </p>
            <p className="text-gray-300">
              We reserve the right to modify these Terms at any time. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p className="text-gray-300 mb-4">
              MCP Marketplace provides a platform for deploying and managing MCP (Model Control Protocol) servers and integrations for AI applications. The Service may include various features, functionalities, and updates that may be added, modified, or removed at our discretion.
            </p>
            <p className="text-gray-300">
              We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
            <p className="text-gray-300 mb-4">
              To access certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            <p className="text-gray-300 mb-4">
              You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Provide accurate, current, and complete information during the registration process</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Notify us immediately of any unauthorized use of your account or any other breach of security</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4. User Content</h2>
            <p className="text-gray-300 mb-4">
              You retain all rights to any content you submit, post, or display on or through the Service ("User Content"). By submitting User Content to the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content in connection with providing and promoting the Service.
            </p>
            <p className="text-gray-300">
              You represent and warrant that: (i) you own the User Content or have the right to use and grant us the rights and license as provided in these Terms, and (ii) the posting of your User Content does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">5. Prohibited Conduct</h2>
            <p className="text-gray-300 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Use the Service for any illegal purpose or in violation of any laws</li>
              <li>Violate or infringe other people's intellectual property, privacy, or other rights</li>
              <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
              <li>Attempt to gain unauthorized access to the Service, user accounts, or computer systems</li>
              <li>Transmit any viruses, worms, defects, Trojan horses, or other harmful code</li>
              <li>Use the Service to send unsolicited communications or promotions</li>
              <li>Impersonate any person or entity or falsely state or misrepresent your affiliation</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of MCP Marketplace and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
            <p className="text-gray-300">
              Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of MCP Marketplace.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-300">
              In no event shall MCP Marketplace, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
            <p className="text-gray-300">
              These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about these Terms, please contact us at: <a href="mailto:legal@mcpmarketplace.com" className="text-blue-400 hover:underline">legal@mcpmarketplace.com</a>
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