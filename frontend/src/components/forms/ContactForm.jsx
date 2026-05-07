import { useState } from 'react';
import toast from 'react-hot-toast';
import { Send } from 'lucide-react';
import Button from '../ui/Button.jsx';
import { portfolioApi } from '../../services/api.js';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const update = (event) => setForm((value) => ({ ...value, [event.target.name]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await portfolioApi.contact(form);
      toast.success('Message sent successfully');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error(error.message || 'Unable to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="glass-panel grid gap-4 rounded-2xl p-6">
      {['name', 'email', 'subject'].map((field) => (
        <input key={field} name={field} value={form[field]} onChange={update} required={field !== 'subject'} type={field === 'email' ? 'email' : 'text'} placeholder={field[0].toUpperCase() + field.slice(1)} className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:border-aurora-cyan" />
      ))}
      <textarea name="message" value={form.message} onChange={update} required rows="6" placeholder="Tell me about your project" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:border-aurora-cyan" />
      <Button disabled={loading} className="w-full"><Send size={18} /> {loading ? 'Sending...' : 'Send Message'}</Button>
    </form>
  );
}
