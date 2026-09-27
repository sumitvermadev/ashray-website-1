"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroBackground from "@/components/HeroBackground";
import HeroBackgroundAnimation from "@/components/HeroBackgroundAnimation";
import AnimatedSection from "@/components/AnimatedSection";
import CaseStudiesCarousel from "@/components/CaseStudiesCarousel";
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
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const specDetails = [
    {
      title: "Managed Package Architecture & DevOps Deployment",
      subtitle: "2GP / 1GP Package Architecture, SFDX, GitHub Actions, Copado & Gearset",
      icon: "account_tree",
      executiveOutcome: "AppExchange Revenue Ready • Automated CI/CD Pipelines",
      businessImpact: "Accelerate AppExchange product commercialization and multi-org enterprise deployments using GitHub Actions, Copado, Gearset, and automated SFDX CI/CD pipelines.",
      tags: ["2GP / 1GP Architecture", "GitHub Actions CI/CD", "Copado & Gearset", "AppExchange Security"],
      accentColor: "from-blue-600 via-indigo-600 to-cyan-500",
      badgeColor: "bg-blue-500/10 text-blue-700 dark:text-cyan-300 border-blue-500/20 dark:border-cyan-500/30",
      points: [
        "Deployment & DevOps Pipelines: Architecting 2nd Generation Managed Packages (2GP) using SFDX CLI, GitHub Actions, Copado, and Gearset for automated Scratch Org builds, version tagging, and zero-downtime subscriber upgrades.",
        "Security & Namespace Isolation: Enforcing strict pkg__ namespace encapsulation, Apex CRUD/FLS security checks (Security.stripInaccessible()), and passing AppExchange Security Review.",
        "Configuration & Data Sharing: Package-supplied Permission Sets, Custom Metadata Types (CMDT), and subscriber-extensible Flow Screen Invocable DTOs.",
        "Integration & Dynamic Describe: Building dynamic Apex class namespace resolution engines (Class.getName()) and SObject Schema describe utilities for multi-tenant subscriber org compatibility.",
      ],
    },
    {
      title: "Sales, Service & Experience Cloud, Data Sharing & Security",
      subtitle: "Enterprise Architecture, Role Hierarchy, OWD & Custom Portals",
      icon: "cloud_done",
      executiveOutcome: "Enterprise Data Sharing • 30% Faster Case Resolution",
      businessImpact: "Empower sales, service, and partner operations with robust data sharing models, strict security governance, and responsive digital portals adhering to Salesforce architectural best practices.",
      tags: ["Sales & Service Cloud", "Experience Cloud", "Sharing & Roles", "Security Model"],
      accentColor: "from-cyan-500 via-blue-600 to-indigo-600",
      badgeColor: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20 dark:border-cyan-500/30",
      points: [
        "Deployment & Metadata Automation: Automated metadata deployment of Record Types, Layouts, and Permission Sets via Gearset, Copado, and GitHub Actions CI/CD.",
        "Data Sharing & Access Control: Implementing multi-tier Organization-Wide Defaults (OWD), Role Hierarchies, Criteria-Based Sharing Rules, and Apex Managed Sharing (SObjectOwnerSharing) for matrix security.",
        "Configuration & Security Governance: Configuring Object Permissions, Field-Level Security (FLS), Permission Set Groups, Dynamic Forms, and conditional field visibility.",
        "Sales, Service & Experience Cloud: Lead/Opportunity pipelines, Case Routing, Omnichannel queues, Record Types, Screen Flows, and customized Experience Cloud portals with granular Guest User security.",
      ],
    },
    {
      title: "High-Throughput Integration, REST APIs & Asynchronous Processing",
      subtitle: "Real-Time Webhooks, Middleware Sync, Named Credentials & Batch Apex",
      icon: "sync_alt",
      executiveOutcome: "Real-Time ERP & Payment Sync • 100% Data Integrity",
      businessImpact: "Connect Salesforce seamlessly with internal ERPs, financial systems, and external databases—ensuring automated real-time and bulk data synchronization with zero data loss.",
      tags: ["REST & Callouts", "Named Credentials", "Async Frameworks", "Middleware Sync"],
      accentColor: "from-purple-600 via-indigo-600 to-cyan-500",
      badgeColor: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20 dark:border-purple-500/30",
      points: [
        "Integration Architecture & Webhooks: Developing custom Apex REST/SOAP APIs with JSON payload validation, OAuth 2.0 JWT Bearer authentication, and Named Credentials.",
        "Asynchronous Data Pipelines: Building stateful HTTP callout state machines, Queueable Apex chains, and Batch Apex engines handling high-volume data surges.",
        "Data Management & Error Recovery: Implementing two-tier staging queues, automated retry mechanisms, and structured exception handling for 100% data sync integrity.",
        "Environment Sync & CI/CD: Managing endpoint URLs and Named Credentials across Sandboxes and Production via Copado, Gearset, and GitHub Actions.",
      ],
    },
    {
      title: "Lightning Web Components (LWC), UI API & Front-End Architecture",
      subtitle: "Reactive Front-End Engineering, Custom Flow Screens & Modern UX",
      icon: "devices",
      executiveOutcome: "Higher User Adoption • FLS-Compliant UI Architecture",
      businessImpact: "Transform administrative overhead into intuitive, high-adoption web experiences with responsive LWC components, interactive tile selectors, and seamless data binding.",
      tags: ["LWC Modules", "UI API Services", "Flow Screen LWC", "Responsive UX"],
      accentColor: "from-cyan-500 via-teal-500 to-blue-600",
      badgeColor: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20 dark:border-cyan-500/30",
      points: [
        "LWC & UI API Architecture: Engineering modular, reactive Lightning Web Components (LWC) utilizing @wire adapters, Lightning Data Service (LDS), and UI API metadata caching.",
        "Security & FLS-Compliant UI: Enforcing user context evaluation, Field-Level Security (FLS) compliance, and secure shadow DOM data binding in custom interfaces.",
        "DevOps & Component Deployment: Automating LWC bundle deployments, Jest unit testing, and ESLint static analysis via GitHub Actions CI/CD pipelines.",
        "Flow Integration & Custom UX: Building interactive LWC tile/card pickers and step-by-step wizard components integrated directly into low-code Salesforce Flows.",
      ],
    },
    {
      title: "Configuration Security, Cryptography, Compliance & Telemetry",
      subtitle: "HMAC-SHA256 Encryption, Platform Event Bus & Audit Logging",
      icon: "security",
      executiveOutcome: "Bank-Grade Security Audit • 80% Lower Storage Costs",
      businessImpact: "Enforce bank-grade data encryption, real-time security audit trails, and platform telemetry while reducing Salesforce log storage bloat by 80%.",
      tags: ["HMAC Cryptography", "Platform Events", "Audit Telemetry", "Data Security"],
      accentColor: "from-indigo-600 via-purple-600 to-pink-500",
      badgeColor: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20 dark:border-indigo-500/30",
      points: [
        "Configuration Security & Cryptography: Generating binary HMAC-SHA256 payload signatures, AES-256 encryption, canonical URL hashing, and anti-replay epoch validation.",
        "Telemetry & Event Bus Architecture: Publishing diagnostic telemetry over Platform Event Bus to guarantee error log persistence even during database DML rollbacks.",
        "Data Management & Storage Optimization: Engineered in-flight log hashing algorithms to aggregate duplicate log bursts, reducing log storage license costs by 80%.",
        "Security Audit & Compliance: Enforcing Field Audit Trail (FAT), Event Monitoring integrations, and strict data privacy compliance standards across all deployment sandboxes.",
      ],
    },
    {
      title: "Data Management, SOQL Optimization & LDV Performance",
      subtitle: "Bulk API 2.0, Selective SOQL Indexing, Flow Automation & LDV Archiving",
      icon: "dashboard",
      executiveOutcome: "Bulk API 2.0 Performance • Sub-Second Query Speeds",
      businessImpact: "Scale your enterprise database to millions of records with sub-second SOQL performance, automated Bulk API data pipelines, and declarative Flow automation.",
      tags: ["Bulk API 2.0", "Selective SOQL", "LDV Optimization", "Flow Automation"],
      accentColor: "from-emerald-500 via-teal-600 to-cyan-500",
      badgeColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 dark:border-emerald-500/30",
      points: [
        "Data Management & Loading: Bulk API 2.0 asynchronous data loading, ETL staging object processing, and automated enterprise data migration pipelines.",
        "SOQL Indexing & LDV Performance: Optimizing high-volume SOQL/SOSL queries using custom indexed fields, skinny tables, and query plan optimization for Large Data Volumes (LDV).",
        "Declarative Flow Automation: Implementing high-performance Record-Triggered Flows and guided Screen Flows with real-time pre-commit data validation.",
        "DevOps & Data Archiving: Automated record archiving strategies, storage quota management, and sandbox data seeding via Gearset, Copado, and SFDX commands.",
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

          {/* Floating Background Pills */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
            {/* Top Left */}
            <div className="absolute top-[6%] left-[2%] sm:left-[6%] animate-float-slow opacity-30 dark:opacity-40">
              <div className="px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/30 dark:border-cyan-400/40 text-blue-700 dark:text-cyan-300 font-code text-xs font-bold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-400" />
                <span>Sales &amp; Service Cloud</span>
              </div>
            </div>

            {/* Top Right */}
            <div className="absolute top-[12%] right-[3%] sm:right-[7%] animate-float-reverse opacity-30 dark:opacity-40">
              <div className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-700 dark:text-cyan-300 font-code text-xs font-bold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>2GP Managed Packages</span>
              </div>
            </div>

            {/* Mid Left Upper */}
            <div className="absolute top-[32%] left-[1%] sm:left-[3%] animate-float-diagonal opacity-30 dark:opacity-40 hidden md:block">
              <div className="px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-700 dark:text-cyan-300 font-code text-xs font-bold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Custom Integrations &amp; REST APIs</span>
              </div>
            </div>

            {/* Mid Right Upper */}
            <div className="absolute top-[35%] right-[2%] sm:right-[4%] animate-float-slow opacity-30 dark:opacity-40 hidden md:block">
              <div className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-700 dark:text-cyan-300 font-code text-xs font-bold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>LWC (Lightning Web Components)</span>
              </div>
            </div>

            {/* Mid Left Lower */}
            <div className="absolute top-[55%] left-[1%] sm:left-[4%] animate-float-diagonal opacity-30 dark:opacity-40 hidden sm:block">
              <div className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 font-code text-xs font-bold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Zero Technical Debt</span>
              </div>
            </div>

            {/* Mid Right Lower */}
            <div className="absolute top-[58%] right-[2%] sm:right-[5%] animate-float-slow opacity-30 dark:opacity-40 hidden sm:block">
              <div className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-700 dark:text-blue-300 font-code text-xs font-bold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Experience Cloud Portals</span>
              </div>
            </div>

            {/* Lower Left */}
            <div className="absolute top-[78%] left-[2%] sm:left-[5%] animate-float-reverse opacity-30 dark:opacity-40 hidden md:block">
              <div className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-700 dark:text-cyan-300 font-code text-xs font-bold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Guided Screen Flows</span>
              </div>
            </div>

            {/* Lower Right */}
            <div className="absolute top-[80%] right-[3%] sm:right-[6%] animate-float-diagonal opacity-30 dark:opacity-40 hidden md:block">
              <div className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-700 dark:text-indigo-300 font-code text-xs font-bold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Sub-Second API Sync</span>
              </div>
            </div>
          </div>

          <div className="max-w-max-width mx-auto text-center space-y-4 sm:space-y-6 relative z-10 w-full">
            <AnimatedSection direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900/80 dark:bg-[#060A17]/80 border border-cyan-500/30 rounded-full mb-2 backdrop-blur-xl shadow-2xl">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-code text-cyan-300 font-extrabold uppercase tracking-widest">
                  ENTERPRISE SALESFORCE PARTNER
                </span>
                <span className="text-slate-500 text-xs">|</span>
                <span className="text-xs font-code text-slate-300 font-medium hidden sm:inline">
                  FULL-SPECTRUM ARCHITECTURE &amp; CONSULTING
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight leading-[1.08] sm:leading-[1.1] max-w-5xl mx-auto">
                Enterprise Salesforce Architecture.{" "}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent underline decoration-cyan-400/40 underline-offset-8">
                  Zero Overhead.
                </span>{" "}
                Pure Execution.
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto font-sans font-normal leading-relaxed">
                From Sales, Service &amp; Experience Cloud modernizations to custom LWC interfaces, high-volume integrations, and 2GP managed packages—we engineer end-to-end Salesforce solutions tailored for operational efficiency and rapid adoption.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 sm:pt-6">
                <button
                  id="hero-cta-architecture"
                  onClick={() => scrollToSection("architecture")}
                  className="w-full sm:w-auto bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 px-9 py-4 text-xs uppercase tracking-widest font-code font-extrabold rounded-xl flex items-center justify-center gap-3 hover:brightness-110 active:scale-95 transition-all glow-primary shadow-xl group border border-cyan-400/50"
                >
                  <span>EXPLORE CAPABILITIES</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
                <button
                  id="hero-cta-case-studies"
                  onClick={() => scrollToSection("case-studies")}
                  className="w-full sm:w-auto bg-slate-900/10 dark:bg-[#0B0F17]/80 text-slate-900 dark:text-slate-100 px-9 py-4 text-xs uppercase tracking-widest font-code font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800/80 transition-all border border-slate-300 dark:border-cyan-500/30 active:scale-95 shadow-md backdrop-blur-md"
                >
                  VIEW CASE STUDIES
                </button>
              </div>
            </AnimatedSection>

            {/* Futuristic Moving Infinite Marquee Ticker with Stat Cards */}
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
        </section>

        {/* Core Architecture & Technical Skill Sets Section (Bento Grid Matrix) */}
        <section id="architecture" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto scroll-mt-20 space-y-8">
          <AnimatedSection direction="up">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8 border-b border-slate-200 dark:border-white/10 pb-6">
                <div className="space-y-2 max-w-2xl">
                  <span className="text-xs font-code text-blue-600 dark:text-cyan-400 font-bold uppercase tracking-widest block">
                    CORE TECHNICAL SKILL SETS &amp; CAPABILITIES
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 leading-tight">
                    Mastery Across the Entire Salesforce Ecosystem.
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md">
                  From multi-cloud architecture and GitHub Actions / Copado CI/CD pipelines to high-volume REST integrations, custom LWC components, and bank-grade data security.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Interactive Bento Architecture Cockpit */}
          <div className="space-y-6">
            {/* Row 1: Cards 0, 1, 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
              {specDetails.slice(0, 3).map((card, idx) => (
                <AnimatedSection key={idx} direction="up" delay={0.1 + idx * 0.05} className="h-full">
                  <div className="bento-card p-6 sm:p-7 rounded-2xl group hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500 dark:hover:border-cyan-400/80 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 bg-blue-500/10 dark:bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all border border-blue-500/20 dark:border-cyan-500/30 shadow-inner">
                          <span className="material-symbols-outlined text-blue-600 dark:text-cyan-400 text-2xl">{card.icon}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-[10px] font-code font-extrabold border ${card.badgeColor}`}>
                          EXECUTIVE ROI
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-50 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                          {card.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-code font-bold text-blue-600 dark:text-cyan-400">
                          {card.executiveOutcome}
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed pt-1">
                          {card.businessImpact}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10">
                      <button
                        id={`arch-card-btn-${idx}`}
                        type="button"
                        onClick={() => setActiveSpecModal(activeSpecModal === idx ? null : idx)}
                        className="w-full text-sm font-code uppercase tracking-wider text-blue-600 dark:text-cyan-400 flex items-center justify-between px-4 py-3 rounded-lg bg-blue-50 dark:bg-cyan-950/30 hover:bg-blue-100 dark:hover:bg-cyan-900/40 border border-blue-200 dark:border-cyan-500/30 font-extrabold transition-all"
                      >
                        <span>{activeSpecModal === idx ? "Close Skills" : "Explore Skills"}</span>
                        <span className="material-symbols-outlined text-lg">
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
                <div className="bg-white dark:bg-[#060A17] border border-blue-300 dark:border-cyan-500/40 p-6 sm:p-8 rounded-2xl space-y-5 shadow-2xl transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-4 relative overflow-hidden">
                  <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-blue-600 dark:text-cyan-400 text-2xl">
                        {specDetails[activeSpecModal].icon}
                      </span>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                          {specDetails[activeSpecModal].title}
                        </h4>
                        <p className="text-sm font-code text-cyan-600 dark:text-cyan-300 font-bold">
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
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-cyan-500/30 text-sm font-code text-slate-800 dark:text-slate-200 flex items-center gap-3">
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
                        <li key={pIdx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
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
                    <div className="bento-card p-6 sm:p-7 rounded-2xl group hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500 dark:hover:border-cyan-400/80 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-11 h-11 bg-blue-500/10 dark:bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all border border-blue-500/20 dark:border-cyan-500/30 shadow-inner">
                            <span className="material-symbols-outlined text-blue-600 dark:text-cyan-400 text-2xl">{card.icon}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-[10px] font-code font-extrabold border ${card.badgeColor}`}>
                            EXECUTIVE ROI
                          </span>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-50 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                            {card.title}
                          </h3>
                          <p className="text-xs sm:text-sm font-code font-bold text-blue-600 dark:text-cyan-400">
                            {card.executiveOutcome}
                          </p>
                          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed pt-1">
                            {card.businessImpact}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10">
                        <button
                          id={`arch-card-btn-${idx}`}
                          type="button"
                          onClick={() => setActiveSpecModal(activeSpecModal === idx ? null : idx)}
                          className="w-full text-sm font-code uppercase tracking-wider text-blue-600 dark:text-cyan-400 flex items-center justify-between px-4 py-3 rounded-lg bg-blue-50 dark:bg-cyan-950/30 hover:bg-blue-100 dark:hover:bg-cyan-900/40 border border-blue-200 dark:border-cyan-500/30 font-extrabold transition-all"
                        >
                          <span>{activeSpecModal === idx ? "Close Skills" : "Explore Skills"}</span>
                          <span className="material-symbols-outlined text-lg">
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
                  ENTERPRISE CASE STUDIES
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

        {/* Operating Model / Ashray Method Section */}
        <section id="operating-model" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto space-y-8 scroll-mt-20">
          <AnimatedSection direction="up">
            <div className="space-y-3 text-left border-b border-slate-200 dark:border-white/10 pb-5">
              <span className="text-base font-code text-blue-600 dark:text-cyan-400 font-bold uppercase tracking-wider block">
                [THE ASHRAY METHOD]
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 leading-tight">
                Transparent Enterprise Operating Model &amp; Adaptive Framework
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-4xl leading-relaxed">
                Engagements structured around radical transparency, daily Git visibility, and zero operational friction.
              </p>
            </div>
          </AnimatedSection>

          {/* Top Adaptability Banner Card */}
          <AnimatedSection direction="up" delay={0.05}>
            <div className="p-8 sm:p-10 rounded-3xl bg-blue-50/80 dark:bg-[#0B1528] border border-blue-200 dark:border-cyan-500/30 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Side Quote */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300 border border-blue-300 dark:border-cyan-500/30 text-base font-code font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
                  <span>PLUG-AND-PLAY ADAPTIVE FRAMEWORK</span>
                </div>
                <blockquote className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 leading-snug">
                  &ldquo;While we bring rigorous engineering standards, our framework is fully adaptable to your team&rsquo;s existing workflows and toolchains.&rdquo;
                </blockquote>
              </div>

              {/* Right Side Seamless Toolchain Integration Grid */}
              <div className="lg:col-span-5 space-y-3">
                <span className="text-base font-code text-slate-600 dark:text-slate-400 font-extrabold uppercase tracking-wider block">
                  SEAMLESS TOOLCHAIN INTEGRATION:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <div className="px-4 py-2.5 rounded-xl bg-white dark:bg-[#060A17] border border-slate-200 dark:border-cyan-500/30 shadow-sm text-base font-code font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <span className="material-symbols-outlined text-xl text-blue-600 dark:text-cyan-400">code</span>
                    <span>Git / GitHub / GitLab</span>
                  </div>
                  <div className="px-4 py-2.5 rounded-xl bg-white dark:bg-[#060A17] border border-slate-200 dark:border-cyan-500/30 shadow-sm text-base font-code font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <span className="material-symbols-outlined text-xl text-blue-600 dark:text-cyan-400">task_alt</span>
                    <span>Jira / Azure DevOps</span>
                  </div>
                  <div className="px-4 py-2.5 rounded-xl bg-white dark:bg-[#060A17] border border-slate-200 dark:border-cyan-500/30 shadow-sm text-base font-code font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <span className="material-symbols-outlined text-xl text-blue-600 dark:text-cyan-400">terminal</span>
                    <span>Salesforce CLI / sfdx</span>
                  </div>
                  <div className="px-4 py-2.5 rounded-xl bg-white dark:bg-[#060A17] border border-slate-200 dark:border-cyan-500/30 shadow-sm text-base font-code font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <span className="material-symbols-outlined text-xl text-blue-600 dark:text-cyan-400">published_with_changes</span>
                    <span>CI/CD &amp; Scratch Orgs</span>
                  </div>
                  <div className="px-4 py-2.5 rounded-xl bg-white dark:bg-[#060A17] border border-slate-200 dark:border-cyan-500/30 shadow-sm text-base font-code font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <span className="material-symbols-outlined text-xl text-blue-600 dark:text-cyan-400">forum</span>
                    <span>Slack / Teams Sync</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Bottom 4 Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Step 01 */}
            <AnimatedSection direction="up" delay={0.1} className="h-full">
              <div className="bento-card p-6 sm:p-7 rounded-3xl group hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500 dark:hover:border-cyan-400/80 transition-all duration-300 relative overflow-hidden shadow-xl h-full flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-cyan-500/20 text-blue-600 dark:text-cyan-400 font-bold flex items-center justify-center border border-blue-300 dark:border-cyan-500/30 shadow-inner">
                      <span className="material-symbols-outlined text-2xl">query_stats</span>
                    </span>
                    <span className="text-3xl font-code font-extrabold text-blue-600 dark:text-cyan-400 opacity-90">01</span>
                  </div>
                  <div className="space-y-2.5">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                      Transparent Discovery &amp; Scoping Alignment
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                      Iterative architectural audits and scoping workshops mapping technical requirements directly to clear milestones.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-auto">
                  <span className="px-3.5 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-cyan-300 text-base font-code font-bold border border-blue-200 dark:border-cyan-500/30 inline-block">
                    [SCOPING ALIGNMENT]
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 02 */}
            <AnimatedSection direction="up" delay={0.15} className="h-full">
              <div className="bento-card p-6 sm:p-7 rounded-3xl group hover:-translate-y-2 hover:shadow-2xl hover:border-cyan-500 dark:hover:border-cyan-300/80 transition-all duration-300 relative overflow-hidden shadow-xl h-full flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 font-bold flex items-center justify-center border border-cyan-300 dark:border-cyan-500/30 shadow-inner">
                      <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                    </span>
                    <span className="text-3xl font-code font-extrabold text-cyan-600 dark:text-cyan-300 opacity-90">02</span>
                  </div>
                  <div className="space-y-2.5">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                      Zero-Downtime Deployment &amp; Testing
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                      Automated CI/CD pipelines, scratch org validation, and 100% test coverage ensuring zero business interruption.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-auto">
                  <span className="px-3.5 py-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 text-base font-code font-bold border border-cyan-200 dark:border-cyan-500/30 inline-block">
                    [100% TEST COVERAGE]
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 03 */}
            <AnimatedSection direction="up" delay={0.2} className="h-full">
              <div className="bento-card p-6 sm:p-7 rounded-3xl group hover:-translate-y-2 hover:shadow-2xl hover:border-purple-500 dark:hover:border-purple-400/80 transition-all duration-300 relative overflow-hidden shadow-xl h-full flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 font-bold flex items-center justify-center border border-purple-300 dark:border-purple-500/30 shadow-inner">
                      <span className="material-symbols-outlined text-2xl">code</span>
                    </span>
                    <span className="text-3xl font-code font-extrabold text-purple-600 dark:text-purple-300 opacity-90">03</span>
                  </div>
                  <div className="space-y-2.5">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors leading-snug">
                      Daily Git Transparency &amp; Code Audits
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                      Full daily visibility into pull requests, clean commit histories, and peer-reviewed Apex/LWC code architectures.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-auto">
                  <span className="px-3.5 py-1.5 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 text-base font-code font-bold border border-purple-200 dark:border-purple-500/30 inline-block">
                    [DAILY PR VISIBILITY]
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 04 */}
            <AnimatedSection direction="up" delay={0.25} className="h-full">
              <div className="bento-card p-6 sm:p-7 rounded-3xl group hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500 dark:hover:border-emerald-400/80 transition-all duration-300 relative overflow-hidden shadow-xl h-full flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 font-bold flex items-center justify-center border border-emerald-300 dark:border-emerald-500/30 shadow-inner">
                      <span className="material-symbols-outlined text-2xl">verified_user</span>
                    </span>
                    <span className="text-3xl font-code font-extrabold text-emerald-600 dark:text-emerald-300 opacity-90">04</span>
                  </div>
                  <div className="space-y-2.5">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors leading-snug">
                      Long-Term Governance &amp; Handoff
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                      Comprehensive technical documentation, team enablement sessions, and post-deployment monitoring for ongoing reliability.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-auto">
                  <span className="px-3.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-base font-code font-bold border border-emerald-200 dark:border-emerald-500/30 inline-block">
                    [GOVERNANCE HANDOFF]
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}