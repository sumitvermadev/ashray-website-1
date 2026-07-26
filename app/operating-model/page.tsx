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
    <main className="min-h-screen bg-slate-50 dark:bg-background text-slate-900 dark:text-on-background selection:bg-blue-500 selection:text-white font-sans transition-colors duration-300">
      <Header />

      <section className="pt-32 pb-12 px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-code text-blue-600 dark:text-cyan-400 font-bold block">
            THE ASHRAY METHODOLOGY
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
            Enterprise Operating Model & Execution Framework
          </h1>
          <p className="text-slate-600 dark:text-on-surface-variant text-base sm:text-lg leading-relaxed">
            Engineered for high-stakes enterprise environments where security, speed, and zero downtime are mandatory.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-white/10 p-8 rounded-2xl space-y-4 shadow-xl etched-border relative overflow-hidden"
            >
              <div className="text-3xl font-code font-bold text-blue-600 dark:text-cyan-400">
                {s.step}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                {s.title}
              </h3>
              <p className="text-slate-600 dark:text-on-surface-variant text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/scope-project"
            className="inline-flex items-center gap-2 bg-blue-600 dark:bg-primary text-white dark:text-on-primary font-code font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-xl hover:brightness-110 transition-all glow-primary shadow-lg"
          >
            <span>Start Your Project Scoping</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
