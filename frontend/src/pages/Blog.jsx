import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO.jsx';
import PageTransition from '../components/animations/PageTransition.jsx';
import Card from '../components/ui/Card.jsx';
import { useFetch } from '../hooks/useFetch.js';
import { portfolioApi } from '../services/api.js';

const fallbackBlogs = [{ title: 'Designing Secure Portfolio APIs', slug: 'designing-secure-portfolio-apis', excerpt: 'A practical guide to auth, validation, pagination, and clean MVC boundaries.', tags: ['API', 'Security'] }];

export default function Blog() {
  const { data } = useFetch(() => portfolioApi.blogs(), fallbackBlogs);
  const blogs = Array.isArray(data) ? data : fallbackBlogs;

  return (
    <PageTransition>
      <SEO title="Blog" />
      <section className="section-pad pt-32">
        <div className="container-shell">
          <p className="eyebrow">Writing</p>
          <h1 className="mt-4 text-5xl font-black sm:text-7xl">Engineering notes and product essays.</h1>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {blogs.map((blog) => <Link key={blog.slug} to={`/blog/${blog.slug}`}><Card><h2 className="text-2xl font-black">{blog.title}</h2><p className="mt-3 text-white/65">{blog.excerpt}</p></Card></Link>)}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
