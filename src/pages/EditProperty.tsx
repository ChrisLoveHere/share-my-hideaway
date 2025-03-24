import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { 
  Card, CardContent, CardDescription, 
  CardFooter, CardHeader, CardTitle 
} from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Switch } from '@/components/ui/switch';
import { 
  Form, FormControl, FormDescription, 
  FormField, FormItem, FormLabel, FormMessage 
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { CalendarIcon, Loader2, Plus, X, ArrowLeft } from 'lucide-react';

const propertySchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  location: z.string().min(3, { message: "Location is required" }),
  description: z.string().min(20, { message: "Description must be at least 20 characters" }),
  price: z.coerce.number().positive({ message: "Price must be positive" }),
  rental_price: z.coerce.number().nonnegative().optional(),
  bedrooms: z.coerce.number().min(1, { message: "At least 1 bedroom required" }),
  bathrooms: z.coerce.number().min(1, { message: "At least 1 bathroom required" }),
  sleeps: z.coerce.number().min(1, { message: "Must sleep at least 1 person" }),
  usage: z.string().min(3, { message: "Usage type is required" }),
  maintenance_fee: z.coerce.number().nonnegative().optional(),
  points: z.coerce.number().nonnegative().optional(),
  for_sale: z.boolean().default(true),
  for_rent: z.boolean().default(false),
  availability_start_date: z.date().optional(),
  availability_end_date: z.date().optional(),
  week: z.string().optional(),
  season: z.string().optional(),
  ownership_type: z.string().optional(),
});

type PropertyFormValues = z.infer<typeof propertySchema>;

const EditProperty = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { user, session } = useAuth();
  const [loading, setLoading] = useState(false);
  const [propertyLoading, setPropertyLoading] = useState(true);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [newAmenity, setNewAmenity] = useState('');
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [uploadingImage, setUploadingImage] = useState(false);
  
  const form = useForm<PropertyFormValues>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      title: '',
      location: '',
      description: '',
      price: 0,
      rental_price: 0,
      bedrooms: 1,
      bathrooms: 1,
      sleeps: 2,
      usage: 'Annual',
      maintenance_fee: 0,
      points: 0,
      for_sale: true,
      for_rent: false,
      week: '',
      season: 'High',
      ownership_type: 'Deeded',
    },
  });
  
  useEffect(() => {
    // Redirect to login if not authenticated
    if (!session) {
      navigate('/auth');
      return;
    }
    
    fetchProperty();
  }, [session, navigate, id, user?.id]);
  
  const fetchProperty = async () => {
    if (!user || !id) return;
    
    try {
      setPropertyLoading(true);
      
      const { data, error } = await supabase
        .from('timeshare_properties')
        .select('*')
        .eq('id', id)
        .eq('seller_id', user.id)
        .single();
      
      if (error) throw error;
      
      if (!data) {
        toast.error("Property not found or you don't have permission to edit it");
        navigate('/my-properties');
        return;
      }
      
      // Set form values
      form.reset({
        title: data.title,
        location: data.location,
        description: data.description || '',
        price: data.price,
        rental_price: data.rental_price || 0,
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        sleeps: data.sleeps,
        usage: data.usage,
        maintenance_fee: data.maintenance_fee || 0,
        points: data.points || 0,
        for_sale: data.for_sale === true,
        for_rent: data.for_rent === true,
        week: data.week || '',
        season: data.season || 'High',
        ownership_type: data.ownership_type || 'Deeded',
        availability_start_date: data.availability_start_date ? new Date(data.availability_start_date) : undefined,
        availability_end_date: data.availability_end_date ? new Date(data.availability_end_date) : undefined,
      });
      
      // Set amenities and images
      setAmenities(data.amenities || []);
      setUploadedImages(data.images || []);
      
    } catch (error: any) {
      console.error('Error fetching property:', error);
      toast.error(`Failed to load property: ${error.message}`);
      navigate('/my-properties');
    } finally {
      setPropertyLoading(false);
    }
  };
  
  const onSubmit = async (data: PropertyFormValues) => {
    if (!user || !id) return;
    
    try {
      setLoading(true);
      
      // Prepare the data for update
      const propertyData = {
        ...data,
        amenities,
        images: uploadedImages,
        image_url: uploadedImages.length > 0 ? uploadedImages[0] : null,
      };
      
      // Update the property
      const { error } = await supabase
        .from('timeshare_properties')
        .update(propertyData)
        .eq('id', id)
        .eq('seller_id', user.id);
      
      if (error) throw error;
      
      toast.success('Property updated successfully!');
      navigate(`/listing/${id}`);
    } catch (error: any) {
      console.error('Error updating property:', error);
      toast.error(`Failed to update property: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  
  const handleAddAmenity = () => {
    if (newAmenity.trim() && !amenities.includes(newAmenity.trim())) {
      setAmenities([...amenities, newAmenity.trim()]);
      setNewAmenity('');
    }
  };
  
  const handleRemoveAmenity = (amenity: string) => {
    setAmenities(amenities.filter(a => a !== amenity));
  };
  
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    
    try {
      setUploadingImage(true);
      
      // Generate a unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
      const filePath = `${user?.id}/${fileName}`;
      
      // Upload the file
      const { error: uploadError } = await supabase.storage
        .from('property_images')
        .upload(filePath, file);
      
      if (uploadError) throw uploadError;
      
      // Get the public URL
      const { data } = supabase.storage
        .from('property_images')
        .getPublicUrl(filePath);
      
      // Add to uploaded images array
      setUploadedImages([...uploadedImages, data.publicUrl]);
      toast.success('Image uploaded successfully');
    } catch (error: any) {
      console.error('Error uploading image:', error);
      toast.error(`Failed to upload image: ${error.message}`);
    } finally {
      setUploadingImage(false);
      e.target.value = '';
    }
  };
  
  const handleRemoveImage = (imageUrl: string) => {
    setUploadedImages(uploadedImages.filter(url => url !== imageUrl));
  };
  
  if (propertyLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 md:px-6 pt-28 pb-16">
          <div className="flex justify-center items-center h-60">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Button
              variant="ghost"
              className="flex items-center text-gray-600 hover:text-gray-900"
              onClick={() => navigate('/my-properties')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to My Properties
            </Button>
          </div>
          
          <h1 className="text-3xl font-bold mb-8">Edit Your Property</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
              <CardDescription>
                Update the details about your timeshare property.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Property Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Vacation Village at Parkway" {...field} />
                          </FormControl>
                          <FormDescription>
                            Enter the name of your property or resort.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input placeholder="Orlando, Florida" {...field} />
                          </FormControl>
                          <FormDescription>
                            City, state, and/or country of the property.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your property in detail..." 
                            className="min-h-32"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Provide a detailed description of the property, including unique features.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Property Images</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            disabled={uploadingImage}
                            className="flex-1"
                          />
                          {uploadingImage && (
                            <Loader2 className="h-5 w-5 animate-spin text-gray-500" />
                          )}
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {uploadedImages.map((url, index) => (
                            <div key={url} className="relative rounded-md overflow-hidden">
                              <img 
                                src={url} 
                                alt={`Property ${index + 1}`} 
                                className="w-full h-24 object-cover"
                              />
                              <button
                                type="button"
                                onClick={() => handleRemoveImage(url)}
                                className="absolute top-1 right-1 bg-black bg-opacity-60 rounded-full p-1 text-white"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Amenities</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Input
                            value={newAmenity}
                            onChange={(e) => setNewAmenity(e.target.value)}
                            placeholder="Add an amenity (e.g. Swimming Pool)"
                            className="flex-1"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={handleAddAmenity}
                            disabled={!newAmenity.trim()}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {amenities.map((amenity) => (
                            <div 
                              key={amenity} 
                              className="flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm"
                            >
                              <span>{amenity}</span>
                              <button
                                type="button"
                                onClick={() => handleRemoveAmenity(amenity)}
                                className="ml-2 text-blue-600 hover:text-blue-800"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="bedrooms"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bedrooms</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="bathrooms"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bathrooms</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" step="0.5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="sleeps"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sleeps</FormLabel>
                          <FormControl>
                            <Input type="number" min="1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="usage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Usage Type</FormLabel>
                          <FormControl>
                            <select 
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                              {...field}
                            >
                              <option value="Annual">Annual</option>
                              <option value="Biennial">Biennial</option>
                              <option value="Triennial">Triennial</option>
                              <option value="Fractional">Fractional</option>
                              <option value="Points">Points</option>
                            </select>
                          </FormControl>
                          <FormDescription>
                            How often can the property be used.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="week"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Week Number/Period</FormLabel>
                          <FormControl>
                            <Input placeholder="Week 7 or Floating" {...field} />
                          </FormControl>
                          <FormDescription>
                            Fixed week number or "Floating" if flexible.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="season"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Season</FormLabel>
                          <FormControl>
                            <select 
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                              {...field}
                            >
                              <option value="High">High</option>
                              <option value="Medium">Medium</option>
                              <option value="Low">Low</option>
                              <option value="Floating">Floating</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="ownership_type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ownership Type</FormLabel>
                          <FormControl>
                            <select 
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                              {...field}
                            >
                              <option value="Deeded">Deeded</option>
                              <option value="Right-to-use">Right-to-use</option>
                              <option value="Points">Points</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="for_sale"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">For Sale</FormLabel>
                            <FormDescription>
                              List this property for sale
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="for_rent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">For Rent</FormLabel>
                            <FormDescription>
                              List this property for rent
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sale Price ($)</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" {...field} />
                          </FormControl>
                          <FormDescription>
                            The asking price to purchase this property.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="rental_price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rental Price ($ per week)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min="0" 
                              disabled={!form.watch('for_rent')}
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Weekly rental price if available for rent.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="maintenance_fee"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Annual Maintenance Fee ($)</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" {...field} />
                          </FormControl>
                          <FormDescription>
                            The annual maintenance fee for this property.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="points"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Points (if applicable)</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" {...field} />
                          </FormControl>
                          <FormDescription>
                            Number of points included with this property.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="availability_start_date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Available From</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => 
                                  date < new Date(new Date().setHours(0, 0, 0, 0))
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormDescription>
                            When is this property first available?
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="availability_end_date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Available Until</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => {
                                  const startDate = form.watch('availability_start_date');
                                  return startDate && date < startDate;
                                }}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormDescription>
                            When is this property last available?
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Updating Property...
                      </>
                    ) : (
                      'Update Property'
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EditProperty;
