import SEO from '../components/common/SEO.jsx';
import PageTransition from '../components/animations/PageTransition.jsx';
import Reveal from '../components/animations/Reveal.jsx';
import Card from '../components/ui/Card.jsx';
import { skillGroups } from '../constants/portfolio.js';

export default function Skills() {
  return (
    <PageTransition>
      <SEO title="Skills" />
      <section className="section-pad pt-32">
        <div className="container-shell">
          <Reveal>
            <p className="eyebrow">Skills matrix</p>
            <h1 className="mt-4 text-5xl font-black sm:text-7xl">A stack built for shipping.</h1>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <Reveal delay={index * 0.05} key={group.name}>
                  <Card className="h-full">
                    <div className="flex items-center justify-between">
                      <Icon className="text-aurora-cyan" />
                      <span className="text-2xl font-black">{group.score}%</span>
                    </div>
                    <h2 className="mt-5 text-2xl font-black">{group.name}</h2>
                    <div className="mt-4 h-2 rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-aurora-cyan to-aurora-pink" style={{ width: `${group.score}%` }} /></div>
                    <div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <span className="rounded-full bg-white/10 px-3 py-1 text-sm" key={item}>{item}</span>)}</div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
