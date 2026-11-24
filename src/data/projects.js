// =============================================================
// PROJECTS: one entry per project. Used by the home grid AND
// the detail pages at /projects/:slug.
//
// Images: leave `cover` / `gallery` empty to show generated
// placeholders. To use real screenshots, drop files into
// /public/images and set e.g. cover: '/images/zitelle-cover.webp'
// and gallery: [{ src: '/images/zitelle-1.webp', alt: 'Homepage', width: 1600, height: 800 }].
//
// Links: set `liveUrl` / `sourceUrl` when you have them. The
// buttons only appear when a value is set.
//
// `motif` picks the placeholder artwork: 'flow' | 'web' | 'map'
// `hue` tints the placeholder (0-360).
//
// `hidden: true` keeps a project off the site (no card, no page).
// Hidden entries still ship in the site's code, so keep anything
// confidential out of this file: use /drafts (never published).
// =============================================================

const allProjects = [
  {
    slug: 'healthcare-patient-call-system',
    title: 'Healthcare Patient Call System',
    category: 'AI and Automation',
    summary:
      'Automated voice calls that remind patients of their clinic services across three primary health centres.',
    overview:
      'An automated outbound calling system that reminds patients about their clinic services across three primary health centres, with recorded audio playback and a log of every call.',
    problem:
      'Calling patients one by one takes staff time, and it is hard to keep track of who has been reminded. The centres needed reminders to go out reliably without adding to the workload.',
    built: [
      'An n8n workflow that runs the reminder calls for each health centre',
      "Voice calls through Africa's Talking that play a recorded reminder message",
      'Audio files hosted on Cloudinary for reliable playback',
      'Call logging in Google Sheets so staff can see the record of each call',
      'Hosted on Railway so the workflow runs without a local machine',
    ],
    stack: ['n8n', 'Railway', "Africa's Talking", 'Cloudinary', 'Google Sheets'],
    motif: 'flow',
    hue: 152,
    cover: '/images/healthcare-patient-call-system-cover.webp',
    gallery: [],
    liveUrl: '',
    sourceUrl: '',
  },
  {
    slug: 'whatsapp-ai-sales-bot',
    title: 'WhatsApp AI Sales Bot',
    category: 'AI and Automation',
    summary:
      'An AI sales assistant on WhatsApp for a perfume brand that answers customers, takes orders and hands over to a human.',
    overview:
      'An AI sales assistant for a perfume brand that lives on WhatsApp. It answers customer questions, takes orders and passes the conversation to a person on the team when needed.',
    problem:
      'Customers message on WhatsApp at all hours and expect quick answers. Replying by hand to every question and order is slow, and conversations get missed.',
    built: [
      'An n8n workflow connected to the Meta WhatsApp API to receive and send messages',
      'An AI assistant through OpenRouter that answers product questions',
      'Order taking inside the WhatsApp conversation',
      'Data stored with MySQL and Redis, with Google Sheets for the team',
      'A human handover path for conversations the bot should not handle alone',
    ],
    stack: ['n8n', 'Meta WhatsApp API', 'OpenRouter', 'MySQL', 'Redis', 'Google Sheets'],
    motif: 'flow',
    hue: 140,
    cover: '/images/whatsapp-ai-sales-bot-cover.webp',
    gallery: [],
    liveUrl: '',
    sourceUrl: '',
  },
  {
    slug: 'zitelle-group-website',
    title: 'Zitelle Group Website',
    category: 'Web Development',
    summary:
      'Website for a Nigerian manufacturing group with oil, soap, plywood and packaging divisions, plus a blog and admin panel.',
    overview:
      'A website for a Nigerian manufacturing group with oil, soap, plywood and packaging divisions. It presents each division clearly and includes a blog and an admin panel for the team.',
    problem:
      'A group with several divisions needs one site that explains each business clearly, and a way for the team to publish updates without a developer.',
    built: [
      'A React and Tailwind frontend with a section for each division',
      'A blog so the group can publish news and updates',
      'An admin panel backed by a Node and Express API',
      'A PostgreSQL database for content',
      'Deployed on Vercel and Railway',
    ],
    stack: ['React', 'Tailwind', 'Node', 'Express', 'PostgreSQL', 'Railway', 'Vercel'],
    motif: 'web',
    hue: 32,
    cover: '/images/zitelle-group-website-cover.webp',
    gallery: [
      { src: '/images/zitelle-group-website-1.webp', alt: 'About page with the vision, mission and values', width: 1600, height: 782 },
      { src: '/images/zitelle-group-website-2.webp', alt: 'Divisions section: oil refinery, soap, packaging and wood', width: 1600, height: 777 },
    ],
    liveUrl: 'https://zitellegroup.com',
    sourceUrl: '',
  },
  {
    slug: 'apex-college-of-nursing-sciences',
    title: 'Apex College of Nursing Sciences Website',
    category: 'Web Development',
    summary:
      'A complete institutional website with events, a gallery lightbox and contact, plus a UX audit and redesign blueprint.',
    overview:
      'A complete multi-section website for a nursing college, with events, a gallery with a lightbox and a contact section. The work also included a UX audit and a redesign blueprint.',
    problem:
      'An institution needs a website that gives prospective students and parents the information they look for, presented clearly on any device.',
    built: [
      'A UX audit and redesign blueprint to plan structure and content',
      'A multi-section site built with React and Tailwind',
      'An events section and a gallery with a lightbox',
      'A contact section',
      'Page routing with React Router',
    ],
    stack: ['React', 'Tailwind', 'React Router'],
    motif: 'web',
    hue: 205,
    cover: '/images/apex-college-of-nursing-sciences-cover.webp',
    gallery: [
      { src: '/images/apex-college-of-nursing-sciences-1.webp', alt: 'Why Apex College section with programme highlights', width: 1600, height: 740 },
      { src: '/images/apex-college-of-nursing-sciences-2.webp', alt: 'Photo gallery of students and facilities', width: 1600, height: 842 },
    ],
    liveUrl: 'https://aconsi.edu.ng',
    sourceUrl: '',
  },
  {
    slug: 'cohelp-initiative',
    title: 'CoHelp Initiative NGO Website',
    category: 'Web Development',
    summary: 'NGO website with online donations and a volunteer signup flow.',
    overview: 'A website for an NGO that lets supporters donate online and sign up as volunteers.',
    problem:
      'An NGO needs a simple way for people to give and to get involved, without paperwork or back-and-forth messages.',
    built: [
      'A fast React and Vite site styled with Tailwind',
      'Online donations through Paystack',
      'A volunteer signup flow',
      'Google Sheets integration for the team',
    ],
    stack: ['React', 'Vite', 'Tailwind', 'Paystack', 'Google Sheets'],
    motif: 'web',
    hue: 12,
    cover: '/images/cohelp-initiative-cover.webp',
    gallery: [
      { src: '/images/cohelp-initiative-1.webp', alt: 'About the initiative section', width: 1600, height: 707 },
      { src: '/images/cohelp-initiative-2.webp', alt: 'Core focus areas: health education, counselling and outreach', width: 1600, height: 718 },
    ],
    liveUrl: 'https://www.cohelpinitiative.com',
    sourceUrl: '',
  },
  {
    // TODO (Lagos Stride): confirm the stack.
    slug: 'lagos-stride',
    title: 'Lagos Stride',
    category: 'Web Development',
    summary: 'A bold sneaker landing page where each colourway restyles the whole page, with ordering on WhatsApp.',
    overview:
      'A landing page for a Lagos sneaker brand. Each shoe comes in several colourways, and picking one restyles the whole page to match. Customers order straight on WhatsApp.',
    problem:
      'A small sneaker brand needs a page that makes the product look premium and turns interest into orders quickly, without the cost of a full online store.',
    built: [
      'A bold, product-first layout with oversized type',
      'A colourway switcher (Ember, Onyx, Moss) that changes the shoe and the page theme together',
      'An "Order on WhatsApp" button so customers can buy in one tap',
      'A responsive build deployed on Vercel',
    ],
    stack: ['React', 'Tailwind', 'Vercel'],
    motif: 'web',
    hue: 48,
    cover: '/images/lagos-stride-cover.webp',
    gallery: [
      { src: '/images/lagos-stride-1.webp', alt: 'Onyx colourway on an orange theme', width: 1600, height: 769 },
      { src: '/images/lagos-stride-2.webp', alt: 'Moss colourway on a light theme', width: 1600, height: 773 },
    ],
    liveUrl: 'https://stride-lagos.vercel.app',
    sourceUrl: '',
  },
  {
    // TODO (Hospital Management System): add the real features and stack when ready.
    slug: 'hospital-management-system',
    title: 'Hospital Management System',
    category: 'Web Development',
    summary: 'A web-based system for managing hospital operations.',
    overview: 'A web-based system for managing hospital operations in one place.',
    problem:
      'Hospital operations involve many records and moving parts. Keeping them on paper or in scattered files makes work slower and harder to track.',
    built: ['A web app for managing hospital operations', 'A structured place to store and find records'],
    stack: ['Web app'],
    motif: 'web',
    hue: 180,
    cover: '',
    gallery: [],
    liveUrl: '',
    sourceUrl: '',
  },
]

export const projects = allProjects.filter((p) => !p.hidden)

export const getProject = (slug) => projects.find((p) => p.slug === slug)

// Color for each category (see tone tokens in src/index.css)
export const categoryTone = {
  'AI and Automation': 'lime',
  'Web Development': 'sky',
  'Web and Data': 'amber',
}
export const toneFor = (category) => categoryTone[category] ?? 'lime'
