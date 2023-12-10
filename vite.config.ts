import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import path from 'path'

export default defineConfig({
  plugins: [UnoCSS(), react(),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@com': path.resolve(__dirname, './src/components')
    },
  }
})
