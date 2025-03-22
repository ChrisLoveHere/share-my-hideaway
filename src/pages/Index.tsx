
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import FeaturedListings from '@/components/FeaturedListings';
import PopularDestinations from '@/components/PopularDestinations';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Highlights />
      <FeaturedListings />
      <PopularDestinations />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
