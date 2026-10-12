import { site } from "@/content/site";
import { Container } from "../ui";
import { Counter, Stagger, StaggerItem } from "../motion";

export default function StatsStrip() {
  return (
    <section aria-label="Clinic highlights" className="relative">
      <Container>
        <div className="grain relative overflow-hidden rounded-[28px] bg-brand-dark px-4 py-8 text-white shadow-lift sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-brand/40 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
          <Stagger className="relative grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-white/10" gap={0.1}>
            {site.home.stats.map((s, i) => (
              <StaggerItem key={s.label} className={`text-center lg:px-4 ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}>
                <p className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                  {s.value !== undefined ? (
                    <Counter to={s.value} decimals={s.decimals} suffix={s.suffix} />
                  ) : (
                    <span>{s.text}</span>
                  )}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-accent-300 sm:text-[13px]">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
