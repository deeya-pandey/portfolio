const projects = [ 
    { 
       title: "Enrollment To Exit (E2E) — Learning Management System",
       description: "A professional LMS built for educational institutions. Contributed to selected features, backend development, bug fixes, and improvements as part of the development team.",
       technologies: [".NET", "Next.js", "SQL Server"], 
       type: "Professional Work", 
    }, 
    ];
const technologyStyles = {
  ".NET":
    "border-violet-500/30 bg-violet-500/10 text-violet-700 hover:border-violet-500/60 hover:bg-violet-500/20 dark:text-violet-300",
  "Next.js":
    "border-slate-500/30 bg-slate-500/10 text-slate-700 hover:border-slate-500/60 hover:bg-slate-500/20 dark:text-slate-300",
  "SQL Server":
    "border-rose-500/30 bg-rose-500/10 text-rose-700 hover:border-rose-500/60 hover:bg-rose-500/20 dark:text-rose-300",
};

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-primary">04. PROJECTS</p>

        <div className="mt-10">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-primary/25 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow md:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-sky-400 to-amber-300 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-2 select-none font-mono text-7xl font-bold text-primary/[0.06] transition-colors duration-300 group-hover:text-primary/10 md:right-8 md:text-8xl"
              >
                01
              </span>

              <div className="relative grid gap-8 md:grid-cols-[1.4fr_0.6fr] md:items-center">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">
                    Featured Project
                  </p>

                  <h3 className="mt-4 max-w-xl text-2xl font-semibold transition-colors duration-300 group-hover:text-primary md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="border-t border-border pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Technology Stack
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className={`rounded-md border px-3 py-2 font-mono text-xs transition-all duration-200 hover:-translate-y-0.5 ${technologyStyles[technology]}`}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}