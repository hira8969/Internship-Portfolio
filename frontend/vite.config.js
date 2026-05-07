import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const frontendRoot = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(frontendRoot, '..');

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, projectRoot, '');
  const apiProxyTarget = env.VITE_API_PROXY_TARGET || 'http://localhost:5000';

  return {
    root: frontendRoot,
    envDir: projectRoot,
    plugins: [react()],
    server: {
      port: 5173,
      proxy: {
        '/api': apiProxyTarget
      }
    },
    build: {
      sourcemap: true,
      chunkSizeWarningLimit: 1200,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            motion: ['framer-motion', 'gsap'],
            three: ['three', '@react-three/fiber', '@react-three/drei']
          }
        }
      }
    }
  };
});
