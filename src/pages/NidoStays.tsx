import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, ExternalLink, Sparkles, ShieldCheck, KeyRound, MapPin, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NidoStays = () => {
  return (
    <>
      <Navbar />

      <section
        className="relative h-[60vh] min-h-[420px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="relative z-10 flex h-full items-end">
          <div className="container mx-auto px-4 pb-12">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
              Partner Property Manager
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Nido Stays: heritage homes & city pieds-à-terre
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Boutique property management for owners in Mexico's most distinctive heritage town
              and its busiest capital — Valladolid and Mexico City.
            </p>
          </div>
        </div>
      </section>

      <article className="container mx-auto max-w-3xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            Nido Stays manages a deliberately small portfolio of owner-direct rentals in two of
            the most particular property markets in Mexico — the colonial heritage town of
            Valladolid and the dense, design-forward neighborhoods of Mexico City. The two
            markets look nothing alike, but they share a kind of owner: someone who bought a
            beautiful property that needs the kind of careful, locally-staffed management you
            cannot get from a 1-800 number in another country.
          </p>

          <p>
            The company was built on a simple premise — a guest who is paying $300 a night for a
            restored Yucatecan casona or a Roma Norte loft deserves the kind of stay that lives
            up to the photos, and the owner deserves a clean monthly statement showing exactly
            where every peso went. Nido handles every part of the guest experience locally with
            on-the-ground staff in each city.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">What "locally managed" means here</h2>
          <p>
            It means that the same team that lists your property is also the team that meets the
            guest at the door. It means that when the agua caliente boiler dies at 11pm — and in
            Mexico City it will, eventually, die at 11pm — a Nido technician is at the door
            inside an hour. It means recommendations to guests come from people who actually live
            in Roma Norte or Centro Valladolid, not from a chatbot summarizing Google reviews.
          </p>
          <p>
            Nido's model deliberately runs counter to the dominant pattern in Mexican vacation
            rentals, which is either a vast remote agency (efficient, but generic) or an
            individual owner-operator (personal, but unevenly reliable). The local-specialist
            middle path is rare, and it is where the guest experience consistently lands.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100">
            <KeyRound className="h-8 w-8 text-blue-600" />
            <h3 className="mt-3 text-lg font-bold text-gray-900">In-person check-in</h3>
            <p className="mt-2 text-sm text-gray-600">
              A real person — usually a city-specific manager — meets every guest at the door and
              walks them through the property.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100">
            <ShieldCheck className="h-8 w-8 text-emerald-600" />
            <h3 className="mt-3 text-lg font-bold text-gray-900">Same-day maintenance</h3>
            <p className="mt-2 text-sm text-gray-600">
              Dedicated maintenance leads in both cities. Most issues get resolved the same day
              they're reported.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100">
            <Sparkles className="h-8 w-8 text-amber-600" />
            <h3 className="mt-3 text-lg font-bold text-gray-900">Real concierge</h3>
            <p className="mt-2 text-sm text-gray-600">
              Restaurant bookings, cenote drivers in Yucatán, lucha libre tickets in CDMX —
              real recommendations from people who have actually been there.
            </p>
          </div>
        </div>

        <div className="prose prose-lg mt-12 max-w-none">
          <h2 className="text-3xl font-bold text-gray-900">The two markets, briefly</h2>
          <p>
            <strong>Valladolid</strong> is a colonial Pueblo Mágico of around 50,000 people,
            seventy minutes from the Cancún airport and a short drive from Chichén Itzá and the
            best cenotes in the Yucatán. The property market is heavily weighted toward restored
            colonial townhomes — high ceilings, talavera tile, pencil-thin courtyards — and the
            average stay is short (two or three nights, on the way to or from somewhere else).
            Cleaning logistics matter more than almost anything else.
          </p>
          <p>
            <strong>Mexico City</strong> is the opposite in almost every way — 22 million people,
            a dense and mature short-term rental market, and stays that skew longer (often a week
            or two, with a meaningful chunk of digital-nomad month-bookers). Inventory is
            concentrated in Roma, Condesa, Polanco, Juárez, and Coyoacán. The competition is
            fierce, and listing quality matters far more than it does in heritage markets.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">For owners thinking about renting</h2>
          <p>
            Nido is selective about what it takes on. The company maintains a small portfolio on
            purpose — small enough that the same team can know every property by name, and small
            enough that no owner gets buried in a SKU sheet. If you own a heritage townhouse in
            Valladolid or a design-forward apartment in any of the central CDMX neighborhoods,
            start a conversation through the contact form at the Nido site.
          </p>
          <p>
            Not sure how to evaluate a property manager? Read our owner's guide to{' '}
            <Link
              to="/hiring-a-property-manager"
              className="font-semibold text-blue-600 hover:underline"
            >
              hiring a property manager
            </Link>{' '}
            before any first call — the same questions apply to Nido as to anyone else.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Coverage area</h2>
          <p>
            Nido currently manages properties in two specific markets. To browse the wider
            property manager landscape in each, see our directory pages.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link
            to="/property-managers-valladolid"
            className="group rounded-2xl bg-gradient-to-br from-amber-600 to-orange-500 p-6 text-white shadow-lg transition hover:shadow-xl"
          >
            <Building2 className="h-7 w-7" />
            <div className="mt-3 text-xl font-bold">Property Managers in Valladolid</div>
            <div className="mt-1 flex items-center gap-1 text-sm opacity-90">
              View directory <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>
          <Link
            to="/property-managers-mexico-city"
            className="group rounded-2xl bg-gradient-to-br from-rose-600 to-pink-500 p-6 text-white shadow-lg transition hover:shadow-xl"
          >
            <Building2 className="h-7 w-7" />
            <div className="mt-3 text-xl font-bold">Property Managers in Mexico City</div>
            <div className="mt-1 flex items-center gap-1 text-sm opacity-90">
              View directory <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>
        </div>

        <a
          href="https://www.nidostays.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex items-center justify-between rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 p-8 text-white shadow-lg transition hover:from-emerald-700 hover:to-teal-600"
        >
          <div className="flex items-center gap-4">
            <Globe className="h-10 w-10" />
            <div>
              <div className="text-sm uppercase tracking-wider opacity-80">Visit the site</div>
              <div className="text-2xl font-bold">www.nidostays.com</div>
            </div>
          </div>
          <ArrowRight className="h-8 w-8" />
        </a>

        <div className="mt-6 text-center text-sm text-gray-500">
          Looking for a manager in the Riviera Maya instead?{' '}
          <Link to="/playastays" className="font-semibold text-blue-600 hover:underline">
            Visit PlayaStays
          </Link>
          .
        </div>
      </article>

      <Footer />
    </>
  );
};

export default NidoStays;
