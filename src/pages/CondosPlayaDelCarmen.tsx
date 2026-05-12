import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, BedDouble, Waves, Building2, Star, Utensils } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const condos = [
  {
    name: 'Anah Suites',
    area: 'Downtown / 5th Avenue',
    bedrooms: '1–3 BR',
    vibe: 'Walk-everywhere luxury in the heart of the action',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Tucked just off Quinta Avenida, Anah Suites is the gold standard for travelers who want sleek modern interiors, a rooftop pool with skyline views, and a doorstep that opens onto the best dining and nightlife in Playa del Carmen. Units range from cozy one-bedrooms to expansive three-bedroom layouts ideal for families.',
  },
  {
    name: 'Magia Beachside',
    area: 'Coco Beach',
    bedrooms: '2–3 BR',
    vibe: 'Quieter beachfront living, north of the bustle',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Magia sits in the leafy Coco Beach neighborhood, where the sand stays soft and the streets stay calm. Condos here often feature private terraces, full-service kitchens, and quick beach access — perfect for travelers who want the energy of Playa nearby, but not under their bedroom window.',
  },
  {
    name: 'Singular Dream',
    area: '5th Avenue North',
    bedrooms: '1–2 BR',
    vibe: 'Designer interiors, rooftop pool, walkable everything',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Singular Dream is a boutique residence celebrated for its architectural finishes and dramatic rooftop pool deck. Most units are one and two-bedrooms — a sweet spot for couples and small families who want a stylish base camp two blocks from the beach.',
  },
  {
    name: 'Mareazul',
    area: 'Playacar Phase II border',
    bedrooms: '2–4 BR',
    vibe: 'Resort-style condo community with beach club',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Mareazul is a gated, resort-style condo community on a quiet stretch of beach just north of Playacar. With multiple pools, a private beach club, and onsite restaurants, it feels more like a luxury resort than a residential building — perfect for longer stays.',
  },
  {
    name: 'Aldea Thai',
    area: 'Mamitas Beach',
    bedrooms: 'Studio–3 BR',
    vibe: 'Steps from Mamitas Beach Club and Calle 28',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Aldea Thai is a sprawling, Asian-inspired condo complex with tropical gardens, multiple pools, and direct access to Mamitas Beach. It is one of the most consistently rented buildings in Playa, with a wide range of unit sizes and excellent on-site security.',
  },
  {
    name: 'Menesse The City',
    area: 'Calle 38, off 5th Avenue',
    bedrooms: '1–2 BR',
    vibe: 'Contemporary high-rise, lock-and-leave simplicity',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Menesse The City delivers modern high-rise living with elevator access, a rooftop pool, and a gym on site. It is a favorite of remote workers and couples who want fast Wi-Fi, a reliable elevator, and a five-minute walk to dozens of restaurants.',
  },
];

const CondosPlayaDelCarmen = () => {
  return (
    <>
      <Navbar />

      <section
        className="relative h-[60vh] min-h-[420px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1510097467424-192d713fd8b2?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="relative z-10 flex h-full items-end">
          <div className="container mx-auto px-4 pb-12">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
              Destination Guide
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Condos in Playa del Carmen
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              The most-loved condo buildings on Mexico's Riviera Maya — where to stay, what each
              one is known for, and how to pick the right neighborhood.
            </p>
          </div>
        </div>
      </section>

      <article className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            Playa del Carmen has quietly become one of the most rentable, livable, and downright
            beautiful condo markets in all of Mexico. A decade ago, the typical visitor stayed at
            an all-inclusive resort in Cancun and drove south for a day trip. Today, that pattern
            has flipped — savvy travelers fly into Cancun, drive forty-five minutes south, and
            settle into a condo on or near the famed Quinta Avenida for a week, a month, or a
            season. The reason is simple: a well-chosen condo in Playa del Carmen offers more
            space, more privacy, more authentic food, and more of the Riviera Maya itself than a
            walled resort ever could.
          </p>

          <p>
            But "Playa del Carmen condo" covers a remarkable range of buildings, neighborhoods,
            and lifestyles. A studio in a high-rise on Calle 38 is a very different experience
            from a three-bedroom penthouse at Mareazul. This guide walks you through the
            neighborhoods that matter, the buildings worth knowing, and the practical questions to
            ask before you book.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">
            Why a condo beats a hotel in Playa
          </h2>
          <p>
            The case for condo living in Playa is the same case that wins over travelers all over
            the world — but it lands harder here because the alternative (the all-inclusive
            resort) is so insular. A condo puts you on the street with everyone else. You shop at
            the Chedraui market, you grab a torta from a stall on the way home, you tip the kid
            who washes the windshield at the corner. You see the town. And because Playa is
            walkable and safe in the tourist corridor, you can do all of this on foot — something
            that is genuinely rare in the Caribbean.
          </p>
          <p>
            Most condos in Playa come with full kitchens, washer-dryer setups, fast internet, and
            a rooftop pool that is, frankly, often nicer than the hotel pool down the street. Many
            buildings have 24-hour security and concierge service. Cleaning is typically included
            mid-stay. Per square foot, you pay roughly half what a comparable hotel room would
            cost — and you get twice the space.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">
            The neighborhoods, in plain English
          </h2>
          <p>
            <strong>5th Avenue (Quinta Avenida) Centro</strong> — the pedestrian heart of Playa.
            From Calle 4 up to about Calle 14, this is the loudest, most lit-up stretch.
            Restaurants, bars, mariachi, souvenir shops. Condos here are walk-everywhere
            convenient but you'll hear nightlife until 2am.
          </p>
          <p>
            <strong>5th Avenue North (Calle 26–38)</strong> — still on Quinta but quieter, with
            better restaurants and the city's most fashionable boutiques. This is where most
            design-forward condos cluster, including Singular Dream and Menesse The City.
          </p>
          <p>
            <strong>Mamitas Beach (Calle 28)</strong> — a beach-club corridor with a relaxed
            daytime crowd and proper sand. Aldea Thai dominates this zone. You can wake up, walk
            three minutes, and be in the ocean.
          </p>
          <p>
            <strong>Coco Beach</strong> — north of Constituyentes, calmer, leafier, and a touch
            more residential. Great for families and longer stays.
          </p>
          <p>
            <strong>Playacar</strong> — gated, green, and golf-oriented, on the south side of
            town. We cover Playacar in detail on our dedicated{' '}
            <Link
              to="/where-to-stay-playacar"
              className="font-semibold text-blue-600 hover:underline"
            >
              Where to Stay in Playacar
            </Link>{' '}
            page.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Condo buildings worth knowing</h2>
          <p>
            The list below is not exhaustive — Playa adds new buildings every year — but these are
            the names that come up again and again from owners, agents, and repeat guests. Each
            represents a different slice of the Playa condo experience.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {condos.map((c) => (
            <div
              key={c.name}
              className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 transition hover:shadow-xl"
            >
              <div
                className="h-56 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${c.image})` }}
              />
              <div className="p-6">
                <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  {c.area}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{c.name}</h3>
                <div className="mt-2 flex items-center gap-3 text-sm text-gray-600">
                  <span className="inline-flex items-center gap-1">
                    <BedDouble className="h-4 w-4" /> {c.bedrooms}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-4 w-4 text-amber-500" /> {c.vibe}
                  </span>
                </div>
                <p className="mt-4 text-gray-700">{c.blurb}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="prose prose-lg mt-12 max-w-none">
          <h2 className="text-3xl font-bold text-gray-900">What to look for before you book</h2>
          <p>
            Not every Playa condo is created equal, and the photos rarely tell the full story.
            Here are the questions worth asking the owner or property manager before you put down
            a deposit.
          </p>
          <p>
            <strong>Floor and view.</strong> A fourth-floor unit on the front of a building is a
            very different experience from a ground-floor unit facing the parking lot. In Playa,
            higher is almost always better — you catch the breeze, you skip the street noise, and
            you may even see the ocean if you are close enough.
          </p>
          <p>
            <strong>Air conditioning.</strong> Confirm A/C is in every room, not just the master
            bedroom. Playa is warm year-round and humidity ramps up from June through October.
          </p>
          <p>
            <strong>Building amenities.</strong> A rooftop pool is the norm, not a luxury. Look
            for elevator access if you are above the third floor, on-site security, a gym if you
            care about one, and a beach club if the building is not directly on sand.
          </p>
          <p>
            <strong>Walkability.</strong> If you do not plan to rent a car, you want to be within
            a five-minute walk of either 5th Avenue or the beach. Anything further and you will
            spend the trip in taxis.
          </p>
          <p>
            <strong>Management.</strong> Self-managed owner rentals can be wonderful, but a
            professional management company gives you backup if the A/C breaks at 11pm on a
            Saturday. Ask who handles maintenance and what their response time looks like.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Pairing your condo with the town</h2>
          <p>
            A condo is only as good as what surrounds it. The real magic of Playa del Carmen is
            stepping out your front door into a town that is genuinely alive — taquerias that have
            been on the same corner for thirty years, beach clubs where the DJ sets up at sunset,
            cenotes a short drive inland. If you are choosing a building, choose with the streets
            in mind.
          </p>
          <p>
            For our full guide to the best restaurants and food experiences within a short walk of
            most of the condos above, head over to{' '}
            <Link
              to="/places-to-eat-playa-del-carmen"
              className="font-semibold text-blue-600 hover:underline"
            >
              Places to Eat in Playa del Carmen
            </Link>
            . And if you are deciding between the busy Centro side of town and the gated calm of
            Playacar, our{' '}
            <Link
              to="/where-to-stay-playacar"
              className="font-semibold text-blue-600 hover:underline"
            >
              Where to Stay in Playacar
            </Link>{' '}
            guide breaks down the trade-offs.
          </p>
        </div>

        <Link
          to="/places-to-eat-playa-del-carmen"
          className="mt-12 flex items-center justify-between rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-lg transition hover:from-blue-700 hover:to-cyan-600"
        >
          <div className="flex items-center gap-4">
            <Utensils className="h-10 w-10" />
            <div>
              <div className="text-sm uppercase tracking-wider opacity-80">Continue reading</div>
              <div className="text-2xl font-bold">Places to Eat in Playa del Carmen</div>
            </div>
          </div>
          <ArrowRight className="h-8 w-8" />
        </Link>
      </article>

      <Footer />
    </>
  );
};

export default CondosPlayaDelCarmen;
