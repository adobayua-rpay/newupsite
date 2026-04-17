import type { Metadata } from "next"

export interface ProblemPageData {
  slug: string
  category: string
  title: string
  subtitle: string
  problem: string
  solution: string
  capabilities: { title: string; description: string }[]
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export const problemPages: Record<string, ProblemPageData> = {
  "adoption-tracking": {
    slug: "adoption-tracking",
    category: "Operations",
    title: "Adoption Tracking",
    subtitle: "Know what you paid for vs what's actually deployed.",
    problem:
      "Enterprises spend millions on platform licenses — then have no idea how much is actually being used. Features go unactivated. Modules sit untouched. The vendor says you have access to everything, but nobody configured half of it. Adoption is assumed, not measured. And when renewal comes around, you're paying full price for a fraction of the value.",
    solution:
      "Panaptico tracks what was implemented against what was purchased. Feature activation, module coverage, user onboarding, and configuration completeness are measured continuously — not estimated in a quarterly review. You see exactly where adoption gaps exist so you can close them before renewal, not after.",
    capabilities: [
      { title: "Feature Activation Tracking", description: "See which platform features and modules are configured vs sitting dormant." },
      { title: "Implementation Completeness", description: "Measure how much of the intended rollout was actually completed and operational." },
      { title: "Usage vs License Gap", description: "Compare what you're paying for against what's deployed and active." },
      { title: "Adoption Health Scores", description: "Continuous health scores per system so you can prioritize where to close gaps." },
    ],
    seo: {
      title: "Adoption Tracking for Enterprise IT — Panaptico",
      description:
        "Track feature activation, module coverage, and adoption gaps across enterprise IT platforms. Measure what's deployed vs what's purchased — continuously, not at renewal.",
      keywords: ["adoption tracking", "license utilization", "feature activation tracking", "enterprise software adoption", "SaaS usage monitoring", "IT implementation completeness"],
    },
  },
  "audit-trail": {
    slug: "audit-trail",
    category: "Compliance",
    title: "Audit Trail",
    subtitle: "Complete record of every change, approval, and decision.",
    problem:
      "When an auditor asks 'who approved this change and why?' — most teams scramble through Slack threads, email archives, and Jira tickets trying to reconstruct what happened. Implementation decisions are scattered across a dozen tools with no single timeline. The audit trail doesn't exist because nobody built it into the process.",
    solution:
      "Panaptico records every action, decision, approval, and change automatically as the implementation progresses. There's no separate documentation step — the audit trail is a byproduct of how work gets done. When an auditor asks, you have a complete, timestamped, attributed record of the entire implementation lifecycle.",
    capabilities: [
      { title: "Automatic Activity Logging", description: "Every task completion, approval, change, and artifact generation is recorded with timestamps and attribution." },
      { title: "Decision Attribution", description: "Every decision has an owner, rationale, and downstream impact — permanently recorded." },
      { title: "Version History", description: "The full implementation graph is versioned. See the state of the project at any point in time." },
      { title: "Export-Ready Reports", description: "Generate audit-ready reports for compliance reviews, SOC 2, or internal governance requirements." },
    ],
    seo: {
      title: "Audit Trail for IT Implementations — Panaptico",
      description:
        "Automatic, timestamped audit trail for every change, approval, and decision in your enterprise IT implementation. Built into the workflow — no manual documentation needed.",
      keywords: ["IT audit trail", "implementation audit log", "change management audit", "compliance audit trail", "SOC 2 audit trail", "enterprise change tracking"],
    },
  },
  "drift-detection": {
    slug: "drift-detection",
    category: "Operations",
    title: "Drift Detection",
    subtitle: "Catch config drift before it becomes an incident.",
    problem:
      "After go-live, configurations drift silently. Vendors push updates that break assumptions. Team members make ad-hoc changes that nobody documents. Security policies decay as exceptions accumulate. By the time someone notices, the environment looks nothing like what was implemented — and nobody can tell you when or why it changed.",
    solution:
      "Panaptico continuously compares your live environment against the implementation baseline. When something drifts — a config change, a permission modification, a resource deletion — it's detected, classified, and surfaced with context. Not as noise, but as an actionable state transition: ignore it, track it, route it for approval, or trigger a fix.",
    capabilities: [
      { title: "Continuous Reconciliation", description: "Live environment state is continuously compared against intended implementation state." },
      { title: "Smart Classification", description: "Not every change is a problem. Panaptico classifies drift by impact — critical, notable, or expected." },
      { title: "Change Attribution", description: "See what changed, when it changed, and correlate it with vendor updates or team actions." },
      { title: "Automated Response", description: "Route drift into tasks, approvals, or re-baseline decisions — not just alerts." },
    ],
    seo: {
      title: "Configuration Drift Detection for Enterprise IT — Panaptico",
      description:
        "Detect configuration drift in real time across your enterprise IT environment. Panaptico continuously compares live state against your implementation baseline and surfaces actionable changes.",
      keywords: ["configuration drift detection", "config drift monitoring", "infrastructure drift", "IT environment monitoring", "configuration management", "drift remediation"],
    },
  },
  "evidence-collection": {
    slug: "evidence-collection",
    category: "Compliance",
    title: "Evidence Collection",
    subtitle: "Automated proof of implementation correctness.",
    problem:
      "Proving that an implementation was done correctly is almost impossible after the fact. Screenshots get lost. Config exports are never saved. Test results live in someone's terminal history. When compliance asks for evidence that a security control was properly configured, the team spends days recreating proof — or admits they don't have it.",
    solution:
      "Panaptico collects evidence as part of the execution workflow — not as an afterthought. Config exports, validation results, screenshots, and test outputs are attached to the tasks that produced them. Evidence is linked to the specific approval, decision, and system state it relates to. When someone asks for proof, it's already there.",
    capabilities: [
      { title: "Evidence-Gated Tasks", description: "Tasks require evidence uploads or validation results before they can be completed." },
      { title: "Automatic Evidence Capture", description: "System state snapshots and config exports are captured automatically during execution." },
      { title: "Linked Evidence Model", description: "Every piece of evidence is linked to the task, approval, and system state it validates." },
      { title: "Persistent Evidence Vault", description: "All evidence is stored permanently — searchable, exportable, and audit-ready." },
    ],
    seo: {
      title: "Automated Evidence Collection for IT Compliance — Panaptico",
      description:
        "Automate evidence collection during enterprise IT implementations. Config exports, validation results, and approvals are captured as part of the workflow — audit-ready from day one.",
      keywords: ["evidence collection automation", "IT compliance evidence", "implementation proof", "audit evidence management", "compliance documentation", "evidence-gated execution"],
    },
  },
  "governed-execution": {
    slug: "governed-execution",
    category: "Implementation",
    title: "Governed Execution",
    subtitle: "Approvals, evidence, and dependencies enforced at every stage.",
    problem:
      "In most IT projects, execution is ungoverned chaos. Tasks are marked done without proof. Approvals happen over Slack or email with no record. Dependencies are tracked manually — or not at all. When something goes wrong, nobody can trace what happened, who approved it, or what evidence existed. There's zero accountability and zero visibility.",
    solution:
      "Panaptico enforces governance at every step of execution. Tasks can't be completed without required evidence. Approvals are routed to the right stakeholders and recorded permanently. Dependencies block downstream work until prerequisites are verified. Every action, decision, and change is captured in the implementation record — creating a complete chain of accountability.",
    capabilities: [
      { title: "Evidence-Gated Completion", description: "Tasks require evidence — screenshots, config exports, test results — before they can be marked done." },
      { title: "Approval Routing", description: "Changes are routed to the right approver with context. Decisions are recorded with rationale." },
      { title: "Dependency Enforcement", description: "Downstream tasks are blocked until their prerequisites are verified complete." },
      { title: "Step-by-Step Guidance", description: "Your team drives the rollout with clear instructions — Panaptico guides, humans decide." },
    ],
    seo: {
      title: "Governed Execution for IT Implementations — Panaptico",
      description:
        "Enforce governance across enterprise IT implementations with evidence-gated tasks, approval routing, and dependency enforcement. Complete accountability at every step.",
      keywords: ["governed execution", "IT implementation governance", "approval workflow", "evidence-gated tasks", "dependency management", "enterprise project governance"],
    },
  },
  "it-project-planning": {
    slug: "it-project-planning",
    category: "Implementation",
    title: "IT Project Planning",
    subtitle: "Plan from your live environment, not a spreadsheet.",
    problem:
      "Enterprise IT projects start with static plans — spreadsheets, Confluence pages, and kickoff decks that are outdated before the first task begins. Nobody verifies what actually exists in the environment, so plans are built on assumptions. Dependencies are guessed. Timelines are fiction. When reality doesn't match the plan, teams scramble to replan mid-project with no single source of truth.",
    solution:
      "Panaptico connects to your real systems — AWS, Okta, Databricks, Cisco, and others — and discovers the live environment before planning starts. Your project plan is generated from what actually exists, not what someone remembers from a workshop. Dependencies, blockers, and prerequisites are surfaced automatically. As things change, the plan updates to reflect reality.",
    capabilities: [
      { title: "Live Environment Discovery", description: "Connect your systems and see what's actually deployed before writing a single task." },
      { title: "Intent-Driven Planning", description: "Describe your project goal — Panaptico turns it into a structured, phased rollout plan scoped to your real environment." },
      { title: "Automatic Dependency Mapping", description: "Dependencies between systems, teams, and tasks are identified from live data, not guesswork." },
      { title: "Continuous Plan Updates", description: "As your environment changes, the plan stays current — no more stale spreadsheets." },
    ],
    seo: {
      title: "IT Project Planning from Live Environments — Panaptico",
      description:
        "Plan enterprise IT projects from your live environment, not a spreadsheet. Panaptico discovers what exists, maps dependencies, and generates implementation plans grounded in reality.",
      keywords: ["IT project planning", "enterprise IT planning", "implementation planning software", "live environment discovery", "IT project management", "system rollout planning"],
    },
  },
  "post-go-live-continuity": {
    slug: "post-go-live-continuity",
    category: "Operations",
    title: "Post-Go-Live Continuity",
    subtitle: "The implementation graph stays alive after launch.",
    problem:
      "Every other tool stops at go-live. The consultants leave, the project channel gets archived, and the implementation knowledge evaporates. Three months later, nobody remembers what was configured, why decisions were made, or what the original architecture looked like. When something breaks or a new team member joins, everyone starts from scratch.",
    solution:
      "Panaptico doesn't archive the implementation — it keeps it alive. The same graph that drove the rollout becomes the living baseline for operations. Every decision, configuration, approval, and evidence record persists. When vendors ship changes, when team members rotate, when questions arise about why something was done — the answer is always there.",
    capabilities: [
      { title: "Persistent Implementation Record", description: "Every decision, config, approval, and artifact is retained and queryable — forever." },
      { title: "Living Baseline", description: "The implementation graph becomes your operational baseline — not a dead document in SharePoint." },
      { title: "Team Continuity", description: "New team members can understand the full implementation history without tribal knowledge transfer." },
      { title: "Operational Intelligence", description: "Use the implementation record to inform future changes, expansions, and troubleshooting." },
    ],
    seo: {
      title: "Post-Go-Live Continuity for Enterprise IT — Panaptico",
      description:
        "Keep your implementation knowledge alive after go-live. Panaptico turns your rollout record into a living operational baseline — decisions, configs, and evidence, always accessible.",
      keywords: ["post go-live continuity", "implementation knowledge management", "operational baseline", "IT project handover", "go-live readiness", "implementation record"],
    },
  },
  "system-discovery": {
    slug: "system-discovery",
    category: "Implementation",
    title: "System Discovery",
    subtitle: "Map your live environment before changing anything.",
    problem:
      "Most implementation teams start work without understanding what's already there. Configurations are undocumented, dependencies are invisible, and the current state of every system lives in someone's head — or nowhere at all. Teams make changes blind, discover conflicts halfway through, and spend weeks untangling issues that a proper discovery would have caught on day one.",
    solution:
      "Panaptico connects directly to your enterprise systems and builds a live map of what exists — resources, configurations, relationships, access models, and health signals. Before a single change is made, you have a complete picture of your environment. Discovery isn't a one-time audit — it's a continuous feed that keeps the implementation grounded in reality.",
    capabilities: [
      { title: "Multi-Provider Connectors", description: "Discover across AWS, Azure, Okta, CrowdStrike, Databricks, Cisco, and more — all from one workspace." },
      { title: "Cross-System Relationship Mapping", description: "See how systems depend on each other — identity flows, network paths, data pipelines, and integration points." },
      { title: "Real-Time State Sync", description: "Discovery isn't a snapshot. Panaptico continuously syncs with your live systems so the map never goes stale." },
      { title: "Implementation-Scoped Focus", description: "Only surfaces what's relevant to your project — no noise, no full inventory dumps." },
    ],
    seo: {
      title: "IT System Discovery & Environment Mapping — Panaptico",
      description:
        "Discover and map your live IT environment before implementation begins. Panaptico connects to AWS, Azure, Okta, and more to surface resources, configurations, and dependencies in real time.",
      keywords: ["IT system discovery", "environment mapping", "infrastructure discovery", "IT asset discovery", "configuration discovery", "enterprise system mapping"],
    },
  },
  "task-generation": {
    slug: "task-generation",
    category: "Implementation",
    title: "Task Generation",
    subtitle: "Surface hidden gaps and generate sequenced work.",
    problem:
      "Implementation tasks are usually created by a PM guessing in a spreadsheet — based on past experience, vendor docs, and whatever the last consultant remembered. Critical prerequisites get missed. Phases are out of order. Nobody realizes a dependency exists until it blocks the entire project two months in. The task list looks complete on paper but is full of gaps in practice.",
    solution:
      "Panaptico analyzes your live environment and generates phased, sequenced tasks you wouldn't have known to create. Hidden dependencies, prerequisite gaps, and resources that need attention are surfaced before anything else moves. Each phase has clear exit criteria and evidence requirements — so the rollout follows a proven path built from your actual systems, not a template.",
    capabilities: [
      { title: "Environment-Aware Task Generation", description: "Tasks are generated from what Panaptico discovers in your live systems — not from a generic template." },
      { title: "Phased Sequencing", description: "Work is organized into ordered phases with dependencies, so nothing starts before its prerequisites are met." },
      { title: "Exit Criteria & Evidence", description: "Every phase has clear completion criteria and evidence requirements — no ambiguity about when something is done." },
      { title: "Gap Detection", description: "Surfaces work you didn't know you needed — missing permissions, unresolved configs, undocumented dependencies." },
    ],
    seo: {
      title: "AI Task Generation for IT Implementations — Panaptico",
      description:
        "Generate phased, sequenced implementation tasks from your live IT environment. Panaptico surfaces hidden dependencies and gaps that manual planning misses.",
      keywords: ["AI task generation", "implementation task planning", "automated project planning", "IT task management", "phased implementation", "dependency-aware planning"],
    },
  },
  "vendor-change-management": {
    slug: "vendor-change-management",
    category: "Compliance",
    title: "Vendor Change Management",
    subtitle: "Track vendor updates against your implementation.",
    problem:
      "Vendors ship breaking changes constantly — API deprecations, feature removals, policy updates, pricing changes, security patches. Your implementation was built against a specific version of their platform, and nobody tracks what changed since. Config drift from vendor updates is invisible until something breaks in production.",
    solution:
      "Panaptico monitors vendor changes and reconciles them against your implementation baseline. When a vendor ships an update that affects your configuration, dependencies, or integration points — you know about it before it becomes an incident. Changes are classified by impact and routed into the appropriate response: update, re-test, re-approve, or re-baseline.",
    capabilities: [
      { title: "Vendor Change Detection", description: "Track platform updates, API changes, and feature modifications from your vendors." },
      { title: "Impact Analysis", description: "Automatically assess how vendor changes affect your specific implementation and configurations." },
      { title: "Response Routing", description: "Vendor changes are routed into tasks, approvals, or re-validation workflows based on impact." },
      { title: "Baseline Reconciliation", description: "Continuously compare your implementation against the current state of the vendor platform." },
    ],
    seo: {
      title: "Vendor Change Management for Enterprise IT — Panaptico",
      description:
        "Track vendor platform updates against your implementation baseline. Panaptico detects breaking changes, assesses impact, and routes responses before they become incidents.",
      keywords: ["vendor change management", "vendor update tracking", "platform change monitoring", "vendor risk management", "IT change management", "vendor compliance tracking"],
    },
  },
}

export function generateProblemMetadata(slug: string): Metadata {
  const data = problemPages[slug]
  if (!data) throw new Error(`Unknown problem page slug: ${slug}`)

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    alternates: {
      canonical: `/problems/${data.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://panaptico.com/problems/${data.slug}`,
      siteName: "Panaptico",
      title: data.seo.title,
      description: data.seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: data.seo.title,
      description: data.seo.description,
    },
  }
}

export function generateProblemJsonLd(slug: string) {
  const data = problemPages[slug]
  if (!data) return null

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: data.seo.title,
        url: `https://panaptico.com/problems/${data.slug}`,
        description: data.seo.description,
        isPartOf: { "@type": "WebSite", name: "Panaptico", url: "https://panaptico.com" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://panaptico.com" },
          { "@type": "ListItem", position: 2, name: data.title, item: `https://panaptico.com/problems/${data.slug}` },
        ],
      },
    ],
  }
}
