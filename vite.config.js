import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://juanmmartinez01.github.io/portafolio_juan/',
  plugins: [react()],
})
