"use client";

import { HeroLeftProps } from "@/app/components/portfolio/types/hero";
import HeroCards from "./HeroCards";
import HeroButtons from "./HeroButtons";

function HeroInfo({
  cards,
  buttons,
  activeCard,
  setActiveCard,
}: HeroLeftProps) {
  return (
    <div className="col-span-1 flex flex-col items-center">
      {/* CARD WRAPPER */}
      <div
        className="
                    relative w-full  max-w-md min-w-[370px]

                    bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent
                    backdrop-blur-2xl

                    border border-white/10
                    rounded-2xl

                    shadow-insetStrong

                    p-8
                    flex flex-col items-center
                "
      >
        <HeroCards cards={cards} activeCard={activeCard} />

        <HeroButtons
          buttons={buttons}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
      </div>
    </div>
  );
}

export default HeroInfo;
