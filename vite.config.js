import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base is set to '/' for custom domain (motamiezmobil.com)
  // If deploying without custom domain, set base: '/motamiez/'
  base: '/',
})
