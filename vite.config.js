// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  resolve: {
    alias: {
      // You can add custom aliases for your project paths
      '@src': '/src',
      '@components': '/src/components',
      '@styles': '/src/styles',
    },
  },
  server: {
    // You can customize the server settings
    port: 3000,
    open: true,
  },
};
