import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '../components/UI/Button';

export function ContactPage() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+91 6379203963'],
      action: 'tel:+916379203963'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['+91 6379203963'],
      action: 'https://wa.me/916379203963'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['contact@jkenterprises.live', 'jkenterprises561@gmail.com'],
      action: 'mailto:contact@jkenterprises.live'
    },
    {
      icon: MapPin,
      title: 'Head Office',
      details: ['No 251/7, Anna Street, Mevalurkuppam,', 'Chennai, Mevalurkuppam Main Road,', 'Sripermbudur, Kancheepuram,', 'Tamil Nadu - 602105'],
      action: 'https://maps.google.com'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const offices = [
    {
      city: 'Chennai',
      address: 'No 251/7, Anna Street, Mevalurkuppam, Chennai, Mevalurkuppam Main Road, Sripermbudur, Kancheepuram, Tamil Nadu - 602105',
      phone: '+91 6379203963',
      type: 'Head Office'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Scrap Collection',
    'Granule Purchase',
    'Bulk Orders',
    'Partnership',
    'Technical Support',
    'Complaint/Feedback'
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#317039] to-[#2d5f33] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          <div className="text-center">
            <h1 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-4">
              Get in Touch
            </h1>
            <p className="font-['Inter'] text-xl md:text-2xl mb-6 text-gray-100">
              We're here to help with all your recycling and trading needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+916379203963"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#317039] rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
              <a
                href="https://wa.me/916379203963"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="font-['Montserrat'] font-bold text-2xl text-[#2C2C2C] mb-6">
                Send us a Message
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-['Montserrat'] font-semibold text-xl text-[#2C2C2C] mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-['Inter'] text-gray-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-['Inter'] font-medium text-[#2C2C2C] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-['Inter'] focus:ring-2 focus:ring-[#317039] focus:border-[#317039] transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block font-['Inter'] font-medium text-[#2C2C2C] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-['Inter'] focus:ring-2 focus:ring-[#317039] focus:border-[#317039] transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-['Inter'] font-medium text-[#2C2C2C] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-['Inter'] focus:ring-2 focus:ring-[#317039] focus:border-[#317039] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block font-['Inter'] font-medium text-[#2C2C2C] mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-['Inter'] focus:ring-2 focus:ring-[#317039] focus:border-[#317039] transition-colors"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-['Inter'] font-medium text-[#2C2C2C] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-['Inter'] focus:ring-2 focus:ring-[#317039] focus:border-[#317039] transition-colors resize-vertical"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="scrapInquiry"
                    className="w-full flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="font-['Montserrat'] font-bold text-2xl text-[#2C2C2C] mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#317039] rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-['Montserrat'] font-semibold text-lg text-[#2C2C2C] mb-1">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="font-['Inter'] text-gray-600">
                            {info.action ? (
                              <a
                                href={info.action}
                                className="hover:text-[#317039] transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <Clock className="h-6 w-6 text-[#317039] mr-3" />
                  <h2 className="font-['Montserrat'] font-bold text-2xl text-[#2C2C2C]">
                    Business Hours
                  </h2>
                </div>
                
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-['Inter'] font-medium text-[#2C2C2C]">
                        {schedule.day}
                      </span>
                      <span className="font-['Inter'] text-gray-600">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="font-['Inter'] text-sm text-green-800">
                    <strong>Emergency Pickup:</strong> Available 24/7 for bulk orders above 5 tons
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              Our Locations
            </h2>
            <p className="font-['Inter'] text-lg text-gray-600 max-w-2xl mx-auto">
              Visit our offices across Tamil Nadu for personalized service and support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-['Montserrat'] font-semibold text-xl text-[#2C2C2C]">
                    {office.city}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    office.type === 'Head Office' 
                      ? 'bg-[#317039] text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {office.type}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[#317039] mt-0.5 flex-shrink-0" />
                    <p className="font-['Inter'] text-gray-600 text-sm">
                      {office.address}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#317039] flex-shrink-0" />
                    <a
                      href={`tel:${office.phone}`}
                      className="font-['Inter'] text-gray-600 text-sm hover:text-[#317039] transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#2C2C2C] mb-4">
              Find Us on Map
            </h2>
            <p className="font-['Inter'] text-lg text-gray-600">
              Our head office location in Chennai
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center h-96">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-[#317039] mx-auto mb-4" />
                <p className="font-['Inter'] text-gray-600 mb-4">
                  Interactive map would be integrated here
                </p>
                <Button
                  href="https://maps.google.com"
                  className="bg-[#317039] text-white hover:bg-[#285a2f]"
                >
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#2C2C2C] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-['Inter'] text-lg text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-['Montserrat'] font-semibold text-lg text-[#2C2C2C] mb-2">
                What areas do you serve for scrap pickup?
              </h3>
              <p className="font-['Inter'] text-gray-600">
                We provide pickup services across Tamil Nadu, including major cities like Chennai, 
                Coimbatore, Madurai, Salem, and Trichy. For remote locations, minimum quantity requirements may apply.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-['Montserrat'] font-semibold text-lg text-[#2C2C2C] mb-2">
                How do you determine scrap prices?
              </h3>
              <p className="font-['Inter'] text-gray-600">
                Our prices are based on current market rates, material quality, and quantity. 
                We provide transparent pricing with no hidden charges and update rates daily.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-['Montserrat'] font-semibold text-lg text-[#2C2C2C] mb-2">
                What is the minimum order quantity for granules?
              </h3>
              <p className="font-['Inter'] text-gray-600">
                For retail orders, there's no minimum quantity. For bulk orders with special pricing, 
                the minimum is typically 1 ton. Contact us for custom requirements.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-['Montserrat'] font-semibold text-lg text-[#2C2C2C] mb-2">
                Do you provide quality certificates for granules?
              </h3>
              <p className="font-['Inter'] text-gray-600">
                Yes, all our granules come with quality certificates including test reports for 
                MFI, density, and other relevant parameters. We're ISO 9001:2015 certified.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}