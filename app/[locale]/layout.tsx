import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    template: "%s | Edge Steel KSA",
    default: "Edge Steel KSA — Precision Steel Fabrication",
  },
  description:
    "Leading steel fabrication company delivering world-class fabrication, laser cutting, and industrial solutions across Saudi Arabia.",
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = params;

  if (!locales.includes(locale as Locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();
  const isRtl = locale === "ar";

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>
      <body className="font-main bg-white text-charcoal overflow-x-hidden antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={locale as Locale} />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
