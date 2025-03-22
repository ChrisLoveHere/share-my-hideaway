
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface Destination {
  name: string;
  location: string;
  slug: string;
  imageUrl: string;
}

const destinations: Destination[] = [
  {
    name: "Orlando",
    location: "Florida",
    slug: "orlando-florida",
    imageUrl: "https://images.unsplash.com/photo-1575089776834-8be34696ffb9?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Las Vegas",
    location: "Nevada",
    slug: "las-vegas-nevada",
    imageUrl: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Maui",
    location: "Hawaii",
    slug: "maui-hawaii",
    imageUrl: "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Cancun",
    location: "Mexico",
    slug: "cancun-mexico",
    imageUrl: "https://images.unsplash.com/photo-1552074284-5e88ef1adb3c?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Myrtle Beach",
    location: "South Carolina",
    slug: "myrtle-beach-south-carolina",
    imageUrl: "https://images.unsplash.com/photo-1575931953324-fcac7d390675?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Palm Beach",
    location: "Aruba",
    slug: "palm-beach-aruba",
    imageUrl: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800"
  }
];

const PopularDestinations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Popular Timeshare Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the most sought-after vacation spots for timeshare owners and travelers alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <Link
              key={destination.slug}
              to={`/destination/${destination.slug}`}
              className="group relative overflow-hidden rounded-xl h-72 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
              <img
                src={destination.imageUrl}
                alt={`${destination.name}, ${destination.location}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-1">{destination.name}</h3>
                <p className="text-white/90">{destination.location}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/destinations" 
            className="text-blue-600 font-medium hover:text-blue-700 underline transition-colors"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
