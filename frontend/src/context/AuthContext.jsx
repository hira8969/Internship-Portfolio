import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { authApi } from '../services/api.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      setLoading(false);
      return;
    }
    authApi.me().then((data) => setUser(data.data.user)).catch(() => setUser(null)).finally(() => setLoading(false));
  }, []);

  const value = useMemo(() => ({
    user,
    loading,
    login: async (credentials) => {
      const data = await authApi.login(credentials);
      localStorage.setItem('accessToken', data.data.accessToken);
      setUser(data.data.user);
      return data;
    },
    logout: async () => {
      await authApi.logout().catch(() => {});
      localStorage.removeItem('accessToken');
      setUser(null);
    }
  }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
