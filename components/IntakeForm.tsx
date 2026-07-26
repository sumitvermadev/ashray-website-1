"use client";

import { useState } from "react";

export default function IntakeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState("");
  const [selectedCloud, setSelectedCloud] = useState<string>("[Sales Cloud]");
  const [fileName, setFileName] = useState<string>("");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      setErrorMessage("Please enter your first name, last name, and corporate email address.");
      return;
    }
    setErrorMessage("");
    setIsSubmitting(true);

    const encodedFirst = encodeURIComponent(firstName.trim());
    const encodedLast = encodeURIComponent(lastName.trim());
    const encodedEmail = encodeURIComponent(email.trim());
    const encodedNotes = encodeURIComponent(`Salesforce Target Cloud: ${selectedCloud}\nProject Requirements: ${requirements}`);
    
    // Zoom Scheduler query parameters for firstname, lastname, email, and notes
    const zoomUrl = `https://scheduler.zoom.us/ashray-technologies/discovery-call-ashray-technologies?firstname=${encodedFirst}&lastname=${encodedLast}&email=${encodedEmail}&notes=${encodedNotes}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (typeof window !== "undefined") {
        window.open(zoomUrl, "_blank");
      }
    }, 600);
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setRequirements("");
    setFileName("");
    setSubmitted(false);
  };

  const encodedFirst = encodeURIComponent(firstName.trim());
  const encodedLast = encodeURIComponent(lastName.trim());
  const encodedEmail = encodeURIComponent(email.trim());
  const encodedNotes = encodeURIComponent(`Salesforce Target Cloud: ${selectedCloud}\nProject Requirements: ${requirements}`);
  const zoomUrl = `https://scheduler.zoom.us/ashray-technologies/discovery-call-ashray-technologies?firstname=${encodedFirst}&lastname=${encodedLast}&email=${encodedEmail}&notes=${encodedNotes}`;

  if (submitted) {
    return (
      <div className="text-center py-8 sm:py-10 space-y-6 sm:space-y-8 animate-in fade-in zoom-in-95">
        <div className="w-16 h-16 bg-blue-500/20 dark:bg-primary/20 text-blue-600 dark:text-primary rounded-full flex items-center justify-center mx-auto border border-blue-500/40 dark:border-primary/40 shadow-lg">
          <span className="material-symbols-outlined text-3xl">check_circle</span>
        </div>

        <div className="space-y-3 max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-code text-cyan-600 dark:text-secondary font-bold">
            CONFIRMATION & CALENDAR LAUNCHED
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-on-surface">
            Scope Initialized & Zoom Calendar Opened
          </h3>
          <p className="text-slate-600 dark:text-on-surface-variant text-sm sm:text-base leading-relaxed">
            Thank you <span className="text-blue-600 dark:text-primary font-bold">{firstName} {lastName}</span>. Your project scope for <span className="text-cyan-600 dark:text-secondary font-code font-bold">{selectedCloud}</span> is logged. We have opened your pre-filled Zoom Scheduler session in a new tab.
          </p>
        </div>

        <div className="bg-slate-200/70 dark:bg-surface-container-high border border-slate-300 dark:border-white/10 p-4 rounded-xl max-w-lg mx-auto text-xs font-code text-slate-700 dark:text-outline flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>TICKET ID: #ASH-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
          <span className="text-blue-600 dark:text-primary font-semibold uppercase">ZOOM SESSION ACTIVE</span>
        </div>

        <div className="bg-white dark:bg-[#0B0F17] border border-blue-500/30 dark:border-primary/30 p-6 sm:p-8 rounded-2xl max-w-lg mx-auto space-y-4 text-left etched-border shadow-xl">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-white/10 pb-3">
            <span className="material-symbols-outlined text-blue-600 dark:text-primary text-2xl">mark_email_read</span>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                Pre-Filled Calendar Session Details
              </h4>
              <p className="text-xs text-slate-500 dark:text-outline font-code">
                {firstName} {lastName} ({email})
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-600 dark:text-on-surface-variant leading-relaxed">
            If your browser blocked the automatic pop-up window, click the button below to re-open your pre-filled Zoom Calendar session:
          </p>
          <a
            href={zoomUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blue-600 dark:bg-primary text-white dark:text-on-primary py-3.5 px-6 rounded-xl text-xs uppercase tracking-widest font-code font-bold hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 glow-primary shadow-md"
          >
            <span className="material-symbols-outlined text-base">open_in_new</span>
            <span>RE-OPEN PRE-FILLED ZOOM CALENDAR</span>
          </a>
        </div>

        <button
          id="intake-reset-btn"
          type="button"
          onClick={handleReset}
          className="border border-slate-300 dark:border-outline/30 px-6 py-3 rounded text-xs uppercase tracking-widest font-code text-slate-800 dark:text-on-surface hover:bg-slate-200 dark:hover:bg-surface-container-highest transition-all inline-flex items-center gap-2"
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

      <div className="space-y-1.5">
        <label htmlFor="intake-first-name" className="text-xs uppercase tracking-widest font-code text-slate-700 dark:text-on-surface-variant font-semibold block">
          FIRST NAME *
        </label>
        <input
          id="intake-first-name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
          className="w-full bg-white dark:bg-[#0B0F17] border border-slate-300 dark:border-outline/30 rounded px-3.5 py-2.5 focus:border-blue-600 dark:focus:border-primary focus:ring-1 focus:ring-blue-600 dark:focus:ring-primary outline-none transition-all text-slate-900 dark:text-on-surface text-sm"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="intake-last-name" className="text-xs uppercase tracking-widest font-code text-slate-700 dark:text-on-surface-variant font-semibold block">
          LAST NAME *
        </label>
        <input
          id="intake-last-name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
          className="w-full bg-white dark:bg-[#0B0F17] border border-slate-300 dark:border-outline/30 rounded px-3.5 py-2.5 focus:border-blue-600 dark:focus:border-primary focus:ring-1 focus:ring-blue-600 dark:focus:ring-primary outline-none transition-all text-slate-900 dark:text-on-surface text-sm"
        />
      </div>

      <div className="md:col-span-2 space-y-1.5">
        <label htmlFor="intake-email" className="text-xs uppercase tracking-widest font-code text-slate-700 dark:text-on-surface-variant font-semibold block">
          CORPORATE EMAIL *
        </label>
        <input
          id="intake-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@company.com"
          required
          className="w-full bg-white dark:bg-[#0B0F17] border border-slate-300 dark:border-outline/30 rounded px-3.5 py-2.5 focus:border-blue-600 dark:focus:border-primary focus:ring-1 focus:ring-blue-600 dark:focus:ring-primary outline-none transition-all text-slate-900 dark:text-on-surface text-sm"
        />
      </div>

      <div className="md:col-span-2 space-y-4">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest font-code text-slate-700 dark:text-on-surface-variant font-semibold block">
            TARGET SALESFORCE CLOUD & SCOPE
          </label>
          <div className="flex flex-wrap gap-2">
            {clouds.map((cloud, idx) => (
              <button
                key={cloud}
                id={`intake-cloud-${idx}`}
                type="button"
                onClick={() => setSelectedCloud(cloud)}
                className={`px-3 py-1.5 rounded border transition-all text-xs font-code ${
                  selectedCloud === cloud
                    ? "border-blue-600 text-blue-600 bg-blue-50 dark:border-[#3B82F6] dark:text-[#3B82F6] dark:bg-[#3B82F6]/15 font-bold shadow-sm"
                    : "border-slate-300 bg-slate-100 text-slate-700 dark:border-outline/30 dark:bg-[#161F30] dark:text-on-surface-variant hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                {cloud}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="intake-requirements" className="text-xs uppercase tracking-widest font-code text-slate-700 dark:text-on-surface-variant font-semibold block">
            GENERAL REQUIREMENTS / PROJECT GOALS
          </label>
          <textarea
            id="intake-requirements"
            rows={3}
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            className="w-full bg-white dark:bg-[#0B0F17] border border-slate-300 dark:border-outline/30 rounded px-3.5 py-2.5 focus:border-blue-600 dark:focus:border-[#3B82F6] focus:ring-1 focus:ring-blue-600 dark:focus:ring-[#3B82F6] outline-none transition-all text-slate-900 dark:text-on-surface text-sm resize-none"
            placeholder="Briefly describe your business goals, current bottlenecks, or what you are looking to scale or build..."
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="intake-file" className="text-xs uppercase tracking-widest font-code text-slate-700 dark:text-on-surface-variant font-semibold block">
            ATTACH PROJECT BRIEFS, REQUIREMENTS DOCS, OR ORG DIAGRAMS (OPTIONAL)
          </label>
          <input
            id="intake-file"
            type="file"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
            className="w-full bg-white dark:bg-[#0B0F17] border border-slate-300 dark:border-outline/30 rounded px-3.5 py-2 focus:border-blue-600 dark:focus:border-primary focus:ring-1 focus:ring-blue-600 dark:focus:ring-primary outline-none transition-all text-slate-700 dark:text-on-surface-variant text-xs file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-code file:bg-slate-200 dark:file:bg-surface-container-highest file:text-slate-800 dark:file:text-on-surface hover:file:bg-blue-100 dark:hover:file:bg-primary/20"
          />
          {fileName && (
            <p className="text-xs font-code text-cyan-600 dark:text-secondary font-semibold">
              Attached file: {fileName}
            </p>
          )}
        </div>
      </div>

      <div className="md:col-span-2 pt-2">
        <button
          id="intake-submit-btn"
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 dark:bg-primary text-white dark:text-on-primary text-xs uppercase tracking-widest font-code font-bold py-3.5 rounded hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 glow-primary shadow-md"
        >
          {isSubmitting ? "INITIALIZING SCOPE..." : "INITIALIZE PROJECT SCOPING"}
          <span className="material-symbols-outlined text-base">rocket_launch</span>
        </button>
      </div>
    </form>
  );
}