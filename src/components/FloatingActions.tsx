"use client";

import { m } from "framer-motion";
import { Phone } from "lucide-react";
import { site, telLink, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./BrandIcons";

/** Floating WhatsApp bubble (all screens) + sticky Call/WhatsApp bar (mobile only). */
export default function FloatingActions() {
  return (
    <>
      <m.a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${site.labels.whatsappUs} ${site.business.fullName}`}
        className="group fixed bottom-[88px] right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#0E7F45] text-white shadow-[0_14px_34px_-8px_rgba(14,127,69,.65)] md:bottom-6 md:right-6 md:h-16 md:w-16"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#0E7F45]" aria-hidden="true" />
        <WhatsAppIcon size={30} className="relative" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-brand-dark px-4 py-2 text-sm font-medium text-white opacity-0 shadow-lift transition-all duration-300 group-hover:opacity-100 md:block">
          {site.cta.whatsapp}
        </span>
      </m.a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-dark/5 bg-white/90 px-3 pb-[max(env(safe-area-inset-bottom),10px)] pt-2.5 backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-2 gap-2.5">
          <a href={telLink} className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-dark text-[15px] font-semibold text-white">
            <Phone size={18} aria-hidden="true" /> {site.labels.callUs}
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0E7F45] text-[15px] font-semibold text-white">
            <WhatsAppIcon /> {site.labels.whatsappUs}
          </a>
        </div>
      </div>
    </>
  );
}
