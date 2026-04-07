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
            {/* BUTTON */}
            <button
                onClick={() => setFlipped(!flipped)}
                className={`
    absolute left-2 bottom-2
    z-30
    bg-red-500
    w-12 h-12
    flex items-center justify-center
    rounded-full
    shadow-lg
    active:scale-90
    transition
  `}
            >
                <RotateCw size={20} />
            </button>

            {/* FLIP CARD */}
            <div
                className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${flipped ? "rotate-y-180" : ""
                    }`}
            >
                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden">
                    <Image
                        src={potrait}
                        alt="portrait front"
                        sizes="100vw"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>

                {/* BACK */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden">
                    <Image
                        src={imageTwo}
                        alt="portrait back"
                        sizes="100vw"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroImage;
