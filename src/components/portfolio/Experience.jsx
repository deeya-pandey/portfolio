import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import { trackPointer } from "../shared/pointer";

const roles = [
  {
    title: "Junior .NET Developer",
    company: "Solveetech Solutions",
    location: "Kathmandu, Nepal",
    current: true,
    summary:
      "Working on a college management system using .NET, C#, SQL Server and modern frontend technologies.",
    highlights: [
      "Develop and maintain backend functionality using .NET.",
      "Work with SQL Server and database operations.",
      "Fix bugs and implement application improvements.",
      "Collaborate with the development team using Git and Azure DevOps.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" eyebrow="EXPERIENCE" title="Experience" />

        <ol className="mt-12 space-y-6">
          {roles.map((role) => (
            <Reveal as="li" key={`${role.title}-${role.company}`} className="relative pl-8 md:pl-10">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary via-accent-2/60 to-transparent"
              />
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-7 h-[11px] w-[11px] rounded-full border-2 border-background bg-primary ring-4 ring-primary/15"
              />

              <article
                onPointerMove={trackPointer}
                className="spotlight rounded-xl border border-border bg-card p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold">{role.title}</h3>
                    <p className="mt-1.5 font-mono text-sm text-primary">
                      {role.company}
                      <span className="text-muted-foreground">
                        {" "}
                        · {role.location}
                      </span>
                    </p>
                  </div>

                  {role.current ? (
                    <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Current
                    </span>
                  ) : null}
                </div>

                <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
                  {role.summary}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {role.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
