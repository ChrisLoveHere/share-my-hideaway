
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Users, Home, ShoppingCart, TrendingUp, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

type StatCard = {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    newUsersThisMonth: 0,
    totalProperties: 0,
    propertiesForSale: 0,
    propertiesForRent: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);

        // Get total users count
        const { count: totalUsers, error: usersError } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true });

        if (usersError) throw usersError;

        // Get new users this month
        const startOfMonth = new Date();
        startOfMonth.setDate(1);
        startOfMonth.setHours(0, 0, 0, 0);

        const { count: newUsersThisMonth, error: newUsersError } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true })
          .gte('created_at', startOfMonth.toISOString());

        if (newUsersError) throw newUsersError;

        // Get total properties
        const { count: totalProperties, error: propertiesError } = await supabase
          .from('timeshare_properties')
          .select('*', { count: 'exact', head: true });

        if (propertiesError) throw propertiesError;

        // Get properties for sale (no rental price)
        const { count: propertiesForSale, error: saleError } = await supabase
          .from('timeshare_properties')
          .select('*', { count: 'exact', head: true })
          .is('rental_price', null);

        if (saleError) throw saleError;

        // Get properties for rent (with rental price)
        const { count: propertiesForRent, error: rentError } = await supabase
          .from('timeshare_properties')
          .select('*', { count: 'exact', head: true })
          .not('rental_price', 'is', null);

        if (rentError) throw rentError;

        setStats({
          totalUsers: totalUsers || 0,
          newUsersThisMonth: newUsersThisMonth || 0,
          totalProperties: totalProperties || 0,
          propertiesForSale: propertiesForSale || 0,
          propertiesForRent: propertiesForRent || 0,
        });
      } catch (error) {
        console.error('Error fetching admin statistics:', error);
        toast.error('Failed to load dashboard statistics');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards: StatCard[] = [
    {
      title: 'Total Users',
      value: stats.totalUsers,
      description: 'Registered users',
      icon: <Users className="h-5 w-5" />,
      color: 'bg-blue-500',
    },
    {
      title: 'New Users',
      value: stats.newUsersThisMonth,
      description: 'This month',
      icon: <TrendingUp className="h-5 w-5" />,
      color: 'bg-green-500',
    },
    {
      title: 'Total Properties',
      value: stats.totalProperties,
      description: 'Listed properties',
      icon: <Home className="h-5 w-5" />,
      color: 'bg-purple-500',
    },
    {
      title: 'For Sale',
      value: stats.propertiesForSale,
      description: 'Properties for sale',
      icon: <ShoppingCart className="h-5 w-5" />,
      color: 'bg-amber-500',
    },
    {
      title: 'For Rent',
      value: stats.propertiesForRent,
      description: 'Properties for rent',
      icon: <Home className="h-5 w-5" />,
      color: 'bg-indigo-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      {loading ? (
        <div className="grid h-64 place-items-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      ) : (
        <>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {statCards.map((card, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                  <div className={`${card.color} text-white p-2 rounded-md`}>
                    {card.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{card.value}</div>
                  <p className="text-xs text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>User-to-property ratio:</span>
                    <span className="font-medium">
                      {stats.totalUsers > 0 
                        ? (stats.totalProperties / stats.totalUsers).toFixed(2) 
                        : 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sale to rental ratio:</span>
                    <span className="font-medium">
                      {stats.propertiesForRent > 0
                        ? (stats.propertiesForSale / stats.propertiesForRent).toFixed(2)
                        : 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>New user growth:</span>
                    <span className="font-medium">
                      {stats.totalUsers > 0
                        ? `${((stats.newUsersThisMonth / stats.totalUsers) * 100).toFixed(1)}%`
                        : 'N/A'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent System Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-32 text-muted-foreground">
                  <div className="flex flex-col items-center gap-2">
                    <AlertCircle className="h-8 w-8" />
                    <p>Activity log will be available soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
