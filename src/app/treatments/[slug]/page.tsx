import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Clock, CalendarDays, IndianRupee, Phone, Sparkles } from "lucide-react";
import { formatINR, site, telLink, whatsappLink } from "@/content/site";
import PageHero from "@/components/PageHero";
import Img from "@/components/Img";
import Icon from "@/components/Icon";
import FAQ from "@/components/FAQ";
import TreatmentCard from "@/components/TreatmentCard";
import CTABand from "@/components/CTABand";
import { Button, Container, Eyebrow } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { WhatsAppIcon } from "@/components/BrandIcons";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return site.treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const t = site.treatments.find((x) => x.slug === slug);
  if (!t) return {};
  const description = `${t.tagline} ${t.name} in Ranchi ${site.labels.from} ${formatINR(t.priceFrom)}. ${t.short}`;
  return {
    title: `${t.name} in Ranchi`,
    description,
    alternates: { canonical: `/treatments/${t.slug}/` },
    openGraph: { title: `${t.name} | ${site.business.fullName}`, description, images: [`${t.image}?w=1200&h=630&fit=crop&q=80`] },
  };
}

export default async function TreatmentPage({ params }: Params) {
  const { slug } = await params;
  const t = site.treatments.find((x) => x.slug === slug);
  if (!t) notFound();
  const p = site.pages.treatments;
  const others = site.treatments.filter((x) => x.slug !== t.slug && x.featured).slice(0, 3);
  const wa = whatsappLink(`${site.business.whatsappMessage} for ${t.name}.`);

  const facts = [
    { icon: IndianRupee, label: p.fromLabel, value: formatINR(t.priceFrom), note: t.priceNote },
    { icon: Clock, label: p.durationLabel, value: t.duration },
    { icon: CalendarDays, label: p.visitsLabel, value: t.visits },
  ];

  return (
    <>
      <PageHero
        eyebrow={site.nav[1].label}
        title={t.name}
        sub={t.tagline}
        crumbs={[{ label: site.nav[0].label, href: "/" }, { label: site.nav[1].label, href: "/treatments/" }, { label: t.name }]}
      >
        <Reveal delay={0.2} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={wa} variant="whatsapp"><WhatsAppIcon /> {site.cta.whatsapp}</Button>
          <Button href={telLink} variant="outline"><Phone size={18} aria-hidden="true" /> {site.cta.call}</Button>
        </Reveal>
      </PageHero>

      <section className="pb-20 pt-4 sm:pb-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-14">
          <div className="min-w-0">
            <Reveal className="relative overflow-hidden rounded-[28px] shadow-lift">
              <Img src={t.image} alt={t.imageAlt} ratio={0.56} width={1100} widths={[480, 720, 960, 1280]} sizes="(min-width: 1024px) 800px, 100vw" priority className="aspect-[16/9] h-auto w-full object-cover" />
              <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-2xl bg-white/90 text-brand shadow-soft backdrop-blur">
                <Icon name={t.icon} size={24} strokeWidth={1.8} />
              </span>
            </Reveal>

            {/* Quick facts */}
            <Stagger className="mt-6 grid gap-3 sm:grid-cols-3">
              {facts.map(({ icon: I, label, value, note }) => (
                <StaggerItem key={label} className="h-full rounded-2xl bg-white p-5 shadow-soft ring-1 ring-brand-dark/5">
                  <I size={20} className="text-brand" aria-hidden="true" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</p>
                  <p className="mt-1 font-display text-xl font-bold text-brand-dark">{value}</p>
                  {note && <p className="mt-1 text-xs leading-relaxed text-muted">{note}</p>}
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-14">
              <h2 className="font-display text-2xl font-bold text-brand-dark sm:text-3xl">{p.whatIsLabel}</h2>
              {t.whatIs.map((para, i) => (
                <p key={i} className="mt-4 text-[17px] leading-relaxed text-muted">{para}</p>
              ))}
            </Reveal>

            <Reveal className="mt-14 rounded-[28px] bg-brand-50 p-6 ring-1 ring-brand-100 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-brand-dark sm:text-3xl">{p.whoLabel}</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {t.whoNeeds.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-[15px] text-ink/85">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white"><Check size={14} strokeWidth={3} aria-hidden="true" /></span>
                    {w}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="mt-14">
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-brand-dark sm:text-3xl">{p.stepsLabel}</h2>
              </Reveal>
              <ol className="relative mt-8 space-y-6 before:absolute before:bottom-4 before:left-[22px] before:top-4 before:w-px before:bg-gradient-to-b before:from-brand before:to-brand-100">
                {t.steps.map((s, i) => (
                  <Reveal as="li" key={s.title} delay={i * 0.06} className="relative flex gap-5">
                    <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white font-display font-bold text-brand shadow-soft ring-2 ring-brand">{i + 1}</span>
                    <div className="pt-1.5">
                      <h3 className="font-display text-lg font-bold text-brand-dark">{s.title}</h3>
                      <p className="mt-1 leading-relaxed text-muted">{s.text}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>

            <Reveal className="mt-14">
              <h2 className="font-display text-2xl font-bold text-brand-dark sm:text-3xl">{p.benefitsLabel}</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {t.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3 rounded-2xl bg-white p-4 font-medium text-brand-dark shadow-soft ring-1 ring-brand-dark/5">
                    <Sparkles size={18} className="shrink-0 text-accent" aria-hidden="true" /> {b}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <h2 className="mb-6 font-display text-2xl font-bold text-brand-dark sm:text-3xl">{p.faqLabel}</h2>
              <FAQ items={t.faqs} />
            </Reveal>
          </div>

          {/* Sticky booking card */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal className="grain relative overflow-hidden rounded-[28px] bg-brand-dark p-7 text-white shadow-lift">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/50 blur-3xl" aria-hidden="true" />
              <p className="relative text-xs font-semibold uppercase tracking-[0.16em] text-accent-300">{p.fromLabel}</p>
              <p className="relative mt-1 font-display text-5xl font-extrabold">{formatINR(t.priceFrom)}</p>
              <p className="relative mt-2 text-sm text-white/70">{t.priceNote}</p>
              <div className="relative my-6 h-px bg-white/10" />
              <ul className="relative space-y-2.5 text-sm text-white/85">
                <li className="flex items-center gap-2.5"><Clock size={16} className="text-accent" aria-hidden="true" />{t.duration}</li>
                <li className="flex items-center gap-2.5"><CalendarDays size={16} className="text-accent" aria-hidden="true" />{t.visits}</li>
                <li className="flex items-center gap-2.5"><Check size={16} className="text-accent" aria-hidden="true" />{site.home.why.items[3].title}</li>
              </ul>
              <div className="relative mt-7 grid gap-3">
                <Button href={wa} variant="gold"><WhatsAppIcon /> {p.detailCta}</Button>
                <Button href={telLink} variant="ghost-light"><Phone size={17} aria-hidden="true" /> {site.business.phoneDisplay}</Button>
              </div>
            </Reveal>
          </aside>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24" aria-labelledby="other-heading">
        <Container>
          <Eyebrow>{p.otherLabel}</Eyebrow>
          <h2 id="other-heading" className="sr-only">{p.otherLabel}</h2>
          <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <StaggerItem key={o.slug}><TreatmentCard t={o} /></StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
