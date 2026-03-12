"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"

const problemAreas = [
  {
    persona: "Day 0",
    cases: [
      {
        title: "Software doesn't implement itself",
        description: "$1.1T spent on enterprise software annually. 2–3x that on making it work. Only 30% of implementations succeed.",
        impact: "70% failure rate",
      },
      {
        title: "Consultants aren't the answer",
        description: "$300/hr consultants produce documents that decay immediately. They're incentivized to never fully solve the problem.",
        impact: "$1.3T/yr on IT services",
      },
      {
        title: "Speed to value is everything",
        description: "How fast you operationalize from Day 0 determines your entire business outcome. Most orgs spend months just on the implementation layer.",
        impact: "Months of lost productivity",
      },
    ],
  },
  {
    persona: "Day 420",
    cases: [
      {
        title: "You hire 50 people",
        description: "Wrong license tier. Over-provisioned seats. Under-provisioned access stalls engineering for weeks. Nobody tracks utilization against enablement.",
        impact: "$40K+ burned per event",
      },
      {
        title: "Vendors ship breaking changes",
        description: "Databricks launches Lakebase but it has a fundamentally different security model than Unity Catalog. How do you identify and reconcile this?",
        impact: "Invisible config drift",
      },
      {
        title: "Knowledge walks out the door",
        description: "The engineer who set up your Okta leaves. The Splunk admin retires. Implementation context lives in heads, not systems.",
        impact: "Teams start from scratch",
      },
    ],
  },
  {
    persona: "The Real Problem",
    cases: [
      {
        title: "No system of record exists",
        description: "ServiceNow tracks workflows. Jira tracks tickets. Vanta tracks compliance. Nothing tracks whether your technology is actually implemented correctly.",
        impact: "Zero visibility",
      },
      {
        title: "55% of software goes unused",
        description: "The capabilities your org believes it has often don't exist. $127.3M in wasted spend per large enterprise, every year.",
        impact: "$127.3M/yr wasted",
      },
      {
        title: "It's not a project—it's a loop",
        description: "What you bought. What you deployed. What your business needs. What vendors keep changing. These four things never stay aligned.",
        impact: "Debt compounds daily",
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
            / Implementation isn't a project. It's a continuous problem.
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
