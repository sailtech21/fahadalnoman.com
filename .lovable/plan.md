

# Sophisticated Portrait Drawing Loader Animation

## Overview
Rewrite the Loader component with a three-phase animation sequence that simulates a portrait being "sketched into existence" before the real image is revealed, followed by a smooth name text fade-in.

## Animation Sequence (~4.5s total)

### Phase 1 — Sketch Drawing (~1.5s)
- SVG path strokes animate via `pathLength` to simulate hand-drawing lines around a face/portrait shape (outline, features, shoulders)
- Paths use the site's gradient colors (cyan to purple to pink)
- Lines draw in with staggered delays, giving a natural sketch feel

### Phase 2 — Portrait Reveal (~1.4s)
- Sketch strokes fade out as the real PNG portrait is revealed
- Reveal uses an expanding radial `clip-path` (`circle(0%)` to `circle(75%)`), creating an "unveiling from center" effect
- A shimmer sweep passes over the portrait once revealed
- A gradient border trace fades in around the portrait frame

### Phase 3 — Text Fade-In (~0.8s)
- "Fahad Al Noman" appears letter-by-letter with blur-to-sharp + slide-up animation
- "Fahad" in gradient bold, "Al Noman" in light foreground color
- A decorative gradient line expands below the name
- After a brief hold, the entire loader fades out

## Technical Details

### File: `src/components/Loader.tsx` — Full rewrite
- State machine with phases: `sketching` → `revealing` → `text` → `done`
- Uses `framer-motion` for all animations (already installed)
- SVG sketch lines use `motion.path` with `pathLength` animation
- Portrait revealed via CSS `clip-path: circle()` animated through framer-motion
- Shimmer effect: a gradient div sweeping across via `translateX`
- Text uses `filter: blur()` transition for a polished defocus-to-focus effect
- Background remains `#0B0F19` matching the site theme
- Transparent-ready: no extra background elements beyond the main container
- Uses existing `profileImg` from `@/assets/fahad-loader.png`

### No other files need changes
- The existing `loader-border-trace` utility in `index.css` will be replicated inline
- The component API (`onComplete` prop) stays identical

