"use client";

import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/app/components/portfolio/data/experienceData";
import Banner from "../../ui/Banner";
import SectionWrapper from "../../ui/SectionWrapper";
import { Key } from "react";

function Experience() {
  return (
    <SectionWrapper id="experience">
      <Banner
        text="Working experience"
        bg="bg-cyan-800"
        textColor="text-white"
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map(
          (
            exp: {
              title: string;
              dates: string;
              shortBio: string;
              fullBio: string;
              images: string[] | undefined;
            },
            i: Key | null | undefined,
          ) => (
            <ExperienceCard
              key={i}
              title={exp.title}
              dates={exp.dates}
              shortBio={exp.shortBio}
              fullBio={exp.fullBio}
              images={exp.images}
            />
          ),
        )}
      </div>
    </SectionWrapper>
  );
}

export default Experience;
