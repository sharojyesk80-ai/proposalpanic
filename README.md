# Proposal-pass Website

**Proposal-pass** is a complete, production-ready website for BBA fifth-semester students in Nepal to prepare their research proposals.

## Table of Contents

1. [Overview](#overview)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Available Scripts](#available-scripts)
5. [Adding/Updating Research Topics](#adding-updating-research-topics)
6. [Replacing Reference Proposal](#replacing-reference-proposal)
7. [Replacing Tutorial Video](#replacing-tutorial-video)
8. [Updating Clever Humanizer Link](#updating-clever-humanizer-link)
9. [Configuring Public URL](#configuring-public-url)
10. [Deploying to Vercel/Netlify](#deploying-to-vercelnetlify)

## Overview

Proposal-pass helps BBA students prepare research proposals using:
- Personalized research prompt generator
- Approved research topic selection
- Downloadable reference proposal
- Embedded video tutorial
- AI tool recommendations
- Clever Humanizer for text improvement
- Research readiness checklist
- Viral sharing features

**Brand identity:**
- Name: Proposal-pass
- Tagline: कम Tension. बढी Research.
- Secondary: Four details. Your research journey begins.
- Target: BBA 5th semester students in Nepal
- Personality: Funny, youthful, intelligent, relatable, helpful, creative
- Language: English mixed with natural Nepali
- Pricing: Completely free
- Registration/Login: Not required

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Building

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
/src/
  /components/      # React UI components
  /data/            # Research topics and data
  /lib/             # Utilities and icons
  index.css          # Global styles and CSS variables
  main.tsx           # Application entry point

/public/
  /resources/       # Reference proposal PDF
  /videos/          # Tutorial video MP4
  /images/          # Mascot and poster images

/package.json        # Dependencies and scripts
/tailwind.config.ts  # Tailwind CSS configuration
/vite.config.ts     # Vite configuration
/index.html          # HTML entry point
```

### Key Components

- `NavBar` - Minimal sticky navigation with CTA
- `HeroSection` - Main headline, mascot, trust indicators
- `PromptGeneratorSection` - The core feature: 4-field form with topic selector
- `ResearchTopicsSection` - Browse approved research topics
- `VideoTutorialSection` - Embedded video player
- `ReferenceProposalSection` - Download reference PDF
- `HumanizerSection` - Clever Humanizer integration
- `AIToolSelectionSection` - 4 AI tool cards
- `ResearchChecklistSection` - Progress checklist
- `PanicMeterSection` - Stress meter
- `DeadlineCalculatorSection` - Submission date calculator
- `ShareSection` - Viral sharing options
- `FaqSection` - Frequently asked questions
- `Footer` - Site footer with links

## Adding/Updating Research Topics

Edit `src/data/researchTopics.json`:

```json
{
  "topics": [
    {
      "id": "NEW001",
      "researchTopic": "Your Research Title",
      "category": "Category Name",
      "independentVariables": "Var1, Var2, Var3",
      "dependentVariable": "Outcome Variable"
    }
  ],
  "categories": [
    "Category 1",
    "Category 2"
  ]
}
```

- Add topics following the existing structure
- Use consistent formatting for variable fields
- Categories should match the supported list or add new ones

## Replacing Reference Proposal

1. Place the new PDF at `public/resources/reference-proposal.pdf`
2. Ensure the file is authorized for distribution
3. Remove unnecessary personal information belonging to the original author
4. The filename and size will automatically update in the UI

## Replacing Tutorial Video

1. Place the new MP4 at `public/videos/proposal-tutorial.mp4`
2. The video should be browser-compatible (H.264 video, AAC audio)
3. Optimal: 1080×1920 aspect ratio, ~30 seconds duration
4. The poster image is automatically extracted at `public/images/tutorial-poster.jpg`

## Updating Clever Humanizer Link

Edit the URL in `src/components/HumanizerSection.tsx`:

```tsx
<a
  href="https://cleverhumanizer.ai/"
  target="_blank"
  rel="noopener noreferrer"
  ...
>
```

## Configuring Public URL

The website uses relative paths (`./`). For deployment:

- **Vercel/Netlify**: The current config `base: "./"` works perfectly
- For subpath deployment, change `base` in `vite.config.ts`

## Deploying to Vercel/Netlify

### Vercel

1. Push your code to a GitHub repository
2. Import the repository to Vercel
3. Vercel will automatically detect Vite/React setup
4. Deploy - the site will be live at your Vercel URL

### Netlify

1. Push your code to a GitHub repository
2. Connect the repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

### Important Notes

- The website uses **relative paths** (`base: "./"`), so it works out-of-the-box on both Vercel and Netlify
- No backend, database, or authentication required
- All prompt generation happens client-side in the browser
- No personal data is transmitted to any server

## SEO and Social Preview

The website includes:

- **Page title**: Proposal-pass | Free BBA Research Proposal Prompt Generator Nepal
- **Meta description**: Select your BBA research topic, generate a personalized research prompt, download a reference proposal, watch the tutorial and prepare your research with your preferred AI tool.
- **Open Graph tags**: For social media sharing (Facebook, LinkedIn)
- **Twitter cards**: For X/Twitter sharing
- **Social preview image**: Generated at 1200×630 dimensions
- **Favicon**: Configured in index.html
- **Sitemap and robots.txt**: Basic configuration included

## Brand Assets

- **Acid Lime**: #D5FA52 (primary accent)
- **Warm Off-White**: #F5F5EE (background)
- **Almost Black**: #151515 (primary text)
- **Secondary Grey**: #6B6B6B (secondary text)
- **Pure White**: #FFFFFF (surface cards)
- **Success Green**: #16A34A (success states)

**Typography:**
- Headings: Space Grotesk
- Body: DM Sans
- Nepali text: Noto Sans Devanagari

## Mascot - Proposal Dai

The mascot is an original illustrated character - a humorous cartoon college student with oversized glasses, carrying a laptop and research papers. The mascot appears throughout the website with different emotional states:
- Stressed (before entering details)
- Excited (after selecting a topic)
- Celebrating (after copying prompt)
- Teaching (in tutorial section)
- Relaxed (after completing checklist)

SVG illustrations are used for scalability and zero dependency.

## Viral Features

1. **Panic Meter** - Humorously decreases as checklist completes
2. **Deadline Calculator** - Fun messages based on remaining time
3. **Proposal Survival Card** - Downloadable social media graphic
4. **Sharing System** - WhatsApp, copy link, QR code, native share
5. **Social Graphics** - 1080×1350 pixels with progress status

## Privacy

- No personal data collection
- No student details in URLs
- No permanent storage of academic identity
- Browser-based prompt personalization only
- Non-personal checklist progress saved in localStorage

## Development

This is a static-first website with:
- No mandatory backend
- No mandatory database
- No authentication
- No paid AI API
- No external humanizer API required
- Browser-based prompt personalization
- Lightweight and optimized performance