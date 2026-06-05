import { getAsset, getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Problem',
      href: getPermalink('/#problem'),
    },
    {
      text: 'How it works',
      href: getPermalink('/#how-it-works'),
    },
    {
      text: 'Industries',
      href: getPermalink('/#industries'),
    },
    {
      text: 'ROI',
      href: getPermalink('/#results'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/#faq'),
    },
  ],
  actions: [
    {
      text: 'Book a Demo',
      variant: 'primary' as const,
      href: getPermalink('https://calendly.com/abdulla-aislepal/30min'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'How it works', href: getPermalink('/#how-it-works') },
        { text: 'Built for', href: getPermalink('/#industries') },
        { text: 'ROI', href: getPermalink('/#results') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'FAQ', href: getPermalink('/#faq') },
        { text: 'Demo', href: 'https://calendly.com/abdulla-aislepal/30min' },
        { text: 'Pilot program', href: 'https://calendly.com/abdulla-aislepal/30min' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: '#' },
    { text: 'Privacy', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `© 2026 AislePal. All rights reserved. Built for physical retail.`,
};
