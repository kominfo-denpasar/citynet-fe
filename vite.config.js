import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/citynet/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 5173,
    allowedHosts: [             
    	'localhost',            
    	'127.0.0.1',            
    	'citynet.kreatifitas.site',
      'event.denpasarkota.go.id'
    ],
    proxy: {
      "/api-tourism": {
        target: "https://dev-8.denpasarkota.go.id",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-tourism/, ""),
      },
    },                          
  },
  assetsInclude: ['**/*.geojson']
})