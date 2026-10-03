const projects = [
  {
    title: "Enrollment To Exit (E2E)- Learning Management System",
    description:
      "A student activity and college management platform built with ASP.NET Core, Next.js and SQL Server.",
    technologies: [".NET", "Next.js", "SQL Server"],
  },
  {
    title: "Student Management API",
    description:
      "A .NET Web API project with PostgreSQL, Entity Framework Core and Docker.",
    technologies: [".NET", "PostgreSQL", "Docker"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-primary">04. PROJECTS</p>

        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
          Selected Projects
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-glow"
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs"
                  >
                    {technology}
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