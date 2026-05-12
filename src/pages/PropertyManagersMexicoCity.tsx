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
    tagline: 'Boutique heritage + design-forward apartments',
    area: 'Roma, Condesa, Juárez',
    rating: 4.9,
    services: ['Design-forward STR', 'Mid-term', 'Concierge'],
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Curated portfolio of design-forward apartments in central CDMX, with the same locally-staffed model Nido uses in Valladolid. Same-day maintenance, in-person check-in, and concierge for restaurants, lucha libre, and the Frida Kahlo museum line you do not want to wait in.',
    link: { type: 'internal', href: '/nido-stays' },
    featured: true,
  },
  {
    name: 'Roma Norte Stays',
    tagline: 'Hyperlocal Roma + Condesa specialist',
    area: 'Roma Norte, Roma Sur, Condesa',
    rating: 4.7,
    services: ['Vacation rental', 'Digital nomad mid-term', 'Photography'],
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Focused entirely on the Roma-Condesa corridor — the densest digital-nomad zone in Mexico City. Strong listing photography and a pricing engine tuned to the long-stay-discount patterns that dominate this market.',
    link: { type: 'external', href: '#' },
  },
  {
    name: 'CDMX Apartment Co.',
    tagline: 'Volume vacation rental operator',
    area: 'City-wide',
    rating: 4.4,
    services: ['Volume STR', 'Full service', 'Cleaning'],
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'One of the larger PM operations in CDMX with a portfolio across most central neighborhoods. Efficient and dependable, with the trade-off that any individual property gets a less personalized touch than at the smaller agencies.',
    link: { type: 'external', href: '#' },
  },
  {
    name: 'Condesa Capital Hosts',
    tagline: 'Long-term + executive rentals',
    area: 'Condesa, Polanco',
    rating: 4.5,
    services: ['Long-term', 'Executive rentals', 'Corporate'],
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Focused on six-month-plus rentals and corporate relocations. Strong relationships with the international school community and the expat employers around Polanco. Premium pricing, premium tenant placement.',
    link: { type: 'external', href: '#' },
  },
  {
    name: 'Polanco Properties',
    tagline: 'Luxury and ultra-luxury inventory',
    area: 'Polanco I-V, Lomas',
    rating: 4.6,
    services: ['Luxury STR', 'Long-term', 'Property concierge'],
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'High-end inventory in Polanco and the Lomas neighborhoods — the kind of properties that rent for $500–$2,500 a night and need a different kind of management than the rest of the city. White-glove team, strict vetting on the owner side.',
    link: { type: 'external', href: '#' },
  },
  {
    name: 'Coyoacán Living',
    tagline: 'Southside specialist',
    area: 'Coyoacán, San Ángel',
    rating: 4.5,
    services: ['Heritage STR', 'Long-term', 'Owner-direct'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'A southside specialist working in the colonial-historic neighborhoods of Coyoacán and San Ángel. Smaller portfolio, deeply local team, and the right answer if your property is on the south side of the city.',
    link: { type: 'external', href: '#' },
  },
];

const PropertyManagersMexicoCity = () => {
  return (
    <>
      <Navbar />

      <section
        className="relative h-[55vh] min-h-[400px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604941208437-83f8e8aa9c6e?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="relative z-10 flex h-full items-end">
          <div className="container mx-auto px-4 pb-12">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
              Directory
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Property Managers in Mexico City
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Vetted vacation-rental, long-term, and executive property managers serving Roma,
              Condesa, Polanco, Coyoacán, and the rest of central CDMX.
            </p>
          </div>
        </div>
      </section>

      <article className="container mx-auto max-w-5xl px-4 py-12">
        <div className="prose prose-lg mx-auto max-w-3xl">
          <p className="lead text-xl text-gray-700">
            Mexico City has the largest and most competitive short-term rental market in Mexico,
            and the property management landscape reflects that. There are large volume
            operators, neighborhood specialists, luxury boutiques, executive-rental firms — each
            serving a different slice of the market. The directory below collects the firms most
            actively serving the central neighborhoods.
          </p>

          <p>
            Choosing the right one comes down to your property and your time horizon. A
            two-bedroom in Roma Norte with strong design and good photos is best served by a
            boutique specialist that can charge a premium and get bookings via direct channels.
            A four-bedroom in Polanco probably belongs with a luxury specialist. A studio in
            Doctores or Juárez may do best with a volume operator. Match the manager to the
            property, not the other way around.
          </p>

          <p>
            Read our owner's guide to{' '}
            <Link
              to="/hiring-a-property-manager"
              className="font-semibold text-blue-600 hover:underline"
            >
              hiring a property manager
            </Link>{' '}
            for the questions to ask before signing with any of the firms below.
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
          <h2 className="text-3xl font-bold text-gray-900">A note on the CDMX market</h2>
          <p>
            The Mexico City short-term rental market has been growing for a decade and is now
            mature enough that the easy money is gone. Margins are thinner than they used to be,
            competition for top-tier listings is intense, and the city government is actively
            tightening regulation. A good manager today is doing the work — fighting for ranking
            on the platforms, building direct-booking traffic, managing yield through dynamic
            pricing, staying on top of municipal requirements. A bad manager is collecting a
            commission and letting your unit drift down the algorithm.
          </p>
          <p>
            This is the single market in Mexico where the difference between a great manager and
            a mediocre one shows up most clearly in your annual statements. Choose accordingly.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Link
            to="/property-managers-valladolid"
            className="group flex items-center justify-between rounded-2xl bg-gradient-to-r from-amber-600 to-orange-500 p-6 text-white shadow-lg transition hover:from-amber-700 hover:to-orange-600"
          >
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8" />
              <div>
                <div className="text-xs uppercase tracking-wider opacity-80">Next directory</div>
                <div className="text-lg font-bold">Property Managers in Valladolid</div>
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

export default PropertyManagersMexicoCity;
