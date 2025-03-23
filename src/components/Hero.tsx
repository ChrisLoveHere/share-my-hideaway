
import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [destination, setDestination] = useState<string>('');
  const [guests, setGuests] = useState<string>('1');
  
  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    
    if (destination) {
      searchParams.append('location', destination);
    }
    
    if (date) {
      searchParams.append('date', format(date, 'yyyy-MM-dd'));
    }
    
    if (guests) {
      searchParams.append('guests', guests);
    }
    
    navigate(`/search?${searchParams.toString()}`);
  };
  
  return (
    <div className={cn(
      "relative min-h-[90vh] flex items-center justify-center overflow-hidden",
      className
    )}>
      {/* Animated Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-teal-900/80 mix-blend-multiply z-10"></div>
        
        {/* Video background */}
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3"
        >
          <source src="https://player.vimeo.com/external/464546553.sd.mp4?s=45f69543ac8a7597aadf721fdda0a21a97a0c3db&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </div>
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-500/10 backdrop-blur-lg animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-teal-500/10 backdrop-blur-lg animate-pulse" style={{ animationDuration: '7s' }}></div>
      
      {/* Content */}
      <div className="container relative z-20 px-6 py-16 mx-auto text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight animate-fade-up drop-shadow-lg">
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">Dream</span> Timeshare
          </h1>
          
          <p className="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto mb-12 animate-fade-up drop-shadow-md" style={{ animationDelay: "0.1s" }}>
            Buy, sell or rent timeshares at the best prices on the marketplace trusted by millions.
          </p>
          
          {/* Search Form - Updated to make it functional */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              <div className="relative">
                <Input 
                  className="pl-10 h-14 text-base rounded-full border-0 bg-white/90 focus-visible:ring-1 ring-blue-400 shadow-sm text-gray-800 placeholder:text-gray-500" 
                  placeholder="Destination" 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              
              <Popover>
                <PopoverTrigger asChild>
                  <div className="relative cursor-pointer">
                    <Input 
                      className="pl-10 h-14 text-base rounded-full border-0 bg-white/90 focus-visible:ring-1 ring-blue-400 shadow-sm text-gray-800 placeholder:text-gray-500" 
                      placeholder="mm/dd/yyyy" 
                      value={date ? format(date, 'MM/dd/yyyy') : ''}
                      readOnly
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
              
              <div className="relative">
                <Input 
                  className="pl-10 h-14 text-base rounded-full border-0 bg-white/90 focus-visible:ring-1 ring-blue-400 shadow-sm text-gray-800 placeholder:text-gray-500" 
                  placeholder="Guests" 
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                />
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              
              <Button
                size="lg"
                className="h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all text-lg font-medium"
                onClick={handleSearch}
              >
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
          
          {/* Search tags buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['For Sale', 'For Rent', 'New Listings', 'Popular'].map((tag, index) => (
              <Button 
                key={index}
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20 hover:border-white/30 rounded-full px-8 py-6 text-base font-medium animate-fade-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                onClick={() => navigate(`/search?tag=${tag.toLowerCase().replace(' ', '-')}`)}
              >
                {tag}
              </Button>
            ))}
          </div>
          
          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            {[
              { label: 'Properties', value: '75,000+' },
              { label: 'Destinations', value: '1,300+' },
              { label: 'Happy Customers', value: '25,000+' },
              { label: 'Years of Service', value: '15+' }
            ].map((stat, index) => (
              <div key={index} className="text-center glass px-2 py-4 rounded-lg backdrop-blur-md bg-white/5">
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">
                  {stat.value}
                </p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
