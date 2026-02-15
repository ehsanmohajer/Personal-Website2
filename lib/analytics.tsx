"use client"

import Script from "next/script"

export function Analytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  if (!GA_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", eventName, parameters)
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    })
  }
}
