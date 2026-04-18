"use client";

import { useState } from "react";

import {
  heroCards,
  heroButtons,
} from "@/app/components/portfolio/data/heroData";

import HeroInfo from "./HeroInfo";
import HeroProfile from "./HeroProfile";
import SectionWrapper from "../../ui/SectionWrapper";

function Hero() {
  const [activeCard, setActiveCard] = useState("profile");
  const [movePicture, setMovePicture] = useState(false);

  return (
    <SectionWrapper id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-24 min-h-screen">
        {/* RIGHT (MAIN HERO) */}
        <div className="lg:col-span-2 flex items-center">
          <HeroProfile
            movePicture={movePicture}
            setMovePicture={setMovePicture}
          />
        </div>

        {/* LEFT (INFO SIDE) */}
        <div className="lg:col-span-1 flex items-center justify-center lg:mt-20">
          <HeroInfo
            cards={heroCards}
            buttons={heroButtons}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Hero;
