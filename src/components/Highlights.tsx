
import { Search, DollarSign, Calendar, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HighlightProps {
  className?: string;
}

const Highlights = ({ className }: HighlightProps) => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: "Search over 75,000 listings",
      description: "Find timeshare rentals and resales in our extensive marketplace."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: "Secure incredible prices",
      description: "Get amazing deals from popular brands like Disney, Hilton, and Marriott."
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      title: "Worldwide destinations",
      description: "Explore more than 4,000 resorts in over 1,300 destinations."
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      title: "Flexible vacation options",
      description: "Find exactly what you need with various unit sizes and travel dates."
    }
  ];

  return (
    <section className={cn("py-20 bg-white", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-xl hover-lift"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4 rounded-full bg-blue-50 p-3">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
