import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'About',
    pathname: '/#details',
  },
  {
    label: 'Gear & Tools',
    pathname: '/uses',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'Email',
    url: `mailto:${config.email}`,
    icon: 'mail',
  },
  {
    label: 'Phone',
    url: `tel:${config.phone}`,
    icon: 'phone',
  },
];
