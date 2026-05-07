import Card from '../../components/ui/Card.jsx';
import { useFetch } from '../../hooks/useFetch.js';
import { portfolioApi } from '../../services/api.js';

export default function Dashboard() {
  const { data } = useFetch(() => portfolioApi.analytics(), { totals: { projects: 0, blogs: 0, contacts: 0, testimonials: 0 } });
  const totals = data?.totals || data;

  return (
    <section>
      <p className="eyebrow">Command center</p>
      <h1 className="mt-3 text-4xl font-black">Dashboard Analytics</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-4">
        {Object.entries(totals).map(([key, value]) => <Card key={key}><p className="text-sm uppercase text-white/50">{key}</p><p className="mt-2 text-4xl font-black">{value}</p></Card>)}
      </div>
      <Card className="mt-8">
        <h2 className="text-2xl font-black">CMS modules</h2>
        <p className="mt-3 text-white/60">Projects, blogs, skills, testimonials, contacts, image uploads, roles, and activity logs are exposed through protected REST APIs.</p>
      </Card>
    </section>
  );
}
