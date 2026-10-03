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
    heading: "group-hover:text-violet-600 dark:group-hover:text-violet-300",
    badge:
      "border-violet-400/30 bg-violet-400/10 text-violet-700 hover:border-violet-400/60 hover:bg-violet-400/20 dark:text-violet-300",
  },
  sky: {
    bar: "from-sky-400 to-cyan-300",
    heading: "group-hover:text-sky-600 dark:group-hover:text-sky-300",
    badge:
      "border-sky-400/30 bg-sky-400/10 text-sky-700 hover:border-sky-400/60 hover:bg-sky-400/20 dark:text-sky-300",
  },
  amber: {
    bar: "from-amber-400 to-orange-300",
    heading: "group-hover:text-amber-600 dark:group-hover:text-amber-300",
    badge:
      "border-amber-400/30 bg-amber-400/10 text-amber-700 hover:border-amber-400/60 hover:bg-amber-400/20 dark:text-amber-300",
  },
  green: {
    bar: "from-primary to-emerald-300",
    heading: "group-hover:text-primary",
    badge:
      "border-primary/30 bg-primary/10 text-primary hover:border-primary/60 hover:bg-primary/20",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-primary">02. SKILLS</p>

        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
          Technologies I Work With
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <article
              key={group.category}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
            >
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accentStyles[group.accent].bar}`}
              />

              <div className="mb-5 flex items-center justify-between border-b border-border pb-3">
                <h3
                  className={`font-semibold transition-colors ${accentStyles[group.accent].heading}`}
                >
                  {group.category}
                </h3>
                <span
                  className={`font-mono text-xs ${accentStyles[group.accent].heading}`}
                >
                  0{index + 1}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-md border px-2.5 py-1.5 font-mono text-xs transition-all duration-200 ${accentStyles[group.accent].badge}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}