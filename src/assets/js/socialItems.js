import React from 'react';
import Linkedin from 'assets/svg/linkedin.svg';
import Twitter from 'assets/svg/twitter.svg';
import Globe from 'assets/svg/globe.svg';
import Github from 'assets/svg/github.svg';
// import linkedin from 'assets/svg/linkedin.svg';
// import twitter from 'assets/svg/twitter.svg';
// import globe from 'assets/svg/globe.svg';
// import github from 'assets/svg/github.svg';
// const github = require('assets/svg/github.svg');


export default [
  {
    id: 1,
    label: 'GitHub',
    faIcon: 'fab fa-github',
    localFaIcon: <Github
      width={35}
      height={35}
      className="github-logo"
    />,
    url: 'https://github.com/mfakhrusy',
  },
  {
    id: 2,
    label: 'Twitter',
    faIcon: 'fab fa-twitter',
    localFaIcon: <Twitter
      width={35}
      height={35}
      className="github-logo"
    />,
    url: 'https://twitter.com/v8areu',
  },
  {
    id: 3,
    label: 'Linkedin',
    faIcon: 'fab fa-linkedin',
    localFaIcon: <Linkedin
      width={35}
      height={35}
      className="github-logo"
    />,
    url: 'https://www.linkedin.com/in/mfakhrusy/',
  },
  {
    id: 4,
    label: 'Website',
    faIcon: 'fas fa-globe',
    localFaIcon: <Globe
      width={35}
      height={35}
      className="github-logo"
    />,
    url: 'https://mfakhrusy.github.io',
  },
];
