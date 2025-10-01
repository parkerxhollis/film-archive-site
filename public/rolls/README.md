# Film Rolls Directory

This directory contains all the film rolls for the archive. Each roll is organized in its own folder with the following structure:

```
rolls/
├── roll-001/
│   ├── 01.jpg
│   ├── 02.jpg
│   ├── 03.jpg
│   ├── 04.jpg
│   └── metadata.md
├── roll-002/
│   ├── 01.jpg
│   ├── 02.jpg
│   ├── 03.jpg
│   ├── 04.jpg
│   ├── 05.jpg
│   └── metadata.md
└── ...
```

## Adding a New Roll

1. Create a new folder with the naming convention `roll-XXX` (e.g., `roll-005`)
2. Add your images to the folder, naming them sequentially: `01.jpg`, `02.jpg`, `03.jpg`, etc.
3. Create a `metadata.md` file with the following structure:

```markdown
# Roll XXX - Film Stock Name

## Camera
Camera Model

## Location
City, State/Country

## Date
YYYY-MM-DD

## Film Stock
Film Stock Name

## ISO
ISO Speed

## Film Format
120 or 135

## Note
Any additional notes about the roll, shooting conditions, or thoughts.
```

## Supported Image Formats

- `.jpg` / `.jpeg`
- `.png`
- `.webp`

## Metadata Fields

- **Camera**: The camera model used
- **Location**: Where the photos were taken
- **Date**: When the roll was shot (YYYY-MM-DD format)
- **Film Stock**: The type of film used
- **ISO**: The ISO speed of the film
- **Film Format**: Either 120 or 135
- **Note**: Optional additional information about the roll

The system will automatically:
- Sort images numerically by filename
- Generate photo URLs for the web interface
- Extract metadata for display
- Calculate frame counts and other statistics
