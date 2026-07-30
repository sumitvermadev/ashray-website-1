import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudiesData } from "@/lib/caseStudiesData";

interface CaseStudyPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    id: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const resolvedParams = await params;
  const study = caseStudiesData.find(
    (s) => s.slug === resolvedParams.id || s.id === resolvedParams.id
  );
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Technical Architecture Case Study`,
    description: study.executiveSolution,
  };
}

export default async function DedicatedCaseStudyPage({ params }: CaseStudyPageProps) {
  const resolvedParams = await params;
  const study = caseStudiesData.find(
    (s) => s.slug === resolvedParams.id || s.id === resolvedParams.id
  );

  if (!study) {
    notFound();
  }

  const isSanctions = study.id === "cs-sanctions-screening";
  const isTravel = study.id === "cs-travel-ops";
  const isLogistics = study.id === "cs-logistics";

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-background text-slate-900 dark:text-on-background font-sans transition-colors duration-300">
      <Header />

      <article className="pt-28 pb-20 px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto space-y-10">
        {/* Top Breadcrumb Navigation */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-code font-bold text-blue-600 dark:text-cyan-400 hover:underline"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Back to All Case Studies</span>
          </Link>
          <span className="text-xs font-code text-slate-500 dark:text-slate-400">
            TECHNICAL ARCHITECTURE PERMALINK SPECIFICATION
          </span>
        </div>

        {/* Title Header & Badge Bar */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-300 border border-blue-500/20 dark:border-cyan-500/30 text-xs font-code font-bold">
              [{study.badge}]
            </span>
            {study.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-code font-medium"
              >
                [{tag}]
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-50 leading-tight">
            {study.title}
          </h1>
        </div>

        {/* Executive Summary Narrative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Executive Challenge */}
          <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/30 space-y-3 shadow-sm">
            <h2 className="text-xs uppercase tracking-widest font-code text-amber-700 dark:text-amber-400 font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-base">warning</span>
              <span>BUSINESS CHALLENGE &amp; LEAKAGE RISKS</span>
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              {study.executiveChallenge}
            </p>
          </div>

          {/* Executive Solution */}
          <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-500/30 space-y-3 shadow-sm">
            <h2 className="text-xs uppercase tracking-widest font-code text-blue-700 dark:text-cyan-400 font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-base">verified</span>
              <span>SOLUTION IMPLEMENTED</span>
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              {study.executiveSolution}
            </p>
          </div>
        </div>

        {/* Sequential Multi-Entity Data Retrieval Flow (If Applicable) */}
        {study.entitySyncChain && (
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-blue-500/30 space-y-3 shadow-md">
            <span className="text-xs font-code text-blue-700 dark:text-cyan-400 font-bold uppercase tracking-wider block">
              MULTI-ENTITY SEQUENTIAL DATA RETRIEVAL FLOW:
            </span>
            <div className="flex flex-wrap items-center gap-3 font-code text-xs">
              {study.entitySyncChain.map((step, sIdx) => (
                <div key={sIdx} className="flex items-center gap-3">
                  <span className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#0F172A] border border-slate-300 dark:border-cyan-500/40 text-slate-800 dark:text-cyan-300 font-bold shadow-inner flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
                    <span>{step}</span>
                  </span>
                  {sIdx < study.entitySyncChain!.length - 1 && (
                    <span className="material-symbols-outlined text-sm text-blue-600 dark:text-cyan-400">
                      arrow_forward
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ROI Impact Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-white/10 shadow-md">
          {study.metrics.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-primary">
                {metric.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-outline font-code font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* DEEP TECHNICAL SPECIFICATION & ARCHITECTURE DIAGRAM */}
        {study.techPalette && (
          <section className="space-y-8 pt-6">
            <div className="space-y-2 border-b border-slate-200 dark:border-white/10 pb-4">
              <span className="text-xs font-code text-blue-600 dark:text-cyan-400 font-bold uppercase tracking-widest block">
                {study.techPalette.subtitle}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600 dark:text-cyan-400 text-3xl">schema</span>
                <span>{study.techPalette.title}</span>
              </h2>
            </div>

            {/* DYNAMIC SYSTEM ARCHITECTURE CANVAS BASED ON CASE STUDY TYPE */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#080E1B] border border-slate-200 dark:border-cyan-500/30 space-y-6 shadow-2xl">
              {isSanctions ? (
                /* SANCTIONS SCREENING SPECIFIC ARCHITECTURE PIPELINE */
                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-300 dark:border-cyan-500/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-bold font-code text-sm">
                        <span className="material-symbols-outlined text-xl">devices</span>
                        <span>1. UX &amp; DISPOSITION LAYER (LIGHTNING COMPONENTS)</span>
                      </div>
                      <span className="text-[10px] font-code bg-blue-500/10 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300 px-2.5 py-0.5 rounded font-bold border border-blue-300 dark:border-cyan-500/30">
                        FRONTEND WORKSPACE
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs font-code">
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 font-semibold shadow-inner">[One-Click Verification]</div>
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 font-semibold shadow-inner">[Officer Disposition Workspace]</div>
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 font-semibold shadow-inner">[Compliance Audit Logs]</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center font-code text-xs">
                    <div className="p-3 rounded-xl bg-blue-500/10 dark:bg-blue-950/40 border border-blue-500/30 text-blue-700 dark:text-cyan-300 font-bold flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">south</span>
                      <span>SYNC CALLOUT (Identity Data Payload)</span>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">north</span>
                      <span>ASYNC TELEMETRY (Independent Log Stream)</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-300 dark:border-blue-500/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold font-code text-sm">
                        <span className="material-symbols-outlined text-xl">security</span>
                        <span>2. CORE DOMAIN, CRYPTO &amp; NAMESPACE RESOLUTION ENGINE</span>
                      </div>
                      <span className="text-[10px] font-code bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded font-bold border border-blue-300 dark:border-blue-500/30">
                        APEX DOMAIN CORE
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-code">
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/20 text-slate-800 dark:text-cyan-300 font-semibold flex items-center justify-between">
                        <span>Runtime Namespace Resolver (pkg__)</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        <span>Polymorphic Schema Adapter</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/20 text-slate-800 dark:text-cyan-300 font-semibold flex items-center justify-between">
                        <span>HMAC-SHA256 Signature Generator</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        <span>Outbound HTTP Screening Callout</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-300 dark:border-emerald-500/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold font-code text-sm">
                        <span className="material-symbols-outlined text-xl">dataset</span>
                        <span>3. EVENT-DRIVEN TELEMETRY &amp; IN-FLIGHT DEDUPLICATION</span>
                      </div>
                      <span className="text-[10px] font-code bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-2.5 py-0.5 rounded font-bold border border-emerald-300 dark:border-emerald-500/30">
                        TELEMETRY BUS
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-code">
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-emerald-500/20 text-slate-800 dark:text-emerald-300 font-semibold flex items-center justify-between">
                        <span>Platform Event Bus (Pub-Sub)</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        <span>In-Flight Hashing &amp; Aggregation Trigger</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-emerald-500/20 text-slate-800 dark:text-emerald-300 font-semibold text-center">
                        Consolidated Data Persistence (Persists even during DML Rollback)
                      </div>
                    </div>
                  </div>
                </div>
              ) : isTravel ? (
                /* TRAVEL OPERATIONS SPECIFIC ARCHITECTURE PIPELINE */
                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-300 dark:border-cyan-500/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-bold font-code text-sm">
                        <span className="material-symbols-outlined text-xl">flight_takeoff</span>
                        <span>1. EXTERNAL RESERVATION PLATFORMS (GLOBAL INVENTORIES)</span>
                      </div>
                      <span className="text-[10px] font-code bg-blue-500/10 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300 px-2.5 py-0.5 rounded font-bold border border-blue-300 dark:border-cyan-500/30">
                        GLOBAL INVENTORY
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs font-code">
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 font-semibold shadow-inner">[Flights &amp; Itineraries]</div>
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 font-semibold shadow-inner">[Hotels &amp; Cruise Inventory]</div>
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 font-semibold shadow-inner">[Tours &amp; Event Bookings]</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center font-code text-xs">
                    <div className="p-3 rounded-xl bg-blue-500/10 dark:bg-blue-950/40 border border-blue-500/30 text-blue-700 dark:text-cyan-300 font-bold flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">lock</span>
                      <span>SECURE NAMED CREDENTIALS (TLS/HTTPS)</span>
                    </div>
                    <div className="p-3 rounded-xl bg-purple-500/10 dark:bg-purple-950/40 border border-purple-500/30 text-purple-700 dark:text-purple-300 font-bold flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">sync</span>
                      <span>GOVERNED MICRO-BATCHING (&lt; 2 Mins Latency)</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-300 dark:border-blue-500/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold font-code text-sm">
                        <span className="material-symbols-outlined text-xl">autorenew</span>
                        <span>2. NATIVE APEX SYNCHRONIZATION &amp; SELF-HEAL ENGINE</span>
                      </div>
                      <span className="text-[10px] font-code bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded font-bold border border-blue-300 dark:border-blue-500/30">
                        SELF-HEALING BATCH CORE
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-code">
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/20 text-slate-800 dark:text-cyan-300 font-semibold flex items-center justify-between">
                        <span>Micro-Batch XML Parser (DOM)</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        <span>Polymorphic Record Type Adapter</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/20 text-slate-800 dark:text-cyan-300 font-semibold flex items-center justify-between">
                        <span>Self-Managing Batch Finish Lifecycle</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        <span>Bulk Partial DML (allOrNone = false)</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-300 dark:border-emerald-500/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold font-code text-sm">
                        <span className="material-symbols-outlined text-xl">account_balance</span>
                        <span>3. REAL-TIME FINANCE LEDGERS &amp; DECOUPLED LOGGING</span>
                      </div>
                      <span className="text-[10px] font-code bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-2.5 py-0.5 rounded font-bold border border-emerald-300 dark:border-emerald-500/30">
                        FINANCIAL LEDGER CORE
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-code">
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-emerald-500/20 text-slate-800 dark:text-emerald-300 font-semibold flex items-center justify-between">
                        <span>Platform Event Bus Logging (Pub-Sub)</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        <span>Decoupled Rollback Error Capture</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-emerald-500/20 text-slate-800 dark:text-emerald-300 font-semibold text-center">
                        Automated Multi-Currency Ledger Alignment &amp; Commission Auditing
                      </div>
                    </div>
                  </div>
                </div>
              ) : isLogistics ? (
                /* B2B LOGISTICS CSV INGESTION & VALIDATION ENGINE ARCHITECTURE PIPELINE */
                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-300 dark:border-cyan-500/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-bold font-code text-sm">
                        <span className="material-symbols-outlined text-xl">upload_file</span>
                        <span>1. EXPERIENCE CLOUD PORTAL &amp; CSV FILE INGESTION</span>
                      </div>
                      <span className="text-[10px] font-code bg-blue-500/10 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300 px-2.5 py-0.5 rounded font-bold border border-blue-300 dark:border-cyan-500/30">
                        PORTAL INGESTION
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs font-code">
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 font-semibold shadow-inner">[Vendor Manifest Upload]</div>
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 font-semibold shadow-inner">[Dynamic Template Selection]</div>
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 font-semibold shadow-inner">[Raw Line Buffer Ingestion]</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center font-code text-xs">
                    <div className="p-3 rounded-xl bg-amber-500/10 dark:bg-amber-950/40 border border-amber-500/30 text-amber-700 dark:text-amber-300 font-bold flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">verified_user</span>
                      <span>FIRST-LAYER VALIDATION ENGINE (Type &amp; Syntax Pre-Check)</span>
                    </div>
                    <div className="p-3 rounded-xl bg-purple-500/10 dark:bg-purple-950/40 border border-purple-500/30 text-purple-700 dark:text-purple-300 font-bold flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">memory</span>
                      <span>ASYNC QUEUEABLE CHUNKING (10x Ingestion Speed)</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-300 dark:border-blue-500/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold font-code text-sm">
                        <span className="material-symbols-outlined text-xl">settings_suggest</span>
                        <span>2. METADATA-DRIVEN MAPPING &amp; DATA MANIPULATION ENGINE</span>
                      </div>
                      <span className="text-[10px] font-code bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded font-bold border border-blue-300 dark:border-blue-500/30">
                        CONFIGURABLE ENGINE
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-code">
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/20 text-slate-800 dark:text-cyan-300 font-semibold flex items-center justify-between">
                        <span>Custom Metadata Field Mapper (Zero-Code)</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        <span>Data Manipulation Engine</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/20 text-slate-800 dark:text-cyan-300 font-semibold flex items-center justify-between">
                        <span>Row-Level Error Staging Log</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        <span>Bulk Partial DML (allOrNone = false)</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-300 dark:border-emerald-500/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold font-code text-sm">
                        <span className="material-symbols-outlined text-xl">bolt</span>
                        <span>3. EVENT-DRIVEN AUTOMATION &amp; WORKFLOW EXECUTION</span>
                      </div>
                      <span className="text-[10px] font-code bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-2.5 py-0.5 rounded font-bold border border-emerald-300 dark:border-emerald-500/30">
                        POST-INGESTION FLOWS
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-code">
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-emerald-500/20 text-slate-800 dark:text-emerald-300 font-semibold flex items-center justify-between">
                        <span>Post-Validation Trigger Engine</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        <span>Record-Triggered Flows</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-emerald-500/20 text-slate-800 dark:text-emerald-300 font-semibold text-center">
                        Real-Time Manifest Tracking &amp; Carrier Dispatch Automation
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* USAGE BILLING SPECIFIC ARCHITECTURE PIPELINE */
                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-cyan-500/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-bold font-code text-sm">
                        <span className="material-symbols-outlined text-xl">cloud_sync</span>
                        <span>1. CLIENT SALESFORCE ORG (2GP MANAGED PACKAGE LAYER)</span>
                      </div>
                      <span className="text-[10px] font-code bg-blue-500/10 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300 px-2.5 py-0.5 rounded font-bold border border-blue-300 dark:border-cyan-500/30">
                        NATIVE PACKAGE CORE
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs font-code">
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 font-semibold shadow-inner">[Accounts &amp; Customer Orgs]</div>
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 font-semibold shadow-inner">[Opportunity Closed-Won]</div>
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 font-semibold shadow-inner">[Prepaid Credit Wallets]</div>
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 font-semibold shadow-inner">[Flow DTO Invocables]</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/40 space-y-3 text-xs font-code">
                      <div className="flex items-center justify-between text-purple-700 dark:text-purple-300 font-bold border-b border-purple-200 dark:border-purple-500/20 pb-2">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base">published_with_changes</span>
                          <span>INITIAL BULK DATA SYNC</span>
                        </span>
                        <span className="text-[9px] bg-purple-500/10 dark:bg-purple-500/20 px-2 py-0.5 rounded">ENTITY CALLOUTS</span>
                      </div>
                      <div className="space-y-2 text-slate-700 dark:text-slate-300 text-[11px]">
                        <div className="p-2.5 rounded bg-white dark:bg-slate-900/80 border border-purple-200 dark:border-purple-500/20 flex items-center justify-between">
                          <span>Database.Batchable + Database.AllowsCallouts</span>
                          <span className="text-purple-600 dark:text-purple-400 font-bold">01. Batch</span>
                        </div>
                        <div className="p-2.5 rounded bg-white dark:bg-slate-900/80 border border-purple-200 dark:border-purple-500/20 flex items-center justify-between">
                          <span>GET Customers ➔ GET Plans Callout Chain</span>
                          <span className="text-purple-600 dark:text-purple-400 font-bold">02. Entities</span>
                        </div>
                        <div className="p-2.5 rounded bg-white dark:bg-slate-900/80 border border-purple-200 dark:border-purple-500/20 flex items-center justify-between">
                          <span>GET Subscriptions ➔ GET Invoices</span>
                          <span className="text-purple-600 dark:text-purple-400 font-bold">03. Invoices</span>
                        </div>
                        <div className="p-2.5 rounded bg-white dark:bg-slate-900/80 border border-purple-200 dark:border-purple-500/20 flex items-center justify-between">
                          <span>Initial Account Seeding &amp; Balance Sync</span>
                          <span className="text-purple-600 dark:text-purple-400 font-bold">04. Seed</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-500/40 space-y-3 text-xs font-code">
                      <div className="flex items-center justify-between text-blue-700 dark:text-cyan-300 font-bold border-b border-cyan-200 dark:border-cyan-500/20 pb-2">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base">south</span>
                          <span>OUTBOUND REAL-TIME SYNC</span>
                        </span>
                        <span className="text-[9px] bg-cyan-500/10 dark:bg-cyan-500/20 px-2 py-0.5 rounded">REAL-TIME</span>
                      </div>
                      <div className="space-y-2 text-slate-700 dark:text-slate-300 text-[11px]">
                        <div className="p-2.5 rounded bg-white dark:bg-slate-900/80 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-between">
                          <span>Opportunity Closed-Won Event</span>
                          <span className="text-blue-600 dark:text-cyan-400 font-bold">01. Event</span>
                        </div>
                        <div className="p-2.5 rounded bg-white dark:bg-slate-900/80 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-between">
                          <span>Custom Metadata Reflection Engine</span>
                          <span className="text-blue-600 dark:text-cyan-400 font-bold">02. Reflection</span>
                        </div>
                        <div className="p-2.5 rounded bg-white dark:bg-slate-900/80 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-between">
                          <span>Rate Card &amp; Subscription Payload DTO</span>
                          <span className="text-blue-600 dark:text-cyan-400 font-bold">03. Payload</span>
                        </div>
                        <div className="p-2.5 rounded bg-white dark:bg-slate-900/80 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-between">
                          <span>Instant Customer Provisioning API</span>
                          <span className="text-blue-600 dark:text-cyan-400 font-bold">04. Provision</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/40 space-y-3 text-xs font-code">
                      <div className="flex items-center justify-between text-emerald-700 dark:text-emerald-300 font-bold border-b border-emerald-200 dark:border-emerald-500/20 pb-2">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base">north</span>
                          <span>INBOUND ASYNC WEBHOOKS</span>
                        </span>
                        <span className="text-[9px] bg-emerald-500/10 dark:bg-emerald-500/20 px-2 py-0.5 rounded">WEBHOOK STREAM</span>
                      </div>
                      <div className="space-y-2 text-slate-700 dark:text-slate-300 text-[11px]">
                        <div className="p-2.5 rounded bg-white dark:bg-slate-900/80 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-between">
                          <span>High-Volume Inbound Webhook Surges</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">01. Webhook</span>
                        </div>
                        <div className="p-2.5 rounded bg-white dark:bg-slate-900/80 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-between">
                          <span>Limit-Safe Staging Queue Buffer</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">02. Staging</span>
                        </div>
                        <div className="p-2.5 rounded bg-white dark:bg-slate-900/80 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-between">
                          <span>Platform Event Logging Channel</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">03. Events</span>
                        </div>
                        <div className="p-2.5 rounded bg-white dark:bg-slate-900/80 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-between">
                          <span>Automated Credit Top-Ups &amp; Invoices</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">04. Sync</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-blue-500/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold font-code text-sm">
                        <span className="material-symbols-outlined text-xl">dataset</span>
                        <span>2. TWO-TIER CONCURRENCY &amp; BUFFER LAYER</span>
                      </div>
                      <span className="text-[10px] font-code bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded font-bold border border-blue-300 dark:border-blue-500/30">
                        GOVERNOR LIMIT MITIGATION
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs font-code">
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/20 text-blue-700 dark:text-cyan-300 font-semibold">[Inbound REST Webhook Endpoint]</div>
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/20 text-blue-700 dark:text-cyan-300 font-semibold">[Limit-Safe Staging Queue]</div>
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/20 text-blue-700 dark:text-cyan-300 font-semibold">[Platform Events Channel]</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* SOLVED ENGINEERING PATTERNS GRID */}
            <div className="space-y-4 pt-4">
              <h3 className="text-sm font-code uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-blue-600 dark:text-cyan-400">psychology</span>
                <span>SOLVED ENGINEERING &amp; GOVERNOR LIMIT PATTERNS</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {study.techPalette.patterns.map((pattern) => (
                  <div
                    key={pattern.id}
                    className="p-5 rounded-xl bg-white dark:bg-[#090E1A] border border-slate-200 dark:border-white/10 space-y-3 shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-lg bg-blue-500/10 dark:bg-cyan-500/20 text-blue-600 dark:text-cyan-300 text-sm font-bold flex items-center justify-center border border-blue-300 dark:border-cyan-500/40">
                        <span className="material-symbols-outlined text-xl">{pattern.icon}</span>
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 font-code leading-tight">
                        {pattern.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pattern.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <Footer />
    </main>
  );
}
