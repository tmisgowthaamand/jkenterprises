import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { ScrollToTop } from './components/UI/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ScrapPage } from './pages/ScrapPage';
import { GranulesPage } from './pages/GranulesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { PaymentPage } from './pages/PaymentPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { InquiryCartPage } from './pages/InquiryCartPage';
import { BulkOrderPage } from './pages/BulkOrderPage';
import { BulkInquiryPage } from './pages/BulkInquiryPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/scrap" element={<ScrapPage />} />
              <Route path="/granules" element={<GranulesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/product/:slug" element={<ProductDetailsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
              <Route path="/inquiry-cart" element={<InquiryCartPage />} />
              <Route path="/bulk-order" element={<BulkOrderPage />} />
              <Route path="/bulk-inquiry" element={<BulkInquiryPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;