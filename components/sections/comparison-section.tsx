"use client"

import { useReveal } from "@/hooks/use-reveal"

export function ComparisonSection() {
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
            Why Panaptico, Not Alternatives
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / Different problem. Different solution.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {[
            {
              criteria: "What It Does",
              panaptico: "Infrastructure operations",
              alternatives: "General coding / Internal tools",
            },
            {
              criteria: "Infrastructure Depth",
              panaptico: "50+ systems with native integration",
              alternatives: "Generic API clients",
            },
            {
              criteria: "Time to Deploy",
              panaptico: "15 minutes",
              alternatives: "Hours/days + security review",
            },
            {
              criteria: "Credential Handling",
              panaptico: "Encrypted, enterprise auth baked in",
              alternatives: "API keys in env vars",
            },
            {
              criteria: "Observability",
              panaptico: "Managed hosting, monitoring included",
              alternatives: "DIY deployment, monitoring",
            },
            {
              criteria: "Cost Per Tool",
              panaptico: "$20",
              alternatives: "$10K+ labor costs",
            },
            {
              criteria: "Maintenance",
              panaptico: "We handle it as APIs evolve",
              alternatives: "You own the maintenance",
            },
          ].map((item, i) => (
            <ComparisonRow
              key={i}
              item={item}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ComparisonRow({
  item,
  index,
  isVisible,
}: {
  item: { criteria: string; panaptico: string; alternatives: string }
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`group grid grid-cols-1 gap-4 border-b border-foreground/10 py-4 transition-all duration-700 hover:border-foreground/20 md:grid-cols-3 md:gap-8 md:py-6 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div>
        <span className="font-mono text-xs text-foreground/40">{item.criteria}</span>
      </div>
      <div>
        <p className="text-sm font-light text-foreground md:text-base">{item.panaptico}</p>
      </div>
      <div>
        <p className="text-sm font-light text-foreground/60 md:text-base">{item.alternatives}</p>
      </div>
    </div>
  )
}
