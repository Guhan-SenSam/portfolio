import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import Terminal from 'vite-plugin-terminal';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    ...(mode === 'development' ? [Terminal({ console: 'terminal' })] : [])
  ],
}));
