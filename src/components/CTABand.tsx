"use client";

import { m } from "framer-motion";
import { Phone } from "lucide-react";
import { site, telLink, whatsappLink } from "@/content/site";
import { Button, Container } from "./ui";
import { WhatsAppIcon } from "./BrandIcons";
import { ToothIcon } from "./Icon";
import { Reveal } from "./motion";

export default function CTABand() {
  const c = site.home.ctaBand;
  return (
    <section className="py-12 sm:py-16" aria-labelledby="cta-heading">
      <Container>
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brand via-brand-700 to-brand-dark px-6 py-14 text-center text-white shadow-lift sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />
            <m.div
              className="pointer-events-none absolute -left-10 -top-10 text-white/[0.07]"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            >
              <ToothIcon size={220} strokeWidth={1} />
            </m.div>
            <m.div
              className="pointer-events-none absolute -bottom-12 -right-6 text-white/[0.07]"
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            >
              <ToothIcon size={260} strokeWidth={1} />
            </m.div>

            <h2 id="cta-heading" className="relative mx-auto max-w-3xl font-display text-3xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              {c.title} <span className="accent-serif text-accent">{c.titleAccent}</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-white/80 sm:text-lg">{c.sub}</p>
            <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={whatsappLink()} variant="gold" className="sm:px-8">
                <WhatsAppIcon /> {site.cta.whatsapp}
              </Button>
              <Button href={telLink} variant="ghost-light" className="sm:px-8">
                <Phone size={18} aria-hidden="true" /> {site.business.phoneDisplay}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
