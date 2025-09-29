import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, Package, MapPin, Clock, Shield, Phone, Mail, ArrowLeft } from 'lucide-react';

export function ShippingPolicyPage() {
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
            <Truck className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold font-['Montserrat'] mb-4">Shipping & Delivery Policy</h1>
            <p className="text-xl font-['Inter'] opacity-90">Efficient Logistics. Responsible Handling. Reliable Timelines.</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 font-['Inter']">
          
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              At J K Enterprises, we ensure that scrap materials and recyclable goods are collected, transported, and delivered in a safe, timely, and compliant manner. This Shipping & Delivery Policy outlines our procedures for pickup, logistics, and bulk delivery.
            </p>
          </div>

          {/* Order Processing */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-[#317039] mr-3" />
              <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800">Order Processing</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Pickup and delivery are scheduled only after order confirmation and agreement on pricing/terms.</li>
              <li>Processing times vary depending on the type, volume, and segregation requirements of the scrap.</li>
              <li>For bulk/wholesale transactions, timelines are finalized in the sales contract or quotation.</li>
            </ul>
          </section>

          {/* Collection & Pickup */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Package className="h-6 w-6 text-[#317039] mr-3" />
              <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800">Collection & Pickup Services</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Scrap collection is available for both individual suppliers and corporate clients.</li>
              <li>Customers must ensure clear site access for loading/unloading.</li>
              <li>Hazardous, restricted, or non-recyclable items will not be accepted during collection.</li>
            </ul>
          </section>

          {/* Delivery Coverage */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-[#317039] mr-3" />
              <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800">Delivery Coverage</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-gray-800 mb-2">Local Deliveries</h3>
                <p className="text-sm text-gray-700 mb-2">Kancheepuram, Chennai & nearby areas</p>
                <p className="text-sm text-green-700 font-semibold">Same-day or next-day logistics may be arranged based on volume.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-800 mb-2">Statewide Deliveries</h3>
                <p className="text-sm text-gray-700 mb-2">Tamil Nadu</p>
                <p className="text-sm text-blue-700 font-semibold">Typically 2–5 business days after dispatch.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-gray-800 mb-2">Pan-India & Export</h3>
                <p className="text-sm text-gray-700 mb-2">Bulk buyers</p>
                <p className="text-sm text-purple-700 font-semibold">Delivery timelines depend on logistics partners and regulatory clearances.</p>
              </div>
            </div>
          </section>

          {/* Packaging & Handling */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-[#317039] mr-3" />
              <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800">Packaging & Handling</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Scrap is transported using industrial-grade containers, trucks, or freight carriers to ensure safety and compliance.</li>
              <li>Segregated materials (metals, plastics, paper, etc.) are handled separately to maintain quality standards.</li>
              <li>Bulk shipments are documented and sealed before transit.</li>
            </ul>
          </section>

          {/* Shipping Charges */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-4">Shipping Charges</h2>
            <p className="text-gray-700 mb-4">Charges are based on:</p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h3 className="font-semibold text-gray-800 mb-2">Location & Distance</h3>
                <p className="text-sm text-gray-700">Transport distance and accessibility</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h3 className="font-semibold text-gray-800 mb-2">Weight & Volume</h3>
                <p className="text-sm text-gray-700">Material quantity and category</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h3 className="font-semibold text-gray-800 mb-2">Logistics Mode</h3>
                <p className="text-sm text-gray-700">Standard, express, or bulk freight</p>
              </div>
            </div>
            <p className="text-gray-700 font-semibold">
              Charges will be communicated in advance and included in the invoice or quotation.
            </p>
          </section>

          {/* Delays & Exceptions */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-4">Delays & Exceptions</h2>
            <p className="text-gray-700 mb-4">Deliveries may face delays due to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Transport strikes, road closures, or natural calamities</li>
              <li>Customs clearance or regulatory checks (for exports)</li>
              <li>Incomplete or incorrect pickup/delivery details provided by the client</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-gray-700">
                <strong>Note:</strong> J K Enterprises will inform customers of any delays and provide revised schedules wherever possible.
              </p>
            </div>
          </section>

          {/* Tracking & Communication */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-4">Tracking & Communication</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Bulk clients and corporate partners receive dispatch updates and documentation.</li>
              <li>Delivery status may be communicated via phone, email, or WhatsApp.</li>
              <li>Clients are advised to verify delivery against the invoice/weight slip upon receipt.</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-4">Need Assistance?</h2>
            <p className="text-gray-700 mb-4">
              For logistics or delivery-related queries, please contact:
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
