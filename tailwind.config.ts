import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //  bg-brand-white, text-brand-green, etc.
        'brand-white': "#DDDDDD",   
        'brand-grey': "#C1BDBD",    
        'brand-green': "#496B60",   
        'brand-dark': "#333533",    
        'brand-black': "#202020",   
        brand: "#496B60", 
      },
      fontFamily: {
        museo: ["Museo", "sans-serif"],
        museosans: ["Museo Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
});

export default config;
