const stack = [
  ".NET",
  "C#",
  "ASP.NET Core",
  "React",
  "Next.js",
  "TypeScript",
  "SQL Server",
  "PostgreSQL",
  "REST APIs",
  "Git",
  "Azure DevOps",
  "Docker",
  "Linux",
];

export default function TechMarquee() {
  return (
    <div
      aria-label="Technologies"
      className="marquee relative overflow-hidden border-y border-border bg-card/60 py-5 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)] md:py-6"
    >
      {/* Rendered twice so the -50% loop is seamless; the copy is hidden from AT. */}
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex shrink-0 items-center"
          >
            {stack.map((item) => (
              <li
                key={item}
                className="flex items-center gap-7 px-3.5 font-display text-base font-medium tracking-[-0.01em] text-muted-foreground transition-colors duration-200 hover:text-foreground md:text-lg"
              >
                {item}
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-primary/50" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
