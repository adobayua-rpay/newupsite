"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Panaptico",
        url: "https://panaptico.com",
        description:
          "Panaptico builds AI-native software for enterprise IT implementation projects. The platform connects to live IT environments, discovers system state, and governs the full implementation lifecycle — from planning and rollout through go-live and post-implementation continuity.",
      },
      {
        "@type": "SoftwareApplication",
        name: "Panaptico",
        url: "https://panaptico.com",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "The implementation runtime for enterprise IT projects. Panaptico connects to your live IT environment, discovers what exists, models the rollout as a unified graph of system state, work state, and organizational state, and governs execution with evidence and approvals. Use cases include system rollouts, migrations, deployments, change management, vendor transitions, and post go-live continuity.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free to get started",
        },
        featureList: [
          "Live system discovery and environment mapping",
          "AI-generated implementation plans from live state",
          "Evidence-gated task execution with approval workflows",
          "Drift detection and continuous reconciliation",
          "Post go-live operational continuity and baseline tracking",
          "Enterprise rollout governance and audit trail",
          "Vendor change management",
          "Migration planning and execution",
        ],
      },
      {
        "@type": "WebSite",
        name: "Panaptico",
        url: "https://panaptico.com",
        description:
          "Panaptico — The Implementation Runtime for Enterprise IT Projects",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <Hero />
      <ProjectIntent />
      <Features />
      <ImplementationGap />
      <UseCases />
      <SecurityTrust />
      <Company />
      <CTA />
      <Footer />
    </div>
  )
}

/* ─── Nav ─── */
const problemsWesolve = {
  Implementation: [
    { name: "IT Project Planning", desc: "Plan from your live environment, not a spreadsheet", href: "/problems/it-project-planning" },
    { name: "System Discovery", desc: "Map your live environment before changing anything", href: "/problems/system-discovery" },
    { name: "Task Generation", desc: "Surface hidden gaps and generate sequenced work", href: "/problems/task-generation" },
    { name: "Governed Execution", desc: "Approvals, evidence, and dependencies enforced at every stage", href: "/problems/governed-execution" },
  ],
  Operations: [
    { name: "Post-Go-Live Continuity", desc: "The implementation graph stays alive after launch", href: "/problems/post-go-live-continuity" },
    { name: "Drift Detection", desc: "Catch config drift before it becomes an incident", href: "/problems/drift-detection" },
    { name: "Adoption Tracking", desc: "Know what you paid for vs what's actually deployed", href: "/problems/adoption-tracking" },
  ],
  Compliance: [
    { name: "Audit Trail", desc: "Complete record of every change, approval, and decision", href: "/problems/audit-trail" },
    { name: "Evidence Collection", desc: "Automated proof of implementation correctness", href: "/problems/evidence-collection" },
    { name: "Vendor Change Management", desc: "Track vendor updates against your implementation", href: "/problems/vendor-change-management" },
  ],
}

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [problemsOpen, setProblemsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProblemsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">
          Panaptico
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {/* Problems We Solve Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProblemsOpen(!problemsOpen)}
              className="flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-white"
            >
              Problems We Solve
              <svg className={`h-3.5 w-3.5 transition-transform ${problemsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {problemsOpen && (
              <div className="absolute left-1/2 top-full mt-4 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#141414] p-6 shadow-2xl" style={{ width: "720px" }}>
                <div className="grid grid-cols-3 gap-6">
                  {Object.entries(problemsWesolve).map(([category, items]) => (
                    <div key={category}>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/30">{category}</p>
                      <div className="space-y-2">
                        {items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block rounded-lg p-2 transition-colors hover:bg-white/5"
                            onClick={() => setProblemsOpen(false)}
                          >
                            <p className="text-sm font-medium text-white/80">{item.name}</p>
                            <p className="mt-0.5 text-xs text-white/40">{item.desc}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {["Features", "Security", "Company", "Contact Us"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
          <Link href="/docs" className="text-sm text-white/50 transition-colors hover:text-white">
            Docs
          </Link>
        </div>

        <a
          href="https://alpha.panaptico.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-white px-6 py-2.5 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90 md:block"
        >
          Try Panaptico Now
        </a>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden" aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0a0a0a] px-6 py-4 md:hidden">
          <p className="py-2 text-xs font-semibold uppercase tracking-widest text-white/30">Problems We Solve</p>
          {Object.entries(problemsWesolve).map(([category, items]) => (
            <div key={category} className="mb-2">
              <p className="py-1 text-xs font-medium text-white/20">{category}</p>
              {items.map((item) => (
                <Link key={item.name} href={item.href} className="block py-1.5 pl-2 text-sm text-white/60">
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
          <div className="my-2 h-px bg-white/10" />
          {["Features", "Security", "Company", "Contact Us"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="block py-2 text-sm text-white/60">
              {item}
            </a>
          ))}
          <Link href="/docs" className="block py-2 text-sm text-white/60">Docs</Link>
          <a
            href="https://alpha.panaptico.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block rounded-full bg-white px-6 py-2.5 text-sm font-medium text-[#0a0a0a]"
          >
            Try Panaptico Now
          </a>
        </div>
      )}
    </nav>
  )
}

/* ─── Hero ─── */
const ROTATING_WORDS = [
  "Deployment",
  "Discovery",
  "Migration",
  "Adoption",
  "Integration",
  "Evaluation",
  "Alignment",
  "Cleanup",
  "Governance",
]

function RotatingWords() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_WORDS.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {ROTATING_WORDS.map((word, i) => (
        <span
          key={word}
          className="absolute left-0 top-0 whitespace-nowrap font-medium text-emerald-400 transition-all duration-500"
          style={{
            opacity: i === index ? 1 : 0,
            transform: i === index ? "translateY(0)" : "translateY(100%)",
          }}
        >
          {word}
        </span>
      ))}
    </>
  )
}

function Hero() {
  const platforms = [
    "Palo Alto Networks", "Cisco", "AWS", "Azure", "Okta", "CrowdStrike",
    "Databricks", "Snowflake", "Oracle", "SAP", "Wiz", "NetApp",
    "Cohesity", "Rubrik", "Docker", "ServiceNow", "Zscaler", "Fortinet",
    "Splunk", "Elastic", "HashiCorp", "VMware", "Cloudflare", "MongoDB",
    "ClickHouse", "Datadog", "SailPoint", "Netskope", "Jamf", "Intune",
  ]

  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden">
      {/* Animated gif background — full bleed */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.gif"
          alt=""
          className="h-full w-full object-cover"
          style={{ filter: "brightness(0.35) saturate(1.2)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 via-[#0a0a0a]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/40" />
      </div>

      {/* Main content — left-aligned, vertically centered */}
      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12">
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-white md:text-7xl lg:text-[5.5rem]">
            Implementation Runtime
            <br />
            <span className="italic font-light">For IT Initiatives</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Panaptico builds AI-native software to help organizations
            accelerate and complete IT projects, initiatives, and decisions.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm">
            <span className="text-white/40">Solve</span>
            <span className="relative inline-block overflow-hidden" style={{ height: "1.4em" }}>
              <RotatingWords />
              {/* invisible longest word to set width */}
              <span className="invisible font-medium">Integration&nbsp;&nbsp;</span>
            </span>
            <span className="text-white/40">Projects</span>
          </div>

          <div className="mt-10">
            <a
              href="https://alpha.panaptico.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-white/20 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#0a0a0a] transition-all hover:shadow-lg hover:shadow-white/10"
            >
              Try Panaptico Now
            </a>
          </div>
        </div>
      </div>

      {/* Works With — pinned at bottom */}
      <div className="relative z-10 border-t border-white/[0.08] px-8 py-6 md:px-12 lg:px-16">
        <div className="flex items-center gap-8 overflow-hidden">
          <span className="shrink-0 text-xs font-medium text-white/40">Works With:</span>
          <div className="relative flex-1 overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
            <div className="flex animate-ticker gap-12 whitespace-nowrap">
              {[...platforms, ...platforms].map((name, i) => (
                <span
                  key={i}
                  className="inline-block text-sm font-semibold tracking-tight text-white/25"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Project Intent ─── */
function ProjectIntent() {
  const [activeTab, setActiveTab] = useState<"integration" | "deployment" | "migration" | "rollout" | "evaluation">("integration")
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [rotationIndex, setRotationIndex] = useState(0)

  const tabs = {
    integration: {
      projects: [
        {
          title: "Configure Okta Device Trust and Endpoint Integration",
          content: "Our goal is to plan out the integration of Okta Device Trust with our endpoint management platforms — Jamf, Intune, and VMware Workspace ONE — so that authentication decisions can factor in device compliance posture.",
          provider: "Okta",
        },
        {
          title: "Integrate Snowflake Data Sharing with Databricks Unity Catalog",
          content: "We want to plan how to connect Snowflake Secure Data Sharing with Databricks Unity Catalog — the goal is unified access controls, lineage tracking, and audit policies across both data platforms.",
          provider: "Snowflake",
        },
        {
          title: "Connect SAP S/4HANA with AWS Identity Center for Federated Access",
          content: "We need to scope out SAML-based federation between SAP S/4HANA and AWS IAM Identity Center — the objective is managing role assignments, access reviews, and provisioning from a single identity plane.",
          provider: "SAP",
        },
        {
          title: "Integrate Cisco Meraki with CrowdStrike for Network-Aware Threat Response",
          content: "We're looking to plan the integration between Cisco Meraki network telemetry and CrowdStrike Falcon detections — the goal is automated quarantine policies that can isolate compromised endpoints at the network layer.",
          provider: "Cisco",
        },
        {
          title: "Integrate Rubrik Backup Policies with AWS Organizations",
          content: "We need to map out how Rubrik SLA domains should align with our AWS organizational units — making sure backup coverage, retention policies, and recovery SLAs match our multi-account structure.",
          provider: "Rubrik",
        },
      ],
    },
    deployment: {
      projects: [
        {
          title: "Plan CrowdStrike Falcon Rollout Across Corporate Endpoints",
          content: "We need to plan the rollout of CrowdStrike Falcon across our endpoint estate — covering sensor deployment strategy, prevention policy configuration, coverage validation, and operational ownership handoff.",
          provider: "CrowdStrike",
        },
        {
          title: "Plan Databricks Unity Catalog Governance Across Workspaces",
          content: "Our goal is to scope the Unity Catalog rollout across all Databricks workspaces — we need to figure out metastore bindings, catalog-level permissions, external locations, and lineage tracking before opening access.",
          provider: "Databricks",
        },
        {
          title: "Scope ClickHouse Cloud for Real-Time Analytics",
          content: "We want to plan the architecture for ClickHouse Cloud — covering ingestion from Kafka and S3, materialized views for real-time aggregation, and the access controls and query governance model for analytics teams.",
          provider: "ClickHouse",
        },
        {
          title: "Plan AWS Control Tower for New Business Unit Accounts",
          content: "We need to scope out AWS Control Tower landing zones for a new business unit — including guardrails, SCPs, SSO integration, centralized logging, and the account vending workflow.",
          provider: "AWS",
        },
      ],
    },
    migration: {
      projects: [
        {
          title: "Plan Migration from Legacy Web Proxy to Netskope SSE",
          content: "We need to plan the transition from our on-premises web proxy infrastructure to Netskope Security Service Edge — covering policy translation, traffic re-routing, PAC file updates, user migration waves, and decommission planning.",
          provider: "Netskope",
        },
        {
          title: "Scope SQL Server to Snowflake Migration",
          content: "Our goal is to plan the migration of data warehouse workloads from on-prem SQL Server to Snowflake on AWS — we need to understand schema conversion, stored procedure refactoring, access migration, and how to validate results.",
          provider: "Snowflake",
        },
        {
          title: "Plan Cisco ASA to Palo Alto NGFW Migration",
          content: "We need to scope the migration of firewall rules, NAT policies, and VPN configurations from Cisco ASA to Palo Alto NGFW — the goal is understanding rule translation, traffic flow validation, and application-ID coverage before cutover.",
          provider: "Cisco",
        },
      ],
    },
    rollout: {
      projects: [
        {
          title: "Plan Phased Rollout of Okta Workforce Identity Across Business Units",
          content: "We need to plan a phased rollout of Okta Workforce Identity across 12 business units — sequencing by criticality, mapping existing AD groups, planning MFA enrollment waves, and defining rollback triggers per phase.",
          provider: "Okta",
        },
        {
          title: "Plan Zero Trust Network Rollout with Zscaler",
          content: "Our goal is to plan the phased rollout of Zscaler Internet Access and Private Access — covering user segmentation, policy staging, PAC file removal, and validation gates before each wave goes live.",
          provider: "Zscaler",
        },
        {
          title: "Plan ServiceNow ITSM Rollout Across Regional IT Teams",
          content: "We need to plan the rollout of ServiceNow ITSM modules across 8 regional IT teams — covering workflow customization per region, training sequencing, data migration from legacy ticketing, and adoption tracking.",
          provider: "ServiceNow",
        },
      ],
    },
    evaluation: {
      projects: [
        {
          title: "Evaluate GitHub Copilot for Engineering Organization",
          content: "Assess the right GitHub Copilot package, seat count, and expected return on investment based on actual engineering team structure, language mix, workflow patterns, and productivity baselines.",
          provider: "GitHub",
        },
        {
          title: "Evaluate Datadog vs Splunk for Observability Consolidation",
          content: "We need to evaluate whether consolidating on Datadog or Splunk makes sense — comparing log volume pricing, APM capabilities, infrastructure monitoring coverage, and integration with our existing AWS and Kubernetes stack.",
          provider: "Datadog",
        },
        {
          title: "Evaluate Wiz vs Orca for Cloud Security Posture Management",
          content: "Our goal is to assess Wiz and Orca against our multi-cloud environment — evaluating agentless scanning coverage, risk prioritization accuracy, compliance framework support, and integration with our existing SIEM.",
          provider: "Wiz",
        },
      ],
    },
  }

  const currentProjects = tabs[activeTab].projects
  const current = currentProjects[rotationIndex % currentProjects.length]

  useEffect(() => {
    setRotationIndex(0)
  }, [activeTab])

  useEffect(() => {
    setDisplayedText("")
    setIsTyping(true)
    let i = 0
    const text = current.content
    const typeInterval = setInterval(() => {
      i++
      setDisplayedText(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(typeInterval)
        setIsTyping(false)
      }
    }, 18)
    return () => clearInterval(typeInterval)
  }, [activeTab, rotationIndex])

  useEffect(() => {
    if (isTyping) return
    const pause = setTimeout(() => {
      setRotationIndex((prev) => prev + 1)
    }, 3000)
    return () => clearTimeout(pause)
  }, [isTyping])

  const handleTabChange = (tab: "integration" | "deployment" | "migration" | "rollout" | "evaluation") => {
    setActiveTab(tab)
  }

  return (
    <section className="relative px-6 py-24 md:py-32 md:px-10 lg:px-12">
      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Section header — left-aligned */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/30">
            Define The Work
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            IT Projects That Start
            <br />
            <span className="italic font-light text-white/70">With Intent</span>
          </h2>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm md:p-10">
          {/* Project title */}
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">{current.title}</h3>
            </div>
            <span className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/40">
              {current.provider}
            </span>
          </div>

          {/* Typewriter content */}
          <div className="mb-8 min-h-[80px] border-l-2 border-white/10 pl-6">
            <p className="text-base leading-relaxed text-white/50 md:text-lg">
              {displayedText}
              {isTyping && <span className="inline-block w-[2px] h-[1.1em] bg-emerald-400 ml-[2px] animate-pulse align-middle" />}
            </p>
          </div>

          {/* Divider */}
          <div className="mb-6 h-px bg-white/[0.06]" />

          {/* Tab pills + send */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {([
                { key: "integration", label: "Integration" },
                { key: "deployment", label: "New Deployment" },
                { key: "migration", label: "Migration" },
                { key: "rollout", label: "Rollout" },
                { key: "evaluation", label: "Evaluation" },
              ] as const).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                    activeTab === tab.key
                      ? "bg-white text-[#0a0a0a]"
                      : "border border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 8h12M10 4l4 4-4 4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Features (Dark sticky scroll) ─── */
function Features() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  const steps = [
    {
      num: "01",
      label: "Discovery",
      title: "Stay ahead and in sync of relevant systems.",
      description:
        "Panaptico keeps relevant systems and resources to your IT project in sync making sure you always have a complete view of systems status, changes and blockers.",
      image: "/product/SyncMain.png",
      imageAlt: "Panaptico Systems Map showing 47 live mappings across 23 providers with real security findings",
    },
    {
      num: "02",
      label: "Implementation Graph",
      title: "One live model of the entire rollout.",
      description:
        "A continuously maintained model of the implementation itself: systems, dependencies, tasks, owners, approvals, evidence, risks, and health — all synchronized.",
      image: "/product/Sync3.png",
      imageAlt: "Panaptico system context diagram mapping relationships across AWS, Okta, DataDog, GCP",
    },
    {
      num: "03",
      label: "Governed Execution",
      title: "Complete Overview",
      description:
        "Live project summary, momentum, progress, risks, lifecycle and more — automatically updated and always accurate, so you can focus on execution instead of status updates.",
      image: "/product/Active.png",
      imageAlt: "Panaptico implementation checklist with blocked items, dependencies, and evidence tracking",
    },
    {
      num: "04",
      label: "Task Execution",
      title: "Surface what you'd miss. Execute what matters.",
      description:
        "Panaptico analyzes your live environment, surfaces hidden gaps you'd miss, and generates phased tasks to close them — then helps you execute each one to completion.",
      image: "/product/tasks.png",
      imageAlt: "Panaptico phased implementation checklist with 6 phases, progress bars, and exit criteria for a Datadog SIEM rollout",
    },
    {
      num: "05",
      label: "Post-Go-Live",
      title: "The blueprint never gets filed away.",
      description:
        "It becomes the living baseline for validation, drift detection, adoption tracking, and operational intelligence — long after the consultants leave.",
      image: "/product/continuity.png",
      imageAlt: "Panaptico completed implementation showing 100% task completion with full audit trail",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const refs = stepRefs.current.filter(Boolean)
      if (refs.length === 0) return

      const viewportCenter = window.innerHeight * 0.45

      let closestIndex = 0
      let closestDistance = Infinity

      refs.forEach((ref, i) => {
        if (!ref) return
        const rect = ref.getBoundingClientRect()
        const elementCenter = rect.top + rect.height / 2
        const distance = Math.abs(elementCenter - viewportCenter)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = i
        }
      })

      setActiveStep(closestIndex)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="features" ref={sectionRef} className="relative bg-[#0a0a0a] text-white">
      {/* Subtle top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient glow — follows active step color */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] transition-opacity duration-1000"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 65% 50%, white, transparent)`,
        }}
      />

      {/* Section header */}
      <div className="px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-white/30">
            How It Works
          </p>
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl">
            The Implementation Runtime
            <br />
            <span className="italic font-light text-white/50">for your IT stack.</span>
          </h2>
        </div>
      </div>

      {/* Two-column sticky scroll */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32 lg:px-12">
        <div className="md:flex md:gap-16 lg:gap-20">
          {/* Left: scrolling text steps */}
          <div className="md:w-[38%] md:shrink-0">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => { stepRefs.current[i] = el }}
                className="group relative py-16 transition-all duration-500 md:min-h-[80vh] md:flex md:flex-col md:justify-center"
              >
                {/* Vertical progress line */}
                <div className="absolute left-0 top-0 bottom-0 w-px">
                  <div
                    className="absolute inset-0 transition-all duration-500"
                    style={{
                      background: activeStep === i
                        ? "linear-gradient(to bottom, transparent, rgba(255,255,255,0.3) 20%, rgba(255,255,255,0.3) 80%, transparent)"
                        : "linear-gradient(to bottom, transparent, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0.06) 80%, transparent)",
                    }}
                  />
                </div>

                <div className="pl-8">
                  {/* Step number + label */}
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={`font-mono text-xs tracking-wider transition-colors duration-500 ${
                        activeStep === i ? "text-white/60" : "text-white/10"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div
                      className={`h-px transition-all duration-500 ${
                        activeStep === i ? "w-8 bg-white/30" : "w-4 bg-white/10"
                      }`}
                    />
                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-500 ${
                        activeStep === i ? "text-white/50" : "text-white/10"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`mb-4 text-2xl font-bold leading-snug tracking-tight transition-all duration-500 md:text-[1.75rem] ${
                      activeStep === i
                        ? "text-white translate-x-0"
                        : "text-white/15 -translate-x-1"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`max-w-md text-[0.95rem] leading-relaxed transition-all duration-500 ${
                      activeStep === i
                        ? "text-white/45 translate-x-0"
                        : "text-white/8 -translate-x-1"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Mobile: inline image */}
                <div
                  className={`mt-8 pl-8 transition-all duration-500 md:hidden ${
                    activeStep === i ? "opacity-100 translate-y-0" : "opacity-30 translate-y-2"
                  }`}
                >
                  <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#111] shadow-2xl shadow-black/50">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      width={800}
                      height={500}
                      className="h-auto w-full"
                      quality={90}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: sticky image panel */}
          <div className="hidden md:block md:flex-1">
            <div className="sticky top-0 flex h-screen items-center">
              <div className="relative w-full">
                {/* Ambient glow behind the image */}
                <div
                  className="absolute -inset-8 rounded-3xl opacity-20 blur-3xl transition-opacity duration-700"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(255,255,255,0.06), transparent 70%)",
                  }}
                />

                {/* Image container */}
                <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0f0f0f] shadow-[0_0_80px_-20px_rgba(0,0,0,0.8)]">
                  {/* Top bar — fake browser chrome */}
                  <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#0f0f0f] px-4 py-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <div className="ml-4 h-5 flex-1 rounded-md bg-white/[0.04]" />
                  </div>

                  {/* Image stack */}
                  <div className="relative">
                    {steps.map((step, i) => (
                      <div
                        key={i}
                        className={`transition-all duration-700 ease-out ${
                          activeStep === i
                            ? "relative opacity-100 scale-100"
                            : "absolute inset-0 opacity-0 scale-[1.02]"
                        }`}
                      >
                        <Image
                          src={step.image}
                          alt={step.imageAlt}
                          width={1600}
                          height={1000}
                          className="h-auto w-full"
                          quality={95}
                          sizes="60vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step counter below image */}
                <div className="mt-6 flex items-center justify-center gap-2">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        activeStep === i
                          ? "w-8 bg-white/40"
                          : "w-2 bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── The Implementation Gap ─── */
function GapStageVisual({ stage }: { stage: number }) {
  if (stage === 0) return (
    <div className="space-y-3" style={{ animation: "fadeSlideIn 0.5s ease-out" }}>
      {/* Discovery Doc */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
        <div className="px-4 py-2 bg-white/[0.03] border-b border-white/[0.06] flex items-center justify-between">
          <span className="text-[0.7rem] font-semibold text-white/50">Discovery_Assessment_v3_FINAL.xlsx</span>
          <span className="text-[0.6rem] text-white/20">Last edited: 6 weeks ago</span>
        </div>
        <div className="p-4 space-y-2.5">
          {[
            { name: "SAP S/4HANA", status: "Assumed live", color: "bg-white/20" },
            { name: "ServiceNow ITSM", status: "Not verified", color: "bg-white/20" },
            { name: "Azure AD (Entra)", status: "Guessed from org chart", color: "bg-white/20" },
            { name: "Workday HCM", status: "Asked in workshop", color: "bg-white/20" },
          ].map((s) => (
            <div key={s.name} className="flex items-center justify-between">
              <span className="text-xs text-white/40">{s.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-[0.65rem] text-white/25">{s.status}</span>
                <div className={`h-2 w-2 rounded-full ${s.color}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Static plan */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[0.7rem] font-semibold text-white/50">Dependencies</span>
          <span className="text-[0.6rem] text-white/15">0 verified</span>
        </div>
        <div className="space-y-2">
          {["SSO → Workday", "Data migration → SAP cutover", "Network ACLs → Azure tenant"].map((d) => (
            <div key={d} className="flex items-center gap-2">
              <div className="h-px flex-1 bg-white/[0.06]" style={{ borderTop: "1px dashed rgba(255,255,255,0.1)" }} />
              <span className="text-[0.65rem] text-white/20 shrink-0">{d}</span>
              <span className="text-[0.55rem] px-1.5 py-0.5 rounded bg-white/[0.04] text-white/15">unverified</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
  if (stage === 1) return (
    <div className="space-y-3" style={{ animation: "fadeSlideIn 0.5s ease-out" }}>
      {/* Drift detected */}
      <div className="rounded-xl border border-amber-400/10 bg-amber-400/[0.02] overflow-hidden">
        <div className="px-4 py-2 bg-amber-400/[0.04] border-b border-amber-400/10 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-amber-400/80 animate-pulse" />
          <span className="text-[0.7rem] font-semibold text-amber-400/70">Environment Drift Detected</span>
        </div>
        <div className="p-4 space-y-3">
          {[
            { change: "ServiceNow upgraded to Xanadu", planned: "Tokyo", found: "Xanadu", ago: "2 weeks ago" },
            { change: "Azure AD renamed to Entra ID", planned: "Azure AD", found: "Entra ID", ago: "Silently" },
            { change: "SAP transport blocked", planned: "Open", found: "Locked by basis team", ago: "Unknown" },
          ].map((c) => (
            <div key={c.change} className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-3">
              <p className="text-xs text-white/50 mb-1.5">{c.change}</p>
              <div className="flex gap-4 text-[0.65rem]">
                <div><span className="text-white/20">Plan says:</span> <span className="text-white/35">{c.planned}</span></div>
                <div><span className="text-white/20">Reality:</span> <span className="text-amber-400/60">{c.found}</span></div>
              </div>
              <p className="text-[0.6rem] text-white/15 mt-1">{c.ago}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Frozen plan */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 flex items-center justify-between">
        <div>
          <span className="text-[0.7rem] font-semibold text-white/40">Implementation Plan</span>
          <p className="text-[0.6rem] text-white/20 mt-0.5">Last updated: Day 0</p>
        </div>
        <span className="text-[0.6rem] px-2 py-1 rounded-full border border-white/[0.08] text-white/25">Frozen</span>
      </div>
    </div>
  )
  if (stage === 2) return (
    <div className="space-y-3" style={{ animation: "fadeSlideIn 0.5s ease-out" }}>
      {/* Fragmented tools */}
      <div className="rounded-xl border border-amber-400/10 bg-white/[0.02] overflow-hidden">
        <div className="px-4 py-2 bg-white/[0.03] border-b border-white/[0.06]">
          <span className="text-[0.7rem] font-semibold text-white/50">Where&apos;s the work?</span>
        </div>
        <div className="p-4 space-y-2.5">
          {[
            { tool: "Jira", items: "47 tickets", note: "3 different projects", status: "bg-blue-400/40" },
            { tool: "Slack", items: "#sap-migration", note: "1,200+ messages", status: "bg-purple-400/40" },
            { tool: "SharePoint", items: "Migration Evidence/", note: "Last upload: 3 weeks ago", status: "bg-amber-400/40" },
            { tool: "Email", items: "Re: Re: Fw: cutover plan", note: "12 people in thread", status: "bg-red-400/30" },
            { tool: "Consultant laptop", items: "Final_runbook_v7.docx", note: "Not shared", status: "bg-red-400/30" },
          ].map((t) => (
            <div key={t.tool} className="flex items-center gap-3">
              <div className={`h-2 w-2 rounded-full ${t.status} shrink-0`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/50 font-medium">{t.tool}</span>
                  <span className="text-[0.65rem] text-white/25">{t.items}</span>
                </div>
                <p className="text-[0.6rem] text-white/15 truncate">{t.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Evidence gap */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[0.7rem] font-semibold text-white/40">Evidence Coverage</span>
          <span className="text-[0.65rem] text-amber-400/60">23%</span>
        </div>
        <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
          <div className="h-full rounded-full bg-amber-400/40" style={{ width: "23%" }} />
        </div>
        <div className="flex justify-between mt-2 text-[0.55rem] text-white/15">
          <span>38 tasks with evidence</span>
          <span>127 tasks without</span>
        </div>
      </div>
    </div>
  )
  if (stage === 3) return (
    <div className="space-y-3" style={{ animation: "fadeSlideIn 0.5s ease-out" }}>
      {/* Handoff doc */}
      <div className="rounded-xl border border-red-400/10 bg-red-400/[0.02] overflow-hidden">
        <div className="px-4 py-2 bg-red-400/[0.04] border-b border-red-400/10 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-400/80" />
          <span className="text-[0.7rem] font-semibold text-red-400/70">Go-Live Readiness</span>
        </div>
        <div className="p-4 space-y-2.5">
          {[
            { item: "Data migration validated", status: "Partial", color: "text-amber-400/60" },
            { item: "Feature activation confirmed", status: "8 of 23", color: "text-red-400/60" },
            { item: "Rollback plan tested", status: "Not tested", color: "text-red-400/60" },
            { item: "Ops team trained", status: "Scheduled post-launch", color: "text-red-400/60" },
            { item: "Runbook handed off", status: "PDF emailed", color: "text-amber-400/60" },
          ].map((r) => (
            <div key={r.item} className="flex items-center justify-between">
              <span className="text-xs text-white/40">{r.item}</span>
              <span className={`text-[0.65rem] ${r.color}`}>{r.status}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Knowledge gap */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
        <span className="text-[0.7rem] font-semibold text-white/40">Knowledge Distribution</span>
        <div className="mt-3 space-y-2">
          {[
            { who: "Lead consultant (leaving)", pct: 72 },
            { who: "Internal PM", pct: 18 },
            { who: "Ops team (inheriting)", pct: 6 },
          ].map((k) => (
            <div key={k.who}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[0.65rem] text-white/30">{k.who}</span>
                <span className="text-[0.65rem] text-white/20">{k.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <div
                  className={`h-full rounded-full ${k.pct > 50 ? "bg-red-400/50" : k.pct > 15 ? "bg-amber-400/30" : "bg-white/10"}`}
                  style={{ width: `${k.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
  // Stage 4 — Post Go-Live
  return (
    <div className="space-y-3" style={{ animation: "fadeSlideIn 0.5s ease-out" }}>
      {/* Drift */}
      <div className="rounded-xl border border-red-400/10 bg-red-400/[0.02] overflow-hidden">
        <div className="px-4 py-2 bg-red-400/[0.04] border-b border-red-400/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-400/80 animate-pulse" />
            <span className="text-[0.7rem] font-semibold text-red-400/70">Undetected Drift</span>
          </div>
          <span className="text-[0.6rem] text-red-400/40">No baseline to compare against</span>
        </div>
        <div className="p-4 space-y-2.5">
          {[
            { event: "Vendor pushed config update", impact: "Broke SSO flow", detected: "User reported (Day 12)" },
            { event: "License tier downgraded", impact: "API limits hit", detected: "Ops found manually (Day 34)" },
            { event: "Integration endpoint deprecated", impact: "Silent data loss", detected: "Not yet detected" },
          ].map((d) => (
            <div key={d.event} className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-3">
              <p className="text-xs text-white/50">{d.event}</p>
              <div className="flex gap-4 mt-1.5 text-[0.65rem]">
                <div><span className="text-white/20">Impact:</span> <span className="text-red-400/50">{d.impact}</span></div>
              </div>
              <p className="text-[0.6rem] text-white/15 mt-1">{d.detected}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Adoption */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[0.7rem] font-semibold text-white/40">Feature Adoption</span>
          <span className="text-[0.6rem] text-white/15">Nobody is measuring this</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            { feature: "Core workflow", pct: "??%" },
            { feature: "Reporting", pct: "??%" },
            { feature: "Integrations", pct: "??%" },
            { feature: "Automation", pct: "??%" },
          ].map((f) => (
            <div key={f.feature} className="text-center">
              <div className="text-lg font-bold text-white/15">{f.pct}</div>
              <div className="text-[0.55rem] text-white/20 mt-0.5">{f.feature}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const GAP_STAGES = [
  {
    time: "Day 0",
    title: "Nobody looked at the environment first",
    description: "Consultants write a plan from a slide deck. No one connects to the live systems. Dependencies, ownership, access models — all guessed. The rollout is already wrong before it starts.",
  },
  {
    time: "Month 2",
    title: "The plan and the environment diverge",
    description: "Vendor pushes an upgrade. Azure AD becomes Entra ID. A transport gets locked by the basis team. The plan still says everything is fine — because nobody is reconciling it against reality.",
  },
  {
    time: "Month 6",
    title: "The work is everywhere and nowhere",
    description: "47 Jira tickets across 3 projects. A Slack channel with 1,200 messages. A SharePoint folder nobody's touched in weeks. A runbook on someone's laptop. Evidence isn't linked to tasks. Approvals aren't versioned.",
  },
  {
    time: "Go-Live",
    title: "The handoff is a PDF attached to an email",
    description: "8 of 23 features confirmed activated. Rollback plan never tested. The ops team is scheduled for training — after launch. 72% of the implementation knowledge walks out with the lead consultant.",
  },
  {
    time: "Post Go-Live",
    title: "No baseline. No way to detect what changed.",
    description: "A vendor config update breaks SSO on day 12. An API limit gets hit on day 34 because someone downgraded the license tier. An integration endpoint is deprecated — silent data loss. Nobody knows what 'correct' looks like anymore.",
  },
]

function ImplementationGap() {
  const [activeStage, setActiveStage] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [contentKey, setContentKey] = useState(0)
  const [countedValue, setCountedValue] = useState(0)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setHasBeenVisible(true)
          setIsAutoPlaying(true)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasBeenVisible])

  useEffect(() => {
    if (!isAutoPlaying) return
    autoPlayRef.current = setTimeout(() => {
      if (activeStage < GAP_STAGES.length - 1) {
        setActiveStage((s) => s + 1)
        setContentKey((k) => k + 1)
      } else {
        setIsAutoPlaying(false)
      }
    }, 4000)
    return () => { if (autoPlayRef.current) clearTimeout(autoPlayRef.current) }
  }, [isAutoPlaying, activeStage])

  useEffect(() => {
    if (activeStage !== GAP_STAGES.length - 1) { setCountedValue(0); return }
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1200, 1)
      setCountedValue(Math.round((1 - Math.pow(1 - p, 3)) * 71))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [activeStage])

  const handleManualSelect = (i: number) => {
    setIsAutoPlaying(false)
    setActiveStage(i)
    setContentKey((prev) => prev + 1)
  }

  const current = GAP_STAGES[activeStage]
  const stageColor = activeStage <= 0 ? "white" : activeStage <= 2 ? "amber" : "red"

  return (
    <section ref={sectionRef} className="relative px-6 py-24 md:py-32 md:px-10 lg:px-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/30">
            The Implementation Gap
          </p>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            You bought the platform.
            <br />
            <span className="italic font-light text-white/50">Here&apos;s what actually happened.</span>
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-10">
          {/* Timeline */}
          <div className="mb-10">
            <div className="relative flex items-center justify-between">
              <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/[0.08]" />
              <div
                className="absolute left-0 top-1/2 h-px -translate-y-1/2 transition-all duration-700 ease-out"
                style={{
                  width: `${(activeStage / (GAP_STAGES.length - 1)) * 100}%`,
                  background: activeStage <= 0
                    ? "rgba(255,255,255,0.2)"
                    : activeStage <= 2
                    ? "rgba(251,191,36,0.4)"
                    : "rgba(248,113,113,0.4)",
                }}
              />

              {GAP_STAGES.map((stage, i) => (
                <button
                  key={i}
                  onClick={() => handleManualSelect(i)}
                  className="group relative z-10 flex flex-col items-center"
                >
                  <div
                    className={`h-3.5 w-3.5 rounded-full border-2 transition-all duration-500 ${
                      i <= activeStage
                        ? i <= 0
                          ? "border-white/40 bg-white/20"
                          : i <= 2
                          ? "border-amber-400/60 bg-amber-400/30"
                          : "border-red-400/60 bg-red-400/30"
                        : "border-white/10 bg-[#0a0a0a]"
                    } ${activeStage === i ? "scale-150" : "group-hover:scale-110"}`}
                  />
                  {activeStage === i && (
                    <div
                      className={`absolute top-0 h-3.5 w-3.5 rounded-full animate-ping ${
                        i <= 0 ? "bg-white/10" : i <= 2 ? "bg-amber-400/10" : "bg-red-400/15"
                      }`}
                    />
                  )}
                  <span
                    className={`mt-3 whitespace-nowrap text-xs font-medium transition-all duration-500 ${
                      activeStage === i
                        ? "text-white/70"
                        : i < activeStage
                        ? "text-white/30"
                        : "text-white/15 group-hover:text-white/40"
                    }`}
                  >
                    {stage.time}
                  </span>
                </button>
              ))}
            </div>

            {isAutoPlaying && (
              <div className="mt-4 flex justify-center">
                <div className="h-0.5 w-24 overflow-hidden rounded-full bg-white/[0.06]">
                  <div className="h-full rounded-full bg-white/20" style={{ animation: "fillBar 4s linear" }} />
                </div>
              </div>
            )}
          </div>

          {/* Content — text left, rich visual right */}
          <div key={contentKey} className="lg:flex lg:gap-12" style={{ animation: "fadeSlideIn 0.4s ease-out" }}>
            <div className="mb-8 lg:mb-0 lg:w-[340px] lg:shrink-0">
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
                {current.title}
              </h3>
              <p className="text-[0.95rem] leading-relaxed text-white/40">
                {current.description}
              </p>
            </div>

            <div className="lg:flex-1 min-w-0">
              <GapStageVisual stage={activeStage} />
            </div>
          </div>

          {/* 71% stat */}
          <div
            className={`overflow-hidden transition-all duration-700 ease-out ${
              activeStage === GAP_STAGES.length - 1
                ? "mt-10 max-h-40 opacity-100"
                : "mt-0 max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-white/[0.06] pt-8 text-center">
              <p className="text-5xl font-bold tracking-tight text-white/80 md:text-6xl">
                {countedValue}%
              </p>
              <p className="mt-2 text-sm text-white/30">
                of enterprise implementations underperform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Use Cases ─── */
const CASE_CATEGORIES = ["Migration", "New Deployment", "Integration", "Rollout", "Evaluation", "Post-Go-Live"]

const CASE_STEPS = [
  {
    title: "Connect",
    description: "Connect the real systems in scope and Panaptico discovers your live environment before a single task is written.",
  },
  {
    title: "Plan",
    description: "A live implementation graph is built from your environment — every task sequenced against real dependencies, real owners, and real system state.",
  },
  {
    title: "Execute",
    description: "Governed execution with evidence, approvals, and dependencies enforced at every stage. Every change is bounded, traceable, and auditable.",
  },
  {
    title: "Operate",
    description: "After go-live, the implementation graph stays alive. Drift detection, adoption tracking, and operational intelligence — permanently.",
  },
]

/* Mock UI card visuals per step — rendered as CSS, not text lists */
function StepVisual({ step }: { step: number }) {
  if (step === 0) return (
    <div className="grid grid-cols-3 gap-3 h-full">
      {/* Discovery card */}
      <div className="rounded-xl border border-white/[0.08] bg-[#111] overflow-hidden flex flex-col">
        <div className="bg-emerald-500/20 border-b border-emerald-500/20 px-4 py-2.5">
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-emerald-400">Live Discovery</p>
        </div>
        <div className="p-4 flex-1 space-y-3">
          {["AWS", "Okta", "CrowdStrike", "Databricks"].map((p) => (
            <div key={p} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-md bg-white/[0.06] flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-white/10" />
                </div>
                <span className="text-[0.7rem] font-medium text-white/50">{p}</span>
              </div>
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            </div>
          ))}
          <div className="pt-2 border-t border-white/[0.06]">
            <div className="flex justify-between text-[0.6rem] text-white/25 mb-1"><span>Coverage</span><span>23/23</span></div>
            <div className="h-1.5 rounded-full bg-white/[0.06]"><div className="h-full w-full rounded-full bg-emerald-400/40" /></div>
          </div>
        </div>
      </div>
      {/* Arrow */}
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="rounded-xl border border-white/[0.08] bg-[#111] overflow-hidden flex-1 w-full flex flex-col">
          <div className="bg-blue-500/15 border-b border-blue-500/15 px-4 py-2.5">
            <p className="text-[0.65rem] font-bold uppercase tracking-widest text-blue-400">Dependencies</p>
          </div>
          <div className="p-4 flex-1">
            {/* Mini dependency graph */}
            <div className="space-y-2">
              {[72, 55, 88, 40].map((w, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-1.5 rounded-full bg-blue-400/20" style={{ width: `${w}%` }} />
                  <div className="h-3 w-3 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="h-1 w-1 rounded-full bg-white/20" />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[0.6rem] text-white/20">47 systems mapped</p>
          </div>
        </div>
      </div>
      {/* Ownership */}
      <div className="rounded-xl border border-white/[0.08] bg-[#111] overflow-hidden flex flex-col">
        <div className="bg-violet-500/15 border-b border-violet-500/15 px-4 py-2.5">
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-violet-400">Ownership</p>
        </div>
        <div className="p-4 flex-1 space-y-3">
          {[{ name: "Platform", count: 8 }, { name: "Security", count: 5 }, { name: "Data", count: 4 }, { name: "Network", count: 6 }].map((t) => (
            <div key={t.name} className="flex items-center justify-between">
              <span className="text-[0.7rem] text-white/40">{t.name}</span>
              <div className="flex -space-x-1">
                {Array.from({ length: Math.min(t.count, 3) }).map((_, i) => (
                  <div key={i} className="h-4 w-4 rounded-full bg-white/[0.08] border border-[#111]" />
                ))}
                {t.count > 3 && <span className="ml-1 text-[0.6rem] text-white/20">+{t.count - 3}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  if (step === 1) return (
    <div className="grid grid-cols-3 gap-3 h-full">
      <div className="rounded-xl border border-white/[0.08] bg-[#111] overflow-hidden flex flex-col">
        <div className="bg-amber-500/15 border-b border-amber-500/15 px-4 py-2.5">
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-amber-400">Phases</p>
        </div>
        <div className="p-4 flex-1 space-y-2">
          {["Foundation", "Identity", "Network", "Security", "Data", "Validation"].map((ph, i) => (
            <div key={ph} className="flex items-center gap-2">
              <span className="font-mono text-[0.55rem] text-white/15 w-3">{i + 1}</span>
              <div className="flex-1 h-5 rounded-md bg-white/[0.04] flex items-center px-2">
                <span className="text-[0.6rem] text-white/35">{ph}</span>
              </div>
              <div className={`h-1.5 w-1.5 rounded-full ${i < 2 ? "bg-emerald-400/60" : i < 4 ? "bg-amber-400/50" : "bg-white/10"}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-white/[0.08] bg-[#111] overflow-hidden flex flex-col">
        <div className="bg-emerald-500/15 border-b border-emerald-500/15 px-4 py-2.5">
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-emerald-400">Tasks</p>
        </div>
        <div className="p-4 flex-1">
          <div className="flex justify-between text-[0.6rem] text-white/25 mb-2"><span>Progress</span><span>14/38</span></div>
          <div className="h-2 rounded-full bg-white/[0.06] mb-4"><div className="h-full rounded-full bg-emerald-400/50" style={{ width: "37%" }} /></div>
          {[{ t: "Configure SSO federation", s: "done" }, { t: "Map access policies", s: "active" }, { t: "Set up MFA enrollment", s: "blocked" }, { t: "Validate identity sync", s: "pending" }].map((task) => (
            <div key={task.t} className="flex items-center gap-2 py-1.5">
              <div className={`h-2 w-2 rounded-sm ${task.s === "done" ? "bg-emerald-400/60" : task.s === "active" ? "bg-blue-400/60" : task.s === "blocked" ? "bg-red-400/50" : "bg-white/10"}`} />
              <span className="text-[0.6rem] text-white/30 truncate">{task.t}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-white/[0.08] bg-[#111] overflow-hidden flex flex-col">
        <div className="bg-red-500/15 border-b border-red-500/15 px-4 py-2.5">
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-red-400">Blockers</p>
        </div>
        <div className="p-4 flex-1 space-y-3">
          {[{ b: "Legacy firewall rules", sev: "High" }, { b: "Missing API credentials", sev: "Med" }, { b: "Compliance review pending", sev: "High" }].map((bl) => (
            <div key={bl.b} className="rounded-lg bg-white/[0.03] p-2.5">
              <p className="text-[0.6rem] text-white/40 mb-1">{bl.b}</p>
              <span className={`text-[0.5rem] font-bold uppercase tracking-wider ${bl.sev === "High" ? "text-red-400/70" : "text-amber-400/60"}`}>{bl.sev}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  if (step === 2) return (
    <div className="grid grid-cols-3 gap-3 h-full">
      <div className="rounded-xl border border-white/[0.08] bg-[#111] overflow-hidden flex flex-col">
        <div className="bg-blue-500/15 border-b border-blue-500/15 px-4 py-2.5">
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-blue-400">Execution</p>
        </div>
        <div className="p-4 flex-1 space-y-2">
          {[{ t: "Deploy Falcon sensors", p: 100 }, { t: "Configure prevention policies", p: 72 }, { t: "Enable cloud workload", p: 45 }, { t: "Set detection exclusions", p: 0 }].map((task) => (
            <div key={task.t}>
              <div className="flex justify-between mb-1"><span className="text-[0.6rem] text-white/35 truncate">{task.t}</span><span className="text-[0.55rem] text-white/20">{task.p}%</span></div>
              <div className="h-1 rounded-full bg-white/[0.06]"><div className="h-full rounded-full bg-blue-400/50 transition-all" style={{ width: `${task.p}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-white/[0.08] bg-[#111] overflow-hidden flex flex-col">
        <div className="bg-emerald-500/15 border-b border-emerald-500/15 px-4 py-2.5">
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-emerald-400">Evidence</p>
        </div>
        <div className="p-4 flex-1 space-y-2.5">
          {[{ f: "config-snapshot-v3.json", s: "Verified" }, { f: "policy-export.yaml", s: "Verified" }, { f: "approval-ciso.pdf", s: "Pending" }, { f: "test-results.log", s: "Verified" }].map((ev) => (
            <div key={ev.f} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-5 w-4 rounded-sm bg-white/[0.06]" />
                <span className="text-[0.6rem] text-white/30 truncate">{ev.f}</span>
              </div>
              <span className={`text-[0.5rem] font-bold ${ev.s === "Verified" ? "text-emerald-400/60" : "text-amber-400/50"}`}>{ev.s}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-white/[0.08] bg-[#111] overflow-hidden flex flex-col">
        <div className="bg-violet-500/15 border-b border-violet-500/15 px-4 py-2.5">
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-violet-400">Approvals</p>
        </div>
        <div className="p-4 flex-1 space-y-3">
          {[{ who: "CISO", status: "Approved" }, { who: "Platform Lead", status: "Approved" }, { who: "Compliance", status: "Waiting" }].map((a) => (
            <div key={a.who} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-white/[0.06]" />
                <span className="text-[0.65rem] text-white/40">{a.who}</span>
              </div>
              <span className={`text-[0.5rem] font-bold uppercase ${a.status === "Approved" ? "text-emerald-400/60" : "text-amber-400/50"}`}>{a.status}</span>
            </div>
          ))}
          <div className="mt-auto pt-3 border-t border-white/[0.06]">
            <div className="flex justify-between text-[0.6rem]"><span className="text-white/20">Gate Status</span><span className="text-amber-400/60 font-bold">2/3</span></div>
          </div>
        </div>
      </div>
    </div>
  )

  // Step 3 — Operate
  return (
    <div className="grid grid-cols-3 gap-3 h-full">
      <div className="rounded-xl border border-white/[0.08] bg-[#111] overflow-hidden flex flex-col">
        <div className="bg-red-500/10 border-b border-red-500/10 px-4 py-2.5">
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-red-400">Drift Detection</p>
        </div>
        <div className="p-4 flex-1 space-y-2.5">
          {[{ sys: "Okta MFA Policy", drift: true }, { sys: "AWS S3 Encryption", drift: false }, { sys: "CrowdStrike Prevention", drift: true }, { sys: "Network Segmentation", drift: false }].map((d) => (
            <div key={d.sys} className="flex items-center justify-between">
              <span className="text-[0.6rem] text-white/35">{d.sys}</span>
              {d.drift ? (
                <span className="text-[0.5rem] font-bold text-red-400/70 uppercase">Drifted</span>
              ) : (
                <span className="text-[0.5rem] font-bold text-emerald-400/60 uppercase">Baseline</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-white/[0.08] bg-[#111] overflow-hidden flex flex-col">
        <div className="bg-emerald-500/15 border-b border-emerald-500/15 px-4 py-2.5">
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-emerald-400">Adoption</p>
        </div>
        <div className="p-4 flex-1">
          <p className="text-2xl font-bold text-white/70 mb-1">84%</p>
          <p className="text-[0.6rem] text-white/25 mb-4">Feature activation rate</p>
          {/* Mini bar chart */}
          <div className="flex items-end gap-1.5 h-12">
            {[40, 55, 60, 72, 68, 80, 84].map((v, i) => (
              <div key={i} className="flex-1 rounded-sm bg-emerald-400/30" style={{ height: `${v}%` }} />
            ))}
          </div>
          <p className="mt-2 text-[0.5rem] text-white/15">Last 7 weeks</p>
        </div>
      </div>
      <div className="rounded-xl border border-white/[0.08] bg-[#111] overflow-hidden flex flex-col">
        <div className="bg-white/[0.04] border-b border-white/[0.06] px-4 py-2.5">
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-white/40">Audit Log</p>
        </div>
        <div className="p-4 flex-1 space-y-2.5">
          {[{ e: "Config change detected", t: "2m ago" }, { e: "Drift auto-remediated", t: "1h ago" }, { e: "Adoption report generated", t: "3h ago" }, { e: "Quarterly review exported", t: "1d ago" }].map((ev) => (
            <div key={ev.e} className="flex items-center justify-between">
              <span className="text-[0.6rem] text-white/30 truncate">{ev.e}</span>
              <span className="text-[0.5rem] text-white/15 shrink-0 ml-2">{ev.t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function UseCases() {
  const [activeStep, setActiveStep] = useState(0)
  const [activeCategory, setActiveCategory] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !hasBeenVisible) { setHasBeenVisible(true); setIsAutoPlaying(true) } },
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [hasBeenVisible])

  useEffect(() => {
    if (!isAutoPlaying) return
    autoRef.current = setTimeout(() => {
      if (activeStep < CASE_STEPS.length - 1) {
        setActiveStep((s) => s + 1)
      } else {
        setActiveStep(0)
        setActiveCategory((c) => (c + 1) % CASE_CATEGORIES.length)
      }
    }, 4000)
    return () => { if (autoRef.current) clearTimeout(autoRef.current) }
  }, [isAutoPlaying, activeStep, activeCategory])

  useEffect(() => {
    if (!pillsRef.current) return
    const pill = pillsRef.current.children[activeCategory] as HTMLElement
    if (pill && pillsRef.current) {
      const container = pillsRef.current
      const scrollLeft = pill.offsetLeft - container.offsetWidth / 2 + pill.offsetWidth / 2
      container.scrollTo({ left: scrollLeft, behavior: "smooth" })
    }
  }, [activeCategory])

  const handleStepClick = (i: number) => { setIsAutoPlaying(false); setActiveStep(i) }
  const handleCategoryClick = (i: number) => { setIsAutoPlaying(false); setActiveCategory(i); setActiveStep(0) }

  const current = CASE_STEPS[activeStep]

  return (
    <section ref={sectionRef} className="relative px-6 py-24 md:py-32 md:px-10 lg:px-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/30">
            How It Works
          </p>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            From connected systems to
            <br />
            <span className="italic font-light text-white/50">governed implementation.</span>
          </h2>
        </div>

        <div className="lg:flex lg:gap-16">
          {/* Left */}
          <div className="mb-10 lg:mb-0 lg:w-[34%] lg:shrink-0">
            <div className="mb-8 flex gap-6">
              {CASE_STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleStepClick(i)}
                  className={`font-mono text-sm font-bold transition-all duration-300 ${
                    activeStep === i ? "text-white scale-110" : "text-white/15 hover:text-white/40"
                  }`}
                >
                  0{i + 1}
                </button>
              ))}
            </div>
            <div className="mb-8 h-px bg-white/[0.08]" />
            <div key={`${activeStep}-${activeCategory}`} style={{ animation: "fadeSlideIn 0.4s ease-out" }}>
              <h3 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{current.title}</h3>
              <p className="max-w-md text-[0.95rem] leading-relaxed text-white/40">{current.description}</p>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 min-w-0">
            {/* Category pills */}
            <div className="relative mb-5">
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
              <div ref={pillsRef} className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide">
                {CASE_CATEGORIES.map((cat, i) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(i)}
                    className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ${
                      activeCategory === i
                        ? "border-white/20 bg-white text-[#0a0a0a]"
                        : "border-white/[0.08] text-white/30 hover:border-white/15 hover:text-white/50"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${activeCategory === i ? "bg-[#0a0a0a]" : "bg-white/20"}`} />
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual cards */}
            <div key={`v-${activeStep}-${activeCategory}`} style={{ animation: "fadeSlideIn 0.5s ease-out" }}>
              <StepVisual step={activeStep} />
            </div>

            {/* Step dots */}
            <div className="mt-5 flex items-center justify-center gap-2">
              {CASE_STEPS.map((_, i) => (
                <div key={i} className={`h-1 rounded-full transition-all duration-500 ${activeStep === i ? "w-8 bg-white/40" : "w-2 bg-white/10"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Security & Trust ─── */
function SecurityTrust() {
  const practices = [
    {
      title: "SOC 2 Type II",
      description: "Actively pursuing SOC 2 Type II certification with continuous compliance monitoring.",
    },
    {
      title: "Encryption at Rest & In Transit",
      description: "All data encrypted with AES-256 at rest and TLS 1.3 in transit. Zero plaintext storage.",
    },
    {
      title: "Role-Based Access Control",
      description: "Granular RBAC with audit logging on every action. Least-privilege by default.",
    },
    {
      title: "Infrastructure on Cloudflare",
      description: "Global edge network with DDoS protection, WAF, and zero-trust connectivity built in.",
    },
    {
      title: "Continuous Monitoring",
      description: "Real-time security posture monitoring with automated vulnerability scanning and patching.",
    },
    {
      title: "Data Residency Controls",
      description: "Customer data stays where you need it. Regional isolation and processing guarantees.",
    },
  ]

  return (
    <section id="security" className="relative px-6 py-24 md:py-32 md:px-10 lg:px-12">
      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Header — two column */}
        <div className="mb-16 md:mb-20 md:flex md:items-end md:justify-between md:gap-12">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/30">
              Security & Trust
            </p>
            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Enterprise-grade security,
              <br />
              <span className="italic font-light text-white/50">built in.</span>
            </h2>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/40 md:mt-0 md:text-base">
            Panaptico handles sensitive implementation data across your most critical systems. Security isn&apos;t a feature — it&apos;s the foundation.
          </p>
        </div>

        {/* SecurityScorecard badge */}
        <div className="mb-12 inline-block rounded-xl border border-white/[0.08] bg-white/[0.03] p-5">
          <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/25">
            Independently Rated
          </p>
          <iframe
            src="https://scores.securityscorecard.io/security-rating/badge/panaptico.com"
            width="256"
            height="100"
            frameBorder="0"
            title="SecurityScorecard Rating for Panaptico"
          />
        </div>

        {/* Practices grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {practices.map((p, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
            >
              <h3 className="mb-2 text-sm font-semibold text-white/80">{p.title}</h3>
              <p className="text-sm leading-relaxed text-white/35 transition-colors duration-300 group-hover:text-white/50">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Company ─── */
function Company() {
  const sections = [
    {
      label: "Problem",
      title: "The Implementation Gap",
      subtitle: "71% of enterprise implementations underperform. The tooling was never built.",
      paragraphs: [
        "Every enterprise buys world-class platforms — Okta, CrowdStrike, Databricks, ServiceNow — then hands the implementation to consultants, Jira tickets, and tribal knowledge. Six months later, half the features are undeployed, configs don't match the environment, and nobody can explain what was actually done.",
        "The result is predictable. 71% of enterprise implementations underperform. Plans decay the moment the kickoff meeting ends. Ownership is ambiguous. Evidence disappears into email threads. Post-go-live, the system drifts silently — and the next team starts from scratch.",
      ],
    },
    {
      label: "Solution",
      title: "The Implementation Runtime",
      subtitle: "Implementations managed as software, not consulting projects.",
      paragraphs: [
        "Panaptico connects to the real systems in a rollout — AWS, Okta, CrowdStrike, Databricks, and others — and builds a live implementation graph spanning system state, work state, and organizational state. That graph becomes the control plane: it drives discovery, sequencing, governed execution, validation, and audit.",
        "Instead of static plans that nobody updates, Panaptico continuously reconciles intent against live reality. Approvals, evidence, dependencies, and ownership become explicit project objects — versioned, traceable, and enforceable. The implementation becomes a system of record that persists long after go-live.",
      ],
    },
    {
      label: "Vision",
      title: "The Future of Enterprise Implementation",
      subtitle: "One runtime that connects everything.",
      paragraphs: [
        "We believe every enterprise implementation should be measurable, auditable, and continuously reconciled against reality — not managed through spreadsheets and institutional memory. The implementation graph is the missing layer between what you bought and the value you were promised.",
        "Panaptico is building the system of record for how enterprise technology actually gets deployed, operated, and maintained. From Day 0 discovery to long after go-live — one runtime, one source of truth.",
      ],
    },
  ]

  return (
    <section id="company" className="relative px-6 py-24 md:py-32 md:px-10 lg:px-12">
      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/30">
            About
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            About Panaptico
          </h2>
          <p className="mt-4 text-base text-white/40">
            The implementation runtime for enterprise systems.
          </p>
        </div>

        {/* Sections */}
        {sections.map((s) => (
          <div key={s.label}>
            <div className="h-px w-full bg-white/[0.08]" />
            <div className="grid gap-8 py-16 md:grid-cols-[1fr_1.4fr] md:gap-16 md:py-20">
              {/* Left column */}
              <div>
                <span className="mb-4 inline-block font-mono text-xs font-medium uppercase tracking-widest text-white/30">
                  [ {s.label} ]
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-white/40">{s.subtitle}</p>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-6">
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="text-[0.95rem] leading-relaxed text-white/45">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Final rule */}
        <div className="h-px w-full bg-white/[0.08]" />

        {/* Backed by / Partners */}
        <div className="mt-16 flex flex-col items-center gap-10 text-center md:flex-row md:justify-center md:gap-16 md:text-left">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/25">Backed by</p>
            <p className="mt-2 text-lg font-semibold text-white/80">Forum Ventures</p>
          </div>
          <div className="hidden h-10 w-px bg-white/[0.08] md:block" />
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/25">Technology Partners</p>
            <p className="mt-2 text-lg font-semibold text-white/80">Cloudflare &amp; Databricks</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section className="relative px-6 py-24 md:py-32 md:px-10 lg:px-12">
      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 50% 40%, white, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          The Implementation
          <br />
          <span className="italic font-light text-white/60">System of Record.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
          What you bought. What you deployed. What your business needs. What vendors keep changing.
          Panaptico continuously reconciles all four.
        </p>

        {/* Stats */}
        <div className="mt-14 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
          {[
            { value: "$1.1T", label: "Annual IT Software Spend" },
            { value: "71%", label: "Implementation Failure Rate" },
            { value: "3 Layers", label: "Of Context" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-12">
              <div className="text-center">
                <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">{stat.value}</p>
                <p className="mt-1.5 text-xs text-white/30">{stat.label}</p>
              </div>
              {i < 2 && <div className="hidden h-12 w-px bg-white/[0.08] sm:block" />}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://alpha.panaptico.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-[#0a0a0a] transition-all hover:shadow-lg hover:shadow-white/10"
          >
            Try Panaptico Now
          </a>
          <a
            href="mailto:info@panaptico.com"
            className="rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white/60 transition-all hover:border-white/25 hover:text-white/80"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-10 md:px-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm font-semibold text-white/70">Panaptico</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-sm text-white/30 transition-colors hover:text-white/60">Privacy</Link>
          <Link href="/terms" className="text-sm text-white/30 transition-colors hover:text-white/60">Terms</Link>
          <a href="mailto:info@panaptico.com" className="text-sm text-white/30 transition-colors hover:text-white/60">info@panaptico.com</a>
        </div>
        <p className="text-xs text-white/20">&copy; 2026 Panaptico. All rights reserved.</p>
      </div>
    </footer>
  )
}
