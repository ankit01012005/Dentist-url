import type { Metadata } from "next";
import { site } from "@/content/site";
import PageHero from "@/components/PageHero";
import RatingSummary from "@/components/RatingSummary";
import ReviewCard from "@/components/ReviewCard";
import CTABand from "@/components/CTABand";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion";

const p = site.pages.reviews;

export const metadata: Metadata = {
  title: p.title,
  description: p.metaDescription,
  alternates: { canonical: "/reviews/" },
  openGraph: { title: `${p.title} | ${site.business.fullName}`, description: p.metaDescription },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.heading} accent={p.headingAccent} end={p.headingEnd} sub={p.sub} crumbs={[{ label: site.nav[0].label, href: "/" }, { label: p.title }]} />
      <section className="pb-20 pt-2 sm:pb-28">
        <Container>
          <Reveal>
            <RatingSummary />
          </Reveal>
          <h2 className="sr-only">{p.eyebrow}</h2>
          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
            {site.reviews.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 0.08}>
                <ReviewCard r={r} i={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTABand />
    </>
  );
}
