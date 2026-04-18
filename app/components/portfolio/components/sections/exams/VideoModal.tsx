"use client";

import { X } from "lucide-react";

type Props = {
  video: string;
  onClose: () => void;
};

function VideoModal({ video, onClose }: Props) {
  return (
    <div
      onClick={onClose}
      className="
                fixed inset-0 z-[999]
                flex items-center justify-center

                bg-bg backdrop-blur-sm
                p-6   
            "
    >
      {/* CONTENT */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
                    relative
                    w-full max-w-5xl
                "
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
                        absolute top-2 right-2 z-10

                        p-2 rounded-full
                        bg-black/50 backdrop-blur-md
                        border border-white/20

                        hover:bg-red-500/80

                        transition
                    "
        >
          <X className="text-white" size={18} />
        </button>

        {/* VIDEO */}
        <video
          src={video}
          controls
          autoPlay
          className="
                        w-full
                        max-h-[80vh]

                        rounded-xl
                        shadow-[0_20px_60px_rgba(0,0,0,0.8)]

                        border border-white/10
                    "
        />
      </div>
    </div>
  );
}

export default VideoModal;
