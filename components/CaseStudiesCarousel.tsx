"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { caseStudiesData } from "@/lib/caseStudiesData";

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
    const nextIdx = (currentIndex + 1) % caseStudiesData.length;
    scrollToCard(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + caseStudiesData.length) % caseStudiesData.length;
    scrollToCard(prevIdx);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % caseStudiesData.length;
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
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

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
    <div className="space-y-6 w-full">
      {/* Controls Bar */}
      <div className="flex justify-between items-center px-1">
        <div className="flex items-center gap-2">
          {caseStudiesData.map((study, idx) => (
            <button
              key={study.id}
              id={`case-study-dot-${idx}`}
              type="button"
              aria-label={`Go to slide ${idx + 1}: ${study.title}`}
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
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-4 scrollbar-hide px-1 items-stretch w-full"
      >
        {caseStudiesData.map((item) => (
          <article
            key={item.id}
            className="case-study-card flex-shrink-0 w-[90vw] sm:w-[82vw] md:w-[calc(50%-12px)] snap-start bg-white dark:bg-[#0B0F17] text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-blue-500/30 rounded-2xl overflow-hidden group hover:border-blue-500 dark:hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between shadow-xl"
          >
            {/* Main Card Executive Summary View */}
            <div className="p-6 sm:p-8 space-y-6 flex-grow flex flex-col justify-between">
              <div className="space-y-5">
                {/* Executive Badge & Capability Tags Bar */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
                    <span className="text-[11px] font-code text-blue-600 dark:text-cyan-400 font-bold uppercase tracking-widest block">
                      [{item.badge}]
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-blue-500/10 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-300 border border-blue-500/20 dark:border-cyan-500/30 px-3 py-1 rounded-full text-xs font-code font-semibold shadow-inner"
                      >
                        [{tag}]
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Study Title */}
                <h3 className="font-bold text-xl sm:text-2xl text-slate-900 dark:text-slate-50 leading-tight group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                {/* Business Challenge Visual Card Box */}
                <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/30 space-y-2">
                  <h4 className="text-xs uppercase tracking-widest font-code text-amber-700 dark:text-amber-400 font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">warning</span>
                    <span>BUSINESS CHALLENGE &amp; LEAKAGE RISKS</span>
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.executiveChallenge}
                  </p>
                </div>

                {/* Solution Implemented Visual Card Box */}
                <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-500/30 space-y-2">
                  <h4 className="text-xs uppercase tracking-widest font-code text-blue-700 dark:text-cyan-400 font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    <span>SOLUTION IMPLEMENTED</span>
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.executiveSolution}
                  </p>
                </div>
              </div>

              {/* Action Button: Directly opens Technical Architecture Page in a NEW TAB */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                <Link
                  href={`/case-studies/${item.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3.5 rounded-xl bg-blue-50 dark:bg-gradient-to-r dark:from-blue-900/40 dark:via-cyan-900/30 dark:to-blue-900/40 hover:bg-blue-100 dark:hover:from-blue-800/60 dark:hover:to-cyan-800/50 border border-blue-300 dark:border-cyan-500/40 text-blue-700 dark:text-cyan-300 font-code font-bold text-xs uppercase tracking-wider flex items-center justify-between transition-all duration-300 shadow-lg cursor-pointer group/btn"
                >
                  <span className="flex items-center gap-2">
                    <span>View Technical Architecture &amp; Specs</span>
                    <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform">
                      open_in_new
                    </span>
                  </span>
                  <span className="text-[10px] bg-blue-600/10 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300 px-2.5 py-1 rounded font-bold border border-blue-300 dark:border-cyan-500/30">
                    OPEN IN NEW TAB ↗
                  </span>
                </Link>
              </div>
            </div>

            {/* ROI Metrics Grid (Bottom Bar of Main Card) */}
            <div className="bg-slate-50 dark:bg-surface-container-highest/30 p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-200 dark:border-white/5">
              {item.metrics.map((metric, mIdx) => (
                <div key={mIdx} className="space-y-0.5">
                  <div className="text-base sm:text-lg font-extrabold text-blue-600 dark:text-primary">
                    {metric.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-outline font-code font-medium leading-tight">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}