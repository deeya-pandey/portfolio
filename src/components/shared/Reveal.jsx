import { useEffect, useRef, useState } from "react";

/**
 * Fades its children in the first time they scroll into view.
 * No-ops for visitors who prefer reduced motion.
 */
function shouldSkipAnimation() {
  if (typeof window === "undefined") return true;
  if (typeof IntersectionObserver === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Reveal({
  as: Component = "div",
  delay = 0,
  className = "",
  children,
  ...props
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(shouldSkipAnimation);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || shouldSkipAnimation()) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={elementRef}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${isVisible ? "reveal-visible" : ""} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
