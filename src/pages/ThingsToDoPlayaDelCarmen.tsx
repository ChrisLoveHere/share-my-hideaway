import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Compass, Waves, TreePalm, Building2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const activities = [
  {
    name: 'Cenote Dos Ojos',
    type: 'Cenote / Swimming',
    distance: '40 min north',
    time: 'Half day',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Two crystalline underground pools connected by a swimmable tunnel. Snorkel gear is available on site, and the cavern dive is one of the most photographed experiences on the Yucatán. Go before 10am to beat the crowds.',
  },
  {
    name: 'Tulum Ruins',
    type: 'Mayan archaeology',
    distance: '50 min south',
    time: 'Half day',
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'A clifftop Mayan city with stone temples staring out over the Caribbean. Smaller than Chichén Itzá but dramatically more photogenic. Combine with lunch at one of the beach restaurants on the Tulum hotel strip.',
  },
  {
    name: 'Cozumel Day Trip',
    type: 'Island / Snorkeling',
    distance: '45 min ferry',
    time: 'Full day',
    image: 'https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'The Cozumel ferry leaves from the Playa pier roughly every hour. The island is ringed by the second-largest reef system on Earth and the snorkeling, even from shore, is world-class. Rent a scooter and circle the island for a different angle.',
  },
  {
    name: 'Río Secreto',
    type: 'Underground river',
    distance: '15 min south',
    time: 'Half day',
    image: 'https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'A guided wade and swim through an underground river system, complete with helmet lights and a wetsuit. Unique, slightly otherworldly, and run as a conservation project — bookings are limited.',
  },
  {
    name: 'Chichén Itzá',
    type: 'Mayan archaeology',
    distance: '2.5 hrs west',
    time: 'Full day',
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'One of the New Seven Wonders of the World. Hire a private driver and leave at 6am to beat the bus tours from Cancun. Combine with a swim at Cenote Ik Kil on the way back.',
  },
  {
    name: '5th Avenue at Night',
    type: 'Walk & people-watch',
    distance: 'On foot',
    time: 'Evening',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'After dinner, walk the length of Quinta Avenida slowly. Musicians, painters, food carts, fire dancers — the show is free and constant. End at the pier and watch the boats come in.',
  },
];

const ThingsToDoPlayaDelCarmen = () => {
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
              Adventure Guide
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Things to Do in Playa del Carmen
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Cenotes, ruins, reefs, and quiet afternoons — how to fill a week (or a month) in the
              heart of the Riviera Maya.
            </p>
          </div>
        </div>
      </section>

      <article className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            Playa del Carmen is one of the rare beach towns where the beach is almost the least
            interesting thing about it. A twenty-minute drive in any direction turns up something
            extraordinary — a 65-million-year-old underground river, a Mayan city that has been
            standing for a thousand years, a reef teeming with sea turtles, a quiet jungle road
            that ends at a hidden swimming hole. The town itself is a pleasant base camp; the
            Riviera Maya is the real attraction. Fed yourself well at one of the spots in our{' '}
            <Link
              to="/places-to-eat-playa-del-carmen"
              className="font-semibold text-blue-600 hover:underline"
            >
              Places to Eat in Playa del Carmen
            </Link>{' '}
            guide? Good — you'll need the energy.
          </p>

          <p>
            This guide is built around the way most travelers actually structure their days. We
            start with the cenotes (which deserve a category of their own), move on to the ruins,
            then the water, then the in-town wanderings that close out an evening. None of these
            require booking weeks in advance — most can be arranged the day before, or even the
            morning of, through your condo's concierge or a reputable local tour operator.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Cenotes: the Yucatán's secret</h2>
          <p>
            The Yucatán Peninsula has no surface rivers. Rain that falls on the jungle filters
            down through the porous limestone bedrock and collects in vast underground systems —
            the largest networks of submerged caves in the world. Where the ceiling has collapsed,
            you get a cenote: a natural well of impossibly clear freshwater, often with rays of
            sunlight cutting down through hanging vines.
          </p>
          <p>
            There are hundreds of cenotes within an hour of Playa, and you cannot visit them all.
            But you should visit at least three, and ideally of different types. The classic
            "open" cenote is a circular pool surrounded by jungle, like Cenote Azul south of
            Playa. The "cavern" cenote is half-roofed, with stalactites overhead — Dos Ojos is the
            canonical example. The "cave" cenote is fully enclosed and requires lights, like the
            extraordinary Río Secreto system.
          </p>
          <p>
            A few practical notes. Bring biodegradable sunscreen only — most cenotes will not let
            you in otherwise. Wear water shoes; the rocks can be sharp. Tip your cenote guide
            generously. And go early; the same cenote can feel like a peaceful chapel at 9am and a
            theme park at noon.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">The Mayan ruins</h2>
          <p>
            From Playa, you have three main archaeological day trips. Tulum is the closest and the
            easiest — a clifftop walled city that you can see in an hour. Cobá is the most
            adventurous; it sits in deep jungle 90 minutes inland, with a pyramid you used to be
            able to climb (no longer, but the bike ride around the site is gorgeous). Chichén Itzá
            is the most famous, and a long day, but you have come this far — go.
          </p>
          <p>
            The trick with ruins is timing. The Caribbean sun is unforgiving by 11am, and the tour
            buses from Cancun start arriving around 10. Hire a private driver, leave at 6am, and
            you will have the temples almost to yourself for the first two hours. The same trick
            applies to Tulum, where the early-morning light is the best light for photos anyway.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Reefs, islands, and water</h2>
          <p>
            The Mesoamerican Barrier Reef — the second-largest in the world — runs the entire
            length of the Riviera Maya. The reef sits a short boat ride from shore, and
            snorkeling trips leave from the Playa pier every morning. For something more ambitious,
            take the ferry to Cozumel; the reef on the leeward side of the island is consistently
            ranked among the top dive sites on the planet.
          </p>
          <p>
            If you prefer your water flat and turquoise, head south to Akumal ("place of the
            turtles"), where you can snorkel with green sea turtles in chest-deep water. Or rent a
            kayak and paddle out from Playa's own beach in the early morning, when the water is
            glass and you have it to yourself.
          </p>
          <p>
            For a wholly different kind of water experience, the Xcaret, Xel-Há, and Xplor parks
            sit a short drive south of town. They are tightly engineered eco-parks — you can swim
            through an underground river at Xplor in the morning, snorkel with rays at Xel-Há in
            the afternoon, and finish with a Mayan-fire show at Xcaret. Touristy? Yes. Worth a
            day? Also yes.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">The shortlist</h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {activities.map((a) => (
            <div
              key={a.name}
              className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 transition hover:shadow-xl"
            >
              <div
                className="h-56 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${a.image})` }}
              />
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {a.distance}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {a.time}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{a.name}</h3>
                <div className="mt-1 text-sm font-medium uppercase tracking-wide text-emerald-600">
                  {a.type}
                </div>
                <p className="mt-4 text-gray-700">{a.blurb}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="prose prose-lg mt-12 max-w-none">
          <h2 className="text-3xl font-bold text-gray-900">A sample week</h2>
          <p>
            Here is a rhythm that has worked for many travelers we know. Day one: settle in, walk
            5th Avenue, swim at the beach in front of your condo. Day two: a cenote in the
            morning, a beach club in the afternoon. Day three: Tulum ruins early, lunch on the
            Tulum beach strip, back to Playa for dinner. Day four: a do-nothing day at Mamitas
            Beach Club. Day five: the Cozumel ferry, snorkeling, a long lunch on the island. Day
            six: Chichén Itzá with a private driver. Day seven: a final cenote, a final taco run,
            sunset on the pier.
          </p>
          <p>
            You will leave with the feeling that you saw a fraction of what is here — which is the
            best possible reason to come back.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Getting around</h2>
          <p>
            For in-town trips, walk. Quinta Avenida is pedestrian-only and most of the action is
            within ten blocks of the pier. For day trips, the three options are a rental car,
            a private driver, or a tour. A rental car is cheapest if you are doing multiple day
            trips and comfortable driving in Mexico; a private driver is the sweet spot for two or
            three days of touring; an organized tour is best for Chichén Itzá specifically, where
            the logistics are a lot.
          </p>
          <p>
            Uber works in Playa but is officially in a long-running legal grey area with the taxi
            union — use it for short hops, but for the airport transfer or a multi-stop day,
            arrange a private driver through your condo. The going rate from Cancún airport to
            Playa is around $70 USD.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Where to base yourself</h2>
          <p>
            All of the activities above are accessible from anywhere in Playa, but your specific
            condo or neighborhood will shape your daily rhythm more than you expect. If you want
            to be in the middle of the action, choose a condo on or near 5th Avenue — see our{' '}
            <Link
              to="/condos-playa-del-carmen"
              className="font-semibold text-blue-600 hover:underline"
            >
              Condos in Playa del Carmen
            </Link>{' '}
            guide for the buildings worth knowing. If you would rather have a gated, golf-and-
            jungle calm and drive in for dinner, Playacar is the answer.
          </p>
        </div>

        <Link
          to="/where-to-stay-playacar"
          className="mt-12 flex items-center justify-between rounded-2xl bg-gradient-to-r from-amber-600 to-orange-500 p-8 text-white shadow-lg transition hover:from-amber-700 hover:to-orange-600"
        >
          <div className="flex items-center gap-4">
            <TreePalm className="h-10 w-10" />
            <div>
              <div className="text-sm uppercase tracking-wider opacity-80">Continue reading</div>
              <div className="text-2xl font-bold">Where to Stay in Playacar</div>
            </div>
          </div>
          <ArrowRight className="h-8 w-8" />
        </Link>
      </article>

      <Footer />
    </>
  );
};

export default ThingsToDoPlayaDelCarmen;
