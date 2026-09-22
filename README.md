# One Way Bike Tours

One Way Bike Tours is a Next.js frontend for exploring curated one-way and round-trip cycling routes.

## Current architecture

- Next.js 14 App Router with TypeScript
- Tailwind CSS 3 and Framer Motion
- Static tour catalogue in `lib/tours.ts`
- Shared UI in `components/`
- Pages in `app/`: home, tours, tour details, onboarding, login, and register
- Supabase authentication with cookie-based sessions and a protected account page

Login and registration use Supabase Auth. See [AUTH-SETUP.md](AUTH-SETUP.md) for dashboard configuration and testing. Tour and booking data remain demo data.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate

```bash
npm run typecheck
npm run build
```

## Adding a backend later

Keep the tour catalogue contract aligned with `lib/tours.ts`. A future booking backend must validate users, availability and prices on the server and protect private records with database access policies. Authentication alone does not turn the current demo bookings into persistent reservations.
