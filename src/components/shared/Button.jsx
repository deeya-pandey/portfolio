const base =
  "inline-flex h-11 items-center justify-center gap-2 rounded-[0.625rem] px-5 text-sm font-medium tracking-[-0.005em] transition-[background-color,border-color,color,box-shadow,transform] duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-[inset_0_1px_0_rgb(255_255_255/0.18),0_1px_2px_rgb(0_0_0/0.12)] hover:bg-primary-strong hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.18),0_8px_20px_-8px_var(--site-primary)]",
  outline:
    "border border-border bg-card text-foreground shadow-soft hover:border-border-strong hover:bg-secondary",
  ghost:
    "border border-primary/35 text-primary hover:border-primary/60 hover:bg-primary/[0.07]",
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
