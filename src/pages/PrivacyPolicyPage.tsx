import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Eye, Users, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';

export function PrivacyPolicyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#317039] to-[#4a9c52] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-white/80 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold font-['Montserrat'] mb-4">Privacy Policy</h1>
            <p className="text-xl font-['Inter'] opacity-90">Your Privacy, Our Responsibility</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 font-['Inter']">
          
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              At J K Enterprises, we value your trust and are committed to protecting the personal and business information you share with us. Whether you are a supplier, buyer, or recycling partner, we ensure that your data is handled with transparency, security, and compliance—aligned with the Indian IT Act and internationally recognized data protection standards such as GDPR.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This Privacy Policy explains what information we collect, how we use it, how we safeguard it, and the rights you have regarding your data.
            </p>
          </div>

          {/* Information We Collect */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Eye className="h-6 w-6 text-[#317039] mr-3" />
              <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800">Information We Collect</h2>
            </div>
            <p className="text-gray-700 mb-4">
              When you engage with our business—through inquiries, scrap collection requests, or recycling transactions—we may collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Full Name / Business Name</li>
              <li>Email Address & Phone Number</li>
              <li>Business & Operational Addresses</li>
              <li>Transaction & Payment Details (via secure third-party gateways)</li>
              <li>Material Categories (scrap type, weight, grade, and value)</li>
              <li>Order/Service History</li>
              <li>Device & Browser Information (if using our website)</li>
              <li>Cookies and Tracking Data (for analytics and website performance)</li>
            </ul>
            <p className="text-gray-700 mt-4 font-semibold">
              We collect only the data required for business transactions, compliance, and service improvement.
            </p>
          </section>

          {/* Why We Collect */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-[#317039] mr-3" />
              <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800">Why We Collect Your Information</h2>
            </div>
            <p className="text-gray-700 mb-4">Your information may be used for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Processing and fulfilling scrap collection, recycling, or trading orders</li>
              <li>Communicating pickup schedules, invoices, and delivery updates</li>
              <li>Providing customer and supplier support</li>
              <li>Ensuring compliance with environmental, trade, and waste management regulations</li>
              <li>Maintaining proper accounting and business records</li>
              <li>Improving our recycling operations and digital platforms</li>
              <li>Sending optional updates or promotional offers (only if you opt in)</li>
            </ul>
          </section>

          {/* How We Protect */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-[#317039] mr-3" />
              <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800">How We Protect Your Information</h2>
            </div>
            <p className="text-gray-700 mb-4">
              We follow strong safeguards to ensure your data remains secure and confidential:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">SSL Encryption</h3>
                <p className="text-gray-700 text-sm">All online communication and transactions are encrypted.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Secure Payments</h3>
                <p className="text-gray-700 text-sm">Transactions are handled via PCI-compliant third-party gateways. We do not store sensitive payment data.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Server Security</h3>
                <p className="text-gray-700 text-sm">Our digital systems are protected with firewalls, restricted access, and routine audits.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Confidential Access</h3>
                <p className="text-gray-700 text-sm">Only authorized personnel handle sensitive data under strict business protocols.</p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-4">Your Rights & Choices</h2>
            <p className="text-gray-700 mb-4">You are in control of your data. You can:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Request access to the information we hold about you</li>
              <li>Ask for corrections or updates to inaccurate details</li>
              <li>Request deletion of your personal data (subject to compliance/legal obligations)</li>
              <li>Withdraw consent for promotional communications</li>
              <li>Raise a privacy concern or complaint directly with us</li>
            </ul>
            <p className="text-gray-700 mt-4 font-semibold">
              We commit to responding to all valid requests within 30 days.
            </p>
          </section>

          {/* Third-Party Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-4">Third-Party Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell or rent your personal data. Information is shared only with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Logistics partners for transportation of recyclable materials</li>
              <li>Payment providers for secure transactions</li>
              <li>Regulatory authorities as required by law (tax, trade, or environmental compliance)</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, requests, or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-[#317039] mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">J K Enterprises</p>
                  <p className="text-gray-700">
                    No 251/7, Anna Street, Mevalurkuppam Main Road,<br />
                    Sriperumbudur, Kancheepuram,<br />
                    Tamil Nadu – 602105, India
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#317039] mr-3" />
                  <p className="text-gray-700">contact@jkenterprises.live</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#317039] mr-3" />
                  <p className="text-gray-700">jkenterprises561@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#317039] mr-3" />
                <p className="text-gray-700">+91 63792 03963</p>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="border-t pt-6">
            <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-4">Policy Updates</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy periodically to reflect changes in law or business practices. 
              Updates will be posted on this page with a new "Last Revised" date.
            </p>
            <div className="bg-[#317039] text-white p-4 rounded-lg">
              <p className="font-semibold">Last Revised: August 2025</p>
              <p className="text-sm opacity-90">© 2025 J K Enterprises. All Rights Reserved.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
