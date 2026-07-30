"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full py-16 border-t border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-[#0a0e16] transition-colors duration-300">
      <div className="max-w-max-width mx-auto px-4 md:px-margin-desktop grid grid-cols-12 gap-8 md:gap-gutter">
        {/* Brand & Direct Contact Column */}
        <div className="col-span-12 md:col-span-5 space-y-5">
          <div className="flex items-center gap-3">
            <Logo id="footer-logo" className="h-8 md:h-9" />
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md leading-relaxed">
            From Sales, Service &amp; Experience Cloud modernizations to custom LWC interfaces, high-volume integrations, and 2GP managed packages—we engineer end-to-end Salesforce solutions tailored for operational efficiency and rapid adoption.
          </p>

          {/* Contact Email Section */}
          <div className="pt-2 flex flex-col gap-1 text-xs font-code">
            <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
              WRITE TO US AT:
            </span>
            <a
              id="footer-email-link"
              href="mailto:connect@ashraytechnologies.com"
              className="text-blue-600 dark:text-cyan-400 font-bold hover:underline text-sm inline-flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              <span>connect@ashraytechnologies.com</span>
            </a>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="col-span-12 sm:col-span-6 md:col-span-4 space-y-4">
          <h5 className="text-xs uppercase tracking-widest font-code text-blue-600 dark:text-cyan-400 font-bold">
            NAVIGATION
          </h5>
          <nav className="flex flex-col gap-2.5">
            <Link
              id="footer-nav-architecture"
              href="/#architecture"
              onClick={(e) => handleNavClick(e, "architecture")}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-sm font-code"
            >
              Core Capabilities
            </Link>
            <Link
              id="footer-nav-case-studies"
              href="/#case-studies"
              onClick={(e) => handleNavClick(e, "case-studies")}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-sm font-code"
            >
              Enterprise Case Studies
            </Link>
            <Link
              id="footer-nav-operating-model"
              href="/#operating-model"
              onClick={(e) => handleNavClick(e, "operating-model")}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-sm font-code"
            >
              Operating Model
            </Link>
            <Link
              id="footer-nav-scope-project"
              href="/#intake-form"
              onClick={(e) => handleNavClick(e, "intake-form")}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-sm font-code"
            >
              Scope Your Project
            </Link>
          </nav>
        </div>

        {/* Legal & Disclosures Column */}
        <div className="col-span-12 sm:col-span-6 md:col-span-3 space-y-4 md:text-right">
          <h5 className="text-xs uppercase tracking-widest font-code text-blue-600 dark:text-cyan-400 font-bold">
            LEGAL &amp; DISCLOSURES
          </h5>
          <nav className="flex flex-col md:items-end gap-2.5">
            <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-sm font-code">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-sm font-code">
              Terms of Service
            </a>
            <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-sm font-code">
              Security Specifications
            </a>
          </nav>
        </div>

        {/* Footer Bottom Bar */}
        <div className="col-span-12 pt-8 border-t border-slate-200 dark:border-white/5 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[10px] text-slate-500 dark:text-slate-400 tracking-widest uppercase font-code">
            © 2026 ASHRAY TECHNOLOGIES. ALL RIGHTS RESERVED. FULL-SPECTRUM ARCHITECTURE &amp; CONSULTING.
          </p>
          <div className="flex items-center gap-4">
            <button
              id="footer-back-to-top"
              type="button"
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded border border-slate-300 dark:border-cyan-500/30 text-xs font-code text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-600 dark:hover:border-cyan-400 flex items-center gap-1.5 transition-colors"
            >
              <span>BACK TO TOP</span>
              <span className="material-symbols-outlined text-sm">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}