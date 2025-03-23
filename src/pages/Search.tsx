
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, MapPin, Bed, Bath, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchFilters from '@/components/SearchFilters';
import { TimeshareProperty, FilterOptions } from '@/types';

// Mock data - in a real app this would come from an API
const mockProperties: TimeshareProperty[] = [
  {
    id: '1',
    title: "Vacation Village at Parkway",
    location: "Orlando, Florida",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=500",
    price: 1999,
    rentalPrice: 799,
    bedrooms: 2,
    bathrooms: 2,
    sleeps: 6,
    usage: "Annual",
    week: 9,
    season: "High",
    description: "Featuring a finely appointed 2 bedroom, 2 bath lockout suite that will accommodate 8 guests comfortably. Usage is biennial even in week 9. Maintenance fees are paid every use year.",
    amenities: ["Swimming Pool", "Hot Tub", "Tennis Courts", "Fitness Center", "Restaurant"],
    maintenanceFee: 1100,
    ownershipType: "Deeded",
    internalExchange: true,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
    ],
    resort: {
      id: 'r1',
      name: "Vacation Village at Parkway",
      location: "Orlando, Florida",
      city: "Orlando",
      state: "Florida",
      country: "USA",
      description: "Vacation Village at Parkway is a beautiful resort located just minutes from Disney World and other Orlando attractions.",
      amenities: ["Swimming Pool", "Hot Tub", "Tennis Courts", "Fitness Center", "Restaurant"],
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      rating: 4.5
    }
  },
  {
    id: '2',
    title: "Marriott's Ocean Pointe",
    location: "Palm Beach, Florida",
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=500",
    price: 19500,
    rentalPrice: 1500,
    bedrooms: 2,
    bathrooms: 2,
    sleeps: 6,
    usage: "Annual",
    week: "Floating",
    season: "High",
    description: "Beautiful oceanfront resort with stunning views and luxurious accommodations. Annual floating week in the platinum season.",
    amenities: ["Beachfront", "Swimming Pool", "Hot Tub", "Fitness Center", "Restaurant", "Spa"],
    maintenanceFee: 1500,
    ownershipType: "Deeded",
    internalExchange: true,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800"
    ],
    resort: {
      id: 'r2',
      name: "Marriott's Ocean Pointe",
      location: "Palm Beach, Florida",
      city: "Palm Beach",
      state: "Florida",
      country: "USA",
      description: "Marriott's Ocean Pointe is a beautiful oceanfront resort with stunning views and luxurious accommodations.",
      amenities: ["Beachfront", "Swimming Pool", "Hot Tub", "Fitness Center", "Restaurant", "Spa"],
      imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
      rating: 4.8
    }
  },
  {
    id: '3',
    title: "Holiday Inn Club Vacations",
    location: "Las Vegas, Nevada",
    imageUrl: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?auto=format&fit=crop&q=80&w=500",
    price: 12900,
    rentalPrice: 1100,
    bedrooms: 3,
    bathrooms: 3,
    sleeps: 8,
    usage: "Biennial",
    week: 5,
    season: "Medium",
    description: "Spacious 3-bedroom villa located just minutes from the Las Vegas Strip. Biennial usage in week 5.",
    amenities: ["Swimming Pool", "Hot Tub", "Fitness Center", "Game Room", "BBQ Area"],
    maintenanceFee: 900,
    ownershipType: "Deeded",
    internalExchange: true,
    images: [
      "https://images.unsplash.com/photo-1565538420870-da08ff96a207?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1630660664869-c9d3cc676880?auto=format&fit=crop&q=80&w=800"
    ],
    resort: {
      id: 'r3',
      name: "Holiday Inn Club Vacations at Desert Club Resort",
      location: "Las Vegas, Nevada",
      city: "Las Vegas",
      state: "Nevada",
      country: "USA",
      description: "Holiday Inn Club Vacations at Desert Club Resort is a beautiful resort located just minutes from the Las Vegas Strip.",
      amenities: ["Swimming Pool", "Hot Tub", "Fitness Center", "Game Room", "BBQ Area"],
      imageUrl: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?auto=format&fit=crop&q=80&w=800",
      rating: 4.3
    }
  },
  {
    id: '4',
    title: "Steele Hill Resort",
    location: "New Hampshire",
    imageUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=500",
    price: 6900,
    rentalPrice: 699,
    bedrooms: 1,
    bathrooms: 1,
    sleeps: 4,
    usage: "Annual",
    week: "Floating",
    season: "Low",
    description: "Cozy 1-bedroom unit with beautiful mountain views. Annual floating week in the silver season.",
    amenities: ["Swimming Pool", "Hot Tub", "Tennis Courts", "Restaurant", "Skiing Access"],
    maintenanceFee: 850,
    ownershipType: "Deeded",
    internalExchange: true,
    images: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
    ],
    resort: {
      id: 'r4',
      name: "Steele Hill Resort",
      location: "New Hampshire",
      city: "Sanbornton",
      state: "New Hampshire",
      country: "USA",
      description: "Steele Hill Resort is a beautiful resort with stunning mountain views and outdoor activities.",
      amenities: ["Swimming Pool", "Hot Tub", "Tennis Courts", "Restaurant", "Skiing Access"],
      imageUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=800",
      rating: 4.0
    }
  },
  {
    id: '5',
    title: "Hyatt Residence Club",
    location: "Maui, Hawaii",
    imageUrl: "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80&w=500",
    price: 32000,
    rentalPrice: 2800,
    bedrooms: 2,
    bathrooms: 2,
    sleeps: 6,
    usage: "Annual",
    week: 15,
    season: "High",
    description: "Luxury oceanfront resort with spectacular views. Prime week 15 during whale watching season.",
    amenities: ["Beachfront", "Infinity Pool", "Spa", "Fitness Center", "Restaurant", "Kids Club"],
    maintenanceFee: 2200,
    ownershipType: "Deeded",
    internalExchange: true,
    images: [
      "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1572931089968-62e3b675bc2c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1578067238577-9c5e7c2c3643?auto=format&fit=crop&q=80&w=800"
    ],
    resort: {
      id: 'r5',
      name: "Hyatt Residence Club Maui",
      location: "Maui, Hawaii",
      city: "Lahaina",
      state: "Hawaii",
      country: "USA",
      description: "Hyatt Residence Club Maui is a beautiful oceanfront resort with spectacular views and luxurious accommodations.",
      amenities: ["Beachfront", "Infinity Pool", "Spa", "Fitness Center", "Restaurant", "Kids Club"],
      imageUrl: "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80&w=800",
      rating: 4.9
    }
  },
  {
    id: '6',
    title: "Hilton Grand Vacations Club",
    location: "Orlando, Florida",
    imageUrl: "https://images.unsplash.com/photo-1594560913095-8cf34bae6e03?auto=format&fit=crop&q=80&w=500",
    price: 14800,
    rentalPrice: 999,
    bedrooms: 3,
    bathrooms: 2,
    sleeps: 8,
    usage: "Annual",
    week: 27,
    season: "High",
    description: "Spacious 3-bedroom unit in a prime location near Disney World. Annual week 27 during summer vacation.",
    amenities: ["Swimming Pool", "Lazy River", "Kids Pool", "Fitness Center", "Arcade", "Restaurant"],
    maintenanceFee: 1350,
    ownershipType: "Deeded",
    internalExchange: true,
    images: [
      "https://images.unsplash.com/photo-1594560913095-8cf34bae6e03?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=800"
    ],
    resort: {
      id: 'r6',
      name: "Hilton Grand Vacations Club at SeaWorld",
      location: "Orlando, Florida",
      city: "Orlando",
      state: "Florida",
      country: "USA",
      description: "Hilton Grand Vacations Club at SeaWorld is a beautiful resort located near SeaWorld and other Orlando attractions.",
      amenities: ["Swimming Pool", "Lazy River", "Kids Pool", "Fitness Center", "Arcade", "Restaurant"],
      imageUrl: "https://images.unsplash.com/photo-1594560913095-8cf34bae6e03?auto=format&fit=crop&q=80&w=800",
      rating: 4.6
    }
  }
];

// Destination information with descriptions to display based on location
const destinationInfo: Record<string, { 
  title: string; 
  description: string;
  image: string;
  highlights: string[];
}> = {
  "Orlando, Florida": {
    title: "Orlando, Florida Timeshares",
    description: "Orlando is home to more than a dozen theme parks. Leading the way is Walt Disney World, comprised of parks like the Magic Kingdom and Epcot, plus water parks. Another major attraction is Universal Orlando, which includes Universal Studios Florida and the Wizarding World of Harry Potter. Perfect for family vacations, Orlando's timeshare resorts offer spacious accommodations and amenities.",
    image: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?auto=format&fit=crop&q=80&w=1000",
    highlights: ["Close to Disney World", "Family-friendly resorts", "Year-round warm weather", "Amazing golf courses"]
  },
  "Las Vegas, Nevada": {
    title: "Las Vegas, Nevada Timeshares",
    description: "Las Vegas is a resort city known primarily for its casinos, shopping, fine dining, entertainment, and nightlife. The Las Vegas Strip is lined with elaborate themed hotels and is the focal point of the city's vibrant nightlife. Timeshare resorts in Las Vegas offer luxury accommodations near all the excitement while providing a relaxing retreat.",
    image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?auto=format&fit=crop&q=80&w=1000",
    highlights: ["World-class entertainment", "Luxury casino resorts", "Excellent dining options", "Desert adventures nearby"]
  },
  "Maui, Hawaii": {
    title: "Maui, Hawaii Timeshares",
    description: "Maui is known for its stunning natural beauty, from the sacred Iao Valley to beaches with golden, red, and black sand. Sunrise and sunset from Haleakala are legendary, while the Road to Hana takes travelers through rainforests and past waterfalls. Maui timeshare resorts offer breathtaking ocean views and authentic Hawaiian hospitality.",
    image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80&w=1000",
    highlights: ["Beautiful beaches", "World-class snorkeling", "Whale watching (seasonal)", "Stunning sunsets"]
  },
  "Cancun, Mexico": {
    title: "Cancun, Mexico Timeshares",
    description: "Cancun is a world-renowned vacation destination on Mexico's Yucatan Peninsula known for its white sand beaches and turquoise waters. The Hotel Zone is home to nightclubs, global restaurants, and high-end resorts. Timeshare properties in Cancun offer all-inclusive options and easy access to both modern amenities and ancient Mayan ruins nearby.",
    image: "https://images.unsplash.com/photo-1682553064441-b3e0ef0444a9?auto=format&fit=crop&q=80&w=1000",
    highlights: ["All-inclusive resorts", "Caribbean beaches", "Mayan ruins nearby", "Water activities & excursions"]
  }
};

const Search = () => {
  const [searchParams] = useSearchParams();
  const [properties, setProperties] = useState<TimeshareProperty[]>(mockProperties);
  const [filteredProperties, setFilteredProperties] = useState<TimeshareProperty[]>(mockProperties);
  const [currentView, setCurrentView] = useState<'sale' | 'rent'>('sale');
  
  const location = searchParams.get('location') || '';
  const currentDestination = Object.keys(destinationInfo).find(dest => 
    location.toLowerCase().includes(dest.toLowerCase())
  );
  
  const destinationData = currentDestination 
    ? destinationInfo[currentDestination] 
    : null;
  
  useEffect(() => {
    // Filter properties based on search parameters
    let filtered = [...properties];
    
    if (location) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    setFilteredProperties(filtered);
  }, [location, properties]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {destinationData ? destinationData.title : location 
              ? `Timeshares in ${location}` 
              : 'Search Timeshares for Sale and Rent'}
          </h1>
          
          <SearchFilters />
        </div>
      </div>
      
      {destinationData && (
        <div className="bg-white py-10 border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">About {currentDestination}</h2>
                <p className="text-gray-600 mb-6">{destinationData.description}</p>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Highlights:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {destinationData.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={destinationData.image} 
                  alt={currentDestination} 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="mb-4 sm:mb-0">
            <p className="text-gray-600">
              {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
              {location ? ` in ${location}` : ''}
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button
              variant={currentView === 'sale' ? 'default' : 'outline'}
              className={currentView === 'sale' ? 'bg-blue-600 hover:bg-blue-700' : ''}
              onClick={() => setCurrentView('sale')}
            >
              For Sale
            </Button>
            <Button
              variant={currentView === 'rent' ? 'default' : 'outline'}
              className={currentView === 'rent' ? 'bg-blue-600 hover:bg-blue-700' : ''}
              onClick={() => setCurrentView('rent')}
            >
              For Rent
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Link
              key={property.id}
              to={`/listing/${property.id}`}
              className="bg-white rounded-xl overflow-hidden shadow-subtle border border-gray-100 hover-lift group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={property.imageUrl} 
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                  {currentView === 'sale' ? 'FOR SALE' : 'FOR RENT'}
                </div>
                
                <div className="absolute bottom-3 right-3 flex items-center bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full">
                  <Star className="h-3 w-3 text-yellow-500 mr-1 fill-yellow-500" />
                  <span>{property.resort.rating}</span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-medium text-lg mb-1 truncate">{property.title}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <MapPin size={14} className="mr-1" />
                  <span>{property.location}</span>
                </div>
                
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
                    <span className="text-gray-600 text-sm">
                      {currentView === 'sale' ? 'Sale Price' : 'Rental Price'}
                    </span>
                    <p className="text-xl font-bold text-blue-600">
                      ${currentView === 'sale' ? property.price.toLocaleString() : property.rentalPrice?.toLocaleString()}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="group-hover:bg-blue-50">
                    View Details
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No properties found</h3>
            <p className="text-gray-600">Try adjusting your search filters or explore different locations.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Search;
