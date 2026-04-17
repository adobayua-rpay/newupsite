"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export default function V3Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Nav />
      <Hero />
      <ProjectIntent />
      <Features />
      <ImplementationGap />
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
            AI Agents For
            <br />
            <span className="italic font-light">IT Implementations</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Connect your IT systems, add your team and automatically start IT work.
            Panaptico discovers your systems, how they work and builds out workspaces
            to complete implementation & rollout projects.
          </p>

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
const GAP_STAGES = [
  {
    time: "Day 0",
    title: "Discovery is manual and disconnected",
    description: "Teams assess the environment through workshops, slide decks, and spreadsheets — but none of it is connected to live system state. Dependencies, configs, and access models are documented once and never reconciled. The plan starts drifting before the project does.",
    systems: "Point-in-time",
    sysStatus: "dormant",
    work: "Static plan",
    workStatus: "dormant",
    org: "Assumed alignment",
    orgStatus: "healthy",
  },
  {
    time: "Month 2",
    title: "The plan and the environment diverge",
    description: "Live system state moves while the plan stays frozen. Vendor updates land silently, config dependencies shift, and the gap between intent and reality widens — but there's no reconciliation loop to surface it.",
    systems: "Diverging",
    sysStatus: "warning",
    work: "Decoupled from reality",
    workStatus: "warning",
    org: "Ownership ambiguous",
    orgStatus: "warning",
  },
  {
    time: "Month 6",
    title: "Execution without a system of record",
    description: "Work is tracked across Jira tickets, email threads, and shared drives. Evidence isn't linked to tasks. Approvals aren't versioned. There's no single model connecting what was planned, what was executed, and what was actually deployed.",
    systems: "Unreconciled",
    sysStatus: "warning",
    work: "Fragmented across tools",
    workStatus: "warning",
    org: "Institutional memory",
    orgStatus: "warning",
  },
  {
    time: "Go-Live",
    title: "The handoff breaks continuity",
    description: "Implementation knowledge is trapped in the heads of the people who did the work. The handoff is a static document. Feature activation is incomplete. The next team inherits a system they can't fully explain.",
    systems: "Partially deployed",
    sysStatus: "critical",
    work: "Incomplete",
    workStatus: "critical",
    org: "Knowledge transfer gap",
    orgStatus: "critical",
  },
  {
    time: "Post Go-Live",
    title: "No baseline, no operational continuity",
    description: "There's no living baseline to detect drift against. Adoption is assumed, not measured. Vendor changes land against an implementation nobody can reconstruct. The project was managed as a consulting engagement — not a persistent system.",
    systems: "Drifting undetected",
    sysStatus: "critical",
    work: "No persistent record",
    workStatus: "critical",
    org: "71% underperform here",
    orgStatus: "critical",
  },
]

const STATUS_DOT: Record<string, string> = {
  healthy: "bg-emerald-400/80",
  dormant: "bg-white/20",
  warning: "bg-amber-400/80",
  critical: "bg-red-400/80",
}

function ImplementationGap() {
  const [activeStage, setActiveStage] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [contentKey, setContentKey] = useState(0)
  const [countedValue, setCountedValue] = useState(0)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Start auto-play when scrolled into view
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

  // Auto-advance timer
  useEffect(() => {
    if (!isAutoPlaying) return
    autoPlayRef.current = setTimeout(() => {
      if (activeStage < GAP_STAGES.length - 1) {
        setActiveStage((s) => s + 1)
        setContentKey((k) => k + 1)
      } else {
        setIsAutoPlaying(false)
      }
    }, 3000)
    return () => { if (autoPlayRef.current) clearTimeout(autoPlayRef.current) }
  }, [isAutoPlaying, activeStage])

  // Count-up 71% on last stage
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

  return (
    <section ref={sectionRef} className="relative px-6 py-24 md:py-32 md:px-10 lg:px-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/30">
            The Implementation Gap
          </p>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Implementations managed as consulting projects,
            <br />
            <span className="italic font-light text-white/50">not software. That&apos;s why they fail.</span>
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
                  background: activeStage <= 1
                    ? "rgba(255,255,255,0.2)"
                    : activeStage <= 3
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
                        ? i <= 1
                          ? "border-white/40 bg-white/20"
                          : i <= 3
                          ? "border-amber-400/60 bg-amber-400/30"
                          : "border-red-400/60 bg-red-400/30"
                        : "border-white/10 bg-[#0a0a0a]"
                    } ${activeStage === i ? "scale-150" : "group-hover:scale-110"}`}
                  />
                  {activeStage === i && (
                    <div
                      className={`absolute top-0 h-3.5 w-3.5 rounded-full animate-ping ${
                        i <= 1 ? "bg-white/10" : i <= 3 ? "bg-amber-400/10" : "bg-red-400/15"
                      }`}
                      style={{ animationDuration: "2s" }}
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
                  <div
                    className="h-full rounded-full bg-white/20"
                    style={{ animation: "fillBar 3s linear forwards" }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div key={contentKey} className="md:flex md:gap-12 lg:gap-16" style={{ animation: "fadeSlideIn 0.5s ease-out" }}>
            <div className="mb-8 md:mb-0 md:flex-1">
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
                {current.title}
              </h3>
              <p className="max-w-lg text-[0.95rem] leading-relaxed text-white/45">
                {current.description}
              </p>
            </div>

            <div className="md:w-[260px] md:shrink-0">
              <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/25">
                State
              </p>
              <div className="space-y-3">
                {[
                  { layer: "Systems", label: current.systems, status: current.sysStatus },
                  { layer: "Work", label: current.work, status: current.workStatus },
                  { layer: "Organization", label: current.org, status: current.orgStatus },
                ].map((item, idx) => (
                  <div
                    key={item.layer}
                    className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                    style={{ animation: `fadeSlideIn 0.4s ease-out ${idx * 0.1}s both` }}
                  >
                    <div>
                      <p className="text-xs font-medium text-white/50">{item.layer}</p>
                      <p className="mt-0.5 text-sm text-white/30">{item.label}</p>
                    </div>
                    <div className={`h-2.5 w-2.5 rounded-full ${STATUS_DOT[item.status] || "bg-white/20"}`} />
                  </div>
                ))}
              </div>
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
                of enterprise implementations underperform. Static plans, tribal knowledge, and stale docs — not software.
              </p>
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
