import type { Metadata } from "next"
import ProblemPageLayout from "@/components/problems/problem-page-layout"
import { problemPages, generateProblemMetadata } from "@/lib/problems-data"

const data = problemPages["governed-execution"]

export const metadata: Metadata = generateProblemMetadata("governed-execution")

export default function GovernedExecution() {
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
