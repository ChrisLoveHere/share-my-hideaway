
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply z-10" />
        <img 
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2000"
          alt="Vacation resort" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Own A Timeshare?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              List your timeshare on our marketplace and connect with thousands of potential buyers and renters looking for their next vacation destination.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-teal-300 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-white/90">
                  Get your timeshare in front of thousands of verified buyers
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-teal-300 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-white/90">
                  Professional advertising team to help maximize your listing's exposure
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-teal-300 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-white/90">
                  Secure platform with advanced buyer verification process
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link to="/sell" className="flex items-center">
                  Sell My Timeshare
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/rent">
                  Rent My Timeshare
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-white mb-6">What's My Timeshare Worth?</h3>
            <p className="text-white/90 mb-6">
              Get a free valuation of your timeshare property and discover its current market value.
            </p>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Resort Name" 
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-teal-500 hover:bg-teal-600 text-white"
              >
                Get Help Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
