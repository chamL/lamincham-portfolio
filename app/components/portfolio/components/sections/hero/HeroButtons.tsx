"use client";

import { HeroButtonsProps } from "@/app/components/portfolio/types/hero";

function HeroButtons({ buttons, activeCard, setActiveCard }: HeroButtonsProps) {
  return (
    <div className="flex gap-5 mt-6">
      {buttons.map((btn) => {
        const Icon = btn.icon;

        return (
          <button
            key={btn.id}
            onClick={() => setActiveCard(btn.id)}
            className={`p-2 rounded-md transition ${activeCard === btn.id
                ? "bg-white text-black scale-110"
                : "bg-black/20 text-white hover:bg-black/40"
              }`}
          >
            <Icon size={18} />
          </button>
        );
      })}
    </div>
  );
}

export default HeroButtons;
