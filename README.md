# Film Archive

A minimal, elegant web application for archiving and showcasing analog film photography. Inspired by [lltg.co](https://lltg.co), this project provides a clean interface to catalog your film rolls and display your photographs in a beautiful gallery format.

![Film Archive Homepage](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original_0aff0ae84e17dfc52f404682a8bac15a-HH47os8Yk2apXAfLhIH3qnLIDUiYhb.webp)

## Features

- **Roll Index**: Clean table view listing all your film rolls with thumbnails, frame counts, and format details
- **Photo Galleries**: Individual pages for each roll displaying photos in a responsive grid
- **Lightbox Viewer**: Click any photo to view it larger with keyboard navigation
- **Film Metadata**: Track film stock, camera, lens, format, and publishing dates
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **Minimal Aesthetic**: Clean, archival design that puts your photography first

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist Sans & Geist Mono](https://vercel.com/font)
- **Package Manager**: pnpm (recommended)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager (recommended) or npm/yarn

### Installation

1. Clone or download this repository:
```bash
git clone <your-repo-url>
cd film-archive
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

> **Note**: The app comes with sample film rolls in `/public/rolls/`. You can add your own rolls by following the instructions in the "Adding Your Own Film Rolls" section below.

## Adding Your Own Film Rolls

The film archive now uses a directory-based system for managing rolls. No code editing required!

### Directory Structure

All film rolls are stored in `/public/rolls/` with the following structure:

```
public/rolls/
├── roll-001/
│   ├── 01.jpg
│   ├── 02.jpg
│   ├── 03.jpg
│   └── metadata.md
├── roll-002/
│   ├── 01.jpg
│   ├── 02.jpg
│   └── metadata.md
└── ...
```

### Adding a New Roll

1. **Create a new folder** in `/public/rolls/` with the naming convention `roll-XXX` (e.g., `roll-005`)

2. **Add your images** to the folder, naming them sequentially:
   - `01.jpg`, `02.jpg`, `03.jpg`, etc.
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

3. **Create a `metadata.md` file** with the following structure:

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

4. **Update the archive description** in `app/page.tsx` to personalize the homepage text

### Example Roll

Here's a complete example for `roll-005`:

**Folder**: `/public/rolls/roll-005/`
- `01.jpg` - First photo
- `02.jpg` - Second photo  
- `03.jpg` - Third photo
- `metadata.md` - Roll information

**metadata.md content**:
```markdown
# Roll 005 - Kodak Portra 400

## Camera
Leica M6

## Location
Tokyo, Japan

## Date
2025-01-20

## Film Stock
Kodak Portra 400

## ISO
400

## Film Format
135

## Note
Street photography in Shibuya during golden hour. The Portra 400 handled the mixed lighting beautifully.
```

The system will automatically:
- Sort images numerically by filename
- Generate photo URLs for the web interface
- Extract metadata for display
- Calculate frame counts and other statistics

## Project Structure

```
film-archive/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage with rolls table
│   ├── globals.css         # Global styles and theme
│   ├── not-found.tsx       # 404 page
│   └── rolls/
│       └── [id]/
│           └── page.tsx    # Individual roll detail page
├── components/
│   ├── camera-icon.tsx     # Camera logo icon
│   ├── photo-lightbox.tsx  # Photo viewer modal
│   ├── theme-provider.tsx  # Theme context provider
│   └── ui/                 # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── ...             # Other Radix UI components
├── hooks/
│   ├── use-mobile.ts       # Mobile detection hook
│   └── use-toast.ts        # Toast notification hook
├── lib/
│   ├── data.ts             # Film roll data interface
│   ├── roll-parser.ts      # Directory-based roll parser
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
│   └── rolls/              # Film roll directories
│       ├── roll-001/       # Individual roll folders
│       ├── roll-002/
│       └── ...
├── styles/
│   └── globals.css         # Additional global styles
├── components.json         # UI components configuration
├── next.config.mjs         # Next.js configuration
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

Or use the Vercel CLI:
```bash
pnpm i -g vercel
vercel
```

### Deploy to Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Next.js:

- **Netlify**: Use the [Next.js plugin](https://docs.netlify.com/integrations/frameworks/next-js/)
- **Railway**: Connect your GitHub repo and deploy
- **Self-hosted**: Build with `pnpm build` and run with `pnpm start`

## Customization

### Colors & Theme

Edit `app/globals.css` to customize the color scheme. The theme uses CSS variables:

```css
@theme inline {
  --color-background: #f5f5f5;
  --color-foreground: #1a1a1a;
  /* ... more variables */
}
```

### Typography

Fonts are configured in `app/layout.tsx`. To use different fonts:

1. Import from `next/font/google`
2. Update the font variables in `globals.css`

### Layout

The photo grid layout can be adjusted in `app/rolls/[id]/page.tsx` by modifying the grid classes:

```tsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
```

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

- Design inspired by [lltg.co](https://lltg.co)
- Built with [v0](https://v0.dev) by Vercel
- Sample photos generated for demonstration purposes

## Contributing

Feel free to open issues or submit pull requests if you have suggestions for improvements!

### Development

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test them locally
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## Troubleshooting

### Common Issues

- **Build errors**: Make sure you're using Node.js 18+ and have installed dependencies with `pnpm install`
- **Images not loading**: Ensure your photos are in the correct `/public/rolls/roll-XXX/` folder with proper naming (01.jpg, 02.jpg, etc.)
- **Roll not appearing**: Check that your roll folder has a `metadata.md` file with all required fields
- **Metadata not displaying**: Verify your `metadata.md` file follows the exact format with `## Field Name` headers
- **TypeScript errors**: Run `pnpm build` to check for type errors before deploying

---

**Happy archiving!** 📷🎞️
