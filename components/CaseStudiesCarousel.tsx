"use client";

import { useEffect, useRef, useState } from "react";

const caseStudies = [
  {
    id: "cs-1",
    tags: ["[Headless API]", "[Monolith Decommissioning]", "[CI/CD]"],
    title: "Global Automotive Enterprise (Salesforce Core Modernization)",
    challenge: "Severe API throttling, deployment deadlocks, and slow UI load times across legacy monolithic architecture.",
    solution: "Decommissioned legacy components; built a headless REST API layer and streamlined modular deployment workflows.",
    metric1: "$130K+",
    label1: "SAVINGS",
    metric2: "60%",
    label2: "FASTER CI/CD",
  },
  {
    id: "cs-2",
    tags: ["[2GP Managed Package]", "[Metering API]", "[Sub-Ledger Automation]"],
    title: "Open-Source Metering & Billing SaaS (Usage-Based Architecture)",
    challenge: "Needed a robust, scalable commercial billing and usage-based metering package for high-throughput multi-tenant SaaS.",
    solution: "Architected and deployed a modular 2GP Managed Package integrating real-time usage event ingestion with advanced Apex batch engines.",
    metric1: "$20M+",
    label1: "TX VOLUME",
    metric2: "80+",
    label2: "CLIENTS",
  },
  {
    id: "cs-3",
    tags: ["[2GP Managed Package]", "[Vertex Tax Engine]", "[Async Batch]"],
    title: "FinTech & AppExchange Leader (Automated Sub-Ledger & Tax)",
    challenge: "Urgent need for commercial billing, tax calculation, and multi-tenant sub-ledger automation.",
    solution: "Architected a secure 2GP Managed Package with automated Vertex tax integrations.",
    metric1: "100%",
    label1: "TAX COMPLIANCE",
    metric2: "AUTO",
    label2: "BILLING",
  },
  {
    id: "cs-4",
    tags: ["[Experience Cloud]", "[CSV/XML Parsing]", "[Advanced Flows]"],
    title: "B2B Logistics & Energy Supplier (Asynchronous Ingestion & Admin Flows)",
    challenge: "Operations teams wasting massive hours manually parsing vendor data.",
    solution: "Custom Experience Cloud portal with asynchronous file ingestion engine and record-triggered Flow automation.",
    metric1: "80+",
    label1: "HOURS SAVED",
    metric2: "10x",
    label2: "PERFORMANCE",
  },
];

export default function CaseStudiesCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToCard = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const cards = carousel.querySelectorAll<HTMLElement>(".case-study-card");
    if (cards[index]) {
      carousel.scrollTo({
        left: cards[index].offsetLeft - carousel.offsetLeft,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % caseStudies.length;
    scrollToCard(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + caseStudies.length) % caseStudies.length;
    scrollToCard(prevIdx);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % caseStudies.length;
        const carousel = carouselRef.current;
        if (carousel) {
          const cards = carousel.querySelectorAll<HTMLElement>(".case-study-card");
          if (cards[next]) {
            carousel.scrollTo({
              left: cards[next].offsetLeft - carousel.offsetLeft,
              behavior: "smooth",
            });
          }
        }
        return next;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Update active index on manual user scroll
  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const cards = carousel.querySelectorAll<HTMLElement>(".case-study-card");
    const scrollLeft = carousel.scrollLeft;
    cards.forEach((card, idx) => {
      if (Math.abs(card.offsetLeft - scrollLeft) < card.offsetWidth / 2) {
        setCurrentIndex(idx);
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Controls Bar */}
      <div className="flex justify-between items-center px-1">
        <div className="flex items-center gap-2">
          {caseStudies.map((study, idx) => (
            <button
              key={study.id}
              id={`case-study-dot-${idx}`}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => scrollToCard(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-blue-600 dark:bg-primary"
                  : "w-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            id="case-study-prev"
            type="button"
            aria-label="Previous Case Study"
            onClick={handlePrev}
            className="w-10 h-10 rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-surface-container-high flex items-center justify-center text-slate-800 dark:text-on-surface hover:border-blue-600 dark:hover:border-primary/50 hover:text-blue-600 dark:hover:text-primary transition-all active:scale-95 shadow-sm"
          >
            <span className="material-symbols-outlined text-lg">chevron_left</span>
          </button>
          <button
            id="case-study-next"
            type="button"
            aria-label="Next Case Study"
            onClick={handleNext}
            className="w-10 h-10 rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-surface-container-high flex items-center justify-center text-slate-800 dark:text-on-surface hover:border-blue-600 dark:hover:border-primary/50 hover:text-blue-600 dark:hover:text-primary transition-all active:scale-95 shadow-sm"
          >
            <span className="material-symbols-outlined text-lg">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-4 scrollbar-hide px-1"
      >
        {caseStudies.map((item) => (
          <div
            key={item.id}
            className="case-study-card flex-shrink-0 w-[88vw] sm:w-[80vw] md:w-[calc(50%-12px)] snap-start bg-white dark:bg-surface-container-low border border-slate-200 dark:border-surface-bright/20 rounded-xl overflow-hidden group hover:border-blue-500/40 dark:hover:border-primary/40 transition-all flex flex-col shadow-sm"
          >
            <div className="p-6 sm:p-8 space-y-5 sm:space-y-6 flex-grow">
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-blue-500/10 dark:bg-primary/10 text-blue-700 dark:text-primary px-2.5 py-1 rounded text-xs font-code font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-semibold text-lg sm:text-xl text-slate-900 dark:text-on-surface leading-snug">{item.title}</h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="text-xs uppercase tracking-widest font-code text-cyan-600 dark:text-secondary font-semibold">CHALLENGE</h4>
                  <p className="text-slate-600 dark:text-on-surface-variant text-sm sm:text-base leading-relaxed">{item.challenge}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase tracking-widest font-code text-blue-600 dark:text-primary font-semibold">SOLUTION</h4>
                  <p className="text-slate-600 dark:text-on-surface-variant text-sm sm:text-base leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-surface-container-highest/30 p-6 sm:p-8 flex justify-between items-center border-t border-slate-200 dark:border-white/5">
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-primary">{item.metric1}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-outline font-code">{item.label1}</div>
              </div>
              <div className="space-y-1 text-right">
                <div className="text-xl sm:text-2xl font-bold text-cyan-600 dark:text-secondary">{item.metric2}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-outline font-code">{item.label2}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}