"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ExamModal from "./ExamModal";

type Props = {
  title: string;
  type: string;
  shortBio: string;
  fullBio: string;
  tech: string[];
  images?: string[];
  video?: string;
  bg: string;
};

function ExamCard({
  title,
  type,
  shortBio,
  fullBio,
  tech,
  images,
  video,
  bg,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setOpen(true)}
        className={`
                    h-full min-h-[280px]
                    flex flex-col justify-between

                    ${bg}
                    backdrop-blur-xl

                    border border-white/10
                    rounded-xl p-5

                    shadow-soft
                    hover:shadow-xl
                    hover:-translate-y-1
                    hover:scale-[1.02]
                    active:scale-[0.98]

                    cursor-pointer

                    transition-all duration-300
                `}
      >
        {/* CONTENT */}
        <div>
          <span className="text-[11px] text-white/60 uppercase tracking-wider">
            {type}
          </span>

          <h3 className="text-lg font-bold text-white mt-2">{title}</h3>

          <p className="mt-3 text-[13px] text-white/80 leading-relaxed">
            {shortBio}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((t, i) => (
              <span
                key={i}
                className="
                                    text-[11px] px-2 py-1
                                    bg-white/10
                                    border border-white/10
                                    rounded-full
                                    text-blue-300
                                "
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* VISUAL BUTTON (ikke klikkbar) */}
        <div
          className="
                        mt-6 flex items-center justify-between
                        text-sm text-blue-400
                        border-t border-white/10 pt-4
                        opacity-80
                    "
        >
          View details
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <ExamModal
          title={title}
          fullBio={fullBio}
          tech={tech}
          images={images}
          video={video}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default ExamCard;
