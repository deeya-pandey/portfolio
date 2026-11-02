import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import { trackPointer } from "../shared/pointer";

const skillGroups = [
  {
    category: "Backend",
    skills: [".NET", "C#", "ASP.NET Core"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Databases",
    skills: ["SQL Server", "PostgreSQL"],
  },
  {
    category: "Tools & Infrastructure",
    skills: ["Git", "Azure DevOps", "Linux", "Docker"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-block section-divider">
      <div className="container-page">
        <SectionHeading
          index="02"
          eyebrow="SKILLS"
          title="Technologies I Work With"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal
              as="article"
              key={group.category}
              delay={index * 70}
              onPointerMove={trackPointer}
              className="spotlight card card-hover group flex flex-col p-6"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-xs text-muted-foreground transition-colors duration-200 group-hover:text-primary">
                  0{index + 1}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-border transition-colors duration-300 group-hover:bg-primary/40"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold tracking-[-0.015em]">
                {group.category}
              </h3>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
