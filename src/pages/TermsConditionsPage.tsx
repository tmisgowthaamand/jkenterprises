import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Scale, Truck, CreditCard, AlertTriangle, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';

export function TermsConditionsPage() {
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
            <FileText className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold font-['Montserrat'] mb-4">Terms & Conditions</h1>
            <p className="text-xl font-['Inter'] opacity-90">Last Updated: August 2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 font-['Inter']">
          
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              Welcome to J K Enterprises. By engaging in scrap collection, recycling services, or trading with us—whether directly, through our website, or by contacting us—you agree to comply with and be bound by the following Terms & Conditions. These terms govern all transactions, logistics, and business dealings with us.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
              If you do not agree with these terms, please refrain from using our services.
            </p>
          </div>

          {/* General Use */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Scale className="h-6 w-6 text-[#317039] mr-3" />
              <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800">1. General Use of Services</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>By using our services, you confirm that you are at least 18 years of age or acting on behalf of a business entity.</li>
              <li>Services must only be used for lawful purposes in compliance with waste management and environmental laws.</li>
              <li>We reserve the right to refuse service if fraudulent, unlawful, or unsafe practices are detected.</li>
            </ul>
          </section>

          {/* Scrap Collection */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-4">2. Scrap Collection & Transactions</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>All scrap collection, segregation, and trading is based on weight, grade, and material type.</li>
              <li>Prices are determined according to prevailing market rates, material condition, and quality verification.</li>
              <li>Once scrap is weighed, documented, and invoiced, the transaction is considered final.</li>
              <li>Hazardous, restricted, or non-recyclable materials may be refused in compliance with government regulations.</li>
            </ul>
          </section>

          {/* Payments */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <CreditCard className="h-6 w-6 text-[#317039] mr-3" />
              <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800">3. Payments</h2>
            </div>
            <p className="text-gray-700 mb-4">Payments for scrap transactions are made as per agreed terms:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Immediate payment for small transactions</li>
              <li>Scheduled settlements for wholesale or bulk agreements</li>
            </ul>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Payment Methods:</strong> Payments are accepted via bank transfer, UPI, or other secure digital methods.
              </p>
              <p className="text-gray-700">
                <strong>Security:</strong> J K Enterprises does not store sensitive payment details; transactions are processed via secure gateways.
              </p>
            </div>
          </section>

          {/* Logistics */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Truck className="h-6 w-6 text-[#317039] mr-3" />
              <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800">4. Logistics & Delivery</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Scrap pickup and delivery schedules will be coordinated directly with clients.</li>
              <li>Customers must ensure clear access for loading/unloading at the collection site.</li>
              <li>For bulk orders, transport arrangements may be handled by J K Enterprises or coordinated with the buyer.</li>
              <li>Delivery timelines may vary based on location, logistics provider availability, and external conditions.</li>
            </ul>
          </section>

          {/* Returns & Disputes */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-[#317039] mr-3" />
              <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800">5. Returns & Disputes</h2>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-gray-700 font-semibold">
                Due to the nature of scrap trading, returns are not accepted once materials have been verified, weighed, and invoiced.
              </p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Disputes regarding weight, quality, or pricing must be raised immediately during transaction and resolved on-site.</li>
              <li>Post-completion disputes will not be entertained except in cases of contractual agreements.</li>
            </ul>
          </section>

          {/* Compliance */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-4">6. Compliance & Responsibility</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>All parties must comply with applicable environmental, safety, and waste management laws.</li>
              <li>J K Enterprises is not liable for improper segregation by suppliers that may affect value or acceptance.</li>
              <li>Clients are responsible for ensuring that the scrap supplied does not include prohibited or hazardous materials.</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700">
              All logos, documents, images, and website content belonging to J K Enterprises are protected by intellectual property laws. Unauthorized use is strictly prohibited.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-4">8. Limitation of Liability</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>J K Enterprises is not responsible for losses due to market price fluctuations of scrap materials.</li>
              <li>We are not liable for indirect, incidental, or consequential damages arising from transactions.</li>
              <li>Our liability, if any, is limited to the transaction value of the scrap/materials involved.</li>
            </ul>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-4">9. Governing Law & Jurisdiction</h2>
            <p className="text-gray-700">
              These Terms & Conditions are governed by the laws of India, and any disputes shall fall under the jurisdiction of the courts in Kancheepuram, Tamil Nadu.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For questions or clarifications regarding these Terms & Conditions, please contact:
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
                <p className="text-gray-700">+91 6379203963 / 9841115350</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <section className="border-t pt-6">
            <div className="bg-[#317039] text-white p-4 rounded-lg">
              <p className="font-semibold">Last Updated: August 2025</p>
              <p className="text-sm opacity-90">© 2025 J K Enterprises. All Rights Reserved.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
