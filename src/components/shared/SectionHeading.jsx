export default function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <header className="max-w-3xl">
      <p className="eyebrow">
        <span className="text-muted-foreground">{index}.</span>
        <span aria-hidden="true" className="h-px w-6 bg-primary/50" />
        {eyebrow}
      </p>

      <h2 className="mt-4 text-[2rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.5rem] lg:text-[2.75rem]">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </header>
  );
}
