import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      screens: {
        'xs': '450px',
        'iPad': { 'raw': '(min-height: 1024px)' },
      },
      fontFamily: {
        avenir: 'var(--font-avenir)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.75rem",
          sm: "2rem",
          md: "3rem",
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
        inner: ' inset 0 0 10px #eeb3d2',
      },
      padding: {
        'btn-sm-x': '0.45rem',
        'btn-sm-y': '0.3rem',
        'btn-md-x': '1.5rem',
        'btn-md-y': '0.75rem',
        'btn-x': '1rem',
        'btn-y': '0.5rem',
      },
      margin: {
        'accordingToContainer-lg': "4rem",
      },
      backgroundImage: {
        'hero-pattern': "url('/images/bgBlack.jpg')",
        'hero-hiring': "url('/images/bgHiring.jpeg')",
        'hero-rooms': "url('/images/bgRooms.jpg')",
        'hero-subscribe':"url('/images/bgSubscribe.jpg')",
        'splattered-gray':"url('/images/bg-splattered-gray.jpeg')",
        'hero-cover':"url('/images/bg-cover.jpg')",
        'hero-contact':"url('/images/bg-contact.jpg')",


      }, 
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "rotate-text": "rotate-text 20s linear infinite",
        "arrow": "arrow 1s linear  infinite",
        "symbol":"symbol 2.5s ease-out infinite"
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "rotate-text": {
          from: { transform: "rotate(0)" },
          to:
            { transform: "rotate(360deg)" },
        },
        "arrow": {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(3px)" },
          "50%": { transform: "translateX(0px)" },
          "75%": { transform: "translateX(-3px)" },
          "100%": { transform: "translateX(0)" }
        },
        "symbol": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(5px)" },
          "100%": { transform: "translateY(0)" }
        }



      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '-0.4px 0.4px 0 var(--philippine-gray),0.4px 0.4px 0 var(--philippine-gray),0.4px -0.4px 0 var(--philippine-gray),-0.4px -0.4px 0 var(--philippine-gray)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;
