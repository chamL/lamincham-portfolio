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
      <div className="relative w-full max-w-5xl h-[300px] flex items-center justify-center overflow-hidden">
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
                          w-[280px] md:w-[320px] h-[180px]
                          flex flex-col justify-start
                          p-6 rounded-xl text-center
                          backdrop-blur-md border border-white/20
                      
                          ${position === "center" && "scale-110 z-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-100"}
                          ${position === "left" && "-translate-x-[120%] scale-90 z-10 opacity-60 bg-white/5"}
                          ${position === "right" && "translate-x-[120%] scale-90 z-10 opacity-60 bg-white/5"}
                          ${position === "hidden" && "opacity-0 scale-75"}
                        `}
            >
              <h3 className="text-white font-bold mb-2">{item.semester}</h3>

              <div className="flex flex-wrap justify-center gap-2 text-sm">
                {item.subjects.map((sub, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 border-blue-400/30 rounded-full text-blue-200"
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
          className="absolute left-4 bg-white/20 p-2 rounded-full hover:bg-white/30 z-30"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-4 bg-white/20 p-2 rounded-full hover:bg-white/30 z-30"
        >
          <ChevronRight />
        </button>
      </div>

      {/* DOTS */}
      <div className="flex gap-2 mt-6">
        {study.map((_, i) => (
          <div
            key={i}
            className={`
                            w-2 h-2 rounded-full transition
                            ${i === index ? "bg-blue-400 scale-125" : "bg-white/30"}
                        `}
          />
        ))}
      </div>
    </div>
  );
}

export default StudySlider;
