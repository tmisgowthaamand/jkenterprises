import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Truck, MapPin, Calendar, X, Phone, Mail } from 'lucide-react';
import { Button } from '../components/UI/Button';

interface OrderData {
  items: any[];
  shippingAddress: any;
  paymentMethod: string;
  total: number;
  orderDate: string;
  status: string;
  orderId: string;
}

export function OrderConfirmationPage() {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add a small delay to ensure localStorage data is available
    const checkForOrder = () => {
      const savedOrder = localStorage.getItem('lastOrder');
      if (!savedOrder) {
        // Try again after a short delay in case data is still being written
        setTimeout(() => {
          const retryOrder = localStorage.getItem('lastOrder');
          if (!retryOrder) {
            navigate('/');
            return;
          }
          setOrderData(JSON.parse(retryOrder));
          setIsLoading(false);
        }, 200);
        return;
      }
      setOrderData(JSON.parse(savedOrder));
      setIsLoading(false);
    };

    checkForOrder();
  }, [navigate]);

  const handleCancelOrder = async () => {
    setIsCancelling(true);
    
    // Simulate cancellation process
    setTimeout(() => {
      setIsCancelling(false);
      setShowCancelModal(false);
      
      // Update order status
      if (orderData) {
        const updatedOrder = { ...orderData, status: 'cancelled' };
        localStorage.setItem('lastOrder', JSON.stringify(updatedOrder));
        setOrderData(updatedOrder);
      }
      
      alert('Order cancelled successfully! Refund will be processed within 3-5 business days.');
    }, 2000);
  };

  const getPaymentMethodDisplay = (method: string) => {
    switch (method) {
      case 'credit': return 'Credit Card';
      case 'debit': return 'Debit Card';
      case 'netbanking': return 'Net Banking';
      default: return method;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'text-green-600 bg-green-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
      case 'shipped': return 'text-blue-600 bg-blue-100';
      case 'delivered': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#FF5B04] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your order details...</p>
        </div>
      </div>
    );
  }

  if (!orderData) {
    return null;
  }

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 3);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Success Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-['Montserrat']">
            {orderData.status === 'cancelled' ? 'Order Cancelled' : 'Order Confirmed!'}
          </h1>
          <p className="text-xl text-green-100 font-['Inter']">
            {orderData.status === 'cancelled' 
              ? 'Your order has been cancelled successfully'
              : 'Thank you for your purchase. Your order has been confirmed.'
            }
          </p>
          <div className="mt-4 text-lg font-semibold bg-white/20 rounded-lg px-4 py-2 inline-block">
            Order ID: {orderData.orderId}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Order Status */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#2C2C2C] font-['Montserrat']">
              Order Status
            </h2>
            <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(orderData.status)}`}>
              {orderData.status}
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-medium text-[#2C2C2C] mb-1">Order Placed</h3>
              <p className="text-sm text-gray-600">
                {new Date(orderData.orderDate).toLocaleDateString('en-IN')}
              </p>
            </div>

            <div className="text-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                orderData.status === 'cancelled' ? 'bg-gray-100' : 'bg-blue-100'
              }`}>
                <Package className={`h-6 w-6 ${
                  orderData.status === 'cancelled' ? 'text-gray-400' : 'text-blue-600'
                }`} />
              </div>
              <h3 className="font-medium text-[#2C2C2C] mb-1">Processing</h3>
              <p className="text-sm text-gray-600">
                {orderData.status === 'cancelled' ? 'Cancelled' : '1-2 business days'}
              </p>
            </div>

            <div className="text-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                orderData.status === 'cancelled' ? 'bg-gray-100' : 'bg-orange-100'
              }`}>
                <Truck className={`h-6 w-6 ${
                  orderData.status === 'cancelled' ? 'text-gray-400' : 'text-orange-600'
                }`} />
              </div>
              <h3 className="font-medium text-[#2C2C2C] mb-1">Delivery</h3>
              <p className="text-sm text-gray-600">
                {orderData.status === 'cancelled' 
                  ? 'N/A' 
                  : estimatedDelivery.toLocaleDateString('en-IN')
                }
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Items */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-[#2C2C2C] mb-4 font-['Montserrat']">
              Order Items
            </h2>
            
            <div className="space-y-4">
              {orderData.items.map((item) => (
                <div key={item.product.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-grow">
                    <h3 className="font-medium text-[#2C2C2C] font-['Montserrat']">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Quantity: {item.quantity}kg
                    </p>
                    <p className="text-[#FF5B04] font-semibold">
                      ₹{item.product.unit_price}/kg
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#2C2C2C]">
                      ₹{((item.product.unit_price || 0) * item.quantity).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Total */}
            <div className="border-t border-gray-200 mt-6 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-[#2C2C2C]">Total Amount</span>
                <span className="text-xl font-bold text-[#FF5B04]">
                  ₹{orderData.total.toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                (Including GST and shipping charges)
              </p>
            </div>
          </div>

          {/* Shipping & Payment Details */}
          <div className="space-y-6">
            {/* Shipping Address */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-5 w-5 text-[#FF5B04]" />
                <h2 className="text-lg font-semibold text-[#2C2C2C] font-['Montserrat']">
                  Shipping Address
                </h2>
              </div>
              
              <div className="text-gray-700 space-y-1">
                <p className="font-medium">{orderData.shippingAddress.fullName}</p>
                <p>{orderData.shippingAddress.address}</p>
                {orderData.shippingAddress.landmark && (
                  <p>Near {orderData.shippingAddress.landmark}</p>
                )}
                <p>
                  {orderData.shippingAddress.city}, {orderData.shippingAddress.state} - {orderData.shippingAddress.pincode}
                </p>
                <p className="flex items-center space-x-2 pt-2">
                  <Phone className="h-4 w-4" />
                  <span>{orderData.shippingAddress.phone}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>{orderData.shippingAddress.email}</span>
                </p>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-[#2C2C2C] mb-4 font-['Montserrat']">
                Payment Method
              </h2>
              <p className="text-gray-700">
                {getPaymentMethodDisplay(orderData.paymentMethod)}
              </p>
              <p className="text-sm text-green-600 mt-2">
                ✓ Payment Successful
              </p>
            </div>

            {/* Order Date */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="h-5 w-5 text-[#FF5B04]" />
                <h2 className="text-lg font-semibold text-[#2C2C2C] font-['Montserrat']">
                  Order Date
                </h2>
              </div>
              <p className="text-gray-700">
                {new Date(orderData.orderDate).toLocaleDateString('en-IN', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/granules">
            <Button className="bg-[#FF5B04] text-white hover:bg-[#e64f03] px-8 py-3">
              Continue Shopping
            </Button>
          </Link>
          
          {orderData.status === 'confirmed' && (
            <Button
              onClick={() => setShowCancelModal(true)}
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3"
            >
              Cancel Order
            </Button>
          )}
        </div>

        {/* Support Info */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6 text-center">
          <h3 className="font-semibold text-[#2C2C2C] mb-2">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            Our customer support team is here to help you with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center space-x-2 text-[#FF5B04] hover:underline"
            >
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </a>
            <a
              href="mailto:support@jkenterprises.com"
              className="flex items-center justify-center space-x-2 text-[#FF5B04] hover:underline"
            >
              <Mail className="h-4 w-4" />
              <span>support@jkenterprises.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Cancel Order Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#2C2C2C]">Cancel Order</h3>
              <button
                onClick={() => setShowCancelModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <p className="text-gray-600 mb-6">
              Are you sure you want to cancel this order? This action cannot be undone. 
              Refund will be processed within 3-5 business days.
            </p>
            
            <div className="flex space-x-4">
              <Button
                onClick={() => setShowCancelModal(false)}
                variant="outline"
                className="flex-1"
              >
                Keep Order
              </Button>
              <Button
                onClick={handleCancelOrder}
                disabled={isCancelling}
                className="flex-1 bg-red-500 text-white hover:bg-red-600 disabled:opacity-50"
              >
                {isCancelling ? 'Cancelling...' : 'Cancel Order'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
