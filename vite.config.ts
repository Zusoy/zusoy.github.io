import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import tailwind from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsConfigPaths(), react()],
  css: {
    postcss: {
      plugins: [tailwind()]
    }
  }
})
