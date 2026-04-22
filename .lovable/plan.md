

# Fahad Al Noman — Premium Animated Portfolio

## Overview
A futuristic, glassmorphism-styled developer portfolio for Fahad Al Noman, CEO & Founder of ZURVIX. Dark theme with cyan/purple neon glows, smooth animations, and high-conversion design.

## Design System
- **Background:** `#0B0F19` (deep dark)
- **Primary Glow:** `#00F5FF` (cyan)
- **Secondary:** `#7A5FFF` (purple)
- **Accent:** `#FF4D6D` (pink-red)
- **Glass Effect:** `backdrop-blur-xl`, semi-transparent white borders and backgrounds
- **Typography:** Modern sans-serif, clean and bold

## Sections (Single Page)

### 1. Loader Animation
- ZURVIX logo reveal with fade-in before main content appears

### 2. Navbar (Glass, Sticky)
- ZURVIX logo on left
- Menu links: About, Skills, Work, Services, Contact
- Glass blur background, becomes more opaque on scroll

### 3. Hero Section
- **Left:** Name, title (CEO & Founder of ZURVIX), headline, 3 CTA buttons (View Work, Hire Me, WhatsApp Me)
- **Right:** Terminal-style code animation with typing effect showing `const developer = "Fahad Al Noman"` etc.
- **Background:** Animated floating particles + subtle grid pattern

### 4. About Section
- Story from Jhenaidah → Dhaka → CEO
- Education cards (Times University, Diploma in CSE, HSC Commerce)
- Experience: Web Developer @ Sail Technology (2021–Present)
- Glass card layout with subtle glow

### 5. Skills Section
- Animated progress bars with glow effects
- React JS (85%), Node JS (79%), PHP (90%), Laravel (90%), Database (94%), Server Setup (87%)
- Bars animate on scroll into view

### 6. Portfolio Section
- Filter tabs: Featured / Bangladesh
- 3-column grid of project cards
- Each card: screenshot preview (fetched via thumbnail), project name, short description, tech tags, "Visit Website" button
- Hover: zoom + cyan glow border effect
- All 15+ project links included

### 7. Services Section
- Icon cards with glass effect for: Website Dev, Web App Dev, E-commerce, Server Setup & Deployment, AI Integration
- Hover glow animations

### 8. Why Choose Me
- Feature cards: Real business experience, CEO mindset, Full-stack expertise, International projects, Fast delivery

### 9. Tech Stack Section
- Icon grid with logos: React, Node.js, Laravel, PHP, MySQL, VPS/DevOps, GitHub, Vercel, Hostinger, Claude AI, VS Code
- Subtle hover glow on each icon

### 10. Experience Timeline
- Vertical animated timeline
- 2021 → Present: Web Developer @ Sail Technology
- Animated line drawing on scroll

### 11. Contact Section
- Split layout: left side with social links (Facebook, Instagram, LinkedIn, Email, WhatsApp) + right side with glass contact form
- All social links with icons and hover effects
- WhatsApp CTA prominently styled

## Animations & Effects
- Framer Motion for scroll-triggered animations and page transitions
- Typing animation in hero terminal
- Floating particles background (canvas-based or CSS)
- Cursor-following subtle light glow effect
- Smooth scroll behavior
- Progress bars animate when scrolled into view

## Mobile Responsive
- Hamburger menu with glass drawer
- Stacked layouts for all sections
- Touch-friendly cards and buttons

## Technical Approach
- Install `framer-motion` and `react-intersection-observer` for animations
- Custom particle background component
- Reusable GlassCard component for consistent glassmorphism
- Project data stored in a constants file for easy updates
- Responsive throughout using Tailwind breakpoints

