"use client";

import { useEffect, useState } from "react";
import { MapPin, Phone, Clock, Navigation, Mail } from "lucide-react";
import { fullAddress, site, telLink, whatsappLink } from "@/content/site";
import { Button, Container, SectionHeading } from "./ui";
import { Reveal } from "./motion";
import { WhatsAppIcon } from "./BrandIcons";

export function HoursTable() {
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => setToday(new Date().toLocaleDateString("en-US", { weekday: "long" })), []);
  return (
    <table className="w-full text-[15px]">
      <caption className="sr-only">{site.labels.hours}</caption>
      <tbody>
        {site.business.hours.map((h) => {
          const isToday = h.day === today;
          return (
            <tr key={h.day} className={`border-b border-brand-100 last:border-0 ${isToday ? "font-semibold text-brand-dark" : "text-muted"}`}>
              <th scope="row" className="py-2.5 pr-3 text-left font-medium">
                <span className="flex items-center gap-2">
                  {h.day}
                  {isToday && <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">{site.home.contact.todayLabel}</span>}
                </span>
              </th>
              <td className="py-2.5 text-right">
                {h.slots.map((s) => (
                  <span key={s} className="block">{s}</span>
                ))}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[28px] bg-brand-100 shadow-soft ring-1 ring-brand-dark/5 ${className}`}>
      <iframe
        title={`${site.business.fullName} location on Google Maps`}
        src={site.business.mapEmbedUrl}
        className="absolute inset-0 h-full w-full border-0 grayscale-[0.2]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

export default function ContactSection() {
  const c = site.home.contact;
  const b = site.business;
  const l = site.labels;
  return (
    <section className="py-20 sm:py-28" aria-labelledby="contact-heading">
      <Container>
        <SectionHeading id="contact-heading" eyebrow={c.eyebrow} title={c.title} sub={c.sub} />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="rounded-[28px] bg-white p-6 shadow-soft ring-1 ring-brand-dark/5 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="flex gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand"><MapPin size={20} aria-hidden="true" /></span>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{l.address}</h3>
                  <p className="mt-1 font-medium text-brand-dark">{fullAddress()}</p>
                  <p className="mt-0.5 text-sm text-muted">{b.address.landmark}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand"><Phone size={20} aria-hidden="true" /></span>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{l.phone}</h3>
                  <a href={telLink} className="mt-1 block font-medium text-brand-dark hover:text-brand">{b.phoneDisplay}</a>
                  <a href={`mailto:${b.email}`} className="mt-0.5 flex items-center gap-1.5 break-all text-sm text-muted hover:text-brand"><Mail size={13} aria-hidden="true" />{b.email}</a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                <Clock size={15} className="text-brand" aria-hidden="true" /> {l.hours}
              </h3>
              <div className="mt-2"><HoursTable /></div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Button href={whatsappLink()} variant="whatsapp"><WhatsAppIcon /> {l.whatsappUs}</Button>
              <Button href={b.mapLinkUrl} variant="outline"><Navigation size={17} aria-hidden="true" /> {l.directions}</Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <MapEmbed className="h-[360px] lg:h-full lg:min-h-[480px]" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
