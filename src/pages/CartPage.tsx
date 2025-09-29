import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/UI/Button';

export function CartPage() {
  const navigate = useNavigate();
  const {
    granuleCart,
    granuleCartTotal,
    granuleCartCount,
    updateGranuleQuantity,
    removeFromGranuleCart,
    clearGranuleCart
  } = useCart();

  const gstRate = 0.18; // 18% GST for India
  const gstAmount = granuleCartTotal * gstRate;
  const finalTotal = granuleCartTotal + gstAmount;

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromGranuleCart(productId);
    } else {
      updateGranuleQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    if (granuleCartCount === 0) {
      alert('Your cart is empty!');
      return;
    }
    navigate('/checkout');
  };

  if (granuleCartCount === 0) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <ShoppingCart className="h-24 w-24 text-gray-400 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-800 mb-4 font-['Montserrat']">
            Your Cart is Empty
          </h1>
          <p className="text-gray-600 mb-8 font-['Inter']">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/granules">
            <Button className="bg-[#FF5B04] text-white hover:bg-[#e64f03]">
              Continue Shopping
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
                className="flex items-center space-x-2 text-gray-600 hover:text-[#FF5B04]"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
              </button>
              <h1 className="text-2xl font-bold text-[#2C2C2C] font-['Montserrat']">
                Shopping Cart ({granuleCartCount} items)
              </h1>
            </div>
            <button
              onClick={clearGranuleCart}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-[#2C2C2C] mb-4 font-['Montserrat']">
                  Cart Items
                </h2>
                
                <div className="space-y-4">
                  {granuleCart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg"
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
                        <h3 className="font-semibold text-[#2C2C2C] font-['Montserrat']">
                          {item.product.name}
                        </h3>
                        <p className="text-gray-600 text-sm font-['Inter']">
                          {item.product.category}
                        </p>
                        <div className="text-lg font-bold text-[#FF5B04] font-['Montserrat']">
                          ₹{item.product.unit_price}/kg
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                          className="p-1 border border-gray-300 rounded hover:bg-gray-50"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-12 text-center font-medium">
                          {item.quantity}kg
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          className="p-1 border border-gray-300 rounded hover:bg-gray-50"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Item Total */}
                      <div className="text-right">
                        <div className="font-bold text-[#2C2C2C]">
                          ₹{((item.product.unit_price || 0) * item.quantity).toLocaleString()}
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromGranuleCart(item.product.id)}
                        className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
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
              
              <div className="space-y-3">
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
                    {granuleCartTotal >= 10000 ? 'Free' : '₹200'}
                  </span>
                </div>
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-[#2C2C2C]">Total</span>
                    <span className="text-xl font-bold text-[#FF5B04]">
                      ₹{(finalTotal + (granuleCartTotal >= 10000 ? 0 : 200)).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {granuleCartTotal < 10000 && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    Add ₹{(10000 - granuleCartTotal).toLocaleString()} more for free shipping!
                  </p>
                </div>
              )}

              <div className="mt-6 space-y-3">
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-[#FF5B04] text-white hover:bg-[#e64f03] py-3"
                >
                  Proceed to Checkout
                </Button>
                
                <Link to="/granules" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-[#FF5B04] text-[#FF5B04] hover:bg-[#FF5B04] hover:text-white"
                  >
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              {/* Security Features */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>7-day return policy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Quality guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
