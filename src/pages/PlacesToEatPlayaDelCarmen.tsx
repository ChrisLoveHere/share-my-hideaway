import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, DollarSign, Utensils, Compass } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const restaurants = [
  {
    name: 'El Fogón',
    cuisine: 'Tacos al Pastor',
    price: '$',
    area: 'Av. 30 (locals corner)',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'The trompo of pastor at El Fogón is the closest thing Playa has to a religious experience. Lines spill onto the sidewalk most nights. Order a taco al pastor con piña, a quesadilla de costilla, and a Jarrito and you will understand why locals send every visiting cousin here.',
  },
  {
    name: 'La Cueva del Chango',
    cuisine: 'Mexican breakfast',
    price: '$$',
    area: 'Calle 38',
    image: 'https://images.unsplash.com/photo-1551218372-a8789b81b253?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'A garden restaurant set back from the street, La Cueva del Chango has been doing chilaquiles and huevos divorciados the right way for two decades. Come on a Sunday and plan to linger — this is where Playa eats breakfast.',
  },
  {
    name: 'Aldea Corazón',
    cuisine: 'Modern Mexican',
    price: '$$$',
    area: '5th Avenue, Calle 14',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Built around a Mayan cenote in the middle of Quinta Avenida, Aldea Corazón is the rare restaurant that delivers both atmosphere and food. Try the cochinita pibil and the mezcal flight; ask for a table near the cenote.',
  },
  {
    name: 'Imprevist',
    cuisine: 'Mediterranean tasting menu',
    price: '$$$$',
    area: 'Calle 28 (off the grid)',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Tucked behind an unmarked door, Imprevist is a small-plates jewel that has quietly become the most-talked-about reservation in town. The chef trained in Barcelona and it shows in every plate. Book a week ahead.',
  },
  {
    name: 'Chez Céline',
    cuisine: 'French bakery & café',
    price: '$$',
    area: '5th Avenue at Calle 34',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'The croissants here would not be out of place in Paris. Stop in for a flat white and a pain au chocolat on your way to the beach, or grab a quiche and a baguette to take back to the condo for a no-cook dinner.',
  },
  {
    name: 'Catch Beach Club',
    cuisine: 'Seafood & ceviche',
    price: '$$$',
    area: 'Mamitas Beach',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200',
    blurb:
      'Toes-in-sand dining with proper food. The aguachile is bright and addictive, the whole grilled fish comes with charred lime, and the sunset slot (around 6:30pm) is worth booking a day ahead.',
  },
];

const PlacesToEatPlayaDelCarmen = () => {
  return (
    <>
      <Navbar />

      <section
        className="relative h-[60vh] min-h-[420px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="relative z-10 flex h-full items-end">
          <div className="container mx-auto px-4 pb-12">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
              Eat Local
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Places to Eat in Playa del Carmen
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              From street tacos to candlelit tasting menus — the restaurants worth crossing town
              for, and the corner stalls worth coming back to.
            </p>
          </div>
        </div>
      </section>

      <article className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            If you came to Playa del Carmen for the beach, you will leave for the food. The
            Riviera Maya sits at one of the great culinary crossroads on the planet — the
            seafood-driven cooking of the Yucatán coast on one side, the smoky achiote-and-citrus
            traditions of the Mayan interior on the other, and a steady drift of international
            chefs who have made Playa their workshop. The result is a town where you can eat a
            $1.50 taco at 11am and a $200 tasting menu at 9pm, and both meals will rank among the
            best of your trip.
          </p>

          <p>
            This is not a list of every restaurant in town. It is a curated walk through the
            categories that matter — where to eat tacos like a local, where to splurge on a
            anniversary dinner, where to grab a coffee and a pastry on the way to the beach, and
            where to settle in for a long lunch on the sand. If you are staying at one of the
            condos covered in our{' '}
            <Link
              to="/condos-playa-del-carmen"
              className="font-semibold text-blue-600 hover:underline"
            >
              Condos in Playa del Carmen
            </Link>{' '}
            guide, most of these spots are within a 10-minute walk.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Start with the tacos</h2>
          <p>
            Any honest food guide to Playa del Carmen begins and ends at a taco counter. The town
            sits in the middle of pastor country — the spit-roasted, pineapple-kissed marriage of
            Lebanese shawarma and Mexican carnitas that defines central and southeastern Mexico —
            and the local interpretation is as good as anywhere in the country.
          </p>
          <p>
            El Fogón is the most-talked-about, but it is not the only game. Wander up Calle 32 in
            the evening and you will pass three or four trompos rotating on the sidewalk, each one
            attached to a stand that has been there for years. Don't overthink it: order pastor,
            order it with pineapple, ask for salsa verde and salsa roja on the side, and tip well.
            For something different, try a taco de cochinita — slow-roasted pork shoulder marinated
            in achiote and sour orange, wrapped in banana leaves, and served on a soft corn
            tortilla with pickled red onion. It is the signature dish of the Yucatán and you
            cannot leave Playa without trying it.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">
            Breakfast, brunch, and the slow morning
          </h2>
          <p>
            One of the quiet pleasures of staying in a condo rather than a resort is owning your
            mornings. You can sleep in, make a coffee, sit on the terrace, and then drift out into
            town when you feel like it. Playa rewards this kind of pace with a genuinely great
            breakfast scene.
          </p>
          <p>
            La Cueva del Chango is the institution — a leafy garden restaurant that has been
            serving chilaquiles, mollettes, and excellent fresh juices for more than twenty years.
            Show up early on weekends. For something more Parisian, Chez Céline on 5th Avenue
            turns out croissants and quiches that would hold up in the 6th arrondissement. And if
            you are after the kind of acai bowl, oat milk, and overnight-oats brunch that travels
            well on Instagram, the cluster of cafés around Calle 38 will keep you happy for a
            week.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Beach clubs and toes in the sand</h2>
          <p>
            A Playa del Carmen vacation is not complete without at least one long lunch at a beach
            club. The format is consistent: you pay a minimum consumption (usually around $40–60
            per person), you get a sun lounger, an umbrella, and table service for as long as you
            care to stay. The food ranges from beach-club basic to genuinely excellent.
          </p>
          <p>
            Mamitas Beach Club on Calle 28 is the original and still the most fun — DJ sets in the
            afternoon, a long bar, and ceviche that punches well above the typical beach-club
            grade. Catch Beach Club is the more design-forward sibling. For something quieter, try
            Indigo Beach Club further north, where the music is softer and the umbrellas are
            spaced wider apart.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">The restaurants worth the splurge</h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {restaurants.map((r) => (
            <div
              key={r.name}
              className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 transition hover:shadow-xl"
            >
              <div
                className="h-56 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${r.image})` }}
              />
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-1 text-gray-500">
                    <MapPin className="h-4 w-4" /> {r.area}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-600">
                    <DollarSign className="h-4 w-4" /> {r.price}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{r.name}</h3>
                <div className="mt-1 text-sm font-medium uppercase tracking-wide text-blue-600">
                  {r.cuisine}
                </div>
                <p className="mt-4 text-gray-700">{r.blurb}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="prose prose-lg mt-12 max-w-none">
          <h2 className="text-3xl font-bold text-gray-900">A few practical notes</h2>
          <p>
            <strong>Reservations.</strong> For anywhere in the $$$ and $$$$ range, book at least
            two or three days ahead in high season (December through April). WhatsApp is the
            preferred channel in Playa — most restaurants list a WhatsApp number on their
            Instagram bio.
          </p>
          <p>
            <strong>Cash and cards.</strong> Most sit-down restaurants take cards, but the
            best taco stands are cash only. Withdraw pesos at a bank ATM (not the standalone
            machines on 5th Avenue, which charge punishing fees) and carry small bills.
          </p>
          <p>
            <strong>Tipping.</strong> 10–15% is standard at sit-down restaurants. Service charge
            is rarely included; if it is, the menu will say so explicitly. At taco stands and
            beach clubs, round up generously.
          </p>
          <p>
            <strong>Water and ice.</strong> Restaurants in Playa use purified water and ice as a
            matter of course. You do not need to be precious about it. Drink the agua fresca.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900">Eating your way through a week</h2>
          <p>
            If you only have seven days in Playa, here is a rhythm that works: breakfast at the
            condo most days, brunch out on the weekends, a long lunch at a beach club twice during
            the week, casual taco dinners three nights, one splurge dinner, and at least one
            evening where you walk 5th Avenue with no plan and let the smell of something cooking
            decide for you.
          </p>
          <p>
            Once you have eaten well, the rest of the trip is about what to do between meals.
            Playa is not a town where you just lie on the beach — there are cenotes to swim,
            ruins to climb, reefs to snorkel, and underground rivers to float through. Our next
            guide picks the best of them.
          </p>
        </div>

        <Link
          to="/things-to-do-playa-del-carmen"
          className="mt-12 flex items-center justify-between rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 p-8 text-white shadow-lg transition hover:from-emerald-700 hover:to-teal-600"
        >
          <div className="flex items-center gap-4">
            <Compass className="h-10 w-10" />
            <div>
              <div className="text-sm uppercase tracking-wider opacity-80">Continue reading</div>
              <div className="text-2xl font-bold">Things to Do in Playa del Carmen</div>
            </div>
          </div>
          <ArrowRight className="h-8 w-8" />
        </Link>

        <div className="mt-6 text-center text-sm text-gray-500">
          Need a place to come home to between meals? See our{' '}
          <Link
            to="/condos-playa-del-carmen"
            className="font-semibold text-blue-600 hover:underline"
          >
            Condos in Playa del Carmen
          </Link>{' '}
          guide.
        </div>
      </article>

      <Footer />
    </>
  );
};

export default PlacesToEatPlayaDelCarmen;
