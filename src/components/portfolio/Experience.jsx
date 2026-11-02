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
    <section id="experience" className="section-block section-divider">
      <div className="container-page">
        <SectionHeading index="03" eyebrow="EXPERIENCE" title="Experience" />

        <ol className="mt-10 space-y-6 md:mt-12">
          {roles.map((role) => (
            <Reveal
              as="li"
              key={`${role.title}-${role.company}`}
              className="relative pl-7 md:pl-10"
            >
              <span
                aria-hidden="true"
                className="absolute left-[4px] top-0 h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent"
              />
              <span
                aria-hidden="true"
                className="absolute left-0 top-8 h-[9px] w-[9px] rounded-full bg-primary ring-4 ring-background"
              />

              <article
                onPointerMove={trackPointer}
                className="spotlight card card-hover p-6 md:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.015em] md:text-[1.375rem]">
                      {role.title}
                    </h3>
                    <p className="mt-1.5 text-[0.9375rem]">
                      <span className="font-medium text-primary">
                        {role.company}
                      </span>
                      <span className="text-muted-foreground">
                        {" "}
                        · {role.location}
                      </span>
                    </p>
                  </div>

                  {role.current ? (
                    <span className="chip chip-accent shrink-0 gap-2 self-start rounded-full">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                      </span>
                      Current
                    </span>
                  ) : null}
                </div>

                <p className="mt-6 max-w-3xl border-t border-border pt-6 text-[1.0625rem] leading-relaxed text-foreground/85">
                  {role.summary}
                </p>

                <ul className="mt-5 grid gap-x-10 gap-y-3 md:grid-cols-2">
                  {role.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted-foreground"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-[0.3rem] h-3.5 w-3.5 shrink-0 text-primary"
                      >
                        <path d="m5 12 5 5L20 7" />
                      </svg>
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
