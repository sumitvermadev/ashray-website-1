import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Services & Architecture | Ashray Technologies",
  description: "Enterprise Salesforce Core engineering, Agentforce AI integration, and multi-cloud compliance architecture.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Salesforce Core Modernization",
      tag: "CORE INFRASTRUCTURE",
      icon: "cloud_sync",
      description: "Custom Apex, LWC, and Flow refactoring to streamline complex Sales, Service, and Experience Cloud orgs with zero tech debt.",
      features: [
        "Scalable Apex domain & selector layer patterns",
        "Lightning Web Component performance tuning",
        "Legacy Workflow/Process Builder migration to Reactive Flows",
        "Automated unit test suites with >90% coverage",
      ],
    },
    {
      title: "Agentforce & Autonomous AI",
      tag: "AI ARCHITECTURE",
      icon: "smart_toy",
      description: "Deploy enterprise-grade Agentforce autonomous agents trained on your proprietary CRM data with strict safety guardrails.",
      features: [
        "Data Cloud vector database grounding",
        "Real-time customer action triggers & flows",
        "Human-in-the-loop escalation workflows",
        "SOC2 & GDPR compliant AI prompt filtering",
      ],
    },
    {
      title: "Compliance & Security Integration",
      tag: "ENTERPRISE SECURITY",
      icon: "verified_user",
      description: "Financial, healthcare, and federal compliance integration with Shield encryption, event monitoring, and audit trails.",
      features: [
        "HIPAA, FINRA, and SOC2 Type II compliance controls",
        "Salesforce Shield Platform Encryption setup",
        "Real-Time Event Monitoring & Threat Detection",
        "Field-Level Security & Role Hierarchy audit",
      ],
    },
    {
      title: "Multi-Cloud Integration & APIs",
      tag: "MIDDLEWARE & DEVOPS",
      icon: "hub",
      description: "MuleSoft, AWS, Snowflake, and custom REST/GraphQL middleware pipeline for sub-second bi-directional data sync.",
      features: [
        "MuleSoft & Custom Middleware integrations",
        "AWS EventBridge & Pub/Sub real-time streaming",
        "Snowflake Data Cloud zero-copy data sharing",
        "CI/CD Git pipelines with Copado & GitHub Actions",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-background text-slate-900 dark:text-on-background selection:bg-blue-500 selection:text-white font-sans transition-colors duration-300">
      <Header />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto relative">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-code text-blue-600 dark:text-cyan-400 font-bold block">
            SOLUTIONS & CAPABILITIES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
            Enterprise Salesforce Architecture & Compliance Integration
          </h1>
          <p className="text-slate-600 dark:text-on-surface-variant text-base sm:text-lg leading-relaxed">
            From legacy org cleanup to autonomous Agentforce deployments and zero-latency multi-cloud pipelines.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-white/10 p-8 rounded-2xl space-y-6 shadow-xl relative overflow-hidden etched-border hover:border-blue-500/50 transition-all"
            >
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-primary/20 text-blue-600 dark:text-primary flex items-center justify-center border border-blue-500/20">
                  <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                </div>
                <span className="text-[10px] uppercase font-code tracking-widest bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-cyan-400 px-3 py-1 rounded border border-slate-200 dark:border-white/10 font-bold">
                  {service.tag}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-on-surface-variant text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2 border-t border-slate-100 dark:border-white/5 pt-4">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-xs font-code text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-cyan-600 dark:text-cyan-400 text-sm">check_circle</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-blue-600 dark:bg-primary/10 border border-blue-600/30 p-8 rounded-2xl text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Ready to Modernize Your Salesforce Architecture?
          </h3>
          <p className="text-slate-600 dark:text-on-surface-variant text-sm">
            Get in touch with us to review your current org health and compliance requirements.
          </p>
          <a
            href="mailto:ashraytechnologies@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 dark:bg-primary text-white dark:text-on-primary font-code font-bold text-xs uppercase tracking-widest py-3.5 px-8 rounded-xl hover:brightness-110 transition-all glow-primary shadow-lg"
          >
            <span>Contact Us</span>
            <span className="material-symbols-outlined text-base">mail</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
