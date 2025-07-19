import { defineConfig } from 'vite';

export default defineConfig({
  base: '/my-todo-app/', // Viktigt! Snedstreck i början och slut
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});
