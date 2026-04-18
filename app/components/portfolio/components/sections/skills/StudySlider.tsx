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
            
              w-[17.5rem] md:w-[20rem]
              h-[11.25rem]
            
              flex flex-col justify-start
              p-6 rounded-2xl text-center
            
              backdrop-blur-xl
              border border-border
            
              bg-card dark:bg-card-muted
            
              ${position === "center" && `
                scale-110 z-20 opacity-100
            
                bg-card
                dark:bg-card-strong
            
                shadow-hover
            
                before:absolute before:inset-0
                before:rounded-2xl
                before:bg-gradient-to-br
                before:from-blue-500/10 before:to-purple-500/10
                dark:before:from-blue-500/20 dark:before:to-purple-500/20
                before:pointer-events-none
              `}
            
              ${position === "left" && `
                -translate-x-[120%]
                scale-90 z-10 opacity-60
            
                bg-card-muted
                shadow-soft
              `}
            
              ${position === "right" && `
                translate-x-[120%]
                scale-90 z-10 opacity-60
            
                bg-card-muted
                shadow-soft
              `}
            
              ${position === "hidden" && "opacity-0 scale-75"}
            `}
            >
              <h3 className="text-text font-semibold mb-2 text-sm">
                {item.semester}
              </h3>
              <hr className="py-2 border-t border-border" />

              <div className="flex flex-wrap justify-center gap-2 text-xs">
                {item.subjects.map((sub, idx) => (
                  <span
                    key={idx}
                    className="
                    px-3 py-1 text-xs font-medium
                  
                    rounded-full
                  
                    bg-white/90 dark:bg-white/10
                    backdrop-blur-md
                  
                    border border-black/10 dark:border-white/10
                  
                    text-gray-800 text-text
                  
                    shadow-sm
                  "
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          );
        })}

        {/* BUTTONS */}
        <button
          onClick={prev}
          className="
          absolute left-4
  
          bg-card-strong
          backdrop-blur-md
  
          p-2 rounded-full
          border border-border
  
          hover:scale-110
          transition
  
          z-30
        "
        >
          <ChevronLeft className="text-text" />
        </button>

        <button
          onClick={next}
          className="
          absolute right-4
  
          bg-card-strong
          backdrop-blur-md
  
          p-2 rounded-full
          border border-border
  
          hover:scale-110
          transition
  
          z-30
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
                ? "bg-blue-500 dark:bg-blue-300 scale-125"
                : "bg-black/20 dark:bg-black/40"}
          `}
          />
        ))}
      </div>
    </div>
  );
}

export default StudySlider;
