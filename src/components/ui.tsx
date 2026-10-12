import Link from "next/link";
import { Reveal } from "./motion";

/** Small pill label above section titles. */
export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${
        light ? "bg-white/10 text-accent-300 ring-1 ring-white/15" : "bg-brand-100/70 text-brand-700 ring-1 ring-brand-200/70"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-accent" : "bg-brand"}`} aria-hidden="true" />
      {children}
    </span>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: string;
  accent?: string;
  end?: string;
  sub?: string;
  center?: boolean;
  light?: boolean;
  as?: "h1" | "h2";
  className?: string;
  id?: string;
};

/** Section heading: eyebrow + title with an italic serif accent word. */
export function SectionHeading({ eyebrow, title, accent, end, sub, center = false, light = false, as = "h2", className = "", id }: HeadingProps) {
  const H = as;
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <H
        id={id}
        className={`mt-4 font-display font-bold leading-[1.08] ${as === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl lg:text-[2.85rem]"} ${
          light ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}{" "}
        {accent && <span className={`accent-serif ${light ? "text-accent" : "text-brand"}`}>{accent}</span>}
        {end && <> {end}</>}
      </H>
      {sub && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/75" : "text-muted"}`}>{sub}</p>}
    </Reveal>
  );
}

type BtnProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "whatsapp" | "outline" | "ghost-light" | "gold";
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

const variants: Record<NonNullable<BtnProps["variant"]>, string> = {
  primary: "bg-brand text-white shadow-glow hover:bg-brand-700",
  whatsapp: "bg-[#0E7F45] text-white shadow-[0_12px_30px_-10px_rgba(14,127,69,.6)] hover:bg-[#0B6A39]",
  outline: "bg-white text-brand-dark ring-1 ring-brand-200 hover:ring-brand hover:text-brand",
  "ghost-light": "bg-white/10 text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/20",
  gold: "bg-accent text-brand-dark shadow-[0_12px_30px_-10px_rgba(232,176,75,.7)] hover:brightness-105",
};

/** Pill button. Uses <a> for external/tel links and <Link> for internal routes. */
export function Button({ href, children, variant = "primary", className = "", external, ariaLabel }: BtnProps) {
  const cls = `group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`;
  const isExternal = external ?? (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:"));
  if (isExternal) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

export function Stars({ rating = 5, size = 16, className = "" }: { rating?: number; size?: number; className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className={i < Math.round(rating) ? "text-[#F5B323]" : "text-slate-300"}>
          <path fill="currentColor" d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
