import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site, telLink, whatsappLink, fullAddress } from "@/content/site";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, WhatsAppIcon, YoutubeIcon } from "./BrandIcons";
import { Container } from "./ui";

export default function Footer() {
  const b = site.business;
  const l = site.labels;
  const socials = [
    { href: b.social.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: b.social.facebook, label: "Facebook", Icon: FacebookIcon },
    { href: b.social.youtube, label: "YouTube", Icon: YoutubeIcon },
    { href: whatsappLink(), label: "WhatsApp", Icon: WhatsAppIcon },
  ];

  return (
    <footer className="grain relative overflow-hidden bg-brand-dark pb-28 pt-16 text-white/75 md:pb-10 md:pt-20">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand/30 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">{l.footerBlurb}</p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">{l.followUs}</p>
            <ul className="mt-3 flex gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-accent hover:text-brand-dark"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label={l.quickLinks}>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">{l.quickLinks}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="transition hover:text-accent">{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={l.treatmentsHeading}>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">{l.treatmentsHeading}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {site.treatments.filter((t) => t.featured).map((t) => (
                <li key={t.slug}>
                  <Link href={`/treatments/${t.slug}/`} className="transition hover:text-accent">{t.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">{l.contactHeading}</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" /><a href={b.mapLinkUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">{fullAddress()}</a></li>
              <li className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" /><a href={telLink} className="hover:text-accent">{b.phoneDisplay}</a></li>
              <li className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" /><a href={`mailto:${b.email}`} className="break-all hover:text-accent">{b.email}</a></li>
              <li className="flex gap-3"><Clock size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" /><span>{b.hoursSummary}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {b.fullName}. {l.copyright}</p>
          <p>{l.credit}</p>
        </div>
      </Container>
    </footer>
  );
}
