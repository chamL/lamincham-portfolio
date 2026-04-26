"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { study } from "@/app/components/portfolio/data/studyData";

function StudySlider() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % study.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? study.length - 1 : prev - 1));
  };

  return (
    <div className="mt-20 flex flex-col items-center w-full">
      {/* SLIDER */}
      <div className="relative w-full max-w-5xl h-[18.75rem] flex items-center justify-center overflow-hidden">
        {study.map((item, i) => {
          const position =
            i === index
              ? "center"
              : i === (index - 1 + study.length) % study.length
                ? "left"
                : i === (index + 1) % study.length
                  ? "right"
                  : "hidden";

          return (
            <div
              key={i}
              className={`
              absolute transition-all duration-500 ease-in-out
            
              w-[15rem] md:w-[20rem]
              h-[13.5rem]
            
              flex flex-col justify-start
              p-6 rounded-2xl text-center
            
              backdrop-blur-md
              border
            
              ${position === "center" &&
                `
                scale-110 z-20 opacity-100

                /* LIGHT (strong beige) */
                bg-[linear-gradient(135deg,#ffffff,rgba(230,210,180,0.75))]
                
                /* DARK (lilla beholdes) */
                dark:bg-[linear-gradient(135deg,rgba(139,92,246,0.35),rgba(99,102,241,0.2))]

                border-black/10 dark:border-white/10

                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                backdrop-blur-xl

                before:absolute before:inset-0
                before:rounded-2xl

                /* beige glow */
                before:bg-[radial-gradient(circle_at_25%_20%,rgba(180,140,90,0.18),transparent_70%)]

                /* lilla glow */
                dark:before:bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.25),transparent_60%)]

                before:pointer-events-none
              `
                }
            
              ${position === "left" &&
                `
                -translate-x-[105%]
                scale-95 z-10 opacity-95
            
                bg-white/90
                dark:bg-card-muted

                border-black/10 dark:border-white/10

                shadow-[0_6px_20px_rgba(0,0,0,0.06)]
              `
                }
            
              ${position === "right" &&
                `
                translate-x-[105%]
                scale-95 z-10 opacity-95
            
                bg-white/90
                dark:bg-card-muted

                border-black/10 dark:border-white/10

                shadow-[0_6px_20px_rgba(0,0,0,0.06)]
              `
                }
            
              ${position === "hidden" && "opacity-0 scale-75"}
            `}
            >
              {/* TITLE */}
              <h3 className="text-text font-semibold mb-2 text-sm">
                {item.semester}
              </h3>

              <hr className="py-2 border-t border-black/10 dark:border-border" />

              {/* SUBJECT TAGS */}
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                {item.subjects.map((sub, idx) => (
                  <span
                    key={idx}
                    className="
                    px-3 py-1 text-xs font-medium rounded-full

                    bg-white
                    dark:bg-white/10

                    border border-black/10 dark:border-white/10

                    text-text

                    shadow-[0_2px_4px_rgba(0,0,0,0.06)]

                    transition
                    hover:bg-[#f5f2eb]
                    hover:border-black/20

                    dark:hover:bg-white/20
                    dark:hover:border-white/20
                  "
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* BUTTONS UNDER (MOBILE FRIENDLY) */}
      <div className="flex w-full justify-between items-center gap-4 mt-6">
        <button
          onClick={prev}
          className="
          bg-white dark:bg-card

          p-3 rounded-full
          border border-black/10 dark:border-border

          shadow-sm
          hover:scale-110

          transition
        "
        >
          <ChevronLeft className="text-text" />
        </button>

        <button
          onClick={next}
          className="
          bg-white dark:bg-card

          p-3 rounded-full
          border border-black/10 dark:border-border

          shadow-sm
          hover:scale-110

          transition
        "
        >
          <ChevronRight className="text-text" />
        </button>
      </div>

      {/* DOTS */}
      <div className="flex gap-2 mt-6">
        {study.map((_, i) => (
          <div
            key={i}
            className={`
            w-2 h-2 rounded-full transition
            
            ${i === index
                ? "bg-[#a16207] dark:bg-purple-400 scale-125"
                : "bg-black/20 dark:bg-white/20"
              }
          `}
          />
        ))}
      </div>
    </div>
  );
}

export default StudySlider;