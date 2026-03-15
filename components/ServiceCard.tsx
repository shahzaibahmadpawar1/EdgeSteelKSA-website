import Link from "next/link";
import { useTranslations } from "next-intl";

interface ServiceCardProps {
  num: string;
  icon: string;
  title: string;
  body: string;
  href: string;
}

export default function ServiceCard({
  num,
  icon,
  title,
  body,
  href,
}: ServiceCardProps) {
  const t = useTranslations("serviceCard");
  return (
    <Link
      href={href}
      className="group relative bg-white p-9 max-[480px]:p-7 overflow-hidden transition-all duration-[400ms] cubic-bezier-spring cursor-pointer min-h-[300px] max-[480px]:min-h-[220px] flex flex-col no-underline text-inherit srv-card-hover"
    >
      {/* Hover background — see globals.css .srv-card-hover */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="font-mono text-[11px] tracking-[0.15em] text-slate mb-3.5 transition-colors duration-[400ms] group-hover:text-white/40">
          {num}
        </div>
        <div className="text-[30px] mb-[18px]">{icon}</div>
        <h3 className="text-[18px] font-bold tracking-[-0.02em] mb-3 transition-colors duration-[400ms] group-hover:text-white">
          {title}
        </h3>
        <p className="text-[13px] leading-[1.7] text-slate flex-1 transition-colors duration-[400ms] group-hover:text-white/60">
          {body}
        </p>
        <span className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.06em] uppercase text-orange mt-5 transition-colors duration-[400ms] group-hover:text-white/70">
          {t("learnMore")}
        </span>
      </div>
    </Link>
  );
}
