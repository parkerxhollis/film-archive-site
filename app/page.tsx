import Link from "next/link"
import Image from "next/image"
import { CameraIcon } from "@/components/camera-icon"
import { FilmRoll } from "@/lib/data"

// Force dynamic rendering
export const dynamic = 'force-dynamic'

async function getRolls(): Promise<FilmRoll[]> {
  try {
    // Use relative URL for internal API calls
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/rolls`, {
      cache: 'no-store'
    })
    if (!response.ok) {
      throw new Error('Failed to fetch rolls')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching rolls:', error)
    return []
  }
}

function getTotalFrames(rolls: FilmRoll[]): number {
  return rolls.reduce((total, roll) => total + roll.frames, 0)
}

function getLatestPublishDate(rolls: FilmRoll[]): string {
  if (rolls.length === 0) return 'Never'
  const dates = rolls.map((roll) => new Date(roll.publishedDate))
  const latest = new Date(Math.max(...dates.map((d) => d.getTime())))
  return latest.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })
}

export default async function HomePage() {
  const filmRolls = await getRolls()
  const totalFrames = getTotalFrames(filmRolls)
  const latestDate = getLatestPublishDate(filmRolls)

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start gap-8">
          <CameraIcon />

          <div className="space-y-4">
            <p className="max-w-xl text-base leading-relaxed text-foreground">
              A historical archive of @parkerxhollis's analog photography. Mostly taken on a Contax T2, favouring 50mm —
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
