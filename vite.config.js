import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base solo para gh-pages, en local (npm run dev) queda en /
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === 'build' ? '/supermercado-diego-alvarez-PFY2202/' : '/',
}))
