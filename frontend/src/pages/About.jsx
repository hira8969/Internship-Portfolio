import SEO from '../components/common/SEO.jsx';
import PageTransition from '../components/animations/PageTransition.jsx';
import Reveal from '../components/animations/Reveal.jsx';
import Card from '../components/ui/Card.jsx';
import { timeline } from '../constants/portfolio.js';

export default function About() {
  return (
    <PageTransition>
      <SEO title="About" />
      <section className="section-pad pt-32">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="mt-4 text-5xl font-black sm:text-7xl">Student developer building real projects.</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <Card>
              <p className="theme-muted text-lg leading-8">
                I am Hiralal Kumar, a BCA student at Centurion University. I build frontend and backend projects using React, JavaScript, Node.js, Express, MongoDB, GitHub, Vercel, and Render.
              </p>
              <div className="mt-8 grid gap-4">
                {timeline.map((item) => (
                  <div key={item.title} className="border-l border-aurora-cyan/50 pl-5">
                    <p className="text-sm font-black text-aurora-cyan">{item.date}</p>
                    <h3 className="mt-1 text-xl font-black">{item.title}</h3>
                    <p className="theme-muted mt-2">{item.body}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
