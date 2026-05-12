import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, KeyRound, Wallet, FileText, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const checklistItems = [
  {
    icon: ShieldCheck,
    title: 'Licensed and insured locally',
    body: 'In Mexico, your manager should be operating through a registered Mexican company (S.A. de C.V. or S. de R.L.) with liability insurance. Ask for the RFC and the policy number — not just a screenshot.',
  },
  {
    icon: Wallet,
    title: 'Transparent fee structure',
    body: 'Typical Riviera Maya commissions run 18–25% of net rental for full-service management. Anything below that and they\'re cutting corners; anything above and they\'d better be earning it. Watch for hidden setup fees, mandatory photo packages, and "tech platform" surcharges.',
  },
  {
    icon: FileText,
    title: 'Real reporting, monthly',
    body: 'You should receive a statement every month showing bookings, gross rent, commissions, expenses, and a net payout. If your manager cannot show you a sample report, walk away.',
  },
  {
    icon: KeyRound,
    title: 'Owner block-out and personal use',
    body: 'A good manager makes it easy to block your own weeks for personal use, friends, and family. Confirm the lead time required and whether owner stays are free or carry a cleaning fee.',
  },
  {
    icon: Users,
    title: 'Local team, not a remote front',
    body: 'Some agencies have a single salesperson on the ground and outsource everything else. Ask: who cleans, who does maintenance, who picks up the phone at 11pm? You want answers with first names.',
  },
  {
    icon: AlertTriangle,
    title: 'Exclusivity terms you can live with',
    body: 'Many contracts include 6 or 12-month exclusivity clauses. That can be fine, but you want a clean exit if things go wrong. 30 days\' notice without penalty is the minimum to push for.',
  },
];

const HiringAPropertyManager = () => {
  return (
    <>
      <Navbar />

      <section
        className="relative h-[55vh] min-h-[400px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="relative z-10 flex h-full items-end">
          <div className="container mx-auto px-4 pb-12">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
              Owner Guide
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Hiring a Property Manager for Your Timeshare
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              How to choose a manager who actually rents your week — and what to ask before you
              sign anything.
            </p>
          </div>
        </div>
      </section>

      <article className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            The hardest part of owning a timeshare is not buying one. It's owning one in a year
            you can't use it. The maintenance fee comes due whether you fly down or not, the week
            expires whether you book it or not, and the developer rental program — if your resort
            even has one — usually returns a fraction of what the unit is genuinely worth on the
            open market. That gap, between what your week could earn and what it actually earns
            in the resort's own program, is the entire reason independent property managers exist.
          </p>

          <p>
            A good property manager rents your week, screens the guest, handles check-in,
            coordinates housekeeping, deals with any in-stay issues, and sends you a clean
            payout. A bad one collects a setup fee, lists your unit on a few half-finished
            channels, and forgets you exist until the year is over. This guide is about how to
            tell them apart before you sign.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">When a manager is worth hiring</h2>
          <p>
            Three signals. First, your week is in a desirable region (Riviera Maya, Cancún
            corridor, Cabo, Vallarta) and a desirable season (December–April high season, June
            shoulder for the right resorts). Second, you don't plan to use the week yourself this
            year and probably won't next year. Third, the math: 75–80% of fair market rent, after
            commission, is meaningfully more than what your developer's rental program will pay
            you, and meaningfully more than your maintenance fee.
          </p>
          <p>
            For a one-bedroom week at a top-tier Riviera Maya resort that grosses $2,400 in high
            season, a 20% management commission leaves you $1,920. Your maintenance fee is
            probably $1,000–$1,400. The week pays for itself and then some. Across a portfolio
            of owners, this math is why the local management market exists.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">What "full service" actually means</h2>
          <p>
            "Full service" in the Mexico timeshare world generally covers six functions: listing
            and marketing (Airbnb, Vrbo, Booking, direct), pricing and yield management,
            guest communication and screening, in-person check-in, housekeeping coordination, and
            owner accounting. A few managers also handle owner-side concierge — booking dinner
            reservations, arranging airport transfers, coordinating maintenance during owner
            stays. Worth the small premium if you use your week yourself.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">The six things to verify before signing</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {checklistItems.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100"
            >
              <c.icon className="h-8 w-8 text-blue-600" />
              <h3 className="mt-3 text-lg font-bold text-gray-900">{c.title}</h3>
              <p className="mt-2 text-gray-700">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="prose prose-lg mt-12 max-w-none">
          <h2 className="text-3xl font-bold text-gray-900">Red flags to walk away from</h2>
          <p>
            <strong>Up-front fees they cannot explain.</strong> Cleaning, listing, and platform
            fees should be passed through transparently to the guest, not charged to you as the
            owner before any rental income exists. If a manager asks for $500 to "get you set
            up," ask exactly what that money pays for. The honest answer is usually "nothing you
            couldn't do yourself."
          </p>
          <p>
            <strong>Long exclusivity with no out.</strong> A 24-month exclusivity contract with
            no early termination clause is a hostage situation in formal clothes. Push back hard.
          </p>
          <p>
            <strong>Single point of contact who isn't local.</strong> If the person who signs you
            up lives in Toronto and the "team in Mexico" is a phone number that goes to voicemail,
            your guests will eventually have a bad time and you will eventually have a bad
            review.
          </p>
          <p>
            <strong>No willingness to show recent reviews on units they currently manage.</strong>{' '}
            Any honest manager can pull up three or four of their current owners' Airbnb listings
            and walk you through the reviews. If they hedge, it is because they don't want you
            reading what guests are saying.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Commission models, briefly</h2>
          <p>
            The two dominant structures in Mexico are <em>percentage of net</em> (manager takes a
            cut of rent after platform fees) and <em>percentage of gross</em> (manager takes a cut
            before platform fees). Net is the owner-friendlier structure. If you're comparing two
            quotes, normalize them to the same base before deciding — a 22% net commission may be
            cheaper than an 18% gross commission depending on the platform.
          </p>
          <p>
            A small but growing number of managers offer hybrid arrangements — a lower commission
            paired with a flat monthly fee that covers marketing and platform costs. This can be
            attractive if you have a high-end property that rents predictably; it can be a trap
            if your week is hard to move.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">A note on developer rental programs</h2>
          <p>
            Almost every major Mexican timeshare developer has its own rental program — usually
            sold to owners as a no-hassle alternative to "dealing with strangers." The trade-off
            is that you typically receive 30–50% of what your week earns on the open market.
            The developer keeps the rest as a marketing and operations fee. If your week is
            highly desirable, a competent local manager will out-earn the developer program by a
            wide margin, even after commission.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Getting started</h2>
          <p>
            Three steps. First, interview at least three managers. Same questions, same units,
            apples to apples. Second, ask each one for the contact info of two current owner
            clients — and actually call them. Third, sign the shortest contract you can negotiate
            on the first season, then re-evaluate. A year of real data tells you everything you
            need to know.
          </p>
          <p>
            If your week is in the Riviera Maya — particularly Playa del Carmen, Playacar, or
            anywhere along the Cancún–Tulum corridor — our partner team at PlayaStays handles
            exactly this kind of work. See the{' '}
            <Link
              to="/playastays"
              className="font-semibold text-blue-600 hover:underline"
            >
              PlayaStays profile
            </Link>{' '}
            for an overview, or read the{' '}
            <Link
              to="/property-manager/chris-love"
              className="font-semibold text-blue-600 hover:underline"
            >
              Chris Love property manager profile
            </Link>{' '}
            to see who actually answers the phone.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Link
            to="/playastays"
            className="group flex items-center justify-between rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 p-6 text-white shadow-lg transition hover:from-cyan-700 hover:to-blue-700"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8" />
              <div>
                <div className="text-xs uppercase tracking-wider opacity-80">Meet the team</div>
                <div className="text-lg font-bold">PlayaStays</div>
              </div>
            </div>
            <ArrowRight className="h-6 w-6" />
          </Link>
          <Link
            to="/property-manager/chris-love"
            className="group flex items-center justify-between rounded-2xl bg-gradient-to-r from-amber-600 to-orange-500 p-6 text-white shadow-lg transition hover:from-amber-700 hover:to-orange-600"
          >
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8" />
              <div>
                <div className="text-xs uppercase tracking-wider opacity-80">Profile</div>
                <div className="text-lg font-bold">Chris Love</div>
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

export default HiringAPropertyManager;
