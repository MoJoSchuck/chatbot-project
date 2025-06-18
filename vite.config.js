import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/chatbot-project/',
    plugins: [react({
        babel: {
            plugins: [['babel-plugin-react-compiler', { target: '19' }]],
        },
    })],
})
