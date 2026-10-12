import type { Metadata } from "next";
import { Phone, MapPin, Clock, Siren, Navigation } from "lucide-react";
import { fullAddress, site, telLink, whatsappLink } from "@/content/site";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import { HoursTable, MapEmbed } from "@/components/ContactSection";
import { Button, Container } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { WhatsAppIcon } from "@/components/BrandIcons";

const p = site.pages.contact;

export const metadata: Metadata = {
  title: p.title,
  description: p.metaDescription,
  alternates: { canonical: "/contact/" },
  openGraph: { title: `${p.title} | ${site.business.fullName}`, description: p.metaDescription },
};

export default function ContactPage() {
  const b = site.business;
  const l = site.labels;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.heading} accent={p.headingAccent} sub={p.sub} crumbs={[{ label: site.nav[0].label, href: "/" }, { label: site.nav[5].label }]} />

      <section className="pb-20 pt-2 sm:pb-28">
        <Container className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
          <Reveal>
            <BookingForm />
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1} className="grain relative overflow-hidden rounded-[28px] bg-brand-dark p-7 text-white shadow-lift">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/50 blur-3xl" aria-hidden="true" />
              <h2 className="relative font-display text-2xl font-bold">{p.sideTitle}</h2>
              <p className="relative mt-2 text-white/75">{p.sideText}</p>
              <div className="relative mt-6 grid gap-3">
                <Button href={telLink} variant="gold"><Phone size={18} aria-hidden="true" /> {b.phoneDisplay}</Button>
                <Button href={whatsappLink()} variant="ghost-light"><WhatsAppIcon /> {l.whatsappUs}</Button>
              </div>
              <ul className="relative mt-7 space-y-3 text-sm text-white/80">
                <li className="flex gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />{fullAddress()}</li>
                <li className="flex gap-3"><Clock size={17} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />{b.hoursSummary}</li>
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="flex gap-4 rounded-[28px] bg-accent-100 p-6 ring-1 ring-accent-300">
              <Siren size={24} className="shrink-0 text-accent-700" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-brand-dark">{p.emergency}</p>
            </Reveal>

            <Reveal delay={0.2} className="rounded-[28px] bg-white p-6 shadow-soft ring-1 ring-brand-dark/5">
              <h2 className="flex items-center gap-2 font-display text-lg font-bold text-brand-dark"><Clock size={18} className="text-brand" aria-hidden="true" /> {l.hours}</h2>
              <div className="mt-3"><HoursTable /></div>
            </Reveal>
          </div>
        </Container>

        <Container className="mt-8">
          <Reveal>
            <MapEmbed className="h-[340px] sm:h-[420px]" />
            <div className="mt-4 flex justify-center">
              <Button href={b.mapLinkUrl} variant="outline"><Navigation size={17} aria-hidden="true" /> {l.directions}</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
