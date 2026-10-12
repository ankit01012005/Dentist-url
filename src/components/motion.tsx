"use client";

import { m, animate, useInView, useMotionValue, useReducedMotion, useTransform, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article" | "header";
};

/** Fade + slide-up when scrolled into view. */
export function Reveal({ children, className, delay = 0, y = 28, as = "div" }: RevealProps) {
  const M = m[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </M>
  );
}

/** Parent that staggers its <StaggerItem> children into view. */
export function Stagger({ children, className, gap = 0.08, delay = 0 }: { children: React.ReactNode; className?: string; gap?: number; delay?: number }) {
  return (
    <m.div
      className={className}
      variants={stagger(gap, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <m.div className={className} variants={fadeUp}>
      {children}
    </m.div>
  );
}

/** Number that counts up once when visible. Shows the final value instantly with reduced motion. */
export function Counter({ to, decimals = 0, suffix = "", className }: { to: number; decimals?: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => v.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      mv.set(to);
      return;
    }
    const c = animate(mv, to, { duration: 2, ease: [0.16, 1, 0.3, 1] });
    return () => c.stop();
  }, [inView, reduce, to, mv]);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{to.toLocaleString("en-IN") + suffix}</span>
      <m.span aria-hidden="true">{text}</m.span>
    </span>
  );
}
