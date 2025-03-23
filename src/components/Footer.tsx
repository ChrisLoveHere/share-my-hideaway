
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Create more descriptive search links with proper URL encoding
  const destinationLinks = [
    { name: 'Orlando, Florida', url: '/search?location=Orlando%2C%20Florida' },
    { name: 'Las Vegas, Nevada', url: '/search?location=Las%20Vegas%2C%20Nevada' },
    { name: 'Maui, Hawaii', url: '/search?location=Maui%2C%20Hawaii' },
    { name: 'Cancun, Mexico', url: '/search?location=Cancun%2C%20Mexico' }
  ];
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo className="text-2xl mb-4" />
            <p className="text-gray-600 mb-6 max-w-xs">
              The premier marketplace for buying, selling, and renting timeshares directly from owners.
            </p>
            <div className="flex items-center mb-3">
              <Phone size={18} className="text-blue-600 mr-3" />
              <a href="tel:1-877-815-4227" className="text-gray-700 hover:text-blue-600 transition-colors">
                1-877-815-4227
              </a>
            </div>
            <div className="flex items-center">
              <Mail size={18} className="text-blue-600 mr-3" />
              <a href="mailto:info@sellmytimeshare.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                info@sellmytimeshare.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-lg mb-4">Timeshare Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/sell" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Sell Your Timeshare
                </Link>
              </li>
              <li>
                <Link to="/rent" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Rent Your Timeshare
                </Link>
              </li>
              <li>
                <Link to="/buy" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Buy a Timeshare
                </Link>
              </li>
              <li>
                <Link to="/find-rental" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Find a Timeshare Rental
                </Link>
              </li>
              <li>
                <Link to="/value" className="text-gray-600 hover:text-blue-600 transition-colors">
                  What's My Timeshare Worth?
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-lg mb-4">Popular Destinations</h3>
            <ul className="space-y-3">
              {destinationLinks.map((destination, index) => (
                <li key={index}>
                  <Link 
                    to={destination.url} 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {destination.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/destinations" className="text-blue-600 font-medium">
                  View All Destinations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-center text-sm">
            © {currentYear} SellMyTimeshare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
