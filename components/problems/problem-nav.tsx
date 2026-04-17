"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"

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

export default function ProblemNav() {
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
              href={`/#${item.toLowerCase().replace(/\s+/g, "-")}`}
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
            <a key={item} href={`/#${item.toLowerCase().replace(/\s+/g, "-")}`} className="block py-2 text-sm text-[#1a1a1a]/70">
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
