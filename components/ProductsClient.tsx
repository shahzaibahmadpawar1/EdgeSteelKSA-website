"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

// ─── Non-translatable constants ──────────────────────────────────────────────

const productImages = [
  "/media/product2.jpg",
  "/media/product3.jpg",
  "/media/product4.jpg",
  "/media/product5.jpg",
  "/media/product6.jpg",
];
const productCategories = ["structural", "structural", "formwork", "formwork", "custom"] as const;
const productIds = ["p1", "p2", "p3", "p4", "p5"];
const featuredImage = "/media/product1.jpg";

const filterTabKeys = ["all", "structural", "formwork", "custom"] as const;
const filterTabCounts: Record<string, number> = { all: 5, structural: 2, formwork: 2, custom: 1 };
const catKeys = ["structural", "formwork", "custom"] as const;

type FeaturedSpec  = { label: string; value: string };
type ProductTrans  = { tag: string; title: string; desc: string; price: string; lead: string };
type CompRow       = { feature: string; std: string; ctl: string; custom: string; full: string };
type CustomFeature = { icon: string; bold: string; text: string };
type ConfigRow     = { key: string; val: string };

// ─── Component ───────────────────────────────────────────────────────────────

export default function ProductsClient() {
  const t = useTranslations("productsPage");
  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = filterTabKeys.map((key) => ({
    key,
    label: t(`filterTabs.${key}`),
    count: filterTabCounts[key],
  }));

  const countLabels: Record<string, string> = {
    all: t("countLabels.all"),
    structural: t("countLabels.structural"),
    formwork: t("countLabels.formwork"),
    custom: t("countLabels.custom"),
  };

  const activeCount = filterTabs.find((tab) => tab.key === activeFilter)?.count ?? 5;

  const featuredSpecs = t.raw("featured.specs") as FeaturedSpec[];

  const products = (t.raw("products") as ProductTrans[]).map((p, i) => ({
    ...p,
    id: productIds[i],
    image: productImages[i],
    category: productCategories[i],
  }));

  const comparisonRows = t.raw("comparison.rows") as CompRow[];
  const customFeatures = t.raw("custom.features") as CustomFeature[];
  const configRows     = t.raw("custom.configRows") as ConfigRow[];

  const catLabels = {
    structural: { num: t("categories.structural.num"), title: t("categories.structural.title") },
    formwork:   { num: t("categories.formwork.num"),   title: t("categories.formwork.title")   },
    custom:     { num: t("categories.custom.num"),     title: t("categories.custom.title")     },
  } as const;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <div className="mt-[72px] bg-charcoal relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.03) 60px,rgba(255,255,255,0.03) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.03) 60px,rgba(255,255,255,0.03) 61px)",
          }}
        />
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5 relative z-20">
          <div className="grid grid-cols-[1fr_auto] max-md:grid-cols-1 gap-16 pt-[80px] pb-[80px] items-center">
            {/* Left: text */}
            <div>
              <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 mb-6 flex items-center gap-2">
                <Link href="/" className="text-white/40 no-underline hover:text-orange transition-colors">
                  {t("hero.breadcrumb_home")}
                </Link>
                <span className="text-white/25 mx-1">/</span>
                <span className="text-orange">{t("hero.breadcrumb_products")}</span>
              </div>
              <h1 className="text-[clamp(44px,5vw,76px)] font-[800] tracking-[-0.03em] text-white leading-[1.0] mb-6">
                {t("hero.heading1")}{" "}
                <span className="block text-orange">{t("hero.heading2")}</span>
              </h1>
              <p className="text-[14px] text-white/50 leading-[1.75] max-w-[480px]">
                {t("hero.sub")}
              </p>
            </div>

            {/* Right: vertical filter buttons inside hero */}
            <div className="flex flex-col gap-2 max-md:flex-row max-md:flex-wrap">
              {filterTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`w-[200px] max-md:w-auto px-5 py-3 font-mono text-[10px] tracking-[0.14em] uppercase text-left cursor-pointer border transition-all duration-200 ${
                    activeFilter === tab.key
                      ? "bg-orange border-orange text-white"
                      : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── COUNT BAR ────────────────────────────────────────────────── */}
      <div className="border-b border-border bg-white sticky top-[72px] z-30">
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5 flex items-center gap-8 py-3 overflow-x-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`flex-shrink-0 font-mono text-[10px] tracking-[0.1em] uppercase flex items-center gap-1.5 cursor-pointer bg-transparent border-0 p-0 transition-colors duration-200 ${
                activeFilter === tab.key ? "text-orange" : "text-slate hover:text-charcoal"
              }`}
            >
              <span>{countLabels[tab.key]}</span>
              <span
                className={`inline-flex items-center justify-center px-1.5 h-[16px] text-[9px] font-bold rounded-sm ${
                  activeFilter === tab.key ? "bg-orange text-white" : "bg-border text-slate"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
          <span className="ml-auto font-mono text-[11px] text-slate whitespace-nowrap flex-shrink-0">
            {t("showing", { count: activeCount })}
          </span>
        </div>
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
      <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5 py-20">

        {/* FEATURED CARD */}
        {(activeFilter === "all" || activeFilter === "formwork") && (
          <div className="mb-16 border border-orange/30 bg-[#fffaf8] relative overflow-hidden">
            <div className="flex items-center gap-4 px-8 py-3 border-b border-orange/20 bg-orange/5">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-slate border border-border px-2 py-0.5">
                {t("featured.seriesId")}
              </span>
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-orange font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange inline-block" />
                {t("featured.badge")}
              </span>
            </div>
            <div className="grid grid-cols-[1fr_1fr] max-md:grid-cols-1">
              <div className="relative aspect-[4/3] max-md:aspect-[16/9]">
                <Image src={featuredImage} alt={t("featured.title")} fill className="object-cover" />
              </div>
              <div className="p-10 max-md:p-7 flex flex-col justify-between">
                <div>
                  <h2 className="text-[clamp(22px,2vw,30px)] font-[800] tracking-[-0.03em] leading-[1.1] mb-4 text-charcoal">
                    {t("featured.title")}
                  </h2>
                  <p className="text-[14px] text-slate leading-[1.75] mb-6">{t("featured.desc")}</p>
                  <div className="border border-border">
                    {featuredSpecs.map((s, i) => (
                      <div
                        key={s.label}
                        className={`flex justify-between gap-4 px-5 py-3 ${i !== featuredSpecs.length - 1 ? "border-b border-border" : ""}`}
                      >
                        <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-slate">{s.label}</span>
                        <span className="font-mono text-[10px] text-charcoal font-bold">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 mt-8 max-sm:flex-col">
                  <Link
                    href="/#contact"
                    className="inline-block px-6 py-3.5 bg-charcoal text-white font-bold text-[12px] tracking-[0.1em] uppercase no-underline hover:bg-orange transition-colors duration-300"
                  >
                    {t("featured.requestBtn")}
                  </Link>
                  <Link
                    href="/#contact"
                    className="inline-block px-6 py-3.5 border border-border text-charcoal font-bold text-[12px] tracking-[0.1em] uppercase no-underline hover:border-orange hover:text-orange transition-colors duration-300"
                  >
                    {t("featured.downloadBtn")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CATEGORY SECTIONS */}
        {catKeys.map((catKey, catIdx) => {
          const catProducts = products.filter((p) => p.category === catKey);
          const countForCat = filterTabs.find((tab) => tab.key === catKey)?.count ?? catProducts.length;
          if (activeFilter !== "all" && activeFilter !== catKey) return null;
          return (
            <div
              key={catKey}
              className={`${catIdx > 0 && activeFilter === "all" ? "mt-20 pt-20 border-t border-border" : ""}`}
            >
              <div className="flex items-end justify-between mb-10 max-sm:flex-col max-sm:items-start max-sm:gap-2">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-orange mb-2">
                    {catLabels[catKey].num}
                  </div>
                  <h2 className="text-[clamp(24px,2.5vw,36px)] font-[800] tracking-[-0.03em] text-charcoal">
                    {catLabels[catKey].title}
                  </h2>
                </div>
                <span className="font-mono text-[11px] text-slate mb-1">{t("productsCount", { count: countForCat })}</span>
              </div>
              <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-px bg-border border border-border">
                {catProducts.map((p) => (
                  <div key={p.id} className="bg-white group flex flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden bg-grey-bg">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        <Link
                          href="/#contact"
                          className="px-4 py-2 bg-orange text-white font-bold text-[10px] tracking-[0.1em] uppercase no-underline hover:bg-orange-dark transition-colors"
                        >
                          {t("requestQuote")}
                        </Link>
                        <button className="px-4 py-2 border border-white/50 text-white font-bold text-[10px] tracking-[0.1em] uppercase hover:border-white transition-colors bg-transparent cursor-pointer">
                          {t("downloadSpecSheet")}
                        </button>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-orange mb-2">{p.tag}</div>
                      <h3 className="text-[15px] font-[700] tracking-[-0.01em] text-charcoal mb-2 leading-[1.3] group-hover:text-orange transition-colors duration-200">
                        {p.title}
                      </h3>
                      <p className="text-[13px] text-slate leading-[1.65] mb-4 flex-1">{p.desc}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                        <span className="font-mono text-[11px] text-charcoal font-bold">{p.price}</span>
                        <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-slate bg-grey-bg px-2 py-1">
                          {p.lead}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────── */}
      <div className="bg-grey-bg border-t border-border">
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5 py-20">
          <div className="mb-2 font-mono text-[10px] tracking-[0.2em] uppercase text-slate">{t("comparison.label")}</div>
          <h2 className="text-[clamp(28px,3vw,44px)] font-[800] tracking-[-0.03em] text-charcoal mb-10">
            {t("comparison.heading")}{" "}
            <span className="text-slate font-[400]">{t("comparison.headingSub")}</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-charcoal">
                  <th className="py-4 pr-6 font-mono text-[10px] tracking-[0.15em] uppercase text-slate">{t("comparison.colFeature")}</th>
                  <th className="py-4 px-4 font-mono text-[10px] tracking-[0.15em] uppercase text-charcoal text-center">{t("comparison.col1")}</th>
                  <th className="py-4 px-4 font-mono text-[10px] tracking-[0.15em] uppercase text-charcoal text-center">{t("comparison.col2")}</th>
                  <th className="py-4 px-4 font-mono text-[10px] tracking-[0.15em] uppercase text-orange text-center">{t("comparison.col3")}</th>
                  <th className="py-4 pl-4 font-mono text-[10px] tracking-[0.15em] uppercase text-orange text-center bg-orange/5">{t("comparison.col4")}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-border ${i % 2 === 0 ? "bg-white" : ""}`}>
                    <td className="py-4 pr-6 text-[13px] font-semibold text-charcoal">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      <span className={`font-mono text-[13px] ${row.std === "✓" ? "text-green-600" : row.std === "✗" ? "text-slate/40" : "text-slate"}`}>{row.std}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`font-mono text-[13px] ${row.ctl === "✓" ? "text-green-600" : row.ctl === "✗" ? "text-slate/40" : "text-slate"}`}>{row.ctl}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`font-mono text-[13px] ${row.custom === "✓" ? "text-green-600" : row.custom === "✗" ? "text-slate/40" : "text-orange font-bold"}`}>{row.custom}</span>
                    </td>
                    <td className="py-4 pl-4 text-center bg-orange/5">
                      <span className={`font-mono text-[13px] ${row.full === "✓" ? "text-green-600" : row.full === "✗" ? "text-slate/40" : "text-orange font-bold"}`}>{row.full}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 pt-8 border-t border-border">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-orange mb-1">{t("comparison.cantFind")}</div>
          </div>
        </div>
      </div>

      {/* ── WE'LL BUILD IT FROM SCRATCH ──────────────────────────────── */}
      <div className="bg-charcoal">
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5 py-20 grid grid-cols-[1fr_1fr] max-lg:grid-cols-1 gap-16 items-start">
          <div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-orange mb-6">{t("custom.label")}</div>
            <h2 className="text-[clamp(32px,3.5vw,52px)] font-[800] tracking-[-0.03em] text-white leading-[1.0] mb-6">
              {t("custom.heading1")}
              <br />
              <span className="text-orange">{t("custom.heading2")}</span>
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.75] mb-8 max-w-[440px]">
              {t("custom.desc")}
            </p>
            <div className="space-y-5 mb-10">
              {customFeatures.map((f) => (
                <div key={f.bold} className="flex gap-4 items-start">
                  <span className="text-[20px] flex-shrink-0 mt-0.5">{f.icon}</span>
                  <div>
                    <span className="text-white font-bold text-[14px]">{f.bold}</span>
                    <span className="text-white/50 text-[14px]"> {f.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/#contact"
              className="inline-block px-7 py-4 bg-orange text-white font-bold text-[12px] tracking-[0.1em] uppercase no-underline hover:bg-orange-dark transition-colors duration-300"
            >
              {t("custom.cta")}
            </Link>
          </div>

          {/* Live Config Panel */}
          <div className="bg-[#0d0f10] border border-white/10 font-mono">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-[10px] tracking-[0.15em] uppercase text-white/30">{t("custom.configTitle")}</span>
            </div>
            <div className="px-6 py-6 space-y-2">
              {configRows.map((row) => (
                <div key={row.key} className="flex gap-4 text-[12px]">
                  <span className="text-white/30 w-[180px] flex-shrink-0">{row.key}</span>
                  <span className="text-orange">{row.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA SECTION ──────────────────────────────────────────────── */}
      <div className="border-t border-border">
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5 py-24 text-center">
          <h2 className="text-[clamp(28px,3.5vw,52px)] font-[800] tracking-[-0.03em] text-charcoal mb-4">
            {t("cta.heading")}
          </h2>
          <p className="text-[15px] text-slate leading-[1.7] mb-10">
            {t("cta.sub")}
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-bold text-[13px] tracking-[0.1em] uppercase no-underline hover:bg-orange transition-colors duration-300"
          >
            {t("cta.btn")}
          </Link>
        </div>
      </div>
    </>
  );
}
