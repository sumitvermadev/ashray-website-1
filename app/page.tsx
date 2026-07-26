"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroBackground from "@/components/HeroBackground";
import HeroBackgroundAnimation from "@/components/HeroBackgroundAnimation";
import AnimatedSection from "@/components/AnimatedSection";
import CaseStudiesCarousel from "@/components/CaseStudiesCarousel";
import IntakeForm from "@/components/IntakeForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSpecModal, setActiveSpecModal] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const specDetails = [
    {
      title: "Managed Package Engineering (1GP & 2GP)",
      subtitle: "Enterprise AppExchange & Namespace Architecture",
      icon: "account_tree",
      points: [
        "Second-generation managed package (2GP) modularization and target namespace isolation.",
        "Custom Lightning Web Component (LWC) shadow DOM optimization and event bubbling architecture.",
        "Strict Apex bulkification, CPU execution time guardrails, and governor limit resilience.",
        "Automated 1GP to 2GP migration path with zero data loss or metadata conflict.",
      ],
    },
    {
      title: "Asynchronous Integration & Event Engines",
      subtitle: "High-Throughput Composite REST & Pub/Sub Pipeline",
      icon: "code",
      points: [
        "Composite & Batch REST API endpoints engineered for 100K+ daily payload processing.",
        "Real-time Change Data Capture (CDC) streaming into external data warehouses.",
        "Platform Event Pub/Sub architecture for multi-system decoupled messaging.",
        "Custom XML/JSON parsing engines bypassing standard Apex memory overhead.",
      ],
    },
    {
      title: "Real-Time AML & KYC Compliance Engines",
      subtitle: "Sanctions Watchlist & Identity Verification Pipeline",
      icon: "hub",
      points: [
        "Automated real-time watchlist screening against global sanction databases (OFAC, UN, EU).",
        "Asynchronous REST webhook listeners with immediate status update triggers.",
        "Sub-second identity verification workflows with encrypted payload storage.",
        "Immutable audit logs and transactional compliance tracking within Salesforce objects.",
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="mt-20 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-margin-desktop overflow-hidden py-12 sm:py-16 md:py-20 bg-tech-grid">
          <HeroBackground />
          <HeroBackgroundAnimation />

          <div className="relative z-10 text-center max-w-4xl space-y-5 sm:space-y-6">
            <AnimatedSection direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue-500/10 dark:bg-secondary-container/10 border border-blue-500/30 dark:border-secondary/30 rounded-full mb-1 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-secondary animate-ping" />
                <span className="text-[11px] sm:text-xs uppercase tracking-widest font-code text-blue-700 dark:text-secondary font-semibold">
                  STEALTH PERFORMANCE ARCHITECTURE
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[72px] font-bold tracking-tight text-slate-900 dark:text-on-surface">
                Enterprise Salesforce Architecture. <br className="hidden sm:inline" />
                <span className="text-blue-600 dark:text-primary bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-primary dark:via-[#88b0ff] dark:to-secondary bg-clip-text text-transparent">
                  Zero Overhead.
                </span>{" "}
                Pure Execution.
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-on-surface-variant max-w-2xl mx-auto leading-relaxed px-2">
                Powering high-stakes ecosystems with custom high-throughput engines and high-fidelity 2GP managed packages. Engineered for technical mastery.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 pt-2 sm:pt-4 w-full max-w-md sm:max-w-none mx-auto">
                <button
                  id="hero-scope-btn"
                  onClick={() => scrollToSection("intake-form")}
                  className="w-full sm:w-auto bg-blue-600 dark:bg-primary text-white dark:text-on-primary px-8 py-4 text-xs uppercase tracking-widest font-code font-bold rounded flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all glow-primary shadow-md group"
                >
                  SCOPE YOUR PROJECT
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <button
                  id="hero-cases-btn"
                  onClick={() => scrollToSection("case-studies")}
                  className="w-full sm:w-auto border border-slate-300 dark:border-outline/40 px-8 py-4 text-xs uppercase tracking-widest font-code font-bold rounded hover:bg-slate-200 dark:hover:bg-surface-container-high transition-all text-slate-800 dark:text-on-surface shadow-sm"
                >
                  VIEW CASE STUDIES
                </button>
              </div>
            </AnimatedSection>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-100 dark:from-background to-transparent pointer-events-none" />
        </section>

        {/* Core Architecture Section */}
        <section id="architecture" className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto scroll-mt-20">
          <AnimatedSection direction="up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 sm:mb-8 gap-4 md:gap-8 border-b border-slate-200 dark:border-white/5 pb-4 sm:pb-6">
              <div className="space-y-1.5 max-w-2xl">
                <span className="text-xs font-code text-blue-600 dark:text-secondary font-semibold uppercase tracking-widest">
                  [CORE ARCHITECTURE & SYSTEMS]
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 dark:text-on-surface leading-tight">
                  Resilient Salesforce Architecture. Zero-Downtime Execution.
                </h2>
                <p className="text-slate-600 dark:text-on-surface-variant/90 text-sm sm:text-base">
                  Engineered for high-throughput data volumes, complex governor limits, and robust multi-tenant scalability.
                </p>
              </div>
              <p className="max-w-md text-slate-500 dark:text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                Surgical precision applied to every layer of the Salesforce stack, from package lifecycle to high-frequency API integrations.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
            {/* Card 1 */}
            <AnimatedSection direction="up" delay={0.1} className="h-full">
              <div className="glass-panel etched-border p-5 sm:p-6 rounded-xl group hover:border-blue-500/60 dark:hover:border-primary/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full shadow-lg">
                <div>
                  <div className="w-10 h-10 bg-blue-500/10 dark:bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-500/20 dark:group-hover:bg-primary/20 transition-all border border-blue-500/20 dark:border-primary/20">
                    <span className="material-symbols-outlined text-blue-600 dark:text-primary text-xl">account_tree</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-slate-900 dark:text-on-surface">Managed Package Engineering (1GP & 2GP)</h3>
                  <p className="text-slate-600 dark:text-on-surface-variant text-xs sm:text-sm leading-relaxed mb-4">
                    Second-generation managed package modularization, namespace dependency isolation, custom LWC framework optimization, and strict Apex bulkification for enterprise workloads.
                  </p>
                </div>
                <div className="mt-auto space-y-3 pt-3 border-t border-slate-100 dark:border-white/5">
                  <div className="flex flex-wrap gap-1.5 min-h-[44px] items-center">
                    {["[2GP]", "[AppExchange]", "[LWC]", "[CPQ]"].map((tag) => (
                      <span key={tag} className="bg-slate-200/80 dark:bg-surface-container-highest/80 px-2 py-0.5 rounded text-[11px] font-code text-slate-700 dark:text-outline border border-slate-300 dark:border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    id="arch-card-btn-0"
                    type="button"
                    onClick={() => setActiveSpecModal(activeSpecModal === 0 ? null : 0)}
                    className="text-xs font-code uppercase tracking-widest text-blue-600 dark:text-primary flex items-center gap-1.5 hover:underline font-semibold"
                  >
                    {activeSpecModal === 0 ? "Hide Specifications" : "View Tech Specs"}
                    <span className="material-symbols-outlined text-base">
                      {activeSpecModal === 0 ? "expand_less" : "expand_more"}
                    </span>
                  </button>
                </div>
              </div>
            </AnimatedSection>

            {/* Card 2 */}
            <AnimatedSection direction="up" delay={0.2} className="h-full">
              <div className="glass-panel etched-border p-5 sm:p-6 rounded-xl group hover:border-cyan-500/60 dark:hover:border-secondary/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full shadow-lg">
                <div>
                  <div className="w-10 h-10 bg-cyan-500/10 dark:bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-500/20 dark:group-hover:bg-secondary/20 transition-all border border-cyan-500/20 dark:border-secondary/20">
                    <span className="material-symbols-outlined text-cyan-600 dark:text-secondary text-xl">code</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-slate-900 dark:text-on-surface">Asynchronous Integration & Event Engines</h3>
                  <p className="text-slate-600 dark:text-on-surface-variant text-xs sm:text-sm leading-relaxed mb-4">
                    Headless REST API design, real-time Change Data Capture (CDC), Pub/Sub event architectures, and custom high-volume XML-to-Object parsing pipelines.
                  </p>
                </div>
                <div className="mt-auto space-y-3 pt-3 border-t border-slate-100 dark:border-white/5">
                  <div className="flex flex-wrap gap-1.5 min-h-[44px] items-center">
                    {["[REST/Composite]", "[Platform Events]", "[CDC]", "[XML/JSON]"].map((tag) => (
                      <span key={tag} className="bg-slate-200/80 dark:bg-surface-container-highest/80 px-2 py-0.5 rounded text-[11px] font-code text-slate-700 dark:text-outline border border-slate-300 dark:border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    id="arch-card-btn-1"
                    type="button"
                    onClick={() => setActiveSpecModal(activeSpecModal === 1 ? null : 1)}
                    className="text-xs font-code uppercase tracking-widest text-cyan-600 dark:text-secondary flex items-center gap-1.5 hover:underline font-semibold"
                  >
                    {activeSpecModal === 1 ? "Hide Specifications" : "View Tech Specs"}
                    <span className="material-symbols-outlined text-base">
                      {activeSpecModal === 1 ? "expand_less" : "expand_more"}
                    </span>
                  </button>
                </div>
              </div>
            </AnimatedSection>

            {/* Card 3 - Compliance */}
            <AnimatedSection direction="up" delay={0.3} className="h-full">
              <div id="compliance" className="glass-panel etched-border p-5 sm:p-6 rounded-xl group hover:border-blue-500/60 dark:hover:border-primary/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full shadow-lg scroll-mt-20">
                <div>
                  <div className="w-10 h-10 bg-indigo-500/10 dark:bg-tertiary-container/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-indigo-500/20 dark:group-hover:bg-tertiary-container/30 transition-all border border-indigo-500/20 dark:border-tertiary/20">
                    <span className="material-symbols-outlined text-indigo-600 dark:text-tertiary text-xl">hub</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-slate-900 dark:text-on-surface">Real-Time AML & KYC Compliance Engines</h3>
                  <p className="text-slate-600 dark:text-on-surface-variant text-xs sm:text-sm leading-relaxed mb-4">
                    Automated real-time watchlist and entity screening engines, asynchronous REST webhook listeners, high-speed identity verification pipelines, and secure transactional audit trail logging.
                  </p>
                </div>
                <div className="mt-auto space-y-3 pt-3 border-t border-slate-100 dark:border-white/5">
                  <div className="flex flex-wrap gap-1.5 min-h-[44px] items-center">
                    {["[REST APIs]", "[KYC2020 Integration]", "[Platform Events]", "[Async Batch]"].map((tag) => (
                      <span key={tag} className="bg-slate-200/80 dark:bg-surface-container-highest/80 px-2 py-0.5 rounded text-[11px] font-code text-slate-700 dark:text-outline border border-slate-300 dark:border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    id="arch-card-btn-2"
                    type="button"
                    onClick={() => setActiveSpecModal(activeSpecModal === 2 ? null : 2)}
                    className="text-xs font-code uppercase tracking-widest text-blue-600 dark:text-primary flex items-center gap-1.5 hover:underline font-semibold"
                  >
                    {activeSpecModal === 2 ? "Hide Specifications" : "View Tech Specs"}
                    <span className="material-symbols-outlined text-base">
                      {activeSpecModal === 2 ? "expand_less" : "expand_more"}
                    </span>
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Expanded Tech Specs Drawer */}
          {activeSpecModal !== null && (
            <AnimatedSection direction="down" delay={0.1}>
              <div className="mt-6 bg-white dark:bg-surface-container border border-blue-200 dark:border-primary/30 p-5 sm:p-6 rounded-xl animate-in fade-in slide-in-from-top-4 space-y-3 shadow-lg">
                <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/10 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-600 dark:text-primary text-xl">
                      {specDetails[activeSpecModal].icon}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-on-surface">
                        {specDetails[activeSpecModal].title}
                      </h4>
                      <p className="text-xs font-code text-cyan-600 dark:text-secondary font-semibold">
                        {specDetails[activeSpecModal].subtitle}
                      </p>
                    </div>
                  </div>
                  <button
                    id="spec-close-btn"
                    onClick={() => setActiveSpecModal(null)}
                    className="text-slate-400 dark:text-outline hover:text-slate-900 dark:hover:text-on-surface p-1"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3 pt-1">
                  {specDetails[activeSpecModal].points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-on-surface-variant">
                      <span className="material-symbols-outlined text-blue-600 dark:text-primary text-base mt-0.5">check_circle</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          )}
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-6 sm:py-8 md:py-10 bg-slate-200/50 dark:bg-surface-container-lowest border-y border-slate-200 dark:border-white/5 overflow-hidden scroll-mt-20">
          <div className="px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto space-y-5 sm:space-y-6">
            <AnimatedSection direction="up">
              <div className="space-y-1.5">
                <span className="text-xs font-code text-blue-600 dark:text-secondary uppercase tracking-widest font-semibold">
                  [ENTERPRISE CASE STUDIES]
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 dark:text-on-surface">
                  Proven Architectural Impact at Scale
                </h2>
                <p className="text-slate-600 dark:text-on-surface-variant/80 text-sm sm:text-base max-w-2xl">
                  Mapping quantified engineering impact directly to complex Salesforce infrastructure modernizations.
                </p>
              </div>
            </AnimatedSection>
            <CaseStudiesCarousel />
          </div>
        </section>

        {/* Operating Model Section */}
        <section id="operating-model" className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto scroll-mt-20">
          <AnimatedSection direction="up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 sm:mb-8 gap-4 md:gap-8 border-b border-slate-200 dark:border-white/5 pb-4 sm:pb-6">
              <div className="space-y-1.5 max-w-2xl text-left">
                <span className="text-xs font-code text-blue-600 dark:text-secondary uppercase tracking-widest font-semibold">
                  [THE ASHRAY METHOD]
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 dark:text-on-surface leading-tight">
                  Transparent Enterprise Operating Model & Adaptive Framework
                </h2>
                <p className="text-slate-600 dark:text-on-surface-variant text-sm sm:text-base">
                  Engagements structured around radical transparency, daily Git visibility, and zero operational friction.
                </p>
              </div>
              <p className="max-w-md text-slate-500 dark:text-on-surface-variant text-xs sm:text-sm leading-relaxed text-left md:text-right">
                While we bring rigorous engineering standards, our framework is fully adaptable to your team’s existing workflows and toolchains.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto items-stretch">
            <AnimatedSection direction="up" delay={0.1} className="h-full">
              <div className="glass-panel etched-border p-5 sm:p-6 rounded-xl group hover:border-blue-500/50 dark:hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="text-xl sm:text-2xl font-code font-bold text-blue-600 dark:text-primary mb-2">01</div>
                  <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-on-surface mb-2">Transparent Discovery & Scoping Alignment</h4>
                  <p className="text-slate-600 dark:text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                    Zero hidden assumptions. We begin with a collaborative alignment session to map your architecture, define precise milestones, and <strong className="text-blue-600 dark:text-primary font-medium">tailor our methodology around your unique operational needs</strong>.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2} className="h-full">
              <div className="glass-panel etched-border p-5 sm:p-6 rounded-xl group hover:border-cyan-500/50 dark:hover:border-secondary/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="text-xl sm:text-2xl font-code font-bold text-cyan-600 dark:text-secondary mb-2">02</div>
                  <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-on-surface mb-2">Isolated Sandboxes & Daily Git Visibility</h4>
                  <p className="text-slate-600 dark:text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                    Radical transparency into progress. Execution happens in secure, isolated sandboxes backed by daily Git commit visibility, proactive blocker updates, and <strong className="text-cyan-600 dark:text-secondary font-medium">flexible collaboration channels</strong>.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3} className="h-full">
              <div className="glass-panel etched-border p-5 sm:p-6 rounded-xl group hover:border-blue-500/50 dark:hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="text-xl sm:text-2xl font-code font-bold text-blue-600 dark:text-primary mb-2">03</div>
                  <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-on-surface mb-2">Continuous Feedback & Iterative Reviews</h4>
                  <p className="text-slate-600 dark:text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                    No surprises at the end of a sprint. We maintain regular alignment syncs, <strong className="text-blue-600 dark:text-primary font-medium">actively welcome your feedback</strong>, and continuously adapt our approach to validate edge cases against governor limits.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4} className="h-full">
              <div className="glass-panel etched-border p-5 sm:p-6 rounded-xl group hover:border-cyan-500/50 dark:hover:border-secondary/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="text-xl sm:text-2xl font-code font-bold text-cyan-600 dark:text-secondary mb-2">04</div>
                  <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-on-surface mb-2">Clean Handover, Hyper-Care & Training</h4>
                  <p className="text-slate-600 dark:text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                    Total autonomy transferred to your team. Every engagement concludes with comprehensive technical documentation, metadata manifests, and <strong className="text-cyan-600 dark:text-secondary font-medium">end-user training structured around your team's adoption pace</strong>.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Intake Form Section */}
        <section id="intake-form" className="py-6 sm:py-8 md:py-10 bg-slate-100 dark:bg-surface-container px-4 sm:px-6 md:px-margin-desktop scroll-mt-20 transition-colors">
          <AnimatedSection direction="up">
            <div className="max-w-4xl mx-auto glass-panel p-5 sm:p-6 md:p-8 rounded-2xl etched-border relative overflow-hidden shadow-2xl">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="text-left mb-5 sm:mb-6 space-y-1.5 border-b border-slate-200 dark:border-white/10 pb-4">
                <span className="text-xs font-code text-blue-600 dark:text-secondary uppercase tracking-widest font-semibold">[INITIATE SCOPING]</span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-on-surface">Ready to Scale Your Salesforce Architecture?</h2>
                <p className="text-slate-600 dark:text-on-surface-variant text-sm">
                  Submit your requirements below to initiate an engineering-led scoping session.
                </p>
              </div>
              <IntakeForm />
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  );
}