"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type Props = {
  images: string[];
};

function ImageSlider({ images }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div>
      {/* IMAGE */}
      <div
        className="
                relative w-full
                aspect-[4/3]
                bg-black/0
                flex items-center justify-center
            "
      >
        <Image
          key={images[index]}
          src={images[index]}
          alt="project image"
          fill
          sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 768px) 80vw,
                        (max-width: 1024px) 50vw,
                        33vw
                    "
          className="object-contain"
        />
      </div>

      {/* CONTROLS */}
      <div className="flex items-center justify-between mt-3">
        <button
          onClick={() =>
            setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
          }
          className="px-3 py-1 bg-white/10 rounded-md text-white/70 hover:text-white"
        >
          ←
        </button>

        <span className="text-xs text-white/60">
          {index + 1} / {images.length}
        </span>

        <button
          onClick={() => setIndex((prev) => (prev + 1) % images.length)}
          className="px-3 py-1 bg-white/10 rounded-md text-white/70 hover:text-white"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
