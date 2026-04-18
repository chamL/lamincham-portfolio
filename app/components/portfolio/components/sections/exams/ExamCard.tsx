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
    relative  
    h-full min-h-[18rem]
    flex flex-col justify-between

    ${bg}

    bg-white/80 dark:bg-transparent
    backdrop-blur-xl

    rounded-xl p-5

    shadow-soft
    hover:-translate-y-1 hover:scale-[1.02]

    cursor-pointer
    transition-all duration-300

    before:absolute before:inset-0
    before:rounded-xl
    before:bg-gradient-to-br
    before:from-teal-600 before:to-lime-600
    before:opacity-30
    before:pointer-events-none
  `}
      >
        {/* CONTENT */}
        <div>
          <span className="text-[0.6875rem] text-text uppercase tracking-wider">
            {type}
          </span>

          <h3 className="text-lg font-bold text-text mt-2">{title}</h3>

          <p className="mt-3 text-[0.8125rem] text-text leading-relaxed">
            {shortBio}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((t, i) => (
              <span
                key={i}
                className="
                text-xs px-3 py-1
              
                bg-white/60 dark:bg-white/10
                backdrop-blur-md
              
                border border-black/5 dark:border-white/10
                rounded-xl
              
                text-teal-700 dark:text-teal-200
              
                shadow-sm
                hover:shadow-md
              
                transition
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
                        text-sm 
                        text-blue-700 dark:text-teal-500
                        border-t border-border pt-4
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
