import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star, ExternalLink, Building2, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Manager = {
  name: string;
  tagline: string;
  area: string;
  rating: number;
  services: string[];
  image: string;
  blurb: string;
  link: { type: 'internal' | 'external'; href: string };
  featured?: boolean;
};

const managers: Manager[] = [
  {
    name: 'Nido Stays',
    tagline: 'Boutique heritage-home specialists',
    area: 'Centro Valladolid',
    rating: 4.9,
    services: ['Heritage homes', 'Concierge', 'STR + mid-term'],
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Curated portfolio of restored colonial townhouses across Centro and the surrounding cuadras. Same-day maintenance, in-person check-in, and the best concierge in town for cenote drivers and ruin-day logistics.',
    link: { type: 'internal', href: '/nido-stays' },
    featured: true,
  },
  {
    name: 'Casa Maya Property Management',
    tagline: 'Multi-year Yucatán operator',
    area: 'Valladolid + Tizimín',
    rating: 4.6,
    services: ['Long-term', 'Vacation rental', 'Maintenance'],
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'One of the older property management shops in central Yucatán, with a portfolio that spans private homes, small B&Bs, and a handful of restored haciendas outside town. Strong on long-term tenant placement.',
    link: { type: 'external', href: '#' },
  },
  {
    name: 'Yucatán Heritage Rentals',
    tagline: 'Hacienda & casona specialists',
    area: 'Valladolid corridor',
    rating: 4.7,
    services: ['Haciendas', 'Restoration consulting', 'Luxury STR'],
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Focused exclusively on high-end heritage properties — restored colonial homes and the rare 19th-century hacienda that comes onto the market. Premium pricing, premium service, low volume.',
    link: { type: 'external', href: '#' },
  },
  {
    name: 'Mariposa Stays',
    tagline: 'Family-run, owner-friendly',
    area: 'Centro + Sisal neighborhood',
    rating: 4.5,
    services: ['Owner-direct rentals', 'Cleaning', 'Photography'],
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'A small, family-run operation that has built a reputation for owner-friendly contracts and the kind of personalized service that larger agencies cannot match. Currently capped at around 20 properties.',
    link: { type: 'external', href: '#' },
  },
  {
    name: 'Pueblo Mágico Hosts',
    tagline: 'Boutique guest experience',
    area: 'Across Centro',
    rating: 4.6,
    services: ['Vacation rental', 'Guest experience', 'Tour coordination'],
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Newer to the market but quickly building a portfolio of design-forward properties. Their tour-coordination service for guests (cenotes, Ek Balam, Chichén Itzá) is genuinely good and a differentiator.',
    link: { type: 'external', href: '#' },
  },
];

const PropertyManagersValladolid = () => {
  return (
    <>
      <Navbar />

      <section
        className="relative h-[55vh] min-h-[400px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="relative z-10 flex h-full items-end">
          <div className="container mx-auto px-4 pb-12">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
              Directory
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Property Managers in Valladolid
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Vetted vacation-rental and long-term property managers serving the heritage town of
              Valladolid, Yucatán.
            </p>
          </div>
        </div>
      </section>

      <article className="container mx-auto max-w-5xl px-4 py-12">
        <div className="prose prose-lg mx-auto max-w-3xl">
          <p className="lead text-xl text-gray-700">
            Valladolid is one of the most distinctive property management markets in Mexico — and
            one of the most underserved. The town's Pueblo Mágico designation and proximity to
            Chichén Itzá and the best cenotes in the Yucatán have made it a magnet for
            short-stay travelers, but the rental inventory is dominated by restored colonial
            homes that need a specific kind of careful, high-touch management. The directory
            below collects the firms most actively serving that market today.
          </p>

          <p>
            If you own a property in Valladolid and are considering professional management,
            read our owner's guide to{' '}
            <Link
              to="/hiring-a-property-manager"
              className="font-semibold text-blue-600 hover:underline"
            >
              hiring a property manager
            </Link>{' '}
            before contacting any of the listings below. The same questions apply to every
            manager on this page.
          </p>
        </div>

        <h2 className="mt-12 text-3xl font-bold text-gray-900">Featured listings</h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {managers.map((m) => (
            <div
              key={m.name}
              className={`overflow-hidden rounded-2xl bg-white shadow-md ring-1 transition hover:shadow-xl ${
                m.featured ? 'ring-2 ring-amber-400' : 'ring-gray-100'
              }`}
            >
              <div
                className="relative h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${m.image})` }}
              >
                {m.featured && (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow">
                    <Sparkles className="h-3 w-3" /> Featured
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-1 text-gray-500">
                    <MapPin className="h-4 w-4" /> {m.area}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-amber-600">
                    <Star className="h-4 w-4" /> {m.rating}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{m.name}</h3>
                <div className="mt-1 text-sm font-medium uppercase tracking-wide text-blue-600">
                  {m.tagline}
                </div>
                <p className="mt-4 text-gray-700">{m.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.services.map((s) => (
                    <span
                      key={s}
                      className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {m.link.type === 'internal' ? (
                  <Link
                    to={m.link.href}
                    className="mt-5 inline-flex items-center gap-1 font-semibold text-amber-700 hover:underline"
                  >
                    View profile <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <a
                    href={m.link.href}
                    className="mt-5 inline-flex items-center gap-1 font-semibold text-blue-600 hover:underline"
                  >
                    Visit website <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="prose prose-lg mx-auto mt-12 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900">How to use this list</h2>
          <p>
            Interview at least three. Same questions, same property, apples to apples. Ask each
            one for two current owner references and actually call them. Sign the shortest
            contract you can negotiate on year one, then re-evaluate. A year of real data tells
            you everything you need to know about a manager.
          </p>
          <p>
            The Valladolid market is small enough that all of the managers above know each other
            — and know which properties each of them handles. That's an asset, not a problem:
            ask each manager which competitor they would recommend if their own portfolio is
            full. The answers will tell you who is genuinely respected and who is not.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Link
            to="/property-managers-mexico-city"
            className="group flex items-center justify-between rounded-2xl bg-gradient-to-r from-rose-600 to-pink-500 p-6 text-white shadow-lg transition hover:from-rose-700 hover:to-pink-600"
          >
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8" />
              <div>
                <div className="text-xs uppercase tracking-wider opacity-80">Next directory</div>
                <div className="text-lg font-bold">Property Managers in Mexico City</div>
              </div>
            </div>
            <ArrowRight className="h-6 w-6" />
          </Link>
          <Link
            to="/hiring-a-property-manager"
            className="group flex items-center justify-between rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white shadow-lg transition hover:from-blue-700 hover:to-cyan-600"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="h-8 w-8" />
              <div>
                <div className="text-xs uppercase tracking-wider opacity-80">Owner guide</div>
                <div className="text-lg font-bold">How to hire a property manager</div>
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

export default PropertyManagersValladolid;
