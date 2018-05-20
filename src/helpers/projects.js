const personalProjects = [
  {
    projID: 'turing-fridays',
    title: 'Turing-Fridays',
    logoSrc: './images/turing-fridays.png',
    description:
      'An event management app for the Turing School built in React with Firebase',
    githubLink: 'https://github.com/jeff-duke/turing-fridays',
    deployedLink: 'https://turing-fridays.firebaseapp.com/',
    type: 'personal',
  },
  {
    projID: 'radicchio',
    title: 'Radicchio',
    logoSrc: './images/radicchio-thumb.png',
    description:
      'An IoT automated garden watering system. Built using Node/Express for the back-end and react for the front-end',
    githubLink: 'https://github.com/Jeff-Duke/radicchio',
    deployedLink: '',
    type: 'personal',
  },
  {
    projID: 'turingVue',
    title: 'Turing Vue',
    logoSrc: './images/vue-js-logo.png',
    description:
      'A collection of projects from the Turing school, built in Vue.js as a learning resource',
    githubLink: 'https://github.com/Jeff-Duke/Turing-Vue',
    deployedLink: '',
    type: 'personal',
  },
  {
    projID: 'shoot-the-breeze',
    title: 'Shoot The Breeze',
    logoSrc: './images/shoot-the-breeze-thumb.png',
    description: 'A realtime chat app, built in React, utilizing Firebase',
    githubLink: 'https://github.com/Jeff-Duke/shoot-the-breeze',
    deployedLink: 'https://shoot-the-breeze-9f4d8.firebaseapp.com',
    type: 'personal',
  },
  {
    projID: 'gametime',
    title: 'Blanched Almonoid',
    logoSrc: './images/game-time-thumb.png',
    description:
      'A browser-based, breakout-style game, made with Javascript and HTML canvas',
    githubLink: 'https://github.com/Casey1449/Blanched-Almonoid',
    deployedLink: 'https://casey1449.github.io/Blanched-Almonoid/',
    type: 'personal',
  },
];

const ossProjects = [
  {
    projID: 'tessel',
    title: 'Tessel.io',
    logoSrc: './images/tessel2.png',
    description: 'Updated documentation for this project',
    githubLink: 'https://github.com/tessel/t2-docs',
    deployedLink: '',
    type: 'oss',
  },
  {
    projID: 'approachable',
    title: 'Approachable-io Software Interview Questions',
    logoSrc: './images/approachable-open-source-logo.png',
    description:
      'Contributed new question and method for displaying solutions for Hacktoberfest 2017',
    githubLink: 'https://github.com/approachable-io/software-interview-prep',
    deployedLink: '',
    type: 'oss',
  },
  {
    projID: 'electron-audio',
    title: 'Electron Audio Conversion',
    logoSrc: './images/npm-logo.png',
    description:
      'An NPM package I built with another developer for converting audio files to DataURI',
    githubLink: 'https://github.com/Jeff-Duke/electron-audio-conversion',
    deployedLink: 'https://www.npmjs.com/package/electron-audio-conversion',
    type: 'personal',
  },
];

module.exports = { personalProjects, ossProjects };
