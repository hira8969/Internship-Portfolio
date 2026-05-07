import { ArrowDown, Download, Github, Linkedin, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button.jsx';
import { siteConfig } from '../../config/site.js';
import { stats } from '../../constants/portfolio.js';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="container-shell grid min-h-[calc(100vh-6rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">Full-stack portfolio platform</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Hi, I am <span className="gradient-text">Hiralal Kumar</span>.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="theme-muted mt-6 max-w-2xl text-lg leading-8">
            {siteConfig.description}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-8 flex flex-wrap gap-3">
            <Button><Rocket size={18} /> Hire Me</Button>
            <a className="ghost-button" href="/resume.pdf" download><Download size={18} /> Resume</a>
            <a className="ghost-button !px-4" href={siteConfig.socials.github}><Github size={18} /></a>
            <a className="ghost-button !px-4" href={siteConfig.socials.linkedin}><Linkedin size={18} /></a>
          </motion.div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.06 }} className="glass-panel rounded-2xl p-4">
                <div className="text-3xl font-black">{stat.value}{stat.suffix ?? '+'}</div>
                <div className="theme-subtle mt-1 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9, rotate: -4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8 }} className="relative mx-auto aspect-square w-full max-w-lg">
          <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-aurora-cyan via-aurora-blue to-aurora-pink opacity-80 blur-2xl" />
          <div className="glass-panel relative flex h-full items-center justify-center overflow-hidden rounded-[2rem]">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.14),transparent)]" />
            <img className="h-full w-full object-cover" src={siteConfig.profileImage} alt="Hiralal Kumar" />
          </div>
        </motion.div>
      </div>
      <a href="#featured" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce rounded-full border border-white/15 p-3"><ArrowDown size={18} /></a>
    </section>
  );
}
