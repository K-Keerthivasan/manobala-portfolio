/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1f2937', // Example gray-800
                accent: '#4f46e5',  // Indigo-600
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
            spacing: {
                128: '32rem',
            },
            borderRadius: {
                xl: '1rem',
            },
        },
    },
    darkMode: 'class', // or 'media' if you prefer OS-based
    plugins: [],
}
