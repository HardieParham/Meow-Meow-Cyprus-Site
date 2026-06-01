import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        pets: 'pets.html',
        contact: 'contact.html',
      }
    }
  }
})