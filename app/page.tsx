"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroBackground from "@/components/HeroBackground";
import HeroBackgroundAnimation from "@/components/HeroBackgroundAnimation";
import AnimatedSection from "@/components/AnimatedSection";
import CaseStudiesCarousel from "@/components/CaseStudiesCarousel";
import IntakeForm from "@/components/IntakeForm";
import Footer from "@/components/Footer";

function SiteWideAmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Top Right Cyan Ambient Glow Orb */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[120px] animate-pulse-glow" />
      {/* Mid Left Indigo Glow Orb */}
      <div className="absolute top-[40%] -left-32 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[120px] animate-pulse-glow [animation-delay:3s]" />
      {/* Bottom Right Blue Glow Orb */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/10 dark:bg-cyan-400/10 rounded-full blur-[120px] animate-pulse-glow [animation-delay:6s]" />
    </div>
  );
}

export default function Home() {
  const [activeSpecModal, setActiveSpecModal] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (id === "intake-form") {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        const yOffset = -90;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const specDetails = [
    {
      title: "Managed Package Engineering (2GP & 1GP)",
      subtitle: "Enterprise AppExchange Development & Package Architecture",
      icon: "account_tree",
      executiveOutcome: "AppExchange Revenue Ready • Zero-Downtime Upgrades",
      businessImpact: "Launch commercial Salesforce products faster with guaranteed security compliance and seamless automated updates across subscriber orgs.",
      tags: ["2GP / 1GP", "AppExchange", "pkg__ Namespace", "Flow DTOs"],
      accentColor: "from-blue-600 via-indigo-600 to-cyan-500",
      badgeColor: "bg-blue-500/10 text-blue-700 dark:text-cyan-300 border-blue-500/20 dark:border-cyan-500/30",
      points: [
        "Architecting 2nd Generation Managed Packages (2GP) with clean namespace isolation (pkg__) built to pass AppExchange Security Review.",
        "Dynamic class namespace resolution (Class.getName()) & SObject describe engines for zero-code subscriber compatibility.",
        "Package-supplied Apex DTOs exposing typed variables to low-code Salesforce Flow Builder via Invocable parameters.",
        "Strict Apex CPU execution time guardrails ensuring seamless, zero-downtime package upgrades for enterprise clients.",
      ],
    },
    {
      title: "Sales, Service & Experience Cloud Solutions",
      subtitle: "Core Salesforce Cloud Modernization & Customer Portals",
      icon: "cloud_done",
      executiveOutcome: "30% Faster Case Resolution • Self-Service Digital Portals",
      businessImpact: "Empower your sales and support teams with intuitive workflows that shorten sales cycles and deliver engaging digital customer portals.",
      tags: ["Sales Cloud", "Service Cloud", "Experience Cloud", "Case Management"],
      accentColor: "from-cyan-500 via-blue-600 to-indigo-600",
      badgeColor: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20 dark:border-cyan-500/30",
      points: [
        "End-to-end Sales Cloud & Service Cloud architecture including Record Types, Field Dependencies, and dynamic Lightning Record Pages.",
        "Experience Cloud portal customization delivering tailored digital experiences for external partners, customers, and vendors.",
        "Multi-process Case Management configuration with guided Screen Flows and conditional field visibility via Dynamic Forms.",
        "Automating complex business workflows across Sales & Service Cloud while adhering to Salesforce architectural best practices.",
      ],
    },
    {
      title: "Integrations, Metadata Caching & Async Frameworks",
      subtitle: "High-Throughput APIs, Real-Time Data Sync & Staging Queues",
      icon: "sync_alt",
      executiveOutcome: "Real-Time ERP & Payment Sync • 100% Data Integrity",
      businessImpact: "Connect Salesforce seamlessly with your internal ERPs, databases, and third-party APIs—ensuring automated data sync with zero downtime.",
      tags: ["REST & Callouts", "UI API Cache", "Batch Apex", "Staging Queues"],
      accentColor: "from-purple-600 via-indigo-600 to-cyan-500",
      badgeColor: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20 dark:border-purple-500/30",
      points: [
        "Developing custom Apex REST APIs with payload validation, structured JSON exception handling, and clean error responses.",
        "Building stateful HTTP callout state machines and two-tier webhook ingestion queues mitigating high-volume data surges.",
        "Integrating Salesforce UI API & custom Schema Cache objects for high-speed dynamic metadata-driven UI rendering.",
        "Bulk Contact Staging objects & Batch Apex engines for high-volume user provisioning and automated Permission Set Group assignments.",
      ],
    },
    {
      title: "Custom User Experiences (LWC, React & Modern UI)",
      subtitle: "Pixel-Perfect Front-End Engineering & Interactive Interfaces",
      icon: "devices",
      executiveOutcome: "Higher User Adoption • Zero Training Overhead",
      businessImpact: "Replace clunky, complex admin screens with modern, intuitive web applications and tile selectors that your teams and clients will love using.",
      tags: ["LWC", "React / Next.js", "Custom UI Tiles", "Modern UX"],
      accentColor: "from-cyan-500 via-teal-500 to-blue-600",
      badgeColor: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20 dark:border-cyan-500/30",
      points: [
        "Custom Lightning Web Components (LWC) development including card/tile picklist selectors and responsive Flow screen components.",
        "Building bespoke web applications and portals using React, Next.js, and modern CSS/Tailwind design systems.",
        "Integrating Salesforce UI API & REST endpoints into custom web UIs for seamless bi-directional data flow.",
        "Delivering intuitive, accessible, and high-performance front-end interfaces for mobile and desktop users.",
      ],
    },
    {
      title: "Enterprise Security, Cryptography & Telemetry",
      subtitle: "Bank-Grade Encryption, Platform Event Logging & Storage Optimization",
      icon: "security",
      executiveOutcome: "Bank-Grade Audit Security • 80% Lower Storage Costs",
      businessImpact: "Protect sensitive business data with bank-grade encryption signatures while reducing Salesforce storage license bloat.",
      tags: ["HMAC-SHA256", "Platform Event Bus", "Log Hashing", "SOQL Indexing"],
      accentColor: "from-indigo-600 via-purple-600 to-pink-500",
      badgeColor: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20 dark:border-indigo-500/30",
      points: [
        "Generating binary HMAC-SHA256 payload signatures with canonical URL paths & epoch anti-replay timestamps.",
        "Publishing diagnostic telemetry over Platform Event Bus to guarantee error log persistence even during DML rollbacks.",
        "Engineered in-flight error hashing algorithms to aggregate duplicate log bursts, reducing log storage bloat by 80%.",
        "Optimizing high-volume SOQL queries using selective polymorphic indexes for sub-second database performance.",
      ],
    },
    {
      title: "Declarative Automation & Guided Workflow Flows",
      subtitle: "Low-Code Process Automation & Step-by-Step Wizards",
      icon: "dashboard",
      executiveOutcome: "Zero Manual Data Entry • Standardized Operating Process",
      businessImpact: "Automate repetitive administrative tasks and guide your staff step-by-step through operational workflows to ensure 100% data accuracy.",
      tags: ["Screen Flows", "Record Triggers", "Permission Sets", "Low-Code"],
      accentColor: "from-emerald-500 via-teal-600 to-cyan-500",
      badgeColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 dark:border-emerald-500/30",
      points: [
        "Designing multi-step guided Screen Flows with real-time pre-commit validation for intuitive business processes.",
        "Implementing declarative Record-Triggered Flows to automate business rules while minimizing custom Apex maintenance.",
        "Automating Permission Set Group assignments and security entitlement rules for seamless access control.",
        "Leveraging Dynamic Forms and conditional field visibility to streamline complex data entry layouts.",
      ],
    },
  ];

  return (
    <>
      <SiteWideAmbientBackground />
      <Header />
      <main className="mt-20 overflow-x-hidden relative z-10">
        {/* Next-Gen Holographic Hero Section */}
        <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-margin-desktop overflow-hidden pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 bg-tech-grid">
          <HeroBackground />
          <HeroBackgroundAnimation />

          {/* Floating Background Pills (Business Outcomes + Tech Capabilities) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
            {/* Top Left - Business Outcome */}
            <div className="absolute top-[6%] left-[2%] sm:left-[6%] animate-float-slow opacity-30 dark:opacity-40">
              <div className="px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/30 dark:border-cyan-400/40 text-blue-700 dark:text-cyan-300 font-code text-xs font-bold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-400" />
                <span>Sales &amp; Service Cloud</span>
              </div>
            </div>

            {/* Top Right - Technical Pill (2GP Packages) */}
            <div className="absolute top-[12%] right-[3%] sm:right-[7%] animate-float-reverse opacity-30 dark:opacity-40">
              <div className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-700 dark:text-cyan-300 font-code text-xs font-bold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>2GP Managed Packages</span>
              </div>
            </div>

            {/* Mid Left Upper - Custom Integrations */}
            <div className="absolute top-[32%] left-[1%] sm:left-[3%] animate-float-diagonal opacity-30 dark:opacity-40 hidden md:block">
              <div className="px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-700 dark:text-cyan-300 font-code text-xs font-bold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Custom Integrations &amp; REST APIs</span>
              </div>
            </div>

            {/* Mid Right Upper - LWC */}
            <div className="absolute top-[35%] right-[2%] sm:right-[4%] animate-float-slow opacity-30 dark:opacity-40 hidden md:block">
              <div className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-700 dark:text-cyan-300 font-code text-xs font-bold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>LWC (Lightning Web Components)</span>
              </div>
            </div>

            {/* Mid Left Lower - Business Outcome */}
            <div className="absolute top-[55%] left-[1%] sm:left-[4%] animate-float-diagonal opacity-30 dark:opacity-40 hidden sm:block">
              <div className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 font-code text-xs font-bold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Zero Technical Debt</span>
              </div>
            </div>

            {/* Mid Right Lower - Non-Tech Business */}
            <div className="absolute top-[58%] right-[2%] sm:right-[5%] animate-float-slow opacity-30 dark:opacity-40 hidden sm:block">
              <div className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-700 dark:text-blue-300 font-code text-xs font-bold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Experience Cloud Portals</span>
              </div>
            </div>

            {/* Lower Left - Technical Pill */}
            <div className="absolute bottom-[20%] left-[3%] sm:left-[8%] animate-float-reverse opacity-30 dark:opacity-40">
              <div className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-700 dark:text-cyan-300 font-code text-xs font-bold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Guided Screen Flows</span>
              </div>
            </div>

            {/* Lower Right - Business Pill */}
            <div className="absolute bottom-[18%] right-[4%] sm:right-[10%] animate-float-diagonal opacity-30 dark:opacity-40">
              <div className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-700 dark:text-indigo-300 font-code text-xs font-bold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Sub-Second API Sync</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 text-center max-w-5xl space-y-6 sm:space-y-8">
            <AnimatedSection direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900/80 dark:bg-[#060A17]/80 border border-cyan-500/30 rounded-full mb-2 backdrop-blur-xl shadow-2xl">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs uppercase tracking-widest font-code text-cyan-400 font-extrabold">
                  ENTERPRISE SALESFORCE PARTNER
                </span>
                <span className="text-slate-500 dark:text-slate-600">|</span>
                <span className="text-[11px] font-code text-slate-400 dark:text-slate-400 hidden sm:inline">
                  FULL-SPECTRUM ARCHITECTURE &amp; CONSULTING
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.1]">
                Enterprise Salesforce Architecture. <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                  Zero Overhead.
                </span>{" "}
                Pure Execution.
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-2 font-medium">
                From Sales, Service &amp; Experience Cloud modernizations to custom LWC interfaces, high-volume integrations, and automated workflows—we engineer end-to-end Salesforce solutions tailored for operational efficiency and maximum ROI.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-2 sm:pt-4 w-full max-w-md sm:max-w-none mx-auto">
                <button
                  id="hero-scope-btn"
                  onClick={() => scrollToSection("intake-form")}
                  className="w-full sm:w-auto bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 px-9 py-4 text-xs uppercase tracking-widest font-code font-extrabold rounded-xl flex items-center justify-center gap-3 hover:brightness-110 active:scale-95 transition-all glow-primary shadow-xl group border border-cyan-400/50"
                >
                  <span>SCOPE YOUR PROJECT</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
                <button
                  id="hero-cases-btn"
                  onClick={() => scrollToSection("case-studies")}
                  className="w-full sm:w-auto bg-slate-900/10 dark:bg-[#0B0F17]/80 text-slate-900 dark:text-slate-100 px-9 py-4 text-xs uppercase tracking-widest font-code font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800/80 transition-all border border-slate-300 dark:border-cyan-500/30 active:scale-95 shadow-md backdrop-blur-md"
                >
                  VIEW CASE STUDIES
                </button>
              </div>
            </AnimatedSection>

            {/* Futuristic Moving Infinite Marquee Ticker */}
            <AnimatedSection direction="up" delay={0.5} className="w-full">
              <div className="pt-8 border-t border-slate-200 dark:border-white/10 w-full overflow-hidden relative max-w-5xl mx-auto">
                {/* Left & Right Gradient Fade Shadows */}
                <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-slate-100 dark:from-[#030712] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-slate-100 dark:from-[#030712] to-transparent z-10 pointer-events-none" />

                <div className="animate-marquee hover:[animation-play-state:paused] flex gap-4 font-code text-xs py-1">
                  {[
                    { value: "15+ Years", label: "Cumulative Salesforce Experience" },
                    { value: "3 2GP Packages", label: "AppExchange Products Built" },
                    { value: "100%", label: "Project Delivery Success" },
                    { value: "$20M+", label: "Billing & Transaction Volume" },
                    { value: "Multi-Cloud", label: "Sales, Service & Experience" },
                    { value: "Zero Debt", label: "Clean Code Architecture" },
                    { value: "15+ Years", label: "Cumulative Salesforce Experience" },
                    { value: "3 2GP Packages", label: "AppExchange Products Built" },
                    { value: "100%", label: "Project Delivery Success" },
                    { value: "$20M+", label: "Billing & Transaction Volume" },
                    { value: "Multi-Cloud", label: "Sales, Service & Experience" },
                    { value: "Zero Debt", label: "Clean Code Architecture" },
                  ].map((stat, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 px-6 rounded-xl bg-white/80 dark:bg-[#0B0F17]/90 border border-slate-200 dark:border-cyan-500/30 shadow-md backdrop-blur-md space-y-1 flex-shrink-0 min-w-[200px] text-center group hover:border-blue-500 dark:hover:border-cyan-400 transition-colors"
                    >
                      <div className="text-base sm:text-lg font-extrabold text-blue-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                        {stat.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold whitespace-nowrap">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-100 dark:from-[#030712] to-transparent pointer-events-none" />
        </section>

        {/* Core Architecture & Technical Skill Sets Section (Bento Grid Matrix) */}
        <section id="architecture" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto scroll-mt-20 space-y-8">
          <AnimatedSection direction="up">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8 border-b border-slate-200 dark:border-white/10 pb-6">
                <div className="space-y-2 max-w-2xl">
                  <span className="text-xs font-code text-blue-600 dark:text-cyan-400 font-bold uppercase tracking-widest block">
                    [CORE TECHNICAL SKILL SETS &amp; CAPABILITIES]
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 leading-tight">
                    Mastery Across the Entire Salesforce Ecosystem.
                  </h2>
                </div>
              </div>

              {/* PROMINENT HIGH-IMPACT EXECUTIVE VALUE & MASTERY BANNER */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 dark:from-blue-950/60 dark:via-indigo-950/50 dark:to-cyan-950/60 border border-blue-300 dark:border-cyan-500/40 shadow-2xl space-y-4 relative overflow-hidden backdrop-blur-md">
                <div className="relative z-10 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300 border border-blue-300 dark:border-cyan-500/30 text-xs font-code font-bold">
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
                    <span>EXECUTIVE BUSINESS VALUE &amp; ENGINEERING MASTERY</span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 leading-relaxed font-code">
                    "Delivering measurable executive business value and surgical engineering mastery—spanning Sales, Service &amp; Experience Cloud, 2GP packages, custom LWC/React interfaces, and high-volume REST integrations."
                  </h3>
                  
                  <p className="text-sm sm:text-base font-semibold text-cyan-600 dark:text-cyan-300 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">verified</span>
                    <span>Proven capabilities tailored to accelerate your business goals with zero technical debt and maximum ROI.</span>
                  </p>
                </div>

                {/* Decorative Background Mesh Glow */}
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              </div>
            </div>
          </AnimatedSection>

          {/* Clean Row Bento Layout: Spec Drawer Opens Directly Under the Active Row */}
          <div className="space-y-6">
            {/* Row 1: Cards 0, 1, 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
              {specDetails.slice(0, 3).map((card, idx) => (
                <AnimatedSection key={idx} direction="up" delay={0.1 + idx * 0.05} className="h-full">
                  <div className="bento-card p-6 sm:p-7 rounded-2xl group hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 bg-blue-500/10 dark:bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all border border-blue-500/20 dark:border-cyan-500/30 shadow-inner">
                          <span className="material-symbols-outlined text-blue-600 dark:text-cyan-400 text-2xl">{card.icon}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-[10px] font-code font-extrabold border ${card.badgeColor}`}>
                          EXECUTIVE ROI
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1.5 text-slate-900 dark:text-slate-50 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-blue-600 dark:text-cyan-400 text-xs font-code font-bold mb-3">
                          {card.executiveOutcome}
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {card.businessImpact}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4 pt-4 border-t border-slate-100 dark:border-white/10">
                      <div className="flex flex-wrap gap-1.5 items-center min-h-[38px]">
                        {card.tags.map((tag) => (
                          <span key={tag} className="bg-slate-200/80 dark:bg-[#060A17] px-2.5 py-1 rounded-lg text-[11px] font-code font-semibold text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-cyan-500/20">
                            [{tag}]
                          </span>
                        ))}
                      </div>
                      <button
                        id={`arch-card-btn-${idx}`}
                        type="button"
                        onClick={() => setActiveSpecModal(activeSpecModal === idx ? null : idx)}
                        className="w-full text-xs font-code uppercase tracking-widest text-blue-600 dark:text-cyan-400 flex items-center justify-between px-4 py-2.5 rounded-lg bg-blue-50 dark:bg-cyan-950/30 hover:bg-blue-100 dark:hover:bg-cyan-900/40 border border-blue-200 dark:border-cyan-500/30 font-bold transition-all"
                      >
                        <span>{activeSpecModal === idx ? "Hide Technical Specs" : "View Technical Specs"}</span>
                        <span className="material-symbols-outlined text-base">
                          {activeSpecModal === idx ? "expand_less" : "expand_more"}
                        </span>
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Spec Cockpit Drawer for Row 1 (Cards 0, 1, 2) */}
            {activeSpecModal !== null && activeSpecModal < 3 && (
              <AnimatedSection direction="down" delay={0.05}>
                <div className="bg-white dark:bg-[#060A17] border border-blue-300 dark:border-cyan-500/40 p-6 sm:p-8 rounded-2xl space-y-5 shadow-2xl animate-in fade-in slide-in-from-top-3 relative overflow-hidden">
                  <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-blue-600 dark:text-cyan-400 text-2xl">
                        {specDetails[activeSpecModal].icon}
                      </span>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                          {specDetails[activeSpecModal].title}
                        </h4>
                        <p className="text-xs font-code text-cyan-600 dark:text-cyan-300 font-bold">
                          {specDetails[activeSpecModal].subtitle}
                        </p>
                      </div>
                    </div>
                    <button
                      id="spec-close-btn-r1"
                      onClick={() => setActiveSpecModal(null)}
                      className="text-slate-400 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors"
                    >
                      <span className="material-symbols-outlined">close</span>
                    </button>
                  </div>

                  {/* Executive Summary Callout */}
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-cyan-500/30 text-xs font-code text-slate-800 dark:text-slate-200 flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-600 dark:text-cyan-400 text-xl">insights</span>
                    <span><strong className="text-blue-700 dark:text-cyan-300">EXECUTIVE VALUE PROPOSITION:</strong> {specDetails[activeSpecModal].businessImpact}</span>
                  </div>

                  {/* Technical Engineering Specifications */}
                  <div>
                    <h5 className="text-xs font-code text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-3">
                      TECHNICAL ARCHITECTURE &amp; ENGINEERING SPECS:
                    </h5>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 pt-1">
                      {specDetails[activeSpecModal].points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                          <span className="material-symbols-outlined text-blue-600 dark:text-cyan-400 text-base mt-0.5">check_circle</span>
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            )}

            {/* Row 2: Cards 3, 4, 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
              {specDetails.slice(3, 6).map((card, offsetIdx) => {
                const idx = offsetIdx + 3;
                return (
                  <AnimatedSection key={idx} direction="up" delay={0.1 + idx * 0.05} className="h-full">
                    <div className="bento-card p-6 sm:p-7 rounded-2xl group hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-11 h-11 bg-blue-500/10 dark:bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all border border-blue-500/20 dark:border-cyan-500/30 shadow-inner">
                            <span className="material-symbols-outlined text-blue-600 dark:text-cyan-400 text-2xl">{card.icon}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-[10px] font-code font-extrabold border ${card.badgeColor}`}>
                            EXECUTIVE ROI
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1.5 text-slate-900 dark:text-slate-50 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                            {card.title}
                          </h3>
                          <p className="text-blue-600 dark:text-cyan-400 text-xs font-code font-bold mb-3">
                            {card.executiveOutcome}
                          </p>
                          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                            {card.businessImpact}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 space-y-4 pt-4 border-t border-slate-100 dark:border-white/10">
                        <div className="flex flex-wrap gap-1.5 items-center min-h-[38px]">
                          {card.tags.map((tag) => (
                            <span key={tag} className="bg-slate-200/80 dark:bg-[#060A17] px-2.5 py-1 rounded-lg text-[11px] font-code font-semibold text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-cyan-500/20">
                              [{tag}]
                            </span>
                          ))}
                        </div>
                        <button
                          id={`arch-card-btn-${idx}`}
                          type="button"
                          onClick={() => setActiveSpecModal(activeSpecModal === idx ? null : idx)}
                          className="w-full text-xs font-code uppercase tracking-widest text-blue-600 dark:text-cyan-400 flex items-center justify-between px-4 py-2.5 rounded-lg bg-blue-50 dark:bg-cyan-950/30 hover:bg-blue-100 dark:hover:bg-cyan-900/40 border border-blue-200 dark:border-cyan-500/30 font-bold transition-all"
                        >
                          <span>{activeSpecModal === idx ? "Hide Technical Specs" : "View Technical Specs"}</span>
                          <span className="material-symbols-outlined text-base">
                            {activeSpecModal === idx ? "expand_less" : "expand_more"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>

            {/* Spec Cockpit Drawer for Row 2 (Cards 3, 4, 5) */}
            {activeSpecModal !== null && activeSpecModal >= 3 && (
              <AnimatedSection direction="down" delay={0.05}>
                <div className="bg-white dark:bg-[#060A17] border border-blue-300 dark:border-cyan-500/40 p-6 sm:p-8 rounded-2xl space-y-5 shadow-2xl animate-in fade-in slide-in-from-top-3 relative overflow-hidden">
                  <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-blue-600 dark:text-cyan-400 text-2xl">
                        {specDetails[activeSpecModal].icon}
                      </span>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                          {specDetails[activeSpecModal].title}
                        </h4>
                        <p className="text-xs font-code text-cyan-600 dark:text-cyan-300 font-bold">
                          {specDetails[activeSpecModal].subtitle}
                        </p>
                      </div>
                    </div>
                    <button
                      id="spec-close-btn-r2"
                      onClick={() => setActiveSpecModal(null)}
                      className="text-slate-400 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors"
                    >
                      <span className="material-symbols-outlined">close</span>
                    </button>
                  </div>

                  {/* Executive Summary Callout */}
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-cyan-500/30 text-xs font-code text-slate-800 dark:text-slate-200 flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-600 dark:text-cyan-400 text-xl">insights</span>
                    <span><strong className="text-blue-700 dark:text-cyan-300">EXECUTIVE VALUE PROPOSITION:</strong> {specDetails[activeSpecModal].businessImpact}</span>
                  </div>

                  {/* Technical Engineering Specifications */}
                  <div>
                    <h5 className="text-xs font-code text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-3">
                      TECHNICAL ARCHITECTURE &amp; ENGINEERING SPECS:
                    </h5>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 pt-1">
                      {specDetails[activeSpecModal].points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                          <span className="material-symbols-outlined text-blue-600 dark:text-cyan-400 text-base mt-0.5">check_circle</span>
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-8 sm:py-10 md:py-12 bg-slate-200/50 dark:bg-[#060A17] border-y border-slate-200 dark:border-cyan-500/20 overflow-hidden scroll-mt-20">
          <div className="px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto space-y-6">
            <AnimatedSection direction="up">
              <div className="space-y-2">
                <span className="text-xs font-code text-blue-600 dark:text-cyan-400 font-bold uppercase tracking-widest block">
                  [ENTERPRISE CASE STUDIES]
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50">
                  Proven Architectural Impact at Scale
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl">
                  Mapping quantified engineering impact directly to complex Salesforce infrastructure modernizations.
                </p>
              </div>
            </AnimatedSection>
            <CaseStudiesCarousel />
          </div>
        </section>

        {/* Operating Model Section (The Ashray Method - Visually Enhanced & Highlighting Adaptability) */}
        <section id="operating-model" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto space-y-10 scroll-mt-20">
          <AnimatedSection direction="up">
            <div className="space-y-5">
              <div className="space-y-2 text-left border-b border-slate-200 dark:border-white/10 pb-5">
                <span className="text-xs font-code text-blue-600 dark:text-cyan-400 font-bold uppercase tracking-widest block">
                  [THE ASHRAY METHOD]
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 leading-tight">
                  Transparent Enterprise Operating Model &amp; Adaptive Framework
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-3xl">
                  Engagements structured around radical transparency, daily Git visibility, and zero operational friction.
                </p>
              </div>

              {/* PROMINENT HIGH-IMPACT FEATURE BANNER FOR ADAPTABILITY STATEMENT */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 dark:from-blue-950/50 dark:via-cyan-950/40 dark:to-indigo-950/50 border border-blue-300 dark:border-cyan-500/40 shadow-2xl space-y-5 relative overflow-hidden backdrop-blur-md">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                  <div className="space-y-3 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300 border border-blue-300 dark:border-cyan-500/30 text-xs font-code font-bold">
                      <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
                      <span>PLUG-AND-PLAY ADAPTIVE FRAMEWORK</span>
                    </div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 leading-relaxed font-code">
                      "While we bring rigorous engineering standards, our framework is fully adaptable to your team’s existing workflows and toolchains."
                    </p>
                  </div>

                  {/* Visual Toolchain Badge Highlights */}
                  <div className="space-y-3 font-code text-xs">
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold block">
                      SEAMLESS TOOLCHAIN INTEGRATION:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: "Git / GitHub / GitLab", icon: "code_blocks" },
                        { label: "Jira / Azure DevOps", icon: "task_alt" },
                        { label: "Salesforce CLI / sfdx", icon: "terminal" },
                        { label: "CI/CD & Scratch Orgs", icon: "published_with_changes" },
                        { label: "Slack / Teams Sync", icon: "chat" },
                      ].map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-2 rounded-xl bg-white dark:bg-[#030712] border border-slate-300 dark:border-cyan-500/30 text-slate-800 dark:text-cyan-300 font-bold shadow-md flex items-center gap-2 hover:border-blue-500 dark:hover:border-cyan-400 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm text-blue-600 dark:text-cyan-400">
                            {tool.icon}
                          </span>
                          <span>{tool.label}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Background Mesh Glow */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              </div>
            </div>
          </AnimatedSection>

          {/* 4 VISUALLY ENHANCED OPERATING PROCESS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-max-width mx-auto items-stretch">
            {/* Step 01 */}
            <AnimatedSection direction="up" delay={0.1} className="h-full">
              <div className="bento-card p-6 rounded-2xl group hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden shadow-xl h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-cyan-500/20 text-blue-600 dark:text-cyan-300 font-bold flex items-center justify-center border border-blue-300 dark:border-cyan-500/30 shadow-inner">
                      <span className="material-symbols-outlined text-xl">troubleshoot</span>
                    </span>
                    <span className="text-2xl font-code font-extrabold text-blue-600 dark:text-cyan-400 opacity-90">01</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-50 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                      Transparent Discovery &amp; Scoping Alignment
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                      Iterative architectural audits and scoping workshops mapping technical requirements directly to clear milestones.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-4">
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 dark:bg-cyan-950/40 text-blue-700 dark:text-cyan-300 text-[10px] font-code font-bold border border-blue-200 dark:border-cyan-500/30">
                    [SCOPING ALIGNMENT]
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 02 */}
            <AnimatedSection direction="up" delay={0.15} className="h-full">
              <div className="bento-card p-6 rounded-2xl group hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden shadow-xl h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 font-bold flex items-center justify-center border border-cyan-300 dark:border-cyan-500/30 shadow-inner">
                      <span className="material-symbols-outlined text-xl">rocket_launch</span>
                    </span>
                    <span className="text-2xl font-code font-extrabold text-cyan-600 dark:text-cyan-400 opacity-90">02</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-50 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      Zero-Downtime Deployment &amp; Testing
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                      Automated CI/CD pipelines, scratch org validation, and 100% test coverage ensuring zero business interruption.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-4">
                  <span className="px-2.5 py-1 rounded-md bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 text-[10px] font-code font-bold border border-cyan-200 dark:border-cyan-500/30">
                    [100% TEST COVERAGE]
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 03 */}
            <AnimatedSection direction="up" delay={0.2} className="h-full">
              <div className="bento-card p-6 rounded-2xl group hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden shadow-xl h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 font-bold flex items-center justify-center border border-purple-300 dark:border-purple-500/30 shadow-inner">
                      <span className="material-symbols-outlined text-xl">code_blocks</span>
                    </span>
                    <span className="text-2xl font-code font-extrabold text-purple-600 dark:text-purple-300 opacity-90">03</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-50 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                      Daily Git Transparency &amp; Code Audits
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                      Full daily visibility into pull requests, clean commit histories, and peer-reviewed Apex/LWC code architectures.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-4">
                  <span className="px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 text-[10px] font-code font-bold border border-purple-200 dark:border-purple-500/30">
                    [DAILY PR VISIBILITY]
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 04 */}
            <AnimatedSection direction="up" delay={0.25} className="h-full">
              <div className="bento-card p-6 rounded-2xl group hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden shadow-xl h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 font-bold flex items-center justify-center border border-emerald-300 dark:border-emerald-500/30 shadow-inner">
                      <span className="material-symbols-outlined text-xl">verified_user</span>
                    </span>
                    <span className="text-2xl font-code font-extrabold text-emerald-600 dark:text-emerald-300 opacity-90">04</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                      Long-Term Governance &amp; Handoff
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                      Comprehensive technical documentation, team enablement sessions, and post-deployment monitoring for ongoing reliability.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-4">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-[10px] font-code font-bold border border-emerald-200 dark:border-emerald-500/30">
                    [GOVERNANCE HANDOFF]
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Scope Project / Intake Form Section (With Header & Card Container) */}
        <section id="intake-form" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto scroll-mt-20">
          <AnimatedSection direction="up">
            <div className="bento-card p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl space-y-8 border border-slate-200 dark:border-cyan-500/40 relative overflow-hidden">
              <div className="space-y-2 text-left border-b border-slate-200 dark:border-white/10 pb-6 relative z-10">
                <span className="text-xs font-code text-blue-600 dark:text-cyan-400 font-bold uppercase tracking-widest block">
                  [SCOPE YOUR PROJECT]
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 leading-tight">
                  Partner with Enterprise Salesforce Team
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl">
                  Initialize your project scope, brief our engineering team, and immediately launch a pre-filled 1-on-1 Zoho discovery session.
                </p>
              </div>

              <div className="relative z-10">
                <IntakeForm />
              </div>

              {/* Ambient Bottom Glow */}
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  );
}