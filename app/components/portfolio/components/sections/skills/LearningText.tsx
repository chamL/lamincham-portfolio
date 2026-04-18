"use client";

import { Skill } from "@/app/components/portfolio/types/skills";

type Props = {
  skills: Skill[];
};

function LearningText() {
  return (
    <div className=" max-w-2xl mx-auto text-center space-y-11">
      <h2 className="text-2xl font-bold text-blue-400">Education Journey</h2>

      <p className="text-text-muted text-sm md:text-base">
        I recently finished my studies at Høyskolen Kristiania in Bergen, where
        I learned a lot about web development, programming, and interaction
        design. During this time, I worked with technologies like React,
        TypeScript, and .NET, and also got hands-on experience with design tools
        like Figma.
      </p>

      <p className="text-text-muted text-sm md:text-base">
        A big part of my studies involved project-based work, both individually
        and in teams. We often worked using agile methods, where we planned,
        collaborated, and iterated on our solutions together. This gave me
        valuable experience in teamwork, communication, and how real development
        processes work in practice.
      </p>

      <p className="text-text-muted text-sm md:text-base">
        I really enjoy combining coding with design, especially when it comes to
        creating simple, user-friendly, and good-looking solutions. Through
        different projects, I’ve built up my skills in problem-solving,
        teamwork, and turning ideas into real applications.
      </p>

      <p className="text-text-muted text-sm md:text-base">
        Now I’m excited to keep learning and grow as a developer, especially
        within frontend and UX/UI. I’m looking forward to using what I’ve
        learned in real projects and being part of a team where I can contribute
        and improve.
      </p>
    </div>
  );
}

export default LearningText;
