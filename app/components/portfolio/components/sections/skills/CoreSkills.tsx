"use client";

import { Skill } from "@/app/components/portfolio/types/skills";

type Props = {
  skills: Skill[];
};

const getLevelLabel = (level: number) => {
  if (level >= 25) return "Primary";
  if (level >= 15) return "Strong";
  if (level >= 10) return "Familiar";
  return "Basic";
};

function CoreSkills({ skills }: Props) {
  const total = skills.reduce((sum, skill) => sum + skill.level, 0);
  const sortedSkills = [...skills].sort((a, b) => b.level - a.level);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl pl-3 font-bold text-blue-400">
        Core Skills
      </h2>

      <p className="text-white/60 text-sm pl-3 max-w-md">
        I distribute 100 points across my skills based on experience and confidence from real projects.
      </p>

      <div className="space-y-5">
        {sortedSkills.map((skill) => {
          const percent = Math.round((skill.level / total) * 100);

          return (
            <div
              key={skill.name}
              className="
                bg-gradient-to-br from-white/10 to-white/5
                border border-white/20
                backdrop-blur-md
                rounded-xl p-4
                space-y-3
                hover:scale-[1.02]
                transition-all duration-300
              "
            >
              {/* HEADER */}
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">
                  {skill.name}
                </span>

                <div className="text-right">
                  <div className="text-blue-400 text-sm font-semibold">
                    {percent}%
                  </div>
                  <div className="text-white/40 text-[10px]">
                    {skill.level} pts · {getLevelLabel(skill.level)}
                  </div>
                </div>
              </div>

              {/* BAR CONTAINER */}
              <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />

                {/* ACTUAL BAR */}
                <div
                  className="
                    h-full rounded-full
                    bg-gradient-to-r from-blue-400 to-purple-500
                    shadow-[0_0_10px_rgba(59,130,246,0.5)]
                    transition-all duration-500
                  "
                  style={{ width: `${percent}%` }}
                />

                {/* START DOT (important for low values) */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-md" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CoreSkills;