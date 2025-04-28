import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, DollarSign } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <DollarSign className="h-8 w-8 text-blue-900" />
              <span className="font-bold text-xl text-blue-900">ForexEducate</span>
            </Link>
            
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-900 font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-900 font-medium">About Us</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-900 font-medium">Contact Us</Link>
              <Link to="/privacy" className="text-gray-700 hover:text-blue-900 font-medium">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-700 hover:text-blue-900 font-medium">Terms of Use</Link>
              <Link to="/cookies" className="text-gray-700 hover:text-blue-900 font-medium">Cookies Policy</Link>
            </nav>
            
            <button 
              className="md:hidden text-gray-700"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3">
                <Link to="/" className="text-gray-700 hover:text-blue-900 font-medium py-2">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-900 font-medium py-2">About Us</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-900 font-medium py-2">Contact Us</Link>
                <Link to="/privacy" className="text-gray-700 hover:text-blue-900 font-medium py-2">Privacy Policy</Link>
                <Link to="/terms" className="text-gray-700 hover:text-blue-900 font-medium py-2">Terms of Use</Link>
                <Link to="/cookies" className="text-gray-700 hover:text-blue-900 font-medium py-2">Cookies Policy</Link>
              </nav>
            </div>
          </div>
        )}
      </header>
      
      {/* Secondary Navigation */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <nav className="flex overflow-x-auto whitespace-nowrap py-3 hide-scrollbar">
            <Link to="/signals" className="text-white hover:text-yellow-300 font-medium mr-6">Trading Signals</Link>
            <Link to="/#trading-plan" className="text-white hover:text-yellow-300 font-medium mr-6">1K to 1M Plan</Link>
            <Link to="/analysis" className="text-white hover:text-yellow-300 font-medium mr-6">Market Analysis</Link>
            <Link to="/signals#tools" className="text-white hover:text-yellow-300 font-medium">Trader Tools</Link>
          </nav>
        </div>
      </div>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ForexEducate</h3>
              <p className="text-gray-300">
                Educational resources for forex traders, helping you make informed decisions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="/signals" className="text-gray-300 hover:text-white">Trading Signals</Link></li>
                <li><Link to="/analysis" className="text-gray-300 hover:text-white">Market Analysis</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Use</Link></li>
                <li><Link to="/cookies" className="text-gray-300 hover:text-white">Cookies Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} ForexEducate. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Disclaimer: Trading forex carries a high level of risk and may not be suitable for all investors.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;