import { Link, Outlet } from 'react-router-dom';
import { BarChart3, FileText, FolderKanban, LogOut, MessageSquare, Star, UserCog } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';

const links = [
  ['Dashboard', BarChart3],
  ['Projects', FolderKanban],
  ['Blogs', FileText],
  ['Contacts', MessageSquare],
  ['Testimonials', Star],
  ['Roles', UserCog]
];

export default function AdminLayout() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-ink text-pearl">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl lg:block">
        <Link to="/admin/dashboard" className="gradient-text text-xl font-black">Admin Command</Link>
        <div className="mt-8 grid gap-2">
          {links.map(([label, Icon]) => <button key={label} className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-white/75 hover:bg-white/10"><Icon size={18} />{label}</button>)}
        </div>
        <button onClick={logout} className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3"><LogOut size={18} />Logout</button>
      </aside>
      <main className="p-4 lg:ml-72 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
}
