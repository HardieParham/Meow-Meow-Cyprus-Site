import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index',
        about: 'about',
        pets: 'pets',
        contact: 'contact',
        404: '404'
      }
    }
  }
})