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
            The Implementation Gap
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / You bought the platform. Here's what actually happens next.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {[
            {
              number: "01",
              title: "Next-Gen Firewall / Prisma Access",
              category: "6 months later you're running in tap mode, not blocking anything, because 400 legacy rules nobody understands still need translating.",
              direction: "left",
            },
            {
              number: "02",
              title: "SailPoint Identity Security Cloud",
              category: "18 months and $2M later, access reviews are still manual because automation never got configured for your actual HR workflows.",
              direction: "right",
            },
            {
              number: "03",
              title: "Databricks Lakehouse Platform",
              category: "12 months later you're paying for Premium tier but running everything in one shared cluster because nobody implemented the governance layer.",
              direction: "left",
            },
            {
              number: "04",
              title: "CrowdStrike Falcon Platform",
              category: "Modules you're paying for were never enabled. Detection policies don't map to your environment. Nobody tracked feature activation after deployment.",
              direction: "right",
            },
            {
              number: "05",
              title: "Okta Identity Cloud",
              category: "Paying for Advanced Server Access for 200 users. 12 have configured it. Access certification workflows don't match how your teams actually work.",
              direction: "left",
            },
            {
              number: "06",
              title: "Every Other Platform",
              category: "The result is always the same. Brutal, expensive, and business-devastating. Only 30% of implementation projects ever succeed.",
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
