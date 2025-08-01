import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.{jsx,tsx}",
    })
  ],
  server: {
    hmr: {
      overlay: false // Disable HMR error overlay for cleaner development
    }
  }
})
