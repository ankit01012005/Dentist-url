import type { Metadata } from "next";
import { site } from "@/content/site";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import BeforeAfter from "@/components/home/BeforeAfter";
import CTABand from "@/components/CTABand";
import { Container } from "@/components/ui";

const p = site.pages.gallery;

export const metadata: Metadata = {
  title: p.title,
  description: p.metaDescription,
  alternates: { canonical: "/gallery/" },
  openGraph: { title: `${p.title} | ${site.business.fullName}`, description: p.metaDescription },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.heading} accent={p.headingAccent} sub={p.sub} crumbs={[{ label: site.nav[0].label, href: "/" }, { label: p.title }]} />
      <section className="pb-20 pt-2 sm:pb-28">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
      <BeforeAfter />
      <CTABand />
    </>
  );
}
