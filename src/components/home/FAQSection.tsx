import { site, whatsappLink } from "@/content/site";
import FAQ from "../FAQ";
import { Button, Container, SectionHeading } from "../ui";
import { Reveal } from "../motion";
import { WhatsAppIcon } from "../BrandIcons";

export default function FAQSection() {
  const f = site.home.faq;
  return (
    <section className="py-20 sm:py-28" aria-labelledby="faq-heading">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading id="faq-heading" eyebrow={f.eyebrow} title={f.title} accent={f.titleAccent} sub={f.sub} />
          <Reveal delay={0.1} className="mt-8">
            <Button href={whatsappLink()} variant="whatsapp">
              <WhatsAppIcon /> {site.labels.whatsappUs}
            </Button>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <FAQ items={f.items} />
        </Reveal>
      </Container>
    </section>
  );
}
