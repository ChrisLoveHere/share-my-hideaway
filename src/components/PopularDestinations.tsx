
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ChevronRight, MapPin } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Destination {
  name: string;
  location: string;
  slug: string;
  imageUrl: string;
  properties: number;
}

const destinations: Destination[] = [
  {
    name: "Orlando",
    location: "Florida",
    slug: "orlando-florida",
    imageUrl: "https://images.unsplash.com/photo-1575089776834-8be34696ffb9?auto=format&fit=crop&q=80&w=800",
    properties: 342
  },
  {
    name: "Las Vegas",
    location: "Nevada",
    slug: "las-vegas-nevada",
    imageUrl: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?auto=format&fit=crop&q=80&w=800",
    properties: 219
  },
  {
    name: "Maui",
    location: "Hawaii",
    slug: "maui-hawaii",
    imageUrl: "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80&w=800",
    properties: 187
  },
  {
    name: "Cancun",
    location: "Mexico",
    slug: "cancun-mexico",
    imageUrl: "https://images.unsplash.com/photo-1552074284-5e88ef1adb3c?auto=format&fit=crop&q=80&w=800",
    properties: 205
  },
  {
    name: "Myrtle Beach",
    location: "South Carolina",
    slug: "myrtle-beach-south-carolina",
    imageUrl: "https://images.unsplash.com/photo-1575931953324-fcac7d390675?auto=format&fit=crop&q=80&w=800",
    properties: 155
  },
  {
    name: "Palm Beach",
    location: "Aruba",
    slug: "palm-beach-aruba",
    imageUrl: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800",
    properties: 128
  }
];

const PopularDestinations = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50 to-transparent opacity-70"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-100/50 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-teal-100/50 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block">
            <p className="inline-flex items-center px-4 py-1 rounded-full text-blue-600 bg-blue-50 border border-blue-100 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
              Explore Destinations
            </p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-800 to-teal-700">Popular Timeshare Destinations</h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore the most sought-after vacation spots for timeshare owners and travelers alike.
          </p>
        </div>
        
        {/* Featured destination - larger display */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-2xl h-96 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10 transition-all duration-500 group-hover:from-black/70"></div>
            <img
              src="https://images.unsplash.com/photo-1618245318763-453825cd2fde?auto=format&fit=crop&q=80&w=1600"
              alt="Hawaii"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-teal-50 bg-teal-600/80 text-xs font-medium mb-4">
                Featured Destination
              </span>
              <h3 className="text-3xl font-bold text-white mb-4">Hawaii Islands</h3>
              <p className="text-white/90 text-lg max-w-xl mb-6">Experience paradise on Earth with crystal clear waters, breathtaking landscapes and a rich cultural heritage.</p>
              <Link 
                to="/search?location=Hawaii" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:from-blue-500 hover:to-teal-500"
              >
                Explore Hawaii
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Destinations carousel */}
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Top Destinations</h3>
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static transform-none h-10 w-10 rounded-full border-gray-200 bg-white hover:bg-gray-50 text-gray-700" />
              <CarouselNext className="static transform-none h-10 w-10 rounded-full border-gray-200 bg-white hover:bg-gray-50 text-gray-700" />
            </div>
          </div>
          <CarouselContent className="-ml-4 md:-ml-6">
            {destinations.map((destination, index) => (
              <CarouselItem key={destination.slug} className="pl-4 md:pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Link
                  to={`/destination/${destination.slug}`}
                  className="block group relative overflow-hidden rounded-xl aspect-[4/5] hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                  <img
                    src={destination.imageUrl}
                    alt={`${destination.name}, ${destination.location}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                    <div className="mb-2 flex items-center">
                      <MapPin size={14} className="text-blue-300 mr-1" />
                      <p className="text-sm text-blue-300">{destination.location}</p>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{destination.name}</h3>
                    <p className="text-white/80 text-sm">{destination.properties} Properties</p>
                    <span className="mt-4 inline-block py-1 px-3 bg-white/20 rounded-full text-white text-xs backdrop-blur-sm">
                      View Details
                    </span>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-12 text-center">
          <Link 
            to="/destinations" 
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors"
          >
            View All Destinations
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
