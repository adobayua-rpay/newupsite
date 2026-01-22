"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"

const useCases = [
  {
    persona: "Identity & Access",
    cases: [
      {
        title: "JIT Access System for Production",
        problem: "Engineers wait 3-4 weeks for access to production databases. Security reviews are manual and backlogged.",
        solution: "Built a JIT access portal in 20 minutes. Engineers request access, managers approve in Slack, permissions auto-expire. Full audit trail.",
        impact: "3 weeks → 15 minutes for access",
      },
      {
        title: "Bulk User Provisioning",
        problem: "Onboarding 50 new hires meant 2 weeks of manual setup across Okta, AWS, GitLab, and 12 other systems.",
        solution: "Built a provisioning app that reads from HR CSV, creates accounts across all systems, applies role-based policies.",
        impact: "2 weeks → 30 minutes per cohort",
      },
      {
        title: "Identity Governance Dashboard",
        problem: "Security asked who has access to what across 47 services. Answer: nobody knew.",
        solution: "Built an access review app. Shows every user, every permission, every system. Quarterly reviews take 2 hours instead of 2 weeks.",
        impact: "$80K saved per audit cycle",
      },
    ],
  },
  {
    persona: "Data Infrastructure",
    cases: [
      {
        title: "Databricks Workspace Provisioning",
        problem: "Data scientists needed workspaces. IT had a 6-step ticket process. Average wait: 4 days.",
        solution: "Built a self-service portal. Users pick workspace config, cost center gets tagged, workspace created in 3 minutes with proper isolation.",
        impact: "4 days → 3 minutes",
      },
      {
        title: "Postgres Connection Manager",
        problem: "47 microservices connecting to Postgres clusters. Credentials scattered. No visibility into who connects to what.",
        solution: "Built a connection management dashboard. Rotate credentials, audit connections, revoke access—all in one place.",
        impact: "Credential rotation: 2 days → 5 minutes",
      },
      {
        title: "Kafka Topic Admin Portal",
        problem: "Creating Kafka topics required understanding ACLs, partition strategy, and retention policies. Only 2 engineers could do it.",
        solution: "Built a topic provisioning app with guardrails. Teams request topics, policies enforced automatically, ACLs configured correctly.",
        impact: "2 engineers → entire platform team",
      },
    ],
  },
  {
    persona: "Platform Operations",
    cases: [
      {
        title: "Kubernetes Resource Viewer",
        problem: "Developers couldn't see what was running in their namespace without kubectl access. Support tickets piled up.",
        solution: "Built a namespace dashboard. Shows pods, deployments, resource usage, recent events. Developers self-serve, ops focuses on real issues.",
        impact: "40% reduction in support tickets",
      },
      {
        title: "Deployment Approval Workflow",
        problem: "Production deploys required Slack threads, manual approvals, and prayer. Audit trail: nonexistent.",
        solution: "Built a deployment portal. Teams submit, leads approve, deploys execute with rollback buttons. Full audit log.",
        impact: "Zero untracked production changes",
      },
      {
        title: "Incident Response Dashboard",
        problem: "On-call meant SSH-ing into boxes, checking logs in 5 different systems, and hoping you knew the runbooks.",
        solution: "Built an incident dashboard. Aggregates metrics, surfaces runbooks, shows blast radius. MTTR dropped significantly.",
        impact: "MTTR reduced by 60%",
      },
    ],
  },
  {
    persona: "Compliance & Security",
    cases: [
      {
        title: "Access Review Automation",
        problem: "Quarterly access reviews meant exporting data from 30 systems into spreadsheets. Always incomplete, always late.",
        solution: "Built an access review app. Pulls from all systems, shows managers their team's access, captures approvals. Done in hours.",
        impact: "3 weeks → 4 hours per quarter",
      },
      {
        title: "Audit Trail System",
        problem: "Auditors asked for 90 days of access logs. Answer: we don't have those centralized. Red flag.",
        solution: "Built an audit log viewer. Aggregates events across AWS, Okta, GitHub, Jira. Searchable, exportable, always current.",
        impact: "Compliance finding → compliance strength",
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
            Use Cases
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / Real-world scenarios that prove the value.
          </p>
        </div>

        {/* Persona Tabs */}
        <div
          className={`mb-8 flex flex-wrap gap-2 transition-all duration-700 md:mb-10 md:gap-3 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          style={{ transitionDelay: "150ms" }}
        >
          {useCases.map((useCase, i) => (
            <button
              key={i}
              onClick={() => setSelectedPersona(i)}
              className={`rounded-full border px-4 py-2 font-mono text-xs transition-all duration-300 md:px-5 md:py-2.5 md:text-sm ${selectedPersona === i
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
              className={`group border-l-2 border-foreground/20 pl-6 transition-all duration-700 md:pl-8 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
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
