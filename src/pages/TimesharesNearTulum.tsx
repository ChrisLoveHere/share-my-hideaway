import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star, TreePalm, Building2, Waves } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const timeshares = [
  {
    name: 'Bahia Principe Grand Tulum',
    brand: 'Bahia Principe',
    location: 'Akumal (between Playa & Tulum)',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Part of the massive Bahia Principe Riviera Maya complex — five interconnected resorts sharing a jungle-and-beach campus the size of a small town. Solid mid-tier all-inclusive with strong family programming.',
  },
  {
    name: 'Dreams Tulum Resort & Spa',
    brand: 'AMR Collection (Hyatt)',
    location: '10 min north of Tulum',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'A long-established Dreams property with a beautiful beach and quick access to the Tulum ruins. Family-friendly with the typical Unlimited Vacation Club timeshare program.',
  },
  {
    name: 'Catalonia Royal Tulum',
    brand: 'Catalonia Hotels',
    location: 'Akumal, beachfront',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Adults-only, intimate by Riviera Maya standards (around 290 rooms), and famously well-run. Known for genuinely good food and a calm beach that\'s great for snorkeling.',
  },
  {
    name: 'Grand Bahia Principe Coba',
    brand: 'Bahia Principe',
    location: 'Akumal',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'The largest of the Bahia Principe Riviera Maya complex, with a jungle setting and a sky-bridge to a private cove beach. Trolley shuttles between buildings; bring comfortable walking shoes.',
  },
  {
    name: 'Sensira Resort & Spa Riviera Maya',
    brand: 'Sensira',
    location: 'Punta Bete (just north of Akumal)',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'A newer (2023) property that opened to immediate strong reviews. Modern construction, swim-out suites, and a quieter stretch of beach than the more-trafficked Akumal core.',
  },
  {
    name: 'Akumal Bay Beach & Wellness Resort',
    brand: 'Akumal Bay',
    location: 'Akumal Bay (turtle nesting)',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Sits on Akumal Bay itself — famous for green sea turtle snorkeling right from shore. Mid-priced, family-oriented, and an easy day trip down to Tulum.',
  },
];

const TimesharesNearTulum = () => {
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
              Timeshare Guide
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Timeshares Near Tulum
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Jungle-side resorts within an easy drive of the ruins, the cenotes, and the long
              empty beaches that put this stretch of coast on the map.
            </p>
          </div>
        </div>
      </section>

      <article className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            Tulum proper has almost no traditional timeshare inventory. The hotel zone is a strip
            of small, design-led boutique properties — beautiful, expensive, and built around
            the kind of one-off architectural identity that does not mesh with the bulk
            timeshare model. The timeshare market for "Tulum" therefore really refers to the
            corridor north of town: Akumal, Punta Bete, and the southern stretch of the Riviera
            Maya where the big all-inclusive brands have planted their flags within 20–30 minutes
            of the Tulum ruins.
          </p>

          <p>
            For travelers who want easy access to Tulum but the predictable comfort of a
            full-service resort, this corridor is the answer. For the rest of the Riviera Maya
            timeshare market, see{' '}
            <Link
              to="/timeshares-near-playa-del-carmen"
              className="font-semibold text-blue-600 hover:underline"
            >
              Timeshares Near Playa del Carmen
            </Link>{' '}
            and{' '}
            <Link
              to="/timeshares-near-puerto-morelos"
              className="font-semibold text-blue-600 hover:underline"
            >
              Timeshares Near Puerto Morelos
            </Link>
            .
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Why this stretch</h2>
          <p>
            Three things. First, Akumal Bay — the easiest place on the entire Riviera Maya to
            snorkel with green sea turtles in chest-deep water. Resorts in this corridor put you
            ten minutes from that experience. Second, Tulum and Cobá — the two most photogenic
            Mayan ruins on the coast — are both inside an easy half-day excursion. Third, the
            cenotes. Some of the most famous cenotes in the Yucatán (Dos Ojos, Casa Cenote, the
            Gran Cenote) are within twenty minutes of these resorts.
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
          <h2 className="text-3xl font-bold text-gray-900">A practical note on the new airport</h2>
          <p>
            Tulum opened its own international airport (Felipe Carrillo Puerto) in late 2023, and
            it changes the math for resorts in this corridor. Where guests used to fly into
            Cancún and drive 90+ minutes south, they can now fly directly to Tulum and be at
            their resort in 30 minutes. This is gradually pushing exchange demand up for the
            southern half of the Riviera Maya — worth knowing if you are thinking about renting
            out your week here.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Pair it with everything else</h2>
          <p>
            Most travelers staying at one of these resorts make at least one trip north to Playa
            del Carmen for dinner and shopping. Our{' '}
            <Link
              to="/places-to-eat-playa-del-carmen"
              className="font-semibold text-blue-600 hover:underline"
            >
              places to eat
            </Link>{' '}
            and{' '}
            <Link
              to="/things-to-do-playa-del-carmen"
              className="font-semibold text-blue-600 hover:underline"
            >
              things to do
            </Link>{' '}
            guides are organized around that day-trip pattern.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Owning vs. renting</h2>
          <p>
            If you own a week here and don't plan to use it, the same logic applies as elsewhere
            on the coast: rent it out through a local property manager rather than letting it
            expire. The resorts on this list rent for $1,400–$2,800 in high season for a
            one-bedroom suite — strong recovery on the maintenance fee, and zero hassle if you
            work with someone competent. See our{' '}
            <Link
              to="/hiring-a-property-manager"
              className="font-semibold text-blue-600 hover:underline"
            >
              property manager guide
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
            to="/timeshares-near-puerto-morelos"
            className="group flex items-center justify-between rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-500 p-6 text-white shadow-lg transition hover:from-cyan-700 hover:to-teal-600"
          >
            <div className="flex items-center gap-3">
              <Waves className="h-8 w-8" />
              <div>
                <div className="text-xs uppercase tracking-wider opacity-80">Next guide</div>
                <div className="text-lg font-bold">Timeshares Near Puerto Morelos</div>
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

export default TimesharesNearTulum;
