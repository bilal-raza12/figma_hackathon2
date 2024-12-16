import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        satoshibold:["satoshiBold" , "integralCf"],
        integralcfbold:["integralCFbold","sansserif"],
        integralCfregular:["integralCf-Regular","sans serif"],
        satoshiregular:["satoshi-regular","sans serif"],
        satoshimedium:["satoshi-medium","sans serif"],


       
      }
    },
  },
  plugins: [],
} satisfies Config;
