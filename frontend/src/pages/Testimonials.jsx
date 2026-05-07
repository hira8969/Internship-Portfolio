import { Star } from 'lucide-react';
import SEO from '../components/common/SEO.jsx';
import PageTransition from '../components/animations/PageTransition.jsx';
import Card from '../components/ui/Card.jsx';

const testimonials = ['Strategic, fast, and unusually polished.', 'The dashboard felt production-ready from the first demo.', 'A rare mix of engineering depth and product taste.'];

export default function Testimonials() {
  return (
    <PageTransition>
      <SEO title="Testimonials" />
      <section className="section-pad pt-32">
        <div className="container-shell">
          <p className="eyebrow">Testimonials</p>
          <h1 className="mt-4 text-5xl font-black sm:text-7xl">Signal from real collaborators.</h1>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((quote, index) => <Card key={quote}><div className="flex text-aurora-lime">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div><p className="mt-6 text-xl font-bold">“{quote}”</p><p className="mt-4 text-white/50">Client {index + 1}</p></Card>)}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
