"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full py-16 border-t border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-[#0a0e16] transition-colors duration-300">
      <div className="max-w-max-width mx-auto px-4 md:px-margin-desktop grid grid-cols-12 gap-8 md:gap-gutter">
        <div className="col-span-12 md:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <Logo id="footer-logo" className="h-8 md:h-9" />
          </div>
          <p className="text-slate-600 dark:text-on-surface-variant text-sm max-w-sm leading-relaxed">
            High-precision engineering for Salesforce ecosystems. Custom high-throughput Apex engines, 2GP package modularization, and real-time AML/KYC compliance pipelines.
          </p>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-4 space-y-4">
          <h5 className="text-xs uppercase tracking-widest font-code text-blue-600 dark:text-primary font-semibold">NAVIGATION</h5>
          <nav className="flex flex-col gap-2.5">
            <Link
              id="footer-nav-architecture"
              href="/services"
              className="text-slate-600 dark:text-on-surface-variant/80 hover:text-blue-600 dark:hover:text-primary transition-colors text-sm font-code"
            >
              Salesforce Core Architecture
            </Link>
            <Link
              id="footer-nav-compliance"
              href="/services"
              className="text-slate-600 dark:text-on-surface-variant/80 hover:text-blue-600 dark:hover:text-primary transition-colors text-sm font-code"
            >
              AML/KYC Compliance Integration
            </Link>
            <Link
              id="footer-nav-case-studies"
              href="/case-studies"
              className="text-slate-600 dark:text-on-surface-variant/80 hover:text-blue-600 dark:hover:text-primary transition-colors text-sm font-code"
            >
              Enterprise Case Studies
            </Link>
            <Link
              id="footer-nav-operating-model"
              href="/operating-model"
              className="text-slate-600 dark:text-on-surface-variant/80 hover:text-blue-600 dark:hover:text-primary transition-colors text-sm font-code"
            >
              Operating Model
            </Link>
            <Link
              id="footer-nav-scope-project"
              href="/scope-project"
              className="text-slate-600 dark:text-on-surface-variant/80 hover:text-blue-600 dark:hover:text-primary transition-colors text-sm font-code"
            >
              Scope Your Project
            </Link>
          </nav>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-3 space-y-4 md:text-right">
          <h5 className="text-xs uppercase tracking-widest font-code text-blue-600 dark:text-primary font-semibold">LEGAL & DISCLOSURES</h5>
          <nav className="flex flex-col md:items-end gap-2.5">
            <a href="#" className="text-slate-600 dark:text-on-surface-variant/80 hover:text-blue-600 dark:hover:text-secondary transition-colors text-sm font-code">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-600 dark:text-on-surface-variant/80 hover:text-blue-600 dark:hover:text-secondary transition-colors text-sm font-code">
              Terms of Service
            </a>
            <a href="#" className="text-slate-600 dark:text-on-surface-variant/80 hover:text-blue-600 dark:hover:text-secondary transition-colors text-sm font-code">
              Security Specifications
            </a>
          </nav>
        </div>

        <div className="col-span-12 pt-8 border-t border-slate-200 dark:border-white/5 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[10px] text-slate-500 dark:text-outline tracking-widest uppercase font-code">
            © 2026 ASHRAY TECHNOLOGIES. ALL RIGHTS RESERVED. HIGH-PRECISION ENGINEERING FOR SALESFORCE ECOSYSTEMS.
          </p>
          <div className="flex items-center gap-4">
            <button
              id="footer-back-to-top"
              type="button"
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded border border-slate-300 dark:border-outline/20 text-xs font-code text-slate-700 dark:text-outline hover:text-blue-600 dark:hover:text-primary hover:border-blue-600 dark:hover:border-primary/40 flex items-center gap-1.5 transition-colors"
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