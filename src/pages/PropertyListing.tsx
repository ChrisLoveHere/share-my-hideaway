import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const PropertyListing = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [resortName, setResortName] = useState('');
  const [price, setPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('1');
  const [bathrooms, setBathrooms] = useState('1');
  const [squareFeet, setSquareFeet] = useState('');
  const [points, setPoints] = useState('');
  const [week, setWeek] = useState('');
  const [ownershipType, setOwnershipType] = useState('');
  const [maintenanceFee, setMaintenanceFee] = useState('');
  const [forSale, setForSale] = useState(false);
  const [forRent, setForRent] = useState(false);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [availabilityStartDate, setAvailabilityStartDate] = useState<Date | null>(null);
  const [availabilityEndDate, setAvailabilityEndDate] = useState<Date | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImages(Array.from(e.target.files));
  };
  
  const handleAmenityChange = (amenity: string) => {
    if (amenities.includes(amenity)) {
      setAmenities(amenities.filter(a => a !== amenity));
    } else {
      setAmenities([...amenities, amenity]);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error('You must be logged in to list a property');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Format price as number
      const priceAsNumber = price ? parseFloat(price.replace(/[^0-9.]/g, '')) : 0;
      
      // Format dates for Supabase
      const formattedStartDate = availabilityStartDate ? 
        new Date(availabilityStartDate).toISOString().split('T')[0] : null;
      const formattedEndDate = availabilityEndDate ? 
        new Date(availabilityEndDate).toISOString().split('T')[0] : null;
      
      // First upload any images
      let imageUrls: string[] = [];
      let mainImageUrl = '';
      
      if (images.length > 0) {
        for (let i = 0; i < images.length; i++) {
          const file = images[i];
          const fileExt = file.name.split('.').pop();
          const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
          const filePath = `${user.id}/${fileName}`;
          
          const { error: uploadError } = await supabase.storage
            .from('property-images')
            .upload(filePath, file);
            
          if (uploadError) {
            toast.error(`Error uploading image: ${uploadError.message}`);
            continue;
          }
          
          const { data } = supabase.storage
            .from('property-images')
            .getPublicUrl(filePath);
            
          imageUrls.push(data.publicUrl);
          
          // Set the first image as the main image
          if (i === 0) {
            mainImageUrl = data.publicUrl;
          }
        }
      }
      
      // Create the property object with all required fields
      const propertyData = {
        title,
        description,
        location,
        resort_name: resortName,
        price: priceAsNumber,
        bedrooms: parseInt(bedrooms) || 1, // Ensure bedrooms is a number and has default
        bathrooms: parseInt(bathrooms) || 1, // Ensure bathrooms is a number and has default
        square_feet: squareFeet ? parseInt(squareFeet) : null,
        points: points ? parseInt(points) : null,
        week: week || null,
        ownership_type: ownershipType || null,
        maintenance_fee: maintenanceFee ? parseFloat(maintenanceFee) : null,
        for_sale: forSale,
        for_rent: forRent,
        amenities,
        images: imageUrls,
        image_url: mainImageUrl,
        seller_id: user.id,
        availability_start_date: formattedStartDate,
        availability_end_date: formattedEndDate
      };
      
      const { error } = await supabase
        .from('timeshare_properties')
        .insert(propertyData);
        
      if (error) {
        throw error;
      }
      
      toast.success('Property listed successfully!');
      navigate('/my-properties');
    } catch (error: any) {
      toast.error(`Error creating property: ${error.message}`);
      console.error('Error creating property:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">List Your Timeshare Property</h1>
      
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <div className="mb-4">
          <Label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</Label>
          <Input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="mt-1 block w-full" 
            required 
          />
        </div>
        
        <div className="mb-4">
          <Label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</Label>
          <Textarea 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="mt-1 block w-full" 
            rows={4} 
            required 
          />
        </div>
        
        <div className="mb-4">
          <Label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</Label>
          <Input 
            type="text" 
            id="location" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            className="mt-1 block w-full" 
            required 
          />
        </div>
        
        <div className="mb-4">
          <Label htmlFor="resortName" className="block text-sm font-medium text-gray-700">Resort Name</Label>
          <Input 
            type="text" 
            id="resortName" 
            value={resortName} 
            onChange={(e) => setResortName(e.target.value)} 
            className="mt-1 block w-full" 
            required 
          />
        </div>
        
        <div className="mb-4">
          <Label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</Label>
          <Input 
            type="text" 
            id="price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            className="mt-1 block w-full" 
            placeholder="e.g., $1,200"
            required 
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <Label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">Bedrooms</Label>
            <Select value={bedrooms} onValueChange={setBedrooms}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {['1', '2', '3', '4', '5+'].map(num => (
                  <SelectItem key={num} value={num}>{num}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">Bathrooms</Label>
            <Select value={bathrooms} onValueChange={setBathrooms}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {['1', '2', '3', '4', '5+'].map(num => (
                  <SelectItem key={num} value={num}>{num}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <Label htmlFor="squareFeet" className="block text-sm font-medium text-gray-700">Square Feet</Label>
            <Input 
              type="number" 
              id="squareFeet" 
              value={squareFeet} 
              onChange={(e) => setSquareFeet(e.target.value)} 
              className="mt-1 block w-full" 
              placeholder="Optional"
            />
          </div>
          
          <div>
            <Label htmlFor="points" className="block text-sm font-medium text-gray-700">Points</Label>
            <Input 
              type="number" 
              id="points" 
              value={points} 
              onChange={(e) => setPoints(e.target.value)} 
              className="mt-1 block w-full" 
              placeholder="Optional"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <Label htmlFor="week" className="block text-sm font-medium text-gray-700">Week</Label>
            <Input 
              type="text" 
              id="week" 
              value={week} 
              onChange={(e) => setWeek(e.target.value)} 
              className="mt-1 block w-full" 
              placeholder="Optional"
            />
          </div>
          
          <div>
            <Label htmlFor="ownershipType" className="block text-sm font-medium text-gray-700">Ownership Type</Label>
            <Input 
              type="text" 
              id="ownershipType" 
              value={ownershipType} 
              onChange={(e) => setOwnershipType(e.target.value)} 
              className="mt-1 block w-full" 
              placeholder="e.g., Deed, Right-to-Use"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <Label htmlFor="maintenanceFee" className="block text-sm font-medium text-gray-700">Maintenance Fee</Label>
          <Input 
            type="text" 
            id="maintenanceFee" 
            value={maintenanceFee} 
            onChange={(e) => setMaintenanceFee(e.target.value)} 
            className="mt-1 block w-full" 
            placeholder="e.g., $800 annually"
          />
        </div>
        
        <div className="mb-4">
          <Label className="block text-sm font-medium text-gray-700">Amenities</Label>
          <div className="flex flex-wrap gap-2 mt-1">
            {['Pool', 'Gym', 'Beach Access', 'Golf Course', 'Restaurant', 'Spa'].map(amenity => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox 
                  id={amenity} 
                  checked={amenities.includes(amenity)} 
                  onCheckedChange={() => handleAmenityChange(amenity)} 
                />
                <Label htmlFor={amenity} className="text-gray-700">{amenity}</Label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <Label htmlFor="images" className="block text-sm font-medium text-gray-700">Images</Label>
          <Input 
            type="file" 
            id="images" 
            multiple 
            onChange={handleImageChange} 
            className="mt-1 block w-full" 
            accept="image/*"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <Label htmlFor="availabilityStartDate" className="block text-sm font-medium text-gray-700">Availability Start Date</Label>
            <Input
              type="date"
              id="availabilityStartDate"
              className="mt-1 block w-full"
              onChange={(e) => setAvailabilityStartDate(new Date(e.target.value))}
            />
          </div>
          
          <div>
            <Label htmlFor="availabilityEndDate" className="block text-sm font-medium text-gray-700">Availability End Date</Label>
            <Input
              type="date"
              id="availabilityEndDate"
              className="mt-1 block w-full"
              onChange={(e) => setAvailabilityEndDate(new Date(e.target.value))}
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4 mb-4">
          <div>
            <Checkbox 
              id="forSale" 
              checked={forSale} 
              onCheckedChange={(checked) => setForSale(!!checked)} 
            />
            <Label htmlFor="forSale" className="ml-2 text-sm font-medium text-gray-700">For Sale</Label>
          </div>
          
          <div>
            <Checkbox 
              id="forRent" 
              checked={forRent} 
              onCheckedChange={(checked) => setForRent(!!checked)} 
            />
            <Label htmlFor="forRent" className="ml-2 text-sm font-medium text-gray-700">For Rent</Label>
          </div>
        </div>
        
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? 'Submitting...' : 'List Property'}
        </Button>
      </form>
    </div>
  );
};

export default PropertyListing;
