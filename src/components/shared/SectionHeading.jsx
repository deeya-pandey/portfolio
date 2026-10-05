export default function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <header className="max-w-3xl">
      <p className="font-mono text-sm tracking-widest text-primary">
        <span className="text-muted-foreground">{index}.</span> {eyebrow}
      </p>

      <h2 className="group/title relative mt-3 inline-block text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
        <span
          aria-hidden="true"
          className="absolute -bottom-2 left-0 h-0.5 w-10 bg-primary transition-all duration-300 group-hover/title:w-full"
        />
      </h2>

      {description ? (
        <p className="mt-7 leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </header>
  );
}
