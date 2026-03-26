"use client"

import { useReveal } from "@/hooks/use-reveal"

const categories = [
  {
    title: "Security & Compliance",
    description: "Live security posture, compliance evidence, audit-ready exports.",
    examples: "CrowdStrike · Palo Alto · Vanta · SOC2 · HIPAA · FedRAMP",
    direction: "top",
  },
  {
    title: "Identity & Access",
    description: "Access governance, license utilization, certification workflows.",
    examples: "Okta · SailPoint · Azure AD · CyberArk",
    direction: "right",
  },
  {
    title: "Data & Analytics",
    description: "Governance layers, cost optimization, security scanning.",
    examples: "Databricks · Snowflake · Delta Lake · Unity Catalog",
    direction: "left",
  },
  {
    title: "Cloud Infrastructure",
    description: "Configuration validation, drift detection, provisioning.",
    examples: "AWS · Azure · GCP · CloudTrail · Config",
    direction: "bottom",
  },
  {
    title: "Networking",
    description: "Policy reconciliation, rule translation, unified security views.",
    examples: "Palo Alto · Cisco · Prisma Access · ASA",
    direction: "top",
  },
  {
    title: "Observability",
    description: "Pipeline optimization, alert tuning, cost attribution.",
    examples: "Splunk · Cribl · Datadog · Grafana",
    direction: "right",
  },
  {
    title: "Cost & Licensing",
    description: "Features licensed vs. enforced, shelfware recovery, chargeback.",
    examples: "Microsoft 365 · Cisco DNA · Veeam · Any vendor",
    direction: "left",
  },
  {
    title: "AI & Automation",
    description: "AI governance, PII egress control, model evaluation.",
    examples: "GitHub Copilot · OpenAI · Custom AI · Automation",
    direction: "bottom",
  },
]

export function PlatformCategoriesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Industries
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / Across every platform in your stack, from evaluation to operations.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:gap-x-16 md:gap-y-10 lg:grid-cols-4 lg:gap-x-12">
          {categories.map((cat, i) => (
            <CategoryCard key={i} category={cat} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryCard({
  category,
  index,
  isVisible,
}: {
  category: { title: string; description: string; examples: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (category.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-xl font-light text-foreground md:text-2xl">{category.title}</h3>
      <p className="mb-3 text-sm leading-relaxed text-foreground/80">{category.description}</p>
      <p className="font-mono text-xs text-foreground/40">{category.examples}</p>
    </div>
  )
}
