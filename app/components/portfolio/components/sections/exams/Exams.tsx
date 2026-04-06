"use client";

import ExamCard from "./ExamCard";
import { exams } from "@/app/components/portfolio/data/examsData";
import SectionWrapper from "../../ui/SectionWrapper";
import CardSlider from "../../ui/CardSlider";

function Exams() {
  return (
    <SectionWrapper id="exams">
      {/* HEADER */}
      <div className="text-center my-12">
        <h2
          className="
                    text-2xl md:text-3xl font-bold
                    bg-gradient-to-r from-cyan-400 to-purple-500
                    bg-clip-text text-transparent
                "
        >
          Academic Projects
        </h2>

        <p
          className="
                    mt-4 max-w-2xl mx-auto
                    text-white/70 text-sm md:text-base
                "
        >
          A collection of projects and exams completed during my studies,
          showcasing experience across web, mobile, and game development.
        </p>
      </div>

      {/* CARD CONTAINER */}
      <section
        className="
    shadow-insetStrong
    p-8 md:p-10
    rounded-xl
"
      >
        <CardSlider
          items={exams}
          renderItem={(exam, i) => (
            <ExamCard
              key={i}
              title={exam.title}
              type={exam.type}
              shortBio={exam.shortBio}
              fullBio={exam.fullBio}
              tech={exam.tech}
              images={exam.images}
              video={exam.video}
              bg={exam.bg}
            />
          )}
        />
      </section>
    </SectionWrapper>
  );
}

export default Exams;
