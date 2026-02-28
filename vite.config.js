import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    // This forces maps during development
    devSourcemap: true,
  },
  build: {
    // Ensure this is the BOOLEAN true, not a string 'true'
    sourcemap: true, 
    // This forces CSS to be treated as a separate asset
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // This ensures the map is a separate file and not inlined
        sourcemap: true
      }
    }
  }
})