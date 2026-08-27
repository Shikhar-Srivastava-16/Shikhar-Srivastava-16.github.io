import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/shikhar-srivastava-16.github.io/', // must match your repo name
    plugins: [react()],
})
