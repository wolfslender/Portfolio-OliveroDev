import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
            <span className="text-5xl font-black text-primary">404</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Page not found
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="rounded-full px-6">
            <Link href="/">
              <Home className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-6">
            <Link href="/contact">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
