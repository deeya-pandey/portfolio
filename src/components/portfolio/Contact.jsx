import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import { trackPointer } from "../shared/pointer";
import Button from "../shared/Button";
import SocialLinks from "../shared/SocialLinks";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-block isolate overflow-hidden border-t border-border bg-secondary/40"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_70%_at_85%_40%,#000,transparent)]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(40rem 24rem at 90% 30%, var(--site-halo), transparent 70%)",
          }}
        />
      </div>

      <div className="container-page">
        <SectionHeading index="05" eyebrow="CONTACT" title="Let's Connect" />

        <Reveal className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <p className="max-w-xl text-lg leading-[1.7] text-muted-foreground md:text-xl md:leading-[1.65]">
              I&rsquo;m open to discussing development opportunities,
              interesting projects and opportunities to grow as a software
              engineer.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
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
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
                >
                  <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                </svg>
              </Button>
            </div>

            <SocialLinks className="mt-10 border-t border-border pt-6" />
          </div>

          <div
            onPointerMove={trackPointer}
            className="spotlight card card-hover group overflow-hidden p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
              <p className="eyebrow text-muted-foreground">
                Direct Email
              </p>
              <span className="chip chip-accent gap-2 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Open to opportunities
              </span>
            </div>

            <div className="mt-6 flex items-start gap-4">
              <span
                aria-hidden="true"
                className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/[0.08] font-mono text-2xl text-primary transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:scale-105"
              >
                @
              </span>

              <div className="min-w-0 pt-1">
                <p className="text-sm text-muted-foreground">Email me at</p>
                <a
                  href="mailto:deeyapandey123@gmail.com"
                  className="mt-1 inline-flex max-w-full items-center gap-2 break-all font-display text-lg font-medium tracking-[-0.01em] text-foreground transition-colors duration-200 hover:text-primary sm:break-normal md:text-xl"
                >
                  deeyapandey123@gmail.com
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
