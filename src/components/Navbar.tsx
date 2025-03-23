
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, Home, Search, Building, BookOpen, MessageSquare, Bell, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import Logo from '@/components/Logo';
import { useAuth } from '@/hooks/useAuth';
import { useIsMobile } from '@/hooks/use-mobile';

// Custom styled navigation menu trigger
const StyledMenuTrigger = ({ children, className, ...props }: any) => (
  <NavigationMenuTrigger
    className={cn(
      "group flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-100 hover:text-blue-900 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
      className
    )}
    {...props}
  >
    {children}
  </NavigationMenuTrigger>
);

// Custom styled navigation menu link
const StyledMenuLink = ({ children, className, active, ...props }: any) => (
  <NavigationMenuLink
    className={cn(
      "group flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-100 hover:text-blue-900 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
      active && "bg-blue-100 text-blue-900",
      className
    )}
    {...props}
  >
    {children}
  </NavigationMenuLink>
);

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="group flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full h-10 w-10 flex items-center justify-center mr-2 transition-transform group-hover:scale-110 shadow-md">
                <span className="text-white font-bold text-lg">ST</span>
              </div>
              <Logo className={cn(
                "h-8 w-auto transition-colors",
                isScrolled ? "text-blue-800" : "text-white"
              )} />
            </Link>
          </div>

          {!isMobile && (
            <NavigationMenu className="mx-6 hidden md:flex">
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <Link to="/">
                    <StyledMenuLink active={isActive('/')}>
                      <Home size={16} className="mr-2" />
                      Home
                    </StyledMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/search">
                    <StyledMenuLink active={isActive('/search')}>
                      <Search size={16} className="mr-2" />
                      Buy
                    </StyledMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/search?type=rent">
                    <StyledMenuLink active={isActive('/search?type=rent')}>
                      <Building size={16} className="mr-2" />
                      Rent
                    </StyledMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <StyledMenuTrigger>
                    <BookOpen size={16} className="mr-2" />
                    Resources
                  </StyledMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px] bg-white rounded-xl shadow-lg">
                      <div className="col-span-4">
                        <h4 className="text-sm font-medium leading-none mb-3 text-blue-600">Resources</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Learn more about timeshares and our marketplace
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <NavigationMenuLink asChild>
                          <Link to="/resources/guide" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Timeshare Guide</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn everything you need to know about timeshares
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/resources/faqs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">FAQs</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Most common questions answered
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/blog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Blog</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Latest news and tips on timeshare ownership
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <Link to="/search" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200">
                          <div className="text-sm font-medium leading-none">Popular Destinations</div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            <Badge variant="gradient" className="text-[10px]">Hawaii</Badge>
                            <Badge variant="purple" className="text-[10px]">Florida</Badge>
                            <Badge variant="pink" className="text-[10px]">Bahamas</Badge>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {user && (
                  <NavigationMenuItem>
                    <Link to="/messages">
                      <StyledMenuLink active={isActive('/messages')}>
                        <MessageSquare size={16} className="mr-2" />
                        Messages
                        <Badge variant="gradient" className="ml-2 h-5 text-[10px]">3</Badge>
                      </StyledMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )}
              </NavigationMenuList>
            </NavigationMenu>
          )}

          <div className={`${isMobile ? 'hidden' : 'flex'} items-center space-x-4`}>
            {user && (
              <>
                <Button variant="ghost" size="icon" className="rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100">
                  <Bell size={20} />
                  <span className="sr-only">Notifications</span>
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100">
                  <Heart size={20} />
                  <span className="sr-only">Favorites</span>
                </Button>
              </>
            )}
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 hover:from-blue-100 hover:to-purple-100">
                    <User size={16} className="mr-2 text-blue-600" />
                    <span className="hidden sm:inline text-blue-700">My Account</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 mt-2 bg-white rounded-xl shadow-lg p-2">
                  <DropdownMenuItem className="rounded-lg focus:bg-blue-50 cursor-pointer">
                    <Link to="/profile" className="w-full flex items-center">
                      <span className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3">
                        <User size={16} />
                      </span>
                      My Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-lg focus:bg-blue-50 cursor-pointer">
                    <Link to="/my-listings" className="w-full flex items-center">
                      <span className="bg-purple-100 text-purple-700 p-2 rounded-full mr-3">
                        <Building size={16} />
                      </span>
                      My Listings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-lg focus:bg-blue-50 cursor-pointer">
                    <Link to="/messages" className="w-full flex items-center">
                      <span className="bg-green-100 text-green-700 p-2 rounded-full mr-3">
                        <MessageSquare size={16} />
                      </span>
                      Messages
                      <Badge variant="gradient" className="ml-auto h-5 text-[10px]">3</Badge>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="my-2" />
                  <DropdownMenuItem className="rounded-lg text-red-600 focus:bg-red-50 cursor-pointer" onClick={signOut}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="outline" size="sm" className="rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 hover:from-blue-100 hover:to-purple-100">
                <Link to="/auth">
                  <User size={16} className="mr-2 text-blue-600" />
                  <span className="text-blue-700">Sign In</span>
                </Link>
              </Button>
            )}
            <Button 
              asChild 
              size="sm" 
              className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all"
            >
              <Link to={user ? "/sell" : "/auth"}>
                Sell My Timeshare
              </Link>
            </Button>
          </div>

          <button
            className={`${isMobile ? 'flex' : 'hidden'} items-center justify-center p-2 rounded-full ${isScrolled ? 'bg-gray-100 text-gray-800' : 'bg-white/20 backdrop-blur-md text-white'}`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu with enhanced styling */}
      {isMobile && isMenuOpen && (
        <div className="px-4 py-2 pb-4 bg-gradient-to-b from-white to-blue-50 border-t border-gray-200 shadow-lg animate-in fade-in slide-in-from-top-5 duration-300">
          <nav className="flex flex-col space-y-2">
            <Link
              to="/"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors py-3 border-b border-blue-100"
            >
              <Home size={18} className="mr-2" />
              Home
            </Link>
            <Link
              to="/search"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors py-3 border-b border-blue-100"
            >
              <Search size={18} className="mr-2" />
              Buy
            </Link>
            <Link
              to="/search?type=rent"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors py-3 border-b border-blue-100"
            >
              <Building size={18} className="mr-2" />
              Rent
            </Link>
            
            <div className="py-3 border-b border-blue-100">
              <h3 className="font-medium text-blue-800 mb-2 flex items-center">
                <BookOpen size={18} className="mr-2" />
                Resources
              </h3>
              <div className="ml-6 space-y-2">
                <Link
                  to="/resources/guide"
                  className="block text-blue-600 hover:text-blue-800 transition-colors py-1"
                >
                  Timeshare Guide
                </Link>
                <Link
                  to="/resources/faqs"
                  className="block text-blue-600 hover:text-blue-800 transition-colors py-1"
                >
                  FAQs
                </Link>
                <Link
                  to="/blog"
                  className="block text-blue-600 hover:text-blue-800 transition-colors py-1"
                >
                  Blog
                </Link>
              </div>
            </div>
            
            <div className="pt-2 border-t border-gray-200 flex flex-col space-y-2">
              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors py-2"
                  >
                    <User size={18} className="mr-2" />
                    My Profile
                  </Link>
                  <Link
                    to="/my-listings"
                    className="text-blue-600 hover:text-blue-800 transition-colors py-2"
                  >
                    My Listings
                  </Link>
                  <Link
                    to="/messages"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors py-2"
                  >
                    <MessageSquare size={18} className="mr-2" />
                    Messages
                    <Badge variant="success" className="ml-2 h-5 text-[10px]">3</Badge>
                  </Link>
                  <button
                    onClick={signOut}
                    className="text-left text-red-600 hover:text-red-800 transition-colors py-2"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/auth"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors py-2"
                >
                  <User size={18} className="mr-2" />
                  Sign In / Register
                </Link>
              )}
              <Button 
                asChild 
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 w-full mt-2 shadow-md"
              >
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
