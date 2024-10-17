import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avenir: 'var(--font-avenir)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
        },
      },
      colors: {
        crayola: 'var(--crayola)',
        purple_taupe: 'var(--purple-taupe)',
        dark_gray: 'var(--Dark-charcoal)',
        light_gray: 'var(--philippine-gray)',
      },
      boxShadow: {
        crayola_shd: '0 0 20px #eeb3d2',
        crayola_sm_shd: '0 0 20px  #79506b',
      },
      padding: {
        'btn-sm-x': '0.33rem',
        'btn-sm-y': '0.1rem',
        'btn-md-x': '1.5rem',
        'btn-md-y': '0.75rem',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/bgBlack.jpg')",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '-1px 1px 0 var(--philippine-gray),1px 1px 0 var(--philippine-gray),1px -1px 0 var(--philippine-gray),-1px -1px 0 var(--philippine-gray)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;
