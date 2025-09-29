import { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ProductCard } from '../components/UI/ProductCard';
import { Button } from '../components/UI/Button';
import { getProductsByType } from '../data/products';
import { Filter, Grid2x2 as Grid, List, ArrowLeft } from 'lucide-react';

export function ScrapPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('cat') || 'all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const scrapProducts = getProductsByType('scrap');
  
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return scrapProducts;
    }
    return scrapProducts.filter(product => product.category === selectedCategory);
  }, [scrapProducts, selectedCategory]);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'metal', label: 'Metal Scrap' },
    { value: 'plastic', label: 'Plastic Scrap' },
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
              Sell Your Scrap
            </h1>
            <p className="font-['Inter'] text-xl md:text-2xl mb-6 text-gray-100">
              Get the best rates for your scrap materials with free pickup service
            </p>
            <Button href="/bulk-inquiry" className="bg-white text-[#317039] hover:bg-gray-100">
              Bulk Inquiry
            </Button>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 font-['Inter'] focus:ring-2 focus:ring-[#317039] focus:border-[#317039]"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-[#317039] text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-[#317039] text-white' 
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
          {filteredProducts.length === 0 ? (
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
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Montserrat'] font-bold text-3xl text-center mb-12 text-[#2C2C2C]">
            How Scrap Collection Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#317039] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl font-['Montserrat']">1</span>
              </div>
              <h3 className="font-['Montserrat'] font-semibold text-xl mb-2">Request Quote</h3>
              <p className="font-['Inter'] text-gray-600">
                Browse our scrap categories and request quotes for your materials
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#317039] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl font-['Montserrat']">2</span>
              </div>
              <h3 className="font-['Montserrat'] font-semibold text-xl mb-2">Schedule Pickup</h3>
              <p className="font-['Inter'] text-gray-600">
                Our team will contact you to schedule a convenient pickup time
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#317039] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl font-['Montserrat']">3</span>
              </div>
              <h3 className="font-['Montserrat'] font-semibold text-xl mb-2">Get Paid</h3>
              <p className="font-['Inter'] text-gray-600">
                Receive instant payment after material verification and weighing
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}