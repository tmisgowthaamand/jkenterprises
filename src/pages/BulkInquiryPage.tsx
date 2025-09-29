import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Recycle, Truck, Calculator, Phone, Mail, Building, Scale } from 'lucide-react';
import { Button } from '../components/UI/Button';

interface BulkInquiryForm {
  scrapType: string;
  estimatedQuantity: number;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  description: string;
  hasPhotos: boolean;
}

interface BulkInquiryErrors {
  scrapType?: string;
  estimatedQuantity?: string;
  companyName?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  description?: string;
}

export function BulkInquiryPage() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<BulkInquiryForm>({
    scrapType: '',
    estimatedQuantity: 100,
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    description: '',
    hasPhotos: false
  });

  const [errors, setErrors] = useState<BulkInquiryErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrapTypes = [
    'Aluminum Scrap',
    'Steel Scrap',
    'Copper Scrap',
    'PET Plastic Scrap',
    'HDPE Plastic Scrap'
  ];

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
  ];

  const handleInputChange = (field: keyof BulkInquiryForm, value: string | number | boolean) => {
    if (field === 'estimatedQuantity') {
      setFormData(prev => ({ ...prev, [field]: Number(value) }));
    } else if (field === 'hasPhotos') {
      setFormData(prev => ({ ...prev, [field]: Boolean(value) }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value as string }));
    }
    if (errors[field as keyof BulkInquiryErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: BulkInquiryErrors = {};

    if (!formData.scrapType.trim()) newErrors.scrapType = 'Please select scrap type';
    if (formData.estimatedQuantity < 50) newErrors.estimatedQuantity = 'Minimum bulk inquiry is 50kg';
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
    if (!formData.description.trim()) newErrors.description = 'Description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Generate inquiry ID
    const inquiryId = 'BSI' + Date.now().toString().slice(-6);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Store inquiry data
      const inquiryData = {
        ...formData,
        inquiryId,
        submittedAt: new Date().toISOString(),
        status: 'submitted'
      };
      localStorage.setItem('lastBulkInquiry', JSON.stringify(inquiryData));
      
      navigate('/', { 
        state: { 
          message: `Bulk scrap inquiry submitted successfully! Inquiry ID: ${inquiryId}. Our team will contact you within 24 hours with a competitive quote and collection details.`,
          inquiryId: inquiryId
        }
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF5B04] to-[#e64f03] text-white py-16">
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
              Bulk Scrap Inquiry
            </h1>
            <p className="text-xl text-orange-100 font-['Inter']">
              Sell your scrap in bulk and get the best prices with free collection service
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Recycle className="h-6 w-6 text-[#FF5B04]" />
                <h2 className="text-xl font-semibold text-[#2C2C2C] font-['Montserrat']">
                  Bulk Scrap Details
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Scrap Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Scrap Type *
                  </label>
                  <select
                    value={formData.scrapType}
                    onChange={(e) => handleInputChange('scrapType', e.target.value)}
                    className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF5B04] focus:border-[#FF5B04] ${
                      errors.scrapType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Choose scrap type</option>
                    {scrapTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.scrapType && <p className="text-red-500 text-sm mt-1">{errors.scrapType}</p>}
                </div>

                {/* Estimated Quantity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Scale className="h-4 w-4 inline mr-1" />
                    Estimated Quantity (kg) * <span className="text-gray-500">(Minimum: 50kg)</span>
                  </label>
                  <input
                    type="number"
                    value={formData.estimatedQuantity}
                    onChange={(e) => handleInputChange('estimatedQuantity', Number(e.target.value))}
                    className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF5B04] focus:border-[#FF5B04] ${
                      errors.estimatedQuantity ? 'border-red-500' : 'border-gray-300'
                    }`}
                    min="50"
                    step="10"
                  />
                  {errors.estimatedQuantity && <p className="text-red-500 text-sm mt-1">{errors.estimatedQuantity}</p>}
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
                      className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF5B04] focus:border-[#FF5B04] ${
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
                      className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF5B04] focus:border-[#FF5B04] ${
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
                      className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF5B04] focus:border-[#FF5B04] ${
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
                      className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF5B04] focus:border-[#FF5B04] ${
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
                    Collection Address *
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className={`w-full border rounded-lg px-3 py-2 h-20 resize-none focus:ring-2 focus:ring-[#FF5B04] focus:border-[#FF5B04] ${
                      errors.address ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Complete address where scrap will be collected"
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
                      className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF5B04] focus:border-[#FF5B04] ${
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
                      className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF5B04] focus:border-[#FF5B04] ${
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
                      className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF5B04] focus:border-[#FF5B04] ${
                        errors.pincode ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="6-digit pincode"
                      maxLength={6}
                    />
                    {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Scrap Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className={`w-full border rounded-lg px-3 py-2 h-24 resize-none focus:ring-2 focus:ring-[#FF5B04] focus:border-[#FF5B04] ${
                      errors.description ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Describe the condition, quality, and any other relevant details about your scrap..."
                  />
                  {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                </div>

                {/* Photos Checkbox */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="hasPhotos"
                    checked={formData.hasPhotos}
                    onChange={(e) => handleInputChange('hasPhotos', e.target.checked)}
                    className="rounded border-gray-300 text-[#FF5B04] focus:ring-[#FF5B04]"
                  />
                  <label htmlFor="hasPhotos" className="text-sm text-gray-700">
                    I can provide photos of the scrap for better evaluation
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF5B04] text-white hover:bg-[#e64f03] py-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    'Submit Bulk Scrap Inquiry'
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-[#2C2C2C] mb-4 font-['Montserrat']">
                Inquiry Summary
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h3 className="font-medium text-[#2C2C2C] mb-2">Selected Scrap</h3>
                  <p className="text-sm text-gray-600">
                    {formData.scrapType || 'No scrap type selected'}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Quantity: {formData.estimatedQuantity.toLocaleString()} kg
                  </p>
                </div>

                {/* Benefits */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-semibold text-[#2C2C2C] mb-3">Bulk Selling Benefits</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calculator className="h-4 w-4 text-[#FF5B04]" />
                      <span>Best market rates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Truck className="h-4 w-4 text-[#FF5B04]" />
                      <span>Free collection service</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-[#FF5B04]" />
                      <span>Dedicated support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Scale className="h-4 w-4 text-[#FF5B04]" />
                      <span>Accurate weighing</span>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-semibold text-[#2C2C2C] mb-3">Need Help?</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>📞 Bulk Scrap: +91 98765 43211</p>
                    <p>📧 Email: scrap@jkenterprises.com</p>
                    <p>🕒 Response: Within 4 hours</p>
                  </div>
                </div>

                {/* Process */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-semibold text-[#2C2C2C] mb-3">Process</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>1. Submit inquiry</p>
                    <p>2. Get quote within 4 hours</p>
                    <p>3. Schedule collection</p>
                    <p>4. Receive payment</p>
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
