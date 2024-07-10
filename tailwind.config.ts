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
        darkcoral: '#de7852',
        bgcolor: 'rgb(154, 166, 192)'
      },
      gridTemplateColumns: {
        '16': 'repeat(auto-fill, 300px)',
      },
      backgroundImage: {
        'pattern': "url('/backgroundimage.jpg')"
      }
  },
  plugins: [],
  }
}

export default config;
