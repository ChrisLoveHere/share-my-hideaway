import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Trees, Building2, Star, Flag, Waves } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const properties = [
  {
    name: 'Playacar Phase I — Beachfront Villas',
    type: 'Private villa rentals',
    bedrooms: '3–6 BR',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Phase I sits between the beach and the 5th Avenue corridor. The villas here are mostly private homes — sprawling, multi-bedroom properties with pools, often booked by extended families. Walking distance to the pier and 5th Avenue, but inside the gated calm.',
  },
  {
    name: 'Playacar Phase II — Gated Estates',
    type: 'Villa & condo communities',
    bedrooms: '2–5 BR',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Phase II is the larger, more residential section of Playacar, organized around the championship golf course. Expect manicured streets, iguanas in the road, and a mix of private villas and gated condo developments like Coral Villas and Bahia Maya.',
  },
  {
    name: 'Coral Villas',
    type: 'Gated condo community',
    bedrooms: '2–3 BR',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Coral Villas is a quiet, low-density complex with a community pool, lush landscaping, and short golf-cart distance to the beach. Popular with snowbirds and long-stay travelers who want quiet without sacrificing access to Playa.',
  },
  {
    name: 'Bahia Maya Village',
    type: 'Gated condo community',
    bedrooms: '1–3 BR',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'A larger condo community tucked along the Playacar fairways. Multiple pools, mature gardens, and a security gate make this a family favorite. Many units have been individually remodeled, so the spread in quality is real — choose your unit carefully.',
  },
];

const WhereToStayPlayacar = () => {
  return (
    <>
      <Navbar />

      <section
        className="relative h-[60vh] min-h-[420px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542640244-7e672d6cef4e?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="relative z-10 flex h-full items-end">
          <div className="container mx-auto px-4 pb-12">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
              Neighborhood Guide
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Where to Stay in Playacar
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Gated, green, and a five-minute walk from 5th Avenue — the case for the quieter side
              of Playa del Carmen.
            </p>
          </div>
        </div>
      </section>

      <article className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            Playacar is the secret weapon of Playa del Carmen. Sitting just south of the pier and
            separated from the bustle of Quinta Avenida by little more than a wide boulevard, it
            offers something the rest of Playa cannot — silence. The streets are wide and lined
            with palms. The architecture is consistent and considered. Iguanas sun themselves on
            stone walls. You can walk to the beach in five minutes, drive to dinner in ten, and
            you sleep with the windows open because there is nothing to keep them shut for.
          </p>

          <p>
            For travelers deciding between Playacar and the heart of Playa del Carmen, the choice
            usually comes down to temperament. If you came to be in the middle of things — walking
            to breakfast, lingering on 5th Avenue at midnight, smelling the cooking on the street
            — pick a condo in town. (Our{' '}
            <Link
              to="/condos-playa-del-carmen"
              className="font-semibold text-blue-600 hover:underline"
            >
              Condos in Playa del Carmen
            </Link>{' '}
            guide covers the buildings worth considering.) If you came to recover, to read on a
            terrace, to play a round of golf in the morning and a round of golf in the afternoon,
            Playacar is the answer. Many repeat visitors split their stay — three nights in
            Playacar, three nights in town — and feel they have seen the whole picture.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">A quick history</h2>
          <p>
            Playacar was developed in the 1990s as a master-planned community on land that had
            previously been jungle. The plan was unusual for the region: instead of stacking
            resorts shoulder-to-shoulder along the coast, the developers laid out a
            golf-course-and-residential neighborhood, with a few large resorts along the beach and
            the rest of the land reserved for private homes and gated condo communities.
          </p>
          <p>
            The result, thirty years on, is a neighborhood that feels mature in a way that most of
            the Riviera Maya does not. The trees are tall. The bougainvillea is everywhere. The
            golf course winds through the neighborhood like a green river, and properties built
            around it have appreciated steadily for two decades.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Phase I vs. Phase II</h2>
          <p>
            Playacar is divided into two phases, and the difference matters when you book. Phase I
            is the smaller, original section closest to downtown Playa. It sits between the beach
            and the highway, with most properties on or near the sand. Phase I is walkable to the
            pier and 5th Avenue — you can stay in a gated villa and still wander into town for
            dinner without a car.
          </p>
          <p>
            Phase II is much larger and sits south of the federal highway. It is organized around
            the El Camaleón golf course (which hosts the OHL Classic, a regular PGA Tour stop) and
            includes most of Playacar's gated condo communities. It is quieter than Phase I,
            greener, and a bit more removed from the action. From most Phase II properties you
            will want a car or a golf cart to get to the beach, though there is a private resident
            beach club at the south end of the neighborhood.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">The communities worth knowing</h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {properties.map((p) => (
            <div
              key={p.name}
              className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 transition hover:shadow-xl"
            >
              <div
                className="h-56 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${p.image})` }}
              />
              <div className="p-6">
                <div className="mb-2 flex items-center gap-2 text-sm text-amber-600">
                  <Trees className="h-4 w-4" /> {p.type}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{p.name}</h3>
                <div className="mt-1 text-sm font-medium text-gray-500">{p.bedrooms}</div>
                <p className="mt-4 text-gray-700">{p.blurb}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="prose prose-lg mt-12 max-w-none">
          <h2 className="text-3xl font-bold text-gray-900">Golf, tennis, and the daily rhythm</h2>
          <p>
            The center of life in Playacar — at least for many of its residents and longer-stay
            visitors — is the golf course. El Camaleón was designed by Greg Norman and threads
            through mangroves, jungle, and along the Caribbean. Tee times are bookable through
            most Playacar properties and through the resorts that flank the course. Mornings are
            cooler and faster; afternoons are gorgeous but hot.
          </p>
          <p>
            Beyond golf, the neighborhood has tennis courts, a small commercial strip with a
            grocery store and a few restaurants, and beach access through both the public Punta
            Esmeralda beach and several private beach clubs. Many properties include a golf-cart
            rental, which is the unofficial Playacar vehicle of choice — short distances, no
            traffic, and the kids can drive.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Eating in Playacar</h2>
          <p>
            One thing Playacar does not have, by design, is a dense restaurant scene. There are a
            handful of decent spots in the neighborhood — a few hotel restaurants, the clubhouse
            at the golf course, a small Italian place on the commercial strip — but you will do
            most of your dinners across the highway in town. The short version: rent a place with
            a good kitchen, eat breakfast and lunch in (or at the golf clubhouse), and walk or
            drive into Playa for dinner.
          </p>
          <p>
            For inspiration on where to actually go for dinner, our{' '}
            <Link
              to="/places-to-eat-playa-del-carmen"
              className="font-semibold text-blue-600 hover:underline"
            >
              Places to Eat in Playa del Carmen
            </Link>{' '}
            guide is the place to start.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Safety and the gated thing</h2>
          <p>
            Playa del Carmen is generally safe for visitors, particularly in the tourist
            corridor. Playacar is safer than that — every entrance has a guard, the streets are
            patrolled, and the neighborhood maintains its own security on top of the municipal
            police. For families, for older travelers, and for anyone who values peace of mind
            after dark, this matters.
          </p>
          <p>
            That said, "gated" does not mean "isolated." You can walk out the main gate of Phase I
            and be on Quinta Avenida in five minutes. The neighborhood feels protected without
            feeling cut off.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Who should pick Playacar</h2>
          <p>
            Families with young children, who want a pool and a quiet street. Older travelers and
            snowbirds who want to settle in for a month or three. Golfers, obviously. Couples on
            an anniversary trip who want privacy and don't need the nightlife. And anyone who has
            done the in-town thing once and is ready for the next level of calm.
          </p>
          <p>
            If your travel style is more "wander out and see what's happening" than "set up a
            comfortable base," you'll be happier in the heart of Playa. See our{' '}
            <Link
              to="/condos-playa-del-carmen"
              className="font-semibold text-blue-600 hover:underline"
            >
              Condos in Playa del Carmen
            </Link>{' '}
            guide for the buildings and neighborhoods worth knowing on that side of the road.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">How to book the right place</h2>
          <p>
            Playacar rentals tend to be individually owned, which means quality varies wildly even
            within a single building. Two units at Coral Villas, listed at similar prices, can
            offer very different experiences depending on whether the owner has remodeled the
            kitchen, updated the A/C, and invested in good linens. A few rules of thumb: read
            recent reviews carefully, ask for photos taken in the last six months, and confirm
            who handles maintenance and how fast they respond. A professional property manager
            with a strong local team is worth a meaningful premium over a self-managed
            owner-direct booking.
          </p>
        </div>

        <Link
          to="/condos-playa-del-carmen"
          className="mt-12 flex items-center justify-between rounded-2xl bg-gradient-to-r from-amber-600 to-orange-500 p-8 text-white shadow-lg transition hover:from-amber-700 hover:to-orange-600"
        >
          <div className="flex items-center gap-4">
            <Building2 className="h-10 w-10" />
            <div>
              <div className="text-sm uppercase tracking-wider opacity-80">Continue reading</div>
              <div className="text-2xl font-bold">Condos in Playa del Carmen</div>
            </div>
          </div>
          <ArrowRight className="h-8 w-8" />
        </Link>

        <div className="mt-6 text-center text-sm text-gray-500">
          Looking for a property manager who knows both Playacar and Playa?{' '}
          <Link to="/playastays" className="font-semibold text-blue-600 hover:underline">
            Meet PlayaStays
          </Link>
          .
        </div>
      </article>

      <Footer />
    </>
  );
};

export default WhereToStayPlayacar;
