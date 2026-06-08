import { getAsset, getPermalink } from './utils/permalinks';

export const contactLink = 'https://calendly.com/abdulla-aislepal/30min'

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
      text: 'Features',
      href: getPermalink('/#features'),
    },
    {
      text: 'Deployment',
      href: getPermalink('/#setup'),
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
      href: getPermalink(contactLink),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        {
          text: 'How it works',
          href: getPermalink('/#how-it-works'),
        },
        {
          text: 'Features',
          href: getPermalink('/#features'),
        },
        {
          text: 'Deployment',
          href: getPermalink('/#setup'),
        },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy', href: getPermalink('/privacy') },
        { text: 'LinkedIn', href: 'https://www.linkedin.com/company/aislepal' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'FAQ', href: getPermalink('/#faq') },
        { text: 'Demo', href: contactLink },
        { text: 'Pilot program', href: contactLink },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/aislepal'},
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `© 2026 AislePal. All rights reserved. Built for physical retail.`,
};
