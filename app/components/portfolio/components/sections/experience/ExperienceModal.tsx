"use client";

import Modal from "../../ui/Modal";
import ImageSlider from "../../ui/ImageSlider";

type Props = {
  title: string;
  fullBio: string;
  images?: string[];
  onClose: () => void;
};

export default function ExperienceModal({
  title,
  fullBio,
  images = [],
  onClose,
}: Props) {
  return (
    <Modal onClose={onClose}>
      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          {title}
        </h2>

        <div className="mt-3 h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* TEXT */}
      <p className="text-white/80 text-sm leading-relaxed mb-6">
        {fullBio}
      </p>

      {/* IMAGES */}
      {images.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-white/60 text-xs uppercase">Photos</h4>
          <ImageSlider images={images} />
        </div>
      )}
    </Modal>
  );
}