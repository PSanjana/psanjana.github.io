# Sanjana Paniyadi — Portfolio

Personal portfolio, built as a React + TypeScript + Vite single-page app with
Tailwind CSS, Framer Motion, and React Router.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS (theme tokens in `src/styles/globals.css`)
- Framer Motion for scroll/entrance animation
- React Router for the home page and `/projects/:id` case-study routes
- Lucide React for icons

## Development

```bash
npm install
npm run dev      # local dev server
npm run build     # type-check + production build to dist/
npm run lint
```

## Content

Portfolio content (projects, experience, skills, social links) lives in
`src/data/*.ts` as typed objects, rendered by the section components in
`src/sections/`. Update those files to change copy — no JSX edits needed for
new projects or roles.

To add a project case study image, drop it in `public/images/` and reference
it from `src/data/projects.ts`.

## Resume

The Resume button links to `/resume.pdf`. Add the actual PDF to `public/resume.pdf`
to make the link resolve.

## Deployment

`.github/workflows/deploy.yml` builds the app and publishes `dist/` to GitHub
Pages via GitHub Actions on every push to `main`. In the repo's **Settings →
Pages**, set the source to **GitHub Actions**.

## Legacy site

The previous HTML5 UP–based static site is preserved under `legacy/` for
reference.
