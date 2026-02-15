"use client"

import { Analytics as VercelAnalytics } from "@vercel/analytics/react"

export function AnalyticsWrapper() {
  const isVercelAnalyticsEnabled = process.env.NEXT_PUBLIC_VERCEL_ANALYTICS === "true"

  if (!isVercelAnalyticsEnabled) {
    return null
  }

  return <VercelAnalytics />
}
