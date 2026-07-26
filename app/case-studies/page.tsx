import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudiesCarousel from "@/components/CaseStudiesCarousel";
import Link from "next/link";

export const metadata = {
  title: "Case Studies & Architectural Benchmarks | Ashray Technologies",
  description: "Explore enterprise Salesforce implementations, compliance engineering results, and performance benchmarks.",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-background text-slate-900 dark:text-on-background selection:bg-blue-500 selection:text-white font-sans transition-colors duration-300">
      <Header />

      <section className="pt-32 pb-12 px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-code text-blue-600 dark:text-cyan-400 font-bold block">
            VERIFIED PROOF & METRICS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
            Architectural Case Studies & Impact Benchmarks
          </h1>
          <p className="text-slate-600 dark:text-on-surface-variant text-base sm:text-lg leading-relaxed">
            Real enterprise transformations across Financial Services, Healthcare, and High-Growth SaaS.
          </p>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto">
        <CaseStudiesCarousel />
      </section>

      <Footer />
    </main>
  );
}
