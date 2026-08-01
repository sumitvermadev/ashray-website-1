import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntakeForm from "@/components/IntakeForm";

export const metadata = {
  title: "Scope Your Project & Book Discovery Call | Ashray Technologies",
  description: "Log your Salesforce scoping brief and reserve your 30-minute discovery call session with senior engineering architects.",
};

export default function ScopeProjectPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white font-sans transition-colors duration-300">
      <Header />

      <section className="pt-32 pb-6 px-4 sm:px-6 md:px-margin-desktop max-w-max-width mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          Schedule a 1:1 discovery call with us
        </h1>
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
