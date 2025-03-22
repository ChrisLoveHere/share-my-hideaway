
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Bed, Bath, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TimeshareProperty {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  usage: string;
  week: string | number;
}

const FeaturedListings = () => {
  const [activeTab, setActiveTab] = useState<'sale' | 'rent'>('sale');
  
  const properties: TimeshareProperty[] = [
    {
      id: '1',
      title: "Vacation Village at Parkway",
      location: "Orlando, Florida",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=500",
      price: 1999,
      bedrooms: 2,
      bathrooms: 2,
      usage: "Annual",
      week: 9
    },
    {
      id: '2',
      title: "Marriott's Ocean Pointe",
      location: "Palm Beach, Florida",
      imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=500",
      price: 19500,
      bedrooms: 2,
      bathrooms: 2,
      usage: "Annual",
      week: "Floating"
    },
    {
      id: '3',
      title: "Holiday Inn Club Vacations",
      location: "Las Vegas, Nevada",
      imageUrl: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?auto=format&fit=crop&q=80&w=500",
      price: 12900,
      bedrooms: 3,
      bathrooms: 3,
      usage: "Biennial",
      week: 5
    },
    {
      id: '4',
      title: "Steele Hill Resort",
      location: "New Hampshire",
      imageUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=500",
      price: 6900,
      bedrooms: 1,
      bathrooms: 1,
      usage: "Annual",
      week: "Floating"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Timeshares</h2>
            <p className="text-gray-600 max-w-xl">
              Browse our selection of premium timeshare properties available for sale and rent.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 flex">
            <Button
              variant={activeTab === 'sale' ? 'default' : 'outline'}
              className={cn(
                "rounded-r-none",
                activeTab === 'sale' 
                  ? "bg-blue-600 hover:bg-blue-700" 
                  : "border-blue-600 text-blue-600 hover:bg-blue-50"
              )}
              onClick={() => setActiveTab('sale')}
            >
              For Sale
            </Button>
            <Button
              variant={activeTab === 'rent' ? 'default' : 'outline'}
              className={cn(
                "rounded-l-none",
                activeTab === 'rent' 
                  ? "bg-blue-600 hover:bg-blue-700" 
                  : "border-blue-600 text-blue-600 hover:bg-blue-50"
              )}
              onClick={() => setActiveTab('rent')}
            >
              For Rent
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <div 
              key={property.id}
              className="bg-white rounded-xl overflow-hidden shadow-subtle border border-gray-100 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={property.imageUrl} 
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                  {activeTab === 'sale' ? 'FOR SALE' : 'FOR RENT'}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-medium text-lg mb-1 truncate">{property.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{property.location}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Bed size={16} className="mr-1" />
                    <span className="mr-3">{property.bedrooms} bed</span>
                    <Bath size={16} className="mr-1" />
                    <span>{property.bathrooms} bath</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-1" />
                    <span>Week {property.week}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-600 text-sm">Price</span>
                    <p className="text-xl font-bold text-blue-600">
                      ${property.price.toLocaleString()}
                    </p>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link to={`/listing/${property.id}`}>
                      View
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 px-8">
            <Link to="/search">View All Listings</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
