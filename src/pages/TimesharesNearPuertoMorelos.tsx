import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star, Waves, TreePalm, Building2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const timeshares = [
  {
    name: 'Now Jade Riviera Cancun',
    brand: 'AMR Collection (Hyatt)',
    location: 'Puerto Morelos beachfront',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'A modern all-inclusive on a long, calm beach right at the edge of Puerto Morelos. Family-friendly, with one of the better kids\' clubs in the area and easy reef-snorkeling straight off the sand.',
  },
  {
    name: 'Dreams Riviera Cancun Resort & Spa',
    brand: 'AMR Collection',
    location: '5 min north of Puerto Morelos',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Another AMR property catering to the Unlimited Vacation Club crowd. Multiple pools, swim-up suites, and a steady appearance in the major exchange networks.',
  },
  {
    name: 'Hyatt Ziva / Zilara Riviera Cancun',
    brand: 'Hyatt',
    location: 'Puerto Morelos south',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'A dual-property campus — Ziva is family-oriented, Zilara is adults-only — sharing a long curve of beach. Newer construction, modern interiors, and excellent reef access just offshore.',
  },
  {
    name: 'Secrets Maroma Beach Riviera Cancun',
    brand: 'AMR Collection',
    location: 'Maroma Beach (just south)',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Sits on Maroma Beach, regularly ranked among the top ten beaches in the world. Adults-only, deeply quiet, and one of the most-requested exchange destinations in the region.',
  },
  {
    name: 'El Dorado Royale',
    brand: 'Karisma Hotels & Resorts',
    location: '10 min south of Puerto Morelos',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'A sprawling adults-only Karisma property with a culinary program ("Gourmet Inclusive") well above the typical all-inclusive standard. Excellent for couples and food-focused travelers.',
  },
  {
    name: 'Azul Beach Resort Riviera Cancun',
    brand: 'Karisma',
    location: '10 min south of Puerto Morelos',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Karisma\'s family-friendly sister to El Dorado — same culinary program, but with full kid\'s programming, water park, and a beach designed for sandcastle building.',
  },
];

const TimesharesNearPuertoMorelos = () => {
  return (
    <>
      <Navbar />

      <section
        className="relative h-[60vh] min-h-[420px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="relative z-10 flex h-full items-end">
          <div className="container mx-auto px-4 pb-12">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
              Timeshare Guide
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Timeshares Near Puerto Morelos
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              The quieter half of the Riviera Maya — closer to Cancun airport, calmer beaches, and
              some of the best reef-snorkeling on the entire coast.
            </p>
          </div>
        </div>
      </section>

      <article className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            Puerto Morelos sits exactly halfway between Cancún and Playa del Carmen, which is a
            geography that does a lot of work. You're twenty minutes from the airport, twenty
            minutes from Playa, twenty minutes from Cancún's nightlife if you really want it —
            and yet the town itself is small, fish-village-quiet, and protected by a federally
            designated reef park that runs the length of the bay. The result is a corridor of
            beachfront resorts that get used heavily by repeat exchangers but are largely unknown
            to first-time Mexico travelers.
          </p>

          <p>
            Most of the resorts listed here are technically classified under "Riviera Cancún" or
            "Riviera Maya" by their parent brands. Geographically, they all sit between Cancún
            airport and the southern Puerto Morelos line. If you want to be closer to the
            walkable old town and 5th Avenue energy, see{' '}
            <Link
              to="/timeshares-near-playa-del-carmen"
              className="font-semibold text-blue-600 hover:underline"
            >
              Timeshares Near Playa del Carmen
            </Link>
            . For the southern jungle-and-ruins end of the coast, see{' '}
            <Link
              to="/timeshares-near-tulum"
              className="font-semibold text-blue-600 hover:underline"
            >
              Timeshares Near Tulum
            </Link>
            .
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Why Puerto Morelos</h2>
          <p>
            Three reasons. First, the reef — Puerto Morelos National Reef Park sits less than
            a quarter mile offshore, and the water is calmer here than anywhere else on the
            Riviera Maya. Snorkeling is excellent right from the beach at most of the resorts on
            this list. Second, the proximity to the airport — you can land at noon and be in your
            room with feet up by 1pm, which is not something you can say about the Tulum-area
            properties. Third, the calm — Puerto Morelos has resisted the kind of explosive
            growth that has reshaped Playa and Tulum. Sunset on the town pier still feels like
            sunset in a Mexican fishing village.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">The resorts</h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {timeshares.map((t) => (
            <div
              key={t.name}
              className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 transition hover:shadow-xl"
            >
              <div
                className="h-56 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${t.image})` }}
              />
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-1 text-gray-500">
                    <MapPin className="h-4 w-4" /> {t.location}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-amber-600">
                    <Star className="h-4 w-4" /> {t.rating}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t.name}</h3>
                <div className="mt-1 text-sm font-medium uppercase tracking-wide text-blue-600">
                  {t.brand}
                </div>
                <p className="mt-4 text-gray-700">{t.blurb}</p>
                <Link
                  to={`/search?q=${encodeURIComponent(t.name)}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline"
                >
                  Browse listings <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="prose prose-lg mt-12 max-w-none">
          <h2 className="text-3xl font-bold text-gray-900">The town itself</h2>
          <p>
            Puerto Morelos the town — as opposed to the resort corridor — is a single square,
            a fishing pier, a leaning lighthouse, and about a dozen restaurants. It is small
            enough to walk in twenty minutes. The seafood is excellent and a fraction of Playa
            del Carmen prices. If you stay at any of the resorts above, plan at least one
            evening to take a taxi into town for dinner. Try Le Café d'Amancia for breakfast,
            John Gray's Kitchen for dinner, and any of the fish taco stands around the square in
            between.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Renting a week here</h2>
          <p>
            Resorts in this corridor command a slight premium on the exchange market because
            airport proximity makes them an easy sell for short trips. A one-bedroom week at
            Secrets Maroma or one of the Hyatt properties typically rents for $2,000–$3,200 in
            high season — more than equivalent Playa-area weeks, but with the upside that guests
            land and arrive faster. If you own here and want to rent rather than use, a
            professional manager familiar with the AMR / Karisma / Hyatt brands is worth the
            commission — see our guide to{' '}
            <Link
              to="/hiring-a-property-manager"
              className="font-semibold text-blue-600 hover:underline"
            >
              hiring a property manager for your timeshare
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Link
            to="/timeshares-near-playa-del-carmen"
            className="group flex items-center justify-between rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white shadow-lg transition hover:from-blue-700 hover:to-cyan-600"
          >
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8" />
              <div>
                <div className="text-xs uppercase tracking-wider opacity-80">Next guide</div>
                <div className="text-lg font-bold">Timeshares Near Playa del Carmen</div>
              </div>
            </div>
            <ArrowRight className="h-6 w-6" />
          </Link>
          <Link
            to="/timeshares-near-tulum"
            className="group flex items-center justify-between rounded-2xl bg-gradient-to-r from-emerald-600 to-lime-500 p-6 text-white shadow-lg transition hover:from-emerald-700 hover:to-lime-600"
          >
            <div className="flex items-center gap-3">
              <TreePalm className="h-8 w-8" />
              <div>
                <div className="text-xs uppercase tracking-wider opacity-80">Next guide</div>
                <div className="text-lg font-bold">Timeshares Near Tulum</div>
              </div>
            </div>
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </article>

      <Footer />
    </>
  );
};

export default TimesharesNearPuertoMorelos;
