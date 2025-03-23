
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ChevronRight, MapPin } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Create more descriptive search links with proper URL encoding
  const destinationLinks = [
    { name: 'Orlando, Florida', url: '/search?location=Orlando%2C%20Florida', icon: <MapPin size={14} className="mr-1" /> },
    { name: 'Las Vegas, Nevada', url: '/search?location=Las%20Vegas%2C%20Nevada', icon: <MapPin size={14} className="mr-1" /> },
    { name: 'Maui, Hawaii', url: '/search?location=Maui%2C%20Hawaii', icon: <MapPin size={14} className="mr-1" /> },
    { name: 'Cancun, Mexico', url: '/search?location=Cancun%2C%20Mexico', icon: <MapPin size={14} className="mr-1" /> }
  ];
  
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-950 text-white pt-20 pb-10">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-10 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 0% 100%)' }}></div>
      <div className="absolute top-0 right-0 w-full h-10 bg-teal-500/50" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
      
      <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-teal-500/10 blur-3xl"></div>
      <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
            <Logo className="text-3xl mb-4" />
            <p className="text-gray-300 mb-6 max-w-xs">
              The premier marketplace for buying, selling, and renting timeshares directly from owners.
            </p>
            <div className="flex items-center mb-3 group">
              <div className="mr-3 p-2 bg-blue-600 rounded-full group-hover:bg-blue-500 transition-colors">
                <Phone size={18} className="text-white" />
              </div>
              <a href="tel:1-877-815-4227" className="text-gray-100 hover:text-teal-300 transition-colors">
                1-877-815-4227
              </a>
            </div>
            <div className="flex items-center group">
              <div className="mr-3 p-2 bg-blue-600 rounded-full group-hover:bg-blue-500 transition-colors">
                <Mail size={18} className="text-white" />
              </div>
              <a href="mailto:info@sellmytimeshare.com" className="text-gray-100 hover:text-teal-300 transition-colors">
                info@sellmytimeshare.com
              </a>
            </div>
          </div>
          
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <h3 className="font-display font-medium text-xl mb-5 border-b border-blue-500/30 pb-2 relative">
                  <span className="absolute -bottom-0.5 left-0 w-12 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></span>
                  Timeshare Services
                </h3>
                <ul className="space-y-3">
                  {['Sell Your Timeshare', 'Rent Your Timeshare', 'Buy a Timeshare', 'Find a Timeshare Rental', 'What\'s My Timeshare Worth?'].map((item, index) => (
                    <li key={index} className="group">
                      <Link 
                        to={`/${item.toLowerCase().split(' ').join('-')}`} 
                        className="text-gray-300 group-hover:text-teal-300 transition-colors flex items-center"
                      >
                        <ChevronRight size={16} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="font-display font-medium text-xl mb-5 border-b border-blue-500/30 pb-2 relative">
                  <span className="absolute -bottom-0.5 left-0 w-12 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></span>
                  Popular Destinations
                </h3>
                <ul className="space-y-3">
                  {destinationLinks.map((destination, index) => (
                    <li key={index} className="group">
                      <Link 
                        to={destination.url} 
                        className="text-gray-300 group-hover:text-teal-300 transition-colors flex items-center"
                      >
                        <ChevronRight size={16} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                        {destination.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/destinations" className="text-teal-300 font-medium flex items-center mt-2">
                      View All Destinations
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <h3 className="font-display font-medium text-xl mb-5 border-b border-blue-500/30 pb-2 relative">
                  <span className="absolute -bottom-0.5 left-0 w-12 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></span>
                  Company
                </h3>
                <ul className="space-y-3 mb-6">
                  {['About Us', 'Resources', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
                    <li key={index} className="group">
                      <Link 
                        to={`/${item.toLowerCase().split(' ').join('-')}`} 
                        className="text-gray-300 group-hover:text-teal-300 transition-colors flex items-center"
                      >
                        <ChevronRight size={16} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <div className="flex space-x-3">
                  {[
                    { icon: <Facebook size={18} />, name: 'Facebook' },
                    { icon: <Twitter size={18} />, name: 'Twitter' },
                    { icon: <Instagram size={18} />, name: 'Instagram' },
                    { icon: <Linkedin size={18} />, name: 'LinkedIn' }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 text-white transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-blue-800/50 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} SellMyTimeshare. All rights reserved.
            </p>
            
            <div className="space-x-2">
              <Button variant="outline" size="sm" className="bg-white/5 border-white/10 hover:bg-white/10 text-gray-300">
                Cookie Policy
              </Button>
              <Button variant="outline" size="sm" className="bg-white/5 border-white/10 hover:bg-white/10 text-gray-300">
                Sitemap
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
