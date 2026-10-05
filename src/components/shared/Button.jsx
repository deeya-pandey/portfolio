const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition duration-300 disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:bg-primary-strong hover:shadow-xl hover:shadow-primary/30",
  outline:
    "border border-border bg-card/70 text-foreground hover:-translate-y-0.5 hover:border-primary hover:text-primary",
  ghost:
    "border border-primary/50 text-primary hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-glow",
};

export default function Button({
  as,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const Component = as ?? (props.href ? "a" : "button");
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  if (Component === "button" && props.type === undefined) {
    props.type = "button";
  }

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
