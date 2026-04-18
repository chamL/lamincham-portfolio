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
    relative w-[20rem]
  
    backdrop-blur-3xl
    bg-glass-bg
  
    border border-glass-border
    rounded-br-xl border-t-0 border-l-0
  
    shadow-glass
  
    p-5 text-center    
  
    transition-all duration-300
  
    ${open
          ? "translate-y-0 opacity-100"
          : "-translate-y-[90%] opacity-0"
        }
  `}
    >
      {/* OVERLAY (BAK) */}
      <div
        className="
            absolute top-0 bottom-0 left-0 right-0
            bg-black/10 rounded-br-xl
           backdrop-blur-3xl
            
        "
      />

      {/* CONTENT (OVER) */}
      <div className="relative space-y-4">
        {/* NAME */}
        <h3
          className="
                text-text font-bold text-lg
                bg-gradient-to-r from-blue-400 to-purple-400
                bg-clip-text 
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
        <p className="text-text text-sm leading-relaxed">
          Use the buttons below to find my LinkedIn, GitHub, and other
          platforms. You can also access my email, phone number, and download my
          CV.
        </p>

        {/* SOCIALS */}
        <div className="pt-2 border-t border-border">
          <SosialsButtons />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
