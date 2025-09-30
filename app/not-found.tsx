import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="mb-2 text-2xl font-medium text-foreground">Roll not found</h1>
        <p className="mb-6 text-sm text-muted-foreground">The film roll you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
        >
          ← Back to archive
        </Link>
      </div>
    </div>
  )
}
