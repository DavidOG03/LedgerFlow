// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'inject-preloads',
      transformIndexHtml(html, ctx) {
        if (!ctx.bundle) return html

        const cssFile = Object.keys(ctx.bundle).find(f => f.endsWith('.css'))
        const jsFile = Object.keys(ctx.bundle).find(f => f.endsWith('.js') && f.includes('index'))

        const tags = []
        if (cssFile) tags.push(`<link rel="preload" as="style" href="/${cssFile}">`)
        if (jsFile) tags.push(`<link rel="modulepreload" href="/${jsFile}">`)

        return html.replace('</head>', `${tags.join('\n')}\n</head>`)
      }
    }
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('react/')) {
              return 'vendor'
            }
            if (id.includes('react-router')) {
              return 'router'
            }
            if (id.includes('gsap')) {
              return 'gsap'
            }
          }
        }
      }
    }
  }
})