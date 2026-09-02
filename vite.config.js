import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/DesignInterior/', // Apna GitHub repo naam yahan likhein
})
// export default defineConfig({
//   base: '/aapke-repo-ka-naam/', // Apna GitHub repo naam yahan likhein
//   plugins: [react()],
// })