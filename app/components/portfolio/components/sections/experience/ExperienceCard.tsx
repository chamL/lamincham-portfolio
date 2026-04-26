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

          bg-card
          backdrop-blur-md

          rounded-xl p-6

          border border-border
          hover:border-black/10 dark:hover:border-white/10

          shadow-soft
          hover:shadow-hover
          hover:-translate-y-1

          transition-all duration-300

          overflow-hidden

          /* SOFT GRADIENT (HARDCODED) */
          before:absolute before:inset-0
          before:rounded-xl
          before:bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.08),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.08),transparent_60%)]
          before:opacity-100
          before:pointer-events-none

          /* 🌙 DARK = litt sterkere */
          dark:before:bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(74,222,128,0.18),transparent_60%)]
        "
      >
        {/* LEFT STRIPE */}
        <div
          className="
            w-1 rounded-full

            bg-gradient-to-b
            from-cyan-500 to-green-400
            dark:from-cyan-400 dark:to-green-300

            opacity-70
            group-hover:opacity-100

            transition
          "
        />

        {/* CONTENT */}
        <div className="flex flex-col flex-1">
          {/* DATE */}
          <span className="text-xs text-text-muted uppercase tracking-wider">
            {dates}
          </span>

          {/* TITLE */}
          <h3
            className="
              text-lg font-semibold mt-1 text-text
              tracking-tight

              group-hover:text-accent
              transition
            "
          >
            {title}
          </h3>

          {/* TEXT */}
          <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-md">
            {shortBio}
          </p>

          {/* CTA */}
          <div
            className="
              mt-4 flex items-center gap-2
              text-sm text-text-muted

              group-hover:text-accent
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