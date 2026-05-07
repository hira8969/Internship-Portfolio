import { useMemo, useState } from 'react';
import SEO from '../components/common/SEO.jsx';
import PageTransition from '../components/animations/PageTransition.jsx';
import Reveal from '../components/animations/Reveal.jsx';
import Card from '../components/ui/Card.jsx';
import { ExternalLink, Github } from 'lucide-react';
import { defaultProjects } from '../constants/portfolio.js';
import { portfolioApi } from '../services/api.js';
import { useFetch } from '../hooks/useFetch.js';

export default function Projects() {
  const [query, setQuery] = useState('');
  const { data } = useFetch(() => portfolioApi.projects(), defaultProjects);
  const projects = Array.isArray(data) ? data : defaultProjects;
  const filtered = useMemo(() => projects.filter((project) => `${project.title} ${project.category} ${project.summary}`.toLowerCase().includes(query.toLowerCase())), [projects, query]);

  return (
    <PageTransition>
      <SEO title="Projects" />
      <section className="section-pad pt-32">
        <div className="container-shell">
          <Reveal>
            <p className="eyebrow">Projects</p>
            <h1 className="mt-4 text-5xl font-black sm:text-7xl">Projects from GitHub.</h1>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects..." className="mt-8 w-full max-w-xl rounded-full border border-white/10 bg-white/10 px-5 py-3 outline-none focus:border-aurora-cyan" />
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {filtered.map((project) => (
              <Card key={project._id || project.title} className="overflow-hidden !p-0">
                <img src={project.image?.url || project.image} alt={project.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <p className="text-sm font-bold text-aurora-cyan">{project.category}</p>
                  <h2 className="mt-2 text-2xl font-black">{project.title}</h2>
                  <p className="theme-muted mt-3">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.tags?.map((tag) => <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs">{tag}</span>)}</div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.sourceUrl && <a className="ghost-button !px-4 !py-2" href={project.sourceUrl} target="_blank" rel="noreferrer"><Github size={16} /> Code</a>}
                    {project.liveUrl && <a className="premium-button !px-4 !py-2" href={project.liveUrl} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live</a>}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
