
import { defineConfig } from 'vite';

export default defineConfig({
  // Setting base to './' allows the app to be served from any subfolder (like /Internship-matcher/)
  base: './',
  build: {
    outDir: 'dist',
  }
});
