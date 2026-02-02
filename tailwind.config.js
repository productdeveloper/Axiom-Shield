/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0e1a',
                surface: '#1a1f2e',
                'green-accent': '#10B981',
                'warning-yellow': '#FCD34D',
                'transparency-bg': '#FFF9E6',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
