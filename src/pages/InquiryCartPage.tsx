import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, Trash2, ArrowLeft, MapPin, Weight, CheckCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/UI/Button';

export function InquiryCartPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    inquiryCart,
    inquiryCartCount,
    removeFromInquiryCart,
    clearInquiryCart
  } = useCart();

  const handleSubmitInquiry = () => {
    if (inquiryCartCount === 0) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Generate inquiry ID
    const inquiryId = 'INQ' + Date.now().toString().slice(-6);
    
    // Simulate API call with loading state
    setTimeout(() => {
      // Store inquiry data before clearing cart
      const inquiryData = {
        items: [...inquiryCart],
        inquiryId,
        submittedAt: new Date().toISOString(),
        status: 'submitted',
        totalItems: inquiryCartCount,
        totalWeight: inquiryCart.reduce((total, item) => total + item.weight, 0)
      };
      localStorage.setItem('lastInquiry', JSON.stringify(inquiryData));
      
      // Clear cart after storing data
      clearInquiryCart();
      setIsSubmitting(false);
      
      navigate('/', { 
        state: { 
          message: `Inquiry submitted successfully! Inquiry ID: ${inquiryId}. Our team will contact you within 24 hours with competitive quotes for your ${inquiryData.totalItems} items.`,
          inquiryId: inquiryId
        }
      });
    }, 1500);
  };

  if (inquiryCartCount === 0) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <FileText className="h-24 w-24 text-gray-400 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-800 mb-4 font-['Montserrat']">
            Your Inquiry Cart is Empty
          </h1>
          <p className="text-gray-600 mb-8 font-['Inter']">
            Add scrap items to your inquiry cart to request quotes.
          </p>
          <Link to="/scrap">
            <Button className="bg-[#317039] text-white hover:bg-[#285a2f]">
              Browse Scrap Items
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center space-x-2 text-gray-600 hover:text-[#317039]"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
              </button>
              <h1 className="text-2xl font-bold text-[#2C2C2C] font-['Montserrat']">
                Inquiry Cart ({inquiryCartCount} items)
              </h1>
            </div>
            <button
              onClick={clearInquiryCart}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Inquiry Items */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-[#2C2C2C] mb-4 font-['Montserrat']">
              Scrap Inquiry Items
            </h2>
            
            <div className="space-y-4">
              {inquiryCart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg"
                >
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow">
                    <h3 className="font-semibold text-[#2C2C2C] font-['Montserrat'] mb-2">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-600 text-sm font-['Inter'] mb-2">
                      {item.product.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Weight className="h-4 w-4" />
                        <span>~{item.weight} kg</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span className="truncate max-w-xs">{item.pickupAddress}</span>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromInquiryCart(item.product.id)}
                    className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inquiry Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-[#2C2C2C] mb-4 font-['Montserrat']">
            Inquiry Summary
          </h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Items</span>
              <span className="font-medium">{inquiryCartCount}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Total Weight</span>
              <span className="font-medium">
                {inquiryCart.reduce((total, item) => total + item.weight, 0)} kg
              </span>
            </div>
            
            <div className="border-t border-gray-200 pt-3">
              <p className="text-sm text-gray-600">
                Our team will review your inquiry and contact you with competitive quotes within 24 hours.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Primary Submit Button - More Prominent */}
            <Button
              onClick={handleSubmitInquiry}
              disabled={isSubmitting}
              variant="outline"
              className="w-full border-2 border-[#317039] text-[#317039] hover:bg-[#317039] hover:text-white py-5 px-6 text-xl font-bold shadow-xl transition-all duration-200 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#317039]"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-7 w-7 border-b-3 border-[#317039] mr-4"></div>
                  <span className="text-xl font-bold tracking-wide">Submitting Inquiry...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-7 w-7 mr-4" />
                  <span className="text-xl font-bold tracking-wide uppercase">Submit Inquiry for Quote</span>
                </div>
              )}
            </Button>
            
            {/* Secondary Button */}
            <Link to="/scrap" className="block">
              <Button
                variant="outline"
                className="w-full border-2 border-[#317039] text-[#317039] hover:bg-[#317039] hover:text-white py-5 px-6 text-xl font-bold shadow-xl transition-all duration-200 hover:shadow-2xl"
              >
                <div className="flex items-center justify-center">
                  <FileText className="h-7 w-7 mr-4" />
                  <span className="text-xl font-bold tracking-wide uppercase">Add More Items</span>
                </div>
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-[#2C2C2C] mb-3">Need Help?</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>📞 Call us: +91 98765 43210</p>
              <p>📧 Email: inquiry@jkenterprises.com</p>
              <p>🕒 Response time: Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
