module.exports = {
  email: 'zubrah.ayyub@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Zubrah',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/zubrah_',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/zubrahboy',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/zuberi-a-msemo-b9688691/',
    },
    {
      name: 'Codepen',
      url: '#',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 180, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.845, 0.055, 0.455, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
