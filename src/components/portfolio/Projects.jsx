import { useEffect, useRef, useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import { trackPointer } from "../shared/pointer";
import jamyoImage from "../../assets/images/projects/jamyo.jpg";
import studentRegistrationImage from "../../assets/images/projects/student-registration.jpg";
import fixitupDashboardImage from "../../assets/images/projects/ondemand1.png";
import fixitupSignInImage from "../../assets/images/projects/ondemand2.jpeg";
import e2eimage from "../../assets/images/projects/e2e.jpg";

// To show a screenshot for a project, drop the image in
// src/assets/images/projects/, import it above and set `image`.
// Projects without one get an illustrated placeholder.
const projects = [
  {
    title: "Enrollment To Exit (E2E) — Learning Management System",
    description:
      "A professional LMS built for educational institutions. Contributed to selected features, backend development, bug fixes, and improvements as part of the development team.",
    technologies: [".NET", "Next.js", "SQL Server"],
    type: "Professional Work",
    url: "e2edemo.solveetech.com",
    image: e2eimage,
    imageAlt: "E2E learning management system dashboard",
  },
  {
    title: "Interactive Grand Opening Landing Page",
    description:
      "Designed and developed a high-energy, mobile-first landing page for a soft-serve ice cream brand’s grand opening campaign in Manigram, Nepal. The experience features an interactive prize wheel, playable 10-second timer challenge, live countdown, animated prize showcase, FAQ accordion, location section, and celebratory confetti effects.",
    technologies: ["React", "CSS"],
    type: "Professional Work",
    image: jamyoImage,
    imageAlt: "Jamyo grand opening landing page with the 10-second timer challenge hero and countdown",
    url: "jamyo.com.np",
    github: "https://github.com/deeya-pandey/interactive-landing-page",
  },
    {
    title: "Fixitup — On-Demand Service Platform",
    description:
      "A final-year group project: a mobile platform that connects customers in Nepal with nearby verified service providers — electricians, plumbers, cleaners and more. Customers post instant or scheduled requests, providers respond with price offers, and both sides negotiate before confirming a booking.",
    contributions: [
      "User registration, email verification and login flow",
      "Forgot and reset password",
      "User profile update API, including old profile image cleanup",
      "Khalti payment integration",
      "Admin panel service request and category management",
    ],
    technologies: ["Express.js", "Prisma", "PostgreSQL", "React Native", "Next.js"],
    type: "Academic Work",
    screens: [
      {
        src: fixitupDashboardImage,
        alt: "Fixitup provider dashboard showing earnings, performance rating and service area",
      },
      {
        src: fixitupSignInImage,
        alt: "Fixitup sign-in screen with email, password and Google sign-in",
      },
    ],
    github: "https://github.com/Shivean/On-Demand-Service-Platform",
  },
  {
    title: "Student Registration System",
    description:
      "A basic web-based form that allows students to register for courses, view their details, and also edit and delete the records",
    technologies: [".NET", "SQL Server", "React"],
    type: "Personal Work",
    image: studentRegistrationImage,
    imageAlt: "Multi-step student registration form showing the personal information step",
    url: "student-registration",
    github: "https://github.com/deeya-pandey/student-registration-form",
  },

];

const filters = ["All", "Professional Work", "Academic Work", "Personal Work"];

function BrowserFrame({ url, children }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-glow transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-1">
      <div className="flex items-center gap-1.5 border-b border-border bg-secondary/70 px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="ml-3 flex-1 truncate rounded-md border border-border bg-card px-3 py-1 font-mono text-[11px] text-muted-foreground">
          https://{url}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        {children}
      </div>
    </div>
  );
}

/** Stylised dashboard drawn in markup, for work that can't be screenshotted. */
function DashboardPlaceholder() {
  const bars = [42, 68, 54, 82, 61, 90, 73];

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex gap-3 bg-gradient-to-br from-secondary via-card to-secondary p-4 transition-transform duration-700 group-hover:scale-[1.03]"
    >
      <div className="hidden w-1/5 flex-col gap-2 rounded-lg bg-card/80 p-3 shadow-sm sm:flex">
        <span className="mb-2 h-3 w-3/4 rounded bg-primary/70" />
        {[0, 1, 2, 3, 4].map((row) => (
          <span
            key={row}
            className={`h-2 rounded ${row === 1 ? "bg-primary/60" : "bg-border"}`}
          />
        ))}
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div className="grid grid-cols-3 gap-3">
          {["bg-primary/70", "bg-primary/45", "bg-primary/25"].map((tone) => (
            <div key={tone} className="rounded-lg bg-card/80 p-3 shadow-sm">
              <span className="block h-1.5 w-1/2 rounded bg-border" />
              <span className={`mt-2 block h-3 w-3/4 rounded ${tone}`} />
            </div>
          ))}
        </div>

        <div className="flex flex-1 items-end gap-2 rounded-lg bg-card/80 p-4 shadow-sm">
          {bars.map((height, index) => (
            <span
              key={index}
              className="flex-1 origin-bottom rounded-t bg-primary/60 transition-transform duration-500 group-hover:scale-y-110"
              style={{ height: `${height}%`, transitionDelay: `${index * 40}ms` }}
            />
          ))}
        </div>
      </div>

      <span className="absolute bottom-4 right-4 rounded-full border border-border bg-card/90 px-3 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur">
        Internal system · preview unavailable
      </span>
    </div>
  );
}

const expandIcon = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </svg>
);

function HoverLabel({ children }) {
  return (
    <span className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/45 via-transparent to-transparent pb-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
      <span className="inline-flex translate-y-2 items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[13px] font-medium text-slate-900 shadow-lg backdrop-blur transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-y-0">
        {expandIcon}
        {children}
      </span>
    </span>
  );
}

/** Mobile app screenshots shown as two tilted phones. */
function PhoneScreens({ screens }) {
  const tilts = [
    "-rotate-6 group-hover:-rotate-2",
    "rotate-6 group-hover:rotate-2",
  ];

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-secondary shadow-glow">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 100%, var(--site-halo), transparent 70%)",
        }}
      />
      <div aria-hidden="true" className="dot-grid absolute inset-0" />

      <div className="absolute inset-0 flex items-center justify-center gap-5 sm:gap-8">
        {screens.map((screen, index) => (
          <div
            key={screen.src}
            className={`h-[84%] overflow-hidden rounded-[1.4rem] border-[5px] border-neutral-900 bg-neutral-900 shadow-2xl transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-2 ${tilts[index % 2]}`}
            style={{ aspectRatio: "258 / 560" }}
          >
            <img
              src={screen.src}
              alt={screen.alt}
              loading="lazy"
              className="h-full w-full rounded-[1rem] object-cover object-top"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectPreview({ project, onOpen }) {
  if (project.screens) {
    return (
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="group relative block w-full rounded-xl text-left"
        aria-label={`Open screenshots of ${project.title}`}
      >
        <PhoneScreens screens={project.screens} />
        <HoverLabel>View screens</HoverLabel>
      </button>
    );
  }

  if (!project.image) {
    return (
      <div className="group">
        <BrowserFrame url={project.url}>
          <DashboardPlaceholder />
        </BrowserFrame>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group block w-full rounded-xl text-left"
      aria-label={`Open full screenshot of ${project.title}`}
    >
      <BrowserFrame url={project.url}>
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="screenshot-pan h-full w-full"
        />
        <HoverLabel>View full page</HoverLabel>
      </BrowserFrame>
    </button>
  );
}

function Lightbox({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (project && dialog && !dialog.open) dialog.showModal();
  }, [project]);

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        // A click on the backdrop lands on the <dialog> itself.
        if (event.target === event.currentTarget) dialogRef.current.close();
      }}
      aria-label={`${project.title} screenshot`}
      className="fade-in m-auto max-h-[92vh] w-[min(64rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-border bg-card p-0 text-foreground shadow-2xl backdrop:bg-black/65 backdrop:backdrop-blur-sm"
    >
      <div className="pop-in flex max-h-[92vh] flex-col">
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3">
          <div className="min-w-0">
            <p className="eyebrow text-[11px]">{project.type}</p>
            <p className="mt-0.5 truncate font-display font-semibold tracking-[-0.01em]">
              {project.title}
            </p>
          </div>
          <button
            type="button"
            onClick={() => dialogRef.current.close()}
            aria-label="Close preview"
            autoFocus
            className="icon-button shrink-0"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto">
          {project.screens ? (
            <div className="flex flex-wrap justify-center gap-6 bg-secondary/50 p-6">
              {project.screens.map((screen) => (
                <img
                  key={screen.src}
                  src={screen.src}
                  alt={screen.alt}
                  className="max-h-[72vh] w-auto max-w-full rounded-2xl border border-border shadow-lg"
                />
              ))}
            </div>
          ) : (
            <img src={project.image} alt={project.imageAlt} className="w-full" />
          )}
        </div>
      </div>
    </dialog>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openProject, setOpenProject] = useState(null);

  const visibleProjects = projects.filter(
    (project) => activeFilter === "All" || project.type === activeFilter,
  );

  return (
    <section id="projects" className="section-block section-divider">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading index="04" eyebrow="PROJECTS" title="Selected Work" />

          <div
            role="group"
            aria-label="Filter projects"
            className="flex w-full gap-0.5 overflow-x-auto rounded-xl border border-border bg-secondary/70 p-1 [scrollbar-width:none] sm:w-auto"
          >
            {filters.map((filter) => {
              const count =
                filter === "All"
                  ? projects.length
                  : projects.filter((project) => project.type === filter).length;
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 whitespace-nowrap rounded-lg px-3 py-1.5 text-[13px] font-medium transition-[background-color,color,box-shadow] duration-200 sm:px-3.5 ${
                    isActive
                      ? "bg-card text-foreground shadow-soft ring-1 ring-border"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {filter.replace(" Work", "")}
                  <span
                    className={`ml-1.5 font-mono text-[11px] ${
                      isActive ? "text-primary" : "opacity-60"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 space-y-6 md:mt-12 md:space-y-8">
          {visibleProjects.map((project, index) => {
            const number = projects.indexOf(project) + 1;
            const isFlipped = index % 2 === 1;

            return (
              <Reveal
                as="article"
                key={project.title}
                delay={index * 80}
                onPointerMove={trackPointer}
                className="spotlight card group/card overflow-hidden rounded-2xl p-4 hover:border-border-strong hover:shadow-glow sm:p-6 lg:p-8"
              >
                <div className="grid gap-7 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12">
                  <div className={isFlipped ? "lg:order-2" : undefined}>
                    <ProjectPreview project={project} onOpen={setOpenProject} />
                  </div>

                  <div className="px-1 pb-1 sm:px-0 sm:pb-0">
                    <div className="flex items-center justify-between gap-4">
                      <p className="eyebrow">
                        <span aria-hidden="true" className="h-px w-5 bg-primary/50" />
                        {project.type}
                      </p>
                      <span
                        aria-hidden="true"
                        className="select-none font-mono text-xs text-muted-foreground transition-colors duration-300 group-hover/card:text-primary"
                      >
                        {String(number).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-4 text-[1.5rem] font-semibold leading-[1.2] tracking-[-0.02em] md:text-[1.75rem]">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-[0.9875rem] leading-[1.7] text-muted-foreground md:text-base">
                      {project.description}
                    </p>

                    {project.contributions ? (
                      <div className="mt-6">
                        <p className="eyebrow text-[11px] text-muted-foreground">
                          My contributions
                        </p>
                        <ul className="mt-3 space-y-2">
                          {project.contributions.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-primary"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
                      {project.technologies.map((technology) => (
                        <li key={technology} className="chip">
                          {technology}
                        </li>
                      ))}
                    </ul>

                    {project.github || project.image || project.screens ? (
                      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5">
                        {project.image || project.screens ? (
                          <button
                            type="button"
                            onClick={() => setOpenProject(project)}
                            className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
                          >
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <rect x="3" y="3" width="18" height="18" rx="2" />
                              <circle cx="9" cy="9" r="2" />
                              <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
                            </svg>
                            <span className="link-underline pb-px">Preview</span>
                          </button>
                        ) : null}

                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
                          >
                            <span className="link-underline pb-px">Source code</span>
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            >
                              <path d="M7 17 17 7M7 7h10v10" />
                            </svg>
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Lightbox project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
