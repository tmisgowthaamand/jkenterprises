import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RotateCcw, AlertCircle, XCircle, CheckCircle, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';

export function RefundPolicyPage() {
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
            <RotateCcw className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold font-['Montserrat'] mb-4">Cancellation & Refund Policy</h1>
            <p className="text-xl font-['Inter'] opacity-90">Transparent Terms. Fair Practices. Responsible Recycling.</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 font-['Inter']">
          
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              At J K Enterprises, we prioritize clarity and fairness in all recycling and trading transactions. Since we deal with scrap collection, segregation, and bulk trading, cancellations and refunds must follow specific conditions.
            </p>
          </div>

          {/* Order Cancellations */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <XCircle className="h-6 w-6 text-[#317039] mr-3" />
              <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800">Order Cancellations</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Retail/Small Suppliers
                </h3>
                <p className="text-gray-700 text-sm">
                  Cancellations can be requested within <strong>2 hours</strong> of scheduling pickup, provided the collection has not started.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <AlertCircle className="h-5 w-5 text-blue-600 mr-2" />
                  Bulk/Corporate Clients
                </h3>
                <p className="text-gray-700 text-sm">
                  Cancellations are subject to prior agreements or sales contracts. Once logistics arrangements or material verification has begun, cancellations may not be accepted.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-gray-700">
                <strong>To cancel:</strong> Clients must notify us via phone or email with their Order ID/Reference.
              </p>
            </div>
          </section>

          {/* Returns & Disputes */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <AlertCircle className="h-6 w-6 text-[#317039] mr-3" />
              <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800">Returns & Disputes</h2>
            </div>
            
            <p className="text-gray-700 mb-4">We accept disputes only in the following cases:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Incorrect material category recorded (e.g., wrong grade classification)</li>
              <li>Weight discrepancies identified on-site during verification</li>
              <li>Documentation errors in invoices or settlement notes</li>
            </ul>

            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">Important Conditions:</h3>
              <ul className="list-disc list-inside space-y-1 text-red-700 text-sm ml-4">
                <li>Disputes must be raised immediately during transaction or delivery.</li>
                <li>Once scrap is weighed, recorded, and invoiced, the transaction is considered final.</li>
                <li>Post-transaction claims (after materials leave premises) will generally not be entertained.</li>
              </ul>
            </div>
          </section>

          {/* Non-Returnable Items */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-4">Non-Returnable Items</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <XCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800 mb-2">Processed Scrap</h3>
                <p className="text-sm text-gray-700">Materials once collected and processed</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <XCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800 mb-2">Rejected Materials</h3>
                <p className="text-sm text-gray-700">Hazardous or restricted waste rejected at collection site</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <XCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800 mb-2">Contaminated Items</h3>
                <p className="text-sm text-gray-700">Materials altered, mixed, or contaminated after pickup</p>
              </div>
            </div>
          </section>

          {/* Refunds */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <RotateCcw className="h-6 w-6 text-[#317039] mr-3" />
              <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800">Refunds</h2>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
              <p className="text-gray-700 mb-2">
                If an error is verified (e.g., overcharging, weight mismatch), refunds will be processed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Processing Timeline</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li>Refunds are initiated within 3–5 business days of confirmation</li>
                  <li>Refunds are processed via the original payment method</li>
                  <li>Depending on the payment provider, refunds may take 5–10 business days to reflect</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Bulk Contracts</h3>
                <p className="text-gray-700 text-sm">
                  For bulk/wholesale contracts, refunds may be provided as adjustments in future settlements or credit notes, as per agreement.
                </p>
              </div>
            </div>
          </section>

          {/* Exceptions */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-4">Exceptions</h2>
            <p className="text-gray-700 mb-4">Refunds or cancellations will not apply in cases of:</p>
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <ul className="list-disc list-inside space-y-2 text-red-700 ml-4">
                <li>Price fluctuations of scrap after transaction finalization</li>
                <li>Delays due to transport strikes, road closures, or customs clearances</li>
                <li>Disputes raised without supporting evidence (weighbridge slips, photos, invoices)</li>
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-4">Need Assistance?</h2>
            <p className="text-gray-700 mb-4">
              For cancellations, disputes, or refund-related queries, please contact:
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
