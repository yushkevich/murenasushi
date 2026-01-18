import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Grid column spans for gallery
    'col-span-1', 'col-span-2', 'col-span-3', 'col-span-4', 'col-span-6',
    'md:col-span-2', 'md:col-span-3', 'md:col-span-4',
    'lg:col-span-2', 'lg:col-span-3', 'lg:col-span-4', 'lg:col-span-6',
    // Grid row spans for gallery
    'row-span-2', 'row-span-3', 'row-span-4',
    'md:row-span-2', 'md:row-span-3', 'md:row-span-4',
    'lg:row-span-2', 'lg:row-span-3', 'lg:row-span-4',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'Arial', 'Helvetica', 'sans-serif'],
        'rangoflys': ['UT Rangoflys', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        charcoal: "#07090B",
        slate: "#111318",
        "slate-alt": "#171A21",
        "text-primary": "#F4F5F7",
        "text-muted": "#B8BCC6",
        accent: {
          wine: "#000000",
          blue: "#2E4B63",
        },
      },
      borderColor: {
        default: "rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
