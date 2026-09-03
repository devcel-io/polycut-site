# PolyCut Site

Landing page for PolyCut, an iPad-first annotation tool for drawing labels and exporting training datasets.

## Local setup

Install dependencies:

```bash
npm install
```

Create `.env.local` with your Supabase project values:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-or-anon-key
```

Create the waitlist table by running the SQL in `supabase/waitlist.sql` in the Supabase SQL editor.

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Notes

The landing page submits email addresses to the `public.waitlist` table through a server action in `app/actions.ts`.

Brand assets live in `public/polycut-logo-gradient.png` and `public/og.png`.

Vercel Web Analytics is enabled in `app/layout.tsx`, and successful waitlist submissions emit a `waitlist_submitted` event without sending email addresses.
