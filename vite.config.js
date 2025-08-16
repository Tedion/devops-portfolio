import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: process.env.VITE_BASE ?? '/devops-portfolio/',
	server: {
		proxy: {
			'/api': 'http://localhost:5000'
		}
	},
	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: true
	}
})

