
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { toast } from 'sonner';
import { Edit, Eye, Trash2, Plus, AlertCircle, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Property {
  id: string;
  title: string;
  location: string;
  image_url: string | null;
  price: number;
  rental_price: number | null;
  bedrooms: number;
  bathrooms: number;
  created_at: string;
  for_sale: boolean;
  for_rent: boolean;
}

const MyProperties = () => {
  const navigate = useNavigate();
  const { user, session } = useAuth();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [propertyToDelete, setPropertyToDelete] = useState<Property | null>(null);
  const [deleting, setDeleting] = useState(false);
  
  useEffect(() => {
    // Redirect to login if not authenticated
    if (!session) {
      navigate('/auth');
      return;
    }
    
    fetchProperties();
  }, [session, navigate, user?.id]);
  
  const fetchProperties = async () => {
    if (!user) return;
    
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('timeshare_properties')
        .select('*')
        .eq('seller_id', user.id)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      setProperties(data || []);
    } catch (error: any) {
      console.error('Error fetching properties:', error);
      toast.error(`Failed to load properties: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  
  const handleDeleteProperty = (property: Property) => {
    setPropertyToDelete(property);
    setDeleteDialogOpen(true);
  };
  
  const confirmDelete = async () => {
    if (!propertyToDelete) return;
    
    try {
      setDeleting(true);
      
      const { error } = await supabase
        .from('timeshare_properties')
        .delete()
        .eq('id', propertyToDelete.id);
      
      if (error) throw error;
      
      // Remove from UI
      setProperties(properties.filter(p => p.id !== propertyToDelete.id));
      toast.success('Property listing deleted successfully');
      setDeleteDialogOpen(false);
    } catch (error: any) {
      console.error('Error deleting property:', error);
      toast.error(`Failed to delete property: ${error.message}`);
    } finally {
      setDeleting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 pt-28 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">My Properties</h1>
            
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/property-listing">
                <Plus className="mr-2 h-4 w-4" />
                List New Property
              </Link>
            </Button>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-60">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
          ) : properties.length === 0 ? (
            <Card className="bg-white text-center p-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <AlertCircle className="h-12 w-12 text-blue-600" />
                <h2 className="text-xl font-semibold">No Properties Listed</h2>
                <p className="text-gray-600 max-w-md">
                  You haven't listed any properties yet. Get started by creating your first listing.
                </p>
                <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700">
                  <Link to="/property-listing">
                    <Plus className="mr-2 h-4 w-4" />
                    List Your First Property
                  </Link>
                </Button>
              </div>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <Card key={property.id} className="overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    {property.image_url ? (
                      <img 
                        src={property.image_url} 
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 flex items-center justify-center w-full h-full">
                        <span className="text-gray-500">No image</span>
                      </div>
                    )}
                    
                    <div className="absolute top-2 right-2 flex gap-1">
                      {property.for_sale && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                          For Sale
                        </span>
                      )}
                      {property.for_rent && (
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                          For Rent
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="pt-4">
                    <h3 className="text-lg font-bold mb-1 line-clamp-1">{property.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{property.location}</p>
                    
                    <div className="flex items-baseline gap-3 mb-2">
                      {property.for_sale && (
                        <p className="text-lg font-medium">${property.price.toLocaleString()}</p>
                      )}
                      {property.for_rent && property.rental_price && (
                        <p className="text-sm text-gray-700">
                          ${property.rental_price.toLocaleString()}/week
                        </p>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600">
                      {property.bedrooms} bd • {property.bathrooms} ba
                    </p>
                  </CardContent>
                  
                  <CardFooter className="pt-0 flex justify-between">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/listing/${property.id}`}>
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Link>
                      </Button>
                      
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/edit-property/${property.id}`}>
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Link>
                      </Button>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-red-600 border-red-200 hover:bg-red-50"
                      onClick={() => handleDeleteProperty(property)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Property Listing</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this property listing? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          
          {propertyToDelete && (
            <div className="py-4">
              <p className="font-medium">{propertyToDelete.title}</p>
              <p className="text-sm text-gray-600">{propertyToDelete.location}</p>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)} disabled={deleting}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={confirmDelete}
              disabled={deleting}
            >
              {deleting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                'Delete Listing'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default MyProperties;
