import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Logo from '@/components/Logo';
import { useAuth } from '@/hooks/useAuth';
import { useMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const { isMobile } = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo className="h-8 w-auto" />
            </Link>
          </div>

          <nav className={`${isMobile ? 'hidden' : 'flex'} ml-10 space-x-8`}>
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 transition-colors px-1 py-2"
            >
              Home
            </Link>
            <Link
              to="/search"
              className="text-gray-600 hover:text-blue-600 transition-colors px-1 py-2"
            >
              Buy
            </Link>
            <Link
              to="/search?type=rent"
              className="text-gray-600 hover:text-blue-600 transition-colors px-1 py-2"
            >
              Rent
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-blue-600 transition-colors px-1 py-2 cursor-pointer">
                Resources
                <ChevronDown size={16} className="ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>
                  <Link to="/resources/guide" className="w-full">
                    Timeshare Guide
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/resources/faqs" className="w-full">
                    FAQs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/blog" className="w-full">
                    Blog
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className={`${isMobile ? 'hidden' : 'flex'} items-center space-x-4`}>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <User size={16} className="mr-2" />
                    <span className="hidden sm:inline">My Account</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full">My Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/my-listings" className="w-full">My Listings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/messages" className="w-full">Messages</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="outline" size="sm">
                <Link to="/auth">Sign In</Link>
              </Button>
            )}
            <Button asChild className="bg-blue-600 hover:bg-blue-700" size="sm">
              <Link to={user ? "/sell" : "/auth"}>
                Sell My Timeshare
              </Link>
            </Button>
          </div>

          <button
            className={`${isMobile ? 'flex' : 'hidden'} items-center`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="px-4 py-2 pb-4 bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-2">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              Home
            </Link>
            <Link
              to="/search"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              Buy
            </Link>
            <Link
              to="/search?type=rent"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              Rent
            </Link>
            <Link
              to="/resources/guide"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              Timeshare Guide
            </Link>
            <Link
              to="/resources/faqs"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              FAQs
            </Link>
            <Link
              to="/blog"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              Blog
            </Link>
            
            <div className="pt-2 border-t border-gray-200 flex flex-col space-y-2">
              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/my-listings"
                    className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                  >
                    My Listings
                  </Link>
                  <Link
                    to="/messages"
                    className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                  >
                    Messages
                  </Link>
                  <button
                    onClick={signOut}
                    className="text-left text-gray-600 hover:text-blue-600 transition-colors py-2"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/auth"
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                >
                  Sign In / Register
                </Link>
              )}
              <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full mt-2">
                <Link to={user ? "/sell" : "/auth"}>
                  Sell My Timeshare
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
