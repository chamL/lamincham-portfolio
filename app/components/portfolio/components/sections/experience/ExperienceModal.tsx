"use client";

import { X } from "lucide-react";
import ImageSlider from "../../ui/ImageSlider";

type Props = {
  title: string;
  fullBio: string;
  images?: string[];
  onClose: () => void;
};

function ExperienceModal({ title, fullBio, images = [], onClose }: Props) {
  return (
    <div
      onClick={onClose}
      className="
                fixed inset-0 z-50

                flex items-center justify-center

                bg-black/80 backdrop-blur-md
                p-4 md:p-8

                animate-in fade-in duration-300
            "
    >
      {/* CLOSE BUTTON (GLOBAL) */}
      <button
        onClick={onClose}
        className="
                    fixed top-6 right-6 z-[60]

                    p-3 rounded-full

                    bg-white/10 backdrop-blur-md
                    border border-white/20

                    hover:bg-red-500/80
                    hover:scale-110

                    transition-all duration-300
                "
      >
        <X className="text-white" size={20} />
      </button>

      {/* CONTENT */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
                    relative
                    w-full max-w-2xl

                    max-h-[85vh]

                    bg-black/40 backdrop-blur-2xl
                    border border-white/10
                    rounded-2xl

                    shadow-[0_30px_80px_rgba(0,0,0,0.8)]

                    p-6 md:p-8

                    overflow-y-auto

                    animate-in zoom-in-95 fade-in duration-300
                "
      >
        {/* HEADER */}
        <div className="mb-6">
          <h2
            className="
                        text-2xl md:text-3xl font-bold

                        bg-gradient-to-r from-cyan-400 to-purple-500
                        bg-clip-text text-transparent
                    "
          >
            {title}
          </h2>

          {/* subtle divider */}
          <div
            className="
                        mt-3 h-[1px] w-full
                        bg-gradient-to-r from-transparent via-white/20 to-transparent
                    "
          />
        </div>

        {/* TEXT */}
        <p
          className="
                    text-white/80 text-sm md:text-base
                    leading-relaxed
                    mb-8
                "
        >
          {fullBio}
        </p>

        {/* IMAGES */}
        {images.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-white/60 text-xs uppercase tracking-wider">
              Photos
            </h4>

            <ImageSlider images={images} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ExperienceModal;
