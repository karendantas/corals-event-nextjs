import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend : {
      colors:{
        coral: '#ff926a',
        darkcoral: '#e88864'
      }
    }
  },
  plugins: [],
};
export default config;
