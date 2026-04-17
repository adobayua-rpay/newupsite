"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export default function V4Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <V4Nav />
      <StoryHero />
    </div>
  )
}

/* ─── Nav ─── */
function V4Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">Panaptico</Link>
        <div className="hidden items-center gap-8 md:flex">
          {["Platform", "Problems We Solve", "Security", "Company"].map((item) => (
            <span key={item} className="text-sm text-white/50 cursor-pointer transition-colors hover:text-white">{item}</span>
          ))}
        </div>
        <a
          href="https://alpha.panaptico.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90"
        >
          Try Panaptico
        </a>
      </div>
    </nav>
  )
}

/* ─── Story Hero ─── */
const STAGES = [
  { label: "The Scale", duration: 4000 },
  { label: "Pick One", duration: 4000 },
  { label: "Month 3", duration: 4000 },
  { label: "Go-Live", duration: 4000 },
  { label: "Panaptico", duration: 6000 },
]

function StoryHero() {
  const [stage, setStage] = useState(-1)
  const [hasStarted, setHasStarted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !hasStarted) { setHasStarted(true); setStage(0) } },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (stage < 0 || stage >= STAGES.length - 1) return
    const t = setTimeout(() => setStage(s => s + 1), STAGES[stage].duration)
    return () => clearTimeout(t)
  }, [stage])

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12 flex flex-col lg:flex-row items-center min-h-[calc(100vh-5rem)]">
        {/* Left — headline */}
        <div className="lg:w-[40%] lg:shrink-0 pt-16 lg:pt-0">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/30">
            The Implementation Control Plane
          </p>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
            Every IT project follows
            <br />
            <span className="italic font-light text-white/50">the same arc.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/40">
            Whether it&apos;s your team or a systems integrator — migrations, deployments, and rollouts
            all hit the same structural gaps. Most organizations are running dozens at once.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://alpha.panaptico.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#0a0a0a] transition-all hover:shadow-lg hover:shadow-white/10"
            >
              Try Panaptico Now
            </a>
            {stage >= 0 && stage < STAGES.length - 1 && (
              <button
                onClick={() => setStage(STAGES.length - 1)}
                className="text-sm text-white/30 hover:text-white/60 transition-colors"
              >
                Skip &rarr;
              </button>
            )}
          </div>

          {/* Stage indicator */}
          <div className="mt-12 flex items-center gap-2">
            {STAGES.map((s, i) => (
              <button key={i} onClick={() => setStage(i)} className="group flex flex-col items-center">
                <div className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === stage ? "w-12" : "w-6"
                } ${
                  i <= stage
                    ? i < 4 ? (i <= 1 ? "bg-white/25" : i <= 2 ? "bg-amber-400/40" : "bg-red-400/40") : "bg-emerald-400/50"
                    : "bg-white/[0.06]"
                }`} />
                <span className={`mt-2 text-[0.6rem] transition-all duration-300 whitespace-nowrap ${
                  i === stage ? "text-white/50" : "text-transparent"
                }`}>
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right — animated scene */}
        <div className="lg:flex-1 lg:pl-16 w-full mt-12 lg:mt-0">
          <div className="relative w-full" style={{ height: "560px" }}>
            <ScenePanel stage={stage} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Transition wrapper — crossfades between stages ─── */
function Stage({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div
      className="absolute inset-0 transition-all duration-700 ease-out"
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "scale(1) translateY(0)" : "scale(0.97) translateY(8px)",
        pointerEvents: active ? "auto" : "none",
      }}
    >
      {children}
    </div>
  )
}

/* ─── Staggered fade-in for elements within a stage ─── */
function Stagger({ delay = 0, children, className = "" }: {
  delay?: number; children: React.ReactNode; className?: string
}) {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const t = setTimeout(() => setVisible(true), delay)
    return () => { clearTimeout(t); setVisible(false); setMounted(false) }
  }, [delay])

  if (!mounted) return null

  return (
    <div
      className={`transition-all duration-600 ease-out ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
      }}
    >
      {children}
    </div>
  )
}


function ScenePanel({ stage }: { stage: number }) {
  return (
    <div className="relative w-full h-full">

      {/* ━━━ Stage 0: The Scale ━━━ */}
      <Stage active={stage === 0}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {/* Project grid */}
          <Stagger delay={200}>
            <p className="text-center text-sm text-white/30 mb-4">Active IT projects right now in a typical enterprise</p>
          </Stagger>

          <Stagger delay={400}>
            <div className="grid grid-cols-12 gap-1.5">
              {Array.from({ length: 96 }).map((_, i) => (
                <div
                  key={i}
                  className="h-3 w-3 rounded-sm transition-all"
                  style={{
                    backgroundColor: i < 12
                      ? "rgba(248,113,113,0.5)"  // red — at risk
                      : i < 36
                      ? "rgba(251,191,36,0.3)"   // amber — drifting
                      : "rgba(255,255,255,0.06)", // grey — in flight
                    animationDelay: `${i * 20}ms`,
                  }}
                />
              ))}
            </div>
          </Stagger>

          <Stagger delay={600}>
            <div className="flex items-center gap-6 text-[0.65rem] text-white/25">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-sm bg-white/[0.06]" />
                <span>In flight</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-sm bg-amber-400/30" />
                <span>Drifting from plan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-sm bg-red-400/50" />
                <span>At risk</span>
              </div>
            </div>
          </Stagger>

          <Stagger delay={900}>
            <div className="mt-4 grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-2xl font-bold text-white/60">50–200</p>
                <p className="text-[0.65rem] text-white/20 mt-1">Enterprise (2k–20k people)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white/60">300+</p>
                <p className="text-[0.65rem] text-white/20 mt-1">Fortune 500</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-400/60">71%</p>
                <p className="text-[0.65rem] text-white/20 mt-1">Underperform</p>
              </div>
            </div>
          </Stagger>
        </div>
      </Stage>


      {/* ━━━ Stage 1: Pick One ━━━ */}
      <Stage active={stage === 1}>
        <div className="flex flex-col h-full pt-6">
          <Stagger delay={100}>
            <p className="text-sm text-white/30 mb-6">Pick any one. They all start the same way.</p>
          </Stagger>

          {/* The project card */}
          <Stagger delay={300}>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 mb-5">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-lg font-semibold text-white/80">SAP S/4HANA Migration</p>
                  <p className="text-xs text-white/30 mt-1">Phase 1 — Discovery &amp; Planning</p>
                </div>
                <div className="px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03]">
                  <span className="text-[0.65rem] text-white/40">Day 0</span>
                </div>
              </div>

              {/* Systems in scope */}
              <div className="grid grid-cols-4 gap-3 mb-5">
                {[
                  { name: "SAP", label: "S/4HANA" },
                  { name: "Okta", label: "Identity" },
                  { name: "Azure", label: "Entra ID" },
                  { name: "SNOW", label: "ServiceNow" },
                ].map(s => (
                  <div key={s.name} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 flex flex-col items-center gap-2">
                    <div className="h-9 w-9 rounded-lg border border-white/[0.08] bg-white/[0.04] flex items-center justify-center">
                      <span className="text-[0.6rem] font-bold text-white/40">{s.name}</span>
                    </div>
                    <span className="text-[0.55rem] text-white/25">{s.label}</span>
                    <div className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-white/15" />
                      <span className="text-[0.5rem] text-white/20">Not connected</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* The plan */}
              <div className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                <div>
                  <p className="text-xs font-medium text-white/40">Implementation plan</p>
                  <p className="text-[0.6rem] text-white/20 mt-0.5">Discovery_Assessment_v3_FINAL.xlsx</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white/20">47 line items</p>
                  <p className="text-[0.6rem] text-white/15">0 connected to live state</p>
                </div>
              </div>
            </div>
          </Stagger>

          {/* Team */}
          <Stagger delay={700}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["IT", "PM", "SI", "VP"].map(r => (
                    <div key={r} className="h-7 w-7 rounded-full border-2 border-[#0a0a0a] bg-white/[0.06] flex items-center justify-center">
                      <span className="text-[0.5rem] text-white/35">{r}</span>
                    </div>
                  ))}
                </div>
                <span className="text-[0.65rem] text-white/25">Internal team + SI partner</span>
              </div>
              <div className="text-[0.65rem] text-white/20">
                Dependencies verified: <span className="text-amber-400/50">0</span>
              </div>
            </div>
          </Stagger>

          {/* Confidence bar */}
          <Stagger delay={1000} className="mt-6">
            <div className="flex items-center gap-3">
              <span className="text-[0.6rem] text-white/25 w-24 shrink-0">Team confidence</span>
              <div className="h-2 flex-1 rounded-full bg-white/[0.06] overflow-hidden">
                <div className="h-full rounded-full bg-white/20" style={{ width: "92%" }} />
              </div>
              <span className="text-[0.65rem] text-white/30">92%</span>
            </div>
          </Stagger>
        </div>
      </Stage>


      {/* ━━━ Stage 2: Month 3 — Divergence ━━━ */}
      <Stage active={stage === 2}>
        <div className="flex flex-col h-full pt-6">
          <Stagger delay={100}>
            <p className="text-sm text-white/30 mb-6">Three months in. The plan hasn&apos;t been updated since kickoff.</p>
          </Stagger>

          {/* Split view — plan vs reality */}
          <Stagger delay={300}>
            <div className="grid grid-cols-2 gap-4 mb-5">
              {/* Left: The plan */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/25 mb-4">What the plan says</p>
                <div className="space-y-3">
                  {[
                    { system: "ServiceNow", state: "Tokyo" },
                    { system: "Azure AD", state: "Azure AD" },
                    { system: "SAP transport", state: "Open" },
                    { system: "Dependencies", state: "12 documented" },
                  ].map(r => (
                    <div key={r.system} className="flex items-center justify-between py-1.5 border-b border-white/[0.03]">
                      <span className="text-xs text-white/35">{r.system}</span>
                      <span className="text-[0.65rem] text-white/20">{r.state}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-[0.6rem] text-white/15">Last updated: Day 0</div>
              </div>

              {/* Right: Reality */}
              <div className="rounded-2xl border border-amber-400/15 bg-amber-400/[0.02] p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-amber-400/40 mb-4">What actually happened</p>
                <div className="space-y-3">
                  {[
                    { system: "ServiceNow", state: "Xanadu (upgraded)", color: "text-amber-400/60" },
                    { system: "Azure AD", state: "Now Entra ID", color: "text-amber-400/60" },
                    { system: "SAP transport", state: "Locked by basis team", color: "text-red-400/60" },
                    { system: "Dependencies", state: "31 discovered so far", color: "text-amber-400/60" },
                  ].map(r => (
                    <div key={r.system} className="flex items-center justify-between py-1.5 border-b border-amber-400/[0.06]">
                      <span className="text-xs text-white/35">{r.system}</span>
                      <span className={`text-[0.65rem] ${r.color}`}>{r.state}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-amber-400/60 animate-pulse" />
                  <span className="text-[0.6rem] text-amber-400/40">Nobody is reconciling this</span>
                </div>
              </div>
            </div>
          </Stagger>

          {/* Fragmented work */}
          <Stagger delay={700}>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 mb-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/25 mb-3">Where&apos;s the work?</p>
              <div className="grid grid-cols-5 gap-3">
                {[
                  { tool: "Jira", detail: "47 tickets\n3 projects", color: "border-blue-400/15" },
                  { tool: "Slack", detail: "#sap-migration\n1,200 msgs", color: "border-purple-400/15" },
                  { tool: "SharePoint", detail: "Evidence/\n3 wks stale", color: "border-amber-400/15" },
                  { tool: "Email", detail: "Re:Re:Fw:\n12 in thread", color: "border-red-400/10" },
                  { tool: "Laptops", detail: "runbook_v7\nNot shared", color: "border-red-400/10" },
                ].map(t => (
                  <div key={t.tool} className={`rounded-xl border ${t.color} bg-white/[0.02] p-3 text-center`}>
                    <p className="text-xs font-medium text-white/45">{t.tool}</p>
                    <p className="text-[0.55rem] text-white/20 mt-1.5 whitespace-pre-line leading-relaxed">{t.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Stagger>

          {/* Metrics */}
          <Stagger delay={1100}>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 flex-1">
                <span className="text-[0.6rem] text-white/25 shrink-0">Evidence coverage</span>
                <div className="h-2 flex-1 rounded-full bg-white/[0.06] overflow-hidden">
                  <div className="h-full rounded-full bg-amber-400/40" style={{ width: "23%" }} />
                </div>
                <span className="text-[0.65rem] text-amber-400/50">23%</span>
              </div>
              <div className="flex items-center gap-3 flex-1">
                <span className="text-[0.6rem] text-white/25 shrink-0">Team confidence</span>
                <div className="h-2 flex-1 rounded-full bg-white/[0.06] overflow-hidden">
                  <div className="h-full rounded-full bg-amber-400/30" style={{ width: "54%" }} />
                </div>
                <span className="text-[0.65rem] text-amber-400/50">54%</span>
              </div>
            </div>
          </Stagger>
        </div>
      </Stage>


      {/* ━━━ Stage 3: Go-Live — The Handoff ━━━ */}
      <Stage active={stage === 3}>
        <div className="flex flex-col h-full pt-6">
          <Stagger delay={100}>
            <p className="text-sm text-white/30 mb-6">Go-live day. Here&apos;s the state of the implementation.</p>
          </Stagger>

          <Stagger delay={300}>
            <div className="grid grid-cols-2 gap-4 mb-5">
              {/* Readiness */}
              <div className="rounded-2xl border border-red-400/15 bg-red-400/[0.02] p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-red-400/40 mb-4">Readiness</p>
                <div className="space-y-3">
                  {[
                    { item: "Data migration validated", status: "Partial", ok: false },
                    { item: "Feature activation confirmed", status: "8 / 23", ok: false },
                    { item: "Rollback plan tested", status: "Never", ok: false },
                    { item: "Integration endpoints verified", status: "3 / 11", ok: false },
                    { item: "Ops team trained", status: "Post-launch", ok: false },
                  ].map(r => (
                    <div key={r.item} className="flex items-center justify-between">
                      <span className="text-xs text-white/35">{r.item}</span>
                      <span className="text-[0.65rem] text-red-400/60">{r.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Knowledge */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/25 mb-4">Implementation knowledge</p>
                <div className="space-y-4">
                  {[
                    { who: "Lead engineer (leaving project)", pct: 64, color: "bg-red-400/50" },
                    { who: "SI consultant (contract ending)", pct: 22, color: "bg-red-400/30" },
                    { who: "Internal PM", pct: 10, color: "bg-white/15" },
                    { who: "Ops team (inheriting)", pct: 4, color: "bg-white/[0.06]" },
                  ].map(k => (
                    <div key={k.who}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[0.65rem] text-white/30">{k.who}</span>
                        <span className="text-[0.65rem] text-white/20">{k.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                        <div className={`h-full rounded-full ${k.color}`} style={{ width: `${k.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[0.6rem] text-red-400/40 mt-4">86% of knowledge walks out within 30 days</p>
              </div>
            </div>
          </Stagger>

          {/* The handoff */}
          <Stagger delay={800}>
            <div className="rounded-2xl border border-red-400/10 bg-red-400/[0.02] p-5 mb-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-red-400/30 mb-3">The handoff</p>
              <div className="flex items-center gap-6">
                <div className="flex-1 rounded-xl border border-white/[0.04] bg-white/[0.02] p-3">
                  <p className="text-xs text-white/40">Deliverable</p>
                  <p className="text-[0.65rem] text-white/20 mt-1">140-page PDF attached to an email</p>
                </div>
                <svg className="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-6-6l6 6-6 6" stroke="rgba(248,113,113,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex-1 rounded-xl border border-white/[0.04] bg-white/[0.02] p-3">
                  <p className="text-xs text-white/40">Ops team receives</p>
                  <p className="text-[0.65rem] text-white/20 mt-1">A system they can&apos;t fully explain</p>
                </div>
              </div>
            </div>
          </Stagger>

          {/* Metrics */}
          <Stagger delay={1200}>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 flex-1">
                <span className="text-[0.6rem] text-white/25 shrink-0">Evidence coverage</span>
                <div className="h-2 flex-1 rounded-full bg-white/[0.06] overflow-hidden">
                  <div className="h-full rounded-full bg-red-400/40" style={{ width: "23%" }} />
                </div>
                <span className="text-[0.65rem] text-red-400/50">23%</span>
              </div>
              <div className="flex items-center gap-3 flex-1">
                <span className="text-[0.6rem] text-white/25 shrink-0">Team confidence</span>
                <div className="h-2 flex-1 rounded-full bg-white/[0.06] overflow-hidden">
                  <div className="h-full rounded-full bg-red-400/30" style={{ width: "18%" }} />
                </div>
                <span className="text-[0.65rem] text-red-400/50">18%</span>
              </div>
            </div>
          </Stagger>
        </div>
      </Stage>


      {/* ━━━ Stage 4: Resolution — Panaptico ━━━ */}
      <Stage active={stage === 4}>
        <div className="flex flex-col h-full pt-6">
          <Stagger delay={100}>
            <p className="text-sm text-emerald-400/50 mb-6">Same project. With Panaptico.</p>
          </Stagger>

          <Stagger delay={300}>
            <div className="rounded-2xl border border-emerald-400/20 bg-[#0c0c0c] overflow-hidden shadow-2xl shadow-emerald-400/[0.03]">
              {/* Header */}
              <div className="px-6 py-4 bg-emerald-400/[0.03] border-b border-emerald-400/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  <span className="text-sm font-semibold text-white/80">SAP S/4HANA Migration</span>
                </div>
                <span className="text-[0.65rem] text-emerald-400/50">Implementation Graph — Live</span>
              </div>

              {/* Systems */}
              <div className="px-6 py-4 border-b border-white/[0.04]">
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { name: "SAP", label: "S/4HANA", deps: "12 deps" },
                    { name: "Okta", label: "Identity", deps: "8 deps" },
                    { name: "Azure", label: "Entra ID", deps: "6 deps" },
                    { name: "SNOW", label: "ServiceNow", deps: "9 deps" },
                  ].map(s => (
                    <div key={s.name} className="rounded-xl border border-emerald-400/10 bg-emerald-400/[0.02] p-3 text-center">
                      <div className="h-8 w-8 mx-auto rounded-lg border border-emerald-400/15 bg-emerald-400/[0.04] flex items-center justify-center mb-2">
                        <span className="text-[0.55rem] font-bold text-emerald-400/60">{s.name}</span>
                      </div>
                      <p className="text-[0.6rem] text-white/30">{s.label}</p>
                      <div className="flex items-center justify-center gap-1 mt-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
                        <span className="text-[0.5rem] text-emerald-400/40">{s.deps}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Execution */}
              <div className="px-6 py-4 border-b border-white/[0.04]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/25">Governed Execution</span>
                  <span className="text-[0.65rem] text-emerald-400/50">38 / 38 tasks complete</span>
                </div>
                <div className="h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <div className="h-full rounded-full bg-emerald-400/50" style={{ width: "100%", animation: "fillBar 2s ease-out" }} />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[0.55rem] text-white/20">Every task linked to evidence</span>
                  <span className="text-[0.55rem] text-white/20">Every approval versioned</span>
                </div>
              </div>

              {/* Stats */}
              <div className="px-6 py-4 grid grid-cols-4 gap-4">
                {[
                  { value: "100%", label: "Evidence", sub: "coverage" },
                  { value: "35", label: "Dependencies", sub: "verified" },
                  { value: "0", label: "Drift events", sub: "undetected" },
                  { value: "Live", label: "Baseline", sub: "active" },
                ].map(s => (
                  <div key={s.label} className="text-center">
                    <p className="text-xl font-bold text-emerald-400/70">{s.value}</p>
                    <p className="text-[0.55rem] text-white/25 mt-0.5">{s.label}</p>
                    <p className="text-[0.5rem] text-white/15">{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </Stagger>

          {/* Confidence */}
          <Stagger delay={800} className="mt-5">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 flex-1">
                <span className="text-[0.6rem] text-white/25 shrink-0">Evidence coverage</span>
                <div className="h-2 flex-1 rounded-full bg-white/[0.06] overflow-hidden">
                  <div className="h-full rounded-full bg-emerald-400/50" style={{ width: "100%", animation: "fillBar 1.5s ease-out" }} />
                </div>
                <span className="text-[0.65rem] text-emerald-400/50">100%</span>
              </div>
              <div className="flex items-center gap-3 flex-1">
                <span className="text-[0.6rem] text-white/25 shrink-0">Operational continuity</span>
                <div className="h-2 flex-1 rounded-full bg-white/[0.06] overflow-hidden">
                  <div className="h-full rounded-full bg-emerald-400/40" style={{ width: "100%", animation: "fillBar 1.8s ease-out" }} />
                </div>
                <span className="text-[0.65rem] text-emerald-400/50">Persistent</span>
              </div>
            </div>
          </Stagger>
        </div>
      </Stage>
    </div>
  )
}
