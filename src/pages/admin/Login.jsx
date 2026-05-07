import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Lock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';
import Button from '../../components/ui/Button.jsx';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const submit = async (event) => {
    event.preventDefault();
    try {
      await login(form);
      navigate(location.state?.from?.pathname || '/admin/dashboard', { replace: true });
    } catch (error) {
      toast.error(error.message || 'Login failed');
    }
  };

  return (
    <main className="grid min-h-screen place-items-center bg-ink p-4 text-pearl">
      <form onSubmit={submit} className="glass-panel w-full max-w-md rounded-2xl p-8">
        <p className="eyebrow">Admin</p>
        <h1 className="mt-3 text-4xl font-black">Secure login</h1>
        <input className="mt-8 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="mt-4 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3" type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <Button className="mt-6 w-full"><Lock size={18} /> Login</Button>
      </form>
    </main>
  );
}
