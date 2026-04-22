

# Portfolio Updates Plan

## Changes

### 1. Fix WhatsApp Link
Update all WhatsApp links from `https://wa.me/8801601345600` to `https://wa.me/+8801601345600` in HeroSection, Navbar, ContactSection, and data.ts.

### 2. Navbar Brand Text
Change "ZURVIX" to "Fahad AL Noman" in the Navbar header. Add "Blog" to nav links.

### 3. Fix Social Links in Contact Section
Ensure all social links in data.ts are correct and clickable. Verify icon mapping covers all entries.

### 4. Footer — Clickable ZURVIX Link
Make "ZURVIX" in the footer a clickable link to `https://zurvix.com`.

### 5. Contact Form — Email via EmailJS or Web3Forms
Replace the WhatsApp redirect on form submit with an actual email delivery service. Will use Web3Forms (free, no signup needed for basic usage) to send form submissions to `fahadnomanofficial@gmail.com`.

### 6. Add Blog Section
Create a new `BlogSection` component with:
- Blog category filter tabs
- Sample blog post cards with glass effect
- Each card shows title, category, excerpt, date, and a "Read More" link
- Placeholder content that can be replaced with real posts later

### 7. Add Profile Image
Copy the uploaded photo into `src/assets/` and display it in the Hero or About section with a glass-effect frame, sized appropriately (not full-size).

### 8. Add Location Info
Display current location (Dhaka, Bangladesh) and permanent address (Jhenaidah, Khulna, Bangladesh) in the About section with map pin icons.

### 9. Redesign Education & Experience in About Section
Replace the current compact list with a more detailed, visually appealing layout:
- **HSC** — Business Studies, Jabeda Sarwoar Computer and Commerce College
- **Diploma** — CSE, Daffodil Polytechnic Institute
- **BA** — Economics, Times University, Bangladesh
- **Work** — Web Developer @ Sail Technology (2021–Present)

Each entry gets its own glass card with institution name, degree, and year/status.

## Files Modified
- `src/lib/data.ts` — WhatsApp URL fix, blog data
- `src/components/Navbar.tsx` — Brand text, blog nav link
- `src/components/HeroSection.tsx` — WhatsApp link, profile image
- `src/components/AboutSection.tsx` — Education detail, location, image
- `src/components/ContactSection.tsx` — Email form integration
- `src/components/Footer.tsx` — Clickable ZURVIX link
- `src/components/BlogSection.tsx` — New component
- `src/pages/Index.tsx` — Add BlogSection

## Dependencies
- Will add `@web3forms/react` or use fetch API to Web3Forms endpoint for email delivery (no API key needed for access key approach — will need a Web3Forms access key or alternative).

