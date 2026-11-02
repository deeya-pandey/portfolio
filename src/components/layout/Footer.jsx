import SocialLinks from "../shared/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#home"
            className="font-mono text-base font-semibold tracking-tight text-primary transition-opacity duration-200 hover:opacity-75"
          >
            &lt;DP /&gt;
          </a>
          <span aria-hidden="true" className="hidden h-4 w-px bg-border sm:block" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Deeya Pandey · Built with React
          </p>
        </div>

        <SocialLinks />
      </div>
    </footer>
  );
}
