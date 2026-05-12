import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, MapPin, Mail, Building2, Star, Award, Globe, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const stats = [
  { value: '10+', label: 'Years in vacation rentals' },
  { value: 'Riviera Maya', label: 'Local market focus' },
  { value: 'PlayaStays', label: 'Founder & operator' },
];

const services = [
  {
    title: 'Timeshare rental management',
    body: 'Full-service listing, pricing, guest screening, and payout reporting for owners who can\'t use their week — turn unused inventory into recovered maintenance fees and meaningful net income.',
  },
  {
    title: 'Condo and villa management',
    body: 'Long-term and short-term rental management for individually owned condos and villas across Playa del Carmen, Playacar, and the wider Riviera Maya corridor.',
  },
  {
    title: 'Owner concierge',
    body: 'For owners who do use their property: pre-arrival cleans, stocked fridges, airport transfers, restaurant bookings, and a local team that responds in minutes, not hours.',
  },
  {
    title: 'Resale and listing advisory',
    body: 'Honest market valuations and listing support for owners ready to sell — including timeshare resales handled through Share my Hideaway and direct private-condo brokerage relationships.',
  },
];

const PropertyManagerChrisLove = () => {
  return (
    <>
      <Navbar />

      <section
        className="relative h-[50vh] min-h-[380px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542640244-7e672d6cef4e?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />
        <div className="relative z-10 flex h-full items-end">
          <div className="container mx-auto px-4 pb-12">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
              Property Manager Profile
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Chris Love
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Founder of PlayaStays — vacation rental and timeshare management on Mexico's
              Riviera Maya.
            </p>
          </div>
        </div>
      </section>

      <article className="container mx-auto max-w-4xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <aside className="space-y-4 md:col-span-1">
            <div className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100">
              <div
                className="h-64 w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=800')",
                }}
              />
              <div className="p-5">
                <div className="text-xl font-bold text-gray-900">Chris Love</div>
                <div className="text-sm text-gray-500">Founder, PlayaStays</div>

                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    Playa del Carmen, MX
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Globe className="h-4 w-4 text-gray-400" />
                    <a
                      href="https://www.playastays.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      www.playastays.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Linkedin className="h-4 w-4 text-gray-400" />
                    <a
                      href="https://linkedin.com/in/chrislove89/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      linkedin.com/in/chrislove89
                    </a>
                  </div>
                </div>

                <a
                  href="https://linkedin.com/in/chrislove89/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0A66C2] px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-[#0852a0]"
                >
                  <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-5 ring-1 ring-amber-100">
              <Award className="h-7 w-7 text-amber-600" />
              <div className="mt-2 text-sm font-semibold text-amber-900">Local specialist</div>
              <div className="mt-1 text-xs text-amber-800">
                Riviera Maya-based, with on-the-ground teams covering Playa del Carmen,
                Playacar, Puerto Morelos, Akumal, and Tulum.
              </div>
            </div>
          </aside>

          <div className="md:col-span-2">
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-gray-100"
                >
                  <div className="text-xl font-bold text-gray-900">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="prose prose-lg mt-8 max-w-none">
              <h2 className="text-2xl font-bold text-gray-900">About Chris</h2>
              <p>
                Chris Love is the founder of <strong>PlayaStays</strong>, a boutique vacation
                rental and property management company serving Playa del Carmen, Playacar, and
                the wider Riviera Maya. The company was built around a thesis Chris kept coming
                back to after years of watching how the region's rental market actually works:
                owners get a much better outcome — and guests get a much better stay — when the
                team managing the property actually lives in the same town.
              </p>
              <p>
                PlayaStays operates as a deliberately small, owner-operated alternative to the
                large remote agencies and the well-meaning-but-uneven owner-direct rentals that
                dominate the rest of the market. Chris and his on-the-ground team handle every
                part of the guest experience locally — in-person check-ins, same-day maintenance
                response, real concierge recommendations from people who have eaten at the
                restaurants and snorkeled the cenotes themselves. For owners, that translates
                into faster bookings, cleaner reviews, and the kind of monthly statements you can
                actually read.
              </p>
              <p>
                Chris's background sits at the intersection of <strong>hospitality, technology,
                and the local Mexican market</strong>. He's the rare property manager who can
                discuss yield management strategy in the morning, swap out a broken A/C unit at a
                Playacar villa in the afternoon, and ship a custom owner portal at night. That
                technical bent shows up in the company's tooling — PlayaStays runs on modern
                property management software, integrates directly with Airbnb, Vrbo, and
                Booking.com, and gives owners real-time visibility into their unit's performance
                rather than the quarterly PDF most agencies still send.
              </p>
              <p>
                Beyond PlayaStays, Chris is building <strong>Share my Hideaway</strong> — a
                marketplace dedicated specifically to timeshare rentals and resales, connecting
                owners who can't use their week with travelers who want resort-grade
                accommodations without the all-inclusive markup. The two ventures are
                complementary: PlayaStays handles the operational side for owners in the Riviera
                Maya, while Share my Hideaway opens up a broader audience of buyers and renters
                across major North American timeshare markets.
              </p>
              <p>
                When Chris isn't working, you'll find him diving the Cozumel reef, walking the
                jungle roads behind Playacar, or trying yet another taco stand in search of the
                one. He's available for direct conversations with owners considering a
                management switch — start the conversation on{' '}
                <a
                  href="https://linkedin.com/in/chrislove89/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  LinkedIn
                </a>{' '}
                or through the contact form at{' '}
                <a
                  href="https://www.playastays.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  PlayaStays
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <h2 className="mt-16 text-3xl font-bold text-gray-900">Services</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition hover:shadow-lg"
            >
              <Star className="h-7 w-7 text-amber-500" />
              <h3 className="mt-3 text-lg font-bold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-700">{s.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-3xl font-bold text-gray-900">Coverage area</h2>
        <p className="mt-3 max-w-2xl text-gray-700">
          Chris and the PlayaStays team manage properties across the Riviera Maya. Browse the
          regional timeshare guides for resorts and inventory in each market.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Link
            to="/timeshares-near-playa-del-carmen"
            className="group rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-6 text-white shadow-lg transition hover:shadow-xl"
          >
            <Building2 className="h-7 w-7" />
            <div className="mt-3 text-lg font-bold">Playa del Carmen</div>
            <div className="mt-1 flex items-center gap-1 text-sm opacity-90">
              View timeshares <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>
          <Link
            to="/timeshares-near-puerto-morelos"
            className="group rounded-2xl bg-gradient-to-br from-cyan-600 to-teal-500 p-6 text-white shadow-lg transition hover:shadow-xl"
          >
            <Building2 className="h-7 w-7" />
            <div className="mt-3 text-lg font-bold">Puerto Morelos</div>
            <div className="mt-1 flex items-center gap-1 text-sm opacity-90">
              View timeshares <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>
          <Link
            to="/timeshares-near-tulum"
            className="group rounded-2xl bg-gradient-to-br from-emerald-600 to-lime-500 p-6 text-white shadow-lg transition hover:shadow-xl"
          >
            <Building2 className="h-7 w-7" />
            <div className="mt-3 text-lg font-bold">Tulum</div>
            <div className="mt-1 flex items-center gap-1 text-sm opacity-90">
              View timeshares <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>
        </div>

        <a
          href="https://www.playastays.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 flex items-center justify-between rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 p-8 text-white shadow-lg transition hover:from-cyan-700 hover:to-blue-700"
        >
          <div className="flex items-center gap-4">
            <ExternalLink className="h-10 w-10" />
            <div>
              <div className="text-sm uppercase tracking-wider opacity-80">Get in touch</div>
              <div className="text-2xl font-bold">www.playastays.com</div>
            </div>
          </div>
          <ArrowRight className="h-8 w-8" />
        </a>

        <div className="mt-6 text-center text-sm text-gray-500">
          New to property managers?{' '}
          <Link
            to="/hiring-a-property-manager"
            className="font-semibold text-blue-600 hover:underline"
          >
            Read our owner's guide to hiring one
          </Link>
          .
        </div>
      </article>

      <Footer />
    </>
  );
};

export default PropertyManagerChrisLove;
