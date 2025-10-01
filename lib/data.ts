export interface FilmRoll {
  id: string
  number: number
  name: string
  camera: string
  frames: number
  format: number
  thumbnail: string
  publishedDate: string
  keepers: number
  stock: string
  lens?: string
  photos: Photo[]
}

export interface Photo {
  id: string
  number: string
  url: string
}

// This will be populated by fetching from the API
export let filmRolls: FilmRoll[] = []

export function getTotalFrames(): number {
  return filmRolls.reduce((total, roll) => total + roll.frames, 0)
}

export function getLatestPublishDate(): string {
  const dates = filmRolls.map((roll) => new Date(roll.publishedDate))
  const latest = new Date(Math.max(...dates.map((d) => d.getTime())))
  return latest.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })
}

export function getRollById(id: string): FilmRoll | undefined {
  return filmRolls.find((roll) => roll.id === id)
}
