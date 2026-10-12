import {
  Activity, Award, Baby, BadgeCheck, BadgeIndianRupee, CalendarCheck, Crown, Gem,
  HeartHandshake, Microscope, ScanLine, ShieldCheck, Smile, Sparkles, Stethoscope,
  Syringe, Users, Wand2, Zap, type LucideProps,
} from "lucide-react";
import type { IconName } from "@/content/site";

/** Custom tooth glyph drawn in the lucide style (lucide has no tooth icon). */
export function ToothIcon({ size = 24, strokeWidth = 2, className, ...rest }: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path d="M12 5.5c-1.6-1.3-3.3-2-5-1.8C4.6 4 3 6 3 8.6c0 2.2.8 3.6 1.5 5.2.7 1.7.9 3.6 1.3 5.4.3 1.4.9 2.3 1.9 2.3 1.3 0 1.7-1.4 2-3 .3-1.5.6-3.3 2.3-3.3s2 1.8 2.3 3.3c.3 1.6.7 3 2 3 1 0 1.6-.9 1.9-2.3.4-1.8.6-3.7 1.3-5.4.7-1.6 1.5-3 1.5-5.2C21 6 19.4 4 17 3.7c-1.7-.2-3.4.5-5 1.8Z" />
      <path d="M9 6.5c1 .5 2 .9 3 .9" />
    </svg>
  );
}

const map = {
  Activity, Award, Baby, BadgeCheck, BadgeIndianRupee, CalendarCheck, Crown, Gem,
  HeartHandshake, Microscope, ScanLine, ShieldCheck, Smile, Sparkles, Stethoscope,
  Syringe, Users, Wand2, Zap, Tooth: ToothIcon,
} as const;

export default function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const C = map[name];
  return <C aria-hidden="true" {...props} />;
}
