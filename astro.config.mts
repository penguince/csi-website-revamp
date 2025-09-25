// @ts-check
import { defineConfig } from 'astro/config';
import type { AstroUserConfig } from "astro";
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    imageService: 'cloudflare',
    
    // Enable platform proxy for development (useful for testing CF features locally)
    platformProxy: {
      enabled: true,
      persist: true // Store binding data locally for development
    },
    
    // Configure routes for better static asset handling
    routes: {
      extend: {
        // Exclude static assets from server rendering for better performance
        exclude: [
          { pattern: '/images/*' },
          { pattern: '/fonts/*' },
          { pattern: '/css/*' },
          { pattern: '/js/*' },
          { pattern: '/favicon.ico' },
          { pattern: '/robots.txt' },
          { pattern: '/sitemap.xml' }
        ]
      }
    }
  }),
  
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Keep minification enabled for production, but you can disable for debugging
      minify: true
    }
  },
  
  output: 'static',
} as const satisfies AstroUserConfig);