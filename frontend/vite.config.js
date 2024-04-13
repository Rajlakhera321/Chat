import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    proxy: {
      '/posts': "https://jubilant-umbrella-q57gjjj7r7qh94qq-3000.app.github.dev/api/v1/auth"
    }
  }
})
