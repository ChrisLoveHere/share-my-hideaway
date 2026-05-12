import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star, Building2, Waves, TreePalm } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const timeshares = [
  {
    name: 'The Royal Haciendas',
    brand: 'The Royal Resorts',
    location: 'Playa del Carmen (north shore)',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Royal Resorts\' flagship Riviera Maya property — sprawling, oceanfront, and consistently the most-traded timeshare week in Playa del Carmen. Spacious one and two-bedroom suites, multiple pools, and a private beach club.',
  },
  {
    name: 'Grand Mayan Riviera Maya (Vidanta)',
    brand: 'Vidanta Resorts',
    location: '15 min south of Playa',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Part of the massive Vidanta Riviera Maya complex — five resorts, a Jack Nicklaus golf course, and a Cirque du Soleil theater on a single property. Mayan-inspired architecture and famously well-kept grounds.',
  },
  {
    name: 'Sandos Playacar Beach Resort',
    brand: 'Sandos',
    location: 'Playacar Phase II',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'An all-inclusive timeshare with direct beach access inside the gated Playacar community. Popular with families, with kid-friendly pools and easy walking access to 5th Avenue across the highway.',
  },
  {
    name: 'Iberostar Paraíso Lindo / Maya',
    brand: 'Iberostar',
    location: '20 min north of Playa',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'A pair of five-star, all-inclusive Iberostar properties sharing one of the longest stretches of soft white sand on the coast. The Paraíso complex is a Yucatán mainstay of the timeshare exchange networks.',
  },
  {
    name: 'Occidental at Xcaret Destination',
    brand: 'Barceló',
    location: '10 min south of Playa',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Sits inside the Xcaret eco-park complex with included park access — a rare perk that pays for itself if you have kids. Multiple swimmable river systems wind through the resort.',
  },
  {
    name: 'Sandos Caracol Eco Resort',
    brand: 'Sandos',
    location: '10 min north of Playa',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Built around natural cenotes and mangroves. The eco-tour angle is real — guests routinely spot monkeys, coati, and the occasional crocodile in the on-property nature reserve.',
  },
];

const TimesharesNearPlayaDelCarmen = () => {
  return (
    <>
      <Navbar />

      <section
        className="relative h-[60vh] min-h-[420px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="relative z-10 flex h-full items-end">
          <div className="container mx-auto px-4 pb-12">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
              Timeshare Guide
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Timeshares Near Playa del Carmen
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              The big-name timeshare resorts on, around, and within a short drive of Playa — what
              each one is known for, and how to rent or buy a week.
            </p>
          </div>
        </div>
      </section>

      <article className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            Playa del Carmen sits at the dead center of the Riviera Maya, which means it sits at
            the dead center of one of the largest concentrations of timeshare resorts in Mexico.
            Within a thirty-minute drive of the pier, you'll find more than two dozen resorts
            tied into the major exchange networks — RCI, Interval International, Vidanta's
            internal program, and the Royal Resorts ladder. If you own a timeshare anywhere in
            the world, odds are good you can trade your week into one of these properties.
          </p>

          <p>
            This page focuses on the resorts geographically nearest to Playa del Carmen itself —
            the ones you can reach in twenty minutes or less. For properties slightly further
            north or south, see our companion guides for{' '}
            <Link
              to="/timeshares-near-puerto-morelos"
              className="font-semibold text-blue-600 hover:underline"
            >
              Timeshares Near Puerto Morelos
            </Link>{' '}
            and{' '}
            <Link
              to="/timeshares-near-tulum"
              className="font-semibold text-blue-600 hover:underline"
            >
              Timeshares Near Tulum
            </Link>
            .
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">The six worth knowing</h2>
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
          <h2 className="text-3xl font-bold text-gray-900">Renting vs. buying</h2>
          <p>
            Most travelers come to these resorts as renters rather than owners. A week's rental at
            a one-bedroom at The Royal Haciendas or Vidanta typically lands in the $1,200–$2,500
            range during high season — substantially less than booking the same unit through the
            resort's own front desk. Owners list weeks they cannot use, and a marketplace like
            Share my Hideaway connects those owners with travelers directly.
          </p>
          <p>
            Buying a resale week is a different conversation. The developer-direct price for a
            week at one of these resorts can run $40,000–$80,000. The resale market for the same
            week typically clears at 10–25% of that, with the same usage rights, the same
            exchange privileges, and the same maintenance fee obligation. If you are confident
            you will use a Mexico Caribbean week every year (or every other year) for the next
            decade, the math on resale is hard to argue with.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Pairing your timeshare with the town</h2>
          <p>
            All of these resorts sit close enough to Playa del Carmen that you'll want to spend at
            least a few evenings in town. The food is better, the people-watching is better, and
            the souvenirs are not the ones in the gift shop. See our guides to{' '}
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
            </Link>
            . For non-resort accommodations,{' '}
            <Link
              to="/condos-playa-del-carmen"
              className="font-semibold text-blue-600 hover:underline"
            >
              condos in Playa del Carmen
            </Link>{' '}
            and{' '}
            <Link
              to="/where-to-stay-playacar"
              className="font-semibold text-blue-600 hover:underline"
            >
              Playacar villas
            </Link>{' '}
            are the alternative paths.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Thinking about renting out your week?</h2>
          <p>
            If you own at one of these resorts and are not planning to use your week this year, you
            do not have to let it go to waste — or pay an exit company to dump it. A professional
            property manager who specializes in Riviera Maya timeshares can list your week, screen
            renters, and handle the paperwork for a clean percentage cut. See our guide to{' '}
            <Link
              to="/hiring-a-property-manager"
              className="font-semibold text-blue-600 hover:underline"
            >
              hiring a property manager for your timeshare
            </Link>{' '}
            for what to look for.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
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

export default TimesharesNearPlayaDelCarmen;
