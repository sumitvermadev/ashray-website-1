"use client";

import { useState } from "react";

export default function IntakeForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState("");
  const [selectedClouds, setSelectedClouds] = useState<string[]>(["[Sales Cloud]"]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const clouds = [
    "[Sales Cloud]",
    "[Service Cloud]",
    "[Agentforce]",
    "[Experience Cloud]",
    "[Other / Bespoke Multi-Cloud]",
  ];

  const toggleCloud = (cloud: string) => {
    if (selectedClouds.includes(cloud)) {
      if (selectedClouds.length > 1) {
        setSelectedClouds(selectedClouds.filter((c) => c !== cloud));
      }
    } else {
      setSelectedClouds([...selectedClouds, cloud]);
    }
  };

  const getZohoUrl = () => {
    const nameTrimmed = fullName.trim();
    const nameParts = nameTrimmed.split(" ");
    const first = nameParts[0] || nameTrimmed;
    const last = nameParts.slice(1).join(" ") || first;

    const encodedFirst = encodeURIComponent(first);
    const encodedLast = encodeURIComponent(last);
    const encodedFullName = encodeURIComponent(nameTrimmed);
    const encodedEmail = encodeURIComponent(email.trim());

    const cloudList = selectedClouds.join(", ");
    const reqText = requirements.trim();
    const cleanReqs = reqText
      ? `Target Cloud(s): ${cloudList} - ${reqText}`
      : `Target Cloud(s): ${cloudList}`;
    const encodedReqs = encodeURIComponent(cleanReqs);

    const baseUrl = process.env.NEXT_PUBLIC_ZOHO_BOOKINGS_URL || "https://ashraytechnologies.zohobookings.in/446708000000032045";
    
    const params = [
      `first_name=${encodedFirst}`,
      `last_name=${encodedLast}`,
      `name=${encodedFullName}`,
      `Name=${encodedFullName}`,
      `email=${encodedEmail}`,
      `Email=${encodedEmail}`,
      `Requirements=${encodedReqs}`,
      `requirements=${encodedReqs}`,
      `q_Requirements=${encodedReqs}`,
      `q_requirements=${encodedReqs}`,
      `cf_Requirements=${encodedReqs}`,
      `notes=${encodedReqs}`,
      `description=${encodedReqs}`,
    ].join("&");

    return `${baseUrl}?${params}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      setErrorMessage("Please enter your full name and corporate email address.");
      return;
    }
    setErrorMessage("");
    setIsSubmitting(true);

    const zohoUrl = getZohoUrl();

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (typeof window !== "undefined") {
        window.open(zohoUrl, "_blank");
      }
    }, 500);
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setRequirements("");
    setSelectedClouds(["[Sales Cloud]"]);
    setSubmitted(false);
  };

  const zohoUrl = getZohoUrl();

  if (submitted) {
    return (
      <div className="text-center py-8 sm:py-10 space-y-6 sm:space-y-8 animate-in fade-in zoom-in-95">
        <div className="w-16 h-16 bg-blue-500/20 dark:bg-cyan-500/20 text-blue-600 dark:text-cyan-400 rounded-full flex items-center justify-center mx-auto border border-blue-500/40 dark:border-cyan-500/40 shadow-lg">
          <span className="material-symbols-outlined text-3xl">check_circle</span>
        </div>

        <div className="space-y-3 max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-code text-cyan-600 dark:text-cyan-400 font-bold">
            CONFIRMATION &amp; ZOHO CALENDAR LAUNCHED
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50">
            Scope Initialized &amp; Zoho Calendar Opened
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Thank you <span className="text-blue-600 dark:text-cyan-400 font-bold">{fullName}</span>. Your project scope for <span className="text-cyan-600 dark:text-cyan-400 font-code font-bold">{selectedClouds.join(", ")}</span> is logged. Your pre-filled Zoho discovery session has been launched.
          </p>
        </div>

        <div className="bg-slate-200/70 dark:bg-[#060A17] border border-slate-300 dark:border-cyan-500/30 p-4 rounded-xl max-w-lg mx-auto text-xs font-code text-slate-700 dark:text-slate-300 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>TICKET ID: #ASH-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
          <span className="text-blue-600 dark:text-cyan-400 font-semibold uppercase">ZOHO SESSION ACTIVE</span>
        </div>

        <div className="bg-white dark:bg-[#030712] border border-blue-500/30 dark:border-cyan-500/40 p-6 sm:p-8 rounded-2xl max-w-lg mx-auto space-y-4 text-left etched-border shadow-xl">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-white/10 pb-3">
            <span className="material-symbols-outlined text-blue-600 dark:text-cyan-400 text-2xl">mark_email_read</span>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                Pre-Filled Zoho Calendar Session Details
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-code">
                {fullName} ({email})
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Zoho Bookings security policies require direct window access for calendar booking. Click below to launch or re-open your pre-filled session:
          </p>
          <a
            href={zohoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 py-3.5 px-6 rounded-xl text-xs uppercase tracking-widest font-code font-bold hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 glow-primary shadow-md"
          >
            <span className="material-symbols-outlined text-base">open_in_new</span>
            <span>LAUNCH PRE-FILLED ZOHO CALENDAR ↗</span>
          </a>
        </div>

        <button
          id="intake-reset-btn"
          type="button"
          onClick={handleReset}
          className="border border-slate-300 dark:border-cyan-500/30 px-6 py-3 rounded-lg text-xs uppercase tracking-widest font-code text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all inline-flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">refresh</span>
          <span>Submit Another Scope Brief</span>
        </button>
      </div>
    );
  }

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 relative z-10" onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="md:col-span-2 bg-red-500/10 border border-red-500/50 p-2.5 rounded text-red-600 dark:text-red-400 text-xs font-code flex items-center gap-2">
          <span className="material-symbols-outlined text-base">error</span>
          {errorMessage}
        </div>
      )}

      {/* Single Name Field */}
      <div className="space-y-1.5">
        <label htmlFor="intake-full-name" className="text-xs uppercase tracking-widest font-code text-slate-700 dark:text-slate-300 font-semibold block">
          NAME *
        </label>
        <input
          id="intake-full-name"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          required
          className="w-full bg-white dark:bg-[#060A17] border border-slate-300 dark:border-cyan-500/30 rounded-lg px-3.5 py-2.5 focus:border-blue-600 dark:focus:border-cyan-400 focus:ring-1 focus:ring-blue-600 dark:focus:ring-cyan-400 outline-none transition-all text-slate-900 dark:text-slate-100 text-sm"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="intake-email" className="text-xs uppercase tracking-widest font-code text-slate-700 dark:text-slate-300 font-semibold block">
          CORPORATE EMAIL *
        </label>
        <input
          id="intake-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@company.com"
          required
          className="w-full bg-white dark:bg-[#060A17] border border-slate-300 dark:border-cyan-500/30 rounded-lg px-3.5 py-2.5 focus:border-blue-600 dark:focus:border-cyan-400 focus:ring-1 focus:ring-blue-600 dark:focus:ring-cyan-400 outline-none transition-all text-slate-900 dark:text-slate-100 text-sm"
        />
      </div>

      <div className="md:col-span-2 space-y-4">
        {/* Multiselect Cloud Pills */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs uppercase tracking-widest font-code text-slate-700 dark:text-slate-300 font-semibold block">
              TARGET SALESFORCE CLOUDS (MULTI-SELECT)
            </label>
            <span className="text-[10px] font-code text-slate-500 dark:text-slate-400">
              Select all that apply
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {clouds.map((cloud, idx) => {
              const isSelected = selectedClouds.includes(cloud);
              return (
                <button
                  key={cloud}
                  id={`intake-cloud-${idx}`}
                  type="button"
                  onClick={() => toggleCloud(cloud)}
                  className={`px-3.5 py-1.5 rounded-lg border transition-all text-xs font-code flex items-center gap-1.5 ${
                    isSelected
                      ? "border-blue-600 text-blue-600 bg-blue-50 dark:border-cyan-400 dark:text-cyan-300 dark:bg-cyan-950/50 font-bold shadow-sm"
                      : "border-slate-300 bg-slate-100 text-slate-700 dark:border-cyan-500/20 dark:bg-[#060A17] dark:text-slate-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-cyan-400"
                  }`}
                >
                  {isSelected && (
                    <span className="material-symbols-outlined text-sm text-blue-600 dark:text-cyan-400">
                      check
                    </span>
                  )}
                  <span>{cloud}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="intake-requirements" className="text-xs uppercase tracking-widest font-code text-slate-700 dark:text-slate-300 font-semibold block">
            GENERAL REQUIREMENTS / PROJECT GOALS
          </label>
          <textarea
            id="intake-requirements"
            rows={3}
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            className="w-full bg-white dark:bg-[#060A17] border border-slate-300 dark:border-cyan-500/30 rounded-lg px-3.5 py-2.5 focus:border-blue-600 dark:focus:border-cyan-400 focus:ring-1 focus:ring-blue-600 dark:focus:ring-cyan-400 outline-none transition-all text-slate-900 dark:text-slate-100 text-sm resize-none"
            placeholder="Briefly describe your business goals, current bottlenecks, or what you are looking to scale or build..."
          />
        </div>
      </div>

      <div className="md:col-span-2 pt-2">
        <button
          id="intake-submit-btn"
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 text-xs uppercase tracking-widest font-code font-extrabold py-3.5 rounded-lg hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 glow-primary shadow-md border border-cyan-400/50"
        >
          {isSubmitting ? "INITIALIZING SCOPE..." : "INITIALIZE PROJECT SCOPING & LAUNCH ZOHO ↗"}
          <span className="material-symbols-outlined text-base">rocket_launch</span>
        </button>
      </div>
    </form>
  );
}