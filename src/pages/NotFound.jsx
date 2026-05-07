import { Link } from 'react-router-dom';
import PageTransition from '../components/animations/PageTransition.jsx';

export default function NotFound() {
  return (
    <PageTransition>
      <section className="grid min-h-screen place-items-center px-4 text-center">
        <div>
          <p className="eyebrow">404</p>
          <h1 className="mt-4 text-6xl font-black">Page not found</h1>
          <Link className="premium-button mt-8" to="/">Back home</Link>
        </div>
      </section>
    </PageTransition>
  );
}
