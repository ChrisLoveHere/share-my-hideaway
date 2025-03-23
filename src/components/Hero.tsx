
import React from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
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
          
          {/* Search Form */}
          <div className="max-w-4xl mx-auto backdrop-blur-md rounded-2xl p-1 bg-white/10 shadow-2xl animate-fade-up overflow-hidden" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={20} />
                  <Input 
                    className="pl-10 h-14 text-base rounded-xl border-0 bg-white/80 backdrop-blur-sm focus-visible:ring-2 ring-blue-400 shadow-none text-gray-800 placeholder:text-gray-500" 
                    placeholder="Destination" 
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={20} />
                  <Input 
                    className="pl-10 h-14 text-base rounded-xl border-0 bg-white/80 backdrop-blur-sm focus-visible:ring-2 ring-blue-400 shadow-none text-gray-800 placeholder:text-gray-500" 
                    placeholder="Check in" 
                    type="date"
                  />
                </div>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={20} />
                  <Input 
                    className="pl-10 h-14 text-base rounded-xl border-0 bg-white/80 backdrop-blur-sm focus-visible:ring-2 ring-blue-400 shadow-none text-gray-800 placeholder:text-gray-500" 
                    placeholder="Guests" 
                    type="number"
                    min="1"
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full h-14 px-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all text-lg"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            {['For Sale', 'For Rent', 'New Listings', 'Popular'].map((tag, index) => (
              <Button 
                key={index}
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20 hover:border-white/30 rounded-full px-6 animate-fade-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
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
