/* =============================================================================
 * SAIMI edition configuration, THE ONLY FILE YOU NORMALLY NEED TO EDIT
 * =============================================================================
 *
 * Everything year-specific for one SAIMI edition lives here. The page layout in
 * src/pages/index.astro and the menu in src/navigation.ts are generated from it.
 *
 * Rules of thumb:
 *   - Leave a field as `null` or an empty array and its section disappears from
 *     the page and from the navigation menu. Build the site up as you go.
 *   - Search for "TODO" to find everything still to be filled in.
 *   - Photos and logos go in src/assets/images/. People photos are referenced by
 *     path string; sponsor logos must be `import`ed at the top of this file
 *     (the sponsor widget needs the image object to size SVGs correctly).
 *   - Files for download go in public/files/ and MUST be year-stamped, e.g.
 *     `program_2027.pdf`, never `program.pdf`.
 *   - Also update `src/config.yaml` once: `site.site`, `metadata.title` and
 *     `metadata.description`.
 * ---------------------------------------------------------------------------- */

import type { ImageMetadata } from 'astro';

// ── Sponsor / partner logos ──────────────────────────────────────────────────
// Add one import per logo, then reference it in `sponsors` below.
import logoMICCAI from '~/assets/images/MICCAI-Logo.svg';
// import logoExample from '~/assets/images/example.svg';

// ── Types ────────────────────────────────────────────────────────────────────

export interface Person {
  name: string;
  /** Affiliation for committee members, or a full bio for keynote speakers. */
  role?: string;
  /** e.g. '~/assets/images/jane.jpg', omit to fall back to a generic icon. */
  image?: string;
}

export interface DateItem {
  /** e.g. '30.04.2027' */
  date: string;
  /** e.g. 'Abstract submission deadline' */
  label: string;
}

export interface LogoRow {
  subtitle: string;
  /** 'xl' | 'lg' | 'md' | 'sm' | 'xs' */
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  images: { src: ImageMetadata; alt: string }[];
}

// ── The edition ──────────────────────────────────────────────────────────────

export const edition = {
  /** Four-digit year. Used for the site title and asset naming conventions. */
  year: 2027,

  /** Short human date shown in the hero, e.g. '6 July 2027'. */
  date: '6 July 2027',

  /** City shown in the hero, e.g. 'Lucerne'. */
  city: 'Lucerne',

  /** Full venue block for the Program section. HTML allowed (<br />). */
  // TODO: add the room number once it is confirmed.
  venue: '06.07.2027<br />University of Lucerne, Main Building<br />Frohburgstrasse 3, 6002 Lucerne',

  /** Canonical URL of this edition, e.g. 'https://2027.saimi.ch'. */
  url: 'https://2027.saimi.ch',

  /* ── Hero ──────────────────────────────────────────────────────────────── */
  hero: {
    // The banner for this edition. Each edition uses its own; drop the image in
    // src/assets/images/ and point at it here.
    image: '~/assets/images/banner.png',
    imageAlt: 'Chapel Bridge and Water Tower in Lucerne blended with brain MRI slices',
    /** Optional extra button, e.g. the program booklet. Set to null to hide. */
    primaryAction: null as { text: string; href: string; icon?: string } | null,
    // primaryAction: { text: 'Download Program', href: '/files/program_2027.pdf', icon: 'tabler:download' },
  },

  /* ── About ─────────────────────────────────────────────────────────────── */
  about: {
    /** The standing description of SAIMI. Rarely needs changing. */
    overview:
      'Advances in the accuracy and reliability of artificial intelligence (AI) have substantially accelerated its adoption in healthcare. One particularly promising application area is the AI-assisted analysis of MRI, CT, X-ray, and other medical imaging modalities, which, under suitable conditions, can lead to significant savings in time and resources. At the same time, challenges related to transparency, interpretability and model reliability remain critical barriers to widespread clinical deployment. Furthermore, heterogeneity in image acquisition strategies and modalities across institutions and hospitals complicates both standardized evaluation and practical implementation.<br /><br />This symposium aims to bring together research groups across Switzerland working on AI for medical imaging to present recent advances, exchange new ideas and discuss both institution-specific and overarching challenges, as well as potential future solutions. Early-career researchers and students are encouraged to present their work through oral presentations or poster sessions and to engage with peers from across the Swiss research community.<br /><br />The program will be complemented by keynote talks from experienced researchers and representatives from industry and clinical practice, who will provide perspectives on the current state of the field and emerging future directions.',
    /** One line about this edition's format. */
    format: 'This symposium will be held as an in-person event in Lucerne.',
  },

  /* ── Important dates ───────────────────────────────────────────────────── */
  /** Empty array hides the section. Typical shape based on past editions: */
  importantDates: [
    // TODO: confirm the 2027 dates, then uncomment. The 2026 rhythm was:
    // registration late Feb, submission opens mid-March, deadline end of April,
    // decisions mid-May, event in June/July.
    // { date: 'TODO', label: 'Opening registration' },
    // { date: 'TODO', label: 'Opening abstract submission' },
    // { date: 'TODO', label: 'Abstract submission deadline' },
    // { date: 'TODO', label: 'Final decisions' },
    { date: '06.07.2027', label: 'Event day' },
  ] as DateItem[],

  /* ── Call for abstracts ────────────────────────────────────────────────── */
  /** Set to null to hide the whole section (e.g. before the CfA opens). */
  callForAbstracts: {
    scopeIntro:
      'The goal of SAIMI is to provide the opportunity to meet and discuss research ideas with the local MICCAI/MIDL community around Switzerland. To this end, we invite <strong>short abstract submissions on the topics related to AI for medical image analysis</strong>. Topics of interests include (but are not limited to):',
    topics: [
      'Advancements to predictive models for medical imaging (e.g. segmentation, classification etc.)',
      'Multi-modal models',
      'Trustworthy AI and fairness',
      'Generalizable AI in medical imaging',
      'AI model monitoring',
      'Image synthesis and generative modelling',
      'Clinical translation',
    ],
    policy:
      'This symposium is <strong>non-archival</strong>, and we <strong>welcome submissions of preliminary results</strong> (work in progress), as well as <strong>work under submission or recently published work</strong>. Submissions will be reviewed in a <strong>double-blind manner</strong>. The aim of the review process is to determine (1) fit within the SAIMI scope, (2) quality of the abstract, (3) guide poster and spotlight talks selection.',
    submissionFormat:
      'We invite you to submit a <strong>1-page abstract</strong> describing your work, following this structure: 1) Objective of the study, 2) Motivation &amp; background, 3) Short description of methods, 4) Summary of main results, 5) Conclusion.<br /><br />Please submit your abstract as a .pdf file, in Arial or Times New Roman, minimum 10pt font size. Figures or tables are allowed. Author names, affiliations and acknowledgements, as well as any obvious phrasings or clues that can identify authors must be removed to ensure anonymity.<br /><br />Note that the 1 page limit refers only to the main content. Including references and acknowledgements the submission may exceed 1 page.',
    /** New CMT instance per edition: https://cmt3.research.microsoft.com/SAIMI<YEAR> */
    // TODO: request a new CMT instance for SAIMI2027, then set this to
    // 'https://cmt3.research.microsoft.com/SAIMI2027'
    submissionUrl: null as string | null,
    /** e.g. '30.04.2027 at 23:59 CET'. */
    // TODO: set once the 2027 timeline is fixed.
    submissionDeadline: 'to be announced',
    /** Set true once the deadline has passed. */
    submissionClosed: false,
    presentation:
      "All accepted abstracts will be presented as a poster during the symposium day. Additionally, we will select a number of papers for oral presentation based on the reviewers' suggestions.",
  },

  /* ── Program ───────────────────────────────────────────────────────────── */
  program: {
    /** Year-stamped path in public/files/, or null before the booklet exists. */
    bookletUrl: null as string | null,
    // bookletUrl: '/files/program_2027.pdf',
    bookletText:
      'A detailed program is available for download, including time slots for all keynotes and lightning talks, assigned poster sessions for all accepted abstracts and further details about the panel discussion.',
    /** Empty array hides the schedule. */
    schedule: [] as string[],
    // schedule: ['08:30-09:15 Registration', '09:15-09:30 Welcome Words', ...],
    /** Keynote speakers. `role` holds the full bio. */
    keynotes: [] as Person[],
  },

  /* ── Attend ────────────────────────────────────────────────────────────── */
  attend: {
    // TODO: replace once registration opens.
    registration: 'Registration is not open yet. Details will be announced here.',
    prices: 'Attending the event is free of charge. However, registration is mandatory.',
  },

  /* ── People ────────────────────────────────────────────────────────────── */
  /** The local team running this edition. */
  organisingCommittee: [
    // TODO: 2027 organising committee. Per the SAIMI handover policy, at least
    // one organiser should overlap with the previous edition.
    // { name: 'Name', role: 'University of Lucerne, Switzerland', image: '~/assets/images/name.jpg' },
  ] as Person[],

  /**
   * The permanent SAIMI steering committee. Check saimi.ch for the current
   * membership before each edition and copy it here.
   */
  steeringCommittee: [
    { name: 'Christian F. Baumgartner', role: 'University of Lucerne, Switzerland' },
    {
      name: 'Meritxell Bach Cuadra',
      role: 'CIBM Center for Biomedical Imaging, Lausanne University (UNIL), Radiology Department (CHUV)',
    },
    { name: 'Ece Özkan Elsen', role: 'University of Basel, Switzerland' },
    { name: 'Lisa M. Koch', role: 'University of Bern, Switzerland' },
    { name: 'Ender Konukoglu', role: 'ETH Zürich, Switzerland' },
    { name: 'Henning Müller', role: 'HES-SO Valais, Switzerland' },
    { name: 'Mauricio Reyes', role: 'University of Bern, Switzerland' },
  ] as Person[],

  /** Helpers on the day, names only. */
  localSupportTeam: [] as Person[],

  /* ── Gallery ───────────────────────────────────────────────────────────── */
  /** Link to the photo album, added after the event. Null hides the section. */
  galleryUrl: null as string | null,

  /* ── Contact ───────────────────────────────────────────────────────────── */
  contact: {
    heading: 'Are you interested in sponsoring our event? Any questions? Please feel free to reach out!',
    /** Prefer a role address over a personal one where possible. */
    // TODO: replace with the 2027 organising committee's contact address.
    email: 'Contact details for SAIMI 2027 will be published here shortly. In the meantime see <a href="https://saimi.ch" class="text-primary underline">saimi.ch</a>.',
  },

  /* ── Sponsors ──────────────────────────────────────────────────────────── */
  /** Each row renders only if it has images. Drop rows you don't need. */
  sponsors: [
    // { subtitle: 'In collaboration with', size: 'lg', images: [{ src: logoExample, alt: 'Example' }] },
    // { subtitle: 'Gold sponsors', size: 'lg', images: [] },
    // { subtitle: 'Silver sponsors', size: 'lg', images: [] },
    { subtitle: 'Endorsed by', size: 'sm', images: [{ src: logoMICCAI, alt: 'MICCAI' }] },
  ] as LogoRow[],

  /* ── Links ─────────────────────────────────────────────────────────────── */
  links: {
    hub: 'https://saimi.ch',
    linkedin:
      'https://www.linkedin.com/company/symposium-on-artificial-intelligence-in-medical-imaging',
  },
};

export default edition;
