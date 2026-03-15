import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { locales } from "@/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Edge Steel KSA — established 2020 in Riyadh, delivering SCA-certified steel fabrication across Saudi Arabia.",
};

interface HeroCard   { icon: string; label: string; value: string }
interface ValueItem  { num: string; icon: string; title: string; desc: string }
interface Milestone  { year: string; title: string; desc: string }
interface StoryStat  { num: string; label: string }
interface TeamMember { initials: string; name: string; role: string; desc: string }

export default async function AboutPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations("aboutPage");

  const heroCards      = t.raw("heroCards")      as HeroCard[];
  const valueItems     = t.raw("valueItems")     as ValueItem[];
  const milestoneItems = t.raw("milestoneItems") as Milestone[];
  const storyStats     = t.raw("storyStats")     as StoryStat[];
  const teamMembers    = t.raw("teamMembers")    as TeamMember[];
  const clientList     = t.raw("clientList")     as string[];

  return (
    <>
      {/* Page Hero */}
      <div className="mt-[72px] px-[60px] max-lg:px-8 max-md:px-5 pt-[100px] pb-[90px] bg-charcoal relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.03) 60px,rgba(255,255,255,0.03) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.03) 60px,rgba(255,255,255,0.03) 61px)",
          }}
        />
        <div
          className="absolute bottom-[-1px] left-0 right-0 h-[70px] z-10"
          style={{ background: "linear-gradient(to bottom, transparent, #fff)" }}
        />
        <div className="max-w-[1320px] mx-auto relative z-20 grid grid-cols-[1.2fr_1fr] max-md:grid-cols-1 gap-20 items-end">
          <div>
            <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 mb-6 flex items-center gap-2.5">
              <Link href="/" className="text-white/35 no-underline hover:text-orange transition-colors">{t("hero.breadcrumb_home")}</Link>
              <span className="text-orange">/</span>
              <span className="text-orange">{t("hero.breadcrumb_about")}</span>
            </div>
            <h1 className="text-[clamp(52px,5.5vw,82px)] font-[800] tracking-[-0.03em] text-white leading-[0.95] mb-6">
              {t("hero.heading1")} <em className="not-italic text-orange">{t("hero.heading2")}</em>
            </h1>
            <p className="text-[16px] text-white/55 leading-[1.7] max-w-[520px]">
              {t("hero.sub")}
            </p>
          </div>
          <div className="flex flex-col gap-px max-md:hidden">
            {heroCards.map(({ icon, label, value }) => (
              <div
                key={label}
                className="bg-white/[0.05] border border-white/[0.08] px-5 py-4 flex items-center gap-4 transition-colors duration-200 hover:bg-white/[0.08]"
              >
                <span className="text-[20px]">{icon}</span>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/35 mb-[3px]">
                    {label}
                  </div>
                  <div className="text-[14px] font-bold text-white">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <section id="story" className="py-[100px] max-md:py-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5 grid grid-cols-[1.1fr_1fr] max-md:grid-cols-1 gap-20 items-start">
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-4 flex items-center gap-3 before:content-[''] before:w-5 before:h-px before:bg-orange">
              {t("story.label")}
            </div>
            <h2 className="text-[clamp(36px,3.5vw,56px)] font-[800] tracking-[-0.03em] leading-[1.05] mb-7">
              {t("story.heading1")} <em className="not-italic text-orange">{t("story.heading2")}</em>
            </h2>
            <div className="text-[15px] text-slate leading-[1.85] space-y-5">
              <p>{t("story.p1")}</p>
              <p>{t("story.p2")}</p>
              <p>{t("story.p3")}</p>
            </div>
          </div>

          <div className="flex flex-col gap-px">
            {storyStats.map(({ num, label }) => (
              <div
                key={num}
                className="bg-grey-bg border border-border border-l-4 border-l-orange px-8 py-7 transition-shadow duration-200 hover:shadow-[0_8px_32px_rgba(255,87,34,0.1)]"
              >
                <span className="font-mono text-[40px] font-bold text-charcoal tracking-[-0.03em] leading-none block mb-1.5">
                  {num}
                </span>
                <span className="text-[13px] text-slate leading-[1.5]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-[100px] max-md:py-16 bg-charcoal">
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5">
          <div className="text-center mb-16">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-4 flex items-center justify-center gap-3 before:content-[''] before:w-5 before:h-px before:bg-orange after:content-[''] after:w-5 after:h-px after:bg-orange">
              {t("values.label")}
            </div>
            <h2 className="text-[clamp(36px,3.5vw,52px)] font-[800] tracking-[-0.03em] text-white leading-[1.05]">
              {t("values.heading1")} <em className="not-italic text-orange">{t("values.heading2")}</em>
            </h2>
            <p className="text-[15px] text-white/45 mt-4 max-w-[520px] mx-auto leading-[1.7]">
              {t("values.sub")}
            </p>
          </div>

          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-0.5 bg-white/[0.06] border border-white/[0.06]">
            {valueItems.map((v) => (
              <div
                key={v.num}
                className="group bg-black/30 px-8 py-11 relative transition-colors duration-300 hover:bg-orange/10 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0 before:bg-orange before:transition-[height] before:duration-300 hover:before:h-[3px]"
              >
                <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-white/25 mb-6">
                  {v.num}
                </div>
                <div className="text-[36px] mb-5">{v.icon}</div>
                <h3 className="text-[20px] font-bold text-white mb-3.5 tracking-[-0.02em]">
                  {v.title}
                </h3>
                <p className="text-[13px] text-white/50 leading-[1.75]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section id="milestones" className="py-[100px] max-md:py-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-4 flex items-center gap-3 before:content-[''] before:w-5 before:h-px before:bg-orange">
            {t("milestones.label")}
          </div>
          <h2 className="text-[clamp(32px,3vw,48px)] font-[800] tracking-[-0.025em] mb-16">
            {t("milestones.heading")}
          </h2>

          <div className="flex flex-col gap-px border-l-2 border-border ml-4">
            {milestoneItems.map(({ year, title, desc }) => (
              <div key={year} className="pl-8 pb-12 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-orange rounded-full" />
                <div className="font-mono text-[12px] tracking-[0.1em] text-orange mb-1">
                  {year}
                </div>
                <h3 className="text-[20px] font-bold tracking-[-0.02em] mb-2">{title}</h3>
                <p className="text-[14px] text-slate leading-[1.75] max-w-[560px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-[100px] max-md:py-16 bg-white border-t border-border">
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5">
          {/* Header row */}
          <div className="flex justify-between items-start gap-16 max-md:flex-col max-md:gap-6 mb-14">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-4 flex items-center gap-3 before:content-[''] before:w-5 before:h-px before:bg-orange">
                {t("clients.label")}
              </div>
              <h2 className="text-[clamp(32px,3vw,48px)] font-[800] tracking-[-0.025em] leading-[1.1]">
                {t("clients.heading1")}<br />{t("clients.heading2")}
              </h2>
            </div>
            <p className="text-[14px] text-slate leading-[1.8] max-w-[360px] pt-2 max-md:max-w-none">
              {t("clients.desc")}
            </p>
          </div>

          {/* Client grid */}
          <div
            className="grid grid-cols-4 max-md:grid-cols-2 border border-border"
            style={{ borderCollapse: "collapse" }}
          >
            {clientList.map((client, i) => (
              <div
                key={client}
                className={`font-mono text-[11px] tracking-[0.14em] uppercase font-bold text-charcoal text-center px-6 py-7 border-border${
                  i % 4 !== 3 ? " border-r" : ""
                }${i < 4 ? " border-b" : ""}`}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-[100px] max-md:py-16 bg-grey-bg">
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5">
          <div className="mb-14">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-4 flex items-center gap-3 before:content-[''] before:w-5 before:h-px before:bg-orange">
              {t("team.label")}
            </div>
            <h2 className="text-[clamp(32px,3vw,48px)] font-[800] tracking-[-0.025em] leading-[1.1] mb-5">
              {t("team.heading1")}<br />{t("team.heading2")}
            </h2>
            <p className="text-[15px] text-slate leading-[1.75] max-w-[480px]">
              {t("team.sub")}
            </p>
          </div>

          <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-[2px] bg-border border border-border">
            {teamMembers.map((member) => (
              <div key={member.initials} className="bg-white p-9 max-md:p-7 flex flex-col gap-5">
                <div className="w-[52px] h-[52px] bg-charcoal flex items-center justify-center font-mono text-[14px] font-bold text-white tracking-[0.05em] flex-shrink-0">
                  {member.initials}
                </div>
                <div>
                  <div className="text-[20px] font-bold tracking-[-0.02em] mb-1">
                    {member.name}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-orange font-bold mb-4">
                    {member.role}
                  </div>
                  <p className="text-[13px] text-slate leading-[1.75]">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[50px] max-md:py-20 bg-charcoal relative overflow-hidden text-center">
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.03) 60px,rgba(255,255,255,0.03) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.03) 60px,rgba(255,255,255,0.03) 61px)",
          }}
        />
        <div className="relative z-10 max-w-[640px] mx-auto px-[60px] max-lg:px-8 max-md:px-5">
          {/* Label */}
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-6 flex items-center justify-center gap-3">
            <span className="inline-block w-5 h-px bg-orange" />
            {t("cta.label")}
            <span className="inline-block w-5 h-px bg-orange" />
          </div>
          <h2 className="text-[clamp(48px,6vw,50px)] font-[800] tracking-[-0.03em] text-white leading-[1.05] mb-5">
            {t("cta.heading1")}<br />
            <em className="not-italic text-orange">{t("cta.heading2")}</em>
          </h2>
          <p className="text-[15px] text-white/50 leading-[1.75] mb-10 max-w-[480px] mx-auto">
            {t("cta.desc")}
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2.5 px-10 py-4 bg-orange text-white text-[13px] font-bold tracking-[0.1em] uppercase no-underline transition-colors duration-300 hover:bg-orange-dark relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(105deg,transparent_30%,rgba(255,255,255,0.2)_50%,transparent_70%)] after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-500"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </>
  );
}
