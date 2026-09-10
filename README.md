# SAIMI 2027 — Lucerne

Site for the **Symposium on Artificial Intelligence in Medical Imaging (SAIMI) 2027**.

- **Date:** 6 July 2027
- **Venue:** University of Lucerne, Main Building, Frohburgstrasse 3, 6002 Lucerne
- **Site:** https://2027.saimi.ch *(not deployed yet)*

Created from `saimi-edition-template`.

## Status — what still needs filling in

Everything below lives in **`src/edition.ts`**; search for `TODO`.

- [ ] Room number for the venue
- [ ] Important dates (registration opens, submission opens/closes, decisions)
- [ ] CMT instance for SAIMI2027 → set `callForAbstracts.submissionUrl`
- [ ] Abstract submission deadline
- [ ] Keynote speakers (`program.keynotes`)
- [ ] Organising committee (`organisingCommittee`) — keep at least one organiser
      overlapping with the 2026 team
- [ ] Local support team (`localSupportTeam`)
- [ ] Registration text and link once registration opens
- [ ] Contact address (`contact.email`) — prefer a role address
- [ ] Sponsors and collaboration logos (`sponsors`); logos go in `src/assets/images/`
- [ ] Program booklet → `public/files/program_2027.pdf`, then set `program.bookletUrl`
- [ ] After the event: photo album link (`galleryUrl`), then freeze the repo

Sections with no content are hidden automatically — an empty list means that
section simply doesn't appear on the page or in the menu.

## Development

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build
```

## Deployment (not done yet)

1. Push to `main` in the `SAIMI-Switzerland` organisation.
2. Repo **Settings → Pages**: source *GitHub Actions*, custom domain `2027.saimi.ch`.
   (`public/CNAME` is already in place.)
3. DNS for `saimi.ch`: add `CNAME 2027 → saimi-switzerland.github.io`.

See `DEPLOYMENT.md` at the top of the `websites` folder for the full sequence
across all SAIMI sites.
