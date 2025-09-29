import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/UI/Button';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#FF5B04] font-['Montserrat']">
            404
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-['Montserrat']">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 font-['Inter']">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/">
            <Button className="bg-[#FF5B04] text-white hover:bg-[#e64f03] flex items-center space-x-2 mx-auto">
              <Home className="h-4 w-4" />
              <span>Go Home</span>
            </Button>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 text-gray-600 hover:text-[#FF5B04] mx-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Go Back</span>
          </button>
        </div>
        
        <div className="mt-12 text-sm text-gray-500">
          <p>If you believe this is an error, please contact our support team.</p>
        </div>
      </div>
    </div>
  );
}
