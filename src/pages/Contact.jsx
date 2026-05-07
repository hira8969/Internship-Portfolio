import { MessageCircle } from 'lucide-react';
import SEO from '../components/common/SEO.jsx';
import PageTransition from '../components/animations/PageTransition.jsx';
import ContactForm from '../components/forms/ContactForm.jsx';
import Card from '../components/ui/Card.jsx';
import { siteConfig } from '../config/site.js';

export default function Contact() {
  return (
    <PageTransition>
      <SEO title="Contact" />
      <section className="section-pad pt-32">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-4 text-5xl font-black sm:text-7xl">Let us build something useful.</h1>
            <Card className="mt-8">
              <p className="theme-muted">Name: {siteConfig.name}</p>
              <p className="theme-muted mt-2">Email: {siteConfig.email}</p>
              <p className="theme-muted mt-2">Location: {siteConfig.location}</p>
              <a className="premium-button mt-6" href={`mailto:${siteConfig.email}`}><MessageCircle size={18} /> Email Me</a>
            </Card>
          </div>
          <ContactForm />
        </div>
      </section>
    </PageTransition>
  );
}
