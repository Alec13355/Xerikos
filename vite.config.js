import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' keeps asset paths relative so the dist works on any host / subpath.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
