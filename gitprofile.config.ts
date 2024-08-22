// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'xinyuezhangtud', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.h
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Integration Project of a Reaction Pendulum',
          description:
            'During my master in Control Engineering, after succesfully completing the obligatory theoretical courses we were tasked to intagrate the knowledge gained into a system. We started with modelling the physical system of a reaction wheel pendulum after which we used grey box system identification for the parameters. Some of the states were immeasurable and to solve that we designed and tuned a Luenberger observer. We implemented both an LQR and MPC controller with constraints that is able to stabilize the reaction wheel pendulum about the upwards unstable equilibrium and reject certain disturbances.',
          imageUrl:
            'https://i.imgur.com/YIhIuWk.jpg',
          // link: 'https://example.com',
        },
        {
          title: 'A model predictive control approach to stabilize a Pendubot',
          description:
            'During my master in Control Engineering I wrote a paper about a linear model predictive control (MPC) approach for the Pendubot system. First we derived the nonlinear system dynamics of the linearized around the upwards equilibrium points. Various MPC controllers were then implemented among which, state-feedback regulation MPC and output-feedback MPC with disturbance rejection. By making certain strategic assumptions, asymptotic stability can be guaranteed for the origin of the closed-loop linearized system. Numerical simulations are presented demonstrating the performance of MPC under different conditions.',
          imageUrl:
            'https://i.imgur.com/HS5NqT3.png',
          // link: 'https://example.com',
        },
        {
          title: 'Coverage optimization by Mobile Robots with Non-identical Maximum Speeds',
          description:
            'At the end of my bachelor in Mechanical Engineering, we wrote a thesis and presented a control algorithm for the placement of multiple robots with non-identical maximum speeds across a given domain, guided by a probability density function signifying the weight of each point in this domain. The goal was to minimize the time it takes for the set of robots to collectively cover all points in the domain. Performance evaluation shows that our non-identical maximum speeds algorithm outperforms Lloyd\'s algorithm. We also implemeneted a heuristic to derive starting positions for the robots, resulting in an improved expected response time squared.',
          imageUrl:
            'https://i.imgur.com/UoneWfY.png',
          // link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Xinyue Zhang',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'xin-yue-zhang-552b0b234',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'xinyooxyz@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1ULdXrC9KZ4jMdsUoTaasfG0uE9UY9kCq/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Matlab',
    'Simulink',
    'Git',
  ],
  experiences: [
    {
      company: 'X TU Delft',
      position: 'Host',
      from: 'May 2024',
      to: 'present',
      companyLink: 'https://www.tudelft.nl/x',
    },
    {
      company: 'Apple',
      position: 'Technical Specialist',
      from: 'February 2023',
      to: 'September 2023',
      companyLink: 'https://www.apple.com',
    },
    {
      company: 'Apple',
      position: 'Specialist',
      from: 'July 2022',
      to: 'February 2023',
      companyLink: 'https://www.apple.com',
    },
  ],
  certifications: [
    {
      name: '3D CAD Solidworks',
      body: 'Associate level',
      year: 'November 2019',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Delft University of Technology',
      degree: 'Msc Systems and Control Engineering',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'Delft University of Technology',
      degree: 'Bsc Mechanical Engineering',
      from: '2019',
      to: '2023',
    },
  ],
  // publications: [
  //   // {
  //   // //   title: 'Publication Title',
  //   // //   conferenceName: '',
  //   // //   journalName: 'Journal Name',
  //   // //   authors: 'John Doe, Jane Smith',
  //   // //   link: 'https://example.com',
  //   // //   description:
  //   // //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   // // },
  //   // {
  //   //   // title: 'Publication Title',
  //   //   // conferenceName: 'Conference Name',
  //   //   // journalName: '',
  //   //   // authors: 'John Doe, Jane Smith',
  //   //   // link: 'https://example.com',
  //   //   // description:
  //   //   //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   // },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
