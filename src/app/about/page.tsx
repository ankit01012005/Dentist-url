import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { site } from "@/content/site";
import PageHero from "@/components/PageHero";
import Img from "@/components/Img";
import Icon from "@/components/Icon";
import DoctorSection from "@/components/home/DoctorSection";
import CTABand from "@/components/CTABand";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

const p = site.pages.about;

export const metadata: Metadata = {
  title: p.title,
  description: p.metaDescription,
  alternates: { canonical: "/about/" },
  openGraph: { title: `${p.title} | ${site.business.fullName}`, description: p.metaDescription },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.heading} accent={p.headingAccent} crumbs={[{ label: site.nav[0].label, href: "/" }, { label: p.title }]} />

      {/* Story */}
      <section className="pb-20 sm:pb-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[32px] shadow-lift">
              <Img src={p.storyImage} alt={p.storyImageAlt} ratio={0.9} width={720} widths={[400, 560, 720, 960]} sizes="(min-width: 1024px) 600px, 100vw" priority className="aspect-[1/0.9] h-auto w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 right-4 rounded-2xl bg-accent px-5 py-4 text-brand-dark shadow-lift sm:-right-6">
              <p className="text-xs font-semibold uppercase tracking-wider">{site.labels.since}</p>
              <p className="font-display text-4xl font-extrabold leading-none">{site.business.established}</p>
            </div>
          </Reveal>
          <div>
            {p.story.map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className={`leading-relaxed text-muted ${i === 0 ? "font-display text-xl font-medium text-brand-dark sm:text-2xl" : "mt-5 text-[17px]"}`}>{para}</p>
              </Reveal>
            ))}
            <Stagger className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {p.milestones.map((m) => (
                <StaggerItem key={m.label} className="rounded-2xl bg-white p-4 text-center shadow-soft ring-1 ring-brand-dark/5">
                  <p className="font-display text-2xl font-extrabold text-brand">{m.value}</p>
                  <p className="mt-1 text-xs leading-snug text-muted">{m.label}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      <DoctorSection showCta={false} />

      {/* Education */}
      <section className="bg-white py-20 sm:py-24" aria-labelledby="edu-heading">
        <Container>
          <Eyebrow>{p.doctorEyebrow}</Eyebrow>
          <h2 id="edu-heading" className="mt-4 font-display text-3xl font-bold text-brand-dark sm:text-4xl">{p.educationLabel}</h2>
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.doctor.education.map((e) => (
              <StaggerItem key={e.year} className="relative h-full rounded-3xl bg-bg p-6 ring-1 ring-brand-100">
                <GraduationCap size={22} className="text-brand" aria-hidden="true" />
                <p className="mt-4 font-display text-sm font-bold text-accent-700">{e.year}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-brand-dark">{e.title}</h3>
                <p className="mt-1 text-sm text-muted">{e.place}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-6 text-sm text-muted">{site.doctor.registration}</p>
        </Container>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28" aria-labelledby="team-heading">
        <Container>
          <SectionHeading id="team-heading" eyebrow={p.teamEyebrow} title={p.teamHeading} accent={p.teamHeadingAccent} />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {p.team.map((m) => (
              <StaggerItem key={m.name} className="group">
                <div className="overflow-hidden rounded-[28px] bg-brand-100 shadow-soft">
                  <Img src={m.image} alt={m.alt} ratio={1.15} width={600} widths={[360, 480, 600, 800]} sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="aspect-[1/1.15] h-auto w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-dark">{m.name}</h3>
                <p className="text-sm font-semibold text-brand">{m.role}</p>
                <p className="mt-2 text-[15px] text-muted">{m.bio}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Clinic tour */}
      <section className="bg-white py-20 sm:py-28" aria-labelledby="tour-heading">
        <Container>
          <SectionHeading id="tour-heading" eyebrow={p.tourEyebrow} title={p.tourHeading} accent={p.tourHeadingAccent} />
          <Stagger className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 sm:auto-rows-[260px] sm:gap-4 lg:grid-cols-4">
            {p.tour.map((t, i) => (
              <StaggerItem key={t.caption} className={`group relative overflow-hidden rounded-3xl bg-brand-100 ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                <Img src={t.image} alt={t.alt} ratio={0.75} width={i === 0 ? 900 : 600} widths={[360, 600, 900]} sizes={i === 0 ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 320px, 50vw"} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" aria-hidden="true" />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white sm:text-base">{t.caption}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-20 sm:py-24" aria-labelledby="cert-heading">
        <Container>
          <Eyebrow>{p.certEyebrow}</Eyebrow>
          <h2 id="cert-heading" className="sr-only">{p.certEyebrow}</h2>
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.certs.map((c) => (
              <StaggerItem key={c.title} className="flex h-full items-start gap-4 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-brand-dark/5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent-100 text-accent-700"><Icon name={c.icon} size={22} /></span>
                <div>
                  <h3 className="font-display font-bold text-brand-dark">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted">{c.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
