import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { CameraIcon } from "@/components/camera-icon"
import { FilmRoll } from "@/lib/data"
import { RollPageClient } from "./roll-page-client"

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

function getRollById(rolls: FilmRoll[], id: string): FilmRoll | undefined {
  return rolls.find((roll) => roll.id === id)
}

export default async function RollPage({ params }: { params: { id: string } }) {
  const rolls = await getRolls()
  const roll = getRollById(rolls, params.id)

  if (!roll) {
    notFound()
  }

  return <RollPageClient roll={roll} />
}
