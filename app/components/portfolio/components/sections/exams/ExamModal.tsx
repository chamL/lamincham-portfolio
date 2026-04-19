"use client";

import { useState } from "react";
import Modal from "../../ui/Modal";
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

export default function ExamModal({
  title,
  fullBio,
  tech,
  images,
  video,
  onClose,
}: Props) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <Modal onClose={onClose}>
        {/* TITLE */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          {title}
        </h2>

        {/* TEXT */}
        <p className="text-white/80 text-sm leading-relaxed">{fullBio}</p>

        {/* VIDEO */}
        {video && (
          <button
            onClick={() => setShowVideo(true)}
            className="
              w-full py-3 mt-4
              rounded-lg
              bg-gradient-to-r from-cyan-500 to-purple-500
              text-white font-semibold
              hover:opacity-90 transition
            "
          >
            ▶ Watch Demo
          </button>
        )}

        {/* IMAGES */}
        {images && images.length > 0 && (
          <div className="space-y-3 mt-6">
            <h4 className="text-white/70 text-sm">Preview</h4>
            <ImageSlider images={images} />
          </div>
        )}

        {/* TECH */}
        <div className="space-y-3 mt-6">
          <h4 className="text-white/70 text-sm">Technologies</h4>

          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="
                  px-3 py-1 text-xs
                  bg-white/10 border border-white/10
                  rounded-full
                  text-blue-300
                "
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Modal>

      {/* VIDEO MODAL */}
      {showVideo && video && (
        <VideoModal video={video} onClose={() => setShowVideo(false)} />
      )}
    </>
  );
}
