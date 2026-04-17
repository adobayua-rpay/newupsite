import type { Metadata } from "next"
import ProblemPageLayout from "@/components/problems/problem-page-layout"
import { problemPages, generateProblemMetadata } from "@/lib/problems-data"

const data = problemPages["evidence-collection"]

export const metadata: Metadata = generateProblemMetadata("evidence-collection")

export default function EvidenceCollection() {
  return (
    <ProblemPageLayout
      slug={data.slug}
      category={data.category}
      title={data.title}
      subtitle={data.subtitle}
      problem={data.problem}
      solution={data.solution}
      capabilities={data.capabilities}
    />
  )
}
