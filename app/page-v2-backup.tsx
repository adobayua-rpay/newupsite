"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export default function V2Page() {
  return (
    <div className="min-h-screen bg-[#f5f0eb] text-[#1a1a1a]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Nav />
      <Hero />
      <EnterpriseLogos />
      <ProjectIntent />
      <HowItWorks />
      <TheImplementationGap />
      <WhyItFails />
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
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProblemsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 backdrop-blur-md" style={{ backgroundColor: "rgba(245, 240, 235, 0.85)" }}>
        <Link href="/" className="text-xl font-semibold tracking-tight text-[#1a1a1a]">
          Panaptico
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {/* Problems We Solve dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProblemsOpen(!problemsOpen)}
              className="flex items-center gap-1 text-sm text-[#1a1a1a]/70 transition-colors hover:text-[#1a1a1a]"
            >
              Problems We Solve
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${problemsOpen ? "rotate-180" : ""}`}>
                <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {problemsOpen && (
              <div className="absolute left-1/2 top-full mt-4 -translate-x-1/2 rounded-2xl border border-[#1a1a1a]/10 bg-white p-6 shadow-xl" style={{ width: "720px" }}>
                <div className="grid grid-cols-3 gap-8">
                  {Object.entries(problemsWesolve).map(([category, items]) => (
                    <div key={category}>
                      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#1a1a1a]/40">{category}</p>
                      <div className="flex flex-col gap-3">
                        {items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setProblemsOpen(false)}
                            className="group rounded-lg p-2 transition-colors hover:bg-[#f5f0eb]"
                          >
                            <p className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#0d9488]">{item.name}</p>
                            <p className="mt-0.5 text-xs text-[#1a1a1a]/50">{item.desc}</p>
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
              className="text-sm text-[#1a1a1a]/70 transition-colors hover:text-[#1a1a1a]"
            >
              {item}
            </a>
          ))}
          <Link href="/docs" className="text-sm text-[#1a1a1a]/70 transition-colors hover:text-[#1a1a1a]">
            Docs
          </Link>
        </div>

        <a
          href="https://alpha.panaptico.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[#1a1a1a] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 md:block"
        >
          Try Panaptico free
        </a>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden" aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#1a1a1a]/10 bg-[#f5f0eb] px-6 py-4 md:hidden">
          {/* Mobile: Problems We Solve */}
          <p className="py-2 text-xs font-semibold uppercase tracking-widest text-[#1a1a1a]/40">Problems We Solve</p>
          {Object.entries(problemsWesolve).map(([category, items]) => (
            <div key={category} className="mb-2">
              <p className="py-1 text-xs font-medium text-[#1a1a1a]/30">{category}</p>
              {items.map((item) => (
                <Link key={item.name} href={item.href} className="block py-1.5 pl-2 text-sm text-[#1a1a1a]/70">
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
          <div className="my-2 h-px bg-[#1a1a1a]/10" />
          {["Features", "Security", "Company", "Contact Us"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="block py-2 text-sm text-[#1a1a1a]/70">
              {item}
            </a>
          ))}
          <Link href="/docs" className="block py-2 text-sm text-[#1a1a1a]/70">Docs</Link>
          <a
            href="https://alpha.panaptico.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block rounded-full bg-[#1a1a1a] px-6 py-2.5 text-sm font-medium text-white"
          >
            Try Panaptico free
          </a>
        </div>
      )}
    </nav>
  )
}

/* ─── Hero ─── */
function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Screenshot starts pushed down and rises into place as you scroll
  const translateY = Math.max(0, 80 - scrollY * 0.25)
  const scale = Math.min(1, 0.92 + scrollY * 0.0002)

  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-0">
      {/* Cloud background image */}
      <div className="pointer-events-none absolute inset-0 -top-20">
        <Image
          src="/cloudbg2.jpg"
          alt=""
          fill
          className="object-cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-[#f5f0eb]" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-[#1a1a1a] md:text-6xl lg:text-7xl">
          AI Agents For IT Implementations & Projects
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#1a1a1a]/60 md:text-xl">
          
Connect your IT systems, add your team and automatically start IT work. Panaptico discovers your systems, how they work and builds out workspaces to complete implementation & rollout projects.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://alpha.panaptico.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1a1a1a] px-8 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Try Panaptico free
          </a>
          <a
            href="#features"
            className="rounded-full border border-[#1a1a1a]/20 bg-white/50 px-8 py-3.5 text-sm font-medium text-[#1a1a1a] backdrop-blur-sm transition-colors hover:bg-white/80"
          >
            See features
          </a>
        </div>

        {/* Product screenshot with scroll-driven rise effect */}
        <div
          className="relative mx-auto mt-16 max-w-5xl transition-transform duration-100 ease-out will-change-transform"
          style={{
            transform: `translateY(${translateY}px) scale(${scale})`,
          }}
        >
          <div className="overflow-hidden rounded-t-2xl border border-b-0 border-[#1a1a1a]/10 bg-white shadow-2xl shadow-[#1a1a1a]/10">
            <Image
              src="/product/home-dashboard.png"
              alt="Panaptico home dashboard showing active implementation projects across providers"
              width={1400}
              height={800}
              className="h-auto w-full"
              quality={95}
              priority
            />
          </div>
          {/* Fade out at bottom */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5f0eb] to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* ─── Enterprise Logos ─── */
function EnterpriseLogos() {
  const logos = [
    "Palo Alto Networks", "Cisco", "AWS", "Azure", "Okta", "CrowdStrike",
    "Databricks", "Snowflake", "Oracle", "SAP", "Wiz", "NetApp",
    "Cohesity", "Rubrik", "Docker", "ServiceNow", "Zscaler", "Fortinet",
    "Splunk", "Elastic", "HashiCorp", "VMware", "Cloudflare", "MongoDB",
    "ClickHouse", "Datadog", "SailPoint", "Netskope", "Jamf", "Intune",
  ]

  return (
    <section className="px-6 py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-10 text-sm tracking-wide text-[#1a1a1a]/40">
          Works With Your Enterprise IT Systems
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#f5f0eb] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#f5f0eb] to-transparent" />
        <div className="flex animate-ticker gap-12 whitespace-nowrap">
          {[...logos, ...logos].map((name, i) => (
            <span
              key={i}
              className="inline-block text-sm font-semibold tracking-tight text-[#1a1a1a]/30"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Project Intent ─── */
function ProjectIntent() {
  const [activeTab, setActiveTab] = useState<"integration" | "deployment" | "migration" | "rollout" | "evaluation">("integration")
  const [activeProvider, setActiveProvider] = useState("Okta")
  const [providerOpen, setProviderOpen] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [rotationIndex, setRotationIndex] = useState(0)

  const providers = ["Okta", "M365", "CrowdStrike", "AWS", "Databricks", "Snowflake", "Cisco", "SAP"]

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
    setProviderOpen(false)
  }

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-widest text-[#1a1a1a]/40">
          IT Projects That Start With Intent
        </p>

        <div className="rounded-2xl border border-[#1a1a1a]/10 bg-white p-6 shadow-lg md:p-8">
          {/* Title row */}
          <div className="mb-4 flex items-start justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">✨</span>
              <h3 className="text-base font-medium text-[#1a1a1a] md:text-lg">{current.title}</h3>
            </div>
            <span className="ml-4 shrink-0 text-2xl">✏️</span>
          </div>

          {/* Content */}
          <p className="mb-6 text-sm leading-relaxed text-[#1a1a1a]/70 md:text-base">
            {displayedText}
            {isTyping && <span className="inline-block w-[2px] h-[1em] bg-[#0d9488] ml-[1px] animate-pulse align-middle" />}
          </p>

          {/* Toolbar */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1a1a1a]/10 text-[#1a1a1a]/40 transition-colors hover:bg-[#1a1a1a]/5">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 2v12M2 8h12" /></svg>
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1a1a1a]/10 text-[#1a1a1a]/40 transition-colors hover:bg-[#1a1a1a]/5">
                <span className="text-sm">🔧</span>
              </button>

              {/* Provider dropdown */}
              <div className="relative">
                <button
                  onClick={() => setProviderOpen(!providerOpen)}
                  className="flex h-9 items-center gap-2 rounded-lg border border-[#1a1a1a]/10 px-3 text-sm text-[#1a1a1a]/60 transition-colors hover:bg-[#1a1a1a]/5"
                >
                  <span className="text-xs">☁️</span> {current.provider} <span className="text-xs">▼</span>
                </button>
                {providerOpen && (
                  <div className="absolute top-full left-0 z-10 mt-1 w-40 overflow-hidden rounded-lg border border-[#1a1a1a]/10 bg-white shadow-lg">
                    {providers.map((p) => (
                      <button
                        key={p}
                        onClick={() => {
                          setActiveProvider(p)
                          setProviderOpen(false)
                        }}
                        className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-[#1a1a1a]/5 ${
                          p === current.provider ? "bg-[#1a1a1a]/5 font-medium text-[#1a1a1a]" : "text-[#1a1a1a]/60"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Send button */}
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d9488] text-white transition-opacity hover:opacity-90">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 8h12M10 4l4 4-4 4" />
              </svg>
            </button>
          </div>

          {/* Tab pills */}
          <div className="flex flex-wrap gap-3">
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
                    ? "bg-[#1a1a1a] text-white"
                    : "border border-[#1a1a1a]/10 text-[#1a1a1a]/60 hover:bg-[#1a1a1a]/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── How It Works (Retool-style sticky scroll) ─── */
function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  const steps = [
    {
      label: "Discovery",
      title: "Stay ahead and in Sync of relevant systems.",
      description:
        "Panaptico keeps relevant systems and resources to your IT project in sync making sure you always have a complete view of systems status, changes and blockers.",
      image: "/product/SyncMain.png",
      imageAlt: "Panaptico Systems Map showing 47 live mappings across 23 providers with real security findings",
    },
    {
      label: "Implementation Graph",
      title: "One live model of the entire rollout.",
      description:
        "A continuously maintained model of the implementation itself: systems, dependencies, tasks, owners, approvals, evidence, risks, and health — all synchronized.",
      image: "/product/Sync3.png",
      imageAlt: "Panaptico system context diagram mapping relationships across AWS, Okta, DataDog, GCP",
    },
    {
      label: "Governed Execution",
      title: "Complete Overview",
      description:
        "Live project summary, momentum, progress, risks, lifecycle and more — automatically updated and always accurate, so you can focus on execution instead of status updates.",
      image: "/product/Active.png",
      imageAlt: "Panaptico implementation checklist with blocked items, dependencies, and evidence tracking",
    },
    {
      label: "Task Execution",
      title: "Surface what you'd miss. Execute what matters.",
      description:
        "Panaptico analyzes your live environment, surfaces hidden gaps you'd miss, and generates phased tasks to close them — then helps you execute each one to completion.",
      image: "/product/tasks.png",
      imageAlt: "Panaptico phased implementation checklist with 6 phases, progress bars, and exit criteria for a Datadog SIEM rollout",
    },
    {
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

      const viewportCenter = window.innerHeight / 2

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
    <section id="features" className="bg-white text-[#1a1a1a]">
      {/* Section header */}
      <div className="px-6 pt-24 pb-12 md:px-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            The Implementation Runtime for your IT stack.
          </h2>
        </div>
      </div>

      {/* Retool-style two-column layout */}
      <div className="relative px-6 pb-24 md:px-12 md:pb-32">
        {/* Left: scrolling text drives the height */}
        <div className="md:w-[22%] md:min-w-[280px]">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => { stepRefs.current[i] = el }}
              className="border-l-2 py-12 pl-6 transition-all duration-300 md:min-h-screen md:flex md:flex-col md:justify-center"
              style={{
                borderColor: activeStep === i ? "rgba(26,26,26,0.6)" : "rgba(26,26,26,0.1)",
              }}
            >
              <div>
                <p
                  className={`mb-3 text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${
                    activeStep === i ? "text-[#1a1a1a]/50" : "text-[#1a1a1a]/20"
                  }`}
                >
                  {step.label}
                </p>
                <h3
                  className={`mb-4 text-2xl font-bold tracking-tight transition-colors duration-300 md:text-3xl ${
                    activeStep === i ? "text-[#1a1a1a]" : "text-[#1a1a1a]/30"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`max-w-sm text-sm leading-relaxed transition-colors duration-300 md:text-base ${
                    activeStep === i ? "text-[#1a1a1a]/60" : "text-[#1a1a1a]/15"
                  }`}
                >
                  {step.description}
                </p>
              </div>

              {/* Mobile: inline image */}
              <div className="mt-6 md:hidden">
                <div className="overflow-hidden rounded-xl border border-[#1a1a1a]/10 shadow-2xl">
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

        {/* Right: sticky image positioned absolutely so it doesn't affect flow */}
        <div className="pointer-events-none absolute inset-y-0 right-8 left-[25%] hidden md:block">
          <div className="sticky top-0 flex h-screen items-center">
            <div className="pointer-events-auto relative w-full overflow-hidden rounded-2xl border-2 border-[#1a1a1a]/15 bg-[#f8f8f8] shadow-[0_25px_100px_-10px_rgba(0,0,0,0.15)]">
              {steps.map((step, i) => (
                <Image
                  key={i}
                  src={step.image}
                  alt={step.imageAlt}
                  width={1600}
                  height={1000}
                  className={`h-auto w-full transition-all duration-500 ${
                    activeStep === i
                      ? "relative opacity-100"
                      : "absolute inset-0 opacity-0"
                  }`}
                  quality={95}
                  sizes="70vw"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── The Implementation Gap ─── */
function TheImplementationGap() {
  const problems = [
    {
      platform: "Next-Gen Firewall / Prisma Access",
      detail:
        "6 months later you're running in tap mode, not blocking anything, because 400 legacy rules nobody understands still need translating.",
    },
    {
      platform: "SailPoint Identity Security Cloud",
      detail:
        "18 months and $2M later, access reviews are still manual because automation never got configured for your actual HR workflows.",
    },
    {
      platform: "Databricks Lakehouse Platform",
      detail:
        "12 months later you're paying for Premium tier but running everything in one shared cluster because nobody implemented the governance layer.",
    },
    {
      platform: "CrowdStrike Falcon Platform",
      detail:
        "Modules you're paying for were never enabled. Detection policies don't map to your environment. Nobody tracked feature activation after deployment.",
    },
    {
      platform: "Okta Identity Cloud",
      detail:
        "Paying for Advanced Server Access for 200 users. 12 have configured it. Access certification workflows don't match how your teams actually work.",
    },
    {
      platform: "Every Other Platform",
      detail:
        "The result is always the same. Brutal, expensive, and business-devastating. Only 29% of implementation projects are considered successful.",
    },
  ]

  return (
    <section className="bg-[#1a1a1a] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-white/30">The Implementation Gap</p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            You bought the platform. Here&apos;s what actually happens next.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <span className="mb-4 inline-block font-mono text-sm text-white/30">0{i + 1}</span>
              <h3 className="mb-3 text-lg font-semibold text-white">{p.platform}</h3>
              <p className="text-sm leading-relaxed text-white/50">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Why It Fails ─── */
function WhyItFails() {
  const layers = [
    {
      name: "System Context",
      items: [
        { title: "Live state is never discovered", impact: "Preventable surprises" },
        { title: "Vendors ship breaking changes", impact: "Invisible config drift" },
        { title: "No baseline, no drift detection", impact: "Silent degradation" },
      ],
    },
    {
      name: "Work Context",
      items: [
        { title: "Static plans decay immediately", impact: "$1.3T/yr on IT services" },
        { title: "No governed execution", impact: "Zero accountability" },
        { title: "No system of record exists", impact: "Zero visibility" },
      ],
    },
    {
      name: "Organizational Context",
      items: [
        { title: "Ownership is always ambiguous", impact: "Nobody's accountable" },
        { title: "Knowledge walks out the door", impact: "Teams start from scratch" },
        { title: "Adoption is assumed, not measured", impact: "71% underperform" },
      ],
    },
  ]

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#1a1a1a]/40">Why It Fails</p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-[#1a1a1a] md:text-5xl">
            Implementation fails across three layers — and nothing in your stack catches it.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {layers.map((layer) => (
            <div key={layer.name}>
              <h3 className="mb-6 text-lg font-semibold text-[#1a1a1a]">{layer.name}</h3>
              <div className="flex flex-col gap-6">
                {layer.items.map((item) => (
                  <div key={item.title} className="rounded-xl border border-[#1a1a1a]/10 bg-white/60 p-6">
                    <h4 className="mb-2 text-base font-semibold text-[#1a1a1a]">{item.title}</h4>
                    <p className="inline-block rounded-full bg-[#1a1a1a]/5 px-3 py-1 text-xs font-medium text-[#1a1a1a]/50">
                      {item.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
      icon: "🛡️",
    },
    {
      title: "Encryption at Rest & In Transit",
      description: "All data encrypted with AES-256 at rest and TLS 1.3 in transit. Zero plaintext storage.",
      icon: "🔒",
    },
    {
      title: "Role-Based Access Control",
      description: "Granular RBAC with audit logging on every action. Least-privilege by default.",
      icon: "👤",
    },
    {
      title: "Infrastructure on Cloudflare",
      description: "Global edge network with DDoS protection, WAF, and zero-trust connectivity built in.",
      icon: "☁️",
    },
    {
      title: "Continuous Monitoring",
      description: "Real-time security posture monitoring with automated vulnerability scanning and patching.",
      icon: "📡",
    },
    {
      title: "Data Residency Controls",
      description: "Customer data stays where you need it. Regional isolation and processing guarantees.",
      icon: "🌐",
    },
  ]

  return (
    <section id="security" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#1a1a1a]/40">Security & Trust Center</p>
          <h2 className="text-4xl font-bold tracking-tight text-[#1a1a1a] md:text-5xl">
            Enterprise-grade security, built in.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#1a1a1a]/60">
            Panaptico handles sensitive implementation data across your most critical systems. Security isn&apos;t a feature — it&apos;s the foundation.
          </p>
        </div>

        {/* SecurityScorecard Badge */}
        <div className="mb-16 flex justify-center">
          <div className="rounded-xl border border-[#1a1a1a]/10 bg-white p-6 shadow-sm">
            <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-[#1a1a1a]/40">Independently Rated</p>
            <iframe
              src="https://scores.securityscorecard.io/security-rating/badge/panaptico.com"
              width="256"
              height="100"
              frameBorder="0"
              title="SecurityScorecard Rating for Panaptico"
            />
          </div>
        </div>

        {/* Practices grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {practices.map((p) => (
            <div key={p.title} className="rounded-xl border border-[#1a1a1a]/10 bg-white/60 p-6">
              <h3 className="mb-2 text-base font-semibold text-[#1a1a1a]">{p.title}</h3>
              <p className="text-sm leading-relaxed text-[#1a1a1a]/60">{p.description}</p>
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
    <section id="company" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-[#1a1a1a] md:text-5xl" style={{ fontFamily: "'Geist Mono', monospace" }}>
            About Panaptico
          </h2>
          <p className="mt-4 text-lg text-[#1a1a1a]/50">
            The implementation runtime for enterprise systems.
          </p>
        </div>

        {/* Sections */}
        {sections.map((s, i) => (
          <div key={s.label}>
            <div className="h-px w-full bg-[#1a1a1a]/15" />
            <div className="grid gap-8 py-16 md:grid-cols-[1fr_1.4fr] md:gap-16 md:py-20">
              {/* Left column */}
              <div>
                <span className="mb-4 inline-block font-mono text-sm font-medium uppercase tracking-widest text-[#0d9488]">
                  [ {s.label} ]
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-[#1a1a1a] md:text-3xl" style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {s.title}
                </h3>
                <p className="mt-2 text-base text-[#1a1a1a]/50">{s.subtitle}</p>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-6">
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="text-base leading-relaxed text-[#1a1a1a]/70">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Final rule */}
        <div className="h-px w-full bg-[#1a1a1a]/15" />

        {/* Backed by / Partners */}
        <div className="mt-16 flex flex-col items-center gap-10 text-center md:flex-row md:justify-center md:gap-16 md:text-left">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#1a1a1a]/40">Backed by</p>
            <p className="mt-2 text-lg font-semibold text-[#1a1a1a]">Forum Ventures</p>
          </div>
          <div className="hidden h-10 w-px bg-[#1a1a1a]/10 md:block" />
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#1a1a1a]/40">Technology Partners</p>
            <p className="mt-2 text-lg font-semibold text-[#1a1a1a]">Cloudflare &amp; Databricks</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[#1a1a1a] md:text-6xl">
          The Implementation System of Record.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#1a1a1a]/60">
          What you bought. What you deployed. What your business needs. What vendors keep changing.
          Panaptico continuously reconciles all four.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <div className="text-center">
            <p className="text-5xl font-bold text-[#1a1a1a]">$1.1T</p>
            <p className="mt-1 text-sm text-[#1a1a1a]/50">Annual IT Software Spend</p>
          </div>
          <div className="hidden h-12 w-px bg-[#1a1a1a]/10 sm:block" />
          <div className="text-center">
            <p className="text-5xl font-bold text-[#1a1a1a]">71%</p>
            <p className="mt-1 text-sm text-[#1a1a1a]/50">Implementation Failure Rate</p>
          </div>
          <div className="hidden h-12 w-px bg-[#1a1a1a]/10 sm:block" />
          <div className="text-center">
            <p className="text-5xl font-bold text-[#1a1a1a]">3 Layers</p>
            <p className="mt-1 text-sm text-[#1a1a1a]/50">Of Context</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://alpha.panaptico.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1a1a1a] px-8 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Try Panaptico free
          </a>
          <a
            href="mailto:info@panaptico.com"
            className="rounded-full border border-[#1a1a1a]/20 bg-white/50 px-8 py-3.5 text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-white/80"
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
    <footer className="border-t border-[#1a1a1a]/10 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm font-semibold text-[#1a1a1a]">Panaptico</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-sm text-[#1a1a1a]/50 hover:text-[#1a1a1a]">Privacy</Link>
          <Link href="/terms" className="text-sm text-[#1a1a1a]/50 hover:text-[#1a1a1a]">Terms</Link>
          <a href="mailto:info@panaptico.com" className="text-sm text-[#1a1a1a]/50 hover:text-[#1a1a1a]">info@panaptico.com</a>
        </div>
        <p className="text-sm text-[#1a1a1a]/30">© 2026 Panaptico. All rights reserved.</p>
      </div>
    </footer>
  )
}
