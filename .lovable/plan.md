

# Elegant Loading Animation with Animated Portrait Assembly

## Overview
Replace the current loader with a sophisticated multi-phase animation where the portrait image assembles from fragmented pieces (slices that slide, scale, and fade into place), followed by a smooth text reveal of "Fahad Al Noman".

## Animation Sequence (Total ~4s)

**Phase 1 — Particle Shimmer (0–0.5s)**
Floating cyan/purple particles converge toward the center, establishing visual focus.

**Phase 2 — Portrait Assembly (0.3–2.2s)**
The portrait image is split into a grid of segments (using CSS `clip-path` on multiple copies of the image). Each segment:
- Starts scattered (random offset + rotation + scale 0)
- Animates to its correct position with staggered timing
- Uses `easeInOut` cubic bezier for smooth motion

Segments assemble from outside inward, creating a "pieces falling into place" effect.

**Phase 3 — Glow + Border (2.0–2.8s)**
Once the portrait is complete:
- A soft cyan glow radiates outward
- A thin gradient border traces around the portrait silhouette

**Phase 4 — Text Reveal (2.6–3.4s)**
"Fahad Al Noman" fades in letter-by-letter with a subtle upward slide, using a modern sans-serif style (Inter/system font, extra-light weight for "Al Noman", bold gradient for "Fahad").

**Phase 5 — Fade Out (3.6–4.2s)**
Entire loader fades to transparent, revealing the page beneath.

## Technical Approach

### `src/components/Loader.tsx`
- Use the existing `fahad-loader.png` image
- Create 9 segments (3x3 grid) using `motion.div` elements, each with `clip-path: inset(...)` on a background-image of the portrait
- Each segment has unique `initial` position (randomized offsets), animates to `{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }` with staggered delays
- Floating particles: 6-8 small `motion.div` circles that converge toward center
- Text uses `motion.span` per character for letter-by-letter fade-in
- Background stays `#0B0F19` to match the site theme
- Final container uses `framer-motion` exit animation

### `src/index.css`
- Remove the old `loader-stroke-anim` and `draw-stroke` keyframes (no longer needed)
- Add a subtle `@keyframes loader-glow` for the pulsing glow effect around the portrait

## Files Modified
- `src/components/Loader.tsx` — Complete rewrite with multi-phase animation
- `src/index.css` — Replace old loader keyframes with new glow keyframe

