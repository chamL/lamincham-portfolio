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
                className={`absolute -left-8 bottom-0 -translate-y-1/2 z-20 bg-red-500 p-2 rounded-md shadow-md 
                            transition-all duration-500 ease-in-out hover:scale-110 ${flipped ? "rotate-180" : ""
                    }`}
            >
                {flipped ? <RotateCw size={22} /> : <RotateCw size={22} />}
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
