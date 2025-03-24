
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Star, Bed, Bath, Users, DollarSign, CheckCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TimeshareProperty } from '@/types';

interface ResortInfoProps {
  resort: {
    id: string;
    name: string;
    location: string;
    description: string;
    amenities: string[];
    imageUrl: string;
    rating: number;
  };
  properties: TimeshareProperty[];
}

const ResortInfo: React.FC<ResortInfoProps> = ({ resort, properties }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-2">{resort.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  <MapPin size={16} className="mr-1 text-gray-500" />
                  <span className="text-gray-700">{resort.location}</span>
                </div>
                <div className="flex items-center bg-blue-50 px-2 py-1 rounded-full">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="font-medium">{resort.rating}</span>
                </div>
              </div>
              
              <div className="prose prose-blue max-w-none mb-6">
                <p className="text-gray-700">{resort.description}</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                <h2 className="text-xl font-semibold mb-4">Resort Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {resort.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle size={16} className="mr-2 text-green-500" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={resort.imageUrl} 
                  alt={resort.name} 
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    This resort is part of the {resort.name.split(' ')[0]} network, offering exchange options and vacation packages. Contact us for more information about ownership opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Available Units at {resort.name}</h2>
          
          {properties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <div 
                  key={property.id} 
                  className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate(`/listing/${property.id}`)}
                >
                  <div className="relative h-48">
                    <img 
                      src={property.imageUrl} 
                      alt={property.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                      FOR SALE
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-2">{property.title}</h3>
                    
                    <div className="flex justify-between mb-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Bed size={16} className="mr-1" />
                        <span className="mr-3">{property.bedrooms} bed</span>
                        <Bath size={16} className="mr-1" />
                        <span>{property.bathrooms} bath</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Week {property.week}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-500 text-sm">Sale Price</p>
                        <p className="text-xl font-bold text-blue-600">${property.price.toLocaleString()}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">No available units at this time</h3>
              <p className="text-gray-600 mb-4">Check back soon for new listings at this resort.</p>
              <Button onClick={() => navigate('/search')}>
                Explore Other Resorts
              </Button>
            </div>
          )}
        </div>
        
        <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Interested in {resort.name}?</h3>
              <p className="text-gray-700">
                Contact our specialists to learn more about available units, rental opportunities, 
                or how to sell your ownership at this resort.
              </p>
            </div>
            <div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Request Information
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResortInfo;
