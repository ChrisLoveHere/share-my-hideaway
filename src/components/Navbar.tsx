
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Check if current page is homepage
  const isHomepage = location.pathname === '/';
  
  // Track scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || !isHomepage 
          ? 'bg-white shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo className={scrolled || !isHomepage ? 'text-blue-600' : 'text-white'} />
        </Link>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex space-x-8">
              <NavigationMenuItem>
                <Link to="/search" className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                  scrolled || !isHomepage ? 'text-gray-800' : 'text-white'
                }`}>
                  Find Timeshares
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/resources" className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                  scrolled || !isHomepage ? 'text-gray-800' : 'text-white'
                }`}>
                  Resources
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/about-us" className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                  scrolled || !isHomepage ? 'text-gray-800' : 'text-white'
                }`}>
                  About Us
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contact-us" className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                  scrolled || !isHomepage ? 'text-gray-800' : 'text-white'
                }`}>
                  Contact
                </Link>
              </NavigationMenuItem>
              
              {user && (
                <>
                  <NavigationMenuItem>
                    <Link to="/property-listing" className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                      scrolled || !isHomepage ? 'text-gray-800' : 'text-white'
                    }`}>
                      List Property
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link to="/my-properties" className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                      scrolled || !isHomepage ? 'text-gray-800' : 'text-white'
                    }`}>
                      My Properties
                    </Link>
                  </NavigationMenuItem>
                </>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        )}
        
        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/profile">
                <Button variant="ghost" className={
                  scrolled || !isHomepage ? 'text-gray-800' : 'text-white'
                }>
                  My Account
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                onClick={() => signOut()}
                className={
                  scrolled || !isHomepage 
                    ? 'border-gray-300 text-gray-800 hover:bg-gray-100' 
                    : 'border-white text-white hover:bg-white/10'
                }
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/auth">
                <Button 
                  variant={scrolled || !isHomepage ? "outline" : "ghost"}
                  className={
                    scrolled || !isHomepage 
                      ? 'border-gray-300 text-gray-800' 
                      : 'text-white border-white'
                  }
                >
                  Sign In
                </Button>
              </Link>
              
              <Link to="/auth">
                <Button 
                  className={
                    scrolled || !isHomepage 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-white text-blue-600 hover:bg-gray-100'
                  }
                >
                  Get Started
                </Button>
              </Link>
            </div>
          )}
          
          {/* Mobile menu button */}
          {isMobile && (
            <button 
              onClick={toggleMobileMenu}
              className={`p-2 rounded-full ${
                scrolled || !isHomepage 
                  ? 'text-gray-800 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          )}
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link 
              to="/search" 
              className="text-gray-800 py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Timeshares
            </Link>
            
            <Link 
              to="/resources" 
              className="text-gray-800 py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            
            <Link 
              to="/about-us" 
              className="text-gray-800 py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            
            <Link 
              to="/contact-us" 
              className="text-gray-800 py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {user ? (
              <>
                <Link 
                  to="/property-listing" 
                  className="text-gray-800 py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  List Property
                </Link>
                
                <Link 
                  to="/my-properties" 
                  className="text-gray-800 py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Properties
                </Link>
                
                <Link 
                  to="/profile" 
                  className="text-gray-800 py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Account
                </Link>
                
                <Button 
                  variant="outline" 
                  onClick={() => {
                    signOut();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full justify-center"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <div className="pt-2 flex flex-col space-y-3">
                <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-center">
                    Sign In
                  </Button>
                </Link>
                
                <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full justify-center bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
