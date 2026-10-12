"use client";

import { m, AnimatePresence } from "framer-motion";
import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { FAQ as FAQItem } from "@/content/site";
import { ease } from "./motion";

/** Accessible accordion. First item open by default. */
export default function FAQ({ items, defaultOpen = 0 }: { items: FAQItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const uid = useId();

  return (
    <div className="space-y-3">
      {items.map((f, i) => {
        const isOpen = open === i;
        const btnId = `${uid}-q${i}`;
        const panelId = `${uid}-a${i}`;
        return (
          <div key={f.q} className={`rounded-2xl bg-white ring-1 transition-all duration-300 ${isOpen ? "shadow-lift ring-brand-200" : "shadow-soft ring-brand-dark/5 hover:ring-brand-200"}`}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left font-display text-[16px] font-semibold text-brand-dark sm:px-6 sm:text-[17px]"
              >
                {f.q}
                <m.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.35, ease }}
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors ${isOpen ? "bg-brand text-white" : "bg-brand-50 text-brand"}`}
                >
                  <Plus size={18} aria-hidden="true" />
                </m.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <m.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-6 leading-relaxed text-muted sm:px-6">{f.a}</p>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
