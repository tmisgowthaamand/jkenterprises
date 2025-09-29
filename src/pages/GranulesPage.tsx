import { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ProductCard } from '../components/UI/ProductCard';
import { Button } from '../components/UI/Button';
import { getProductsByType } from '../data/products';
import { Filter, Grid2x2 as Grid, List, Truck, Award, Shield, ArrowLeft } from 'lucide-react';

export function GranulesPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('cat') || 'all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');

  const granuleProducts = getProductsByType('granule');
  
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory === 'all' 
      ? granuleProducts 
      : granuleProducts.filter(product => product.category === selectedCategory);
    
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return (a.unit_price || 0) - (b.unit_price || 0);
        case 'price-high':
          return (b.unit_price || 0) - (a.unit_price || 0);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });
    
    return filtered;
  }, [granuleProducts, selectedCategory, sortBy]);

  const categories = [
    { value: 'all', label: 'All Granules' },
    { value: 'pp', label: 'PP Granules' },
    { value: 'nylon', label: 'Nylon Granules' },
    { value: 'pet', label: 'PET Granules' },
  ];

  const sortOptions = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'price-low', label: 'Price (Low to High)' },
    { value: 'price-high', label: 'Price (High to Low)' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF5B04] to-[#e64f03] text-white py-16">
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
              Premium Granules
            </h1>
            <p className="font-['Inter'] text-xl md:text-2xl mb-6 text-gray-100">
              High-quality recycled and virgin granules for all your manufacturing needs
            </p>
            <Button 
              href="/bulk-order" 
              className="bg-[#FF5B04] text-white hover:bg-[#e64f03] hover:shadow-2xl px-8 py-4 text-lg font-bold shadow-xl border-3 border-[#FF5B04] hover:border-[#e64f03] transition-all duration-300 transform hover:scale-105 active:scale-95 rounded-xl"
            >
              <div className="flex items-center justify-center space-x-3">
                <Truck className="h-6 w-6 text-white filter drop-shadow-md" />
                <span className="text-lg font-bold tracking-wide uppercase text-white filter drop-shadow-md">
                  BULK ORDERS
                </span>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Truck className="h-5 w-5 text-[#FF5B04]" />
              <span className="font-['Inter'] font-medium text-gray-700">Free Delivery Above ₹10,000</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-5 w-5 text-[#FF5B04]" />
              <span className="font-['Inter'] font-medium text-gray-700">Certified Quality</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-5 w-5 text-[#FF5B04]" />
              <span className="font-['Inter'] font-medium text-gray-700">7-Day Return Policy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 font-['Inter'] focus:ring-2 focus:ring-[#FF5B04] focus:border-[#FF5B04]"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 font-['Inter'] focus:ring-2 focus:ring-[#FF5B04] focus:border-[#FF5B04]"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-[#FF5B04] text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-[#FF5B04] text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-gray-500 font-['Inter']">
                No products found in this category.
              </p>
            </div>
          ) : (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {filteredAndSortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#2C2C2C] mb-4">
              Quality You Can Trust
            </h2>
            <p className="font-['Inter'] text-lg text-gray-600 max-w-2xl mx-auto">
              All our granules undergo rigorous quality testing to ensure consistency and performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50">
              <div className="w-16 h-16 bg-[#FF5B04] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-['Montserrat'] font-semibold text-xl mb-2">ISO Certified</h3>
              <p className="font-['Inter'] text-gray-600">
                Our processing facilities are ISO 9001:2015 certified for quality management
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50">
              <div className="w-16 h-16 bg-[#FF5B04] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-['Montserrat'] font-semibold text-xl mb-2">Lab Tested</h3>
              <p className="font-['Inter'] text-gray-600">
                Every batch is tested for purity, MFI, and other critical parameters
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50">
              <div className="w-16 h-16 bg-[#FF5B04] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-['Montserrat'] font-semibold text-xl mb-2">Fast Delivery</h3>
              <p className="font-['Inter'] text-gray-600">
                Quick delivery across Tamil Nadu with proper packaging and handling
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}