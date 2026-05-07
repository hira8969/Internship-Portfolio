import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/common/SEO.jsx';
import PageTransition from '../components/animations/PageTransition.jsx';
import Reveal from '../components/animations/Reveal.jsx';
import GSAPMarquee from '../components/animations/GSAPMarquee.jsx';
import Hero from '../components/sections/Hero.jsx';
import Card from '../components/ui/Card.jsx';
import { defaultProjects, skillGroups } from '../constants/portfolio.js';

export default function Home() {
  return (
    <PageTransition>
      <SEO title="Home" />
      <Hero />
      <section id="featured" className="section-pad">
        <div className="container-shell">
          <Reveal>
            <p className="eyebrow">Featured work</p>
            <h2 className="mt-4 text-4xl font-black sm:text-6xl">Selected systems with premium polish.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {defaultProjects.map((project, index) => (
              <Reveal delay={index * 0.08} key={project.title}>
                <Card className="group h-full overflow-hidden !p-0">
                  <img className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" src={project.image} alt={project.title} />
                  <div className="p-6">
                    <p className="text-sm font-bold text-aurora-cyan">{project.category}</p>
                    <h3 className="mt-2 text-2xl font-black">{project.title}</h3>
                    <p className="theme-muted mt-3">{project.summary}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
          <Link to="/projects" className="premium-button mt-8"><ArrowRight size={18} /> View all projects</Link>
        </div>
      </section>
      <GSAPMarquee items={skillGroups} />
    </PageTransition>
  );
}
