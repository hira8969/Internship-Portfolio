import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/common/SEO.jsx';
import PageTransition from '../components/animations/PageTransition.jsx';
import Card from '../components/ui/Card.jsx';
import { portfolioApi } from '../services/api.js';
import { useFetch } from '../hooks/useFetch.js';

export default function BlogDetails() {
  const { slug } = useParams();
  const { data } = useFetch(() => portfolioApi.blog(slug), { title: 'Designing Secure Portfolio APIs', content: '## MVC matters\n\nClean boundaries keep product work fast and maintainable.' });
  const blog = data?.item || data;

  return (
    <PageTransition>
      <SEO title={blog.title} />
      <section className="section-pad pt-32">
        <div className="container-shell max-w-4xl">
          <Card>
            <p className="eyebrow">Article</p>
            <h1 className="mt-4 text-4xl font-black sm:text-6xl">{blog.title}</h1>
            <article className="prose prose-invert mt-8 max-w-none text-white/75"><ReactMarkdown>{blog.content}</ReactMarkdown></article>
          </Card>
        </div>
      </section>
    </PageTransition>
  );
}
