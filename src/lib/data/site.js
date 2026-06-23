// ─── SITE CONTENT ──────────────────────────────────────────────
// Edit this file to update every piece of text on the site.
// No need to touch component files for copy changes.

export const meta = {
  name:        'Rena',
  tagline:     'We build websites that convert.',
  description: 'Forma Studio crafts high-performance websites for ambitious brands. Strategy, design, and code — all in one studio.',
  url:         'https://getrena.com',
};

export const nav = [
  { label: 'Services',     href: '#services' },
  { label: 'Work',         href: '#work' },
  { label: 'Pricing',      href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const hero = {
  eyebrow:  'Web Design & Development',
  headline: ['Websites that', 'turn visitors', 'into customers.'],
  sub:      'We design and build fast, beautiful websites that make your business grow. Strategy, design, and code — done for you.',
  cta:      { label: 'Start a project', href: '#pricing' },
  cta2:     { label: 'See our work',      href: '#work' },
};

export const services = [
  {
    icon:  '⬡',
    title: 'Smart Planning',
    desc:  'We design your site to turn visitors into customers.',
  },
  {
    icon:  '✦',
    title: 'Professional Design',
    desc:  'A clean, modern look that builds trust right away.',
  },
  {
    icon:  '</>',
    title: 'Fast & Reliable',
    desc:  'Loads quickly and works great on any device.',
  },
  {
    icon:  '✎',
    title: 'Copy That Sells',
    desc:  'We write your site\'s words so people understand you fast.',
  },
  {
    icon:  '⊞',
    title: 'Easy Lead Capture',
    desc:  'Forms and booking tools that bring in customers automatically.',
  },
  {
    icon:  '↗',
    title: 'Found on Google',
    desc:  'We help people find you when they search online.',
  },
];

export const portfolio = [
  {
    title:    'Pulse Health',
    category: 'Health Tech',
    result:   '+210% leads in 60 days',
    bg:       '#0d0d1a',
    accent:   '#7c6fff',
    lines:    ['#1e1e3a', '#2a2a50', '#1a1a30'],
  },
  {
    title:    'Arcline SaaS',
    category: 'B2B Software',
    result:   '3× trial signups',
    bg:       '#0a1a14',
    accent:   '#00d4aa',
    lines:    ['#0f2a20', '#153320', '#0a2018'],
  },
  {
    title:    'Maven Commerce',
    category: 'E-commerce',
    result:   '+85% revenue YoY',
    bg:       '#1a1206',
    accent:   '#f59e0b',
    lines:    ['#2a1e08', '#33250a', '#241a06'],
  },
  {
    title:    'Nord Finance',
    category: 'Fintech',
    result:   '40% lower bounce rate',
    bg:       '#08111e',
    accent:   '#60a5fa',
    lines:    ['#0f1e30', '#132438', '#0c1a28'],
  },
];

export const pricing = [
  {
    name:      'Tier 1',
    price:     '$200',
    per:       'monthly',
    desc:      'For founders and early-stage businesses ready to launch properly.',
    features:  ['Mobile Responsive', 'Good Security', '2 revisions per month', 'Hosting included'],
    cta:       'Get started',
    highlight: false,
  },
  {
    name:      'Tier 2',
    price:     '$500',
    per:       'monthly',
    desc:      'For growing teams that need a real conversion-focused marketing site.',
    features:  ['Contact Forms', 'Email Capture', 'Automated Followups'],
    cta:       'Get started',
    highlight: true,
  },
  {
    name:      'Tier 3',
    price:     '$1200',
    per:       'monthly',
    desc:      'Ongoing design & dev — we become your embedded digital team.',
    features:  ['Booking System', 'Dashboard', 'Email Campaign', 'Analytics'],
    cta:       "Let's talk",
    highlight: false,
  },
];

export const testimonials = [
  {
    quote:  'Forma delivered a site that doubled our demo bookings in the first month. The design is sharp and the code is bulletproof.',
    name:   'Sarah Kim',
    role:   'CEO, Arcline',
    initials: 'SK',
  },
  {
    quote:  'They understood our users better than we did. The new UX cut our support tickets in half overnight.',
    name:   'James Okafor',
    role:   'Product Lead, Pulse Health',
    initials: 'JO',
  },
  {
    quote:  'Professional, fast, and opinionated in the best way. We stopped guessing and started converting.',
    name:   'Mia Torres',
    role:   'Founder, Maven Commerce',
    initials: 'MT',
  },
];

export const cta = {
  headline: 'Ready to build something great?',
  sub:      'Tell us about your project. We reply within 24 hours.',
  btn:      'Start a project →',
  email:    'contact@getrena.com',
};
