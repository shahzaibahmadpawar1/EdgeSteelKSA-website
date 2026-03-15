import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export interface Project {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  href: string;
  /** Tailwind grid-column / grid-row classes for the 3-col layout */
  gridClass?: string;
}

export const featuredProjects: Project[] = [
  {
    id: 1,
    src: "/media/image1.jpg",
    alt: "Commercial Tower Steel Framework",
    category: "Structural",
    title: "Commercial Tower Steel Framework",
    href: "/projects",
    gridClass: "row-span-2",
  },
  {
    id: 2,
    src: "/media/image2.jpg",
    alt: "Decorative Metal Screens",
    category: "Architectural",
    title: "Decorative Metal Screens",
    href: "/projects",
  },
  {
    id: 3,
    src: "/media/image3.jpg",
    alt: "Gold-Finish Façade Panels",
    category: "Laser Cutting",
    title: "Gold-Finish Façade Panels",
    href: "/projects",
  },
  {
    id: 4,
    src: "/media/image4.jpg",
    alt: "Decorative Metalwork",
    category: "Interior",
    title: "Decorative Metalwork",
    href: "/projects",
  },
  {
    id: 5,
    src: "/media/image5.jpg",
    alt: "Commercial Cladding",
    category: "Façade",
    title: "Commercial Cladding",
    href: "/projects",
  },
];

interface ProjectGridProps {
  projects?: Project[];
}

export default function ProjectGrid({
  projects = featuredProjects,
}: ProjectGridProps) {
  const t = useTranslations("projects");
  return (
    <div
      className="grid gap-1 -mx-10 max-lg:mx-0 max-md:grid-cols-1"
      style={{
        gridTemplateColumns: "1.6fr 1fr 1fr",
        gridTemplateRows: "420px 280px",
      }}
    >
      {projects.map((p, i) => (
        <div
          key={p.id}
          className={`relative overflow-hidden cursor-pointer bg-grey-bg proj-texture ${
            i === 0 ? "row-span-2 max-lg:row-span-1" : ""
          } max-md:h-[260px]`}
        >
          <Image
            src={p.src}
            alt={p.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
            style={{ transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }}
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-[400ms] flex items-end p-6">
            <div className="translate-y-4 hover:translate-y-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-orange mb-1.5">
                {p.category}
              </div>
              <div className="text-[18px] font-bold text-white mb-2.5 leading-[1.2]">
                {p.title}
              </div>
              <Link
                href={p.href}
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-white no-underline tracking-[0.08em] uppercase border-b border-white/40 pb-0.5"
              >
                {t("viewProject")}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
