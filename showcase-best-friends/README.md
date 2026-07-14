# Premium Best Friend Website Template

A production-ready customer demo for the Pixel Memories Premium Best Friend Plan.

## Live Plan Features

- Premium one-page friendship website
- Up to 20 photo placeholders arranged as two groups of 10
- Friendship intro letter
- Bestie profile cards
- Inside jokes section
- Friendship timeline
- Video memory section
- Countdown timer
- Bucket list
- Friendship stats
- Interactive surprise modal
- Premium animations
- 4 revisions
- Mobile-first responsive design

The Standard Best Friend plan supports up to 10 photos, has no video, and includes 3 revisions. Video is reserved for this Premium plan. Customer videos can include their own sound through the video player.

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Customize Content

- Names, profiles, memories, timeline, jokes, and bucket list: `data/content.ts`
- Main page sections: `components/BestFriendsExperience.tsx`
- Countdown date: `components/Countdown.tsx`
- Video placeholder: `components/VideoMemory.tsx`
- Colors and layout: `app/globals.css`

## Deploy To Vercel

If this full Pixel Memories repository is used, set the Vercel Root Directory to:

```text
showcase/showcase-best-friends
```
