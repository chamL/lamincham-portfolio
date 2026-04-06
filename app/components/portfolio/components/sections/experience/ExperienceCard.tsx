"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ExperienceModal from "./ExperienceModal";

type Props = {
  title: string;
  dates: string;
  shortBio: string;
  fullBio: string;
  images?: string[];
};

function ExperienceCard({ title, dates, shortBio, fullBio, images }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="
                    group
                    relative w-full text-left

                    flex gap-4

                    bg-black/20 backdrop-blur-xl
                    border border-white/10
                    rounded-xl shadow-insetStrong

                    p-5

                    transition-all duration-300
                    hover:bg-black/40
                    hover:shadow-strong
                "
      >
        {/* LEFT STRIPE */}
        <div
          className="
                    w-1 rounded-full
                    bg-gradient-to-b from-cyan-400 to-purple-500
                "
        />

        {/* CONTENT */}
        <div className="flex flex-col flex-1">
          {/* DATE */}
          <span
            className="
                        text-[11px]
                        text-white/40
                        uppercase tracking-widest
                    "
          >
            {dates}
          </span>

          {/* TITLE */}
          <h3
            className="
                        text-lg font-bold mt-1 text-white
                        group-hover:text-cyan-400
                        transition
                    "
          >
            {title}
          </h3>

          {/* TEXT */}
          <p
            className="
                        mt-3 text-sm text-white/70 leading-relaxed
                        max-w-md
                    "
          >
            {shortBio}
          </p>

          {/* CTA */}
          <div
            className="
                        mt-4 flex items-center gap-2

                        text-sm text-white/50
                        group-hover:text-purple-400

                        transition
                    "
          >
            View details
            <ArrowUpRight
              size={16}
              className="
                                transition-transform duration-300
                                group-hover:translate-x-1 group-hover:-translate-y-1
                            "
            />
          </div>
        </div>
      </button>

      {modalOpen && (
        <ExperienceModal
          title={title}
          fullBio={fullBio}
          images={images}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

export default ExperienceCard;
