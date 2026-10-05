import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

const skillGroups = [
  {
    category: "Backend",
    accent: "violet",
    skills: [".NET", "C#", "ASP.NET Core"],
  },
  {
    category: "Frontend",
    accent: "sky",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Databases",
    accent: "amber",
    skills: ["SQL Server", "PostgreSQL"],
  },
  {
    category: "Tools & Infrastructure",
    accent: "green",
    skills: ["Git", "Azure DevOps", "Linux", "Docker"],
  },
];

const accentStyles = {
  violet: {
    bar: "from-violet-400 to-fuchsia-400",
    heading: "group-hover:text-violet-700 dark:group-hover:text-violet-300",
    badge:
      "border-violet-500/30 bg-violet-500/10 text-violet-800 dark:text-violet-300",
  },
  sky: {
    bar: "from-sky-400 to-cyan-300",
    heading: "group-hover:text-sky-700 dark:group-hover:text-sky-300",
    badge: "border-sky-500/30 bg-sky-500/10 text-sky-800 dark:text-sky-300",
  },
  amber: {
    bar: "from-amber-400 to-orange-300",
    heading: "group-hover:text-amber-700 dark:group-hover:text-amber-300",
    badge:
      "border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300",
  },
  green: {
    bar: "from-primary to-emerald-300",
    heading: "group-hover:text-primary",
    badge: "border-primary/30 bg-primary/10 text-primary",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          eyebrow="SKILLS"
          title="Technologies I Work With"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => {
            const accent = accentStyles[group.accent];

            return (
              <Reveal
                as="article"
                key={group.category}
                delay={index * 80}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-5 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent.bar}`}
                />

                <div className="mb-5 flex items-center justify-between gap-3 border-b border-border pb-3">
                  <h3
                    className={`font-semibold transition-colors ${accent.heading}`}
                  >
                    {group.category}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className={`rounded-md border px-2.5 py-1.5 font-mono text-xs transition-transform duration-200 hover:-translate-y-0.5 ${accent.badge}`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
