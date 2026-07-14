# Pixel Memories

Pixel Memories creates premium personal websites for memories, relationships, friendships, and portfolios.

We turn customer stories into clean, mobile-friendly websites with photos, videos, timelines, countdowns, surprise interactions, and premium animations.

## Official Premium Showcase

This repository currently contains the live Premium Loved One showcase website.

Live demo:

```text
https://showcase-loved-one.vercel.app/
```

This demo is built to help customers understand the quality of our Premium Plan before placing an order.

## Premium Showcase Websites

### 1. Premium Loved One Website

Status: Live

Link:

```text
https://showcase-loved-one.vercel.app/
```

Includes:

- Premium one-page website
- Up to 20 photo placeholders
- Relationship timeline
- Countdown timer
- Video memory section
- Interactive surprise button
- Smooth scroll animations
- Glassmorphism cards
- Mobile-first responsive design
- Dark and light mode

### 2. Premium Best Friend Website

Status: Coming soon

Planned link:

```text
https://showcase-best-friend.vercel.app/
```

This showcase will demonstrate a fun, emotional friendship website with best friend memories, inside jokes, timeline, video section, surprise button, and premium animations.

### 3. Premium Portfolio Website

Status: Coming soon

Planned link:

```text
https://showcase-portfolio.vercel.app/
```

This showcase will demonstrate a clean personal portfolio website for students, developers, creators, freelancers, and beginners who want a professional online identity.

## Our Website Services

### Loved One Websites

For birthdays, anniversaries, proposals, crushes, family surprises, and emotional gifts.

- Basic: ₹99
- Standard: ₹199
- Premium: ₹349

Standard includes up to 10 photos, countdown, smooth animations, and 3 revisions. Premium includes up to 20 photos through two uploads of 10, video section, relationship timeline, surprise button, premium animations, and 4 revisions.

### Best Friend Websites

For birthdays, farewells, friendship anniversaries, school memories, college memories, and inside jokes.

- Basic: ₹99
- Standard: ₹199
- Premium: ₹349

Standard includes up to 10 photos, no video, and 3 revisions. Premium includes up to 20 photos through two uploads of 10, video memory section, friendship timeline, funny memories section, surprise button, premium animations, and 4 revisions.

### Portfolio Websites

For students, developers, creators, freelancers, and beginners building their first online presence.

- Basic: ₹499
- Standard: ₹999
- Premium: ₹1,499

Basic includes up to 2 projects and 2 revisions. Standard includes up to 5 projects and 3 revisions. Premium includes up to 3 pages, advanced animations, up to 8 projects, resume download, contact form setup, custom project sections, basic SEO setup, publishing support, and 4 revisions.

## Feature Direction

Video is reserved for Premium Loved One and Premium Best Friend plans. Customer videos can include their own sound through the video player.

- Photos
- Video sections
- Timelines
- Countdown timers
- Surprise interactions
- Responsive layouts
- Premium animations
- Publishing support

## Tech Stack

The Premium Loved One showcase uses:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel deployment

## Run This Showcase Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Customize Customer Content

- Names, subtitle, 20 memories, dates, and timeline: `data/content.ts`
- Letter and surprise message: `components/LovedOneExperience.tsx` and `components/Surprise.tsx`
- Countdown dates: `components/Countdown.tsx`
- Colors and visual styling: `app/globals.css`
- Video placeholder: `components/VideoMemory.tsx`

Each photo slot is intentionally a placeholder. Replace the placeholder areas with customer photos while preserving the premium layout.

## Deployment

If this showcase is deployed as its own repository, keep the Vercel Root Directory as:

```text
./
```

If all Pixel Memories showcases are later moved into one full repository, set the Loved One showcase root directory to:

```text
showcase/showcase-loved-one
```

## Business Goal

Pixel Memories is built to help people gift something personal, modern, and memorable.

Instead of sending only photos or messages, customers can share a full website made around their story.
