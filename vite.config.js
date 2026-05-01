import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Social-Media-Dashboard/',
  build: {
    outDir: 'docs',
  },
  plugins: [
    tailwindcss(),
  ],
})
