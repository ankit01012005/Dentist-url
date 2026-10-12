"use client";

import { m, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ShieldCheck, RotateCcw, AlertCircle } from "lucide-react";
import { site, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./BrandIcons";
import { ease } from "./motion";

type Fields = { name: string; phone: string; treatment: string; date: string; time: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", phone: "", treatment: "", date: "", time: "", message: "" };
const todayISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

function validate(v: Fields): Errors {
  const f = site.pages.contact.form;
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = f.name.error;
  const digits = v.phone.replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
  if (!/^[6-9]\d{9}$/.test(digits)) e.phone = f.phone.error;
  if (!v.treatment) e.treatment = f.treatment.error;
  if (!v.date || v.date < todayISO()) e.date = f.date.error;
  if (!v.time) e.time = f.time.error;
  return e;
}

function buildMessage(v: Fields) {
  const c = site.pages.contact;
  const f = c.form;
  const date = new Date(v.date + "T00:00:00").toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
  return [
    `*${c.whatsappHeader}*`,
    "",
    `• ${f.name.label}: ${v.name.trim()}`,
    `• ${f.phone.label}: ${v.phone.trim()}`,
    `• ${f.treatment.label}: ${v.treatment}`,
    `• ${f.date.label}: ${date}`,
    `• ${f.time.label}: ${v.time}`,
    ...(v.message.trim() ? [`• ${f.message.label} ${v.message.trim()}`] : []),
  ].join("\n");
}

const inputCls = (err?: string) =>
  `mt-2 block w-full rounded-2xl border-0 bg-bg px-4 py-3.5 text-[16px] text-ink ring-1 transition placeholder:text-muted/60 focus:bg-white focus:outline-none focus:ring-2 ${
    err ? "ring-red-400 focus:ring-red-500" : "ring-brand-dark/10 focus:ring-brand"
  }`;

export default function BookingForm() {
  const c = site.pages.contact;
  const f = c.form;
  const [v, setV] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [sentLink, setSentLink] = useState<string | null>(null);
  const [minDate, setMinDate] = useState<string>("");
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => setMinDate(todayISO()), []);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const next = { ...v, [k]: e.target.value };
    setV(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k: keyof Fields) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(v));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(v);
    setErrors(errs);
    setTouched({ name: true, phone: true, treatment: true, date: true, time: true });
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      document.getElementById(`bf-${first}`)?.focus();
      return;
    }
    const link = whatsappLink(buildMessage(v));
    setSentLink(link);
    box.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const err = (k: keyof Fields) => (touched[k] ? errors[k] : undefined);
  const Err = ({ k }: { k: keyof Fields }) =>
    err(k) ? (
      <p id={`bf-${k}-err`} className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-red-600">
        <AlertCircle size={14} aria-hidden="true" /> {err(k)}
      </p>
    ) : null;
  const a11y = (k: keyof Fields) => ({ id: `bf-${k}`, "aria-invalid": !!err(k), "aria-describedby": err(k) ? `bf-${k}-err` : undefined });

  return (
    <div ref={box} className="relative overflow-hidden rounded-[32px] bg-white p-6 shadow-lift ring-1 ring-brand-dark/5 sm:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {sentLink ? (
          <m.div key="ok" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease }} className="py-10 text-center" role="status" aria-live="polite">
            <m.span
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
              className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/60"
            >
              <CheckCircle2 size={40} aria-hidden="true" />
            </m.span>
            <h2 className="mt-6 font-display text-2xl font-bold text-brand-dark sm:text-3xl">{c.success.title}</h2>
            <p className="mx-auto mt-3 max-w-md text-muted">{c.success.text}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={sentLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0E7F45] px-6 font-semibold text-white">
                <WhatsAppIcon /> {c.success.openAgain}
              </a>
              <button
                type="button"
                onClick={() => {
                  setV(empty);
                  setTouched({});
                  setErrors({});
                  setSentLink(null);
                }}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 font-semibold text-brand-dark ring-1 ring-brand-200 hover:ring-brand"
              >
                <RotateCcw size={17} aria-hidden="true" /> {c.success.again}
              </button>
            </div>
          </m.div>
        ) : (
          <m.form key="form" noValidate onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="bf-name" className="text-sm font-semibold text-brand-dark">{f.name.label} <span className="text-red-500" aria-hidden="true">*</span></label>
              <input {...a11y("name")} type="text" autoComplete="name" required placeholder={f.name.placeholder} value={v.name} onChange={set("name")} onBlur={blur("name")} className={inputCls(err("name"))} />
              <Err k="name" />
            </div>

            <div>
              <label htmlFor="bf-phone" className="text-sm font-semibold text-brand-dark">{f.phone.label} <span className="text-red-500" aria-hidden="true">*</span></label>
              <input {...a11y("phone")} type="tel" inputMode="tel" autoComplete="tel" required placeholder={f.phone.placeholder} value={v.phone} onChange={set("phone")} onBlur={blur("phone")} className={inputCls(err("phone"))} />
              <Err k="phone" />
            </div>

            <div>
              <label htmlFor="bf-treatment" className="text-sm font-semibold text-brand-dark">{f.treatment.label} <span className="text-red-500" aria-hidden="true">*</span></label>
              <select {...a11y("treatment")} required value={v.treatment} onChange={set("treatment")} onBlur={blur("treatment")} className={`${inputCls(err("treatment"))} ${v.treatment ? "" : "text-muted"}`}>
                <option value="" disabled>{f.treatment.placeholder}</option>
                <option>{f.treatment.general}</option>
                {site.treatments.map((t) => (
                  <option key={t.slug}>{t.name}</option>
                ))}
                <option>{f.treatment.notSure}</option>
              </select>
              <Err k="treatment" />
            </div>

            <div>
              <label htmlFor="bf-date" className="text-sm font-semibold text-brand-dark">{f.date.label} <span className="text-red-500" aria-hidden="true">*</span></label>
              <input {...a11y("date")} type="date" required min={minDate || undefined} value={v.date} onChange={set("date")} onBlur={blur("date")} className={inputCls(err("date"))} />
              <Err k="date" />
            </div>

            <div>
              <label htmlFor="bf-time" className="text-sm font-semibold text-brand-dark">{f.time.label} <span className="text-red-500" aria-hidden="true">*</span></label>
              <select {...a11y("time")} required value={v.time} onChange={set("time")} onBlur={blur("time")} className={`${inputCls(err("time"))} ${v.time ? "" : "text-muted"}`}>
                <option value="" disabled>{f.time.placeholder}</option>
                {c.timeSlots.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <Err k="time" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="bf-message" className="text-sm font-semibold text-brand-dark">{f.message.label}</label>
              <textarea id="bf-message" rows={4} placeholder={f.message.placeholder} value={v.message} onChange={set("message")} className={`${inputCls()} resize-none`} />
            </div>

            <div className="sm:col-span-2">
              <m.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full bg-[#0E7F45] text-base font-semibold text-white shadow-[0_14px_34px_-10px_rgba(14,127,69,.6)] transition-colors hover:bg-[#0B6A39]"
              >
                <WhatsAppIcon size={22} /> {f.submit}
              </m.button>
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted">
                <ShieldCheck size={14} className="shrink-0 text-brand" aria-hidden="true" /> {f.privacy}
              </p>
            </div>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}
