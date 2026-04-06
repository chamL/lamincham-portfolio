"use client";

import { Skill } from "@/app/components/portfolio/types/skills";

type Props = {
  skills: Skill[];
};

function CoreSkills({ skills }: Props) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl pl-3 font-bold text-blue-400">Core Skills</h2>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="
        bg-gradient-to-br from-white/10 to-white/5
        backdrop-blur-md 
        border border-white/20 
        rounded-xl p-4
        hover:scale-[1.02]
        transition-all duration-300
    "
          >
            <div className="flex justify-between mb-2">
              <span className="text-white">{skill.name}</span>
              <span className="text-blue-400 text-sm">{skill.level}%</span>
            </div>

            <div className="h-2 bg-white/10 rounded">
              <div
                className="h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoreSkills;
