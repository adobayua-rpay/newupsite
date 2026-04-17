import type { Metadata } from "next"
import ProblemPageLayout from "@/components/problems/problem-page-layout"
import { problemPages, generateProblemMetadata } from "@/lib/problems-data"

const data = problemPages["post-go-live-continuity"]

export const metadata: Metadata = generateProblemMetadata("post-go-live-continuity")

export default function PostGoLiveContinuity() {
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
