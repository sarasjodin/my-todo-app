import { defineConfig } from 'vite';

export default defineConfig({
  base: '/my-todo-app/', // Viktigt! Snedstreck i början och slut
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    },
    sourcemap: true
  },
  assetsInclude: ['**/*.avif', '**/*.webp', '**/*.jpg'] // Bildformat som ska hanteras av Vite
});
