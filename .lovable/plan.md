

# Restore All Sections on Home Page

## Overview
Bring back all the original scrollable sections on the home page, so visitors see the full portfolio content on the landing page — just like before. The individual dedicated pages at `/about`, `/skills`, `/work`, etc. will remain as well.

## Changes

### `src/pages/Index.tsx`
Restore the original single-page layout with all sections:
- Hero
- About
- Skills
- Portfolio (Work)
- Services
- Why Choose Me
- Tech Stack
- Timeline
- Blog
- Contact
- Footer

This is the exact same layout as before the multi-page update. The dedicated pages at their own routes will continue to exist with their expanded content.

## Files Modified
- `src/pages/Index.tsx` — Restore all section imports and render them in order

