"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("ashray-theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    } else {
      // Default to light mode
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("ashray-theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <button
      id="theme-toggle-btn"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 dark:border-white/10 dark:bg-white/5 bg-slate-200/80 hover:bg-slate-300 dark:hover:bg-white/10 transition-all text-xs font-code font-semibold text-slate-800 dark:text-slate-200"
    >
      <span className="material-symbols-outlined text-base">
        {theme === "dark" ? "light_mode" : "dark_mode"}
      </span>
      <span className="uppercase tracking-wider text-[10px]">
        {theme === "dark" ? "LIGHT" : "DARK"}
      </span>
    </button>
  );
}
