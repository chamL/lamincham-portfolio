/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        /* 🌗 THEME COLORS */
        bg: "var(--bg)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",

        card: "var(--card-bg)",
        "card-muted": "var(--card-muted)",
        "card-strong": "var(--card-strong)",

        border: "var(--card-border)",

        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-soft": "var(--accent-soft)",

        glass: {
          bg: "var(--glass-bg)",
          border: "var(--glass-border)",
          soft: "var(--glass-soft)",
        },

        /* 🎨 STATIC (valgfritt – kan fjernes senere) */
        primary: "#556b2f",
        secondary: "#deb887",
        cardProfile: "#a52a2a",
        cardContact: "#e9967a",
        cardSkills: "#483d8b",
        cardProjects: "#8fbc8f",
        cardTraits: "#c09864",
      },

      fontFamily: {
        mono: ["var(--font-geist-mono)"],
        heading: ["var(--font-poppins)"],
        body: ["var(--font-geist-sans)"],
        sans: ["var(--font-sora)"],
        permanent_marker: ["var(--font-permanent)"],
      },

      boxShadow: {
        soft: "var(--shadow-soft)",
        strong: "var(--shadow-strong)",
        hover: "var(--shadow-hover)",

        glow: "0 0 15px rgba(255,255,255,0.3)",
        insetSoft: "inset 0 2px 10px rgba(0,0,0,0.2)",
        insetStrong: "inset 0 4px 20px rgba(0,0,0,0.5)",

        glass: "0 8px 32px rgba(0,0,0,0.3)",
      },

      backgroundImage: {
        /* 🌫 BASE GLASS */
        "glass-soft": `
          radial-gradient(circle at 50% 50%, var(--glass-soft), transparent 60%)
        `,

        /* 🎨 ACCENT GLASS */
        "glass-accent": `
          radial-gradient(circle at 20% 20%, var(--accent-soft), transparent 50%),
          radial-gradient(circle at 80% 80%, var(--glass-soft), transparent 50%)
        `,

        /* 🔥 STRONG */
        "glass-accent-strong": `
          radial-gradient(circle at 25% 25%, var(--accent-soft), transparent 50%),
          radial-gradient(circle at 75% 75%, var(--accent-soft), transparent 50%)
        `,

        /* 🌙 DEEP */
        "glass-accent-deep": `
          radial-gradient(circle at 30% 30%, var(--accent), transparent 50%),
          radial-gradient(circle at 70% 70%, var(--accent-soft), transparent 50%)
        `,
      },
    },
  },

  plugins: [],
};

module.exports = config;