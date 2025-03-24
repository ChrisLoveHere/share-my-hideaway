
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResortInfo from '@/components/ResortInfo';
import { TimeshareProperty } from '@/types';

// Mock data for resorts - this is from the existing app
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
      description: "Vacation Village at Parkway is a beautiful resort located just minutes from Disney World and other Orlando attractions. This family-friendly resort features spacious accommodations, multiple swimming pools, a fitness center, and is near all the major theme parks. It's perfect for families looking for a convenient and comfortable base for their Orlando vacation.",
      amenities: ["Swimming Pool", "Hot Tub", "Tennis Courts", "Fitness Center", "Restaurant", "Kids Club", "Game Room", "BBQ Area"],
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
      description: "Marriott's Ocean Pointe is a stunning oceanfront resort offering breathtaking views of the Atlantic Ocean. This beautiful Palm Beach resort features multiple pools, a fitness center, and direct beach access. The villas are elegantly appointed with full kitchens and private balconies, perfect for enjoying the ocean breeze.",
      amenities: ["Beachfront", "Swimming Pool", "Hot Tub", "Fitness Center", "Restaurant", "Spa", "Kids Pool", "Business Center"],
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
      description: "Holiday Inn Club Vacations at Desert Club Resort is located just a half-mile from the Las Vegas Strip, offering a peaceful retreat with easy access to all the excitement. The resort features villa-style accommodations with full kitchens, multiple outdoor pools, and a fitness center. It's perfect for families or groups wanting spacious accommodations near Las Vegas attractions.",
      amenities: ["Swimming Pool", "Hot Tub", "Fitness Center", "Game Room", "BBQ Area", "Tennis Courts", "Marketplace", "Shuttle Service"],
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
      description: "Hyatt Residence Club Maui is a luxurious oceanfront resort located on Ka'anapali Beach, offering stunning views of the Pacific Ocean and the islands of Lanai and Molokai. This upscale resort features residential-style accommodations with gourmet kitchens, multiple pools including an infinity-edge pool, a full-service spa, and direct beach access. It's perfect for travelers seeking a premium Hawaiian vacation experience.",
      amenities: ["Beachfront", "Infinity Pool", "Spa", "Fitness Center", "Restaurant", "Kids Club", "Valet Parking", "Concierge Service"],
      imageUrl: "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80&w=800",
      rating: 4.9
    }
  },
];

const Resort = () => {
  const { id } = useParams<{ id: string }>();
  const [resort, setResort] = useState<TimeshareProperty['resort'] | null>(null);
  const [properties, setProperties] = useState<TimeshareProperty[]>([]);
  
  useEffect(() => {
    if (id) {
      // Find the resort by ID
      const foundResort = mockProperties.find(property => property.resort.id === id)?.resort || null;
      setResort(foundResort);
      
      // Find all properties at this resort
      if (foundResort) {
        const resortProperties = mockProperties.filter(
          property => property.resort.id === id
        );
        setProperties(resortProperties);
      }
    }
  }, [id]);
  
  if (!resort) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Resort Not Found</h1>
          <p className="text-gray-600 mb-8">The resort you're looking for doesn't exist or has been moved.</p>
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
          <h1 className="text-4xl font-bold text-white mb-2">{resort.name}</h1>
          <p className="text-white/80 text-lg flex items-center">
            <MapPin size={18} className="mr-2" />
            {resort.location}
          </p>
        </div>
      </div>
      
      <ResortInfo 
        resort={resort}
        properties={properties}
      />
      
      <Footer />
    </>
  );
};

export default Resort;
