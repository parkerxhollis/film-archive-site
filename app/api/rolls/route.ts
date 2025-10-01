import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { FilmRoll, Photo } from '@/lib/data'

export interface RollMetadata {
  camera: string
  location: string
  date: string
  filmStock: string
  iso: string
  filmFormat: string
  note: string
}

function parseMetadataFile(content: string): RollMetadata {
  const lines = content.split('\n')
  const metadata: Partial<RollMetadata> = {}
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    
    if (line.startsWith('## Camera')) {
      // Get the next non-empty line
      let j = i + 1
      while (j < lines.length && lines[j].trim() === '') j++
      if (j < lines.length) {
        metadata.camera = lines[j].trim()
      }
    } else if (line.startsWith('## Location')) {
      let j = i + 1
      while (j < lines.length && lines[j].trim() === '') j++
      if (j < lines.length) {
        metadata.location = lines[j].trim()
      }
    } else if (line.startsWith('## Date')) {
      let j = i + 1
      while (j < lines.length && lines[j].trim() === '') j++
      if (j < lines.length) {
        metadata.date = lines[j].trim()
      }
    } else if (line.startsWith('## Film Stock')) {
      let j = i + 1
      while (j < lines.length && lines[j].trim() === '') j++
      if (j < lines.length) {
        metadata.filmStock = lines[j].trim()
      }
    } else if (line.startsWith('## ISO')) {
      let j = i + 1
      while (j < lines.length && lines[j].trim() === '') j++
      if (j < lines.length) {
        metadata.iso = lines[j].trim()
      }
    } else if (line.startsWith('## Film Format')) {
      let j = i + 1
      while (j < lines.length && lines[j].trim() === '') j++
      if (j < lines.length) {
        metadata.filmFormat = lines[j].trim()
      }
    } else if (line.startsWith('## Note')) {
      // Note can be multi-line, so we need to collect all lines after this
      const noteLines = []
      let j = i + 1
      while (j < lines.length && !lines[j].startsWith('##')) {
        if (lines[j].trim() !== '') {
          noteLines.push(lines[j].trim())
        }
        j++
      }
      metadata.note = noteLines.join(' ').trim()
    }
  }
  
  return metadata as RollMetadata
}

function getImageFiles(rollPath: string): string[] {
  const files = fs.readdirSync(rollPath)
  return files
    .filter(file => {
      const ext = path.extname(file).toLowerCase()
      return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext)
    })
    .sort((a, b) => {
      // Sort by filename numerically
      const aNum = parseInt(path.basename(a, path.extname(a)))
      const bNum = parseInt(path.basename(b, path.extname(b)))
      return aNum - bNum
    })
}

function parseRollDirectory(rollPath: string): FilmRoll | null {
  try {
    const metadataPath = path.join(rollPath, 'metadata.md')
    
    if (!fs.existsSync(metadataPath)) {
      console.warn(`No metadata.md found in ${rollPath}`)
      return null
    }
    
    const metadataContent = fs.readFileSync(metadataPath, 'utf-8')
    const metadata = parseMetadataFile(metadataContent)
    
    const imageFiles = getImageFiles(rollPath)
    
    if (imageFiles.length === 0) {
      console.warn(`No images found in ${rollPath}`)
      return null
    }
    
    const rollId = path.basename(rollPath)
    const rollNumber = parseInt(rollId.replace('roll-', '')) || 1
    
    const photos: Photo[] = imageFiles.map((file, index) => ({
      id: `${rollId}-${index + 1}`,
      number: String(index + 1),
      url: `/rolls/${rollId}/${file}`
    }))
    
    return {
      id: rollId,
      number: rollNumber,
      name: metadata.filmStock || '',
      camera: metadata.camera || '',
      frames: imageFiles.length,
      format: parseInt(metadata.filmFormat) || 0,
      thumbnail: photos[0]?.url || '/placeholder.svg',
      publishedDate: metadata.date || '',
      keepers: imageFiles.length, // For now, assume all photos are keepers
      stock: metadata.filmStock || '',
      lens: undefined, // Could be added to metadata if needed
      photos
    }
  } catch (error) {
    console.error(`Error parsing roll directory ${rollPath}:`, error)
    return null
  }
}

function getAllRolls(): FilmRoll[] {
  const rollsDir = path.join(process.cwd(), 'public', 'rolls')
  
  if (!fs.existsSync(rollsDir)) {
    console.warn('Rolls directory not found')
    return []
  }
  
  const rollDirs = fs.readdirSync(rollsDir)
    .filter(item => {
      const itemPath = path.join(rollsDir, item)
      return fs.statSync(itemPath).isDirectory()
    })
    .sort()
  
  const rolls: FilmRoll[] = []
  
  for (const rollDir of rollDirs) {
    const rollPath = path.join(rollsDir, rollDir)
    const roll = parseRollDirectory(rollPath)
    
    if (roll) {
      rolls.push(roll)
    }
  }
  
  return rolls
}

export async function GET() {
  try {
    const rolls = getAllRolls()
    return NextResponse.json(rolls)
  } catch (error) {
    console.error('Error fetching rolls:', error)
    return NextResponse.json({ error: 'Failed to fetch rolls' }, { status: 500 })
  }
}
