"use client";

import Image from "next/image";

import arcade from "@/public/images/projects/arcade_game.png";
import retail from "@/public/images/projects/boutique.png";
import clothing from "@/public/images/projects/laundry.png";
import Banner from "../../ui/Banner";
import SectionWrapper from "../../ui/SectionWrapper";

type Project = {
  title: string;
  image: any;
  description: string;
  bg: string;
  text: string;
};

const projects: Project[] = [
  {
    title: "Arcade",
    image: arcade,
    description: "Interactive arcade platform with games and UI focus.",
    bg: "bg-teal-800",
    text: "text-white",
  },
  {
    title: "Retail",
    image: retail,
    description: "Retail system showcasing product flow and UI.",
    bg: "bg-blue-200",
    text: "text-gray-800",
  },
  {
    title: "Clothing",
    image: clothing,
    description: "Clothing store concept with modern layout.",
    bg: "bg-purple-200",
    text: "text-gray-800",
  },
];

function Projects() {
  return (
    <SectionWrapper id="projects">
      <Banner
        text="Projects"
        bg="bg-pink-800"
        textColor="text-white"
        shadow="inset"
      />

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`
                            rounded-xl p-6
                            flex flex-col items-center text-center

                            ${project.bg}
                            ${project.text}

                            shadow-lg
                            hover:shadow-xl
                            hover:-translate-y-1
                            hover:scale-[1.02]

                            transition-all duration-300
                        `}
          >
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>

            <div className="relative w-24 h-24 mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain"
              />
            </div>

            <p className="text-sm mb-4">{project.description}</p>

            {/* STATUS */}
            <span
              className="
                            w-full py-2 rounded-lg
                            bg-black/20
                            text-white text-sm font-medium
                        "
            >
              🚧 In Progress
            </span>
          </div>
        ))}
      </div>
      <p className="text-center text-white/60 text-sm mt-12">
        * Projects coming soon — currently updating older work to modern
        standards.
      </p>
    </SectionWrapper>
  );
}

export default Projects;
