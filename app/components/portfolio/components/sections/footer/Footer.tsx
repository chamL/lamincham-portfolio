"use client";

import SosialsButtons from "@/app/components/portfolio/components/ui/SosialsButtons";
import SectionWrapper from "../../ui/SectionWrapper";

function Footer() {
  return (
    <SectionWrapper
      id="footer"
      className="bg-glass-bg border-glass-border shadow-glass backdrop-blur-lg text-white mt-20"
    >
      <footer>
        {/* CONTENT */}
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-8 text-center">
          {/* HEADER */}
          <div className="space-y-3">
            <h2
              className="
                text-xl md:text-2xl font-bold

                bg-gradient-to-r
                from-cyan-500 to-purple-500
                dark:from-cyan-400 dark:to-purple-500

                bg-clip-text text-transparent
              "
            >
              Let’s Connect
            </h2>

            <p className="text-text-muted text-sm md:text-base max-w-xl mx-auto">
              I’ve completed my studies and I’m currently looking for
              opportunities in frontend and UX/UI development.
            </p>
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="flex justify-center">
            <SosialsButtons />
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-border" />

        {/* BOTTOM */}
        <div className="text-center text-xs text-text-muted py-4">
          © {new Date().getFullYear()} Lamin Cham · Built with Next.js, React &
          Tailwind CSS · Deployed on Vercel
        </div>
      </footer>
    </SectionWrapper>
  );
}

export default Footer;
