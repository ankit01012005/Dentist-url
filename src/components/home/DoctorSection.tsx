import { ArrowRight, Check, Quote } from "lucide-react";
import { site } from "@/content/site";
import Img from "../Img";
import { Button, Container, Eyebrow } from "../ui";
import { Reveal, Stagger, StaggerItem } from "../motion";

export default function DoctorSection({ showCta = true }: { showCta?: boolean }) {
  const d = site.doctor;
  return (
    <section className="grain relative overflow-hidden bg-brand-dark py-20 text-white sm:py-28" aria-labelledby="doctor-heading">
      <div className="pointer-events-none absolute -left-32 top-0 h-[480px] w-[480px] rounded-full bg-brand/35 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rounded-t-[999px] rounded-b-[44px] border border-accent/40" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[40px] bg-brand/30">
            <Img src={d.image} alt={d.imageAlt} ratio={1.3} width={600} widths={[360, 480, 600, 800]} sizes="(min-width: 1024px) 440px, 90vw" className="aspect-[1/1.3] h-auto w-full object-cover object-top" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-dark/80 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-5 text-center">
              <p className="font-display text-lg font-bold">{d.name}</p>
              <p className="text-sm text-white/75">{d.title}</p>
            </div>
          </div>
          <div className="absolute -right-2 top-16 rounded-2xl bg-accent px-4 py-3 text-brand-dark shadow-lift sm:-right-6">
            <p className="font-display text-3xl font-extrabold leading-none">{d.experience.replace(/\D+$/, "")}<span className="text-xl">+</span></p>
            <p className="text-[11px] font-semibold uppercase tracking-wider">{site.labels.years}</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow light>{site.home.doctor.eyebrow}</Eyebrow>
            <h2 id="doctor-heading" className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {d.name}
            </h2>
            <p className="mt-3 text-base font-medium text-accent-300 sm:text-lg">{d.degrees}</p>
          </Reveal>

          <Reveal delay={0.1} className="relative mt-8 rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur sm:p-8">
            <Quote size={36} className="absolute -top-4 left-6 rounded-full bg-accent p-2 text-brand-dark" aria-hidden="true" />
            <p className="sr-only">{d.greeting}</p>
            {d.message.map((p, i) => (
              <p key={i} className={`leading-relaxed text-white/85 ${i ? "mt-4" : ""} sm:text-[17px]`}>{p}</p>
            ))}
            <p className="mt-6 font-script text-5xl leading-none text-accent">{d.signature}</p>
          </Reveal>

          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
            {d.highlights.map((h) => (
              <StaggerItem key={h} className="flex items-start gap-3 text-[15px] text-white/85">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/20 text-accent"><Check size={14} strokeWidth={3} aria-hidden="true" /></span>
                {h}
              </StaggerItem>
            ))}
          </Stagger>

          {showCta && (
            <Reveal delay={0.2} className="mt-10">
              <Button href="/about/" variant="gold">
                {site.home.doctor.cta} <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
