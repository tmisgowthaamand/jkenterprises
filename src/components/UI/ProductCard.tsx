import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { Button } from './Button';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToGranuleCart, addToInquiryCart } = useCart();
  const isScrap = product.type === 'scrap';

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isScrap && product.unit_price) {
      addToGranuleCart({ product, quantity: 1 });
    }
  };

  const handleAddToInquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isScrap) {
      // Add with default values for quick inquiry
      addToInquiryCart({ 
        product, 
        weight: 50, // Default 50kg
        pickupAddress: 'Address will be collected later' 
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden h-full flex flex-col">
      <div className="aspect-w-16 aspect-h-12 bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-[#2C2C2C] font-['Montserrat'] line-clamp-2 flex-grow">
            {product.name}
          </h3>
          {!isScrap && product.unit_price && (
            <span className="text-xl font-bold text-[#FF5B04] font-['Montserrat'] ml-2 flex-shrink-0">
              ₹{product.unit_price}/kg
            </span>
          )}
        </div>

        <div className="flex-grow">
          {product.description && (
            <p className="text-gray-600 text-sm font-['Inter'] mb-4 line-clamp-2">
              {product.description}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 mt-auto">
          <Link
            to={`/product/${product.slug}`}
            className="text-[#317039] hover:text-[#285a2f] font-medium font-['Inter'] text-sm flex-shrink-0"
          >
            View Details
          </Link>
          
          <div className="flex-shrink-0">
            {isScrap ? (
              <Button 
                variant="scrapInquiry" 
                size="sm"
                onClick={handleAddToInquiry}
              >
                Add to Inquiry
              </Button>
            ) : (
              <Button 
                variant="granuleCheckout" 
                size="sm" 
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}