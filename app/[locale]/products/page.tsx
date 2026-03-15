import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n";
import ProductsClient from "@/components/ProductsClient";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Products — Edge Steel KSA",
  description:
    "Standard and custom steel products — structural sections, laser-cut plate, weld assemblies, and bespoke fabrications. Full material traceability and NATA-accredited QC.",
};

export default function ProductsPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <ProductsClient />;
}
