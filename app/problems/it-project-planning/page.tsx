import type { Metadata } from "next"
import ProblemPageLayout from "@/components/problems/problem-page-layout"
import { problemPages, generateProblemMetadata } from "@/lib/problems-data"

const data = problemPages["it-project-planning"]

export const metadata: Metadata = generateProblemMetadata("it-project-planning")

export default function ITProjectPlanning() {
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
