"use client";

import { HeroCardsProps } from "@/app/components/portfolio/types/hero";

function HeroCards({ cards, activeCard }: HeroCardsProps) {
  return (
    <div
      className="
            relative
            w-full
            max-w-sm
            min-h-[270px]
            mt-6
            overflow-hidden
            rounded-xl
            shadow-xl

        "
    >
      {cards.map((card) => (
        <div
          key={card.id}
          className={`
                        absolute inset-0
                        transition-all duration-500 ease-in-out

                        ${
                          activeCard === card.id
                            ? "opacity-100 translate-x-0 scale-100 z-10"
                            : "opacity-0 translate-x-8 scale-95 z-0 pointer-events-none"
                        }
                    `}
        >
          <div
            className={`
                            h-full

                            ${card.bg}
                            backdrop-blur-xl

                            border border-white/10
                            rounded-xl

                            shadow-glass

                            overflow-hidden
                        `}
          >
            {/* HEADER */}
            <div
              className="
                            text-center
                            py-3
                            font-bold
                            text-text

                            bg-black/20
                            shadow-md
                            border-b border-white/10
                        "
            >
              {card.title}
            </div>

            {/* CONTENT */}
            <ul
              className="
    p-5
    text-center
    text-text
    text-sm
    divide-y divide-white/10
"
            >
              {card.content.map((item, i) => (
                <li key={i} className="py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroCards;
