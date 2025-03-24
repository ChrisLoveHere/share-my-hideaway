
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Star, Bed, Bath, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TimeshareProperty } from '@/types';

interface LocationInfoProps {
  location: string;
  properties: TimeshareProperty[];
  description: string;
  image: string;
  highlights: string[];
  popularResorts: Array<{
    id: string;
    name: string;
    image: string;
    rating: number;
  }>;
}

const LocationInfo: React.FC<LocationInfoProps> = ({
  location,
  properties,
  description,
  image,
  highlights,
  popularResorts
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{location} Timeshares</h1>
            <p className="text-gray-700 mb-6">{description}</p>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <h2 className="text-xl font-semibold mb-4">Location Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1 mr-2 h-4 w-4 rounded-full bg-blue-500 flex-shrink-0"></div>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Available Timeshares</h2>
              <div className="grid grid-cols-1 gap-4">
                {properties.slice(0, 3).map((property) => (
                  <div 
                    key={property.id}
                    className="flex border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => navigate(`/listing/${property.id}`)}
                  >
                    <div className="w-1/3 max-w-[150px]">
                      <img 
                        src={property.imageUrl} 
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 w-2/3">
                      <h3 className="font-medium text-lg mb-1">{property.title}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <MapPin size={14} className="mr-1" />
                        <span>{property.location}</span>
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center text-sm">
                          <Bed size={14} className="mr-1 text-gray-500" />
                          <span>{property.bedrooms}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Bath size={14} className="mr-1 text-gray-500" />
                          <span>{property.bathrooms}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Users size={14} className="mr-1 text-gray-500" />
                          <span>Sleeps {property.sleeps}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <DollarSign size={14} className="text-green-600" />
                          <span className="font-semibold text-green-600">${property.price.toLocaleString()}</span>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Button 
                  variant="outline"
                  onClick={() => navigate(`/search?location=${encodeURIComponent(location)}`)}
                >
                  View All Properties in {location.split(',')[0]}
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md mb-8">
              <img 
                src={image} 
                alt={location}
                className="w-full h-72 object-cover"
              />
            </div>
            
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Popular Resorts in {location.split(',')[0]}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {popularResorts.map((resort) => (
                  <div 
                    key={resort.id}
                    className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => navigate(`/resort/${resort.id}`)}
                  >
                    <div className="h-32">
                      <img 
                        src={resort.image} 
                        alt={resort.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium">{resort.name}</h3>
                        <div className="flex items-center text-sm">
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                          <span>{resort.rating}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 flex items-center">
                        <MapPin size={12} className="mr-1" />
                        <span>{location.split(',')[0]}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
