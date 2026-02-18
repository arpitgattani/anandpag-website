import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  // Optimize for ARM64 compatibility
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  
  // Build configuration for production
  build: {
    outDir: 'dist',
    sourcemap: false, // Disabled for production - reduces build size and prevents source code exposure
    target: 'es2020',
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})