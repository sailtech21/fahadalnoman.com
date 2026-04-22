

# Replace Loader with Animated Portrait SVG

## Overview
Replace the current "ZURVIX" loading screen with an SVG stroke-drawing animation of Fahad's portrait. The outline draws itself progressively, then fills in with the image before the page fades in.

## How It Works
1. Loader displays a hand-traced SVG silhouette path of the portrait
2. The path animates via `stroke-dasharray` / `stroke-dashoffset` over ~2 seconds, drawing the outline
3. Once the outline completes, the portrait image fades in behind/inside the path using a `clipPath`
4. "Fahad AL Noman" text fades in below the portrait
5. The entire loader fades out, revealing the page

## Changes

### 1. Copy uploaded image to project
Copy `user-uploads://ChatGPT_Image_Apr_23_2026_03_04_21_AM.png` to `src/assets/fahad-profile.png` (replacing the existing profile image).

### 2. Update `src/components/Loader.tsx`
- Remove the "ZURVIX" heading entirely
- Add an inline SVG with a simplified portrait silhouette path (head + shoulders outline)
- Apply CSS `stroke-dasharray` and `stroke-dashoffset` animation to draw the outline over ~1.8s
- After the stroke animation, fade in the actual portrait image clipped to the silhouette shape
- Keep "Fahad AL Noman" as a subtitle that fades in after the portrait
- Keep "Loading Experience..." text
- Maintain the existing `framer-motion` fade-out transition to the main page

### 3. Add keyframes to `src/index.css`
Add a `@keyframes draw-stroke` animation:
```css
@keyframes draw-stroke {
  to { stroke-dashoffset: 0; }
}
```

## Technical Details
- The SVG silhouette will be a simplified head-and-shoulders path (~10-15 path commands) styled with a cyan/primary-colored stroke
- `stroke-dasharray` set to total path length; `stroke-dashoffset` animates from full length to 0
- The portrait PNG is placed behind the SVG using `clipPath` referencing the same silhouette, with a delayed opacity transition
- Total loader duration remains ~2.5s before fade-out

## Files Modified
- `src/assets/fahad-profile.png` — Replace with uploaded image
- `src/components/Loader.tsx` — New SVG animation loader
- `src/index.css` — Add draw-stroke keyframes

