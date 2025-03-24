import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, Search, X, User, LogOut, 
  PlusCircle, LayoutGrid, Settings, 
  ChevronDown, Shield
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Logo from './Logo';

const Navbar = () => {
  const { isMobile } = useMobile();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAdmin, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [transparent, setTransparent] = useState(location.pathname === '/');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setTransparent(location.pathname === '/');
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const navbarClasses = cn(
    'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300',
    {
      'bg-white shadow-sm': !transparent || scrolled,
      'bg-transparent': transparent && !scrolled,
    }
  );

  const linkClasses = cn(
    'px-4 py-2 text-sm font-medium rounded-md transition-all',
    {
      'text-gray-700 hover:text-blue-600 hover:bg-blue-50': !transparent || scrolled,
      'text-white hover:text-white hover:bg-white/10': transparent && !scrolled,
    }
  );

  return (
    <div className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo 
                dark={transparent && !scrolled} 
                className="h-8 w-auto" 
              />
            </Link>
          </div>

          {!isMobile && (
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/search" className={linkClasses}>
                Find Timeshares
              </Link>
              {user && (
                <Link to="/property-listing" className={linkClasses}>
                  List Your Timeshare
                </Link>
              )}
              <Link to="/search?type=rental" className={linkClasses}>
                Rentals
              </Link>
              <Link to="/search?type=resale" className={linkClasses}>
                Resales
              </Link>
            </div>
          )}

          <div className="flex items-center gap-2">
            {!isMobile && (
              <Button
                variant="ghost"
                size="sm"
                className={cn("flex gap-1 items-center", {
                  'text-white hover:text-white hover:bg-white/10': transparent && !scrolled,
                  'text-gray-700 hover:text-blue-600 hover:bg-blue-50': !transparent || scrolled,
                })}
                onClick={() => navigate('/search')}
              >
                <Search className="h-4 w-4" />
                <span>Search</span>
              </Button>
            )}

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn("flex gap-2 items-center", {
                      'text-white hover:text-white hover:bg-white/10': transparent && !scrolled,
                      'text-gray-700 hover:text-blue-600 hover:bg-blue-50': !transparent || scrolled,
                    })}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        {user.email?.charAt(0).toUpperCase() || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    {!isMobile && <ChevronDown className="h-4 w-4 opacity-50" />}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => navigate('/profile')}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/my-properties')}>
                      <LayoutGrid className="mr-2 h-4 w-4" />
                      <span>My Properties</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/property-listing')}>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>List Property</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/profile/settings')}>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  
                  {isAdmin && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => navigate('/admin')}>
                        <Shield className="mr-2 h-4 w-4" />
                        <span>Admin Dashboard</span>
                      </DropdownMenuItem>
                    </>
                  )}
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                className={cn({
                  'bg-white text-blue-600 hover:bg-white/90': transparent && !scrolled,
                  'bg-blue-600 text-white hover:bg-blue-700': !transparent || scrolled,
                })}
                onClick={() => navigate('/auth')}
              >
                Sign In
              </Button>
            )}

            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                className={cn({
                  'text-white hover:text-white hover:bg-white/10': transparent && !scrolled,
                  'text-gray-700 hover:text-gray-900 hover:bg-gray-100': !transparent || scrolled,
                })}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-in fade-in slide-in-from-top">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link 
              to="/search" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Timeshares
            </Link>
            {user && (
              <Link 
                to="/property-listing" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                List Your Timeshare
              </Link>
            )}
            <Link 
              to="/search?type=rental" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rentals
            </Link>
            <Link 
              to="/search?type=resale" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resales
            </Link>
            
            {user ? (
              <>
                <div className="py-2">
                  <div className="h-px bg-gray-200"></div>
                </div>
                <Link 
                  to="/profile" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link 
                  to="/my-properties" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Properties
                </Link>
                <Link 
                  to="/property-listing" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  List Property
                </Link>
                
                {isAdmin && (
                  <Link 
                    to="/admin" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                )}
                
                <button 
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-md"
                  onClick={() => {
                    handleSignOut();
                    setMobileMenuOpen(false);
                  }}
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <div className="py-2">
                  <div className="h-px bg-gray-200"></div>
                </div>
                <Link 
                  to="/auth" 
                  className="block px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In / Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
