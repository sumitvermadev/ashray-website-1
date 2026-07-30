"use client";

export default function Logo({
  id = "brand-logo",
  className = "h-9 md:h-10",
}: {
  id?: string;
  className?: string;
}) {
  return (
    <div id={id} className={`flex items-center gap-3 select-none ${className}`}>
      {/* User's Exact Framed 'A' Logo Mark */}
      <div className="relative flex items-center justify-center h-full aspect-square flex-shrink-0">
        <img
          src="/logo-mark-light.png"
          alt="Ashray Technologies Logo"
          className="h-full w-auto aspect-square object-contain block dark:hidden drop-shadow-md"
        />
        <img
          src="/logo-mark-dark.png"
          alt="Ashray Technologies Logo"
          className="h-full w-auto aspect-square object-contain hidden dark:block drop-shadow-[0_0_12px_rgba(0,240,255,0.35)]"
        />
      </div>

      {/* Brand Typography Shifted to Right Side */}
      <div className="flex flex-col justify-center leading-none space-y-0.5">
        <span className="text-lg md:text-xl font-black tracking-wider text-slate-900 dark:text-slate-50 font-sans uppercase">
          ASHRAY
        </span>
        <span className="text-[9px] md:text-[10px] font-extrabold uppercase tracking-[0.26em] text-blue-600 dark:text-cyan-400 font-code">
          TECHNOLOGIES
        </span>
      </div>
    </div>
  );
}
