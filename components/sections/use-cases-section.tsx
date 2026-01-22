"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"

const useCases = [
  {
    persona: "Security & Compliance",
    cases: [
      {
        title: "IAM Governance Portal",
        problem: "47 services, no unified view of who has access to what. Audit prep takes weeks.",
        solution: "Build an IAM analyzer that spans all your services. Track permissions, detect risky access, generate compliance reports.",
        impact: "Weeks of audit prep → minutes",
      },
      {
        title: "JIT Access System",
        problem: "Intern needs Databricks access for a 3-week project. It's a 4-week ticket to the IAM team.",
        solution: "Deploy a just-in-time access portal with approval workflows, time-bound permissions, and automatic revocation.",
        impact: "4-week wait → same-day access",
      },
      {
        title: "Permission Audit Dashboard",
        problem: "Security keeps asking for compliance reports. Manual exports, outdated spreadsheets, constant back-and-forth.",
        solution: "Ship a real-time compliance dashboard with cryptographically signed evidence and continuous monitoring.",
        impact: "Continuous compliance, not quarterly scrambles",
      },
    ],
  },
  {
    persona: "Platform Engineering",
    cases: [
      {
        title: "Developer Self-Service Portal",
        problem: "Only 2 engineers know how to provision Databricks workspaces safely. Everyone else opens tickets.",
        solution: "Build a self-service portal with guardrails. Developers provision what they need, policies enforce what's allowed.",
        impact: "Tickets → self-service in minutes",
      },
      {
        title: "Infrastructure Dashboard",
        problem: "Teams can't see their own resources. Every question becomes a Slack thread to platform engineering.",
        solution: "Deploy resource viewers for each team. Real-time status, costs, dependencies—all in one place.",
        impact: "Visibility without the bottleneck",
      },
      {
        title: "Service Catalog",
        problem: "No standard way to request infrastructure. Different teams, different processes, inconsistent results.",
        solution: "Create a service catalog with templates, approval flows, and automated provisioning.",
        impact: "Standardized, repeatable, auditable",
      },
    ],
  },
  {
    persona: "FinOps & Cost Management",
    cases: [
      {
        title: "Cost Allocation Dashboard",
        problem: "60% of resources untagged. Teams dispute allocations. Finance wants answers nobody has.",
        solution: "Build cost allocation dashboards by team, project, or department. Auto-infer ownership from usage patterns.",
        impact: "20 hours/month → 5 minutes",
      },
      {
        title: "License Optimizer",
        problem: "Paying for 1,200 Databricks licenses. No idea how many are actually used.",
        solution: "Deploy a license tracker that shows utilization, identifies waste, and recommends rightsizing.",
        impact: "Find the $50K/year you're wasting",
      },
      {
        title: "Budget Guardrails",
        problem: "Cost spikes discovered at month-end. By then, the damage is done.",
        solution: "Ship budget monitoring with alerts, automatic enforcement, and anomaly detection.",
        impact: "Catch overruns before they happen",
      },
    ],
  },
  {
    persona: "IT Operations",
    cases: [
      {
        title: "User Provisioning Tool",
        problem: "Onboarding takes a week. HR, IT, Security all have different checklists. Things get missed.",
        solution: "Build automated onboarding that provisions accounts across all systems from a single workflow.",
        impact: "Week-long onboarding → same day",
      },
      {
        title: "Bulk Operations Interface",
        problem: "Need to update 500 Okta users. It's either manual clicks or asking engineering for a script.",
        solution: "Deploy a bulk operations tool with preview, validation, and rollback. Safe mass changes without code.",
        impact: "Hours of clicking → 5-minute batch job",
      },
      {
        title: "Directory Management Dashboard",
        problem: "User data scattered across Okta, AD, and cloud IAM. No single source of truth.",
        solution: "Create a unified directory view that syncs across identity providers and shows discrepancies.",
        impact: "One view, all your identities",
      },
    ],
  },
  {
    persona: "DevOps & SRE",
    cases: [
      {
        title: "Deployment Monitor",
        problem: "Deployments fail and nobody knows why until users complain. Logs scattered across 10 tools.",
        solution: "Build a deployment dashboard that tracks rollouts, correlates errors, and shows blast radius.",
        impact: "Find failures before users do",
      },
      {
        title: "Incident Response Workflow",
        problem: "Incident happens, then it's Slack chaos. Who's on call? What's affected? Where are the runbooks?",
        solution: "Deploy an incident portal with on-call routing, automated diagnostics, and runbook execution.",
        impact: "Structured response, faster resolution",
      },
      {
        title: "Kafka Management Console",
        problem: "Provisioning topics requires CLI access. Consumer group lag is checked manually. ACLs are a mystery.",
        solution: "Ship a Kafka operations portal with topic management, lag monitoring, and ACL administration.",
        impact: "Kafka operations without the CLI",
      },
    ],
  },
  {
    persona: "Data Analytics",
    cases: [
      {
        title: "Pipeline Monitor",
        problem: "Data pipelines fail silently. Analysts discover issues when dashboards go stale.",
        solution: "Build a pipeline monitoring dashboard with run status, data freshness, and failure alerts.",
        impact: "Know when pipelines break, not when reports do",
      },
      {
        title: "Data Quality Dashboard",
        problem: "Bad data makes it to production. By the time it's caught, decisions were already made.",
        solution: "Deploy data quality checks with anomaly detection, validation rules, and lineage tracking.",
        impact: "Catch data issues at the source",
      },
      {
        title: "Usage Tracker",
        problem: "Which datasets are actually used? Which queries are expensive? No visibility into analytics workloads.",
        solution: "Create a usage analytics dashboard for Snowflake, Databricks, or BigQuery with query patterns and cost attribution.",
        impact: "Optimize what you can measure",
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
            What You Can Build
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / Internal applications for every team that operates infrastructure.
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
