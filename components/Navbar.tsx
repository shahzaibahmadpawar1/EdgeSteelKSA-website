"use client";

import Image from "next/image";
import { Link, usePathname } from "@/navigation";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import type { Locale } from "@/i18n";

interface NavbarProps {
  locale: Locale;
}

const navLinks = [
  { href: "/products" as const, key: "products" },
  { href: "/services" as const, key: "services" },
  { href: "/projects" as const, key: "projects" },
  { href: "/about" as const, key: "about" },
];

export default function Navbar({ locale }: NavbarProps) {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-[60px] max-lg:px-8 max-md:px-5 h-[72px] border-b transition-all duration-300 animate-[navIn_0.8s_cubic-bezier(0.16,1,0.3,1)_both] ${
        scrolled
          ? "bg-white/95 border-border shadow-lg backdrop-blur-xl"
          : "bg-white/93 border-border backdrop-blur-xl"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <Image
          src="/logo.png"
          alt="Edge Steel KSA"
          width={36}
          height={36}
          className="h-9 w-auto"
          priority
        />
        <span className="font-mono text-[15px] font-bold tracking-[0.07em] text-charcoal">
          Edge Steel <em className="not-italic text-orange">KSA</em>
        </span>
      </Link>

      {/* Desktop nav */}
      <ul
        className={`flex gap-7 list-none items-center max-md:hidden ${
          menuOpen
            ? "max-md:flex max-md:flex-col max-md:fixed max-md:top-[72px] max-md:left-0 max-md:right-0 max-md:bg-white/98 max-md:px-5 max-md:py-3 max-md:border-b max-md:border-border max-md:shadow-lg max-md:z-[998]"
            : ""
        }`}
        id="navLinks"
      >
        {navLinks.map(({ href, key }) => (
          <li key={href}>
            <Link
              href={href}
              className={`text-[12px] font-medium tracking-[0.07em] uppercase no-underline transition-colors duration-200 ${
                isActive(href)
                  ? "text-charcoal border-b-2 border-orange pb-0.5"
                  : "text-slate hover:text-charcoal"
              }`}
            >
              {t(key)}
            </Link>
          </li>
        ))}

        {/* Language switcher */}
        <li className="flex gap-1 items-center">
          <Link
            href={pathname}
            locale="en"
            className={`font-mono text-[10px] font-bold tracking-[0.07em] uppercase border px-2.5 py-1.5 transition-all duration-200 ${
              locale === "en"
                ? "text-orange border-orange bg-orange/[0.06]"
                : "text-charcoal/45 border-border bg-transparent hover:text-orange hover:border-orange hover:bg-orange/[0.06]"
            }`}
          >
            EN
          </Link>
          <Link
            href={pathname}
            locale="ar"
            className={`font-mono text-[10px] font-bold tracking-[0.07em] uppercase border px-2.5 py-1.5 transition-all duration-200 ${
              locale === "ar"
                ? "text-orange border-orange bg-orange/[0.06]"
                : "text-charcoal/45 border-border bg-transparent hover:text-orange hover:border-orange hover:bg-orange/[0.06]"
            }`}
          >
            AR
          </Link>
        </li>

        {/* Vision 2030 */}
        <li>
          <a
            href="https://www.vision2030.gov.sa"
            target="_blank"
            rel="noopener noreferrer"
            title="Saudi Vision 2030"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <Image
              src="/media/2030-logo.png"
              alt="Saudi Vision 2030"
              width={400}
              height={152}
              className="h-[50px] w-auto object-contain"
            />
          </a>
        </li>
      </ul>

      {/* CTA */}
      <Link
        href="/#contact"
        className="text-[12px] font-semibold tracking-[0.07em] uppercase px-[22px] py-2.5 bg-orange text-white no-underline relative overflow-hidden transition-all duration-300 hover:bg-orange-dark max-md:hidden"
      >
        {t("cta")}
      </Link>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center gap-[5px] cursor-pointer p-1.5 bg-transparent border-none"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle navigation"
      >
        <span
          className={`block w-[22px] h-[2px] bg-charcoal transition-all duration-300 rounded-sm ${
            menuOpen ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`block w-[22px] h-[2px] bg-charcoal transition-all duration-300 rounded-sm ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-[22px] h-[2px] bg-charcoal transition-all duration-300 rounded-sm ${
            menuOpen ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 bg-white/98 border-b border-border shadow-lg z-[998] px-5 py-3 flex flex-col">
          {navLinks.map(({ href, key }) => (
            <Link
              key={href}
              href={href}
              className="py-3.5 border-b border-border text-[13px] font-medium tracking-[0.07em] uppercase text-slate hover:text-charcoal no-underline"
              onClick={() => setMenuOpen(false)}
            >
              {t(key)}
            </Link>
          ))}
          <div className="flex gap-1 py-3">
            <Link
              href={pathname}
              locale="en"
              className={`font-mono text-[10px] font-bold tracking-[0.07em] uppercase border px-2.5 py-1.5 transition-all duration-200 ${
                locale === "en"
                  ? "text-orange border-orange bg-orange/[0.06]"
                  : "text-charcoal/45 border-border"
              }`}
            >
              EN
            </Link>
            <Link
              href={pathname}
              locale="ar"
              className={`font-mono text-[10px] font-bold tracking-[0.07em] uppercase border px-2.5 py-1.5 transition-all duration-200 ${
                locale === "ar"
                  ? "text-orange border-orange bg-orange/[0.06]"
                  : "text-charcoal/45 border-border"
              }`}
            >
              AR
            </Link>
          </div>
          <a
            href="https://www.vision2030.gov.sa"
            target="_blank"
            rel="noopener noreferrer"
            title="Saudi Vision 2030"
            className="flex items-center py-3"
          >
            <Image
              src="/media/2030-logo.png"
              alt="Saudi Vision 2030"
              width={200}
              height={76}
              className="h-[50px] w-auto object-contain"
            />
          </a>
          <Link
            href="/#contact"
            className="mt-2 text-[13px] font-bold tracking-[0.07em] uppercase px-5 py-3 bg-orange text-white text-center no-underline"
            onClick={() => setMenuOpen(false)}
          >
            {t("cta")}
          </Link>
        </div>
      )}
    </nav>
  );
}
