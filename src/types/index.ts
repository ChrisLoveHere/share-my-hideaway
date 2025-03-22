
export interface TimeshareProperty {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  price: number;
  rentalPrice?: number;
  bedrooms: number;
  bathrooms: number;
  sleeps: number;
  usage: 'Annual' | 'Biennial' | 'Triennial' | 'Fractional';
  week: string | number;
  season: 'High' | 'Medium' | 'Low' | 'Floating';
  description: string;
  amenities: string[];
  maintenanceFee: number;
  ownershipType: 'Deeded' | 'Right-to-use' | 'Points';
  internalExchange: boolean;
  images: string[];
  resort: Resort;
}

export interface Resort {
  id: string;
  name: string;
  location: string;
  city: string;
  state: string;
  country: string;
  description: string;
  amenities: string[];
  imageUrl: string;
  rating: number;
}

export interface FilterOptions {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  usageType?: string[];
  amenities?: string[];
  season?: string;
  keyword?: string;
}
