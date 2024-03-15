import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    proxy: {
      '/posts': "https://ominous-guacamole-r54vqqq49x4cxpvg-3000.app.github.dev/api/v1/auth"
    }
  }
})
