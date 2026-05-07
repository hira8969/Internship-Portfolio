import { Link, NavLink } from 'react-router-dom';
import { Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../../config/site.js';
import { useTheme } from '../../context/ThemeContext.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/45 backdrop-blur-2xl">
      <nav className="container-shell flex h-16 items-center justify-between">
        <Link to="/" className="text-lg font-black tracking-tight">
          <span className="gradient-text">{siteConfig.name}</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <NavLink key={item.href} to={item.href} className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-semibold transition ${isActive ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white'}`}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="ghost-button !px-3 !py-2" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="ghost-button !px-3 !py-2 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
            <Menu size={18} />
          </button>
        </div>
      </nav>
      {open && (
        <div className="container-shell pb-4 lg:hidden">
          <div className="glass-panel grid rounded-2xl p-2">
            {siteConfig.nav.map((item) => <NavLink onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-semibold" key={item.href} to={item.href}>{item.label}</NavLink>)}
          </div>
        </div>
      )}
    </header>
  );
}
