"use client"

import Image from "next/image"
import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.2)

  const services = [
    {
      title: "Live Discovery",
      description:
        "Connects to your systems in read-only mode. Discovers what actually exists — confirmed facts, inferred assumptions, and flagged gaps — not what was assumed in a kickoff meeting.",
      image: "/product/discovery.png",
      imageAlt: "Panaptico Systems Map showing 47 live mappings across 23 providers with real security findings",
    },
    {
      title: "Implementation Graph",
      description:
        "A continuously maintained model of the implementation itself: systems, dependencies, tasks, owners, approvals, evidence, risks, and health — all synchronized.",
      image: "/product/graph.png",
      imageAlt: "Panaptico system context diagram mapping relationships across AWS, Okta, DataDog, GCP, and more",
    },
    {
      title: "Governed Execution",
      description:
        "Tasks are governed work objects with exit criteria, evidence requirements, named owners, approvers, and audit trails. Completion is proven, not asserted.",
      image: "/product/execution.png",
      imageAlt: "Panaptico implementation checklist with blocked items, dependencies, and evidence tracking",
    },
    {
      title: "Post-Go-Live Continuity",
      description:
        "The blueprint doesn't get filed away. It becomes the living baseline for validation, drift detection, adoption tracking, and operational intelligence.",
      image: "/product/continuity.png",
      imageAlt: "Panaptico completed implementation showing 100% task completion with full audit trail",
    },
  ]

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-screen shrink-0 snap-start items-start px-6 py-24 md:items-center md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            How It Works
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / Intent → Discovery → Graph → Execution → System of Record.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; image: string; imageAlt: string }
  index: number
  isVisible: boolean
}) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`group flex flex-col gap-6 transition-all duration-700 md:flex-row md:items-center md:gap-12 ${
        isEven ? "" : "md:flex-row-reverse"
      } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex-1">
        <div className="mb-3 flex items-center gap-3">
          <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
          <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
        </div>
        <h3 className="mb-3 font-sans text-2xl font-light text-foreground md:text-3xl">{service.title}</h3>
        <p className="max-w-md text-sm leading-relaxed text-foreground/80 md:text-base">{service.description}</p>
      </div>

      <div className="flex-1 overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5 shadow-2xl">
        <Image
          src={service.image}
          alt={service.imageAlt}
          width={800}
          height={500}
          className="h-auto w-full"
          quality={90}
        />
      </div>
    </div>
  )
}
