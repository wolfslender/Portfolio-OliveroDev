"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-destructive/10 mb-6">
            <span className="text-4xl">⚠</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Something went wrong
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            An unexpected error occurred. Please try again or go back home.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="rounded-full px-6">
            <RefreshCw className="mr-2 w-4 h-4" />
            Try Again
          </Button>
          <Button asChild variant="outline" className="rounded-full px-6">
            <Link href="/">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
