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
          group relative w-full text-left

          flex gap-4

          bg-card dark:bg-card-strong
          backdrop-blur-xl

          rounded-xl p-5

          shadow-soft
          hover:shadow-hover
          hover:-translate-y-1

          transition-all duration-300

          before:absolute before:inset-0
          before:rounded-xl
          before:bg-gradient-to-br
          before:from-blue-200/40 before:to-purple-200/40
          dark:before:from-sky-700 dark:before:to-teal-400
          before:opacity-30 dark:before:opacity-50
          before:pointer-events-none
        "
      >
        {/* LEFT STRIPE */}
        <div
          className="
            w-1 rounded-full

            bg-gradient-to-b
            from-cyan-500 to-lime-500

            opacity-80
            group-hover:opacity-100
            transition
          "
        />

        {/* CONTENT */}
        <div className="flex flex-col flex-1">
          {/* DATE */}
          <span
            className="
              text-xs
              text-text-muted
              uppercase tracking-wider
            "
          >
            {dates}
          </span>

          {/* TITLE */}
          <h3
            className="
              text-lg font-semibold mt-1 text-text

              group-hover:text-cyan-600
              dark:group-hover:text-cyan-500

              transition
            "
          >
            {title}
          </h3>

          {/* TEXT */}
          <p
            className="
              mt-3 text-sm text-text-muted leading-relaxed
              max-w-md
            "
          >
            {shortBio}
          </p>

          {/* CTA */}
          <div
            className="
              mt-4 flex items-center gap-2

              text-sm text-text-muted

              group-hover:text-purple-600
              dark:group-hover:text-emerald-600

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
