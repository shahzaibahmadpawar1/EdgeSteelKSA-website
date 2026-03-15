import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { locales } from "@/i18n";
import ProjectsFilterBar from "@/components/ProjectsFilterBar";
import ProjectsScrollReveal from "@/components/ProjectsScrollReveal";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Edge Steel KSA's portfolio of completed steel fabrication, laser cutting, and architectural metalwork projects across Saudi Arabia.",
};

interface ProjectCard {
  id: number;
  src: string;
  alt: string;
  cat: string;
  title: string;
  desc: string;
  location: string;
  year: string;
  wide?: boolean;
  enquireLabel: string;
}

const govtProjects: ProjectCard[] = [
  {
    id: 2,
    src: "/media/project2.jpg",
    alt: "Saudi National Guard Multi-Site Compound Structures",
    cat: "Government · Structural",
    title: "Saudi National Guard — Multi-Site Compound Structures",
    desc: "Designed and fabricated perimeter security structures, guard post canopies, and vehicle barrier systems across multiple National Guard facilities. Hot-dipped galvanised finish specified throughout for corrosion resistance in harsh outdoor environments.",
    location: "Multiple Sites, KSA",
    year: "2021 – 2023",
    wide: true,
    enquireLabel: "Enquire About This Work →",
  },
  {
    id: 3,
    src: "/media/project3.jpg",
    alt: "Ministry of Interior Administrative Complex Metalwork",
    cat: "Government · Metalwork",
    title: "Ministry of Interior — Administrative Complex Metalwork",
    desc: "Full interior metalwork package for a new regional administrative complex: structural mezzanine framing, staircase assemblies, handrails, and decorative cladding panels in brushed stainless.",
    location: "Riyadh, KSA",
    year: "2022",
    wide: false,
    enquireLabel: "Enquire →",
  },
];

const archProjects: ProjectCard[] = [
  {
    id: 4,
    src: "/media/project4.jpg",
    alt: "Luxury Hotel Lobby Gold-Finish Facade Screens",
    cat: "Architectural · Laser Cutting",
    title: "Luxury Hotel Lobby — Gold-Finish Façade Screens",
    desc: "240 custom laser-cut decorative steel screens for a five-star hotel lobby and atrium. Intricate geometric Arabic calligraphy patterns cut to ±0.1mm precision, finished in PVD gold coating.",
    location: "Riyadh, KSA",
    year: "2023",
    wide: false,
    enquireLabel: "Enquire →",
  },
  {
    id: 5,
    src: "/media/project5.jpg",
    alt: "Mixed-Use Tower External Cladding System",
    cat: "Architectural · Panels",
    title: "Mixed-Use Tower — External Cladding System",
    desc: "Engineered and fabricated the full external steel cladding sub-frame and rain-screen panel system for a 22-storey mixed-use tower. Bespoke bracket design resolved complex façade geometry with zero on-site modifications required.",
    location: "Jeddah, KSA",
    year: "2024",
    wide: false,
    enquireLabel: "Enquire →",
  },
  {
    id: 6,
    src: "/media/project6.jpg",
    alt: "JADAH Development Lifestyle Centre Metalwork",
    cat: "Interior · Decorative",
    title: "JADAH Development — Lifestyle Centre Metalwork",
    desc: "Interior decorative metalwork for a flagship lifestyle retail centre: custom powder-coated steel wayfinding structures, feature ceiling ribs, and art installation anchor frames. Coordinated directly with the concept design team.",
    location: "Riyadh, KSA",
    year: "2024",
    wide: false,
    enquireLabel: "Enquire →",
  },
];

const energyProjects: ProjectCard[] = [
  {
    id: 7,
    src: "/media/project7.jpg",
    alt: "Tarshid Energy Solar Farm Steel Mounting Structures",
    cat: "Energy · Structural",
    title: "Tarshid Energy — Solar Farm Steel Mounting Structures",
    desc: "Engineered and fabricated 1,200 hot-dipped galvanised steel mounting structures for a utility-scale solar photovoltaic farm. Designed to withstand peak sand-storm wind loads per Saudi Building Code requirements.",
    location: "Eastern Province, KSA",
    year: "2024",
    wide: false,
    enquireLabel: "Enquire →",
  },
  {
    id: 8,
    src: "/media/project8.jpg",
    alt: "Siemens KSA Electrical Substation Skid Bases",
    cat: "Industrial · Equipment",
    title: "Siemens KSA — Electrical Substation Skid Bases",
    desc: "Fabricated heavy-wall structural skid bases for electrical transformer and switchgear equipment — including lifting lug certification, anti-vibration pads, and forklift pockets. Delivered in painted and NDT-certified condition.",
    location: "Riyadh, KSA",
    year: "2023 – 2024",
    wide: false,
    enquireLabel: "Enquire →",
  },
  {
    id: 9,
    src: "/media/project9.jpg",
    alt: "Alfanar Projects Industrial Plant Steel Package",
    cat: "Industrial · Fabrication",
    title: "Alfanar Projects — Industrial Plant Steel Package",
    desc: "A complex multi-level structural steel package for an industrial manufacturing facility — including conveyor support trestles, stair towers, grated platforms, and pipe support racks. Full MDR documentation provided.",
    location: "Riyadh, KSA",
    year: "2022 – 2023",
    wide: false,
    enquireLabel: "Enquire →",
  },
];

const infraProjects: ProjectCard[] = [
  {
    id: 10,
    src: "/media/project10.jpg",
    alt: "Riyadh Metro Expansion Station Structural Steel Components",
    cat: "Infrastructure · Transit",
    title: "Riyadh Metro Expansion — Station Structural Steel Components",
    desc: "Precision-fabricated structural steel components for station canopy support systems, ventilation shaft framing, and underground platform edge barriers across multiple metro expansion stations. All work performed to SAPL and project-specific ITP requirements, with full weld traceability documentation provided for the programme's permanent records.",
    location: "Riyadh, KSA",
    year: "2024",
    wide: true,
    enquireLabel: "Enquire About This Work →",
  },
  {
    id: 11,
    src: "/media/project11.jpg",
    alt: "SAPCQ Telecom Tower Base Frame Assemblies",
    cat: "Infrastructure · Telecom",
    title: "SAPCQ — Telecom Tower Base Frame Assemblies",
    desc: "Fabricated hot-dipped galvanised base frame assemblies and anchor bolt template packages for a national rollout of communication towers. Tight tolerances maintained consistently across a 200-unit production run.",
    location: "Nationwide, KSA",
    year: "2023",
    wide: false,
    enquireLabel: "Enquire →",
  },
];

const sectors = [
  {
    icon: "🏛",
    name: "Government & Defence",
    count: "100+ Projects",
    desc: "National security facilities, administrative complexes, perimeter protection systems, and defence infrastructure across the Kingdom.",
    clients: ["Ministry of Interior", "National Guard"],
  },
  {
    icon: "🏨",
    name: "Hospitality & Retail",
    count: "80+ Projects",
    desc: "Luxury hotel façades, decorative interior metalwork, laser-cut feature panels, and retail development structural packages.",
    clients: ["JADAH Development", "Private Developers"],
  },
  {
    icon: "⚡",
    name: "Energy & Utilities",
    count: "90+ Projects",
    desc: "Solar mounting structures, substation skid bases, transformer equipment frames, and utility infrastructure steel work.",
    clients: ["Tarshid Energy", "Siemens KSA"],
  },
  {
    icon: "🏭",
    name: "Industrial & Manufacturing",
    count: "75+ Projects",
    desc: "Process plant structures, conveyance systems, equipment skids, pipe supports, and rated industrial framing packages.",
    clients: ["Alfanar Projects", "EPC Contractors"],
  },
  {
    icon: "🚇",
    name: "Infrastructure & Transit",
    count: "60+ Projects",
    desc: "Metro station components, bridge ancillaries, telecom tower bases, and public realm infrastructure steel work.",
    clients: ["Riyadh Metro", "SAPCQ"],
  },
  {
    icon: "🏗",
    name: "Commercial Construction",
    count: "95+ Projects",
    desc: "Commercial tower structural packages, office development steel, mixed-use building moment frames, and curtain wall sub-frames.",
    clients: ["Tier 1 Developers", "Main Contractors"],
  },
];

function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-4 flex items-center gap-3 ${className}`}
    >
      <span className="inline-block w-5 h-px bg-orange flex-shrink-0" />
      {children}
    </div>
  );
}

function ProjCard({ p }: { p: ProjectCard }) {
  return (
    <div
      className={`proj-card group bg-white cursor-pointer relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:z-[2] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0 before:bg-orange before:transition-[height] before:duration-300 before:z-[3] hover:before:h-[3px]${
        p.wide ? " col-span-2 max-md:col-auto" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]${
          p.wide ? " h-[380px] max-md:h-[260px]" : " h-[260px] max-[480px]:h-[200px]"
        }`}
      >
        <Image
          src={p.src}
          alt={p.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] flex items-end p-5 z-[2]"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)",
          }}
        >
          <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-[12px] font-bold text-white uppercase tracking-[0.08em] border-b border-white/50 pb-0.5 no-underline"
            >
              {p.enquireLabel}
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-orange mb-2">
          {p.cat}
        </div>
        <div className="text-[17px] font-bold tracking-[-0.015em] mb-2.5 leading-[1.3]">
          {p.title}
        </div>
        <div className="text-[12px] text-slate leading-[1.65] mb-4">{p.desc}</div>
        <div className="flex items-center justify-between pt-3.5 border-t border-border">
          <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-slate flex items-center gap-1.5">
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "#FF5722", fontSize: "10px" }}
            />
            {p.location}
          </div>
          <div className="font-mono text-[10px] text-slate">{p.year}</div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);

  return (
    <>
      <ProjectsScrollReveal />

      {/* ── PAGE HERO ─────────────────────────────────────── */}
      <div className="mt-[72px] bg-charcoal relative overflow-hidden">
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
        <div className="max-w-[1320px] mx-auto relative z-20 px-[60px] max-lg:px-8 max-md:px-5 pt-[100px] pb-20 flex justify-between items-end gap-[60px] max-lg:flex-col max-lg:gap-8 max-md:gap-6">
          <div>
            <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 mb-6 flex items-center gap-2.5">
              <Link
                href="/"
                className="text-white/35 no-underline hover:text-orange transition-colors"
              >
                Home
              </Link>
              <span className="text-orange">/</span>
              <span className="text-orange">Projects</span>
            </div>
            <h1 className="text-[clamp(52px,5.5vw,82px)] font-[800] tracking-[-0.03em] text-white leading-[0.95] mb-6">
              500+ Projects.
              <br />
              <em className="not-italic text-orange">Every One</em>
              <br />
              Delivered.
            </h1>
            <p className="text-[16px] text-white/55 leading-[1.7] max-w-[520px]">
              From government security infrastructure to luxury hospitality
              façades, from industrial skid bases to Riyadh&apos;s landmark metro
              structures — a selection of the projects that define Edge Steel
              KSA&apos;s reach across the Kingdom.
            </p>
          </div>

          <div className="flex flex-col gap-px flex-shrink-0 max-md:flex-row max-md:flex-wrap max-md:gap-2">
            {[
              { num: "500", unit: "+", label: "Projects Completed" },
              { num: "15", unit: "+", label: "Major Clients" },
              { num: "6", unit: "", label: "Industry Sectors" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/[0.06] border border-white/[0.08] px-7 py-5 min-w-[200px] max-md:min-w-[calc(50%-4px)] max-md:px-5 max-md:py-4"
              >
                <span className="font-mono text-[32px] font-bold text-white tracking-[-0.03em] leading-none block mb-1">
                  {s.num}
                  {s.unit && <em className="not-italic text-orange">{s.unit}</em>}
                </span>
                <div className="text-[11px] tracking-[0.08em] uppercase text-white/40">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FILTER BAR ────────────────────────────────────── */}
      <ProjectsFilterBar />

      {/* ── FEATURED PROJECT ──────────────────────────────── */}
      <section className="reveal-pending pt-20 pb-[60px] bg-white">
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5">
          <SectionLabel>Flagship Delivery</SectionLabel>
          <div
            className="grid border border-border relative overflow-hidden max-lg:grid-cols-1"
            style={{ gridTemplateColumns: "1.3fr 1fr" }}
          >
            {/* FEATURED PROJECT badge */}
            <div className="absolute top-5 left-5 font-mono text-[9px] tracking-[0.2em] text-white bg-orange px-3 py-[5px] z-[5] pointer-events-none">
              FEATURED PROJECT
            </div>

            {/* Visual */}
            <div className="relative min-h-[520px] max-lg:min-h-[360px] max-md:min-h-[260px] overflow-hidden">
              <Image
                src="/media/project1.jpg"
                alt="Ministry of Interior Regional Command Centre Steel Framework"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
                priority
              />
              <div className="absolute bottom-6 left-6 z-[3] flex gap-3">
                <div className="bg-orange text-white px-3.5 py-2 font-mono text-[10px] tracking-[0.12em] uppercase">
                  Completed 2024
                </div>
                <div
                  className="px-3.5 py-2 font-mono text-[10px] tracking-[0.12em] uppercase text-white/70 border border-white/10"
                  style={{
                    background: "rgba(0,0,0,0.75)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  Riyadh, KSA
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-[52px] max-lg:p-8 max-md:px-6 max-md:py-7 flex flex-col justify-center border-l border-border max-lg:border-l-0 max-lg:border-t">
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-3.5 flex items-center gap-2.5">
                <span className="inline-block w-[18px] h-px bg-orange flex-shrink-0" />
                Government · Structural
              </div>
              <h2 className="text-[clamp(24px,2.5vw,38px)] font-[800] tracking-[-0.025em] leading-[1.1] mb-[18px]">
                Ministry of Interior Regional Command Centre — Steel Framework
              </h2>
              <p className="text-[14px] text-slate leading-[1.8] mb-[30px]">
                A landmark 12-storey commercial and administrative tower in Riyadh
                required a full structural steel package comprising 340 fabricated
                members — including wide-flange columns, moment frames, and
                cast-in-place base assemblies. All members were delivered
                match-marked, within tolerance, and two weeks ahead of the
                structural erection programme.
              </p>

              <div className="flex flex-col gap-px mb-8">
                {[
                  {
                    key: "Scope",
                    val: "340 structural members — columns, beams, moment frames",
                  },
                  { key: "Steel Weight", val: "Approx. 480 tonne fabricated" },
                  { key: "Location", val: "Riyadh, Kingdom of Saudi Arabia" },
                  {
                    key: "Certificate",
                    val: "Full material traceability & QC package",
                  },
                  { key: "Delivered", val: "2 weeks ahead of programme" },
                ].map((row) => (
                  <div
                    key={row.key}
                    className="flex justify-between px-3.5 py-2.5 bg-grey-bg"
                  >
                    <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-slate">
                      {row.key}
                    </span>
                    <span className="text-[13px] font-semibold text-charcoal text-right">
                      {row.val}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-charcoal text-white text-[13px] font-bold tracking-[0.08em] uppercase no-underline transition-colors duration-300 hover:bg-orange self-start relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(105deg,transparent_30%,rgba(255,255,255,0.1)_50%,transparent_70%)] after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-500"
              >
                Discuss a Similar Project →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL PROJECTS ──────────────────────────────────── */}
      <section className="reveal-pending pt-10 pb-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5">
          {/* Government & Defence */}
          <SectionLabel>Government &amp; Defence</SectionLabel>
          <h3 className="text-[clamp(28px,2.5vw,40px)] font-[800] tracking-[-0.025em] mb-9 leading-[1.1]">
            Securing the Kingdom&apos;s Infrastructure
          </h3>
          <div className="projects-grid grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[2px] bg-border border border-border">
            {govtProjects.map((p) => (
              <ProjCard key={p.id} p={p} />
            ))}
          </div>

          {/* Architectural & Hospitality */}
          <SectionLabel className="mt-[60px]">
            Architectural &amp; Hospitality
          </SectionLabel>
          <h3 className="text-[clamp(28px,2.5vw,40px)] font-[800] tracking-[-0.025em] mb-9 leading-[1.1]">
            Where Steel Meets Aesthetics
          </h3>
          <div className="projects-grid grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[2px] bg-border border border-border">
            {archProjects.map((p) => (
              <ProjCard key={p.id} p={p} />
            ))}
          </div>

          {/* Energy & Industrial */}
          <SectionLabel className="mt-[60px]">Energy &amp; Industrial</SectionLabel>
          <h3 className="text-[clamp(28px,2.5vw,40px)] font-[800] tracking-[-0.025em] mb-9 leading-[1.1]">
            Built for the Toughest Environments
          </h3>
          <div className="projects-grid grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[2px] bg-border border border-border">
            {energyProjects.map((p) => (
              <ProjCard key={p.id} p={p} />
            ))}
          </div>

          {/* Infrastructure */}
          <SectionLabel className="mt-[60px]">Infrastructure</SectionLabel>
          <h3 className="text-[clamp(28px,2.5vw,40px)] font-[800] tracking-[-0.025em] mb-9 leading-[1.1]">
            Connecting the Kingdom
          </h3>
          <div className="projects-grid grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[2px] bg-border border border-border">
            {infraProjects.map((p) => (
              <ProjCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────── */}
      <div className="bg-orange">
        <div className="max-w-[1320px] mx-auto grid grid-cols-4 max-lg:grid-cols-2 gap-px bg-white/20">
          {[
            { num: "500", unit: "+", label: "Projects Completed" },
            { num: "6", unit: "", label: "Industry Sectors" },
            { num: "15", unit: "+", label: "Major Clients" },
            { num: "100", unit: "%", label: "On-Time Delivery Rate" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-orange py-10 px-10 max-md:py-7 max-md:px-4 text-center"
            >
              <span className="font-mono text-[44px] max-md:text-[36px] font-bold text-white tracking-[-0.03em] leading-none block">
                {s.num}
                {s.unit && (
                  <span className="text-[22px] text-white/70">{s.unit}</span>
                )}
              </span>
              <div className="text-[12px] tracking-[0.1em] uppercase text-white/75 mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTOR BREAKDOWN ──────────────────────────────── */}
      <section className="reveal-pending py-[100px] max-md:py-16 bg-grey-bg">
        <div className="max-w-[1320px] mx-auto px-[60px] max-lg:px-8 max-md:px-5">
          <SectionLabel>Sector Coverage</SectionLabel>
          <h2 className="text-[clamp(32px,3vw,48px)] font-[800] tracking-[-0.025em] leading-[1.1] mb-3">
            Six Sectors.
            <br />
            One Standard of Quality.
          </h2>
          <p className="text-[15px] text-slate leading-[1.7] max-w-[560px] mb-[52px]">
            Whether building national security infrastructure or a five-star hotel
            lobby, we apply the same uncompromising fabrication precision to every
            project — regardless of sector or scale.
          </p>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-[480px]:grid-cols-1 gap-[2px] bg-border border border-border">
            {sectors.map((s) => (
              <div
                key={s.name}
                className="bg-white p-9 max-md:p-6 relative cursor-pointer border-l-4 border-l-transparent border-solid transition-[border-left-color,box-shadow] duration-200 hover:border-l-orange hover:shadow-[0_8px_40px_rgba(255,87,34,0.08)]"
              >
                <div className="text-[32px] mb-5">{s.icon}</div>
                <div className="text-[18px] font-bold tracking-[-0.02em] mb-2.5">
                  {s.name}
                </div>
                <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-orange mb-3.5">
                  {s.count}
                </div>
                <div className="text-[13px] text-slate leading-[1.7]">{s.desc}</div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.clients.map((c) => (
                    <span
                      key={c}
                      className="font-mono text-[9px] tracking-[0.1em] uppercase text-slate bg-grey-bg border border-border px-2.5 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────── */}
      <div className="bg-charcoal py-20 max-md:py-[60px] px-[60px] max-lg:px-8 max-md:px-5 text-center relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.02) 60px,rgba(255,255,255,0.02) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.02) 60px,rgba(255,255,255,0.02) 61px)",
          }}
        />
        <div className="relative z-10 max-w-[640px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-orange mb-4 flex items-center justify-center gap-3">
            <span className="inline-block w-5 h-px bg-orange" />
            Add Your Project
            <span className="inline-block w-5 h-px bg-orange" />
          </div>
          <h2 className="text-[clamp(32px,3.5vw,52px)] font-[800] tracking-[-0.03em] text-white mb-4 leading-none">
            Your Project Could Be
            <br />
            <em className="not-italic text-orange">Next on This Page.</em>
          </h2>
          <p className="text-[15px] text-white/50 mb-9">
            Talk to our engineering team about your next steel fabrication
            requirement — we respond within one business day.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2.5 px-10 py-4 bg-orange text-white text-[14px] font-bold tracking-[0.1em] uppercase no-underline transition-colors duration-300 hover:bg-orange-dark relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(105deg,transparent_30%,rgba(255,255,255,0.2)_50%,transparent_70%)] after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-500"
          >
            ⚙ Start a Project →
          </Link>
        </div>
      </div>
    </>
  );
}
