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
        avenir:'var(--font-avenir)'
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
        crayola:'var(--crayola)',
        purple_taupe:'var(--purple-taupe)',
        dark_gray:'var(--Dark-charcoal)',
        light_gray:'var(--philippine-gray)',


      },
      boxShadow: {
        crayola_shd: '0 0 20px #eeb3d2', 
        crayola_sm_shd: '0 0 20px  #54394b',  
      },
      padding: {
        'btn-sm-x': '0.75em',
        'btn-sm-y': '0.4em', 
        'btn-md-x': '1.5em',  
        'btn-md-y': '0.75em',   
      }
    }
  },
  plugins: [
  ],
};
export default config;
