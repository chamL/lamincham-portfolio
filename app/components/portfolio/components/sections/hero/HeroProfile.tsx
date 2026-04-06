"use client";

import { HeroRightProps } from "@/app/components/portfolio/types/hero";
import SosialsButtons from "../../ui/SosialsButtons";
import HeroImage from "./HeroImage";

function HeroProfile({}: HeroRightProps) {
  return (
    <div className="flex-1  rounded-xl p-6 md:p-10 flex flex-col items-center text-center gap-6">
      {/* TEXT */}
      <div className="space-y-4">
        {/* SMALL INTRO */}
        <p
          className="
    text-white/60
    text-sm md:text-base
    tracking-wide
"
        >
          Hello, my name is
        </p>

        {/* NAME */}
        <h1
          className="
    text-3xl md:text-5xl
    font-bold
    font-permanent_marker
    tracking-wider

    bg-gradient-to-r 
    from-cyan-400 
    via-blue-500 
    to-purple-500

    bg-clip-text text-transparent

    drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]
"
        >
          Lamin Cham
        </h1>

        {/* ROLE */}
        <p
          className="
    text-lg md:text-xl
    text-white/80
    font-semibold
    tracking-wide
"
        >
          Frontend Developer
        </p>
      </div>

      {/* IMAGE */}
      <HeroImage />

      {/* DESCRIPTION */}
      <p className="text-white font-permanent_marker max-w-md text-sm md:text-base">
        I’m a developer who enjoys building modern and user-friendly
        applications. I like combining design and code to create smooth,
        interactive experiences. I’m especially interested in frontend and
        UX/UI, and I’m always looking to learn and improve.
      </p>

      {/* SOCIALS */}
      <SosialsButtons />
    </div>
  );
}

export default HeroProfile;
