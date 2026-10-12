import { ShieldCheck } from "lucide-react";
import { site } from "@/content/site";
import Img from "../Img";
import Icon from "../Icon";
import { Container, SectionHeading } from "../ui";
import { Reveal, Stagger, StaggerItem } from "../motion";

export default function WhyChoose() {
  const w = site.home.why;
  return (
    <section className="py-20 sm:py-28" aria-labelledby="why-heading">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[32px] shadow-lift">
            <Img src={w.image} alt={w.imageAlt} ratio={1.1} width={720} widths={[400, 560, 720, 960]} sizes="(min-width: 1024px) 560px, 100vw" className="aspect-[1/1.1] h-auto w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" aria-hidden="true" />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl bg-white/90 p-4 shadow-lift ring-1 ring-white backdrop-blur-xl sm:left-8 sm:right-auto sm:max-w-xs">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand text-white"><ShieldCheck size={24} aria-hidden="true" /></span>
            <div>
              <p className="font-display font-bold text-brand-dark">{w.items[2].title}</p>
              <p className="text-sm text-muted">{site.pages.about.certs[2].text}</p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading id="why-heading" eyebrow={w.eyebrow} title={w.title} accent={w.titleAccent} sub={w.sub} />
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
            {w.items.map((it, i) => (
              <StaggerItem key={it.title} className="group relative h-full rounded-3xl bg-white p-6 shadow-soft ring-1 ring-brand-dark/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <span className="absolute right-5 top-5 font-display text-sm font-bold text-brand-200">0{i + 1}</span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                  <Icon name={it.icon} size={24} strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-brand-dark">{it.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{it.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
