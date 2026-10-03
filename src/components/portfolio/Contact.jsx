export default function Contact() {
  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-sm text-primary">
          05. CONTACT
        </p>

        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
          Let's Connect
        </h2>

        <p className="mt-5 leading-relaxed text-muted-foreground">
          I'm open to discussing development opportunities,
          interesting projects and opportunities to grow as a
          software and DevOps engineer.
        </p>

        <a
          href="mailto:deeyapandey123@gmail.com"
          className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-glow"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}