// =============================================================
// SITE CONTENT — edit text, links and contact details here.
// Anything marked TODO is a placeholder you must replace.
// =============================================================

export const site = {
  name: 'Izuchukwu',
  role: 'Web developer and AI automation builder',
  location: 'Nigeria',
  availability: 'Available for new projects',

  hero: {
    pitch: [
      'I build websites and web apps that load fast, look sharp and are easy for your team to run.',
      'I also build the automation behind them: WhatsApp and voice bots, AI agents and n8n workflows that take repetitive work off your plate.',
    ],
  },

  email: 'izuchukwusibeudu@gmail.com',

  // Shown under the email; `phone` is for display, `whatsappNumber` is digits only for wa.me links
  phone: '+234 812 380 6870',
  whatsappNumber: '2348123806870',
  whatsappMessage: "Hi Izuchukwu, I'd like to talk about a project.",

  socials: [
    // TODO: add your GitHub and LinkedIn profile URLs, then uncomment these lines
    // { label: 'GitHub', href: 'https://github.com/yourname', icon: 'github' },
    // { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname', icon: 'linkedin' },
    { label: 'Instagram', handle: '@izu_d_technomad', href: 'https://www.instagram.com/izu_d_technomad', icon: 'instagram' },
    { label: 'TikTok', handle: '@izu_chukwu5', href: 'https://www.tiktok.com/@izu_chukwu5', icon: 'tiktok' },
  ],

  // TODO: paste your n8n webhook URL here when it's ready.
  // While empty, the contact form only validates and shows a success state (nothing is sent).
  contactWebhookUrl: '',

  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],

  about: {
    paragraphs: [
      "I'm Izuchukwu, a web developer and AI automation builder based in Nigeria. I work with clients remotely, from first conversation to launch and beyond.",
      'My work sits where websites meet operations. A clinic that needs patients reminded on time. A brand that wants WhatsApp orders handled at midnight. A manufacturer that needs a site its team can update. I design the system, build it, test it and keep it running.',
      'Long term, I am focused on AI and robotics in Nigeria: practical tools that solve local problems, built here.',
    ],
    facts: [
      { label: 'Based in', value: 'Nigeria' },
      { label: 'Works', value: 'Remotely with clients' },
      { label: 'Focus', value: 'Web + AI automation' },
      { label: 'Long term', value: 'AI and robotics' },
    ],
    // About section photo (4:5 ratio)
    portrait: '/images/portrait.webp',
    // Round photo beside "Hi, I'm" in the hero (square, face close-up)
    avatar: '/images/portrait-avatar.webp',
  },

  contact: {
    heading: "Let's build something that *works*.",
    line: 'Tell me what you need: a website, an automation or both. I will get back to you with next steps.',
    projectTypes: ['Website', 'Automation', 'Both', 'Other'],
  },
}

export const whatsappLink = () =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`
