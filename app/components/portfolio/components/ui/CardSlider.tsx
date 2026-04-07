"use client";

import { useRef, useState } from "react";

type Props<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

function CardSlider<T>({ items, renderItem }: Props<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nudge, setNudge] = useState<"left" | "right" | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const scrollAmount = el.offsetWidth * 0.8;

    const isAtStart = el.scrollLeft <= 0;
    const isAtEnd =
      el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;

    // 🔥 EDGE NUDGE
    if (direction === "left" && isAtStart) {
      setNudge("left");
      setTimeout(() => setNudge(null), 150);
      return;
    }

    if (direction === "right" && isAtEnd) {
      setNudge("right");
      setTimeout(() => setNudge(null), 150);
      return;
    }

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-6xl mx-auto">

      {/* SLIDER */}
      <div className="overflow-visible">
        <div
          ref={containerRef}
          className={`
            flex gap-4
            overflow-x-auto
            scroll-smooth p-5
            snap-x snap-mandatory

            transition-transform duration-150 ease-out
            ${nudge === "left" ? "-translate-x-2" : ""}
            ${nudge === "right" ? "translate-x-2" : ""}
          `}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="
                min-w-[85%]
                sm:min-w-[45%]
                lg:min-w-[30%]
                xl:min-w-[23%]
                transition
              "
            >
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex justify-between mt-4 px-2">
        <button
          onClick={() => scroll("left")}
          className="
            w-10 h-10
            flex items-center justify-center
            bg-white/10 rounded-xl
            text-white/70
            active:scale-90
            transition
          "
        >
          ←
        </button>

        <button
          onClick={() => scroll("right")}
          className="
            w-10 h-10
            flex items-center justify-center
            bg-white/10 rounded-xl
            text-white/70
            active:scale-90
            transition
          "
        >
          →
        </button>
      </div>
    </div>
  );
}

export default CardSlider;