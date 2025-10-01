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
  number: number
  url: string
}

export const filmRolls: FilmRoll[] = [
  {
    id: "1",
    number: 1,
    name: "Kodak Tri-X 400",
    camera: "Mamiya 7ii",
    frames: 10,
    format: 120,
    thumbnail: "/black-and-white-film-photo.png",
    publishedDate: "2025-09-20",
    keepers: 8,
    stock: "Kodak Tri-X 400",
    photos: [
      { id: "1", number: 1, url: "/black-and-white-film-photo.png" },
      { id: "2", number: 2, url: "/outdoor-scene-film-photo.jpg" },
      { id: "3", number: 3, url: "/black-and-white-film-photo.png" },
      { id: "4", number: 4, url: "/outdoor-scene-film-photo.jpg" },
      { id: "5", number: 5, url: "/black-and-white-film-photo.png" },
      { id: "6", number: 6, url: "/outdoor-scene-film-photo.jpg" },
      { id: "7", number: 7, url: "/black-and-white-film-photo.png" },
      { id: "8", number: 8, url: "/outdoor-scene-film-photo.jpg" },
      { id: "9", number: 9, url: "/black-and-white-film-photo.png" },
      { id: "10", number: 10, url: "/outdoor-scene-film-photo.jpg" },
    ],
  },
  {
    id: "2",
    number: 2,
    name: "Kodak Vision3 250D",
    camera: "Mamiya 7ii",
    frames: 13,
    format: 135,
    thumbnail: "/color-film-photo.jpg",
    publishedDate: "2025-09-18",
    keepers: 10,
    stock: "Kodak Vision3 250D",
    photos: [
      { id: "1", number: 1, url: "/color-film-photo.jpg" },
      { id: "2", number: 2, url: "/cafe-interior-film-photo.jpg" },
      { id: "3", number: 3, url: "/person-in-cafe-film-photo.jpg" },
      { id: "4", number: 4, url: "/color-film-photo.jpg" },
      { id: "5", number: 5, url: "/cafe-interior-film-photo.jpg" },
      { id: "6", number: 6, url: "/person-in-cafe-film-photo.jpg" },
      { id: "7", number: 7, url: "/color-film-photo.jpg" },
      { id: "8", number: 8, url: "/cafe-interior-film-photo.jpg" },
      { id: "9", number: 9, url: "/person-in-cafe-film-photo.jpg" },
      { id: "10", number: 10, url: "/color-film-photo.jpg" },
      { id: "11", number: 11, url: "/cafe-interior-film-photo.jpg" },
      { id: "12", number: 12, url: "/person-in-cafe-film-photo.jpg" },
      { id: "13", number: 13, url: "/color-film-photo.jpg" },
    ],
  },
  {
    id: "3",
    number: 3,
    name: "Lomography 800",
    camera: "Leica MP",
    frames: 37,
    format: 135,
    thumbnail: "/lomography-film-photo.jpg",
    publishedDate: "2025-09-15",
    keepers: 29,
    stock: "Lomography 800",
    photos: Array.from({ length: 37 }, (_, i) => ({
      id: String(i + 1),
      number: i + 1,
      url:
        i % 3 === 0
          ? "/lomography-film-photo.jpg"
          : i % 3 === 1
            ? "/dark-interior-film-photo.jpg"
            : "/cafe-lights-film-photo.jpg",
    })),
  },
  {
    id: "20337b",
    number: 4,
    name: "Kodak Gold 200",
    camera: "Leica MP",
    frames: 29,
    format: 135,
    thumbnail: "/kodak-gold-film-photo.jpg",
    publishedDate: "2025-09-18",
    keepers: 6,
    stock: "Kodak Gold 200",
    lens: "Leica 50 Summilux-M Pre-ASPH",
    photos: [
      { id: "1", number: 83, url: "/cafe-interior-film-photo.jpg" },
      { id: "2", number: 84, url: "/person-in-cafe-film-photo.jpg" },
      { id: "3", number: 85, url: "/restaurant-interior-film-photo.jpg" },
      { id: "4", number: 88, url: "/bar-shelves-film-photo.jpg" },
      { id: "5", number: 89, url: "/cafe-lights-film-photo.jpg" },
      { id: "6", number: 10, url: "/dark-interior-film-photo.jpg" },
      { id: "7", number: 13, url: "/outdoor-scene-film-photo.jpg" },
      { id: "8", number: 14, url: "/person-working-film-photo.jpg" },
      { id: "9", number: 15, url: "/kitchen-scene-film-photo.jpg" },
    ],
  },
  {
    id: "5",
    number: 5,
    name: "Kodak Portra 160",
    camera: "Leica MP",
    frames: 39,
    format: 135,
    thumbnail: "/portra-film-photo.jpg",
    publishedDate: "2025-09-10",
    keepers: 32,
    stock: "Kodak Portra 160",
    photos: Array.from({ length: 39 }, (_, i) => ({
      id: String(i + 1),
      number: i + 1,
      url: i % 2 === 0 ? "/portra-film-photo.jpg" : "/color-film-photo.jpg",
    })),
  },
  {
    id: "6",
    number: 6,
    name: "Kodak Portra 400",
    camera: "Hasselblad 500 C/M",
    frames: 12,
    format: 120,
    thumbnail: "/hasselblad-film-photo.jpg",
    publishedDate: "2025-09-05",
    keepers: 11,
    stock: "Kodak Portra 400",
    photos: Array.from({ length: 12 }, (_, i) => ({
      id: String(i + 1),
      number: i + 1,
      url: i % 2 === 0 ? "/hasselblad-film-photo.jpg" : "/portra-film-photo.jpg",
    })),
  },
  {
    id: "7",
    number: 7,
    name: "Kodak Tri-X 400",
    camera: "Hasselblad XPan 2",
    frames: 20,
    format: 135,
    thumbnail: "/xpan-panoramic-film-photo.jpg",
    publishedDate: "2025-09-01",
    keepers: 18,
    stock: "Kodak Tri-X 400",
    photos: Array.from({ length: 20 }, (_, i) => ({
      id: String(i + 1),
      number: i + 1,
      url: i % 2 === 0 ? "/xpan-panoramic-film-photo.jpg" : "/black-and-white-film-photo.png",
    })),
  },
]

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
