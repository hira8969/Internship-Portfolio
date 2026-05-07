import { siteConfig } from '../../config/site.js';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="theme-muted container-shell flex flex-col justify-between gap-4 text-sm sm:flex-row">
        <p>Copyright {new Date().getFullYear()} {siteConfig.name}. Built for real-world deployment.</p>
        <p>React | Node | MongoDB | Cloudinary | Vercel | Render</p>
      </div>
    </footer>
  );
}
