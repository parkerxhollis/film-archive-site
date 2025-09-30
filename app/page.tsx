import Link from "next/link"
import Image from "next/image"
import { CameraIcon } from "@/components/camera-icon"
import { filmRolls, getTotalFrames, getLatestPublishDate } from "@/lib/data"

export default function HomePage() {
  const totalFrames = getTotalFrames()
  const latestDate = getLatestPublishDate()

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start gap-8">
          <CameraIcon />

          <div className="space-y-4">
            <p className="max-w-xl text-base leading-relaxed text-foreground">
              A historical archive of @siddhartharun's analog photography. Mostly taken on a Leica M6, favouring 50mm —
              occasionally venturing into 35mm / 28mm focal lengths.
            </p>

            <p className="text-sm text-muted-foreground">
              {filmRolls.length} rolls, {totalFrames} frames.
              <br />
              Last published {latestDate}.
            </p>
          </div>
        </div>

        {/* Rolls Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 pr-8 text-left text-xs font-normal text-muted-foreground">#</th>
                <th className="pb-3 pr-8 text-left text-xs font-normal text-muted-foreground">Roll</th>
                <th className="pb-3 pr-8 text-left text-xs font-normal text-muted-foreground">Frames</th>
                <th className="pb-3 text-left text-xs font-normal text-muted-foreground">Format</th>
              </tr>
            </thead>
            <tbody>
              {filmRolls.map((roll) => (
                <tr key={roll.id} className="group border-b border-border last:border-0">
                  <td className="py-4 pr-8">
                    <span className="text-sm text-muted-foreground">{roll.number}</span>
                  </td>
                  <td className="py-4 pr-8">
                    <Link
                      href={`/rolls/${roll.id}`}
                      className="flex items-center gap-3 transition-opacity hover:opacity-70"
                    >
                      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded bg-secondary">
                        <Image
                          src={roll.thumbnail || "/placeholder.svg"}
                          alt={roll.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">{roll.name}</span>
                        <span className="text-xs text-muted-foreground">{roll.camera}</span>
                      </div>
                    </Link>
                  </td>
                  <td className="py-4 pr-8">
                    <span className="text-sm text-foreground">{roll.frames}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-sm text-foreground">{roll.format}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
