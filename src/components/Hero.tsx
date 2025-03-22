
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={cn(
      "relative min-h-[80vh] flex items-center justify-center overflow-hidden",
      className
    )}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-teal-900/70 mix-blend-multiply z-10" />
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3"
          alt="Beach resort view" 
          className="w-full h-full object-cover object-center animate-blur-in"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-20 px-6 py-16 mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-up mb-6 max-w-4xl mx-auto leading-tight">
          Timeshares for <span className="text-blue-300">Sale</span> and <span className="text-teal-300">Rent</span> by Owner
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Find incredible deals on timeshares or list your own with the leading timeshare marketplace.
        </p>
        
        {/* Search Form */}
        <div className="max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-col sm:flex-row gap-4 p-2 rounded-xl bg-white/10 backdrop-blur-md">
            <div className="flex-1">
              <Input 
                className="w-full h-14 text-base px-4 rounded-lg border-0 bg-white/80 backdrop-blur-sm focus:ring-2 ring-blue-400 shadow-none" 
                placeholder="Search resorts, locations, or keywords" 
              />
            </div>
            <div className="flex-shrink-0">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Search className="mr-2 h-5 w-5" />
                Search Now
              </Button>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20 hover:border-white/30"
            >
              For Sale
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20 hover:border-white/30"
            >
              For Rent
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
