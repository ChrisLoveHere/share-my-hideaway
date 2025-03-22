
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: "Sell Your Timeshare", href: "/sell" },
    { title: "Rent Your Timeshare", href: "/rent" },
    { title: "Buy a Timeshare", href: "/buy" },
    { title: "Find a Rental", href: "/find-rental" },
    { title: "Resources", href: "/resources" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Logo className="text-2xl z-20" />
        
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Contact
          </Link>
          <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Login
          </Link>
          <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/search" className="flex items-center">
              <Search size={16} className="mr-2" />
              <span>Search Listings</span>
            </Link>
          </Button>
        </div>
        
        <div className="lg:hidden flex items-center z-20">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-10 bg-white flex flex-col transition-transform duration-300 ease-in-out pt-20 px-6 lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-4 mt-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="py-3 text-lg font-medium text-gray-800 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <Link
            to="/contact"
            className="py-3 text-lg font-medium text-gray-800 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="py-3 text-lg font-medium text-gray-800 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </Link>
        </nav>
        
        <div className="mt-8">
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link 
              to="/search" 
              className="flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Search size={18} className="mr-2" />
              <span>Search Listings</span>
            </Link>
          </Button>
          
          <div className="mt-6 flex items-center justify-center">
            <Phone size={18} className="text-blue-600 mr-2" />
            <a href="tel:1-877-815-4227" className="text-lg font-medium text-blue-600">
              1-877-815-4227
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
