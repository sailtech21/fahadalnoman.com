

# Portfolio Upgrade: Profile Image, Loader Update, and Individual Section Pages

## Overview
Three major changes: replace the placeholder profile image with the uploaded photo, update the loader to show both "ZURVIX" and "Fahad AL Noman", and convert all nav sections into dedicated routed pages with expanded content and mobile-first design.

---

## 1. Replace Profile Image
- Copy the uploaded image (`user-uploads://download_2_0.png`) to `src/assets/fahad-profile.png`, replacing the existing placeholder.

## 2. Update Loader
- Modify `Loader.tsx` to show "ZURVIX" as the main title and "Fahad AL Noman" as a subtitle below the gradient line.

## 3. Convert Sections to Individual Pages
Currently everything is on a single-page scroll. Each nav item will become its own route with a full dedicated page.

**New route structure:**
- `/` — Home (Hero section only + brief highlights)
- `/about` — Full About page (profile, bio, education, experience, location)
- `/skills` — Skills page (skill bars + tech stack + tools section expanded)
- `/work` — Portfolio page (projects with both tabs + more detail)
- `/services` — Services page (service cards + process/workflow section)
- `/blog` — Blog page (category filters + all posts with more content)
- `/contact` — Contact page (form + social links + map/location info)

**Each page will include:**
- Shared `Navbar` and `Footer`
- `ParticlesBackground`
- Page-specific expanded content with more data and sections
- Smooth page transitions via framer-motion

## 4. Navbar Updates
- Change nav links from `#section` anchors to React Router `<Link>` components pointing to `/about`, `/skills`, `/work`, `/services`, `/blog`, `/contact`.
- Mobile hamburger menu: improve with full-screen glass overlay, larger touch targets (min 48px), and smooth open/close animation.
- Highlight active route.

## 5. Mobile-Friendly Improvements (All Pages)
- All grids collapse to single column on mobile.
- Larger tap targets (48px minimum) on all buttons and links.
- Increased font sizes on mobile for readability.
- Bottom padding on mobile to avoid content being cut off.
- Mobile nav drawer: full-screen overlay with large links, smooth slide animation.
- Cards stack vertically with proper spacing on small screens.
- Form inputs sized for comfortable mobile typing.

## 6. Expanded Page Content

**About Page:**
- Full profile image with glass frame (larger on desktop).
- Detailed bio paragraph.
- Education cards with institution details.
- Work experience timeline.
- Location info with icons.
- Personal interests/hobbies section.

**Skills Page:**
- Animated skill bars (existing).
- Tech stack grid with icons.
- Tools and software section.
- Certifications or learning highlights.

**Work/Portfolio Page:**
- Featured and Bangladesh project tabs (existing).
- Larger project cards with descriptions.
- Project count stats.

**Services Page:**
- Service cards (existing) with expanded descriptions.
- Work process/methodology section (Discovery, Design, Develop, Deploy).
- CTA to contact.

**Blog Page:**
- Category filter tabs (existing).
- Blog cards with more visual hierarchy.
- Featured/pinned post at top.

**Contact Page:**
- Contact form (existing).
- Social links (existing).
- Address and location details.
- Availability status indicator.
- Direct WhatsApp and email buttons.

---

## Files to Create
- `src/pages/AboutPage.tsx`
- `src/pages/SkillsPage.tsx`
- `src/pages/WorkPage.tsx`
- `src/pages/ServicesPage.tsx`
- `src/pages/BlogPage.tsx`
- `src/pages/ContactPage.tsx`
- `src/components/PageLayout.tsx` (shared layout: navbar + particles + footer)

## Files to Modify
- `src/assets/fahad-profile.png` — Replace with uploaded image
- `src/components/Loader.tsx` — Add "Fahad AL Noman" subtitle
- `src/components/Navbar.tsx` — Router links, active state, improved mobile menu
- `src/App.tsx` — Add all new routes
- `src/pages/Index.tsx` — Simplify to Hero + brief highlights with links to pages

## No New Dependencies
All features use existing `framer-motion`, `react-router-dom`, `lucide-react`, and Tailwind CSS.

