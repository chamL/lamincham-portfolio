"use client";

import Image from "next/image";
import potrait from "@/public/images/hero/dark_dress.webp";
import SosialsButtons from "@/app/components/portfolio/components/ui/SosialsButtons";

type Props = {
  open: boolean;
};

function ProfileCard({ open }: Props) {
  return (
    <div
      className={`
        relative w-[320px] 
    
        backdrop-blur-3xl
        bg-white/40
    
        border border-white/10 
        rounded-br-xl border-t-0 border-l-0
    
        p-5 text-center    
        
        ${open
          ? "translate-y-0 opacity-100"
          : "-translate-y-[90%] opacity-0 pointer-events-none"
        }
    `}
    >
      {/* OVERLAY (BAK) */}
      <div
        className="
            absolute inset-0
            bg-black/50 rounded-br-xl
            z-0
            pointer-events-none
        "
      />

      {/* CONTENT (OVER) */}
      <div className="relative space-y-4">
        {/* NAME */}
        <h3
          className="
                text-white font-bold text-lg
                bg-gradient-to-r from-blue-400 to-purple-400
                bg-clip-text text-transparent
            "
        >
          Lamin Cham
        </h3>

        {/* IMAGE */}
        <div
          className="
                relative w-full h-48
                rounded-xl overflow-hidden
    
                border border-white/10
                shadow-inner
            "
        >
          <Image
            src={potrait}
            alt="portrait"
            sizes="100vw"
            fill
            className="object-cover object-top" />
        </div>

        {/* TEXT */}
        <p className="text-white/90 text-sm leading-relaxed">
          Use the buttons below to find my LinkedIn, GitHub, and other
          platforms. You can also access my email, phone number, and download my
          CV.
        </p>

        {/* SOCIALS */}
        <div className="pt-2 border-t border-white/10">
          <SosialsButtons />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
