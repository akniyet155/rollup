import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/rollup/',
  server: {
    port: 5173,
    open: true,
    strictPort: true,
    host: true,
  },
  preview: {
    port: 5173,
    open: true,
    host: true,
  },
})
