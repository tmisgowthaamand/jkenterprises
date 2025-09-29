import { Link } from 'react-router-dom';
import { Recycle, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#233038] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Recycle className="h-8 w-8 text-[#317039]" />
              <div className="flex flex-col">
                <span className="font-bold text-xl font-['Montserrat']">JK Enterprises</span>
                <span className="text-sm text-gray-300 font-['Inter']">Trusted Recycling Partner</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 font-['Inter'] leading-relaxed">
              Leading scrap collection and granule trading company in Tamil Nadu. 
              We provide transparent pricing, reliable pickup services, and high-quality 
              recycled materials for sustainable business growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/916379203963"
                className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-['Montserrat']">Quick Links</h3>
            <ul className="space-y-2 font-['Inter']">
              <li><Link to="/scrap" className="text-gray-300 hover:text-white transition-colors">Sell Scrap</Link></li>
              <li><Link to="/granules" className="text-gray-300 hover:text-white transition-colors">Buy Granules</Link></li>
              <li><Link to="/bulk-inquiry" className="text-gray-300 hover:text-white transition-colors">Bulk Orders</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-['Montserrat']">Contact Info</h3>
            <ul className="space-y-3 font-['Inter']">
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-[#317039] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 6379203963</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-[#317039] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">contact@jkenterprises.live</p>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#317039] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">
                  No 251/7, Anna Street, Mevalurkuppam,<br />
                  Chennai, Mevalurkuppam Main Road,<br />
                  Sripermbudur, Kancheepuram,<br />
                  Tamil Nadu - 602105
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-left font-['Inter']">
          <p className="text-gray-300">
            © 2025 JK Enterprises. All rights reserved. | Trusted recycling partner across Tamil Nadu.
          </p>
        </div>
      </div>
    </footer>
  );
}