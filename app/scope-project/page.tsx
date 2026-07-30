import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntakeForm from "@/components/IntakeForm";

export const metadata = {
  title: "Scope Your Project & Book Discovery Call | Ashray Technologies",
  description: "Log your Salesforce scoping brief and reserve your 30-minute discovery call session with senior engineering architects.",
};

export default function ScopeProjectPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-background text-slate-900 dark:text-on-background selection:bg-blue-500 selection:text-white font-sans transition-colors duration-300">
      <Header />

      <section className="pt-32 pb-8 px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto text-center space-y-4">
        <span className="text-xs uppercase tracking-widest font-code text-blue-600 dark:text-cyan-400 font-bold block">
          PROJECT INITIATION
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          Scope Your Salesforce Project
        </h1>
        <p className="text-slate-600 dark:text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Tell us about your target cloud, architecture requirements, and timeline. Upon submission, your details will be pre-filled into your Zoho discovery call session.
        </p>
      </section>

      <section className="py-10 px-4 sm:px-6 md:px-margin-desktop max-w-3xl mx-auto">
        <div className="bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-white/10 p-6 sm:p-10 rounded-2xl shadow-2xl etched-border">
          <IntakeForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
