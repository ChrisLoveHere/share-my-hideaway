import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, TreePalm, ExternalLink, Sparkles, ShieldCheck, KeyRound, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PlayaStays = () => {
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
              Featured Partner
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              PlayaStays: the local team behind your trip
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              How a small, owner-operated property management company is changing the way the
              Riviera Maya rents its condos.
            </p>
          </div>
        </div>
      </section>

      <article className="container mx-auto max-w-3xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            Most vacation rentals in Playa del Carmen are owned by people who live somewhere else.
            That is not a complaint — it is just the structure of the market. A condo bought as an
            investment is, by definition, not the owner's home. When the A/C breaks at 11pm on a
            Saturday, the owner is asleep in Toronto or Chicago, and the guest is sweating in the
            dark. The gap between owner and guest is where most vacation rental experiences go
            wrong, and it is the gap that PlayaStays was built to close.
          </p>

          <p>
            PlayaStays is a property management company based in Playa del Carmen, run by people
            who live in Playa del Carmen. They manage a curated portfolio of condos and villas
            across the buildings and neighborhoods we cover in our{' '}
            <Link
              to="/condos-playa-del-carmen"
              className="font-semibold text-blue-600 hover:underline"
            >
              Condos in Playa del Carmen
            </Link>{' '}
            and{' '}
            <Link
              to="/where-to-stay-playacar"
              className="font-semibold text-blue-600 hover:underline"
            >
              Where to Stay in Playacar
            </Link>{' '}
            guides, and they handle every part of the guest experience locally — check-in,
            housekeeping, maintenance, recommendations, transfers, and the small daily problems
            that nobody warns you about until they happen.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">What "locally managed" actually means</h2>
          <p>
            It means that the same team that listed the property is also the team that meets you
            at the door. That when you message at 7am asking where to find good coffee, you get
            an answer in fifteen minutes from someone who has actually had the coffee. That when
            the elevator stops working, there is a maintenance lead in the same neighborhood with
            keys, tools, and a relationship with the building manager. That if you need to extend
            your stay by three days, you do not have to wait for a head office in another time
            zone to approve it.
          </p>
          <p>
            This sounds obvious. It is not the norm. The two largest categories of Playa rentals
            are listings handled by giant remote agencies (efficient, but generic) and listings
            handled by individual owner-operators (personal, but unevenly reliable). A local
            specialist team with a real portfolio is the rare middle path, and it is where the
            travel experience consistently lands.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">The portfolio</h2>
          <p>
            PlayaStays focuses on the kinds of properties this guide recommends — well-located
            condos in walkable neighborhoods, gated villas in Playacar, and the occasional
            stand-out beachfront unit. They do not chase volume. The portfolio is intentionally
            small enough that the same hands clean every kitchen and the same office knows every
            booking by name.
          </p>
          <p>
            Most listings are in the buildings covered in our{' '}
            <Link
              to="/condos-playa-del-carmen"
              className="font-semibold text-blue-600 hover:underline"
            >
              Condos in Playa del Carmen
            </Link>{' '}
            page — Anah Suites, Magia, Singular Dream, Mareazul, Aldea Thai, Menesse, and a few
            others — along with a strong selection of properties inside Playacar that line up with
            the recommendations in our{' '}
            <Link
              to="/where-to-stay-playacar"
              className="font-semibold text-blue-600 hover:underline"
            >
              Where to Stay in Playacar
            </Link>{' '}
            guide. The site is organized by neighborhood, building, and number of bedrooms, which
            mirrors how most travelers actually think about the choice.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100">
            <KeyRound className="h-8 w-8 text-blue-600" />
            <h3 className="mt-3 text-lg font-bold text-gray-900">In-person check-in</h3>
            <p className="mt-2 text-sm text-gray-600">
              A real person meets you at the door, walks you through the unit, and answers
              questions you didn't know to ask.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100">
            <ShieldCheck className="h-8 w-8 text-emerald-600" />
            <h3 className="mt-3 text-lg font-bold text-gray-900">Local maintenance</h3>
            <p className="mt-2 text-sm text-gray-600">
              Fast response from a team that lives nearby. Most issues are resolved the same day.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100">
            <Sparkles className="h-8 w-8 text-amber-600" />
            <h3 className="mt-3 text-lg font-bold text-gray-900">Concierge recommendations</h3>
            <p className="mt-2 text-sm text-gray-600">
              Tables booked, drivers arranged, cenotes recommended — by someone who has actually
              been there.
            </p>
          </div>
        </div>

        <div className="prose prose-lg mt-12 max-w-none">
          <h2 className="text-3xl font-bold text-gray-900">For owners thinking about renting</h2>
          <p>
            If you own a condo in Playa or Playacar and have been thinking about putting it on the
            rental market — or moving away from a remote agency — PlayaStays is also worth a
            conversation. The pitch is simple: better local presence, more curated marketing, and
            a team that treats your unit like a home rather than a SKU. They are selective about
            what they take on, which is part of why the guest experience holds up.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">How to get in touch</h2>
          <p>
            Browse the full portfolio, see current availability, and start a conversation at the
            PlayaStays website.
          </p>
        </div>

        <a
          href="https://www.playastays.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex items-center justify-between rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 p-8 text-white shadow-lg transition hover:from-cyan-700 hover:to-blue-700"
        >
          <div className="flex items-center gap-4">
            <ExternalLink className="h-10 w-10" />
            <div>
              <div className="text-sm uppercase tracking-wider opacity-80">Visit the site</div>
              <div className="text-2xl font-bold">www.playastays.com</div>
            </div>
          </div>
          <ArrowRight className="h-8 w-8" />
        </a>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-6 ring-1 ring-amber-100">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-amber-600 text-white shadow">
              <User className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wider text-amber-700">Meet the founder</div>
              <h3 className="mt-1 text-xl font-bold text-gray-900">Chris Love</h3>
              <p className="mt-2 text-gray-700">
                PlayaStays is run by Chris Love — a Playa del Carmen-based property manager with a
                background in hospitality and technology. Read his full profile to see who is
                actually answering the phone when you call.
              </p>
              <Link
                to="/property-manager/chris-love"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:underline"
              >
                View Chris Love's profile <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link
            to="/condos-playa-del-carmen"
            className="group flex items-center justify-between rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <Building2 className="h-7 w-7 text-blue-600" />
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-400">Related</div>
                <div className="font-bold text-gray-900">Condos in Playa del Carmen</div>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
          </Link>
          <Link
            to="/where-to-stay-playacar"
            className="group flex items-center justify-between rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <TreePalm className="h-7 w-7 text-amber-600" />
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-400">Related</div>
                <div className="font-bold text-gray-900">Where to Stay in Playacar</div>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 transition group-hover:translate-x-1 group-hover:text-amber-600" />
          </Link>
        </div>
      </article>

      <Footer />
    </>
  );
};

export default PlayaStays;
