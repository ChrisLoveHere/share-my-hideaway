
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Home, Settings, Building, Tag, PlusCircle, 
  BarChart3, TrendingUp, User, PieChart
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset
} from "@/components/ui/sidebar";

import { Button } from '@/components/ui/button';
import AdminDashboard from '@/components/admin/AdminDashboard';
import AdminUsers from '@/components/admin/AdminUsers';
import AdminProperties from '@/components/admin/AdminProperties';
import AdminSettings from '@/components/admin/AdminSettings';

type AdminSection = 'dashboard' | 'users' | 'properties' | 'settings';

const Admin = () => {
  const { user, loading, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<AdminSection>('dashboard');

  useEffect(() => {
    // Redirect if user is not admin
    if (!loading && !isAdmin) {
      toast.error('You need admin permissions to access this area');
      navigate('/');
    }
  }, [isAdmin, loading, navigate]);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return null; // Don't render anything while redirecting
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarHeader className="px-6 py-4">
            <div className="flex items-center">
              <div className="font-bold text-xl">Admin Panel</div>
              <SidebarTrigger className="ml-auto" />
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeSection === 'dashboard'} 
                  onClick={() => setActiveSection('dashboard')}
                >
                  <PieChart className="h-4 w-4" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeSection === 'users'} 
                  onClick={() => setActiveSection('users')}
                >
                  <Users className="h-4 w-4" />
                  <span>Users</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeSection === 'properties'} 
                  onClick={() => setActiveSection('properties')}
                >
                  <Building className="h-4 w-4" />
                  <span>Properties</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeSection === 'settings'} 
                  onClick={() => setActiveSection('settings')}
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          
          <SidebarFooter className="p-4 border-t">
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={() => navigate('/')}
            >
              Back to Site
            </Button>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset className="p-6">
          {activeSection === 'dashboard' && <AdminDashboard />}
          {activeSection === 'users' && <AdminUsers />}
          {activeSection === 'properties' && <AdminProperties />}
          {activeSection === 'settings' && <AdminSettings />}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Admin;
