/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      darkMode: "class",
      colors: {
        // 🌗 THEME COLORS
        bg: "var(--bg)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",

        card: "var(--card)",
        "card-muted": "var(--card-muted)",
        "card-strong": "var(--card-strong)",
        "white-soft": "var(--white-soft)",

        border: "var(--card-border)",
        "white-soft": "var(--white-soft)",

        glass: {
          bg: "var(--glass-bg)",
          border: "var(--glass-border)",
        },

        // 🎨 STATIC COLORS (behold disse)
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
        // 🌊 GLASS
        "glass-soft": `
          radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05), transparent 60%)
        `,
        "glass-blue": `
          radial-gradient(circle at 20% 20%, rgba(59,130,246,0.18), transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(255,255,255,0.06), transparent 50%)
        `,
        "glass-blue-strong": `
          radial-gradient(circle at 25% 25%, rgba(37,99,235,0.25), transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(147,197,253,0.15), transparent 50%)
        `,
        "glass-blue-deep": `
          radial-gradient(circle at 30% 30%, rgba(30,64,175,0.35), transparent 50%),
          radial-gradient(circle at 70% 70%, rgba(59,130,246,0.2), transparent 50%)
        `,

        // 🎨 CARD VARIANTS
        "card-blue": `
          radial-gradient(circle at 25% 25%, rgba(59,130,246,0.35), transparent 60%),
          radial-gradient(circle at 75% 75%, rgba(147,197,253,0.15), transparent 60%)
        `,
        "card-purple": `
          radial-gradient(circle at 25% 25%, rgba(139,92,246,0.35), transparent 60%),
          radial-gradient(circle at 75% 75%, rgba(216,180,254,0.15), transparent 60%)
        `,
        "card-indigo": `
          radial-gradient(circle at 25% 25%, rgba(99,102,241,0.35), transparent 60%),
          radial-gradient(circle at 75% 75%, rgba(165,180,252,0.15), transparent 60%)
        `,
        "card-cyan": `
          radial-gradient(circle at 25% 25%, rgba(6,182,212,0.35), transparent 60%),
          radial-gradient(circle at 75% 75%, rgba(103,232,249,0.15), transparent 60%)
        `,
        "card-pink": `
          radial-gradient(circle at 25% 25%, rgba(236,72,153,0.35), transparent 60%),
          radial-gradient(circle at 75% 75%, rgba(251,207,232,0.15), transparent 60%)
        `,
      },

    },
  },
  plugins: [],
};

module.exports = config;