import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { AuthProvider } from './hooks/useAuth';
import { ThemeProvider } from 'next-themes';
import Index from './pages/Index';
import Auth from './pages/Auth';
import Search from './pages/Search';
import Location from './pages/Location';
import Resort from './pages/Resort';
import Listing from './pages/Listing';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import PropertyListing from './pages/PropertyListing';
import MyProperties from './pages/MyProperties';
import EditProperty from './pages/EditProperty';
import CondosPlayaDelCarmen from './pages/CondosPlayaDelCarmen';
import PlacesToEatPlayaDelCarmen from './pages/PlacesToEatPlayaDelCarmen';
import ThingsToDoPlayaDelCarmen from './pages/ThingsToDoPlayaDelCarmen';
import WhereToStayPlayacar from './pages/WhereToStayPlayacar';
import PlayaStays from './pages/PlayaStays';
import TimesharesNearPlayaDelCarmen from './pages/TimesharesNearPlayaDelCarmen';
import TimesharesNearPuertoMorelos from './pages/TimesharesNearPuertoMorelos';
import TimesharesNearTulum from './pages/TimesharesNearTulum';
import HiringAPropertyManager from './pages/HiringAPropertyManager';
import PropertyManagerChrisLove from './pages/PropertyManagerChrisLove';

import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/search" element={<Search />} />
              <Route path="/location/:slug" element={<Location />} />
              <Route path="/resort/:id" element={<Resort />} />
              <Route path="/listing/:id" element={<Listing />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/property-listing" element={<PropertyListing />} />
              <Route path="/my-properties" element={<MyProperties />} />
              <Route path="/edit-property/:id" element={<EditProperty />} />
              <Route path="/admin/*" element={<Admin />} />
              <Route path="/condos-playa-del-carmen" element={<CondosPlayaDelCarmen />} />
              <Route path="/places-to-eat-playa-del-carmen" element={<PlacesToEatPlayaDelCarmen />} />
              <Route path="/things-to-do-playa-del-carmen" element={<ThingsToDoPlayaDelCarmen />} />
              <Route path="/where-to-stay-playacar" element={<WhereToStayPlayacar />} />
              <Route path="/playastays" element={<PlayaStays />} />
              <Route path="/timeshares-near-playa-del-carmen" element={<TimesharesNearPlayaDelCarmen />} />
              <Route path="/timeshares-near-puerto-morelos" element={<TimesharesNearPuertoMorelos />} />
              <Route path="/timeshares-near-tulum" element={<TimesharesNearTulum />} />
              <Route path="/hiring-a-property-manager" element={<HiringAPropertyManager />} />
              <Route path="/property-manager/chris-love" element={<PropertyManagerChrisLove />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          <Toaster position="top-right" />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
