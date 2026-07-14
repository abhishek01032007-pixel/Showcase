# Premium Portfolio Website Showcase

A production-ready customer demo for the Pixel Memories Premium Personal Brand Plan.

Live showcase: https://showcase-premium-portfolio.vercel.app/

## Included Premium Features

- Three responsive pages: Home, Work, and About & Contact
- Eight filterable portfolio projects
- Interactive case-study panels
- Advanced page, scroll, hover, and modal animations
- Downloadable resume placeholder
- Validated contact form ready for an external form endpoint
- GitHub, LinkedIn, and portfolio links
- Custom project layouts and reusable content data
- SEO metadata and mobile-first responsive design
- Reduced-motion accessibility support

## Run Locally

```bash
npm install
npm run dev
```

Open the local address printed by Next.js.

## Customise Customer Content

- Profile, projects, experience, services, and skills: `data/portfolio.ts`
- Home page: `app/page.tsx`
- Work page and project interactions: `app/work/page.tsx` and `components/ProjectExplorer.tsx`
- About and contact page: `app/contact/page.tsx`
- Colours, layout, and motion styling: `app/globals.css`

Set `NEXT_PUBLIC_CONTACT_ENDPOINT` in `.env.local` to connect the enquiry form to Formspree or another compatible form endpoint. Without an endpoint, the site clearly operates in showcase mode.

## Deploy to Vercel

Use this Root Directory:

```text
showcase/showcase-portfolio
```

Vercel detects Next.js automatically. Replace the sample profile, social links, resume download, project links, and contact endpoint before using the template for a customer.
