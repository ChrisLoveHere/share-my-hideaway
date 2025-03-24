
import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Shield, Mail, UserPlus, AlertTriangle } from 'lucide-react';

const AdminSettings = () => {
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleMakeAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAdminEmail) return;
    
    try {
      setSubmitting(true);
      
      // Call the stored procedure to make user an admin
      // Use a type assertion for the rpc call since 'make_admin' isn't in the TypeScript definitions
      const { error } = await (supabase.rpc as any)('make_admin', {
        email_address: newAdminEmail
      });
      
      if (error) throw error;
      
      toast.success(`${newAdminEmail} has been granted admin privileges`);
      setNewAdminEmail('');
    } catch (error: any) {
      console.error('Error adding admin:', error);
      
      if (error.message.includes('User with email') && error.message.includes('not found')) {
        toast.error('User not found. They must register first before being granted admin access.');
      } else {
        toast.error(`Failed to add admin: ${error.message}`);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Settings</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" /> Admin Access
            </CardTitle>
            <CardDescription>
              Grant admin privileges to existing users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleMakeAdmin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="admin-email">User Email</label>
                <Input
                  id="admin-email"
                  type="email"
                  placeholder="user@example.com"
                  value={newAdminEmail}
                  onChange={(e) => setNewAdminEmail(e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  The user must already be registered in the system
                </p>
              </div>
              
              <Button type="submit" disabled={submitting}>
                {submitting ? 'Adding...' : 'Grant Admin Access'}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" /> Danger Zone
            </CardTitle>
            <CardDescription>
              Advanced administrative actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-md border border-destructive/10 bg-destructive/5 p-4">
                <div className="flex items-center gap-2 font-medium text-destructive mb-1">
                  <AlertTriangle className="h-4 w-4" />
                  <h4>System-Wide Operations</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  These actions affect the entire site and should be used with caution.
                </p>
                <div className="mt-4 space-y-2">
                  <Button variant="outline" className="w-full border-destructive text-destructive">
                    Clear Cache
                  </Button>
                  <Button variant="outline" className="w-full border-destructive text-destructive">
                    Rebuild Search Index
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" /> Email Settings
            </CardTitle>
            <CardDescription>
              Configure system email notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="email-new-users"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="email-new-users">Email notifications for new user registrations</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="email-new-properties"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="email-new-properties">Email notifications for new property listings</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="email-daily-summary"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="email-daily-summary">Daily summary reports</label>
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled>Save Email Preferences</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserPlus className="h-5 w-5" /> Invite User
            </CardTitle>
            <CardDescription>
              Send invitation emails to new users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="invite-email">Email Address</label>
                <Input
                  id="invite-email"
                  type="email"
                  placeholder="newuser@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="invite-role">Role</label>
                <select 
                  id="invite-role"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="user">Regular User</option>
                  <option value="admin">Administrator</option>
                </select>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled>Send Invitation</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AdminSettings;
