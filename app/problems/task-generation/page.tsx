import type { Metadata } from "next"
import ProblemPageLayout from "@/components/problems/problem-page-layout"
import { problemPages, generateProblemMetadata } from "@/lib/problems-data"

const data = problemPages["task-generation"]

export const metadata: Metadata = generateProblemMetadata("task-generation")

export default function TaskGeneration() {
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
