"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const footerLinks = [
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/products", label: t("products") },
    { href: "/projects", label: t("projects") },
    { href: "/#contact", label: t("contact") },
  ];

  return (
    <footer className="px-[60px] max-lg:px-8 max-md:px-5 py-10 bg-[#111111] flex items-center justify-between border-t border-white/[0.08] max-md:flex-col max-md:items-center max-md:text-center max-md:gap-5">
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <Image
          src="/logo.png"
          alt="Edge Steel KSA"
          width={30}
          height={30}
          className="h-[30px] w-auto opacity-80"
        />
        <span className="font-mono text-[14px] font-bold tracking-[0.1em] text-white">
          Edge Steel <em className="not-italic text-orange">KSA</em>
        </span>
      </Link>

      <ul className="flex gap-7 list-none max-md:flex-wrap max-md:justify-center max-md:gap-4">
        {footerLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-[11px] tracking-[0.1em] uppercase text-white/35 no-underline transition-colors duration-200 hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <p className="font-mono text-[10px] tracking-[0.1em] text-white/30">
        {t("copy", { year })}
      </p>
    </footer>
  );
}
