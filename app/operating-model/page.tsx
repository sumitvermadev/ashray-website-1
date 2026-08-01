import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Operating Model & Delivery Framework | Ashray Technologies",
  description: "Learn how Ashray Technologies delivers enterprise Salesforce modernization with strict SLAs and compliance guardrails.",
};

export default function OperatingModelPage() {
  const steps = [
    {
      step: "01",
      title: "Scoping & Architectural Discovery",
      desc: "We perform a comprehensive audit of your custom code, flow velocity, governor limits, and security vulnerabilities.",
    },
    {
      step: "02",
      title: "Compliance & Security Blueprinting",
      desc: "Mapping data flows to HIPAA, SOC2, and FINRA standards with Shield Platform Encryption and event monitoring.",
    },
    {
      step: "03",
      title: "Agile Sprint Execution & Testing",
      desc: "Bi-weekly production deployments backed by automated unit test suites with >90% test coverage and CI/CD pipelines.",
    },
    {
      step: "04",
      title: "Post-Deploy Guarantee & SLA Support",
      desc: "Dedicated senior architects on-call for sub-hour response SLAs, ongoing performance tuning, and compliance audits.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white font-sans transition-colors duration-300">
      <Header />

      <section className="pt-32 pb-8 px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto">
        <div className="space-y-3 text-center max-w-4xl mx-auto">
          <span className="text-base font-code text-blue-600 dark:text-cyan-400 font-bold uppercase tracking-wider block">
            [THE ASHRAY METHOD]
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
            Transparent Enterprise Operating Model &amp; Adaptive Framework
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Engagements structured around radical transparency, daily Git visibility, and zero operational friction.
          </p>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto space-y-10">
        {/* Top Adaptability Banner Card */}
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

        {/* Bottom 4 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <div className="bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-white/10 p-7 rounded-3xl space-y-6 shadow-xl relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500 dark:hover:border-cyan-400/80 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-cyan-500/20 text-blue-600 dark:text-cyan-400 font-bold flex items-center justify-center border border-blue-300 dark:border-cyan-500/30 shadow-inner">
                  <span className="material-symbols-outlined text-2xl">query_stats</span>
                </span>
                <span className="text-3xl font-code font-extrabold text-blue-600 dark:text-cyan-400">01</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                Transparent Discovery &amp; Scoping Alignment
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Iterative architectural audits and scoping workshops mapping technical requirements directly to clear milestones.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-auto">
              <span className="px-3.5 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-cyan-300 text-base font-code font-bold border border-blue-200 dark:border-cyan-500/30 inline-block">
                [SCOPING ALIGNMENT]
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-white/10 p-7 rounded-3xl space-y-6 shadow-xl relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:border-cyan-500 dark:hover:border-cyan-300/80 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 font-bold flex items-center justify-center border border-cyan-300 dark:border-cyan-500/30 shadow-inner">
                  <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                </span>
                <span className="text-3xl font-code font-extrabold text-cyan-600 dark:text-cyan-300">02</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                Zero-Downtime Deployment &amp; Testing
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Automated CI/CD pipelines, scratch org validation, and 100% test coverage ensuring zero business interruption.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-auto">
              <span className="px-3.5 py-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 text-base font-code font-bold border border-cyan-200 dark:border-cyan-500/30 inline-block">
                [100% TEST COVERAGE]
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-white/10 p-7 rounded-3xl space-y-6 shadow-xl relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:border-purple-500 dark:hover:border-purple-400/80 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 font-bold flex items-center justify-center border border-purple-300 dark:border-purple-500/30 shadow-inner">
                  <span className="material-symbols-outlined text-2xl">code</span>
                </span>
                <span className="text-3xl font-code font-extrabold text-purple-600 dark:text-purple-300">03</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                Daily Git Transparency &amp; Code Audits
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Full daily visibility into pull requests, clean commit histories, and peer-reviewed Apex/LWC code architectures.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-auto">
              <span className="px-3.5 py-1.5 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 text-base font-code font-bold border border-purple-200 dark:border-purple-500/30 inline-block">
                [DAILY PR VISIBILITY]
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-white/10 p-7 rounded-3xl space-y-6 shadow-xl relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500 dark:hover:border-emerald-400/80 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 font-bold flex items-center justify-center border border-emerald-300 dark:border-emerald-500/30 shadow-inner">
                  <span className="material-symbols-outlined text-2xl">verified_user</span>
                </span>
                <span className="text-3xl font-code font-extrabold text-emerald-600 dark:text-emerald-300">04</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                Long-Term Governance &amp; Handoff
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Comprehensive technical documentation, team enablement sessions, and post-deployment monitoring for ongoing reliability.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-auto">
              <span className="px-3.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-base font-code font-bold border border-emerald-200 dark:border-emerald-500/30 inline-block">
                [GOVERNANCE HANDOFF]
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/scope-project"
            className="inline-flex items-center gap-2 bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-code font-extrabold text-base uppercase tracking-wider py-4 px-8 rounded-xl hover:brightness-110 transition-all glow-primary shadow-lg border border-cyan-400/50"
          >
            <span>Start Your Project Scoping</span>
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
