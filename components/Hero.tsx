"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-[#1a1a1a]"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      >
        <source src="/media/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay + grid texture */}
      <div
        className="absolute inset-0 z-10 will-change-transform"
        id="heroBg"
        style={{
          background:
            "linear-gradient(135deg,rgba(0,0,0,0.72) 0%,rgba(0,0,0,0.45) 55%,rgba(0,0,0,0.2) 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.015) 2px,rgba(255,255,255,0.015) 4px)",
          }}
        />
      </div>

      {/* Laser line */}
      <div className="laser-line" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-20 px-20 max-lg:px-10 max-md:px-5 flex items-center justify-between w-full gap-[60px] max-lg:gap-10 max-md:flex-col max-md:gap-8 hero-content">
        {/* Left */}
        <div className="flex-1 max-w-[680px] max-md:max-w-full">
          <div
            className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-7 opacity-0 before:content-[''] before:w-6 before:h-px before:bg-orange"
            style={{ animation: "fadeUp 0.7s 0.4s cubic-bezier(0.16,1,0.3,1) forwards" }}
          >
            {t("tag")}
          </div>

          <h1
            className="text-[clamp(52px,6vw,88px)] font-[800] leading-[0.95] tracking-[-0.03em] text-white opacity-0 max-[480px]:text-[clamp(34px,9vw,48px)]"
            style={{ animation: "fadeUp 0.9s 0.55s cubic-bezier(0.16,1,0.3,1) forwards" }}
          >
            {t("heading1")}
            <span className="text-orange block">
              {t("heading2")}
              <br />
              {t("heading3")}
            </span>
          </h1>

          <p
            className="mt-7 text-[16px] leading-[1.7] text-white/65 max-w-[480px] opacity-0 max-md:text-[14px]"
            style={{ animation: "fadeUp 0.9s 0.7s cubic-bezier(0.16,1,0.3,1) forwards" }}
          >
            {t("sub")}
          </p>

          {/* Stats */}
          <div
            className="mt-11 flex gap-10 opacity-0 max-md:gap-5"
            style={{ animation: "fadeUp 0.9s 0.85s cubic-bezier(0.16,1,0.3,1) forwards" }}
          >
            {[
              { num: t("stat1_num"), label: t("stat1_label") },
              { num: t("stat2_num"), label: t("stat2_label") },
              { num: t("stat3_num"), label: t("stat3_label") },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="border-l-2 border-orange pl-3.5"
              >
                <span className="font-mono text-[28px] font-bold text-white tracking-[-0.02em] block max-md:text-[22px]">
                  {num}
                </span>
                <span className="text-[11px] tracking-[0.12em] uppercase text-white/50">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div
          className="w-[360px] max-md:w-full flex-shrink-0 bg-white/97 border border-white/30 p-9 relative opacity-0 shadow-[0_32px_80px_rgba(0,0,0,0.4)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-orange before:to-cobalt"
          style={{ animation: "fadeLeft 1s 1s cubic-bezier(0.16,1,0.3,1) forwards" }}
        >
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate mb-3 flex items-center gap-2 after:content-[''] after:flex-1 after:h-px after:bg-border">
            {t("card_label")}
          </div>
          <h3 className="text-[22px] font-bold tracking-[-0.02em] text-charcoal mb-2">
            {t("card_title")}
          </h3>
          <p className="text-[13px] text-slate leading-[1.6] mb-6">
            {t("card_sub")}
          </p>
          <Link
            href="#contact"
            className="block w-full py-3.5 bg-orange text-white font-bold text-[13px] tracking-[0.08em] uppercase text-center no-underline transition-colors duration-300 hover:bg-orange-dark"
          >
            {t("card_cta")}
          </Link>
          <Link
            href="/services"
            className="block w-full py-3.5 mt-2.5 bg-transparent text-charcoal font-semibold text-[13px] tracking-[0.06em] uppercase text-center no-underline border-[1.5px] border-border transition-all duration-200 hover:border-cobalt hover:text-cobalt"
          >
            {t("card_secondary")}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-9 left-20 max-md:left-5 max-md:bottom-5 flex items-center gap-3.5 text-white/45 font-mono text-[10px] tracking-[0.15em] uppercase opacity-0 z-20"
        style={{ animation: "fadeUp 0.8s 1.4s ease forwards" }}
      >
        <div className="w-10 h-px bg-white/30 relative overflow-hidden">
          <div className="scroll-line-inner" />
        </div>
        {t("scroll")}
      </div>
    </section>
  );
}
