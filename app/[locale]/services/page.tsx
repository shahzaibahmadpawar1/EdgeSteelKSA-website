import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { locales } from "@/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Services — Edge Steel KSA",
  description:
    "Edge Steel KSA's complete fabrication capabilities: CNC fiber laser cutting, turret punching, press brake bending, plate and section rolling, galvanizing, and industrial painting — serving KSA's industrial and construction sectors.",
};

interface NavItem { label: string; href: string; }
interface Spec { label: string; value: string; }
interface Step { num: string; title: string; desc: string; }
interface ServiceBlock {
  id: string; num: string; badge: string; serviceLabel: string;
  title: string; image: string; desc: string;
  specs: Spec[]; steps: Step[]; cta: string;
}
interface ProcessStep { code: string; title: string; desc: string; }
interface Testimonial { stars: string; quote: string; initials: string; name: string; role: string; }

export default async function ServicesPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations("servicesPage");

  const navItems = t.raw("nav") as NavItem[];
  const serviceBlocks = t.raw("serviceBlocks") as ServiceBlock[];
  const statsBar = t.raw("statsBar") as string[];
  const processSteps = (t.raw("howWeWork") as { steps: ProcessStep[] }).steps;
  const testimonials = t.raw("testimonials") as Testimonial[];

  return (
    <>
      {/* ── HERO ── */}
      <div className="mt-[72px] bg-charcoal relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.03) 60px,rgba(255,255,255,0.03) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.03) 60px,rgba(255,255,255,0.03) 61px)",
          }}
        />
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5 pt-[80px] pb-[80px] relative z-10">
          {/* Breadcrumb */}
          <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 mb-8 flex items-center gap-2">
            <Link href="/" className="text-white/35 no-underline hover:text-orange transition-colors duration-200">{t("hero.breadcrumb_home")}</Link>
            <span className="text-white/20">/</span>
            <span className="text-orange">{t("hero.breadcrumb_services")}</span>
          </div>
          <h1 className="text-[clamp(48px,6vw,88px)] font-[800] tracking-[-0.04em] text-white leading-[0.92] mb-6">
            {t("hero.heading1")}<br />
            <em className="not-italic text-orange">{t("hero.heading2")}</em>
          </h1>
          <p className="text-[15px] text-white/50 leading-[1.75] max-w-[540px] mt-6">
            {t("hero.sub")}
          </p>
        </div>
      </div>

      {/* ── STICKY SERVICE NAV ── */}
      <nav className="sticky top-[72px] z-[900] bg-white border-b border-border overflow-x-auto">
        <div className="flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] tracking-[0.14em] uppercase text-slate px-7 max-md:px-5 py-[18px] border-b-2 border-transparent whitespace-nowrap no-underline transition-all duration-200 hover:text-charcoal hover:border-orange"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── SERVICE BLOCKS ── */}
      {serviceBlocks.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={i % 2 === 0 ? "bg-white" : "bg-grey-bg"}
        >
          <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5 py-[100px] max-md:py-16">
            <div className={`grid grid-cols-2 max-lg:grid-cols-1 gap-16 max-lg:gap-10 items-start ${i % 2 !== 0 ? "[&>*:first-child]:order-2 max-lg:[&>*:first-child]:order-none" : ""}`}>

              {/* Image column */}
              <div>
                {/* Image with overlay */}
                <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover opacity-85"
                  />
                  {/* Bottom overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex items-end justify-between">
                    <div className="font-mono text-[clamp(60px,8vw,100px)] font-bold text-white/10 leading-none select-none">
                      {s.num}
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-1">
                        {s.badge}
                      </div>
                      <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/40">
                        {s.serviceLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specs grid */}
                <div className="grid grid-cols-2 border-l border-b border-r border-border">
                  {s.specs.map((spec) => (
                    <div key={spec.label} className="border-t border-r border-border px-5 py-4 [&:nth-child(even)]:border-r-0">
                      <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-slate mb-1">
                        {spec.label}
                      </div>
                      <div className="text-[13px] font-bold text-charcoal leading-[1.35]">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content column */}
              <div>
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-5 flex items-center gap-3">
                  <span className="w-5 h-px bg-orange inline-block" />
                  {s.serviceLabel}
                </div>
                <h2 className="text-[clamp(28px,3vw,42px)] font-[800] tracking-[-0.03em] leading-[1.05] mb-5">
                  {s.title}
                </h2>
                <p className="text-[15px] text-slate leading-[1.85] mb-9">
                  {s.desc}
                </p>

                {/* Process steps */}
                <div className="space-y-0 border border-border mb-8">
                  {s.steps.map((step, idx) => (
                    <div
                      key={step.num}
                      className={`flex gap-5 px-6 py-5 ${idx !== s.steps.length - 1 ? "border-b border-border" : ""}`}
                    >
                      <div className="font-mono text-[11px] font-bold text-orange flex-shrink-0 pt-0.5 w-6">
                        {step.num}
                      </div>
                      <div>
                        <div className="text-[13px] font-bold text-charcoal mb-1">
                          {step.title}
                        </div>
                        <div className="text-[13px] text-slate leading-[1.65]">
                          {step.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/#contact"
                  className="inline-block px-7 py-4 bg-orange text-white font-bold text-[12px] tracking-[0.1em] uppercase no-underline transition-colors duration-300 hover:bg-orange-dark"
                >
                  {s.cta}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── STATS BAR ── */}
      <div className="bg-charcoal border-y border-white/[0.06] overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap" style={{ width: "max-content" }}>
          {[...statsBar, ...statsBar, ...statsBar, ...statsBar].map((stat, i) => (
            <span
              key={i}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/60 px-10 py-5 inline-flex items-center gap-4"
            >
              <span className="w-1 h-1 rounded-full bg-orange flex-shrink-0" />
              {stat}
            </span>
          ))}
        </div>
      </div>

      {/* ── HOW WE WORK ── */}
      <section className="py-[100px] max-md:py-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-4 flex items-center gap-3">
            <span className="w-5 h-px bg-orange inline-block" />
            {t("howWeWork.label")}
          </div>
          <h2 className="text-[clamp(32px,3.5vw,52px)] font-[800] tracking-[-0.03em] leading-[1.05] mb-14 max-md:mb-8">
            {t("howWeWork.heading1")}<br className="max-md:hidden" /> {t("howWeWork.heading2")}
          </h2>

          {/* Timeline row */}
          <div className="relative flex items-start max-md:flex-col max-md:gap-0">
            {/* Connecting line (desktop) */}
            <div className="absolute top-[18px] left-0 right-0 h-px bg-border max-md:hidden" />
            {processSteps.map((step, i) => (
              <div key={step.code} className="flex-1 relative max-md:flex max-md:gap-4 max-md:border-b max-md:border-border max-md:pb-5 max-md:mb-5 max-md:last:border-b-0 max-md:last:mb-0 max-md:last:pb-0">
                {/* Code box */}
                <div className="w-[52px] h-[36px] border border-border bg-white flex items-center justify-center relative z-10 mb-5 max-md:mb-0 max-md:flex-shrink-0">
                  <span className="font-mono text-[10px] font-bold text-charcoal tracking-[0.08em]">{step.code}</span>
                </div>
                <div className="max-md:pt-1">
                  <div className="text-[13px] font-bold text-charcoal mb-1.5 leading-[1.3]">
                    {step.title}
                  </div>
                  <div className="text-[12px] text-orange leading-[1.65] pr-4">
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-[100px] max-md:py-16 bg-grey-bg">
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-0.5">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-10 max-md:p-7">
                <div className="text-orange text-[14px] tracking-[0.05em] mb-5">{testimonial.stars}</div>
                <blockquote className="text-[15px] text-charcoal leading-[1.8] mb-7 font-[400] italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-charcoal flex items-center justify-center font-mono text-[12px] font-bold text-white flex-shrink-0">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-charcoal">{testimonial.name}</div>
                    <div className="text-[12px] text-slate mt-0.5">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-[100px] max-md:py-16 bg-charcoal relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.03) 60px,rgba(255,255,255,0.03) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.03) 60px,rgba(255,255,255,0.03) 61px)",
          }}
        />
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5 text-center relative z-10">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-5 flex items-center justify-center gap-3">
            <span className="w-5 h-px bg-orange inline-block" />
            {t("cta.label")}
          </div>
          <h2 className="text-[clamp(36px,4vw,64px)] font-[800] tracking-[-0.03em] text-white leading-[1.0] mb-5">
            {t("cta.heading1")}<br />
            <em className="not-italic text-orange">{t("cta.heading2")}</em>
          </h2>
          <p className="text-[15px] text-white/50 leading-[1.75] max-w-[480px] mx-auto mb-10">
            {t("cta.desc")}
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-5 bg-orange text-white font-bold text-[13px] tracking-[0.1em] uppercase no-underline transition-colors duration-300 hover:bg-orange-dark"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </>
  );
}
