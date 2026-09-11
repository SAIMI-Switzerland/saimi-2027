/* -----------------------------------------------------------------------------
 * Header menu and footer, generated from src/edition.ts.
 * Menu entries whose section has no content are dropped automatically.
 * -------------------------------------------------------------------------- */
import { getPermalink } from './utils/permalinks';
import { edition } from './edition';

const programLinks = [
  ...(edition.program.bookletUrl
    ? [{ text: 'Program Booklet', href: getPermalink('/#program-program-booklet') }]
    : []),
  { text: 'Date and Location', href: getPermalink('/#program-date-location') },
  ...(edition.program.schedule.length
    ? [{ text: 'Schedule', href: getPermalink('/#program-schedule') }]
    : []),
  ...(edition.program.keynotes.length
    ? [{ text: 'Keynotes', href: getPermalink('/#program-keynote') }]
    : []),
];

const peopleLinks = [
  ...(edition.organisingCommittee.length
    ? [{ text: 'Organising Committee', href: getPermalink('/#oc') }]
    : []),
  ...(edition.steeringCommittee.length
    ? [{ text: 'Steering Committee', href: getPermalink('/#sc') }]
    : []),
  ...(edition.localSupportTeam.length
    ? [{ text: 'Local Support Team', href: getPermalink('/#lt') }]
    : []),
];

export const headerData = {
  links: [
    { text: 'About', href: getPermalink('/#about') },
    ...(edition.importantDates.length
      ? [{ text: 'Important Dates', href: getPermalink('/#importantdates') }]
      : []),
    ...(edition.callForAbstracts
      ? [{ text: 'Call for Abstracts', href: getPermalink('/#call') }]
      : []),
    { text: 'Program', links: programLinks },
    { text: 'Attend', href: getPermalink('/#attend') },
    ...(edition.galleryUrl ? [{ text: 'Gallery', href: getPermalink('/#gallery') }] : []),
    ...(peopleLinks.length ? [{ text: 'People', links: peopleLinks }] : []),
    { text: 'Contact', href: getPermalink('/#contact') },
  ],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: edition.links.linkedin },
  ],
  footNote: `
    SAIMI ${edition.year} · ${edition.date}, ${edition.city} · Part of the <a class="underline" href="${edition.links.hub}">SAIMI</a> symposium series.<br />
    Made by the organising committee based on the AstroWind template.
  `,
};
