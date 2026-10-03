export default function Contact() {
  return (
    <section
      id="contact"
      className="border-y border-border/70 bg-secondary/20 px-5 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-primary">05. CONTACT</p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-5xl">
              Let's Connect
            </h2>

            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              I'm open to discussing development opportunities,
              interesting projects and opportunities to grow as a
              software engineer.
            </p>

            <a
              href="/Deeya_Resume.pdf"
              download
              className="mt-8 inline-flex rounded-lg border border-primary/50 px-5 py-3 font-medium text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
            >
              Download Resume
            </a>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow md:p-8">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-sky-400 to-amber-300"
            />

            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Direct Email
              </p>
              <span className="inline-flex items-center gap-2 font-mono text-xs text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Open to opportunities
              </span>
            </div>

            <div className="mt-8 flex items-start gap-4">
              <span
                aria-hidden="true"
                className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 font-mono text-3xl text-primary transition-transform duration-300 group-hover:scale-105"
              >
                @
              </span>

              <div className="min-w-0 pt-1">
                <p className="text-sm text-muted-foreground">Email me at</p>
                <a
                  href="mailto:deeyapandey123@gmail.com"
                  className="mt-1 inline-flex max-w-full items-center gap-2 break-all font-medium text-foreground transition-colors hover:text-primary sm:break-normal"
                >
                  deeyapandey123@gmail.com
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}