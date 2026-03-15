"use client";

import { useTranslations } from "next-intl";

export default function Ticker() {
  const t = useTranslations("ticker");
  const tickerItems: string[] = t.raw("items") as string[];
  const allItems = [...tickerItems, ...tickerItems];

  return (
    <div className="bg-orange py-2.5 overflow-hidden whitespace-nowrap relative z-[900] mt-[72px]">
      <div
        className="inline-flex"
        style={{ animation: "ticker 28s linear infinite" }}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            className="font-mono text-[11px] tracking-[0.14em] uppercase text-white px-7 inline-flex items-center gap-4 max-[480px]:px-4 max-[480px]:text-[10px] after:content-['◆'] after:text-[7px] after:opacity-60"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
