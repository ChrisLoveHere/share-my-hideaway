
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { 
  Table, TableBody, TableCell, TableHead, 
  TableHeader, TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog, DialogContent, DialogDescription, 
  DialogFooter, DialogHeader, DialogTitle, DialogTrigger 
} from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Edit, Trash2, UserPlus, Search, Shield } from 'lucide-react';

type Profile = {
  id: string;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  created_at: string;
  phone: string | null;
  is_admin?: boolean;
};

const AdminUsers = () => {
  const [users, setUsers] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<Profile | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<'edit' | 'delete' | 'makeAdmin'>('edit');
  
  // Form state for editing user
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  });

  const fetchUsers = async () => {
    try {
      setLoading(true);
      
      // First get all profiles
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (profilesError) throw profilesError;
      
      // Then get all admin roles
      const { data: admins, error: adminsError } = await supabase
        .from('user_roles')
        .select('user_id')
        .eq('role', 'admin');
      
      if (adminsError) throw adminsError;
      
      // Map admin status to profiles
      const adminIds = admins?.map(admin => admin.user_id) || [];
      const usersWithRoles = profiles?.map(profile => ({
        ...profile,
        is_admin: adminIds.includes(profile.id)
      })) || [];
      
      setUsers(usersWithRoles);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (user: Profile) => {
    setSelectedUser(user);
    setFormData({
      first_name: user.first_name || '',
      last_name: user.last_name || '',
      email: user.email || '',
      phone: user.phone || '',
    });
    setDialogMode('edit');
    setDialogOpen(true);
  };

  const handleDelete = (user: Profile) => {
    setSelectedUser(user);
    setDialogMode('delete');
    setDialogOpen(true);
  };

  const handleMakeAdmin = (user: Profile) => {
    setSelectedUser(user);
    setDialogMode('makeAdmin');
    setDialogOpen(true);
  };

  const confirmEdit = async () => {
    if (!selectedUser) return;
    
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          first_name: formData.first_name,
          last_name: formData.last_name,
          phone: formData.phone,
        })
        .eq('id', selectedUser.id);
      
      if (error) throw error;
      
      toast.success('User updated successfully');
      setDialogOpen(false);
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Failed to update user');
    }
  };

  const confirmDelete = async () => {
    if (!selectedUser) return;
    
    try {
      // This will cascade to profiles due to our foreign key
      const { error } = await supabase.auth.admin.deleteUser(
        selectedUser.id
      );
      
      if (error) throw error;
      
      toast.success('User deleted successfully');
      setDialogOpen(false);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Failed to delete user');
    }
  };

  const confirmMakeAdmin = async () => {
    if (!selectedUser) return;
    
    try {
      // First check if already admin
      if (selectedUser.is_admin) {
        // Remove admin role
        const { error } = await supabase
          .from('user_roles')
          .delete()
          .eq('user_id', selectedUser.id)
          .eq('role', 'admin');
        
        if (error) throw error;
        
        toast.success('Admin role removed successfully');
      } else {
        // Add admin role
        const { error } = await supabase
          .from('user_roles')
          .insert({ user_id: selectedUser.id, role: 'admin' });
        
        if (error) throw error;
        
        toast.success('Admin role granted successfully');
      }
      
      setDialogOpen(false);
      fetchUsers();
    } catch (error) {
      console.error('Error updating admin status:', error);
      toast.error('Failed to update admin status');
    }
  };

  const filteredUsers = users.filter((user) => {
    const searchString = searchTerm.toLowerCase();
    return (
      (user.email && user.email.toLowerCase().includes(searchString)) ||
      (user.first_name && user.first_name.toLowerCase().includes(searchString)) ||
      (user.last_name && user.last_name.toLowerCase().includes(searchString))
    );
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold">Users Management</h1>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
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
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    No users found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">
                      {user.first_name || user.last_name 
                        ? `${user.first_name || ''} ${user.last_name || ''}`.trim() 
                        : 'N/A'}
                    </TableCell>
                    <TableCell>{user.email || 'N/A'}</TableCell>
                    <TableCell>{user.phone || 'N/A'}</TableCell>
                    <TableCell>
                      {new Date(user.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {user.is_admin ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Admin
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          User
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          onClick={() => handleEdit(user)}
                        >
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          onClick={() => handleMakeAdmin(user)}
                        >
                          <Shield className="h-4 w-4" />
                          <span className="sr-only">
                            {user.is_admin ? 'Remove Admin' : 'Make Admin'}
                          </span>
                        </Button>
                        
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          onClick={() => handleDelete(user)}
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

      {/* Edit User Dialog */}
      <Dialog open={dialogOpen && dialogMode === 'edit'} onOpenChange={(open) => !open && setDialogOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Make changes to this user's profile information.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="first_name">First Name</label>
                <Input
                  id="first_name"
                  value={formData.first_name}
                  onChange={(e) => setFormData({...formData, first_name: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="last_name">Last Name</label>
                <Input
                  id="last_name"
                  value={formData.last_name}
                  onChange={(e) => setFormData({...formData, last_name: e.target.value})}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                value={formData.email}
                disabled
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone">Phone</label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
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

      {/* Delete User Dialog */}
      <Dialog open={dialogOpen && dialogMode === 'delete'} onOpenChange={(open) => !open && setDialogOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete User</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this user? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <p>
              User: <strong>{selectedUser?.email}</strong>
            </p>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete User
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Make Admin Dialog */}
      <Dialog open={dialogOpen && dialogMode === 'makeAdmin'} onOpenChange={(open) => !open && setDialogOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedUser?.is_admin ? 'Remove Admin Role' : 'Grant Admin Role'}
            </DialogTitle>
            <DialogDescription>
              {selectedUser?.is_admin 
                ? 'Are you sure you want to remove the admin role from this user?' 
                : 'Are you sure you want to grant admin privileges to this user?'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <p>
              User: <strong>{selectedUser?.email}</strong>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {selectedUser?.is_admin 
                ? 'This user will no longer have administrator access to the dashboard and system controls.' 
                : 'This will give the user full access to the admin dashboard and system controls.'}
            </p>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              variant={selectedUser?.is_admin ? "destructive" : "default"}
              onClick={confirmMakeAdmin}
            >
              {selectedUser?.is_admin ? 'Remove Admin Role' : 'Grant Admin Role'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminUsers;
