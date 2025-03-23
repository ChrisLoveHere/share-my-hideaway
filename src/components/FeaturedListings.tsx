
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Bed, Bath, Calendar, Star, Heart, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
  rating?: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

const FeaturedListings = () => {
  const [activeTab, setActiveTab] = useState<'sale' | 'rent'>('sale');
  const [isFavorite, setIsFavorite] = useState<Record<string, boolean>>({});
  
  const toggleFavorite = (id: string) => {
    setIsFavorite(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
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
      week: 9,
      rating: 4.8,
      isNew: true
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
      week: "Floating",
      rating: 4.9,
      isFeatured: true
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
      week: 5,
      rating: 4.6
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
      week: "Floating",
      rating: 4.7,
      isNew: true
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50/50">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-teal-100/50 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-block">
              <p className="inline-flex items-center px-4 py-1 rounded-full text-blue-600 bg-blue-50 border border-blue-100 text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                Explore Timeshares
              </p>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-800 to-teal-700">Featured Timeshares</h2>
            
            <p className="text-gray-600 max-w-xl text-lg">
              Browse our selection of premium timeshare properties available for sale and rent.
            </p>
          </div>
          
          <div className="mt-8 md:mt-0">
            <div className="p-1 bg-blue-100 rounded-xl inline-flex">
              <Button
                variant={activeTab === 'sale' ? 'default' : 'outline'}
                className={cn(
                  "rounded-lg px-6 text-base font-medium",
                  activeTab === 'sale' 
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-md" 
                    : "bg-transparent text-gray-700 hover:bg-blue-50 border-transparent"
                )}
                onClick={() => setActiveTab('sale')}
              >
                For Sale
              </Button>
              <Button
                variant={activeTab === 'rent' ? 'default' : 'outline'}
                className={cn(
                  "rounded-lg px-6 text-base font-medium",
                  activeTab === 'rent' 
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-md" 
                    : "bg-transparent text-gray-700 hover:bg-blue-50 border-transparent"
                )}
                onClick={() => setActiveTab('rent')}
              >
                For Rent
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <Card 
              key={property.id}
              className="group bg-white rounded-xl overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={property.imageUrl} 
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <button 
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm transition-colors hover:bg-white"
                >
                  <Heart 
                    size={18} 
                    className={cn(
                      "transition-colors",
                      isFavorite[property.id] ? "fill-red-500 text-red-500" : "text-gray-600"
                    )} 
                  />
                </button>
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {property.isNew && (
                    <Badge className="bg-teal-500 hover:bg-teal-600 px-2 py-1 text-xs">New</Badge>
                  )}
                  {property.isFeatured && (
                    <Badge className="bg-purple-500 hover:bg-purple-600 px-2 py-1 text-xs">Featured</Badge>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center text-white">
                    <MapPin size={14} className="mr-1" />
                    <span className="text-sm font-medium">{property.location}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
                    {activeTab === 'sale' ? 'FOR SALE' : 'FOR RENT'}
                  </span>
                  {property.rating && (
                    <div className="flex items-center">
                      <Star size={14} className="text-yellow-400 fill-yellow-400 mr-1" />
                      <span className="text-sm font-medium text-gray-700">{property.rating}</span>
                    </div>
                  )}
                </div>
                
                <h3 className="font-bold text-xl mb-2 group-hover:text-blue-600 transition-colors">{property.title}</h3>
                
                <div className="flex items-center justify-between mb-4 text-gray-500 text-sm">
                  <div className="flex items-center">
                    <Bed size={16} className="mr-1" />
                    <span className="mr-3">{property.bedrooms} bd</span>
                    <Bath size={16} className="mr-1" />
                    <span>{property.bathrooms} ba</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>Week {property.week}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="text-2xl font-bold text-blue-600">
                      ${property.price.toLocaleString()}
                    </p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="rounded-lg border-blue-200 hover:bg-blue-50 hover:text-blue-600">
                    <Link to={`/listing/${property.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg px-8 py-6 h-auto text-lg shadow-lg hover:shadow-xl">
            <Link to="/search">View All Listings</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
