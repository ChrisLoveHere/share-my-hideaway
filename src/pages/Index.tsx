import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PopularDestinations from '@/components/PopularDestinations';
import FeaturedListings from '@/components/FeaturedListings';
import Highlights from '@/components/Highlights';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import DestinationGrid from '@/components/DestinationGrid';

const popularDestinations = [
  {
    name: "Orlando, Florida",
    slug: "orlando-florida",
    image: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?auto=format&fit=crop&q=80&w=1000",
    propertyCount: 850
  },
  {
    name: "Las Vegas, Nevada",
    slug: "las-vegas-nevada",
    image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?auto=format&fit=crop&q=80&w=1000",
    propertyCount: 620
  },
  {
    name: "Maui, Hawaii",
    slug: "maui-hawaii",
    image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80&w=1000",
    propertyCount: 300
  },
  {
    name: "Cancun, Mexico",
    slug: "cancun-mexico",
    image: "https://images.unsplash.com/photo-1682553064441-b3e0ef0444a9?auto=format&fit=crop&q=80&w=1000",
    propertyCount: 420
  },
  {
    name: "Myrtle Beach, South Carolina",
    slug: "myrtle-beach-sc",
    image: "https://images.unsplash.com/photo-1520619831939-20df361706c2?auto=format&fit=crop&q=80&w=1000",
    propertyCount: 280
  },
  {
    name: "Palm Beach, Florida",
    slug: "palm-beach-florida",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000",
    propertyCount: 340
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      <DestinationGrid destinations={popularDestinations} />
      
      <PopularDestinations />
      <FeaturedListings />
      <Highlights />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
