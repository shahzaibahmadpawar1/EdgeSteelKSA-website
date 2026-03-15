"use client";

import { useState } from "react";

const TABS = [
  { label: "All Projects", key: "all" },
  { label: "Structural", key: "structural" },
  { label: "Architectural", key: "architectural" },
  { label: "Government", key: "government" },
  { label: "Energy & Industrial", key: "energy" },
  { label: "Infrastructure", key: "infrastructure" },
];

export default function ProjectsFilterBar() {
  const [active, setActive] = useState("all");

  return (
    <div
      className="bg-white border-b border-border px-[60px] max-lg:px-8 max-md:px-3 sticky top-[72px] z-[900] flex items-center justify-between"
      style={{ borderBottomColor: "#E0E2E5" }}
    >
      <div className="flex overflow-x-auto">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`font-mono text-[11px] tracking-[0.14em] uppercase px-6 max-md:px-3 py-[18px] border-b-2 whitespace-nowrap cursor-pointer transition-colors duration-200 bg-transparent outline-none ${
              active === tab.key
                ? "text-charcoal border-orange"
                : "text-slate border-transparent hover:text-charcoal hover:border-orange"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="font-mono text-[11px] tracking-[0.1em] text-slate flex-shrink-0 pl-6 max-md:hidden">
        Showing 12 projects
      </div>
    </div>
  );
}
