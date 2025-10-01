"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CameraIcon } from "@/components/camera-icon"
import { FilmRoll } from "@/lib/data"
import { PhotoLightbox } from "@/components/photo-lightbox"

interface RollPageClientProps {
  roll: FilmRoll
}

export function RollPageClient({ roll }: RollPageClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const publishedDate = new Date(roll.publishedDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_300px]">
          {/* Main content - Photo grid */}
          <div className="space-y-8">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Back to archive
            </Link>

            {/* Photo grid */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
              {roll.photos.map((photo, index) => (
                <div key={photo.id} className="space-y-2">
                  <div
                    className="relative aspect-[3/4] cursor-pointer overflow-hidden rounded bg-secondary transition-opacity hover:opacity-90"
                    onClick={() => setLightboxIndex(index)}
                  >
                    <Image
                      src={photo.url || "/placeholder.svg"}
                      alt={`Frame ${photo.number}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">{photo.number}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Roll metadata */}
          <div className="space-y-8 lg:sticky lg:top-12 lg:h-fit">
            <div className="space-y-6">
              <CameraIcon />

              <div className="space-y-4">
                <div>
                  <h1 className="text-sm font-medium text-foreground">RL/{roll.id.toUpperCase()}</h1>
                  <p className="text-xs text-muted-foreground">Published {publishedDate}</p>
                  <p className="text-xs text-muted-foreground">
                    {roll.frames} frames, {roll.keepers} keepers
                  </p>
                </div>

                <div className="space-y-3 border-t border-border pt-4">
                  <div className="flex justify-between">
                    <span className="text-xs text-muted-foreground">Stock</span>
                    <span className="text-xs text-foreground">{roll.stock}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-muted-foreground">Format</span>
                    <span className="text-xs text-foreground">{roll.format}</span>
                  </div>
                </div>

                <div className="space-y-3 border-t border-border pt-4">
                  <div className="flex justify-between">
                    <span className="text-xs text-muted-foreground">Camera</span>
                    <span className="text-xs text-foreground">{roll.camera}</span>
                  </div>
                  {roll.lens && (
                    <div className="flex justify-between">
                      <span className="text-xs text-muted-foreground">Lens</span>
                      <span className="text-xs text-foreground">{roll.lens}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <PhotoLightbox photos={roll.photos} initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </div>
  )
}
