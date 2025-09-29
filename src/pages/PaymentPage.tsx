import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Smartphone, Building2, Shield } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/UI/Button';

type PaymentMethod = 'credit' | 'debit' | 'netbanking';

export function PaymentPage() {
  const navigate = useNavigate();
  const { granuleCart, granuleCartTotal, granuleCartCount, clearGranuleCart } = useCart();
  
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('credit');
  const [isProcessing, setIsProcessing] = useState(false);
  const [shippingAddress, setShippingAddress] = useState<any>(null);
  const [selectedBank, setSelectedBank] = useState('');
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const gstRate = 0.18;
  const gstAmount = granuleCartTotal * gstRate;
  const shippingCost = granuleCartTotal >= 10000 ? 0 : 200;
  const finalTotal = granuleCartTotal + gstAmount + shippingCost;

  const banks = [
    'State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra Bank',
    'Punjab National Bank', 'Bank of Baroda', 'Canara Bank', 'Union Bank of India',
    'Bank of India', 'Indian Bank', 'Central Bank of India'
  ];

  useEffect(() => {
    // Check if shipping address exists
    const savedAddress = localStorage.getItem('shippingAddress');
    if (!savedAddress || granuleCartCount === 0) {
      navigate('/checkout');
      return;
    }
    setShippingAddress(JSON.parse(savedAddress));
  }, [granuleCartCount, navigate]);

  const validatePayment = (): boolean => {
    if (selectedMethod === 'netbanking') {
      return selectedBank !== '';
    }
    // For credit/debit cards, no validation needed - just click to pay
    return true;
  };

  const handlePayment = async () => {
    if (!validatePayment()) {
      alert('Please select a bank for net banking');
      return;
    }

    setIsProcessing(true);
    
    // Create order data before clearing cart
    const newOrderData = {
      items: [...granuleCart], // Make a copy before clearing
      shippingAddress: {...shippingAddress}, // Make a copy
      paymentMethod: selectedMethod,
      total: finalTotal,
      orderDate: new Date().toISOString(),
      status: 'confirmed',
      orderId: 'JK' + Date.now().toString().slice(-6) // Simple order ID
    };
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentCompleted(true);
      
      // Store order in localStorage (in real app, this would be sent to backend)
      localStorage.setItem('lastOrder', JSON.stringify(newOrderData));
      localStorage.removeItem('shippingAddress');
      
      // Clear cart AFTER storing order data
      clearGranuleCart();
      
      // Ensure data is saved before navigation
      setTimeout(() => {
        // Redirect to order confirmation page
        navigate('/order-confirmation');
      }, 100); // Small delay to ensure localStorage write completes
    }, 2000); // Reduced time for faster testing
  };

  if (!shippingAddress) {
    navigate('/checkout');
    return null;
  }

  // Don't redirect if processing or payment completed
  if (granuleCartCount === 0 && !isProcessing && !paymentCompleted) {
    navigate('/cart');
    return null;
  }

  // Show processing state
  if (isProcessing) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#FF5B04] mx-auto mb-6"></div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4 font-['Montserrat']">
            Processing Payment...
          </h1>
          <p className="text-gray-600 font-['Inter']">
            Please wait while we process your {selectedMethod === 'netbanking' ? 'net banking' : selectedMethod + ' card'} payment.
          </p>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              🔒 Your payment is being processed securely. Please do not refresh the page.
            </p>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/checkout')}
              className="flex items-center space-x-2 text-gray-600 hover:text-[#FF5B04]"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Checkout</span>
            </button>
            <h1 className="text-2xl font-bold text-[#2C2C2C] font-['Montserrat']">
              Payment
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="h-6 w-6 text-[#FF5B04]" />
                <h2 className="text-xl font-semibold text-[#2C2C2C] font-['Montserrat']">
                  Secure Payment
                </h2>
              </div>

              {/* Payment Method Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-[#2C2C2C] mb-4">
                  Choose Payment Method
                </h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <button
                    onClick={() => setSelectedMethod('credit')}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      selectedMethod === 'credit'
                        ? 'border-[#FF5B04] bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <CreditCard className="h-8 w-8 mx-auto mb-2 text-[#FF5B04]" />
                    <div className="text-sm font-medium">Credit Card</div>
                  </button>

                  <button
                    onClick={() => setSelectedMethod('debit')}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      selectedMethod === 'debit'
                        ? 'border-[#FF5B04] bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Smartphone className="h-8 w-8 mx-auto mb-2 text-[#FF5B04]" />
                    <div className="text-sm font-medium">Debit Card</div>
                  </button>

                  <button
                    onClick={() => setSelectedMethod('netbanking')}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      selectedMethod === 'netbanking'
                        ? 'border-[#FF5B04] bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Building2 className="h-8 w-8 mx-auto mb-2 text-[#FF5B04]" />
                    <div className="text-sm font-medium">Net Banking</div>
                  </button>
                </div>
              </div>

              {/* Payment Details */}
              {selectedMethod === 'netbanking' ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Your Bank
                    </label>
                    <select
                      value={selectedBank}
                      onChange={(e) => setSelectedBank(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF5B04] focus:border-[#FF5B04]"
                    >
                      <option value="">Choose your bank</option>
                      {banks.map(bank => (
                        <option key={bank} value={bank}>{bank}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-700">
                      You will be redirected to your bank's secure website to complete the payment.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {selectedMethod === 'credit' ? (
                        <CreditCard className="h-8 w-8 text-green-600" />
                      ) : (
                        <Smartphone className="h-8 w-8 text-green-600" />
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                      {selectedMethod === 'credit' ? 'Credit Card Payment' : 'Debit Card Payment'}
                    </h3>
                    <p className="text-green-700 mb-4">
                      Click "Pay Now" to proceed with secure {selectedMethod} card payment
                    </p>
                    <div className="text-sm text-green-600">
                      ✓ 256-bit SSL encryption<br/>
                      ✓ PCI DSS compliant<br/>
                      ✓ Secure payment gateway
                    </div>
                  </div>
                </div>
              )}

              {/* Security Info */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-800">
                    Your payment information is secure and encrypted
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-[#2C2C2C] mb-4 font-['Montserrat']">
                Order Summary
              </h2>
              
              <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                {granuleCart.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-grow">
                      <h4 className="text-sm font-medium text-[#2C2C2C] truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {item.quantity}kg × ₹{item.product.unit_price}
                      </p>
                    </div>
                    <div className="text-sm font-medium">
                      ₹{((item.product.unit_price || 0) * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{granuleCartTotal.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">GST (18%)</span>
                  <span className="font-medium">₹{gstAmount.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">
                    {shippingCost === 0 ? 'Free' : `₹${shippingCost}`}
                  </span>
                </div>
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-[#2C2C2C]">Total</span>
                    <span className="text-xl font-bold text-[#FF5B04]">
                      ₹{finalTotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <Button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full mt-6 bg-[#FF5B04] text-white hover:bg-[#e64f03] py-3 disabled:opacity-50"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  <>
                    <CreditCard className="h-5 w-5 mr-2" />
                    Pay ₹{finalTotal.toLocaleString()}
                  </>
                )}
              </Button>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  By clicking "Pay", you agree to our terms and conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
