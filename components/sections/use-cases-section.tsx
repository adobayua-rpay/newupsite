"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"

const useCases = [
  {
    persona: "Security & Compliance",
    cases: [
      {
        title: "The 2AM GuardDuty Alert",
        problem: "Security alerts at 2AM, no context on what the IAM role does or what breaks if you revoke it.",
        solution: "Instant graph view of role dependencies, blast radius analysis, and safe remediation—all in 4 minutes instead of 1+ hour.",
        impact: "1 hour → 4 minutes incident response",
      },
      {
        title: "The Public S3 Bucket Nightmare",
        problem: "23 public S3 buckets found. Which ones should be public? Who owns them? What breaks if we fix it?",
        solution: "Auto-classify buckets, show dependencies, make 17 private with policy updates—all in 8 minutes.",
        impact: "3 weeks → 8 minutes compliance fix",
      },
      {
        title: "The SOC2 Audit From Hell",
        problem: "40 hours per audit to manually prove encryption, logging, and MFA compliance with outdated Excel exports.",
        solution: "Generate complete audit report with cryptographically signed evidence in 5 minutes.",
        impact: "$10K saved per audit, continuous compliance",
      },
    ],
  },
  {
    persona: "Platform Engineering & DevOps",
    cases: [
      {
        title: "The Deployment That Took Down Prod",
        problem: "Lambda memory change triggers obscure IAM policy condition, causing 15% error rate in production.",
        solution: "Pre-deployment blast radius detects policy conflict, prevents incident before it happens.",
        impact: "Zero downtime vs. 15 minutes of outage",
      },
      {
        title: "The Accidental Resource Deletion",
        problem: "Junior engineer runs 'terraform destroy' in prod by mistake. 2.5 hours to restore, partial data loss.",
        solution: "6-minute RTO with component-aware restore including all configs, relationships, and data.",
        impact: "6 minutes vs. 2.5 hours, zero data loss",
      },
      {
        title: "The Cascading Failure",
        problem: "DynamoDB throttling cascades to 10 components. 45 minutes to trace dependencies and fix.",
        solution: "Auto-correlate root cause, show full impact graph, remediate in 7 minutes—optionally while you sleep.",
        impact: "7 minutes MTTR vs. 45 minutes",
      },
    ],
  },
  {
    persona: "FinOps & Cost Optimization",
    cases: [
      {
        title: "The Mystery Cost Spike",
        problem: "$35K cost spike. 4 hours to find someone changed a Lambda to 3008MB for 'testing' and forgot to revert.",
        solution: "2-minute root cause with component-level cost attribution. Auto-revert and set up guardrails.",
        impact: "$300K/year savings identified",
      },
      {
        title: "The Tech Debt Mountain",
        problem: "1,200 Lambdas—no idea which are used. Paying $5K/month for zombie resources.",
        solution: "Identify 437 unused components, safe to delete, with backups. 10-minute cleanup.",
        impact: "$49K/year recovered",
      },
      {
        title: "The Chargeback Nightmare",
        problem: "20 hours/month to build cost allocation models. 60% of resources untagged, teams dispute allocations.",
        solution: "Auto-infer ownership from graph, 98% accuracy. 5-minute monthly reports.",
        impact: "20 hours → 5 minutes per month",
      },
    ],
  },
  {
    persona: "Executive & Leadership",
    cases: [
      {
        title: "The Board Question",
        problem: "Board asks 'Are we SOC2 compliant?' CTO scrambles for 2 days to manually audit and find gaps.",
        solution: "Real-time compliance dashboard shown live in board meeting with continuous monitoring proof.",
        impact: "Board confidence, $120K audit savings",
      },
      {
        title: "The M&A Diligence Nightmare",
        problem: "Buyer needs complete cloud inventory for due diligence. 3 weeks of engineering chaos, $200K+ cost.",
        solution: "1-hour comprehensive report: inventory, costs, security, compliance, debt—buyer calls it 'most thorough ever.'",
        impact: "3 weeks → 1 hour, faster deal close",
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
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Use Cases
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / Real-world scenarios that prove the value.
          </p>
        </div>

        {/* Persona Tabs */}
        <div
          className={`mb-8 flex flex-wrap gap-2 transition-all duration-700 md:mb-10 md:gap-3 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {useCases.map((useCase, i) => (
            <button
              key={i}
              onClick={() => setSelectedPersona(i)}
              className={`rounded-full border px-4 py-2 font-mono text-xs transition-all duration-300 md:px-5 md:py-2.5 md:text-sm ${
                selectedPersona === i
                  ? "border-foreground/40 bg-foreground/15 text-foreground backdrop-blur-md"
                  : "border-foreground/20 bg-foreground/5 text-foreground/60 hover:border-foreground/30 hover:text-foreground/80"
              }`}
            >
              {useCase.persona}
            </button>
          ))}
        </div>

        {/* Use Case Cards */}
        <div className="space-y-6 md:space-y-8">
          {useCases[selectedPersona].cases.map((useCase, i) => (
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
              <div className="mb-3 space-y-2">
                <div>
                  <span className="font-mono text-xs text-foreground/40">Problem:</span>
                  <p className="text-sm leading-relaxed text-foreground/70 md:text-base">{useCase.problem}</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-foreground/40">Solution:</span>
                  <p className="text-sm leading-relaxed text-foreground/80 md:text-base">{useCase.solution}</p>
                </div>
              </div>
              <div className="inline-block rounded-full border border-foreground/20 bg-foreground/10 px-3 py-1 backdrop-blur-sm">
                <p className="font-mono text-xs text-foreground/90">{useCase.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
