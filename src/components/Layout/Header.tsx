import { Link, useLocation } from 'react-router-dom';
import { Recycle, ShoppingCart, FileText, Menu, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const { granuleCartCount, inquiryCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/scrap', label: 'Sell Scrap' },
    { path: '/bulk-inquiry', label: 'Bulk Scrap' },
    { path: '/granules', label: 'Buy Granules' },
    { path: '/bulk-order', label: 'Bulk Orders' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Recycle className="h-8 w-8 text-[#317039]" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#2C2C2C] font-['Montserrat']">JK Enterprises</span>
              <span className="text-xs text-gray-500 font-['Inter']">Recycle • Trade • Grow</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium font-['Inter'] transition-colors ${
                  isActive(item.path)
                    ? 'text-[#317039] border-b-2 border-[#317039] pb-1'
                    : 'text-[#2C2C2C] hover:text-[#317039]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Cart Icons and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Inquiry Cart */}
            <Link
              to="/inquiry-cart"
              className="relative p-2 text-[#2C2C2C] hover:text-[#317039] transition-colors"
            >
              <FileText className="h-6 w-6" />
              {inquiryCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#317039] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {inquiryCartCount}
                </span>
              )}
            </Link>

            {/* Granule Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-[#2C2C2C] hover:text-[#FF5B04] transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {granuleCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF5B04] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {granuleCartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#2C2C2C] hover:text-[#317039] transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium font-['Inter'] transition-colors ${
                    isActive(item.path)
                      ? 'text-[#317039]'
                      : 'text-[#2C2C2C] hover:text-[#317039]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}