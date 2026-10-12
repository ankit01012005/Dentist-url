import Link from "next/link";
import { site } from "@/content/site";
import { ToothIcon } from "./Icon";

export default function Logo({ light = false, onClick }: { light?: boolean; onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="group inline-flex items-center gap-2.5" aria-label={`${site.business.fullName} — home`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-glow transition-transform duration-500 group-hover:rotate-[-8deg]">
        <ToothIcon size={22} strokeWidth={1.9} />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-white" aria-hidden="true" />
      </span>
      <span className="leading-none">
        <span className={`block font-display text-[1.15rem] font-extrabold tracking-tight ${light ? "text-white" : "text-brand-dark"}`}>{site.business.name}</span>
        <span className={`mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] ${light ? "text-white/70" : "text-brand-700"}`}>{site.business.nameSuffix}</span>
      </span>
    </Link>
  );
}
