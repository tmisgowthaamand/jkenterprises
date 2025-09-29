import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Plus, Minus, Star, Truck, Shield, Award, Package } from 'lucide-react';
import { getProductBySlug } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/UI/Button';

export function ProductDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToGranuleCart, addToInquiryCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState(100);
  const [pickupAddress, setPickupAddress] = useState('');

  const product = slug ? getProductBySlug(slug) : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <Link to="/granules" className="text-[#FF5B04] hover:underline">
            Back to Granules
          </Link>
        </div>
      </div>
    );
  }

  const isScrap = product.type === 'scrap';

  const handleAddToCart = () => {
    if (isScrap) {
      if (!pickupAddress.trim()) {
        alert('Please enter pickup address');
        return;
      }
      addToInquiryCart({ product, weight, pickupAddress });
    } else {
      addToGranuleCart({ product, quantity });
    }
  };


  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#FF5B04]">Home</Link>
            <span className="text-gray-400">/</span>
            <Link 
              to={isScrap ? "/scrap" : "/granules"} 
              className="text-gray-500 hover:text-[#FF5B04]"
            >
              {isScrap ? "Scrap" : "Granules"}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-[#FF5B04] mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 bg-white rounded-xl overflow-hidden shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Truck className="h-6 w-6 text-[#FF5B04] mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">Fast Delivery</span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Shield className="h-6 w-6 text-[#FF5B04] mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">Quality Assured</span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Award className="h-6 w-6 text-[#FF5B04] mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">Certified</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-[#2C2C2C] font-['Montserrat'] mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.8/5 - 124 reviews)</span>
              </div>
              
              {!isScrap && product.unit_price && (
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#FF5B04] font-['Montserrat']">
                    ₹{product.unit_price}
                  </span>
                  <span className="text-lg text-gray-600 ml-2">/kg</span>
                  <div className="text-sm text-gray-500 mt-1">
                    Inclusive of all taxes
                  </div>
                </div>
              )}
            </div>

            {product.description && (
              <div>
                <h3 className="text-lg font-semibold text-[#2C2C2C] mb-2">Description</h3>
                <p className="text-gray-600 font-['Inter']">{product.description}</p>
              </div>
            )}

            {/* Specifications */}
            {product.specifications && (
              <div>
                <h3 className="text-lg font-semibold text-[#2C2C2C] mb-3">Specifications</h3>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                        <span className="font-medium text-gray-700">{key}</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Quantity/Weight Selection */}
            {isScrap ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Approximate Weight (kg)
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setWeight(Math.max(10, weight - 10))}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(Math.max(10, parseInt(e.target.value) || 10))}
                      className="w-20 text-center border border-gray-300 rounded-lg px-3 py-2"
                      min="10"
                    />
                    <button
                      onClick={() => setWeight(weight + 10)}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Address
                  </label>
                  <textarea
                    value={pickupAddress}
                    onChange={(e) => setPickupAddress(e.target.value)}
                    placeholder="Enter your pickup address..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 h-20 resize-none focus:ring-2 focus:ring-[#FF5B04] focus:border-[#FF5B04]"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity (kg)
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 text-center border border-gray-300 rounded-lg px-3 py-2"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                
                {product.unit_price && (
                  <div className="mt-3 text-lg font-semibold text-[#2C2C2C]">
                    Total: ₹{(product.unit_price * quantity).toLocaleString()}
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 items-center justify-center">
              <Button
                onClick={handleAddToCart}
                className="w-full sm:w-auto px-6 py-3 bg-white text-[#FF5B04] border-2 border-[#FF5B04] hover:bg-[#FF5B04] hover:text-white text-base font-semibold rounded-lg transition-all duration-200"
              >
                <div className="flex items-center justify-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>{isScrap ? 'Add to Inquiry' : 'Add to Cart'}</span>
                </div>
              </Button>
              
              {!isScrap && (
                <Button
                  onClick={() => navigate(`/bulk-order?product=${product.slug}`)}
                  className="w-full sm:w-auto px-6 py-3 bg-[#FF5B04] text-white hover:bg-[#e64f03] hover:shadow-xl text-base font-bold rounded-lg border-2 border-[#FF5B04] hover:border-[#e64f03] transition-all duration-200 shadow-lg transform hover:scale-105 active:scale-95"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Package className="h-5 w-5 text-white filter drop-shadow-sm" />
                    <span className="text-white font-bold uppercase tracking-wide filter drop-shadow-sm">
                      BULK ORDER
                    </span>
                  </div>
                </Button>
              )}
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-[#2C2C2C] mb-2">Why Choose Us?</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Premium quality guaranteed</li>
                <li>• Fast and secure delivery</li>
                <li>• 7-day return policy</li>
                <li>• 24/7 customer support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
