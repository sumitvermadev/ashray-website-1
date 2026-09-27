"use client";

import { useState } from "react";

export default function IntakeForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState("");
  const [selectedClouds, setSelectedClouds] = useState<string[]>(["Sales Cloud"]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const clouds = [
    "Sales Cloud",
    "Service Cloud",
    "Agentforce",
    "Experience Cloud",
    "Other / Bespoke Multi-Cloud",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      setErrorMessage("Please enter your name and email address.");
      return;
    }
    setErrorMessage("");
    setSubmitted(true);

    const subject = encodeURIComponent(`Project Scoping Inquiry - ${fullName.trim()}`);
    const body = encodeURIComponent(
      `Name: ${fullName.trim()}\nEmail: ${email.trim()}\nTarget Clouds: ${selectedClouds.join(", ")}\n\nRequirements / Goals:\n${requirements.trim()}`
    );

    if (typeof window !== "undefined") {
      window.location.href = `mailto:ashraytechnologies@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8 space-y-4 relative z-10">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-2xl">check_circle</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          Inquiry Submitted!
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. Your scope brief details have been prepared and sent to{" "}
          <a
            href="mailto:ashraytechnologies@gmail.com"
            className="font-bold text-blue-600 dark:text-cyan-400 hover:underline"
          >
            ashraytechnologies@gmail.com
          </a>
          . We will review your requirements and respond shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFullName("");
            setEmail("");
            setRequirements("");
          }}
          className="mt-4 px-5 py-2.5 rounded-lg bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 text-xs font-code font-bold hover:brightness-110 transition-all shadow-md"
        >
          SUBMIT ANOTHER INQUIRY
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

      {/* Name Field */}
      <div className="space-y-1.5">
        <label htmlFor="intake-full-name" className="text-sm uppercase tracking-wider font-code text-slate-700 dark:text-slate-300 font-extrabold block">
          NAME *
        </label>
        <input
          id="intake-full-name"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your name"
          required
          className="w-full bg-white dark:bg-[#060A17] border border-slate-300 dark:border-cyan-500/30 rounded-lg px-3.5 py-2.5 focus:border-blue-600 dark:focus:border-cyan-400 focus:ring-1 focus:ring-blue-600 dark:focus:ring-cyan-400 outline-none transition-all text-slate-900 dark:text-slate-100 text-sm"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="intake-email" className="text-sm uppercase tracking-wider font-code text-slate-700 dark:text-slate-300 font-extrabold block">
          EMAIL *
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
            <label className="text-sm uppercase tracking-wider font-code text-slate-700 dark:text-slate-300 font-extrabold block">
              TARGET SALESFORCE CLOUDS (MULTI-SELECT)
            </label>
            <span className="text-xs font-code text-slate-500 dark:text-slate-400">
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
          <label htmlFor="intake-requirements" className="text-sm uppercase tracking-wider font-code text-slate-700 dark:text-slate-300 font-extrabold block">
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
          className="w-full bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 text-sm uppercase tracking-wider font-code font-extrabold py-3.5 rounded-lg hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 glow-primary shadow-md border border-cyan-400/50"
        >
          <span>SUBMIT INQUIRY ↗</span>
          <span className="material-symbols-outlined text-base">send</span>
        </button>
      </div>
    </form>
  );
}