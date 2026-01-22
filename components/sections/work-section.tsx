"use client"

import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start overflow-y-auto px-6 py-32 md:px-12 md:py-40 lg:px-16"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            What You Can Build
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / Internal tools for every infrastructure system you run.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {[
            {
              number: "01",
              title: "Access Management Portals",
              category: "JIT access requests, bulk user provisioning, permission audits across Okta, AWS IAM, Azure AD, and more.",
              direction: "left",
            },
            {
              number: "02",
              title: "Infrastructure Dashboards",
              category: "Resource viewers, cost monitors, health checks for Postgres, Elasticsearch, Redis, Kafka, and your cloud accounts.",
              direction: "right",
            },
            {
              number: "03",
              title: "Provisioning Systems",
              category: "Self-service workspace creation for Databricks, Snowflake, and cloud environments with policy guardrails.",
              direction: "left",
            },
            {
              number: "04",
              title: "Incident Response Tools",
              category: "On-call dashboards, runbook automation, and blast radius analysis for faster MTTR.",
              direction: "right",
            },
            {
              number: "05",
              title: "Compliance & Audit Apps",
              category: "Access reviews, policy compliance tracking, and audit trail systems that work across all your services.",
              direction: "left",
            },
            {
              number: "06",
              title: "Operational Workflows",
              category: "Backup monitoring, deployment approvals, environment promotion, and the other 50 internal tools you need.",
              direction: "right",
            },
          ].map((project, i) => (
            <ProjectCard key={i} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: { number: string; title: string; category: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-6 transition-all duration-700 hover:border-foreground/20 md:py-8 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {project.number}
        </span>
        <div>
          <h3 className="mb-1 font-sans text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">{project.category}</p>
        </div>
      </div>
    </div>
  )
}
