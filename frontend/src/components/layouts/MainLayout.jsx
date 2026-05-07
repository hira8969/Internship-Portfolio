import { Outlet } from 'react-router-dom';
import Particles from '../animations/Particles.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function MainLayout() {
  return (
    <>
      <Particles />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
