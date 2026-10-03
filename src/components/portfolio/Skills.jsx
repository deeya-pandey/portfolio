const skills = [
  ".NET",
  "C#",
  "ASP.NET Core",
  "React",
  "Next.js",
  "SQL Server",
  "PostgreSQL",
  "Git",
  "Azure DevOps",
  "Linux",
  "Docker",
];

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-primary">02. SKILLS</p>

        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
          Technologies I Work With
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-border bg-card px-4 py-2 font-mono text-sm transition hover:border-primary hover:text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}