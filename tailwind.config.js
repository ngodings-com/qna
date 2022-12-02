module.exports =  {
  content: [
    "./src/**/*.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/modules/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}"
  ], 
  theme: {

  },
  themes: [
    // {
    //   ngodings: {
    //     "primary": "#FFFFFF",
    //     "secondary": "#FFFFFF",
    //     "accent": "#FFFFFF",
    //     "neutral": "#FFFFFF",
    //     "base-100": "#FFFFFF",
    //     "info": "#0ea5e9",
    //     "success": "#16a34a",
    //     "warning": "#fbbf24",
    //     "error": "#be123c",
    //   },
    // },
  ],
  plugins: [require("daisyui")],
}
