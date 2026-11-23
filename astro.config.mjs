// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

// Astro bygger siderne som statisk HTML (hurtigt, godt til SEO).
// React bruges kun til de "øer", der skal være interaktive.
export default defineConfig({
  integrations: [react()],
})
