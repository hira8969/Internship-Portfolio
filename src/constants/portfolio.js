import { Code2, Database, Figma, Rocket, Sparkles, Terminal } from 'lucide-react';

export const stats = [
  { label: 'Public GitHub repos', value: 20, suffix: '' },
  { label: 'BCA graduation', value: 2027, suffix: '' },
  { label: 'Current year', value: 2, suffix: 'nd' },
  { label: 'Core skills', value: 8, suffix: '+' }
];

export const skillGroups = [
  { name: 'Frontend', icon: Code2, items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Tailwind'], score: 88 },
  { name: 'Backend', icon: Terminal, items: ['Node.js', 'Express', 'REST APIs', 'JWT', 'MVC'], score: 78 },
  { name: 'Database', icon: Database, items: ['MongoDB', 'Mongoose', 'CRUD', 'Data Models'], score: 74 },
  { name: 'Deployment', icon: Rocket, items: ['Vercel', 'Render', 'MongoDB Atlas', 'GitHub'], score: 80 },
  { name: 'AI Tools', icon: Sparkles, items: ['Python', 'Voice Assistant', 'Automation', 'Chatbot'], score: 70 },
  { name: 'UI/UX', icon: Figma, items: ['Responsive UI', 'Landing Pages', 'Dashboards', 'Forms'], score: 82 }
];

export const servicePlans = [
  { name: 'Launch', price: '$899', features: ['Portfolio site', 'CMS basics', 'SEO setup', 'Deployment'] },
  { name: 'Scale', price: '$1,899', featured: true, features: ['Full-stack app', 'Admin dashboard', 'Auth', 'Cloudinary'] },
  { name: 'Enterprise', price: 'Custom', features: ['Architecture', 'Integrations', 'Analytics', 'SLA support'] }
];

export const timeline = [
  { title: 'BCA, Centurion University', date: '2024 - 2027', body: 'Currently in 2nd year, focused on computer applications, web development, programming, and software fundamentals.' },
  { title: '+2 AHS Bachopatti Narha', date: '2022 - 2024', body: 'Completed 11th and 12th with a strong interest in technology and practical computer learning.' },
  { title: '+2 AHS Bachopatti Narha', date: '2020 - 2022', body: 'Completed 9th and 10th, building the academic base for higher studies in computer applications.' }
];

export const defaultProjects = [
  {
    title: 'Abhisek Portfolio',
    category: 'Portfolio Website',
    summary: 'A deployed HTML portfolio website with clean sections and a personal brand focused layout.',
    tags: ['HTML', 'CSS', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1200&q=80',
    sourceUrl: 'https://github.com/hira8969/abhisek-port',
    liveUrl: 'https://abhisek-port.vercel.app'
  },
  {
    title: 'Kartar Mathematics Point',
    category: 'Education Website',
    summary: 'JavaScript based educational website for a mathematics learning brand.',
    tags: ['JavaScript', 'Frontend', 'Education'],
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
    sourceUrl: 'https://github.com/hira8969/kartar-mathematics-point'
  },
  {
    title: 'Accredian Enterprise Page',
    category: 'Landing Page',
    summary: 'TypeScript landing page project focused on enterprise-style layout and frontend structure.',
    tags: ['TypeScript', 'Frontend', 'Landing Page'],
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    sourceUrl: 'https://github.com/hira8969/Accredian-Enterprise-Page',
    liveUrl: 'https://accredian-enterprise-page-th4w-b9rdxmwjg-hira8969s-projects.vercel.app'
  },
  {
    title: 'Portfolio Web',
    category: 'Portfolio Website',
    summary: 'Personal portfolio website deployed on Vercel with responsive frontend sections.',
    tags: ['HTML', 'CSS', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    sourceUrl: 'https://github.com/hira8969/Portfolio-web',
    liveUrl: 'https://portfolio-web-pink-nine.vercel.app'
  },
  {
    title: 'Grocery Store Hira',
    category: 'Web App',
    summary: 'Grocery store frontend project with product-focused pages and deployed demo.',
    tags: ['JavaScript', 'Frontend', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    sourceUrl: 'https://github.com/hira8969/Grocery-Store-Hira',
    liveUrl: 'https://grocery-store-hira-4.onrender.com/'
  },
  {
    title: 'AI Assistance',
    category: 'AI / Python',
    summary: 'Voice and chatbot assistant project that helps perform tasks through conversational interaction.',
    tags: ['Python', 'AI', 'Voice Assistant'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    sourceUrl: 'https://github.com/hira8969/Ai-assistence'
  }
];
