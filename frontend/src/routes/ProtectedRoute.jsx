import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function ProtectedRoute({ roles = [] }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="grid min-h-screen place-items-center bg-ink text-pearl">Checking session...</div>;
  if (!user) return <Navigate to="/admin/login" replace state={{ from: location }} />;
  if (roles.length && !roles.includes(user.role)) return <Navigate to="/" replace />;

  return <Outlet />;
}
