# Supabase authentication

The app keeps Next.js 14 and React 18. Login and registration use Supabase Auth through server routes and cookies. `/account` validates the user on the server and provides logout. Booking and tour data remain demo data.

## Configuration

Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in `.env.local`, which is ignored by Git. No service-role key or custom password table is required.

In Supabase Authentication URL Configuration, set Site URL to `http://localhost:3000` and add `http://localhost:3000/auth/callback` to Redirect URLs. Adjust both if using another port. Keep email confirmation enabled and keep the default confirmation email link (`{{ .ConfirmationURL }}`). Open the confirmation link in the same browser used to register: the PKCE verifier is stored in a cookie. Production requires equivalent HTTPS URLs.

## Manual verification

- Register using an email inbox you can access; follow the confirmation link.
- Refresh `/account` and verify you remain signed in.
- Log out and verify direct access to `/account` redirects to login.
- Log in again; verify incorrect passwords are rejected.
- Test invalid email, missing fields, passwords shorter than eight characters and mismatched passwords.
- Existing-account registration can deliberately show the same confirmation message to avoid revealing account existence.

Supabase controls password rules, email sending limits and authentication rate limits. A real confirmation email test requires access to the user's inbox and dashboard configuration.

The original Next.js/PostCSS audit findings remain unresolved because framework versions were retained at the user's request. Resolve them before public deployment. Any future private database tables also need appropriate grants and Row Level Security policies.
