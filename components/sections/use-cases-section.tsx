"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"

const problemAreas = [
  {
    persona: "System Context",
    cases: [
      {
        title: "Live state is never discovered",
        description: "Organizations deploy against assumptions from kickoff meetings, not actual environment state. Missing dependencies, disabled services, and config mismatches surface late — or never.",
        impact: "Preventable surprises",
      },
      {
        title: "Vendors ship breaking changes",
        description: "Databricks launches Lakebase with a fundamentally different security model than Unity Catalog. Okta deprecates a workflow. How do you identify and reconcile the impact?",
        impact: "Invisible config drift",
      },
      {
        title: "No baseline, no drift detection",
        description: "After go-live, systems change. Configs drift. Logging gaps sit undetected. Nobody can tell whether what was built still matches what was approved.",
        impact: "Silent degradation",
      },
    ],
  },
  {
    persona: "Work Context",
    cases: [
      {
        title: "Static plans decay immediately",
        description: "$300/hr consultants produce documents that are stale before ink dries. Tickets, decks, and wiki pages can't maintain implementation state across systems, teams, and time.",
        impact: "$1.3T/yr on IT services",
      },
      {
        title: "No governed execution",
        description: "Tasks have no exit criteria, no evidence requirements, no approval chains. Completion is asserted, never proven. There is no audit trail for what was actually done.",
        impact: "Zero accountability",
      },
      {
        title: "No system of record exists",
        description: "ServiceNow tracks workflows. Jira tracks tickets. Vanta tracks compliance. Nothing tracks whether your technology is actually implemented correctly.",
        impact: "Zero visibility",
      },
    ],
  },
  {
    persona: "Organizational Context",
    cases: [
      {
        title: "Ownership is always ambiguous",
        description: "Three executives have three definitions of success. The security team, data team, and business owner all assume somebody else owns the rollout. Nobody realizes until month four.",
        impact: "Nobody's accountable",
      },
      {
        title: "Knowledge walks out the door",
        description: "The engineer who set up your Okta leaves. The Splunk admin retires. Implementation context lives in heads, not systems. Teams rebuild understanding from scratch.",
        impact: "Teams start from scratch",
      },
      {
        title: "Adoption is assumed, not measured",
        description: "Training happens as a webinar and a deck. Three weeks later half the org still operates the old way. Nobody tracks whether the new operating model took hold.",
        impact: "71% underperform",
      },
    ],
  },
]

export function UseCasesSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [selectedPersona, setSelectedPersona] = useState(0)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start overflow-y-auto px-6 py-32 md:px-12 md:py-40 lg:px-16"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Why It Fails
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / Implementation fails across three layers — and nothing in your stack catches it.
          </p>
        </div>

        {/* Persona Tabs */}
        <div
          className={`mb-8 flex flex-wrap gap-2 transition-all duration-700 md:mb-10 md:gap-3 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          style={{ transitionDelay: "150ms" }}
        >
          {problemAreas.map((area, i) => (
            <button
              key={i}
              onClick={() => setSelectedPersona(i)}
              className={`rounded-full border px-4 py-2 font-mono text-xs transition-all duration-300 md:px-5 md:py-2.5 md:text-sm ${selectedPersona === i
                  ? "border-foreground/40 bg-foreground/15 text-foreground backdrop-blur-md"
                  : "border-foreground/20 bg-foreground/5 text-foreground/60 hover:border-foreground/30 hover:text-foreground/80"
                }`}
            >
              {area.persona}
            </button>
          ))}
        </div>

        {/* Problem Cards */}
        <div className="space-y-6 md:space-y-8">
          {problemAreas[selectedPersona].cases.map((item, i) => (
            <div
              key={i}
              className={`group border-l-2 border-foreground/20 pl-6 transition-all duration-700 md:pl-8 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
                }`}
              style={{
                transitionDelay: `${300 + i * 100}ms`,
              }}
            >
              <h3 className="mb-2 font-sans text-xl font-light text-foreground transition-colors group-hover:text-foreground md:text-2xl">
                {item.title}
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-foreground/70 md:text-base">{item.description}</p>
              <div className="inline-block rounded-full border border-foreground/20 bg-foreground/10 px-3 py-1 backdrop-blur-sm">
                <p className="font-mono text-xs text-foreground/90">{item.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
