import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/api/proxy': {
        target: 'https://crm.europecalling.co',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/proxy/, '/api'),
      },
      '/api/submit-form': {
        target: 'https://web.europecalling.co',
        changeOrigin: true,
        secure: true,
        rewrite: () => '/submit-form.php',
      },
    },
  },
  preview: {
    host: "::",
    port: 8080,
    proxy: {
      '/api/proxy': {
        target: 'https://crm.europecalling.co',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/proxy/, '/api'),
      },
      '/api/submit-form': {
        target: 'https://web.europecalling.co',
        changeOrigin: true,
        secure: true,
        rewrite: () => '/submit-form.php',
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
}));
