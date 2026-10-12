import type { Metadata } from "next";
import { site } from "@/content/site";
import PageHero from "@/components/PageHero";
import TreatmentCard from "@/components/TreatmentCard";
import CTABand from "@/components/CTABand";
import { Container } from "@/components/ui";
import { Stagger, StaggerItem } from "@/components/motion";

const p = site.pages.treatments;

export const metadata: Metadata = {
  title: p.title,
  description: p.metaDescription,
  alternates: { canonical: "/treatments/" },
  openGraph: { title: `${p.title} | ${site.business.fullName}`, description: p.metaDescription },
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.heading} accent={p.headingAccent} sub={p.sub} crumbs={[{ label: site.nav[0].label, href: "/" }, { label: p.title }]} />
      <section className="pb-12 pt-4 sm:pb-16">
        <Container>
          <h2 className="sr-only">{p.eyebrow}</h2>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {site.treatments.map((t) => (
              <StaggerItem key={t.slug}>
                <TreatmentCard t={t} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
      <CTABand />
    </>
  );
}
