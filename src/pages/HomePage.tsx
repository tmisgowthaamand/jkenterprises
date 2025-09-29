import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Recycle, IndianRupee, Truck, Package, ArrowRight, CheckCircle, X } from 'lucide-react';
import { Button } from '../components/UI/Button';

export function HomePage() {
  const location = useLocation();
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [inquiryId, setInquiryId] = useState('');

  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
      setInquiryId(location.state.inquiryId || '');
      setShowMessage(true);
      
      // Clear the state to prevent showing message on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const categories = [
    {
      title: 'Scrap - Metal',
      href: '/scrap?cat=metal',
      image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Aluminum, Steel, Copper & more'
    },
    {
      title: 'Scrap - Plastic',
      href: '/scrap?cat=plastic',
      image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'PET, HDPE, PP bottles & containers'
    },
    {
      title: 'Granules - PP',
      href: '/granules?cat=pp',
      image: 'https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Polypropylene for injection molding'
    },
    {
      title: 'Granules - Nylon',
      href: '/granules?cat=nylon',
      image: 'https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Engineering grade Nylon 6 & 66'
    }
  ];

  const features = [
    {
      icon: Recycle,
      title: 'Eco-Friendly',
      description: 'Contributing to a circular economy with responsible recycling practices'
    },
    {
      icon: IndianRupee,
      title: 'Transparent Pricing',
      description: 'Fair market rates with no hidden charges or surprises'
    },
    {
      icon: Truck,
      title: 'Reliable Pickup',
      description: 'Scheduled pickup services across Tamil Nadu with GPS tracking'
    },
    {
      icon: Package,
      title: 'Direct Supply',
      description: 'Quality granules directly from our processing facilities'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Customers' },
    { number: '50,000+', label: 'Tons Recycled' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Success Message Modal */}
      {showMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowMessage(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Success!</h3>
              <p className="text-gray-600 mb-4">{message}</p>
              
              {inquiryId && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-sm font-medium text-green-800">
                    Reference ID: <span className="font-mono">{inquiryId}</span>
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    Please save this ID for future reference
                  </p>
                </div>
              )}
              
              <Button
                onClick={() => setShowMessage(false)}
                className="w-full bg-[#FF5B04] text-white hover:bg-[#e64f03] py-3 px-6 text-lg font-bold shadow-lg border-2 border-[#FF5B04] hover:border-[#e64f03] transition-all duration-200 rounded-lg"
              >
                <span className="text-white font-bold uppercase tracking-wide">
                  Continue
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#317039] to-[#2d5f33] text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-['Montserrat'] font-bold text-4xl md:text-6xl mb-6 leading-tight">
            Recycle with Trust.<br />
            <span className="text-[#7dd87f]">Transparent Pricing,</span><br />
            <span className="text-[#7dd87f]">Reliable Pickup.</span>
          </h1>
          <p className="font-['Inter'] text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Tamil Nadu's trusted partner for scrap collection and granule trading. 
            Join thousands of businesses in building a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="scrapInquiry" size="lg" href="/scrap" className="min-w-[200px]">
              Sell Scrap
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="granuleCheckout" size="lg" href="/granules" className="min-w-[200px]">
              Buy Granules
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-['Montserrat'] font-bold text-[#317039] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-['Inter'] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              Our Product Categories
            </h2>
            <p className="font-['Inter'] text-lg text-gray-600 max-w-2xl mx-auto">
              From scrap collection to granule trading, we handle all your recycling and material needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="aspect-w-16 aspect-h-12 bg-gray-100">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-['Montserrat'] font-semibold text-lg text-[#2C2C2C] mb-2 group-hover:text-[#317039] transition-colors">
                    {category.title}
                  </h3>
                  <p className="font-['Inter'] text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              Why Choose JK Enterprises?
            </h2>
            <p className="font-['Inter'] text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses across Tamil Nadu for our commitment to quality and sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#317039] rounded-full mb-4 group-hover:bg-[#285a2f] transition-colors">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-['Montserrat'] font-semibold text-xl text-[#2C2C2C] mb-2">
                  {feature.title}
                </h3>
                <p className="font-['Inter'] text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#317039] to-[#FF5B04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-4">
            Ready to Start Recycling?
          </h2>
          <p className="font-['Inter'] text-lg md:text-xl mb-8 opacity-90">
            Join thousands of satisfied customers across Tamil Nadu. Get started today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="bg-white text-[#317039] hover:bg-gray-100 hover:text-[#317039] border-2 border-white font-semibold min-w-[200px]">
              Get in Touch
            </Button>
            <Button href="/bulk-inquiry" className="bg-white text-[#317039] hover:bg-gray-100 hover:text-[#317039] border-2 border-white font-semibold min-w-[200px]">
              Bulk Inquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}