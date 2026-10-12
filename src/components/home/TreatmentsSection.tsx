import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import TreatmentCard from "../TreatmentCard";
import { Button, Container, SectionHeading } from "../ui";
import { Stagger, StaggerItem } from "../motion";

export default function TreatmentsSection() {
  const t = site.home.treatments;
  return (
    <section className="py-20 sm:py-28" aria-labelledby="treatments-heading">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="treatments-heading" eyebrow={t.eyebrow} title={t.title} accent={t.titleAccent} sub={t.sub} />
          <Button href="/treatments/" variant="outline" className="shrink-0 self-start md:self-auto">
            {t.viewAll} <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {site.treatments.filter((x) => x.featured).map((x) => (
            <StaggerItem key={x.slug}>
              <TreatmentCard t={x} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
