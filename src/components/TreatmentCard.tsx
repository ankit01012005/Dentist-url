import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatINR, site, type Treatment } from "@/content/site";
import Img from "./Img";
import Icon from "./Icon";

export default function TreatmentCard({ t }: { t: Treatment }) {
  return (
    <Link
      href={`/treatments/${t.slug}/`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-2.5 shadow-soft ring-1 ring-brand-dark/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="relative overflow-hidden rounded-[18px]">
        <Img
          src={t.image}
          alt={t.imageAlt}
          ratio={0.62}
          width={640}
          widths={[360, 480, 640, 800]}
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="aspect-[1/0.62] h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" aria-hidden="true" />
        <span className="absolute left-3 top-3 grid h-11 w-11 place-items-center rounded-2xl bg-white/90 text-brand shadow-soft backdrop-blur">
          <Icon name={t.icon} size={22} strokeWidth={1.8} />
        </span>
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-dark backdrop-blur">
          {site.labels.from} {formatINR(t.priceFrom)}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <h3 className="font-display text-xl font-bold text-brand-dark">{t.name}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{t.short}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          {site.cta.learnMore}
          <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-50 transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-white">
            <ArrowUpRight size={15} aria-hidden="true" />
          </span>
        </span>
      </div>
    </Link>
  );
}
