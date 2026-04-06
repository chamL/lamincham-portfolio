"use client";

import { X } from "lucide-react";
import { useState } from "react";
import VideoModal from "./VideoModal";
import ImageSlider from "../../ui/ImageSlider";

type Props = {
  title: string;
  fullBio: string;
  tech: string[];
  images?: string[];
  video?: string;
  onClose: () => void;
};

function ExamModal({ title, fullBio, tech, images, video, onClose }: Props) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      onClick={onClose}
      className="
                fixed inset-0 z-50
                flex items-center justify-center

                bg-black/70 backdrop-blur-sm

                p-6   
            "
    >
      {/* GLOBAL CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="
                    fixed top-6 right-6 z-[60]

                    p-3 rounded-full
                    bg-black/50 backdrop-blur-md
                    border border-white/20

                    hover:bg-red-500/80 hover:scale-110

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
                    w-full max-w-2xl max-h-[90vh]

                    bg-glass-soft backdrop-blur-2xl
                    border border-white/10
                    rounded-xl

                    shadow-[0_20px_60px_rgba(0,0,0,0.6)]

                    p-6
                    overflow-y-auto
                "
      >
        {/* TITLE */}
        <h2
          className="
                    text-2xl font-bold text-white mb-4

                    bg-gradient-to-r from-cyan-400 to-purple-500
                    bg-clip-text text-transparent
                "
        >
          {title}
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
                    text-white/80 text-sm leading-relaxed
                    mb-6
                "
        >
          {fullBio}
        </p>

        {/* TECH */}
        <div className="mb-6">
          <h4 className="text-white text-sm mb-2 opacity-70">Technologies</h4>

          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="
                                    px-3 py-1 text-xs
                                    bg-white/10 border border-white/10
                                    rounded-full text-blue-300
                                "
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* VIDEO */}
        {video && (
          <div className="mb-6">
            <button
              onClick={() => setShowVideo(true)}
              className="
                                w-full py-3
                                rounded-lg
                                bg-gradient-to-r from-cyan-500 to-purple-500
                                text-white font-semibold

                                hover:opacity-90
                                transition
                            "
            >
              ▶ Watch Demo
            </button>
          </div>
        )}

        {/* VIDEO MODAL */}
        {showVideo && video && (
          <VideoModal video={video} onClose={() => setShowVideo(false)} />
        )}

        {/* IMAGES */}
        {images && images.length > 0 && (
          <div>
            <h4 className="text-white text-sm mb-3 opacity-70">Preview</h4>

            <ImageSlider images={images} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ExamModal;
