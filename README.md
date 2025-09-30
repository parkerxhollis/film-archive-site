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
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist Sans & Geist Mono](https://vercel.com/font)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone or download this repository:
\`\`\`bash
git clone <your-repo-url>
cd film-archive
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding Your Own Film Rolls

All film roll data is stored in `lib/data.ts`. To add your own rolls:

1. **Add your photos** to the `public` folder (organized however you like)

2. **Edit `lib/data.ts`** and add your roll data:

\`\`\`typescript
{
  id: "1",
  name: "Kodak Tri-X 400",
  camera: "Leica M6",
  stock: "Kodak Tri-X 400",
  format: "135",
  frames: 36,
  publishedDate: "2025-01-15",
  thumbnail: "/your-thumbnail.jpg",
  photos: [
    { id: 1, url: "/your-photo-1.jpg" },
    { id: 2, url: "/your-photo-2.jpg" },
    // ... more photos
  ],
  metadata: {
    lens: "Summicron 50mm f/2",
    iso: "400",
    keepers: 28
  }
}
\`\`\`

3. **Update the archive description** in `app/page.tsx` to personalize the homepage text

## Project Structure

\`\`\`
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
│   └── photo-lightbox.tsx  # Photo viewer modal
├── lib/
│   └── data.ts             # Film roll data
└── public/                 # Static assets (photos)
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

Or use the Vercel CLI:
\`\`\`bash
npm i -g vercel
vercel
\`\`\`

### Deploy to Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Next.js:

- **Netlify**: Use the [Next.js plugin](https://docs.netlify.com/integrations/frameworks/next-js/)
- **Railway**: Connect your GitHub repo and deploy
- **Self-hosted**: Build with `npm run build` and run with `npm start`

## Customization

### Colors & Theme

Edit `app/globals.css` to customize the color scheme. The theme uses CSS variables:

\`\`\`css
@theme inline {
  --color-background: #f5f5f5;
  --color-foreground: #1a1a1a;
  /* ... more variables */
}
\`\`\`

### Typography

Fonts are configured in `app/layout.tsx`. To use different fonts:

1. Import from `next/font/google`
2. Update the font variables in `globals.css`

### Layout

The photo grid layout can be adjusted in `app/rolls/[id]/page.tsx` by modifying the grid classes:

\`\`\`tsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
\`\`\`

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspired by [lltg.co](https://lltg.co)
- Built with [v0](https://v0.dev) by Vercel
- Sample photos generated for demonstration purposes

## Contributing

Feel free to open issues or submit pull requests if you have suggestions for improvements!

---

**Happy archiving!** 📷🎞️
