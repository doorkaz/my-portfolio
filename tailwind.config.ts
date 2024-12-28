import type { Config } from 'tailwindcss'

const heroSectionImagePath = '/assets/images/hero-section-background.jpg'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styled/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      backgroundImage: {
        'hero-section': `url(${heroSectionImagePath})`
      }
    }
  },
  plugins: []
} satisfies Config
