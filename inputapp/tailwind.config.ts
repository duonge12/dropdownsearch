import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      spacing: {
        '100': '200px', // Example value, adjust as needed
      },
      colors:{
        grey:{
          20:'rgba(54, 54, 54, 1)',
          50:'rgba(128, 128, 128, 1)',
          70:'rgba(179, 179, 179, 1)',

        },
        mint:{
          300:'rgba(171, 255, 195, 1)',

        }
      }
    },
  },
  plugins: [],
};
export default config;
