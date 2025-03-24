
import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Destination {
  name: string;
  slug: string;
  image: string;
  propertyCount: number;
}

interface DestinationGridProps {
  destinations: Destination[];
}

const DestinationGrid: React.FC<DestinationGridProps> = ({ destinations }) => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Timeshare Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore these sought-after vacation spots with thousands of timeshare opportunities.
            Find your dream getaway in these amazing locations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <Link 
              key={destination.slug}
              to={`/location/${destination.slug}`}
              className="group overflow-hidden rounded-xl shadow-md relative h-72 transition-all hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img 
                src={destination.image} 
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                  {destination.name}
                </h3>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1 opacity-80" />
                  <span className="text-white/80 mr-3">{destination.name.split(',')[0]}</span>
                  <span className="bg-blue-600/80 text-white text-xs px-2 py-1 rounded-full">
                    {destination.propertyCount}+ properties
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/search"
            className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            Explore All Destinations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationGrid;
