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
    <footer className="w-full py-16 border-t border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-[#0a0e16] transition-colors duration-300 relative z-10">
        <div className="max-w-max-width mx-auto px-4 md:px-margin-desktop grid grid-cols-12 gap-8 md:gap-gutter">
          {/* Brand & Direct Contact Column */}
          <div className="col-span-12 md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <Logo id="footer-logo" className="h-8 md:h-9" />
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md leading-relaxed font-sans font-medium">
              Built on trust, transparency, and enterprise Salesforce excellence.
            </p>

            {/* Contact Email & Social Section */}
            <div className="pt-2 flex flex-col gap-2.5 text-xs font-code">
              <div className="flex flex-col gap-1">
                <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                  WRITE TO US AT:
                </span>
                <a
                  id="footer-email-link"
                  href="mailto:info@ashraytechnologies.com"
                  className="text-blue-600 dark:text-cyan-400 font-bold hover:underline text-sm inline-flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-base">mail</span>
                  <span>info@ashraytechnologies.com</span>
                </a>
              </div>

              {/* LinkedIn Social Link */}
              <div className="flex items-center gap-2 pt-1">
                <a
                  id="footer-linkedin-link"
                  href="https://www.linkedin.com/company/ashraytechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/20 dark:border-cyan-500/30 text-blue-700 dark:text-cyan-300 hover:bg-blue-500/20 dark:hover:bg-cyan-500/20 transition-all text-xs font-code font-bold"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                  </svg>
                  <span>CONNECT ON LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="col-span-12 sm:col-span-6 md:col-span-4 space-y-4">
            <h5 className="text-sm uppercase tracking-wider font-code text-blue-600 dark:text-cyan-400 font-bold">
              NAVIGATION
            </h5>
            <nav className="flex flex-col gap-2.5">
              <Link
                id="footer-nav-architecture"
                href="/#architecture"
                onClick={(e) => handleNavClick(e, "architecture")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-base font-code"
              >
                Core Capabilities
              </Link>
              <Link
                id="footer-nav-case-studies"
                href="/#case-studies"
                onClick={(e) => handleNavClick(e, "case-studies")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-base font-code"
              >
                Enterprise Case Studies
              </Link>
              <Link
                id="footer-nav-operating-model"
                href="/#operating-model"
                onClick={(e) => handleNavClick(e, "operating-model")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-base font-code"
              >
                Operating Model
              </Link>
              <Link
                id="footer-nav-scope-project"
                href="/#intake-form"
                onClick={(e) => handleNavClick(e, "intake-form")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-base font-code"
              >
                Scope Your Project
              </Link>
            </nav>
          </div>

          {/* Legal & Disclosures Column (Disabled Links) */}
          <div className="col-span-12 sm:col-span-6 md:col-span-3 space-y-4 md:text-right">
            <h5 className="text-sm uppercase tracking-wider font-code text-blue-600 dark:text-cyan-400 font-bold">
              LEGAL &amp; DISCLOSURES
            </h5>
            <nav className="flex flex-col md:items-end gap-2.5">
              <span className="text-slate-400 dark:text-slate-500 text-base font-code cursor-not-allowed opacity-70 select-none">
                Privacy Policy <span className="text-xs font-sans text-slate-400 dark:text-slate-500">(Coming Soon)</span>
              </span>
              <span className="text-slate-400 dark:text-slate-500 text-base font-code cursor-not-allowed opacity-70 select-none">
                Terms of Service <span className="text-xs font-sans text-slate-400 dark:text-slate-500">(Coming Soon)</span>
              </span>
              <span className="text-slate-400 dark:text-slate-500 text-base font-code cursor-not-allowed opacity-70 select-none">
                Security Specifications <span className="text-xs font-sans text-slate-400 dark:text-slate-500">(Coming Soon)</span>
              </span>
            </nav>
          </div>

          {/* Footer Bottom Bar */}
          <div className="col-span-12 pt-8 border-t border-slate-200 dark:border-white/5 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-xs text-slate-500 dark:text-slate-400 tracking-wider uppercase font-code font-medium">
              © 2026 ASHRAY TECHNOLOGIES. ALL RIGHTS RESERVED. FULL-SPECTRUM ARCHITECTURE &amp; CONSULTING.
            </p>
            <div className="flex items-center gap-4">
              <button
                id="footer-back-to-top"
                type="button"
                onClick={scrollToTop}
                className="px-3.5 py-2 rounded-lg border border-slate-300 dark:border-cyan-500/30 text-sm font-code font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-600 dark:hover:border-cyan-400 flex items-center gap-1.5 transition-colors"
              >
                <span>BACK TO TOP</span>
                <span className="material-symbols-outlined text-base">arrow_upward</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
  );
}