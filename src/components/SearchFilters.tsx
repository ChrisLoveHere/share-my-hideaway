
import { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
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

const SearchFilters = () => {
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-subtle p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-grow">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Search resorts, locations, keywords" 
              className="pl-10 h-12 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Select>
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

          <Select>
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
            onClick={() => {
              console.log("Searching...");
            }}
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
