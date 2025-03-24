
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { 
  Table, TableBody, TableCell, TableHead, 
  TableHeader, TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog, DialogContent, DialogDescription, 
  DialogFooter, DialogHeader, DialogTitle
} from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Edit, Trash2, Search, Star, DollarSign } from 'lucide-react';

type Property = {
  id: string;
  title: string;
  price: number;
  rental_price: number | null;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sleeps: number;
  usage: string;
  featured: boolean;
  created_at: string;
  seller_id: string | null;
  seller_email?: string;
};

const AdminProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<'edit' | 'delete' | 'feature'>('edit');
  
  // Form state for editing property
  const [formData, setFormData] = useState({
    title: '',
    price: 0,
    rental_price: 0,
    location: '',
    bedrooms: 0,
    bathrooms: 0,
    sleeps: 0,
    usage: '',
    featured: false,
  });

  const fetchProperties = async () => {
    try {
      setLoading(true);
      
      // Get properties with seller emails
      const { data, error } = await supabase
        .from('timeshare_properties')
        .select(`
          *,
          profiles(email)
        `)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      const propertiesWithSellerEmails = data.map((property: any) => ({
        ...property,
        seller_email: property.profiles?.email || 'N/A'
      }));
      
      setProperties(propertiesWithSellerEmails);
    } catch (error) {
      console.error('Error fetching properties:', error);
      toast.error('Failed to load properties');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleEdit = (property: Property) => {
    setSelectedProperty(property);
    setFormData({
      title: property.title,
      price: property.price,
      rental_price: property.rental_price || 0,
      location: property.location,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      sleeps: property.sleeps,
      usage: property.usage,
      featured: property.featured || false,
    });
    setDialogMode('edit');
    setDialogOpen(true);
  };

  const handleDelete = (property: Property) => {
    setSelectedProperty(property);
    setDialogMode('delete');
    setDialogOpen(true);
  };

  const handleToggleFeature = (property: Property) => {
    setSelectedProperty(property);
    setDialogMode('feature');
    setDialogOpen(true);
  };

  const confirmEdit = async () => {
    if (!selectedProperty) return;
    
    try {
      const { error } = await supabase
        .from('timeshare_properties')
        .update({
          title: formData.title,
          price: formData.price,
          rental_price: formData.rental_price || null,
          location: formData.location,
          bedrooms: formData.bedrooms,
          bathrooms: formData.bathrooms,
          sleeps: formData.sleeps,
          usage: formData.usage,
          featured: formData.featured,
        })
        .eq('id', selectedProperty.id);
      
      if (error) throw error;
      
      toast.success('Property updated successfully');
      setDialogOpen(false);
      fetchProperties();
    } catch (error) {
      console.error('Error updating property:', error);
      toast.error('Failed to update property');
    }
  };

  const confirmDelete = async () => {
    if (!selectedProperty) return;
    
    try {
      const { error } = await supabase
        .from('timeshare_properties')
        .delete()
        .eq('id', selectedProperty.id);
      
      if (error) throw error;
      
      toast.success('Property deleted successfully');
      setDialogOpen(false);
      fetchProperties();
    } catch (error) {
      console.error('Error deleting property:', error);
      toast.error('Failed to delete property');
    }
  };

  const confirmToggleFeature = async () => {
    if (!selectedProperty) return;
    
    try {
      const { error } = await supabase
        .from('timeshare_properties')
        .update({
          featured: !selectedProperty.featured,
        })
        .eq('id', selectedProperty.id);
      
      if (error) throw error;
      
      toast.success(
        selectedProperty.featured 
          ? 'Property removed from featured listings' 
          : 'Property added to featured listings'
      );
      setDialogOpen(false);
      fetchProperties();
    } catch (error) {
      console.error('Error updating featured status:', error);
      toast.error('Failed to update featured status');
    }
  };

  const filteredProperties = properties.filter((property) => {
    const searchString = searchTerm.toLowerCase();
    return (
      property.title.toLowerCase().includes(searchString) ||
      property.location.toLowerCase().includes(searchString) ||
      (property.seller_email && property.seller_email.toLowerCase().includes(searchString))
    );
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold">Properties Management</h1>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search properties..."
              className="pl-8 w-full sm:w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid h-64 place-items-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      ) : (
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Seller</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProperties.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="h-24 text-center">
                    No properties found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredProperties.map((property) => (
                  <TableRow key={property.id}>
                    <TableCell className="font-medium">
                      {property.title}
                    </TableCell>
                    <TableCell>{property.location}</TableCell>
                    <TableCell>
                      {property.rental_price ? (
                        <div>
                          <div>${property.rental_price.toLocaleString()}/week</div>
                          <div className="text-xs text-muted-foreground">
                            ${property.price.toLocaleString()} to buy
                          </div>
                        </div>
                      ) : (
                        <div>${property.price.toLocaleString()}</div>
                      )}
                    </TableCell>
                    <TableCell>
                      {property.rental_price ? (
                        <Badge variant="outline" className="bg-blue-50">Rental</Badge>
                      ) : (
                        <Badge variant="outline" className="bg-green-50">Sale</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      {property.bedrooms} bd, {property.bathrooms} ba, sleeps {property.sleeps}
                    </TableCell>
                    <TableCell>{property.seller_email}</TableCell>
                    <TableCell>
                      {property.featured ? (
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                          Featured
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-muted-foreground">
                          Standard
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          onClick={() => handleEdit(property)}
                        >
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          onClick={() => handleToggleFeature(property)}
                        >
                          <Star className={`h-4 w-4 ${property.featured ? 'fill-amber-500 text-amber-500' : ''}`} />
                          <span className="sr-only">
                            {property.featured ? 'Unfeature' : 'Feature'}
                          </span>
                        </Button>
                        
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          onClick={() => handleDelete(property)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Edit Property Dialog */}
      <Dialog open={dialogOpen && dialogMode === 'edit'} onOpenChange={(open) => !open && setDialogOpen(false)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Property</DialogTitle>
            <DialogDescription>
              Make changes to this property's information.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <label htmlFor="title">Title</label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="price">Sale Price ($)</label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="rental_price">Rental Price ($/week)</label>
                <Input
                  id="rental_price"
                  type="number"
                  value={formData.rental_price}
                  onChange={(e) => setFormData({...formData, rental_price: Number(e.target.value)})}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="location">Location</label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label htmlFor="bedrooms">Bedrooms</label>
                <Input
                  id="bedrooms"
                  type="number"
                  value={formData.bedrooms}
                  onChange={(e) => setFormData({...formData, bedrooms: Number(e.target.value)})}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="bathrooms">Bathrooms</label>
                <Input
                  id="bathrooms"
                  type="number"
                  value={formData.bathrooms}
                  onChange={(e) => setFormData({...formData, bathrooms: Number(e.target.value)})}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="sleeps">Sleeps</label>
                <Input
                  id="sleeps"
                  type="number"
                  value={formData.sleeps}
                  onChange={(e) => setFormData({...formData, sleeps: Number(e.target.value)})}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="usage">Usage Type</label>
              <Input
                id="usage"
                value={formData.usage}
                onChange={(e) => setFormData({...formData, usage: e.target.value})}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="featured">Featured Listing</label>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirmEdit}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Property Dialog */}
      <Dialog open={dialogOpen && dialogMode === 'delete'} onOpenChange={(open) => !open && setDialogOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Property</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this property? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <p>
              Property: <strong>{selectedProperty?.title}</strong>
            </p>
            <p>
              Location: <strong>{selectedProperty?.location}</strong>
            </p>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete Property
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Toggle Feature Dialog */}
      <Dialog open={dialogOpen && dialogMode === 'feature'} onOpenChange={(open) => !open && setDialogOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedProperty?.featured 
                ? 'Remove from Featured Listings' 
                : 'Add to Featured Listings'}
            </DialogTitle>
            <DialogDescription>
              {selectedProperty?.featured 
                ? 'Are you sure you want to remove this property from featured listings?' 
                : 'Are you sure you want to add this property to featured listings?'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <p>
              Property: <strong>{selectedProperty?.title}</strong>
            </p>
            <p>
              Location: <strong>{selectedProperty?.location}</strong>
            </p>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirmToggleFeature}>
              {selectedProperty?.featured 
                ? 'Remove from Featured' 
                : 'Add to Featured'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminProperties;
