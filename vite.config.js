import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      }
    })
  ],
  ...(mode === 'development' && {
    server: {
      host: '0.0.0.0',
      strictPort: true,
      port: 5173,
      allowedHosts: ['.ngrok-free.app'],
    }
  })
}))
