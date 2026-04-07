"use client";

import { useState } from "react";
import Image from "next/image";
import { RotateCw } from "lucide-react";

import potrait from "@/public/images/hero/potrait.jpg";
import imageTwo from "@/public/images/hero/white_dress_three.png";

function HeroImage() {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="relative w-full max-w-xs aspect-[2/3] perspective">

            {/* FLIP CARD */}
            <div
                className={`
          relative w-full h-full 
          transition-transform duration-700
          transform-style preserve-3d
          ${flipped ? "rotate-y-180" : ""}
        `}
            >
                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden pointer-events-none">
                    <Image
                        src={potrait}
                        alt="portrait front"
                        sizes="(max-width: 768px) 100vw, 300px"
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>

                {/* BACK */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden pointer-events-none">
                    <Image
                        src={imageTwo}
                        alt="portrait back"
                        sizes="(max-width: 768px) 100vw, 300px"
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>
            </div>

            {/* BUTTON */}
            <button
                onClick={() => setFlipped(!flipped)}
                className={`
          absolute right-3 bottom-3
          z-50
          bg-red-500
          w-12 h-12
          flex items-center justify-center
          rounded-xl
          shadow-lg
          active:scale-90
          transition-all duration-300
          ${flipped ? "rotate-180" : ""}
        `}
            >
                <RotateCw size={20} />
            </button>
        </div>
    );
}

export default HeroImage;