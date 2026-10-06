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
      className="marquee relative overflow-hidden border-y border-border/70 bg-card/50 py-5 [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
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
                className="flex items-center gap-6 px-3 font-display text-lg font-medium text-muted-foreground transition-colors hover:text-primary md:text-xl"
              >
                {item}
                <span aria-hidden="true" className="bg-aurora h-1.5 w-1.5 rounded-full" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
