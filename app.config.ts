import { cloudflare } from 'unenv'
// app.config.ts
import { defineConfig } from '@tanstack/start/config'

export default defineConfig({
  server: {
    // preset: 'node-server',
    preset: 'cloudflare-pages',
    unenv: cloudflare,
  },
})
