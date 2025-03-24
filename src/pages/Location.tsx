
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LocationInfo from '@/components/LocationInfo';
import { TimeshareProperty } from '@/types';

// Mock data for locations
const locationData: Record<string, {
  title: string;
  description: string;
  image: string;
  highlights: string[];
  popularResorts: Array<{
    id: string;
    name: string;
    image: string;
    rating: number;
  }>;
}> = {
  "orlando-florida": {
    title: "Orlando, Florida",
    description: "Orlando is home to more than a dozen theme parks. Leading the way is Walt Disney World, comprised of parks like the Magic Kingdom and Epcot, plus water parks. Another major attraction is Universal Orlando, which includes Universal Studios Florida and the Wizarding World of Harry Potter. Perfect for family vacations, Orlando's timeshare resorts offer spacious accommodations and amenities.",
    image: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?auto=format&fit=crop&q=80&w=1000",
    highlights: ["Close to Disney World", "Family-friendly resorts", "Year-round warm weather", "Amazing golf courses"],
    popularResorts: [
      {
        id: "r1",
        name: "Marriott's Grande Vista",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
      },
      {
        id: "r2",
        name: "Hilton Grand Vacations Club Tuscany Village",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800",
        rating: 4.5
      },
      {
        id: "r3",
        name: "Club Wyndham Bonnet Creek",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
        rating: 4.6
      },
      {
        id: "r4",
        name: "Vacation Village at Parkway",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
        rating: 4.2
      }
    ]
  },
  "las-vegas-nevada": {
    title: "Las Vegas, Nevada",
    description: "Las Vegas is a resort city known primarily for its casinos, shopping, fine dining, entertainment, and nightlife. The Las Vegas Strip is lined with elaborate themed hotels and is the focal point of the city's vibrant nightlife. Timeshare resorts in Las Vegas offer luxury accommodations near all the excitement while providing a relaxing retreat.",
    image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?auto=format&fit=crop&q=80&w=1000",
    highlights: ["World-class entertainment", "Luxury casino resorts", "Excellent dining options", "Desert adventures nearby"],
    popularResorts: [
      {
        id: "r5",
        name: "Marriott's Grand Chateau",
        image: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?auto=format&fit=crop&q=80&w=800",
        rating: 4.6
      },
      {
        id: "r6",
        name: "Hilton Grand Vacations Club on the Las Vegas Strip",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800",
        rating: 4.5
      },
      {
        id: "r7",
        name: "Club Wyndham Grand Desert",
        image: "https://images.unsplash.com/photo-1630660664869-c9d3cc676880?auto=format&fit=crop&q=80&w=800",
        rating: 4.3
      }
    ]
  },
  "maui-hawaii": {
    title: "Maui, Hawaii",
    description: "Maui is known for its stunning natural beauty, from the sacred Iao Valley to beaches with golden, red, and black sand. Sunrise and sunset from Haleakala are legendary, while the Road to Hana takes travelers through rainforests and past waterfalls. Maui timeshare resorts offer breathtaking ocean views and authentic Hawaiian hospitality.",
    image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80&w=1000",
    highlights: ["Beautiful beaches", "World-class snorkeling", "Whale watching (seasonal)", "Stunning sunsets"],
    popularResorts: [
      {
        id: "r8",
        name: "Marriott's Maui Ocean Club",
        image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
      },
      {
        id: "r9",
        name: "Hilton Vacation Club Ka'anapali Beach",
        image: "https://images.unsplash.com/photo-1572931089968-62e3b675bc2c?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
      },
      {
        id: "r10",
        name: "Hyatt Residence Club Maui",
        image: "https://images.unsplash.com/photo-1578067238577-9c5e7c2c3643?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
      }
    ]
  },
  "cancun-mexico": {
    title: "Cancun, Mexico",
    description: "Cancun is a world-renowned vacation destination on Mexico's Yucatan Peninsula known for its white sand beaches and turquoise waters. The Hotel Zone is home to nightclubs, global restaurants, and high-end resorts. Timeshare properties in Cancun offer all-inclusive options and easy access to both modern amenities and ancient Mayan ruins nearby.",
    image: "https://images.unsplash.com/photo-1682553064441-b3e0ef0444a9?auto=format&fit=crop&q=80&w=1000",
    highlights: ["All-inclusive resorts", "Caribbean beaches", "Mayan ruins nearby", "Water activities & excursions"],
    popularResorts: [
      {
        id: "r11",
        name: "Marriott's Cancun Resort",
        image: "https://images.unsplash.com/photo-1594560913095-8cf34bae6e03?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
      },
      {
        id: "r12",
        name: "Vidanta Riviera Maya",
        image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
      },
      {
        id: "r13",
        name: "Hilton Cancun All-Inclusive Resort",
        image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=800",
        rating: 4.6
      }
    ]
  }
};

// Mock data for listings - this is from the existing app
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
];

const Location = () => {
  const { slug } = useParams<{ slug: string }>();
  const [location, setLocation] = useState<typeof locationData[keyof typeof locationData] | null>(null);
  const [properties, setProperties] = useState<TimeshareProperty[]>([]);
  
  useEffect(() => {
    if (slug && locationData[slug]) {
      setLocation(locationData[slug]);
      
      // Filter properties by location
      const locationName = locationData[slug].title;
      const filteredProperties = mockProperties.filter(
        property => property.location.includes(locationName.split(',')[0])
      );
      setProperties(filteredProperties);
    }
  }, [slug]);
  
  if (!location) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Location Not Found</h1>
          <p className="text-gray-600 mb-8">The location you're looking for doesn't exist or has been moved.</p>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-2">{location.title} Timeshares</h1>
          <p className="text-white/80 text-lg max-w-3xl">
            Explore available timeshare properties in {location.title}, one of the most sought-after vacation destinations.
          </p>
        </div>
      </div>
      
      <LocationInfo 
        location={location.title}
        properties={properties}
        description={location.description}
        image={location.image}
        highlights={location.highlights}
        popularResorts={location.popularResorts}
      />
      
      <Footer />
    </>
  );
};

export default Location;
