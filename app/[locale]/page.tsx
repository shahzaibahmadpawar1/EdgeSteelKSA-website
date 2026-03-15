import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ServiceCard from "@/components/ServiceCard";
import ProjectGrid from "@/components/ProjectGrid";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { locales } from "@/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Edge Steel KSA � Precision Steel Fabrication",
  description:
    "Leading steel fabrication company delivering world-class fabrication, laser cutting, and industrial solutions across Saudi Arabia. SCA certified � VAT registered.",
  openGraph: {
    title: "Edge Steel KSA � Precision Steel Fabrication",
    description:
      "Leading fabrication company in Saudi Arabia. Steel fabrication, laser cutting, equipment rental, and manpower solutions.",
    url: "https://edgesteelksa.com",
  },
};

interface ServiceItem { num: string; icon: string; title: string; body: string; href: string; }
interface ProductItem { icon: string; tag: string; title: string; desc: string; }
interface CertBadge { num: string; label: string; }

const clients = [
  "Ministry of Interior",
  "National Guard",
  "Siemens KSA",
  "Alfanar Projects",
  "Riyadh Metro",
  "JADAH Development",
  "SAPCQ",
  "Tarshid Energy",
];

export default async function HomePage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);

  const tRoot = await getTranslations();
  const tSvc = await getTranslations("services_section");
  const tProd = await getTranslations("products_section");
  const tProj = await getTranslations("projects_section");
  const tClients = await getTranslations("clients_section");
  const tContact = await getTranslations("contact_section");

  const services = tRoot.raw("services") as ServiceItem[];
  const products = tRoot.raw("products") as ProductItem[];
  const certBadges = tClients.raw("certBadges") as CertBadge[];

  return (
    <>
      <Ticker />
      <Hero />

      {/* -- SERVICES -- */}
      <section
        id="services-section"
        className="py-[120px] max-md:py-16 bg-grey-bg"
      >
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5">
          <div className="flex justify-between items-end mb-[60px] max-md:flex-col max-md:items-start max-md:gap-4 max-md:mb-9">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-4 flex items-center gap-3 before:content-[''] before:w-5 before:h-px before:bg-orange">
                {tSvc("label")}
              </div>
              <h2 className="text-[clamp(36px,3.5vw,52px)] font-[800] tracking-[-0.03em] leading-[1.05] max-w-[480px]">
                {tSvc("heading")}
              </h2>
              <Link
                href="/services"
                className="font-mono text-[12px] tracking-[0.12em] uppercase text-slate no-underline inline-flex items-center gap-2 border-b border-border pb-0.5 mt-3.5 transition-all duration-200 hover:text-orange hover:border-orange"
              >
                {tSvc("viewAll")}
              </Link>
            </div>
            <p className="text-[14px] leading-[1.8] text-slate max-w-[360px]">
              {tSvc("desc")}
            </p>
          </div>

          {/* Service grid � gap-0.5 = 2px */}
          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-0.5 bg-border border border-border">
            {services.map((s) => (
              <ServiceCard key={s.num} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* -- PRODUCTS TEASER -- */}
      <section id="products-teaser" className="py-[100px] max-md:py-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5">
          <div className="flex justify-between items-end mb-12 max-md:flex-col max-md:items-start max-md:gap-4 max-md:mb-7">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-4 flex items-center gap-3 before:content-[''] before:w-5 before:h-px before:bg-orange">
                {tProd("label")}
              </div>
              <h2 className="text-[clamp(32px,3vw,48px)] font-[800] tracking-[-0.025em] leading-[1.1]">
                {tProd("heading")}
              </h2>
            </div>
            <Link
              href="/products"
              className="font-mono text-[12px] tracking-[0.12em] uppercase text-slate no-underline flex items-center gap-2 border-b border-border pb-0.5 self-end transition-all duration-200 hover:text-charcoal hover:border-charcoal"
            >
              {tProd("viewAll")}
            </Link>
          </div>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-0.5 bg-border border border-border">
            {products.map((p) => (
              <div
                key={p.title}
                className="bg-white p-8 max-md:p-6 transition-colors duration-300 hover:bg-[#FFF5F2]"
              >
                <div className="text-[28px] mb-4">{p.icon}</div>
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-slate mb-2">
                  {p.tag}
                </div>
                <div className="text-[17px] font-bold tracking-[-0.015em] mb-2.5">
                  {p.title}
                </div>
                <div className="text-[13px] text-slate leading-[1.65]">
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- PROJECTS -- */}
      <section
        id="projects-section"
        className="py-[120px] max-md:py-16 bg-white overflow-hidden"
      >
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5">
          <div className="flex justify-between items-end mb-14 max-md:flex-col max-md:items-start max-md:gap-4 max-md:mb-7">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-4 flex items-center gap-3 before:content-[''] before:w-5 before:h-px before:bg-orange">
                {tProj("label")}
              </div>
              <h2 className="text-[clamp(36px,3.5vw,52px)] font-[800] tracking-[-0.03em] leading-[1.05]">
                {tProj("heading")}
              </h2>
            </div>
            <Link
              href="/projects"
              className="font-mono text-[12px] tracking-[0.12em] uppercase text-slate no-underline flex items-center gap-2 border-b border-border pb-0.5 transition-all duration-200 hover:text-charcoal hover:border-charcoal"
            >
              {tProj("viewAll")}
            </Link>
          </div>
        </div>
        <div className="max-w-[1320px] mx-auto px-5">
          <ProjectGrid />
        </div>
      </section>

      {/* -- CLIENTS -- */}
      <section
        id="clients-section"
        className="py-[100px] max-md:py-16 bg-charcoal relative overflow-hidden"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.03) 60px,rgba(255,255,255,0.03) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.03) 60px,rgba(255,255,255,0.03) 61px)",
        }}
      >
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5 relative z-10">
          <div className="flex justify-between items-end mb-14 max-md:flex-col max-md:items-start max-md:gap-4 max-md:mb-8">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-4 flex items-center gap-3 before:content-[''] before:w-5 before:h-px before:bg-orange">
                {tClients("label")}
              </div>
              <h2 className="text-[clamp(32px,3vw,48px)] font-[800] tracking-[-0.03em] text-white max-w-[380px] leading-[1.1]">
                {tClients("heading")}
              </h2>
            </div>
            <p className="text-[14px] text-white/45 max-w-[340px] leading-[1.8]">
              {tClients("desc")}
            </p>
          </div>

          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-[480px]:grid-cols-1 gap-px bg-white/[0.06] border border-white/[0.06]">
            {clients.map((name) => (
              <div
                key={name}
                className="bg-black/30 px-6 py-7 flex items-center justify-center transition-colors duration-200 hover:bg-white/[0.05]"
              >
                <span className="font-mono text-[12px] font-bold text-white/45 tracking-[0.05em] text-center uppercase transition-colors duration-200 hover:text-white/80">
                  {name}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-px mt-px">
            {certBadges.map(({ num, label }) => (
              <div
                key={num}
                className="bg-orange/10 border border-orange/[0.18] py-4.5 px-4 text-center"
              >
                <div className="font-mono text-[15px] font-bold text-orange">
                  {num}
                </div>
                <div className="text-[11px] text-white/40 tracking-[0.06em] mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- CONTACT -- */}
      <section id="contact" className="py-[120px] max-md:py-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5 grid grid-cols-[1fr_1.4fr] max-md:grid-cols-1 gap-[80px] max-lg:gap-12 items-start">
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-4 flex items-center gap-3 before:content-[''] before:w-5 before:h-px before:bg-orange">
              {tContact("label")}
            </div>
            <h2 className="text-[clamp(32px,3vw,52px)] font-[800] tracking-[-0.03em] leading-[1.05] mb-5">
              {tContact("heading1")}
              <br />
              <em className="not-italic text-orange">{tContact("heading2")}</em>
            </h2>
            <p className="text-[15px] text-slate leading-[1.8] mb-9">
              {tContact("desc")}
            </p>

            {[
              {
                icon: "fa-solid fa-envelope-open-text",
                bgClass: "bg-orange",
                label: tContact("email_label"),
                value: "info@edgesteelksa.com",
              },
              {
                icon: "fa-brands fa-whatsapp",
                bgClass: "bg-[#25D366]",
                label: tContact("phone_label"),
                value: "+966 57 610 6246",
              },
            ].map(({ icon, bgClass, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 mb-3 px-4 py-4 bg-grey-bg border border-border transition-colors duration-200 hover:border-orange"
              >
                <div
                  className={`w-10 h-10 ${bgClass} flex items-center justify-center text-white text-[16px] flex-shrink-0`}
                >
                  <i className={icon} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <strong className="text-[13px] font-bold text-charcoal">
                    {label}
                  </strong>
                  <span className="text-[13px] text-slate">{value}</span>
                </div>
              </div>
            ))}
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
