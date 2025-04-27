import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        "foreground": "var(--foreground)",
        "primary": "var(--primary)",
        "gray": "var(--gray)",
        "black": "var(--black)",
        "border": "var(--border)",
        "lighter": "var(--lighter)",
      },
      spacing: {
        "7.5": "30px",
        "12.5": "50px",
        "15": "60px",
        "25": "100px",
      },
      fontFamily: {
        "DM-Sans": "var(--DM-Sans)",
        "inter": "var(--inter)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
