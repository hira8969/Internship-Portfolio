import SEO from '../components/common/SEO.jsx';
import PageTransition from '../components/animations/PageTransition.jsx';
import Reveal from '../components/animations/Reveal.jsx';
import Card from '../components/ui/Card.jsx';
import { servicePlans } from '../constants/portfolio.js';

export default function Services() {
  return (
    <PageTransition>
      <SEO title="Services" />
      <section className="section-pad pt-32">
        <div className="container-shell">
          <Reveal><p className="eyebrow">Services</p><h1 className="mt-4 text-5xl font-black sm:text-7xl">From concept to production.</h1></Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {servicePlans.map((plan) => (
              <Card key={plan.name} className={plan.featured ? 'border-aurora-cyan/60' : ''}>
                <h2 className="text-2xl font-black">{plan.name}</h2>
                <p className="mt-3 text-4xl font-black gradient-text">{plan.price}</p>
                <ul className="mt-6 grid gap-3 text-white/70">{plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
