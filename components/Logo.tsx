"use client";

export default function Logo({
  id = "brand-logo",
  className = "h-9 md:h-10",
}: {
  id?: string;
  className?: string;
}) {
  return (
    <div id={id} className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Precision 3D Vector Delta Emblem */}
      <div className="relative flex items-center justify-center h-full aspect-square flex-shrink-0">
        <svg
          viewBox="0 0 100 95"
          className="h-full w-auto aspect-square drop-shadow-[0_2px_8px_rgba(37,99,235,0.25)] dark:drop-shadow-[0_0_14px_rgba(93,230,255,0.45)] transition-all"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Light Mode Gradients - Deep Sapphire & Electric Blue 3D Metallic */}
            <linearGradient id="ashray-delta-light-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="45%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="ashray-delta-light-right" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="60%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
            <linearGradient id="ashray-delta-light-bar" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="50%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>

            {/* Dark Mode Gradients - Silver Platinum & Glowing Cyan Metallic */}
            <linearGradient id="ashray-delta-dark-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="50%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
            <linearGradient id="ashray-delta-dark-right" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5DE6FF" />
              <stop offset="60%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>
            <linearGradient id="ashray-delta-dark-bar" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#5DE6FF" />
            </linearGradient>
          </defs>

          {/* Left 3D Bar */}
          <polygon
            points="28,4 48,4 20,91 0,91"
            className="fill-[url(#ashray-delta-light-left)] dark:fill-[url(#ashray-delta-dark-left)]"
          />
          {/* Right 3D Bar */}
          <polygon
            points="52,4 72,4 100,91 80,91"
            className="fill-[url(#ashray-delta-light-right)] dark:fill-[url(#ashray-delta-dark-right)]"
          />
          {/* Interlocking 3D Crossbar */}
          <polygon
            points="14,60 86,60 76,76 24,76"
            className="fill-[url(#ashray-delta-light-bar)] dark:fill-[url(#ashray-delta-dark-bar)]"
          />
          {/* Inner 3D Highlight Bevel Lines */}
          <line
            x1="28" y1="4" x2="48" y2="4"
            className="stroke-white/40 dark:stroke-white/70 stroke-[1.5]"
          />
          <line
            x1="14" y1="60" x2="86" y2="60"
            className="stroke-white/40 dark:stroke-white/70 stroke-[1.5]"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center leading-none space-y-1">
        <span className="text-lg md:text-xl font-black tracking-tight text-slate-900 dark:text-slate-50 font-sans">
          Ashray
        </span>
        <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-cyan-400 font-code">
          TECHNOLOGIES
        </span>
      </div>
    </div>
  );
}
