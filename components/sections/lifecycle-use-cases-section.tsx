"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"

const lifecyclePhases = [
  {
    phase: "Evaluate",
    cases: [
      {
        title: "Bake-Off",
        description: "Snowflake vs. Databricks? Run real workloads on both — query benchmarks, cost equivalency, governance parity. Evidence, not impressions.",
      },
      {
        title: "Proof of Concept",
        description: "Structure your PoC with clear success criteria, live performance benchmarks, and cost projections grounded in real usage.",
      },
      {
        title: "Fit-Gap Analysis",
        description: "Does this platform fit how your team works? Identify workflow mismatches and missing capabilities before you sign.",
      },
      {
        title: "Impact Assessment",
        description: "Adding 50 GitHub Copilot seats? Map the full ecosystem impact — security scanning, Okta provisioning, cost trajectory — in hours, not weeks.",
      },
    ],
  },
  {
    phase: "Implement",
    cases: [
      {
        title: "Onboarding",
        description: "Bringing a new platform into your environment? Security baseline, identity config, logging setup, compliance alignment — all from Day 0.",
      },
      {
        title: "Pre-Deployment Readiness",
        description: "Score your environment against deployment prerequisites from live discovery. Every gap, dependency conflict, and config miss identified.",
      },
      {
        title: "Security & Compliance Baseline",
        description: "Live scans against your real infrastructure. Superuser accounts, missing RLS policies, disabled logging — real findings, not generic checklists.",
      },
      {
        title: "Day 0 → Day 365 Tracking",
        description: "Continuous implementation tracking — feature activation, security posture, config drift, cost trajectory, adoption metrics. A living system.",
      },
    ],
  },
  {
    phase: "Operationalize",
    cases: [
      {
        title: "Features Licensed vs. Enforced",
        description: "Audit what you're paying for against what's enabled. CrowdStrike modules, Okta capabilities, M365 E5 components. Recover $100M+ in shelfware.",
      },
      {
        title: "Cost Structure & Management",
        description: "Map consumption to teams, surface optimization from real usage, automate chargeback, alert on anomalies with business context.",
      },
      {
        title: "Integration & Interoperability",
        description: "Bridge platforms that don't natively talk — CrowdStrike + Splunk pipelines, Databricks → Snowflake governance, Cisco + Palo Alto unified views.",
      },
      {
        title: "Alternatives & Migration",
        description: "Jira to Linear. Splunk to Cribl. Jenkins to GitHub Actions. Map what breaks, what translates, and the real cost trajectory.",
      },
    ],
  },
]

export function LifecycleUseCasesSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [selectedPhase, setSelectedPhase] = useState(0)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start overflow-y-auto px-6 py-32 md:px-12 md:py-40 lg:px-16"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Use Cases
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / Evaluate, implement, and operationalize — the full lifecycle.
          </p>
        </div>

        {/* Phase Tabs */}
        <div
          className={`mb-8 flex flex-wrap gap-2 transition-all duration-700 md:mb-10 md:gap-3 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {lifecyclePhases.map((phase, i) => (
            <button
              key={i}
              onClick={() => setSelectedPhase(i)}
              className={`rounded-full border px-4 py-2 font-mono text-xs transition-all duration-300 md:px-5 md:py-2.5 md:text-sm ${
                selectedPhase === i
                  ? "border-foreground/40 bg-foreground/15 text-foreground backdrop-blur-md"
                  : "border-foreground/20 bg-foreground/5 text-foreground/60 hover:border-foreground/30 hover:text-foreground/80"
              }`}
            >
              {phase.phase}
            </button>
          ))}
        </div>

        {/* Use Case Cards */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {lifecyclePhases[selectedPhase].cases.map((useCase, i) => (
            <div
              key={i}
              className={`group border-l-2 border-foreground/20 pl-6 transition-all duration-700 md:pl-8 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${300 + i * 100}ms`,
              }}
            >
              <h3 className="mb-2 font-sans text-xl font-light text-foreground transition-colors group-hover:text-foreground md:text-2xl">
                {useCase.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70 md:text-base">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
