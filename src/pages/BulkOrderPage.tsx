import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, Truck, Calculator, Phone, Mail, Building } from 'lucide-react';
import { getProductBySlug, getProductsByType } from '../data/products';
import { Button } from '../components/UI/Button';

interface BulkOrderForm {
  productId: number;
  weight: number;
  quantity: number;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  requirements: string;
}

interface BulkOrderErrors {
  productId?: string;
  weight?: string;
  quantity?: string;
  companyName?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  requirements?: string;
}

export function BulkOrderPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const productSlug = searchParams.get('product');
  
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [formData, setFormData] = useState<BulkOrderForm>({
    productId: 0,
    weight: 1000,
    quantity: 1000,
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    requirements: ''
  });

  const [errors, setErrors] = useState<BulkOrderErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const granuleProducts = getProductsByType('granule');

  useEffect(() => {
    if (productSlug) {
      const product = getProductBySlug(productSlug);
      if (product) {
        setSelectedProduct(product);
        setFormData(prev => ({ ...prev, productId: product.id }));
      }
    }
  }, [productSlug]);

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
  ];

  const handleInputChange = (field: keyof BulkOrderForm, value: string | number) => {
    if (field === 'productId' || field === 'quantity') {
      setFormData(prev => ({ ...prev, [field]: Number(value) }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value as string }));
    }
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleProductChange = (productId: number) => {
    const product = granuleProducts.find(p => p.id === productId);
    setSelectedProduct(product);
    setFormData(prev => ({ ...prev, productId }));
  };

  const validateForm = (): boolean => {
    const newErrors: BulkOrderErrors = {};

    if (!formData.productId) newErrors.productId = 'Please select a product';
    if (formData.quantity < 100) newErrors.quantity = 'Minimum bulk order is 100kg';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
    else if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = 'Invalid pincode';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/', { 
        state: { 
          message: 'Bulk order inquiry submitted successfully! Our team will contact you within 24 hours with a customized quote.' 
        }
      });
    }, 2000);
  };

  const estimatedTotal = selectedProduct && formData.quantity 
    ? (selectedProduct.unit_price * formData.quantity * 0.85) // 15% bulk discount
    : 0;

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#317039] to-[#285a2f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-['Montserrat']">
              Bulk Order Inquiry
            </h1>
            <p className="text-xl text-green-100 font-['Inter'] mb-4">
              Get the best prices for large quantity orders with personalized service
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
              <p className="text-lg font-semibold text-white mb-2">
                📞 Bulk Scrap and bulk order: +91 6379203963 / 9841115350
              </p>
              <p className="text-green-100">
                📧 contact@jkenterprises.live
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Package className="h-6 w-6 text-[#317039]" />
                <h2 className="text-xl font-semibold text-[#2C2C2C] font-['Montserrat']">
                  Bulk Order Details
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Product Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Product *
                  </label>
                  <select
                    value={formData.productId}
                    onChange={(e) => handleProductChange(Number(e.target.value))}
                    className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#317039] focus:border-[#317039] ${
                      errors.productId ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Choose a product</option>
                    {granuleProducts.map(product => (
                      <option key={product.id} value={product.id}>
                        {product.name} - ₹{product.unit_price}/kg
                      </option>
                    ))}
                  </select>
                  {errors.productId && <p className="text-red-500 text-sm mt-1">{errors.productId}</p>}
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity (kg) * <span className="text-gray-500">(Minimum: 100kg)</span>
                  </label>
                  <input
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', Number(e.target.value))}
                    className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#317039] focus:border-[#317039] ${
                      errors.quantity ? 'border-red-500' : 'border-gray-300'
                    }`}
                    min="100"
                    step="10"
                  />
                  {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
                </div>

                {/* Company Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Building className="h-4 w-4 inline mr-1" />
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#317039] focus:border-[#317039] ${
                        errors.companyName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your company name"
                    />
                    {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#317039] focus:border-[#317039] ${
                        errors.contactPerson ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Contact person name"
                    />
                    {errors.contactPerson && <p className="text-red-500 text-sm mt-1">{errors.contactPerson}</p>}
                  </div>
                </div>

                {/* Contact Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="h-4 w-4 inline mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#317039] focus:border-[#317039] ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="company@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="h-4 w-4 inline mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#317039] focus:border-[#317039] ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="10-digit mobile number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Address *
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className={`w-full border rounded-lg px-3 py-2 h-20 resize-none focus:ring-2 focus:ring-[#317039] focus:border-[#317039] ${
                      errors.address ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Complete company address"
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#317039] focus:border-[#317039] ${
                        errors.city ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="City"
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                    <select
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#317039] focus:border-[#317039] ${
                        errors.state ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select State</option>
                      {indianStates.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
                    <input
                      type="text"
                      value={formData.pincode}
                      onChange={(e) => handleInputChange('pincode', e.target.value)}
                      className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#317039] focus:border-[#317039] ${
                        errors.pincode ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="6-digit pincode"
                      maxLength={6}
                    />
                    {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                  </div>
                </div>

                {/* Special Requirements */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requirements (Optional)
                  </label>
                  <textarea
                    value={formData.requirements}
                    onChange={(e) => handleInputChange('requirements', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 h-20 resize-none focus:ring-2 focus:ring-[#317039] focus:border-[#317039]"
                    placeholder="Any specific requirements, delivery timeline, or other details..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF5B04] text-white hover:bg-[#e64f03] py-4 px-6 text-lg font-bold shadow-xl border-2 border-[#FF5B04] hover:border-[#e64f03] transition-all duration-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      <span className="text-lg font-bold">Submitting...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Package className="h-6 w-6 text-white filter drop-shadow-sm" />
                      <span className="text-lg font-bold uppercase tracking-wide text-white filter drop-shadow-sm">
                        Submit Bulk Order Inquiry
                      </span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-[#2C2C2C] mb-4 font-['Montserrat']">
                Order Summary
              </h2>

              {selectedProduct ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-medium text-[#2C2C2C]">{selectedProduct.name}</h3>
                      <p className="text-sm text-gray-600">₹{selectedProduct.unit_price}/kg</p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quantity</span>
                      <span className="font-medium">{formData.quantity.toLocaleString()} kg</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Unit Price</span>
                      <span className="font-medium">₹{selectedProduct.unit_price}/kg</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bulk Discount</span>
                      <span className="font-medium text-green-600">15%</span>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-[#2C2C2C]">Estimated Total</span>
                        <span className="text-xl font-bold text-[#317039]">
                          ₹{estimatedTotal.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">*Final price subject to negotiation</p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  Select a product to see pricing details
                </p>
              )}

              {/* Benefits */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-[#2C2C2C] mb-3">Bulk Order Benefits</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calculator className="h-4 w-4 text-[#317039]" />
                    <span>Up to 15% bulk discount</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-4 w-4 text-[#317039]" />
                    <span>Free delivery & logistics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-[#317039]" />
                    <span>Dedicated account manager</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-[#2C2C2C] mb-3">Need Help?</h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>📞 Bulk Scrap and bulk order: +91 6379203963 / 9841115350</p>
                  <p>📧 Email: contact@jkenterprises.live</p>
                  <p>🕒 Response: Within 4 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
