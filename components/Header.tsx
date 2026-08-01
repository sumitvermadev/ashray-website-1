"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, route: string) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        if (id === "intake-form") {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          const yOffset = -90;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      } else {
        router.push(route);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-100/90 dark:bg-[#030712]/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-max-width mx-auto flex justify-between items-center px-4 sm:px-6 md:px-margin-desktop h-20">
        <Link href="/" className="flex items-center gap-3">
          <Logo id="header-logo" className="h-8 sm:h-9 md:h-10" />
        </Link>

        {/* 3 Main Desktop Navigation Headers */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            id="nav-architecture"
            href="/#architecture"
            onClick={(e) => handleNavClick(e, "architecture", "/#architecture")}
            className="text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-cyan-400 font-bold transition-all text-sm uppercase tracking-wider font-code border-b-2 border-transparent hover:border-blue-600 dark:hover:border-cyan-400 pb-0.5"
          >
            Core Capabilities
          </Link>
          <Link
            id="nav-case-studies"
            href="/case-studies"
            onClick={(e) => handleNavClick(e, "case-studies", "/case-studies")}
            className="text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-cyan-400 font-bold transition-all text-sm uppercase tracking-wider font-code border-b-2 border-transparent hover:border-blue-600 dark:hover:border-cyan-400 pb-0.5"
          >
            Case Studies
          </Link>
          <Link
            id="nav-operating-model"
            href="/operating-model"
            onClick={(e) => handleNavClick(e, "operating-model", "/operating-model")}
            className="text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-cyan-400 font-bold transition-all text-sm uppercase tracking-wider font-code border-b-2 border-transparent hover:border-blue-600 dark:hover:border-cyan-400 pb-0.5"
          >
            Operating Model
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link
            id="header-scope-btn"
            href="/scope-project"
            onClick={(e) => handleNavClick(e, "intake-form", "/scope-project")}
            className="bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 px-6 py-2.5 rounded-lg text-sm uppercase tracking-wider font-code font-extrabold hover:brightness-110 transition-all glow-primary inline-flex items-center gap-2 border border-cyan-400/50"
          >
            Scope Your Project
          </Link>
        </div>

        {/* Mobile & Tablet Controls */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            id="mobile-menu-btn"
            type="button"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-800 dark:text-on-surface hover:text-blue-600 dark:hover:text-primary focus:outline-none rounded-lg border border-slate-300 dark:border-white/10"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-100/98 dark:bg-[#030712]/98 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 shadow-2xl">
          <Link
            id="mobile-nav-architecture"
            href="/#architecture"
            onClick={(e) => handleNavClick(e, "architecture", "/#architecture")}
            className="block text-base uppercase tracking-wider font-code font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-cyan-400 py-3 border-b border-slate-200 dark:border-white/5"
          >
            Core Capabilities
          </Link>
          <Link
            id="mobile-nav-case-studies"
            href="/case-studies"
            onClick={(e) => handleNavClick(e, "case-studies", "/case-studies")}
            className="block text-base uppercase tracking-wider font-code font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-cyan-400 py-3 border-b border-slate-200 dark:border-white/5"
          >
            Case Studies
          </Link>
          <Link
            id="mobile-nav-operating-model"
            href="/operating-model"
            onClick={(e) => handleNavClick(e, "operating-model", "/operating-model")}
            className="block text-base uppercase tracking-wider font-code font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-cyan-400 py-3 border-b border-slate-200 dark:border-white/5"
          >
            Operating Model
          </Link>
          <Link
            id="mobile-header-scope-btn"
            href="/scope-project"
            onClick={(e) => handleNavClick(e, "intake-form", "/scope-project")}
            className="w-full mt-4 bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 py-3.5 rounded-lg text-center text-sm uppercase tracking-wider font-code font-extrabold block shadow-md border border-cyan-400/50"
          >
            Scope Your Project
          </Link>
        </div>
      )}
    </header>
  );
}