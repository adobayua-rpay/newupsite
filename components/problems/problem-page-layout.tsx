import Link from "next/link"
import ProblemNav from "./problem-nav"
import { generateProblemJsonLd, problemPages } from "@/lib/problems-data"

const relatedPages: Record<string, string[]> = {
  "it-project-planning": ["system-discovery", "task-generation", "governed-execution"],
  "system-discovery": ["it-project-planning", "drift-detection", "task-generation"],
  "task-generation": ["system-discovery", "governed-execution", "it-project-planning"],
  "governed-execution": ["evidence-collection", "audit-trail", "task-generation"],
  "post-go-live-continuity": ["drift-detection", "adoption-tracking", "audit-trail"],
  "drift-detection": ["system-discovery", "post-go-live-continuity", "vendor-change-management"],
  "adoption-tracking": ["post-go-live-continuity", "drift-detection", "evidence-collection"],
  "audit-trail": ["governed-execution", "evidence-collection", "vendor-change-management"],
  "evidence-collection": ["governed-execution", "audit-trail", "adoption-tracking"],
  "vendor-change-management": ["drift-detection", "audit-trail", "evidence-collection"],
}

interface ProblemPageProps {
  slug: string
  category: string
  title: string
  subtitle: string
  problem: string
  solution: string
  capabilities: { title: string; description: string }[]
}

export default function ProblemPageLayout({ slug, category, title, subtitle, problem, solution, capabilities }: ProblemPageProps) {
  const jsonLd = generateProblemJsonLd(slug)
  const related = (relatedPages[slug] || [])
    .map((s) => problemPages[s])
    .filter(Boolean)

  return (
    <div className="min-h-screen bg-[#f5f0eb] text-[#1a1a1a]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ProblemNav />

      <article>
        {/* Hero */}
        <section className="px-6 pt-36 pb-16 md:pt-44 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#0d9488]">
              {category}
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#1a1a1a] md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#1a1a1a]/60 md:text-xl">
              {subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://alpha.panaptico.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#1a1a1a] px-8 py-3.5 text-center text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Try Panaptico free
              </a>
              <a
                href="mailto:info@panaptico.com"
                className="rounded-full border border-[#1a1a1a]/20 bg-white/50 px-8 py-3.5 text-center text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-white/80"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
              <div>
                <h2 className="text-sm font-medium uppercase tracking-widest text-[#1a1a1a]/40">The Problem</h2>
              </div>
              <p className="text-lg leading-relaxed text-[#1a1a1a]/70">{problem}</p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-6"><div className="h-px w-full bg-[#1a1a1a]/10" /></div>

        {/* How Panaptico Solves It */}
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
              <div>
                <h2 className="text-sm font-medium uppercase tracking-widest text-[#1a1a1a]/40">How Panaptico Solves It</h2>
              </div>
              <p className="text-lg leading-relaxed text-[#1a1a1a]/70">{solution}</p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-6"><div className="h-px w-full bg-[#1a1a1a]/10" /></div>

        {/* Capabilities */}
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-sm font-medium uppercase tracking-widest text-[#1a1a1a]/40">Key Capabilities</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {capabilities.map((c) => (
                <div key={c.title} className="rounded-xl border border-[#1a1a1a]/10 bg-white/60 p-6">
                  <h3 className="mb-2 text-base font-semibold text-[#1a1a1a]">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-[#1a1a1a]/60">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>

      {/* Related Problems */}
      {related.length > 0 && (
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-[#1a1a1a]/40">Related Problems</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/problems/${r.slug}`}
                  className="group rounded-xl border border-[#1a1a1a]/10 bg-white/60 p-5 transition-colors hover:bg-white/90"
                >
                  <p className="mb-1 text-xs font-medium uppercase tracking-widest text-[#0d9488]">{r.category}</p>
                  <h3 className="text-base font-semibold text-[#1a1a1a] group-hover:text-[#0d9488]">{r.title}</h3>
                  <p className="mt-1 text-sm text-[#1a1a1a]/50">{r.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a] md:text-4xl">
            Ready to solve this?
          </h2>
          <p className="mt-4 text-lg text-[#1a1a1a]/60">
            See how Panaptico handles this for your team.
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
              href="mailto:info@panaptico.com"
              className="rounded-full border border-[#1a1a1a]/20 bg-white/50 px-8 py-3.5 text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-white/80"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a]/10 px-6 py-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="text-sm text-[#1a1a1a]/40">© {new Date().getFullYear()} Panaptico. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-[#1a1a1a]/40 hover:text-[#1a1a1a]/60">Privacy</Link>
            <Link href="/terms" className="text-sm text-[#1a1a1a]/40 hover:text-[#1a1a1a]/60">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
