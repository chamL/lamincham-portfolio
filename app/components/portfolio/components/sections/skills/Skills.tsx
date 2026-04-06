"use client";

import { skills } from "@/app/components/portfolio/data/skillsData";
import Banner from "../../ui/Banner";
import SectionWrapper from "../../ui/SectionWrapper";

import CoreSkills from "./CoreSkills";
import StudySlider from "./StudySlider";
import LearningText from "./LearningText";

function Skills() {
  return (
    <SectionWrapper id="skills">
      {/* BANNER */}
      <Banner
        text="Skills & Education"
        bg="bg-purple-700"
        textColor="text-white"
        shadow="inset"
      />

      {/* TOP GRID */}
      <div className="grid lg:grid-cols-2 gap-10 mt-20">
        {/* LEFT */}
        <CoreSkills skills={skills} />

        {/* RIGHT */}
        <LearningText />
      </div>

      {/* FULL WIDTH SLIDER */}
      <div className=" w-full">
        <StudySlider />
      </div>
    </SectionWrapper>
  );
}

export default Skills;
