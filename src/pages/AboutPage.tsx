import { useNavigate } from 'react-router-dom';
import { Award, Users, Leaf, Factory, Truck, Shield, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '../components/UI/Button';

export function AboutPage() {
  const navigate = useNavigate();
  
  const milestones = [
    { year: '2009', title: 'Company Founded', description: 'Started as a small scrap collection business in Coimbatore' },
    { year: '2012', title: 'First Processing Unit', description: 'Established our first granule processing facility' },
    { year: '2016', title: 'ISO Certification', description: 'Achieved ISO 9001:2015 certification for quality management' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched online platform for transparent pricing and booking' },
    { year: '2025', title: 'Market Leader', description: 'Serving 5000+ customers across Tamil Nadu' }
  ];

  const values = [
    {
      icon: Leaf,
      title: 'Environmental Responsibility',
      description: 'Committed to reducing waste and promoting circular economy through responsible recycling practices.'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Fair pricing, honest dealings, and transparent processes in every transaction we handle.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Building long-term relationships by consistently exceeding customer expectations and service quality.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Maintaining highest standards in material processing and granule quality through rigorous testing.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years of Experience', icon: Award },
    { number: '5000+', label: 'Happy Customers', icon: Users },
    { number: '50,000+', label: 'Tons Recycled', icon: Leaf },
    { number: '25+', label: 'Cities Covered', icon: MapPin }
  ];


  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#317039] to-[#2d5f33] text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6 leading-tight">
                Our Journey of
                <span className="text-[#7dd87f] block">Sustainable Growth</span>
              </h1>
              <p className="font-['Inter'] text-xl text-gray-100 mb-8 leading-relaxed">
                From a small family business to Tamil Nadu's trusted recycling partner, 
                we've been transforming waste into valuable resources for over 15 years.
              </p>
              <Button href="/contact" className="bg-white text-[#317039] hover:bg-gray-100">
                Get in Touch
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Recycling facility"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#317039] rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-['Montserrat'] font-bold text-[#317039] mb-2">
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

      {/* Our Story */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              Our Story
            </h2>
            <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
              What started as a vision to create a cleaner environment has grown into 
              Tamil Nadu's most trusted recycling and trading platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="font-['Montserrat'] font-semibold text-2xl text-[#2C2C2C] mb-4">
                Building Trust Through Transparency
              </h3>
              <p className="font-['Inter'] text-gray-600 mb-6 leading-relaxed">
                Founded in 2009 by Priya Kamal, JK Enterprises began with a simple mission: 
                to make recycling accessible, transparent, and profitable for everyone. We recognized 
                that the traditional scrap industry lacked transparency in pricing and reliability in service.
              </p>
              <p className="font-['Inter'] text-gray-600 mb-6 leading-relaxed">
                Today, we've revolutionized the industry by combining traditional expertise with 
                modern technology, offering real-time pricing, scheduled pickups, and quality 
                assurance that our customers can depend on.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Factory className="h-5 w-5 text-[#317039]" />
                  <span className="font-['Inter'] text-sm text-gray-600">3 Processing Units</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-[#317039]" />
                  <span className="font-['Inter'] text-sm text-gray-600">50+ Pickup Vehicles</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Metal processing"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Granule production"
                className="rounded-lg shadow-md mt-8"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[#317039]"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="text-[#317039] font-['Montserrat'] font-bold text-xl mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="font-['Montserrat'] font-semibold text-lg text-[#2C2C2C] mb-2">
                        {milestone.title}
                      </h4>
                      <p className="font-['Inter'] text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#317039] rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              Our Core Values
            </h2>
            <p className="font-['Inter'] text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every service we provide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#317039] rounded-full mb-6 group-hover:bg-[#285a2f] transition-colors">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-['Montserrat'] font-semibold text-xl text-[#2C2C2C] mb-4">
                  {value.title}
                </h3>
                <p className="font-['Inter'] text-gray-600 leading-relaxed">
                  {value.description}
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
            Ready to Partner with Us?
          </h2>
          <p className="font-['Inter'] text-lg md:text-xl mb-8 opacity-90">
            Join thousands of businesses across Tamil Nadu in building a sustainable future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="!bg-white !text-[#317039] hover:!bg-gray-100 min-w-[200px] font-semibold">
              Contact Us Today
            </Button>
            <Button href="/bulk-inquiry" className="!border-2 !border-white !text-white hover:!bg-white hover:!text-[#317039] min-w-[200px] font-semibold !bg-transparent">
              Request Bulk Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}