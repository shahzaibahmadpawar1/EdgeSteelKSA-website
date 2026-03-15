"use client";

import { useEffect } from "react";

export default function ProjectsScrollReveal() {
  useEffect(() => {
    // Section scroll reveal
    const sectionObs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.06, rootMargin: "0px 0px -50px 0px" }
    );
    document
      .querySelectorAll(".reveal-pending")
      .forEach((s) => sectionObs.observe(s));

    // Stagger project cards
    const cardObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const cards = e.target.querySelectorAll(".proj-card");
            cards.forEach((c, i) => {
              const el = c as HTMLElement;
              el.style.opacity = "0";
              el.style.transform = "translateY(24px)";
              el.style.transition = `opacity 0.6s ${i * 100}ms cubic-bezier(0.16,1,0.3,1), transform 0.6s ${i * 100}ms cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s`;
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "none";
              }, i * 100);
            });
            cardObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    document
      .querySelectorAll(".projects-grid")
      .forEach((g) => cardObs.observe(g));

    return () => {
      sectionObs.disconnect();
      cardObs.disconnect();
    };
  }, []);

  return null;
}
