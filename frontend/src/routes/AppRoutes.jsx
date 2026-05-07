import { lazy } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from '../components/layouts/MainLayout.jsx';
import AdminLayout from '../components/layouts/AdminLayout.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

const Home = lazy(() => import('../pages/Home.jsx'));
const About = lazy(() => import('../pages/About.jsx'));
const Skills = lazy(() => import('../pages/Skills.jsx'));
const Projects = lazy(() => import('../pages/Projects.jsx'));
const Services = lazy(() => import('../pages/Services.jsx'));
const Blog = lazy(() => import('../pages/Blog.jsx'));
const BlogDetails = lazy(() => import('../pages/BlogDetails.jsx'));
const Testimonials = lazy(() => import('../pages/Testimonials.jsx'));
const Contact = lazy(() => import('../pages/Contact.jsx'));
const Login = lazy(() => import('../pages/admin/Login.jsx'));
const Dashboard = lazy(() => import('../pages/admin/Dashboard.jsx'));
const NotFound = lazy(() => import('../pages/NotFound.jsx'));

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogDetails />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="admin/login" element={<Login />} />
        <Route element={<ProtectedRoute roles={['admin']} />}>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
