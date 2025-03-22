
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, MapPin, Bed, Bath, Users, Calendar, Tags, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TimeshareProperty } from '@/types';

// Mock data - in a real app this would come from an API
const mockProperties: Partial<Record<string, TimeshareProperty>> = {
  '1': {
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
    description: "Featuring a finely appointed 2 bedroom, 2 bath lockout suite that will accommodate 8 guests comfortably. Usage is biennial even in week 9. Maintenance fees are paid every use year. For more information or to make an offer, please submit the inquiry form.\n\nThis timeshare is located in the heart of Orlando, just minutes away from Disney World, Universal Studios, and other major attractions. The resort features multiple pools, hot tubs, and recreational facilities.\n\nAs an owner, you'll enjoy spacious accommodations with a full kitchen, living and dining areas, and private bedrooms. The unit can be locked off into two separate units for maximum flexibility.",
    amenities: ["Swimming Pool", "Hot Tub", "Tennis Courts", "Fitness Center", "Restaurant", "Game Room", "WiFi", "Parking", "Laundry", "Air Conditioning"],
    maintenanceFee: 1100,
    ownershipType: "Deeded",
    internalExchange: true,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&q=80&w=800"
    ],
    resort: {
      id: 'r1',
      name: "Vacation Village at Parkway",
      location: "Orlando, Florida",
      city: "Orlando",
      state: "Florida",
      country: "USA",
      description: "Vacation Village at Parkway is a beautiful resort located just minutes from Disney World and other Orlando attractions. The resort features multiple pools, hot tubs, and recreational facilities. As an owner, you'll enjoy spacious accommodations with a full kitchen, living and dining areas, and private bedrooms.",
      amenities: ["Swimming Pool", "Hot Tub", "Tennis Courts", "Fitness Center", "Restaurant", "Game Room", "WiFi", "Parking", "Laundry", "Air Conditioning"],
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      rating: 4.5
    }
  }
};

const Listing = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<TimeshareProperty | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  
  useEffect(() => {
    // Simulate API call
    const fetchProperty = () => {
      setLoading(true);
      setTimeout(() => {
        if (id && mockProperties[id]) {
          setProperty(mockProperties[id] as TimeshareProperty);
        }
        setLoading(false);
      }, 500);
    };
    
    fetchProperty();
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 md:px-6 pt-28 pb-16">
          <div className="flex justify-center items-center h-60">
            <div className="animate-pulse flex flex-col items-center">
              <div className="rounded-full bg-gray-200 h-12 w-12 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-48 mb-2.5"></div>
              <div className="h-3 bg-gray-200 rounded w-32"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 md:px-6 pt-28 pb-16">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-2">Listing Not Found</h2>
            <p className="text-gray-600 mb-6">The timeshare listing you're looking for doesn't exist or has been removed.</p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/search">Browse All Listings</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 pt-28 pb-16">
        <div className="mb-6">
          <Link to="/search" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ChevronLeft size={16} className="mr-1" />
            Back to Search Results
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative rounded-xl overflow-hidden h-96 mb-4">
                <img 
                  src={property.images[activeImage]} 
                  alt={property.title}
                  className="w-full h-full object-cover animate-blur-in"
                />
              </div>
              
              <div className="grid grid-cols-5 gap-3">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    className={`rounded-md overflow-hidden border-2 ${index === activeImage ? 'border-blue-600' : 'border-transparent'} transition-all`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${property.title} - Image ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Property Info */}
            <div className="bg-white rounded-xl shadow-subtle border border-gray-100 p-6 mb-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-3">{property.title}</h1>
              
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin size={18} className="mr-1 text-blue-600" />
                <span>{property.location}</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Bed size={18} className="mr-2" />
                    <span>Bedrooms</span>
                  </div>
                  <p className="font-medium text-lg">{property.bedrooms}</p>
                </div>
                
                <div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Bath size={18} className="mr-2" />
                    <span>Bathrooms</span>
                  </div>
                  <p className="font-medium text-lg">{property.bathrooms}</p>
                </div>
                
                <div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Users size={18} className="mr-2" />
                    <span>Sleeps</span>
                  </div>
                  <p className="font-medium text-lg">{property.sleeps}</p>
                </div>
                
                <div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar size={18} className="mr-2" />
                    <span>Week</span>
                  </div>
                  <p className="font-medium text-lg">{property.week}</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 py-6">
                <h2 className="text-xl font-medium mb-4">Description</h2>
                <div className="prose max-w-none text-gray-700">
                  {property.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 py-6">
                <h2 className="text-xl font-medium mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle2 size={16} className="text-blue-600 mr-2" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Resort Info */}
            <div className="bg-white rounded-xl shadow-subtle border border-gray-100 p-6 mb-8">
              <h2 className="text-xl font-medium mb-4">About the Resort</h2>
              
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="md:w-1/3">
                  <img 
                    src={property.resort.imageUrl} 
                    alt={property.resort.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-lg font-medium mb-2">{property.resort.name}</h3>
                  <p className="text-gray-600 mb-4">{property.resort.location}</p>
                  <p className="text-gray-700">{property.resort.description}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-subtle border border-gray-100 p-6 mb-6 sticky top-28">
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-600">Sale Price</span>
                  <span className="text-xl font-bold text-blue-600">${property.price.toLocaleString()}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Maintenance Fee</span>
                  <span className="font-medium">${property.maintenanceFee}/year</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Tags size={18} className="text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Usage Type</p>
                    <p className="text-gray-600">{property.usage}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar size={18} className="text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Season</p>
                    <p className="text-gray-600">{property.season}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 size={18} className="text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Ownership Type</p>
                    <p className="text-gray-600">{property.ownershipType}</p>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 mb-3"
                onClick={() => setShowContactForm(!showContactForm)}
              >
                Contact Seller
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full"
              >
                Share Listing
              </Button>
              
              {showContactForm && (
                <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in">
                  <h3 className="text-lg font-medium mb-4">Contact Seller</h3>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Input placeholder="First Name" required />
                      </div>
                      <div>
                        <Input placeholder="Last Name" required />
                      </div>
                    </div>
                    
                    <div>
                      <Input type="email" placeholder="Email Address" required />
                    </div>
                    
                    <div>
                      <Input type="tel" placeholder="Phone Number" required />
                    </div>
                    
                    <div>
                      <Input placeholder="Offer Amount ($)" type="number" />
                    </div>
                    
                    <div>
                      <Textarea 
                        placeholder="Message to Seller" 
                        className="h-32 resize-none"
                        defaultValue={`Hello, I am interested in your Vacation Village at Parkway timeshare listing for $${property.price.toLocaleString()}. Please contact me with more information.`}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Listing;
