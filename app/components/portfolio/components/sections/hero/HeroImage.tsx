"use client";

import { useState } from "react";
import Image from "next/image";
import { RotateCw } from "lucide-react";

import potrait from "@/public/images/hero/potrait.jpg";
import imageTwo from "@/public/images/hero/white_dress_three.png";

function HeroImage() {
    const [flipped, setFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setFlipped((prev) => !prev);

        setTimeout(() => {
            setIsAnimating(false);
        }, 700); // samme som animation duration
    };

    return (
        <div className="relative w-full max-w-xs aspect-[2/3] perspective">

            <div
                className={`
          relative w-full h-full
          transition-transform duration-700
          transform-style preserve-3d
          ${flipped ? "rotate-y-180" : ""}
        `}
            >
                <div className="absolute inset-0 backface-hidden pointer-events-none">
                    <Image
                        src={potrait}
                        alt="front"
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover rounded-xl"
                    />
                </div>

                <div className="absolute inset-0 rotate-y-180 backface-hidden pointer-events-none">
                    <Image
                        src={imageTwo}
                        alt="back"
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover rounded-xl"
                    />
                </div>
            </div>

            <button
                onClick={handleClick}
                className={`
          absolute right-3 bottom-3 z-50
          bg-red-500 w-12 h-12
          flex items-center justify-center
          rounded-xl shadow-lg
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