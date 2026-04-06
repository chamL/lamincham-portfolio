"use client";

import { useRef } from "react";

type Props<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

function CardSlider<T>({ items, renderItem }: Props<T>) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const scrollAmount = containerRef.current.offsetWidth * 0.8;

    containerRef.current.scrollBy({
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
          className="
                        flex gap-4
                        overflow-x-auto
                        scroll-smooth p-5

                        snap-x snap-mandatory
                      
                    "
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="
                                snap-start

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
      <div className="flex justify-between mt-4">
        <button
          onClick={() => scroll("left")}
          className="
                        px-3 py-1
                        bg-white/10 rounded-md shadow-lg
                        text-white/70 hover:text-white hover:shadow-xl
                    "
        >
          ←
        </button>

        <button
          onClick={() => scroll("right")}
          className="
                        px-3 py-1
                        bg-white/10 rounded-md shadow-lg
                        text-white/70 hover:text-white hover:shadow-xl
                    "
        >
          →
        </button>
      </div>
    </div>
  );
}

export default CardSlider;
