import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Loader2, Upload, X, Plus, Trash2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const EditProperty = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [property, setProperty] = useState<any>(null);
  
  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [resortName, setResortName] = useState('');
  const [price, setPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [squareFeet, setSquareFeet] = useState('');
  const [points, setPoints] = useState('');
  const [week, setWeek] = useState('');
  const [ownershipType, setOwnershipType] = useState('');
  const [maintenanceFee, setMaintenanceFee] = useState('');
  const [forSale, setForSale] = useState(false);
  const [forRent, setForRent] = useState(false);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [availabilityStartDate, setAvailabilityStartDate] = useState('');
  const [availabilityEndDate, setAvailabilityEndDate] = useState('');
  
  // Fetch property data
  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      
      try {
        const { data, error } = await supabase
          .from('timeshare_properties')
          .select('*')
          .eq('id', id)
          .single();
          
        if (error) {
          throw error;
        }
        
        if (!data) {
          toast.error('Property not found');
          navigate('/my-properties');
          return;
        }
        
        // Check if user is the owner
        if (user && data.seller_id !== user.id) {
          toast.error('You do not have permission to edit this property');
          navigate('/my-properties');
          return;
        }
        
        setProperty(data);
        
        // Populate form fields
        setTitle(data.title || '');
        setDescription(data.description || '');
        setLocation(data.location || '');
        setResortName(data.resort_name || '');
        setPrice(data.price ? data.price.toString() : '');
        setBedrooms(data.bedrooms ? data.bedrooms.toString() : '');
        setBathrooms(data.bathrooms ? data.bathrooms.toString() : '');
        setSquareFeet(data.square_feet ? data.square_feet.toString() : '');
        setPoints(data.points ? data.points.toString() : '');
        setWeek(data.week || '');
        setOwnershipType(data.ownership_type || '');
        setMaintenanceFee(data.maintenance_fee ? data.maintenance_fee.toString() : '');
        setForSale(data.for_sale || false);
        setForRent(data.for_rent || false);
        setAmenities(data.amenities || []);
        setExistingImages(data.images || []);
        
        // Format dates for input fields
        if (data.availability_start_date) {
          setAvailabilityStartDate(data.availability_start_date);
        }
        if (data.availability_end_date) {
          setAvailabilityEndDate(data.availability_end_date);
        }
        
      } catch (error: any) {
        toast.error(`Error fetching property: ${error.message}`);
        console.error('Error fetching property:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProperty();
  }, [id, user, navigate]);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setNewImages(prev => [...prev, ...filesArray]);
    }
  };
  
  const removeNewImage = (index: number) => {
    setNewImages(prev => prev.filter((_, i) => i !== index));
  };
  
  const removeExistingImage = (index: number) => {
    setExistingImages(prev => prev.filter((_, i) => i !== index));
  };
  
  const toggleAmenity = (amenity: string) => {
    setAmenities(prev => 
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error('You must be logged in to update a property');
      return;
    }
    
    if (!property) {
      toast.error('Property not found');
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
      
      // Handle any new image uploads
      let imageUrls = [...existingImages];
      let mainImageUrl = property.image_url;
      
      if (newImages.length > 0) {
        for (let i = 0; i < newImages.length; i++) {
          const file = newImages[i];
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
          
          // If there's no main image, set the first new image as the main image
          if (!mainImageUrl && i === 0) {
            mainImageUrl = data.publicUrl;
          }
        }
      }
      
      // Update the property data with all required fields
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
        availability_start_date: formattedStartDate,
        availability_end_date: formattedEndDate
      };
      
      const { error } = await supabase
        .from('timeshare_properties')
        .update(propertyData)
        .eq('id', id);
        
      if (error) {
        throw error;
      }
      
      toast.success('Property updated successfully!');
      navigate('/my-properties');
    } catch (error: any) {
      toast.error(`Error updating property: ${error.message}`);
      console.error('Error updating property:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Edit Your Timeshare Property</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input 
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g., Luxury Timeshare at Wyndham Grand Resort"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your property in detail..."
                    rows={5}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input 
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g., Orlando, Florida"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="resort-name">Resort Name</Label>
                    <Input 
                      id="resort-name"
                      value={resortName}
                      onChange={(e) => setResortName(e.target.value)}
                      placeholder="e.g., Wyndham Grand Resort"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Property Details */}
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h2 className="text-xl font-semibold mb-4">Property Details</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="bedrooms">Bedrooms</Label>
                    <Input 
                      id="bedrooms"
                      type="number"
                      min="0"
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="bathrooms">Bathrooms</Label>
                    <Input 
                      id="bathrooms"
                      type="number"
                      min="0"
                      step="0.5"
                      value={bathrooms}
                      onChange={(e) => setBathrooms(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="square-feet">Square Feet</Label>
                    <Input 
                      id="square-feet"
                      type="number"
                      min="0"
                      value={squareFeet}
                      onChange={(e) => setSquareFeet(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="points">Points (if applicable)</Label>
                    <Input 
                      id="points"
                      type="number"
                      min="0"
                      value={points}
                      onChange={(e) => setPoints(e.target.value)}
                      placeholder="e.g., 150000"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="week">Week (if applicable)</Label>
                    <Input 
                      id="week"
                      value={week}
                      onChange={(e) => setWeek(e.target.value)}
                      placeholder="e.g., Week 32 or Floating"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="ownership-type">Ownership Type</Label>
                  <Select 
                    value={ownershipType} 
                    onValueChange={setOwnershipType}
                  >
                    <SelectTrigger id="ownership-type">
                      <SelectValue placeholder="Select ownership type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deeded">Deeded</SelectItem>
                      <SelectItem value="right-to-use">Right-to-Use</SelectItem>
                      <SelectItem value="points">Points-Based</SelectItem>
                      <SelectItem value="fractional">Fractional Ownership</SelectItem>
                      <SelectItem value="club">Club Membership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            {/* Pricing & Availability */}
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h2 className="text-xl font-semibold mb-4">Pricing & Availability</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="price">Price ($)</Label>
                    <Input 
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="e.g., 15000"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="maintenance-fee">Annual Maintenance Fee ($)</Label>
                    <Input 
                      id="maintenance-fee"
                      value={maintenanceFee}
                      onChange={(e) => setMaintenanceFee(e.target.value)}
                      placeholder="e.g., 800"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="for-sale" 
                      checked={forSale}
                      onCheckedChange={(checked) => setForSale(checked as boolean)}
                    />
                    <Label htmlFor="for-sale" className="cursor-pointer">Available for Sale</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="for-rent" 
                      checked={forRent}
                      onCheckedChange={(checked) => setForRent(checked as boolean)}
                    />
                    <Label htmlFor="for-rent" className="cursor-pointer">Available for Rent</Label>
                  </div>
                </div>
                
                {forRent && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="availability-start">Availability Start Date</Label>
                      <Input 
                        id="availability-start"
                        type="date"
                        value={availabilityStartDate}
                        onChange={(e) => setAvailabilityStartDate(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="availability-end">Availability End Date</Label>
                      <Input 
                        id="availability-end"
                        type="date"
                        value={availabilityEndDate}
                        onChange={(e) => setAvailabilityEndDate(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Amenities */}
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'Pool', 'Hot Tub', 'Beach Access', 'Fitness Center', 'Spa',
                  'Restaurant', 'Bar', 'Room Service', 'Concierge', 'Valet Parking',
                  'Free Parking', 'WiFi', 'Kitchen', 'Washer/Dryer', 'Air Conditioning',
                  'Heating', 'TV', 'Cable/Satellite', 'Golf', 'Tennis',
                  'Water Sports', 'Kids Club', 'Game Room', 'BBQ Area', 'Balcony/Patio'
                ].map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`amenity-${amenity}`}
                      checked={amenities.includes(amenity)}
                      onCheckedChange={() => toggleAmenity(amenity)}
                    />
                    <Label htmlFor={`amenity-${amenity}`} className="cursor-pointer">{amenity}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Images */}
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h2 className="text-xl font-semibold mb-4">Property Images</h2>
              
              {/* Existing images */}
              {existingImages.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Current Images</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {existingImages.map((image, index) => (
                      <div key={index} className="relative group">
                        <img 
                          src={image} 
                          alt={`Property ${index + 1}`}
                          className="w-full h-32 object-cover rounded-md border"
                        />
                        <button
                          type="button"
                          onClick={() => removeExistingImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* New images */}
              <div>
                <h3 className="text-lg font-medium mb-3">Add New Images</h3>
                
                {newImages.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
                    {newImages.map((image, index) => (
                      <div key={index} className="relative group">
                        <img 
                          src={URL.createObjectURL(image)} 
                          alt={`New upload ${index + 1}`}
                          className="w-full h-32 object-cover rounded-md border"
                        />
                        <button
                          type="button"
                          onClick={() => removeNewImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="mt-2">
                  <Label htmlFor="images" className="block mb-2">Upload Images</Label>
                  <div className="flex items-center space-x-4">
                    <label 
                      htmlFor="images" 
                      className="cursor-pointer flex items-center justify-center px-4 py-2 border-2 border-dashed border-gray-300 rounded-md hover:border-blue-500 transition-colors"
                    >
                      <Upload className="mr-2 h-5 w-5 text-gray-500" />
                      <span>Choose Files</span>
                      <input
                        id="images"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                    <span className="text-sm text-gray-500">
                      {newImages.length} new file(s) selected
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Tip: Upload high-quality images to showcase your property. Maximum 10 images.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Submit */}
            <div className="flex justify-between items-center">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/my-properties')}
              >
                Cancel
              </Button>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  'Update Property'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default EditProperty;
