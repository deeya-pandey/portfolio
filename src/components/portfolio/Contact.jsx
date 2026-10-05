import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import Button from "../shared/Button";
import SocialLinks from "../shared/SocialLinks";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-y border-border/70 bg-secondary/30 px-5 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05" eyebrow="CONTACT" title="Let's Connect" />

        <Reveal className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              I&rsquo;m open to discussing development opportunities,
              interesting projects and opportunities to grow as a software
              engineer.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="mailto:deeyapandey123@gmail.com" variant="primary">
                Say Hello
              </Button>

              <Button
                href="/Deeya_Resume.pdf"
                download
                variant="ghost"
                className="group"
              >
                Download Resume
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                >
                  <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                </svg>
              </Button>
            </div>

            <SocialLinks className="mt-8 border-t border-border pt-6" />
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow md:p-8">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-sky-400 to-amber-300"
            />

            <div className="flex flex-wrap items-center justify-between gap-3">
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
        </Reveal>
      </div>
    </section>
  );
}
