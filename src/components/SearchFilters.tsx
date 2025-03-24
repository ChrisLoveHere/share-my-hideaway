
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, ChevronDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from '@/components/ui/checkbox';

// Popular destinations and resorts for autocomplete
const popularLocations = [
  { name: "Orlando, Florida", type: "destination" },
  { name: "Las Vegas, Nevada", type: "destination" },
  { name: "Maui, Hawaii", type: "destination" },
  { name: "Cancun, Mexico", type: "destination" },
  { name: "Myrtle Beach, South Carolina", type: "destination" },
  { name: "Palm Beach, Florida", type: "destination" },
  { name: "Cabo San Lucas, Mexico", type: "destination" },
  { name: "Hilton Head, South Carolina", type: "destination" },
  { name: "Vail, Colorado", type: "destination" },
  { name: "Marriott's Maui Ocean Club", type: "resort" },
  { name: "Hilton Vacation Club Ka'anapali Beach", type: "resort" },
  { name: "Marriott's Grande Vista", type: "resort" },
  { name: "Marriott's Ocean Pointe", type: "resort" },
  { name: "Hyatt Residence Club Maui", type: "resort" },
  { name: "Club Wyndham Bonnet Creek", type: "resort" },
  { name: "Vacation Village at Parkway", type: "resort" },
  { name: "Holiday Inn Club Vacations", type: "resort" }
];

const SearchFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState(popularLocations);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  
  // Load initial values from URL parameters
  useEffect(() => {
    const location = searchParams.get('location') || '';
    setSearchTerm(location);
    
    const price = searchParams.get('maxPrice') || '';
    setMaxPrice(price);
    
    const beds = searchParams.get('bedrooms') || '';
    setBedrooms(beds);
  }, [searchParams]);
  
  useEffect(() => {
    if (searchTerm) {
      const filtered = popularLocations.filter(location => 
        location.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations(popularLocations);
    }
  }, [searchTerm]);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleSearch = () => {
    const newParams = new URLSearchParams(searchParams);
    
    // Update or remove search parameters
    if (searchTerm) {
      newParams.set('location', searchTerm);
    } else {
      newParams.delete('location');
    }
    
    if (maxPrice) {
      newParams.set('maxPrice', maxPrice);
    } else {
      newParams.delete('maxPrice');
    }
    
    if (bedrooms) {
      newParams.set('bedrooms', bedrooms);
    } else {
      newParams.delete('bedrooms');
    }
    
    setSearchParams(newParams);
  };
  
  const handleSelectLocation = (value: string) => {
    setSearchTerm(value);
    setShowSuggestions(false);
  };
  
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-subtle p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-grow">
          <div className="relative">
            <Input 
              placeholder="Search resorts, locations, keywords" 
              className="pl-10 h-12 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            
            {showSuggestions && (
              <div 
                ref={suggestionsRef}
                className="absolute z-50 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto"
              >
                {filteredLocations.length > 0 ? (
                  <div className="py-1">
                    {filteredLocations.map((location, index) => (
                      <div 
                        key={index} 
                        className="px-4 py-2 text-sm hover:bg-blue-50 cursor-pointer flex items-center"
                        onClick={() => handleSelectLocation(location.name)}
                      >
                        {location.type === 'destination' ? 
                          <MapPin className="h-4 w-4 mr-2 text-blue-500" /> : 
                          <div className="h-4 w-4 mr-2 rounded-full bg-teal-500"></div>
                        }
                        <div className="flex flex-col">
                          <span className="font-medium">{location.name}</span>
                          <span className="text-xs text-gray-500">
                            {location.type === 'destination' ? 'Destination' : 'Resort'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-500">No results found</div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Select value={maxPrice} onValueChange={setMaxPrice}>
            <SelectTrigger className="w-full sm:w-[180px] h-12">
              <SelectValue placeholder="Max Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5000">Up to $5,000</SelectItem>
              <SelectItem value="10000">Up to $10,000</SelectItem>
              <SelectItem value="15000">Up to $15,000</SelectItem>
              <SelectItem value="20000">Up to $20,000</SelectItem>
              <SelectItem value="25000">Up to $25,000</SelectItem>
              <SelectItem value="50000">Up to $50,000</SelectItem>
              <SelectItem value="100000">Up to $100,000</SelectItem>
            </SelectContent>
          </Select>

          <Select value={bedrooms} onValueChange={setBedrooms}>
            <SelectTrigger className="w-full sm:w-[180px] h-12">
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="studio">Studio</SelectItem>
              <SelectItem value="1">1 Bedroom</SelectItem>
              <SelectItem value="2">2 Bedrooms</SelectItem>
              <SelectItem value="3">3 Bedrooms</SelectItem>
              <SelectItem value="4+">4+ Bedrooms</SelectItem>
            </SelectContent>
          </Select>

          <Button 
            className="h-12 bg-blue-600 hover:bg-blue-700"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>

      <div className="mt-4">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setFiltersExpanded(!filtersExpanded)}
          className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 font-medium"
        >
          <Filter size={16} className="mr-2" />
          Advanced Filters
          <ChevronDown size={16} className={`ml-2 transition-transform ${filtersExpanded ? 'rotate-180' : ''}`} />
        </Button>

        {filtersExpanded && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 pt-4 border-t border-gray-200 animate-fade-in">
            <div>
              <h4 className="font-medium mb-3">Location</h4>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="orlando">Orlando, Florida</SelectItem>
                  <SelectItem value="las-vegas">Las Vegas, Nevada</SelectItem>
                  <SelectItem value="maui">Maui, Hawaii</SelectItem>
                  <SelectItem value="cancun">Cancun, Mexico</SelectItem>
                  <SelectItem value="myrtle-beach">Myrtle Beach, SC</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <h4 className="font-medium mb-3">Usage Type</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="annual" />
                  <label htmlFor="annual" className="text-sm text-gray-700 cursor-pointer">Annual</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="biennial" />
                  <label htmlFor="biennial" className="text-sm text-gray-700 cursor-pointer">Biennial</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="triennial" />
                  <label htmlFor="triennial" className="text-sm text-gray-700 cursor-pointer">Triennial</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="fractional" />
                  <label htmlFor="fractional" className="text-sm text-gray-700 cursor-pointer">Fractional</label>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Bathrooms</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="bath-1" />
                  <label htmlFor="bath-1" className="text-sm text-gray-700 cursor-pointer">1 Bathroom</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="bath-2" />
                  <label htmlFor="bath-2" className="text-sm text-gray-700 cursor-pointer">2 Bathrooms</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="bath-3" />
                  <label htmlFor="bath-3" className="text-sm text-gray-700 cursor-pointer">3 Bathrooms</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="bath-4" />
                  <label htmlFor="bath-4" className="text-sm text-gray-700 cursor-pointer">4+ Bathrooms</label>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Amenities</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="pool" />
                  <label htmlFor="pool" className="text-sm text-gray-700 cursor-pointer">Swimming Pool</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="beach" />
                  <label htmlFor="beach" className="text-sm text-gray-700 cursor-pointer">Beach Access</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="golf" />
                  <label htmlFor="golf" className="text-sm text-gray-700 cursor-pointer">Golf Course</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="spa" />
                  <label htmlFor="spa" className="text-sm text-gray-700 cursor-pointer">Spa</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="ski" />
                  <label htmlFor="ski" className="text-sm text-gray-700 cursor-pointer">Ski Access</label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilters;
